# FAQ by Document Type

> Find answers to document specific questions

## Overview

In a perfect world, everybody might be adept at producing and consuming OSCAL. In reality, human-readable documentation is still a necessity and each vendor represents their content differently. Consequently, it can be challenging to fit existing documentation into the OSCAL model while still maintaining consistent outputs.

This FAQ will help you navigate common questions and issues related to specific documents.

## FedRAMP

### SSP

::: details How do I populate "Nature of Agreement" found in Leveraged Authorizations and Interconnections tables?

1. Create an Agreement Component and specify the `Nature of Agreement` field.
2. In the FedRAMP System or Interconnection component, set `Agreement` field to the newly created Agreement.
3. In project overview, ensure that Leveraged Authorizations and System Interconnections have the desired selections. (either automatic or manual)
4. The `Nature of Agreement` should be populated the with the appropriate value.
   :::

::: details How do I model a "Hybrid" or "Shared" control origination?

**Hybrid** is simply `System Provider Specific` AND `System Provider Corporate`.

**Shared** is a combination of system provider and customer originations.

- Example: `System Provider Specific` AND `Customer Provided`
- Example: `System Provider Corporate` AND `Customer Configured`

:::

::: details How can I get the table of contents to print?
To avoid unexpected behavior, DOCX documents must be opened with Microsoft Word. Also, when opening a document the first time, please click "Yes" when prompted to update the fields in the document.
:::

###
