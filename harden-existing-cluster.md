# Hardening an Existing Cluster to CIS2/FIPS/STIG Levels

You may use these instructions to harden an existing cluster that was created with eksctl.

**Prerequisites**
- AWS Credentials with sufficient permissions
- [eksctl](https://eksctl.io/) installed
- [kubectl](https://kubernetes.io/docs/tasks/tools/) installed and configured with the current cluster context.

Export these variables:
```bash
export AWS_PROFILE="default"
export AWS_REGION=""
export CLUSTER_NAME=""
```

## 1. Enable Cluster Secrets Encryption
### Create KMS Key and Alias
```bash
export KEY_ARN=$(aws kms create-key --region $AWS_REGION --query KeyMetadata.Arn --output text)
aws kms create-alias --region $AWS_REGION --alias-name alias/eks-paramify-master-key --target-key-id $(echo $KEY_ARN | cut -d "/" -f 2)
```

### Update Cluster with key
```bash
eksctl utils enable-secrets-encryption \
  --cluster=$CLUSTER_NAME \
  --key-arn=$KEY_ARN \
  --region=$AWS_REGION
```

## 2. Enable AWS VPS CNI ServiceAccount Role
```bash
eksctl create iamserviceaccount \
    --cluster=$CLUSTER_NAME \
    --namespace=kube-system \
    --name=aws-node \
    --role-name=paramify-eks-vpccni-role\
    --attach-policy-arn=arn:aws:iam::aws:policy/AmazonEKS_CNI_Policy \
    --override-existing-serviceaccounts \
    --approve
```

## 3. Configure the VPC CNI Addon
```
eksctl create addon \
    --version=v1.15.0-eksbuild.2 \
    --name=vpc-cni
```
### Additional VPC CNI Configuration
1. In the aws admin console, access the eks cluster.
2. Under Add-ons, select the newly created Amazon VPC CNI.
3. Click edit
4. Expand advanced settings and find `Configuration values` text box
5. Add the value: `{"enableNetworkPolicy": "true"}`

## 4. Enable all cluster logging
```bash
eksctl utils update-cluster-logging \
    --enable-types all \
    --approve
```

## 5. Set up VPC private/public settings
1. In the aws admin console, access the eks cluster.
2. Under the Networking tab, click on Manage Networking
3. Select the appropriate option and add sources to the CIDR block.


## 6. Apply Network Policies
```bash
kubectl apply -f networkpolicies.yaml
```

## 7. Disable the default service account token auto-mount
```bash
kubectl patch serviceaccount default -p '{"automountServiceAccountToken": false}' -n default
kubectl patch serviceaccount default -p '{"automountServiceAccountToken": false}' -n $NAMESPACE
kubectl patch serviceaccount default -p '{"automountServiceAccountToken": false}' -n kube-system
kubectl patch serviceaccount default -p '{"automountServiceAccountToken": false}' -n kube-public
kubectl patch serviceaccount default -p '{"automountServiceAccountToken": false}' -n kube-node-lease
```

## 8. Restrict pod security contexts
```bash
kubectl label --overwrite ns kube-system pod-security.kubernetes.io/enforce=privileged
kubectl label --overwrite ns kube-node-lease pod-security.kubernetes.io/enforce=baseline
kubectl label --overwrite ns kube-public pod-security.kubernetes.io/enforce=baseline
kubectl label --overwrite ns $NAMESPACE pod-security.kubernetes.io/enforce=baseline
kubectl label --overwrite ns default pod-security.kubernetes.io/enforce=restricted
```


