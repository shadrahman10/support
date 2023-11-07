# Storage Account
resource azurerm_storage_account "storage" {
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

# Storage Container
resource azurerm_storage_container "container" {
  name                  = "${var.name_prefix}-container"
  storage_account_name  = azurerm_storage_account.storage.name
  container_access_type = "private"
}

# Workload Identity
resource "azurerm_user_assigned_identity" "workload_id" {
  name                = "${var.name_prefix}-workload-id"
  location            = var.region
  resource_group_name = azurerm_resource_group.rg.name
}

# Blob access to Workload Identity
resource "azurerm_role_assignment" "workload_id_blob_contributor" {
  scope                = azurerm_storage_account.storage.id
  role_definition_name = "Storage Blob Data Contributor"
  principal_id         = azurerm_user_assigned_identity.workload_id.principal_id
}

# Associate credentials to the paramify ServiceAccount in K8s
resource "azurerm_federated_identity_credential" "workload_id_creds" {
  name                = "${var.name_prefix}-workload-id-creds"
  resource_group_name = azurerm_resource_group.rg.name
  audience            = ["api://AzureADTokenExchange"]
  issuer              = azurerm_kubernetes_cluster.aks.oidc_issuer_url
  parent_id           = azurerm_user_assigned_identity.workload_id.id
  subject             = "system:serviceaccount:${var.k8s_namespace}:paramify"

  depends_on = [
    azurerm_kubernetes_cluster.aks,
    azurerm_user_assigned_identity.workload_id
  ]
}
