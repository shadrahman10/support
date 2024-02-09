# Microsoft SSO

> Paramify supports login SSO via Microsoft Entra.

![users-graphic](/assets/hero-entra.png)

As part of Microsoft Entra (aka Azure AD) you can setup an app registration for Paramify to support SSO. See other login methods on the [Login Overview](login-options).

## Create an App Registration

1. Go to entra.microsoft.com and sign in as at least a **Cloud Application Administrator**
2. In the side navigation under _Identity_ click on _Applications_ then _App registrations_
3. Click _New registration_ near the top left:
   ![ms-entra-register-app](/assets/ms_entra_register_app.png)
4. Set the _Redirect URI_ as _Web_ and then the URL for where Paramify is installed, such as https://paramify.mycompany.com/auth/microsoft/callback (replacing with your domain)
5. In the _Overview_ copy the _Application (client) ID_, which is used for `Microsoft Client ID` or `AUTH_MICROSOFT_CLIENT_ID` below
6. From the _Overview_ click on _Add a certificate or secret_. Create a new client secret and make sure to copy the value down because it is only viewable on creation. This secret goes into `Microsoft Client Secret` or `AUTH_MICROSOFT_CLIENT_SECRET` mentioned below
7. Go to _API permissions_ tab and add the _email_ and _openid_ permissions:
   ![ms-entra-permissions](/assets/ms_entra_permissions.png)

## Configure in Self-Hosted

Once the app registration is created you can setup Paramify to use this with a few configuration options.

If you are using the [Paramify Platform Installer](ppi#configuring-paramify) then in the config GUI you can check the _Enable Microsoft Login SSO_ box then enter the `Microsoft Client ID` and `Microsoft Client Secret` that you collected from the app registration above.

With a [Helm-based install](deploy-helm-azure) you can add the configuration options to your `values.yaml` in the _configmaps.paramify.data_ section, similar to the following:

```yaml
configmaps:
  paramify:
    data:
      AUTH_MICROSOFT_ENABLED: "true"
      AUTH_MICROSOFT_CLIENT_ID: "<client_id>"
      AUTH_MICROSOFT_CLIENT_SECRET: "<client_secret>"
```

Be sure to replace the `client_id` and `client_secret` with the respective values from the app registration above.
