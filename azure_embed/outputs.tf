output "key_public" {
  value = jsondecode(azapi_resource_action.ssh_public_key_gen.output).publicKey
}

output "key_private" {
  sensitive = true
  value = jsondecode(azapi_resource_action.ssh_public_key_gen.output).privateKey
}

output "resource_group_name" {
  value = azurerm_resource_group.rg.name
}

output "lb_ip" {
  value = azurerm_public_ip.lb_ip.ip_address
}

output "vm_ip" {
  value = azurerm_linux_virtual_machine.vm.public_ip_address
}

output "azure_db" {
  value = azurerm_postgresql_flexible_server.db.fqdn
}

output "azure_storage" {
  value = azurerm_storage_account.storage.name
}

output "azure_container" {
  value = azurerm_storage_container.container.name
}

output "azure_blob_endpoint" {
  value = azurerm_storage_account.storage.primary_blob_endpoint
}

