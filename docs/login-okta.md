# Okta SSO
> Paramify supports login SSO via Okta.

Paramify can be configured to use Okta to power Single Sign-on (SSO). See other login methods on the [Login Overview](login-options).

## Supported Features
- **Service Provider (SP)-Initiated Authentication (SSO) Flow** - This authentication flow occurs when the user attempts to log in to the application from Paramify. This flow does not support JIT (just in time) provisioning.

- **Identify Provider (IdP)-Initiated Authentication (SSO) Flow** - This authentication flow occurs when the user attempts to log in to the application from Okta. This flow does support JIT (just in time) provisioning.

Paramify’s integration with Okta leverages Okta only for authentication. To assign permissions for Paramify, users must do so directly within Paramify.

## Requirements
In order to proceed with configuring login with SSO through Okta, you must:
- Have access to an Okta tenant
- Be an Okta administrator to that tenant
- Have received a Welcome to Paramify email invitation

For Paramify Cloud, if you have not received a _Welcome to Paramify_ email invitation, please email support@paramify.com to request an invite.

## Configuration Steps
### Step One: Add Paramify application to Okta
1. Login to your **Okta Admin Console**
2. Navigate to _Applications_ > _Applications_ > _Browse App Catalog_
3. Search “paramify” and select from results.
4. Click _+ Add Integration_
5. Click _Done_
6. Click on the _General_ tab
7. For Domain:
    - If you are not deploying Paramify to a custom domain enter “app.paramify.com”
    - If you are deploying Paramify to a custom domain (on-prem), please provide the domain.
8. Open the _Sign On_ tab of your new application. You’ll need information here for the next step.

### Step Two: Configure Paramify
1. In a new tab, navigate to Paramify (https://app.paramify.com for Paramify Cloud) and log in with your email address that received the welcome email. This will send you a new email containing a sign-in link
2. Navigate to the _Workspace Settings_ page. (Found within the gear icon at the top-right of the screen)
3. Locate the section entitled _Okta SSO_
4. Copy fields from Okta (the _Sign On_ tab from Step One #8) over to Paramify
    - Copy the field `Client Id` and paste into _Okta Client Id_
    - Copy the entry under `Client Secret` and paste into _Okta Client Secret_
    - Enter your Okta domain in the field _Okta Domain_ (for example: my-company.okta.com)
    - (Optional) If you are deploying Paramify self-hosted, please supply the variable `APP_DOMAIN` which is the base domain name that Paramify will be deployed to (for example: paramify.my-company.com)
5. In Paramify, click _Save_

### Step Three: Assign users and test
Users assigned via group or directly will now be able to log into Paramify via SSO through the Paramify app on their Okta dashboards. To give people or groups access to the Paramify application, click the _Assignments_ tab under the configured Paramify app, then click _Assign_. Leveraging _Groups_ is recommended to assign access. If assigning access to _Users_, ensure the _User Name_ is a valid email.

### Step Four: Finish and start using SSO via Okta

#### Option: 1 - Login from Paramify:

1. Navigate to https://app.paramify.com
2. Click on _Continue with Okta_.
3. Enter your work email address and click the button. (You will be redirected to Okta)
4. Enter your email and password. Login.
5. If successful, you will be redirected back to Paramify.
6. You now have access to the application.

#### Option 2 - Login from Okta:

1. Login into okta
2. Navigate to the apps dashboard
3. Click on the Paramify App
4. You will be redirected to Paramify and now have access to the application.

That’s it! Enjoy your Paramify integration with Okta!

:::tip NOTE
JIT (just-in-time) user provisioning is only supported from the Okta dashboard. If a user chooses to authenticate to Okta from Paramify, their account in Paramify must already exist.
:::

If you experience any issues or have any questions, please reach out to support@paramify.com to engage our support staff.
