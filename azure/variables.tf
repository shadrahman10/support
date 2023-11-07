variable "region" {
  type        = string
  default     = "westus2"
  description = "Region for all created resources"
}

variable "name_prefix" {
  type        = string
  default     = "paramify"
  description = "Prefix for created resources"
}

variable "k8s_namespace" {
  type        = string
  default     = "paramify"
  description = "Namespace for Paramify resources in Kubernetes"
}
