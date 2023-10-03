# Hardening an existing cluster to CIS2/FIPS/STIG Levels

You may use these instructions to harden an existing cluster that was created with eksctl.

**Prerequisites**
- AWS Credentials with sufficient permissions
- `eksctl` installed
- `kubectl` installed

Export these variables:
```bash
export AWS_PROFILE="default"
export APP_NAME="paramify"
export AWS_REGION=""
export CLUSTER_NAME=""
export KMS_ALIAS_NAME="alias/eks-${CLUSTER_NAME}-master-key"
export CNI_POLICY_ARN="arn:aws:iam::aws:policy/AmazonEKS_CNI_Policy"
```

## 1. Enable Cluster Secrets Encryption
### Create KMS Key and Alias
```bash
export KEY_ARN=$(aws kms create-key --region $AWS_REGION --query KeyMetadata.Arn --output text)
aws kms create-alias --region $AWS_REGION --alias-name $KMS_ALIAS_NAME --target-key-id $(echo $KEY_ARN | cut -d "/" -f 2)
```

### Update Cluster with key
```bash
eksctl utils enable-secrets-encryption \
  --cluster=$CLUSTER_NAME \
  --key-arn=$KEY_ARN \
  --region=$AWS_REGION \
```

## 2. Enable AWS VPS CNI ServiceAccount Role
```bash
eksctl create iamserviceaccount \
    --cluster=$CLUSTER_NAME \
    --namespace=kube-system \
    --name=aws-node \
    --role-name=$APP_NAME-eks-vpccni-role\
    --attach-policy-arn=arn:aws:iam::aws:policy/AmazonEKS_CNI_Policy \
    --override-existing-serviceaccounts \
    --approve
```

## 3. Enable all cluster logging
```bash
eksctl utils update-cluster-logging \
    --enable-types all \
    --approve \
```

## 4. Set up VPC private/public settings
Do this in the the 


## 5. Apply Network Policies
```bash
kubectl apply -f networkpolicies.yaml

```

## 6. Disable the default service account token auto-mount
```bash
kubectl patch serviceaccount default -p '{"automountServiceAccountToken": false}' -n default
kubectl patch serviceaccount default -p '{"automountServiceAccountToken": false}' -n $NAMESPACE
kubectl patch serviceaccount default -p '{"automountServiceAccountToken": false}' -n kube-system
kubectl patch serviceaccount default -p '{"automountServiceAccountToken": false}' -n kube-public
kubectl patch serviceaccount default -p '{"automountServiceAccountToken": false}' -n kube-node-lease
```

## 7. Restrict pod security contexts
```bash
kubectl label --overwrite ns kube-system pod-security.kubernetes.io/enforce=privileged
kubectl label --overwrite ns kube-node-lease pod-security.kubernetes.io/enforce=baseline
kubectl label --overwrite ns kube-public pod-security.kubernetes.io/enforce=baseline
kubectl label --overwrite ns $NAMESPACE pod-security.kubernetes.io/enforce=baseline
kubectl label --overwrite ns default pod-security.kubernetes.io/enforce=restricted
```


