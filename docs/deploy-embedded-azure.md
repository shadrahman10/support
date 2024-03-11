# Deploy an Embedded Cluster to Azure
> Paramify can be deployed in an embedded cluster or "virtual appliance" mode, as an alternative to deploying into an existing Kubernetes cluster.

The following instructions are an example of how to deploy an embedded cluster in Azure using services for database and storage.


## Prerequisites
- Azure CLI and authenticated user with sufficient permissions to create resources
- [terraform](https://www.terraform.io/) CLI installed (if using the example .tf files)
- A Paramify license (user and credential for Helm registry login)
- (Recommended) An available subdomain planned to access the application (e.g., paramify.mycompany.com)
- (Recommended) Credentials for an SMTP server to send email
- (Recommended) Access to configure Okta, Microsoft Login, or Google Cloud Console for SSO

:::tip NOTE
You'll need to configure at least one authentication method (e.g., SMTP, Google, Okta) to be able to login to Paramify.
:::


## 1. Create Infrastructure
Paramify will use the following infrastructure in Azure:
- VM instance to run Paramify
- Azure Database for PostgreSQL
- Blob Storage container for images and generated documentation
- Load balancer to access installer and application

To simplify creation of the infrastructure you can use the [example Terraform files](https://github.com/paramify/support/blob/main/azure_embed) to create everything in an isolated VPC.

Follow these steps to create the infrastructure:
1. (Recommended) Acquire an SSL certificate for the desired subdomain (e.g., paramify.company.com)
2. Update and apply the terraform example (or similar):
    - In an empty directory, save and edit the example `.tf` files to update the variables for your environment
    - Init and check the configuration:
    ```bash
    terraform init
    terraform plan
    ```
    - Apply the configuration to create Azure resources:
    ```bash
    terraform apply
    ```
    :::info
    This will usually take several minutes.
    :::
    - Copy the convenience output values (or run `terraform output`) that look something like:
    ```
    azure_blob_endpoint = "https://paramifymycompany.blob.core.windows.net/"
    azure_container = "paramify-mycompany-container"
    azure_db = "paramify-mycompany-db.postgres.database.azure.com"
    azure_storage = "paramifymycompany"
    key_private = <sensitive>
    key_public = "ssh-rsa AAAA...= generated-by-azure"
    lb_ip = "100.1.2.3"
    resource_group_name = "paramify-mycompany-rg"
    vm_ip = "200.1.2.3"
    ```
3. (Recommended) Add a DNS record for the desired domain as an alias to the new LB IP (lookup the `lb_ip` from terraform output when setting alias target)


## 2. Prepare Installer
Follow these steps to prepare the installer:
1. Copy the SSH keys into local files:
    - From the terraform output copy the `key_private` content into a file, can be named "vm_key" or similar
    ```bash
    terraform output -raw key_private > vm_key
    terraform output -raw key_public > vm_key.pub
    chmod 400 vm_key
    ```
2. SSH into the VM using the key:
    - For example, using the `vm_ip` from terraform output execute the following:
    ```bash
    ssh -i vm_key paramify@`terraform output -raw vm_ip`
    ```
3. Update the VM instance (then reboot, if applicable):
    ```bash
    sudo apt update && sudo apt upgrade -y
    ```
4. Download and prepare the installer:
    ```bash
    curl -sSL https://kurl.sh/paramify | sudo bash
    ```
    :::info
    This step usually takes about 10 minutes. If there are preflight warnings then correct, if needed, and proceed.
    :::
5. Copy and save the output after “Installation Complete” (specifically the admin password, which is required later)

    :::tip
    You can reset the admin password manually with `kubectl kots reset-password default` if needed.
    :::


## 3. Deploy Paramify
At this point the configuration and deployment will be similar to other Paramify deployment methods.

1. Open the installer URL at the configured subdomain on port 8443 (e.g., https://paramify.mycompany.com:8443)
    - Alternatively you can use the `lb_ip` directly if DNS is not ready (e.g., https://100.1.2.3:8443)
2. Login using the admin password previously copied from installation output (or manually set)
3. Upload your Paramify License file
4. Enter your Paramify configuration information then "Save config" to continue
    - The "Application Base URL" should match the DNS subdomain you chose (e.g., https://paramify.mycompany.com)
    - (Optional) Set the custom SSL cert under "Ingress Settings"
        - Select "User Provided" and choose the appropriate .key and .crt files
    - For "Database" select "External Postgres"
        - As "Database Host" enter the `azure_db` from terraform output of the created RDS database.
        - Set "Username" and "Database" to "paramify" and "Password" to the DB password you set in `variables.tf`.
        - The other settings can be left at default (e.g., port is 5432).
    - Under "Cloud Storage Settings" select "Azure Blob Storage", then from terraform output set the following:
        - "Account" to `azure_storage`
        - "Container Name" to `azure_container`
        - "Endpoint" to `azure_blob_endpoint` (only required in Azure Government)
5. Wait for Preflight checks to complete
6. Deploy the application and wait for the "Ready" status

Now you should be ready to access Paramify at the desired domain (e.g., https://paramify.mycompany.com) or directly (https://100.1.2.3 using `lb_ip` from terraform output) and login using one of your configured methods. Enjoy!
