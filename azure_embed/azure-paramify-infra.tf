###########################################################################
## Resource Group
###########################################################################
resource "azurerm_resource_group" "rg" {
  location = var.region
  name     = "${var.name_prefix}-rg"

  tags = {
    environment = var.name_prefix
  }
}

###########################################################################
## Postgres Database
###########################################################################
resource "azurerm_postgresql_flexible_server" "db" {
  name                   = "${var.name_prefix}-db"
  resource_group_name    = azurerm_resource_group.rg.name
  location               = azurerm_resource_group.rg.location
  version                = "15"
  administrator_login    = "paramify"
  administrator_password = var.db_password
  zone                   = "1"
  storage_mb             = 32768
  sku_name               = "GP_Standard_D2s_v3"
  backup_retention_days  = 7

  tags = {
    environment = var.name_prefix
  }
}

resource "azurerm_postgresql_flexible_server_database" "db" {
  name      = "paramify"
  server_id = azurerm_postgresql_flexible_server.db.id
  charset   = "UTF8"
  collation = "en_US.utf8" # en-US
}

resource "azurerm_postgresql_flexible_server_firewall_rule" "db_fw" {
  name             = "${var.name_prefix}-db-fw"
  server_id        = azurerm_postgresql_flexible_server.db.id
  start_ip_address = azurerm_linux_virtual_machine.vm.public_ip_address
  end_ip_address   = azurerm_linux_virtual_machine.vm.public_ip_address
}

###########################################################################
## Storage Account/Container and Role Assignment
###########################################################################
resource "azurerm_storage_account" "storage" {
  name                     = replace(var.name_prefix, "/[^a-z0-9]*/", "")
  resource_group_name      = azurerm_resource_group.rg.name
  location                 = var.region
  account_kind             = "StorageV2"
  account_tier             = "Standard"
  account_replication_type = "LRS"

  tags = {
    environment = var.name_prefix
  }
}

resource "azurerm_storage_container" "container" {
  name                  = "${var.name_prefix}-container"
  storage_account_name  = azurerm_storage_account.storage.name
  container_access_type = "private"
}

resource "azurerm_role_assignment" "vm_blob_contributor" {
  scope                = azurerm_storage_account.storage.id
  role_definition_name = "Storage Blob Data Contributor"
  principal_id         = azurerm_linux_virtual_machine.vm.identity[0].principal_id
}

###########################################################################
## SSH Keys
###########################################################################
resource "azapi_resource_action" "ssh_public_key_gen" {
  type        = "Microsoft.Compute/sshPublicKeys@2022-11-01"
  resource_id = azapi_resource.ssh_public_key.id
  action      = "generateKeyPair"
  method      = "POST"

  response_export_values = ["publicKey", "privateKey"]
}

resource "azapi_resource" "ssh_public_key" {
  type      = "Microsoft.Compute/sshPublicKeys@2022-11-01"
  name      = "${var.name_prefix}-ssh-key"
  location  = azurerm_resource_group.rg.location
  parent_id = azurerm_resource_group.rg.id
}

###########################################################################
## Network
###########################################################################
resource "azurerm_virtual_network" "vnet" {
  name                = "${var.name_prefix}-vnet"
  address_space       = ["10.10.0.0/16"]
  location            = azurerm_resource_group.rg.location
  resource_group_name = azurerm_resource_group.rg.name
}

resource "azurerm_subnet" "subnet" {
  name                 = "${var.name_prefix}-subnet"
  resource_group_name  = azurerm_resource_group.rg.name
  virtual_network_name = azurerm_virtual_network.vnet.name
  address_prefixes     = ["10.10.1.0/24"]
  service_endpoints    = ["Microsoft.Sql", "Microsoft.Storage"]
}

resource "azurerm_public_ip" "lb_ip" {
  name                = "${var.name_prefix}-lb-ip"
  location            = azurerm_resource_group.rg.location
  resource_group_name = azurerm_resource_group.rg.name
  sku                 = "Standard"
  allocation_method   = "Static"
}

resource "azurerm_public_ip" "vm_ip" {
  name                = "${var.name_prefix}-vm-ip"
  location            = azurerm_resource_group.rg.location
  resource_group_name = azurerm_resource_group.rg.name
  sku                 = "Basic"
  allocation_method   = "Dynamic"
}

###########################################################################
## Security Groups
###########################################################################
resource "azurerm_network_security_group" "nsg" {
  name                = "${var.name_prefix}-nsg"
  location            = azurerm_resource_group.rg.location
  resource_group_name = azurerm_resource_group.rg.name

  security_rule {
    name                       = "Https"
    priority                   = 1001
    direction                  = "Inbound"
    access                     = "Allow"
    protocol                   = "Tcp"
    source_port_range          = "*"
    destination_port_ranges    = ["3000", "8800"]
    source_address_prefixes    = var.allowed_ips
    destination_address_prefix = "*"
  }

  security_rule {
    name                       = "SSH"
    priority                   = 1002
    direction                  = "Inbound"
    access                     = "Allow"
    protocol                   = "Tcp"
    source_port_range          = "*"
    destination_port_range     = "22"
    source_address_prefixes    = var.allowed_ips
    destination_address_prefix = "*"
  }
}

