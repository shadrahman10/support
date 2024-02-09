# Setup kubectl:
# az aks get-credentials --resource-group $(terraform output -raw resource_group_name) --name $(terraform output -raw kubernetes_cluster_name)

output "resource_group_name" {
  value = azurerm_resource_group.rg.name
}

output "kubernetes_cluster_name" {
  value = azurerm_kubernetes_cluster.aks.name
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

output "client_id" {
  value = azurerm_user_assigned_identity.workload_id.client_id
}
