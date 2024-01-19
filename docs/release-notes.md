---
outline: 2
---

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

> Notable changes and improvements to Paramify Cloud and self-hosted deployments.

<!-- >Subscribe to release notifications (TBD) -->

![paramify](/assets/hero-rocket.png)


## 1.21.0 (January 19, 2024)

### New Features

#### Collaborators Approval Workflow
Collaborators have an optional new worklow to support approving Risk Solutions assigned to their Role. They can flag their Risk Solutions as "Approved" or "Change Requested" to assist Editors and Admins in their review process. If the Collaborator approves a Risk Solution the overall status will show as "Ready for Review", at which point an Editor or Admin can mark it reviewed.

![collaborator-approve](/assets/1.21-collaborator-approve.png)

Alternatively, if the Collaborator is unsatisfied with their Risk Solution and can't make the desired change (such as to Implementation Status or Responsible Owner) they could indicate "Change Requested" which will bubble up to those responsible for overall review. The Editor or Admin could then communicate with the Collaborator to address the feedback. Once satisfied they would click to "Resolve Change Request" and reset the Role approval status, after which they could wait for the Collaborator to approve or just mark it reviewed.

![collaborator-changes](/assets/1.21-collaborator-changes.png)

This Collaborator workflow is completely optional, and it is not required for Admins and Editors as they review Risk Solutions. It's intended to enable them to delegate part of the review process to Collaborators as subject matter experts to (optionally) edit and approve based on their responsible Role. See the related Collaborator Access options in Workspace Settings.

### Improvements

- Fixed performance issue waiting for document generation
- Options in Workspace Settings to restrict Collaborators to only see Elements and/or Risk Solutions assigned to their role
- When applying suggested Risk Solutions the default option is now to skip Control Implementations with existing responses
- Able to filter for linked Risk Solutions in Control Implementations
- Now able to review Custom Responses (similar to Risk Solutions)
- Added loading indicator while importing files
- Added ability to delete your own comments (or Admin can delete any)
- Improved Risk Solutions view for lower resolution screens
- Minor improvements to FedRAMP and DoD documents
- Better naming convention for document attachments

### Deployments

Added option for automated backups of embedded database.


## 1.20.0 (January 11, 2024)

### Improvements

- Search filters persist on Elements, Control Implementations, and Risk Solutions
- Limit next/previous navigation of Elements and Control Implementations within search results
- Click diagram thumbnails to show full-sized image
- Allow multiple Leveraged Authorizations in Custom Responses
- Ability to filter search of Control Implementations by Leveraged System
- Option to show only suggested Risk Solutions when manually linking to Control Implementation
- Option to hide titles on Custom Responses now under Project Settings
- More detailed error notifications on Element and Risk Solution imports
- Document generation errors now show as tooltip to facilitate troubleshooting
- Option to expand/collapse all response details in Control Implementation
- Searching Acronyms and Glossary now include definitions
- Various formatting improvements on FedRAMP Rev5 and DoD SSP documents

### Security

This release includes security-related dependency updates. Updating is recommended.


## 1.19.0 (December 21, 2023)

### Improvements

- Add section in Project Overview to allow automatic or manual listing of Leveraged Authorizations
- Deleting all Elements will replace mentions with text name in Risk Solutions and Custom Responses
- Option to delete all existing Custom Responses when importing Solution Responses in Project Settings
- Retain references to applied Risk Solutions in Project export
- Fix failure to import Parameters under certain conditions
- Improve sorting list of Project names and when selecting items from dropdowns

### Deployments

Allow connecting to SMTP servers with self-signed certificates by default.


## 1.18.1 (December 14, 2023)

### Deployments

Minor improvement to include some missing app logs in support bundles.


## 1.18.0 (December 7, 2023)

### Improvements

- Floating formatting toolbar will stay visible when editing long text in Risk Solutions and Custom Responses
- Able to filter Control Implementation by Origination and Status
- Notifications and warning messages will stay until closed
- Able to globally toggle titles on Responses in Project Settings
- Ensure high resolution images in documents

### Deployments

Allow sending SMTP mails without authentication by leaving either SMTP user or password blank.

### Security

This release includes security-related dependency updates. Updating is recommended.
