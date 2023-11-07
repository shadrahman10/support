# Resource Group
resource "azurerm_resource_group" "rg" {
  location = var.region
  name     = "${var.name_prefix}-rg"

  tags = {
    environment = var.name_prefix
  }
}

# AKS cluster
resource "azurerm_kubernetes_cluster" "aks" {
  name                = "${var.name_prefix}-aks"
  resource_group_name = azurerm_resource_group.rg.name
  location            = var.region
  dns_prefix          = "${var.name_prefix}-k8s"
  kubernetes_version  = "1.26.6"

  default_node_pool {
    name                = "default"
    node_count          = 2
    enable_auto_scaling = false
    vm_size             = "standard_b2as_v2" # 2x8 x86 (burst) $54/mo (see https://learn.microsoft.com/en-us/azure/virtual-machines/basv2)
    # vm_size             = "standard_b2ps_v2" # 2x8 arm (burst) $49/mo
    # vm_size             = "standard_b4pls_v2" # 4x8 arm (burst) $86/mo
    # vm_size             = "standard_d4pls_v5" # 4x8 arm $99/mo
    os_disk_size_gb     = 30
    os_sku              = "AzureLinux"
  }

  identity {
    type = "SystemAssigned"
  }

  oidc_issuer_enabled = true
  workload_identity_enabled = true
  role_based_access_control_enabled = true

  tags = {
    environment = var.name_prefix
  }
}
