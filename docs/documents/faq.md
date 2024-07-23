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

## Leveraging my existing SSP

:::

### Paramify's Recommendation
Paramify recommends going all in with Risk Solutions to enable the following business value:
1. As organizations scale the number of security objectives required to do business, responding one by one to individual requirements does not scale and hinders GTM efficiency. Risk solutions map to multiple security catalogs and enable flexibility and agility to GTM quicker as security objectives incrementally increase.
2. Risk Solutions provide a platform to drive shared risk adoption across the organization so security becomes an organization collective effort and not owned only by the GRC team

Paramify's intake process and Risk Solution library enable quick adoption.  However, we recognize teams have made significant investements in both time and money in their existing SSPs and want to see those prior investments incorporated into their Paramify SSP.  We are seeing this done successfully in four (4) ways:
1. After completing the intake process, Risk Solutions are reviewed with the existing SSP in hand to add or modify context to those Risk Solutions that are specific to your environment
2. Control implementation statements are copied and pasted into Custom Responses for each control requirement with the respective implementation details
3. The existing SSP is ingested by Paramify to create Custom Responses for each control requirement in Paramify
4. Control implementation statements via copy/paste or ingested and custom Risk Solutions via intake are reviewed in Paramify to evaluate best use of content as Custom Responses (project specific) or Risk Solutions (Global).

#### Risk Solution Guiding Principles
Risk Solution Definition:
1. Describe a security capability that addresses the who, what, how, and when
2. Standardized language that is catalog-agnostic to fulfill multi-catalog set of requirements
3. Flexible and agile to lift and replace the who, what, and when elements as the business evolves
4. Defines shared risk ownership across the organization and leveraged third party providers

#### Steps to Convert Custom / Existing Responses to Risk Solutions Architecture
1. Initial Intake based on Existing SSP
1a. Perform self-served intake / SSP ingestion to define elements and risk solutions inventory from existing SSP
1b. Import all elements and risk solutions inventory based on existing SSP into client's workspace
1c. Apply suggested risk solutions produced from step #1 to list of all security objective catalog requirements
2. Defining Foundation for Security Capabilities
2a. Assess what is necessary vs. superfluous in existing custom response to meet associated control requirement
2b. Consolidate multi-component capability existing custom responses to a generic main component capability
2c. Define the security capability key elements from existing custom response:
2c(1). Who - primary responsible owner of the capability
"2c(1) Note - Multiple Who scenarios:
1) Partially inherited from a third party provider + Shared internal organizational ownership
2) Customer responsibility + Shared internal organizational ownership"
2c(2). What - main component driving the capability (ideally this is owned by the Who party)
2c(3). How - procedures for implementing the capability (driven from the What element potentially in conjunction with other components)
2c(4). When - frequency with which the capability is performed
3. Content Merge to Risk Solutions Architecture (see proposed template to complete this phase here)
3a. Refine suggested risk solutions created from the intake process based on outputs of phase #2 (custom responses and risk solutions can be viewed together in the controls implementation view as well as the Document Robot eMass deliverable)
3b. Associate additional risk solutions not mapped to the requirement based on context from custom response not addressed in suggested risk solutions

Add Examples

#### Custom Response vs Risk Solutions
| Paramify Feature                                                     |                     Risk Solution                    | Custom Response | Comments |
| ------------------------------------------------------------ | :--------------------------------------------------------: | :----------------: | :--------------: |
| Response Mapping to Control Requirement | global capabilities that can be mapped to multiple projects and multiple control requirements to minimize input and maximize deliverable outputs | project and control requirement specific mapping |  |
| Collaborator functionality (Solution Owners) | capability or solution owner is given restricted access to view and/or edit their risk solutions as the approach or the people, places, and things change for the risk solution.  The Review status is automatically updated to "Not reviewed" so the GRC Admin or ISSO can review the changes, make updates as needed, and mark the latest version of the risk solution as "Reviewed" | N/A |  |
| Appendix A Generation | Each capability will have a distinct origination and implementation status.  The overall control implementation status will be the least of all applicable risk solutions | Each custom response will have a distinct implementation status but can have multiple originations.  The custom response should include all applicable originations or be comprehensive across custom responses.  The overall control implementation status will be the least of all applicable custom responses |  |
| Policies	| N/A | N/A | Control Parameters are the only input - all other details are hardcoded |
| Procedures | Capability is describing how things are done so it can be leveraged to produce the procedure document | Reads as a control response rather than how the capability is performed |  |
| CIS	| Each capability will have a distinct origination and implementation status.  The overall control implementation status will be the least of all applicable risk solutions | Each custom response will have a distinct implementation status but can have multiple originations.  The custom response should include all applicable originations or be comprehensive across custom responses.  The overall control implementation status will be the least of all applicable custom responses |  |
| CRM | A single Risk Solution can be used but their must be two narratives, 1) Internal role responsibility and 2) Customer Managed role responsibility.  Origination for the relevant custom response or risk solution should be Configured by Customer or Provided by Customer | Need a distinct custom response to capture the customer responsibility or the response inclusive of multiple responsible parties will be captured in the CRM |  |
| Automatic Mode (Project Overview: User Summary Table, Interconnections, Systems Ports, Protocols, & Services, and Leveraged Authorizations) | Not Specific | Not Specific | When an element is mentioned in the risk solution or custom response and automatic mode is enabled, then the Project Overview section will limit the elements documented in the SSP to those mentioned components. |
| Review: Custom Response vs Risk Solution	| Reviewed in the Risk Solution view.  Overall Review progress for Risk Solutions is available in the Risk Solutions view | Reviewed in the control implementation view.  Review status is only available control by control.  There is not an overall review status dashboard |  |
| Organization by Family & Subfamily or Control Family | risk solutions can be organized by family and subfamily.  The Risk Solution may be mapped to responsed to multiple control families. | custom responses are control requirement specific so they would only be assigned a family and subfamily upon conversion to a risk solution. The custom response will be specfic to the control family for which the control requirements is relevant
| FedRAMP Rev 4 to Rev 5 Automated Transiiton | Paramify's Risk Solutions broach both Rev 4 and Rev 5 control requirements enabling that a Rev 4 project can be converted to a Rev 5 Project with the click of a button. | Custom responses are specific to the control requirement for Rev 4 or Rev 5, not both. |  |
| Crosswalk	| Crosswalk is mapped by Risk Solution.  | Custom responses by design are specific to a control requirement within a framework. |  |
| Evidence |  |  |  |
| Mentions	| Not Specific | Not Specific | Links custom responses and risk solutions to the elements; Enable Automatic Mode deliverables |

