# FAQ by Document Type

> Find answers to document specific questions

## Overview

In a perfect world, everybody might be adept at producing and consuming OSCAL. In reality, human-readable documentation is still a necessity and each vendor represents their content differently. Consequently, it can be challenging to fit existing documentation into the OSCAL model while still maintaining consistent outputs.

This FAQ will help you navigate common questions and issues related to specific documents.

## FedRAMP Rev 5

### SSP

#### Table of Contents

::: details How can I get the table of contents to print?
To avoid unexpected behavior, DOCX documents must be opened with Microsoft Word. Also, when opening a document the first time, please click "Yes" when prompted to update the fields in the document.
:::

#### General System Description

::: details Where does the General System Description come from?
Your General System Description comes from the "System Function or Purpose" located in a project's Project Overview.
:::

#### Section #6, #7

::: details How can I populate "Data Types" in Leveraged Authorizations and Interconnections tables?
This field is populated by specifying the "Information Types Received" field in both FedRAMP System and Interconnection components.
:::

::: details How do I populate "Nature of Agreement" found in Leveraged Authorizations and Interconnections tables?

1. Create an Agreement Component and specify the `Nature of Agreement` field.
2. In the FedRAMP System or Interconnection component, set `Agreement` field to the newly created Agreement.
3. In project overview, ensure that Leveraged Authorizations and System Interconnections have the desired selections. (either automatic or manual)
4. The `Nature of Agreement` should be populated the with the appropriate value.
   :::

#### ATO Package Documents

::: details Which FedRAMP Rev 5 ATO Package documents are automated by Paramify today?

Paramify's goal is to generate all feasible SSP ATO Package documents for the user. The table below outlines the current progress.

For the documents indicated in the column titled `Requiremed FedRAMP Template Available`, the FedRAMP template is available for downloaded within the Paramify platform in the relevant Attachment page.

| Document                                                   |        Paramify Generated        | Required FedRAMP Template Available | Manual/Custom |
| ---------------------------------------------------------- | :------------------------------: | :---------------------------------: | :-----------: |
| Confidentiality Agreement                                  |                                  |                                     |      ✅       |
| Interconnection Agreement                                  |                                  |                                     |      ✅       |
| Non-Disclosure Agreement                                   |                                  |                                     |      ✅       |
| System Security Plan                                       |                ✅                |
| SSP Appendix A: FedRAMP Security Controls                  |                ✅                |
| SSP Appendix B: Related Acronyms                           |         ✅ - Part of SSP         |
| SSP Appendix C: Security Policies and Procedures           |                ✅                |
| SSP Appendix D: User Guide                                 |                                  |                                     |      ✅       |
| SSP Appendix E: Digital Identity Worksheet                 |         ✅ - Part of SSP         |
| SSP Appendix F: Rules of Behavior                          |                                  |                 ✅                  |
| SSP Appendix G: Information System Contingency Plan (ISCP) |                                  |                 ✅                  |
| SSP Appendix H: Configuration Management Plan (CPM)        |                                  |                                     |      ✅       |
| SSP Appendix I: Incident Response Plan (IRP)               |                                  |                                     |      ✅       |
| SSP Appendix J: CIS and CRM Workbook                       |                ✅                |
| SSP Appendix K: FIPS 199 Worksheet                         |         ✅ - Part of SSP         |
| SSP Appendix L: CSO-Specific Required Laws and Regulations |         ✅ - Part of SSP         |
| SSP Appendix M: Integrated Inventory Workbook              | ✅ - significant inputs required |
| SSP Appendix N: Continuous Monitoring Plan                 |                                  |                 ✅                  |
| SSP Appendix O: Plan of Action and Milestones (POA&M)      |                                  |                 ✅                  |
| SSP Appendix P: Supply Chain Risk Management Plan (SCRMP)  |                                  |                                     |      ✅       |
| SSP Appendix Q: Cryptographic Modules Table                |                                  |                 ✅                  |
| SSP Appendix R: Separation of Duties Matrix<sup>\*</sup>   |                                  |                                     |      ✅       |
| SSP Appendix S: User Summary Table<sup>\*</sup>            |                ✅                |
| Security Assessment Plan                                   |                                  |              ✅ - 3PAO              |
| Security Assessment Report                                 |                                  |              ✅ - 3PAO              |
| FedRAMP ATO Letter (required for agency packages only)     |                                  |                 ✅                  |               |

