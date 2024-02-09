# Users and Teams

> Paramify allows you to manage users and teams to help involve the right people

![users-graphic](/assets/hero-users.png)

## Overview

Paramify is intentionally designed to involve as many individuals within your organization as possible in your security program, embracing the concept of "many hands make like work." This approach recognizes that GRC professionals often have a broad understanding of security across the company but may not be experts in every aspect or the specifics of implementation. Therefore, it's highly beneficial to engage domain experts and delegate specific portions of security content to them. This shared approach fosters widespread adoption throughout the organization.

### Users

Users are accounts that identify which people can login to Paramify and what permissions they have (see [User Types](#user-types) below for more details). In addition to an email address there are multiple properties that can be set per User, including name, title, department, Teams, Roles, and description.

### Teams

Teams allow naming and grouping a set of Users and associating them to Roles. With many Users this can be a more convenient way to manage Role assignments than individually on each User.

## Managing Users and Teams

Using the settings icon in the top-right corner, navigate to "Users & Teams". This is where you can create, edit, and delete Users and Teams within your Paramify workspace.

To create User accounts you would click "Add Users". Invite each user with their work email. Once a user has been added, click on the user and assign them to specific Roles and Teams, if any.

Use the "Manage Users" button to get a table view of all Users and their assigned User Type, last activity, and to suspend or delete them.

::: tip NOTE
User authentication within Paramify is managed by your third-party SSO providers. Paramify does not create, store, or use passwords.
:::

To create a Team click "Create Team" and then set a name and the list of members. If you click on a Team you can also assign Roles that will be inherited by members.

## User Types

| Permission                        | Collaborator | Editor | Admin |
| --------------------------------- | :----------: | :----: | :---: |
| View/Edit associated Elements     |    ✅ \*     |   ✅   |  ✅   |
| View/Edit assigned Risk Solutions |    ✅ \*     |   ✅   |  ✅   |
| Create/Edit/Delete Elements       |              |   ✅   |  ✅   |
| Create/Edit/Delete Risk Solutions |              |   ✅   |  ✅   |
| Create/Edit/Delete Projects       |              |   ✅   |  ✅   |
| Data Import and Export            |              |        |  ✅   |
| Manage Users and access           |              |        |  ✅   |
| Manage Workspace Settings         |              |        |  ✅   |

<small> \* _More specific access allowed to Collaborators can be customized by an Admin in Workspace Settings under Collaborator Access, including if they should have edit permissions._ </small>

### Collaborator

Collaborators may include internal and external members who possess valuable insights to the implementation and status of Risk Solutions in their areas of expertise. They can view and edit Risk Solutions assigned to them, and they can also edit and view Elements associated to those Risk Solutions. Collaborators do not have access to individual certification projects nor the ability to view or download deliverables.

Where external collaboration is not permitted, Paramify recommends assigning a user with appropriate knowledge to fulfill the role of the Collaborator. Additionally, interviews via email, chat, or call can be used to gather important details in those cases.

### Editor

Editors are typically internal members of the company, and enjoy full access to projects and deliverables.

Editors can create, view, edit, and delete Risk Solutions, Elements, and Projects.

### Admin

Admins have no restrictions in their workspace. They can manage workspace settings and user access, and they can use data import features.

Admins can create, view, edit, and delete Risk Solutions, Elements, and Projects.

::: tip NOTE
All activities completed in Paramify by users are tracked and displayed for transparency and accountability.
:::