:::

## TX-RAMP Documents

::: details Which TX-RAMP documents are automated by Paramify today?

Paramify's goal is to generate all feasible TX-RAMP documents for the user. The table below outlines the current progress.

For the documents indicated in the column titled `Template Available`, the template is available for downloaded within the Paramify platform in the relevant Attachment page.

| Document                                                     |                     Paramify Generated                     | Template Available |  Manual/Custom   |
| ------------------------------------------------------------ | :--------------------------------------------------------: | :----------------: | :--------------: |
| System Security Plan (SSP)                                   |                             ✅                             |
| Boundary & Data Flow Diagram                                 |                                                            |                    | ✅ - Part of SSP |
| Roles & Permissions Matrix                                   |                      ✅ - Part of SSP                      |
| Security Policy - Access Control (AC)                        |                             ✅                             |
| Security Policy - Awareness and Training (AT)                |                             ✅                             |
| Security Policy - Audit and Accountability (AU)              |                             ✅                             |
| Security Policy - Security Assessment and Authorization (CA) |                             ✅                             |
| Security Policy - Configuration Management (CM)              |                             ✅                             |
| Security Policy - Contingency Planning (CP)                  |                             ✅                             |
| Security Policy - Identification and Authentication (IA)     |                             ✅                             |
| Security Policy - Incident Response (IR)                     |                             ✅                             |
| Security Policy - Maintenance (MA)                           |                             ✅                             |
| Security Policy - Media Protection (MP)                      |                             ✅                             |
| Security Policy - Physial and Environmental Protection (PE)  |                             ✅                             |
| Security Policy - Planning (PL)                              |                             ✅                             |
| Security Policy - Personnel Security (PS)                    |                             ✅                             |
| Security Policy - Risk Assessment (RA)                       |                             ✅                             |
| Security Policy - System and Services Acquisition (SA)       |                             ✅                             |
| Security Policy - System and Communications Protection (SC)  |                             ✅                             |
| Security Policy - System and Information Integrity (SI)      |                             ✅                             |
| SSP Attachment: Incident Response Plan                       |                                                            |         ✅         |
| SSP Attachment: Information System Contingency Plan          |                                                            |         ✅         |
| SSP Attachment: Configuration Management Plan                |                                                            |         ✅         |
| SSP Attachment: Control Implementations                      |                ✅ - Part of Controls Matrix                |
| SSP Attachment: CIS Matrix                                   |                ✅ - Part of Controls Matrix                |
| SSP Attachment: Inventory Workbook                           | ✅ - significant inputs required - Part of Controls Matrix |
| SSP Attachment: Laws & Regulations                           |                ✅ - Part of Controls Matrix                |
| SSP Attachment: Rules of Behavior                            |                                                            |         ✅         |
| SSP Attachment: Separation of Duties Matrix<sup>\*</sup>     |                                                            |                    |        ✅        |
| SSP Attachment: Continuous Monitoring Plan<sup>\*</sup>      |                                                            |         ✅         |

<sup>\*</sup> Paramify added Attachments to simplify responses to Access
Controls around least privilege, separation of duties, and continuous monitoring.

Refer to [TX-RAMP Overview](https://dir.texas.gov/sites/default/files/2021-11/TX-RAMP%20Overview%20Webinar%20For%20Vendors.pdf) and [TX-RAMP Vendor Guide - Completing TX-RAMP Assessment Questionnaire](https://dir.texas.gov/sites/default/files/2023-04/TX-RAMP%20Vendor%20Guide%20-%20Completing%20TX-RAMP%20Assessment%20Questionnaire%20%28v2.0%29.pdf) from dir.texas.gov to confirm requirements.

:::
