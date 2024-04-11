# Application Architecture
> Paramify can run in a Kubernetes cluster and leverage external services like a load balancer, database, object store, and email server.

![paramify](/assets/app-architecture.png)

## Overview
Both Paramify Cloud and self-hosted deployments leverage a similar architecture, with application containers that can be run in a [Kubernetes Cluster](/deployment-options#kubernetes-cluster) or single node [Embedded Cluster](/deployment-options#embedded-cluster).

Users access the application via load balancer (configured with a valid SSL cert) which proxies access to the main Paramify application. The app will manage data in a PostgreSQL database and store diagrams and other images in an object store (like AWS S3 or Azure Blob). When a project document is to be created the app will pass the OSCAL data to the Document Robot which generates and saves the document package in the object store.

The Admin Console provided as part of the [Paramify Platform Installer](/ppi) is the recommended deployment method, as it can be used to manage configuration then deploy and upgrade the application containers over time. The Admin Console is normally only accessed by the systems administrators to deploy and maintain the environment.

## Encryption
Paramify Cloud and self-hosted deployments leverage encryption in transit and at rest for data stored in both database (e.g., AWS RDS PostgreSQL) and object store (e.g., AWS S3) using validated cloud provider solutions. Communication to and between the application containers is also encrypted and leverages FIPS-enabled OpenSSL.

::: tip NOTE
All application communication paths are encrypted by default, including between the load balancer and application and dependencies
:::