<sup>\*</sup> Paramify added Appendices to simplify responses to Access
Controls around least privilege and separation of duties.

Refer to [FedRAMP Initial Authorization Package Checklist](https://www.fedramp.gov/assets/resources/templates/FedRAMP-Initial-Authorization-Package-Checklist.xlsx) from FedRAMP.gov to confirm package requirements.

:::

### Appendix A

::: details How do I model a "Hybrid" or "Shared" control origination?

Risk Solutions are **single origination** by design. Multi-responsibiliy Risk Solutions should be broken up for best results.

If you are converting legacy documentation into custom control responses, you can use a combination of originations to model a hybrid or shared control.

**Hybrid** is simply `System Provider Specific` AND `System Provider Corporate`.

**Shared** is a combination of system provider and customer originations.

- Example: `System Provider Specific` AND `Customer Provided`
- Example: `System Provider Corporate` AND `Customer Configured`

:::

## TX-RAMP Documents
::: details Which TX-RAMP documents are automated by Paramify today?  

Paramify's goal is to generate all feasible TX-RAMP documents for the user.  The table below outlines the current progress.  

For the documents indicated in the column  titled `Template Available`, the template is available for downloaded within the Paramify platform in the relevant Attachment page.

| Document                  | Paramify Generated | Template Available | Manual/Custom |
| ----------------------------------- | :---: | :---: | :---: |
| System Security Plan (SSP) | ✅ |	
| Boundary & Data Flow Diagram |  |  | ✅ - Part of SSP|
| Roles & Permissions Matrix | ✅ - Part of SSP |
| Security Policy - Access Control (AC) | ✅ |			
| Security Policy - Awareness and Training (AT) | ✅ |
| Security Policy - Audit and Accountability (AU) | ✅ |
| Security Policy - Security Assessment and Authorization (CA)	| ✅ |	
| Security Policy - Configuration Management (CM)	| ✅ |
| Security Policy - Contingency Planning (CP)	| ✅ |
| Security Policy - Identification and Authentication (IA) | ✅ |
| Security Policy - Incident Response (IR) | ✅ |
| Security Policy - Maintenance (MA) | ✅ |
| Security Policy - Media Protection (MP) | ✅ |
| Security Policy - Physial and Environmental Protection (PE)	| ✅ |
| Security Policy - Planning (PL)	| ✅ |
| Security Policy - Personnel Security (PS)	| ✅ |
| Security Policy - Risk Assessment (RA)	| ✅ |
| Security Policy - System and Services Acquisition (SA) | ✅ |
| Security Policy - System and Communications Protection (SC) | ✅ |
| Security Policy - System and Information Integrity (SI) | ✅ |
| SSP Attachment: Incident Response Plan |  | ✅ |	
| SSP Attachment: Information System Contingency Plan |  | ✅ |			
| SSP Attachment: Configuration Management Plan |  | ✅ |	
| SSP Attachment: Control Implementations | ✅ - Part of CIS/CRM |
| SSP Attachment: CIS Matrix	| ✅ - Part of Controls Matrix |
| SSP Attachment: Inventory Workbook	| ✅ - significant inputs required - Part of Controls Matrix |	
| SSP Attachment: Laws & Regulations | ✅ - Part of Controls Matrix|
| SSP Attachment: Rules of Behavior |  | ✅ |
| SSP Attachment: Separation of Duties Matrix<sup>*</sup> |  |  | ✅ |
| SSP Attachment: Continuous Monitoring Plan<sup>*</sup> |  | ✅ |


<sup>*</sup> Paramify added Attachments to simplify responses to Access
Controls around least privilege, separation of duties, and continuous monitoring.

Refer to [TX-RAMP Overview](https://dir.texas.gov/sites/default/files/2021-11/TX-RAMP%20Overview%20Webinar%20For%20Vendors.pdf) and [TX-RAMP Vendor Guide - Completing TX-RAMP Assessment Questionnaire](https://dir.texas.gov/sites/default/files/2023-04/TX-RAMP%20Vendor%20Guide%20-%20Completing%20TX-RAMP%20Assessment%20Questionnaire%20%28v2.0%29.pdf) from dir.texas.gov to confirm requirements.

:::
