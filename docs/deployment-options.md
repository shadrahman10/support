# Deployment Options
> Choose how and where you will run Paramify.

![hero-k8s](/assets/hero-k8s.png)

## Cloud or On-Prem?

Paramify is available as a cloud-based SaaS solution or can be deployed into an on-premises environment. For ease of management it's recommended to use the Paramify SaaS environment, unless you have FedRAMP data which needs to stay in boundary in your environment. In the future, Paramify intends to offer a FedRAMP certified SaaS environment to support all customers.

## On-Prem Deployment Options

Paramify can be deployed on-prem into an existing Kubernetes cluster or to a standalone embedded cluster.

| Target Environment                  | Paramify Platform Installer (GUI) | Helm (CLI) |
| ----------------------------------- | :---: | :---: |
| [Kubernetes Cluster](#kubernetes-cluster) <br/> (EKS, AKS, etc.) | ✅ | ✅ |
| [Embedded Cluster](#embedded-cluster) <br/> (single VM)        | ✅ | 🚫 |

#### Dependencies
* Postgres database (RDS, Azure DB for PostgreSQL, etc.)
* File storage (AWS S3 or Azure Storage)

### Kubernetes Cluster
Kubernetes provides a scalable and highly resilient infrastructure for running applications like Paramify.

If you want to deploy Paramify into an existing Kubernetes cluster you can use either the Paramify Platform Installer GUI or Helm CLI.

* The **Paramify Platform Installer** is a GUI-based admin console which supports easy configuration and lifecycle management, including deploying and upgrading the Paramify application. See [Paramify Platform Installer](ppi) for details on how to setup the GUI and then deploy Paramify.
* **Helm** is a commonly used CLI method of configuring and installing an application into a Kubernetes cluster. See [Helm Deploy to Azure](deploy-helm-azure) for an example of creating an AKS cluster with Terraform and deploying Paramify via Helm.

### Embedded Cluster
An embedded cluster is a single-node solution which can be more easily managed, but is not as resilient or scalable as a full Kubernetes cluster.

If Kubernetes isn't available you can deploy onto a single VM as an embedded cluster using the Paramify Platform Installer GUI. This involves providing a persistent VM (AWS EC2, Azure VM, etc.) to which you can SSH to setup the installer. Then managing the Paramify application is done via the GUI.

See [Paramify in Embedded Cluster](deploy-embedded-aws) for a short example of building infrastructure with Terraform and deploying Paramify onto an AWS EC2 instance.