resource "azurerm_subnet_network_security_group_association" "nsg_association" {
  network_security_group_id = azurerm_network_security_group.nsg.id
  subnet_id                 = azurerm_subnet.subnet.id
}

###########################################################################
## Load Balancer
###########################################################################
resource "azurerm_lb" "lb" {
  name                = "${var.name_prefix}-lb"
  location            = azurerm_resource_group.rg.location
  resource_group_name = azurerm_resource_group.rg.name
  sku                 = "Standard"

  frontend_ip_configuration {
    name                 = "${var.name_prefix}-frontend"
    public_ip_address_id = azurerm_public_ip.lb_ip.id
  }

  tags = {
    environment = var.name_prefix
  }
}

resource "azurerm_lb_backend_address_pool" "pool" {
  name            = "${var.name_prefix}-pool"
  loadbalancer_id = azurerm_lb.lb.id
}

resource "azurerm_lb_backend_address_pool_address" "pool_ip" {
  name                    = "${var.name_prefix}-pool-ip"
  backend_address_pool_id = azurerm_lb_backend_address_pool.pool.id
  ip_address              = azurerm_network_interface.vm_nic.private_ip_address
  virtual_network_id      = azurerm_virtual_network.vnet.id
  depends_on              = [azurerm_network_interface.vm_nic, azurerm_lb_backend_address_pool.pool]
}

resource "azurerm_lb_probe" "kots_probe" {
  name            = "${var.name_prefix}-kots-probe"
  loadbalancer_id = azurerm_lb.lb.id
  port            = 8800
  protocol        = "Tcp"
}

resource "azurerm_lb_probe" "app_probe" {
  name            = "${var.name_prefix}-app-probe"
  loadbalancer_id = azurerm_lb.lb.id
  port            = 3000
  protocol        = "Tcp"
}

resource "azurerm_lb_rule" "kots_rule" {
  name                           = "${var.name_prefix}-kots-rule"
  loadbalancer_id                = azurerm_lb.lb.id
  frontend_ip_configuration_name = azurerm_lb.lb.frontend_ip_configuration[0].name
  probe_id                       = azurerm_lb_probe.kots_probe.id
  protocol                       = "Tcp"
  frontend_port                  = 8443
  backend_port                   = 8800
  backend_address_pool_ids       = [azurerm_lb_backend_address_pool.pool.id]
}

resource "azurerm_lb_rule" "app_rule" {
  name                           = "${var.name_prefix}-app-rule"
  loadbalancer_id                = azurerm_lb.lb.id
  frontend_ip_configuration_name = azurerm_lb.lb.frontend_ip_configuration[0].name
  probe_id                       = azurerm_lb_probe.app_probe.id
  protocol                       = "Tcp"
  frontend_port                  = 443
  backend_port                   = 3000
  backend_address_pool_ids       = [azurerm_lb_backend_address_pool.pool.id]
}

###########################################################################
## VM
###########################################################################
resource "azurerm_linux_virtual_machine" "vm" {
  name                  = "${var.name_prefix}-vm"
  location              = azurerm_resource_group.rg.location
  resource_group_name   = azurerm_resource_group.rg.name
  network_interface_ids = [azurerm_network_interface.vm_nic.id]
  size                  = "Standard_B4als_v2"

  tags = {
    environment = var.name_prefix
  }

  identity {
    type = "SystemAssigned"
  }

  os_disk {
    name                 = "${var.name_prefix}-disk"
    caching              = "ReadWrite"
    storage_account_type = "Premium_LRS"
    disk_size_gb         = "40"
  }

  source_image_reference {
    publisher = "Canonical"
    offer     = "0001-com-ubuntu-server-jammy"
    sku       = "22_04-lts-gen2"
    version   = "latest"
  }

  computer_name                   = "${var.name_prefix}-vm"
  admin_username                  = var.username
  disable_password_authentication = true

  admin_ssh_key {
    username   = var.username
    public_key = jsondecode(azapi_resource_action.ssh_public_key_gen.output).publicKey
  }

  boot_diagnostics {
    storage_account_uri = azurerm_storage_account.storage.primary_blob_endpoint
  }
}

resource "azurerm_network_interface" "vm_nic" {
  name                = "${var.name_prefix}-vm-nic"
  location            = azurerm_resource_group.rg.location
  resource_group_name = azurerm_resource_group.rg.name

  ip_configuration {
    name                          = "${var.name_prefix}-vm-nic-ipconfig"
    subnet_id                     = azurerm_subnet.subnet.id
    private_ip_address_allocation = "Dynamic"
    public_ip_address_id          = azurerm_public_ip.vm_ip.id
  }
}
