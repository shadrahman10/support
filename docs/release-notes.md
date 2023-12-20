<!--
For each release create a new section at the top with heading including the version that clients would see in the app (i.e., 1.18.0) and release date, followed by subsections (if applicable) for:
- New Features
  New capabilities that we want clients to be able to use. Include screenshots or links to docs on how to use the new features.
- Improvements
  Any general improvements or fixes that are significant enough to make clients aware of.
- Deployments
  Updates or notes specific to self-hosted deployments. Include any new config changes, etc.
- Security
  Let clients know when security improvements are made, including severity as applicable (e.g., minor changes that are beneficial, major improvements that are recommended).

Once the release notes are approved and merged then notification should be sent to clients (TBD, via releases@paramify email list?).
-->

# Release Notes
>Notable changes and improvements to Paramify Cloud and self-hosted deployments.

<!-- >Subscribe to release notifications (TBD) -->

![paramify](/assets/hero-paramify.png)


## 1.19.0 (December 20, 2023)
### Improvements
* Add section in Project Overview to allow automatic or manual listing of Leveraged Authorizations
* Deleting all Elements will replace mentions with text name in Risk Solutions and Custom Responses
* Option to delete all existing Custom Responses when importing Solution Responses in Project Settings
* Retain references to applied Risk Solutions in Project export
* Fix failure to import Parameters under certain conditions
* Improve sorting list of Project names and when selecting items from dropdowns

### Deployments
Allow connecting to SMTP servers with self-signed certificates by default.


## 1.18.1 (December 14, 2023)
### Deployments
Minor improvement to include some missing app logs in support bundles.


## 1.18.0 (December 7, 2023)
### Improvements
* Floating formatting toolbar will stay visible when editing long text in Risk Solutions and Custom Responses
* Able to filter Control Implementation by Origination and Status
* Notifications and warning messages will stay until closed
* Able to globally toggle titles on Responses in Project Settings
* Ensure high resolution images in documents

### Deployments
Allow sending SMTP mails without authentication by leaving either SMTP user or password blank.

### Security
This release includes security-related dependency updates. Updating is recommended.
