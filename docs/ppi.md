# The Paramify Platform Installer (PPI)
The Paramify Platform Installer (PPI) is an administrative console where you can access and manage your Paramify instance. It is also where you will go to access upgrades to new Paramify releases, as well as any updates to the installer itself. The installer consists of an Application tab where you manage your application, version history, and configuration settings.

![hero-ppi](/support/assets/hero-ppi.png)

## TLDR;
1. Run the intall script and wait.
```bash
curl https://kots.io/install | bash
kubectl kots install paramify
```
2. Choose an admin console password.
3. Upload your license file.
4. Enter custom configuration details.
5. Deploy the application.

## System Requirements
Here are the system requirements for installing Paramify on an existing Kubernetes cluster:

- Paramify currently only supports deploying onto `amd64/x86_64` based architectures. Deploying onto `arm` based architectures is not not supported. 
- A Kubernetes `1.19.x`, `1.20.x`, `1.21.x`, `1.22.x`, `1.23.x`, `1.24.x`, `1.25.x`, `1.26.x`, or `1.27.x` compliant cluster.
  - Paramify has tested and verified compatibility with the following managed Kubernetes providers:
    - Amazon EKS (`1.23`, `1.24`, `1.25`, `1.26`, `1.27`)
    - Google GKE (`1.25`, `1.26`, `1.27`)
    - K3S (`1.24`, `1.25`, `1.26`)
  - Other distrubutions, such as Azure AKS, may or may not be compatible with Paramify.
- 3+ node cluster for production environments to provide redundancy and high availability (HA).
  - Ensure all nodes are in the same cloud provider region or physical data center network. Nodes behind different WAN links in the same cluster are not supported.
- Node resources:
  - CPU: 
    - **4 cores**. The cluster must contain at least 2 cores, and should contain at least 4 cores.
  - Memory: 
    - **1Gi free memory**. The cluster must have at least 512Mi free memory, and should have at least 1Gi free memory.
  - Storage: 
    - **20Gi free disk space**. The cluster must have at least 10Gi free disk space, and should have at least 20Gi free disk space.
- A load balancer or ingress controller to load balance to the Paramify platform UI.
  - Must be configured for TLS communication to the backend.
  - If your load balancer or ingress controller requires explicit trust with the certificate presented by the backend service then you must upload a trusted certificate for the Paramify Web backend.
  - The Paramify platform UI must be accessed externally via port 443. Accessing Paramify over any other port is not supported.
  - Must support websockets.

<!-- - Production environments should have snapshots set up and stored externally from the cluster to ensure that they can be retrieved in the event of a total cluster loss.
  - See Backup and Restore on an Existing Cluster with Snapshots for more information on how to set up snapshots and compatible providers. -->
<!-- - Velero 1.9.0 installed in the cluster to handle backup and restores with snapshots.
  - See Backup and Restore on an Existing Cluster with Snapshots for instructions to install Velero into your cluster. -->

## Existing Cluster Installation
Use these instructions to install Paramify into an existing cluster that has access to the internet.

### Install the `kubectl kots` Plugin

To install the latest version of the kots CLI to `/usr/local/bin`, run:

```bash
curl https://kots.io/install | bash
```

To install to a directory other than `/usr/local/bin`, run:

```bash
curl https://kots.io/install | REPL_INSTALL_PATH=/path/to/cli bash
```

To verify your installation, run:

```bash
kubectl kots --help
```

#### Install using `sudo`
If you have sudo access to the directory where you want to install the kots CLI, you can set the `REPL_USE_SUDO` environment variable so that the installation script prompts you for your sudo password.
```bash
curl -L https://kots.io/install | REPL_USE_SUDO=y bash
```
#### Advanced Installation
For an advanced installation of the kots cli, please refer to the [official documentation](https://docs.replicated.com/reference/kots-cli-getting-started).

### Install the PPI Using the `kubectl kots` Plugin
1. Choose the namespace that you will install the PPI and Paramify instance into. These instructions refer to this namespace as `your-namespace`.
2. First, run:
    ```bash
    kubectl kots install paramify --namespace your-namespace
    ```
    This automatically creates the namespace specified if it does not exist.
    If the KUBECONFIG environment variable is not set you will need to add --kubeconfig /path/to/kube/config to the install command above so that it can authenticate to your cluster.

3. After a few moments of initialization you are prompted for what you want the PPI Admin Console password to be.
<img width="500" alt="image" src="https://github.com/paramify/support/assets/24945085/ecab6532-f757-4c72-95e5-6498c6bc019a">

4. When the install is complete it automatically proxies the PPI UI to `http://localhost:8800`. [insert image here] In a browser window, access the PPI UI at `http://localhost:8800` to begin configuring the paramify platform.
5. Enter the password you specified during the install process.
<img width="500" alt="image" src="https://github.com/paramify/support/assets/24945085/0c5e4d2f-858b-4fe6-a3db-2395cbb6bd7d">

6. Next, you are prompted to upload your .yaml license file. Select or drag the file, and then click "Upload license".
<img width="500" alt="image" src="https://github.com/paramify/support/assets/24945085/d1f97a20-5066-44c6-9616-b54bd94c4dd2">

7. Finally, follow the steps for Configuring Paramify

8. Verify the preflight checks and proceed with the installation.
<img width="1014" alt="image" src="https://github.com/paramify/support/assets/24945085/372e23f5-2090-4425-a495-ba5e01ebe640">


## Configuring Paramify
A Paramify installation can be customized to fit business needs via the provided configuration fields.
<img width="1000" alt="image" src="https://github.com/paramify/support/assets/24945085/4fcbda42-063f-417b-bd4d-32a73dcaf31f">

### Single Sign-On (SSO)
All authentication into Paramify is passwordless. The customer must configure SSO via an identity provider (Google, Okta, Microsoft, etc.) or authenticate via a magic link sent to their email.

### SMTP
An SMTP configuration is recommended for Paramify to function properly. Paramify sends emails for authentication via magic link, as well as emails for user invitations and notifications.

### Cloud Storage
A cloud storage provider is required for Paramify to function properly. The customer must provide a bucket and accompanying endpoints.

Example S3 Service Account Annotations
```
eks.amazonaws.com/role-arn: arn:aws:iam::$account_id:role/my-role
```
Example Azure Workload Identity Service Account Annotations
```
azure.workload.identity/client-id: <client_id>
```

#### CDN
AWS Cloudflare is optional and supported.

### Load Balancing

#### Annotation Examples
AWS load balancer:
```
    # Use the following to assign an ACM cert to the loadbalancer
    service.beta.kubernetes.io/aws-load-balancer-ssl-cert: arn:aws:acm:<region>:<account>:certificate/<id>
    service.beta.kubernetes.io/aws-load-balancer-ssl-ports: http  # keep as "http"
    service.beta.kubernetes.io/aws-load-balancer-backend-protocol: https  # keep as "https"
```
Azure load balancer:
```
    # By default an external IP will be assigned, or use this for internal
    service.beta.kubernetes.io/azure-load-balancer-internal: "true"
```

### Database
A Postgres database is required for Paramify to function properly. While Paramify supports an embedded database option, it is expected that the customer will provide an external database where snapshots and backups can be more effectively maintained.


