# Smart Text and Mentions

> Add dynamic text and element references to any narrative

![paramify](/assets/hero-smart-text.png)

## Overview

::: info TLDR;

- Type `#` to initiate **Smart Text**. These are dynamic template tags that can be used to automatically populate information unique to a project.
- Type `@` to initiate **Element Mentions**. These are static references to elements in your library.

:::

Paramify allows you to add dynamic text and element references to any narrative. This provides many benefits, including:

- Flexibility
- Reusability across different certifications and systems
- Accuracy by leveraging a "write-once-use-everywhere" paradigm
- Discoverability of related information by linking elements together

## Smart Text

Initiate Smart Text with `#`. Currently, Paramify supports the following dynamic smart text tags:

- `#THIS SYSTEM`: The name of the project, e.g. `Acme for Government`. The value is defined by **System Short Name** or **System Name** in Project Settings. The short name takes precedence.
- `#THIS ORGANIZATION`: The name of the organization `Acme, Inc.`. The value is defined by **Service Provider** in Project Settings.
- `#CERTIFICATION DETAIL`: The certification detail, e.g. `FedRAMP High`. This value is set when choosing project security objectives.
- `#PROJECT TYPE`: The type of the project, e.g. `FedRAMP`, `StateRamp`, `DoD`. This value is set when the project is created.

When the narrative is used, the context of its usage will be used to populate the Smart Text.

**Example**

::: code-group

```txt [input]
#THIS SYSTEM utilizes @AWS US East/West, a #PROJECT TYPE-compliant
cloud platform. #THIS SYSTEM inherits local access to systems control
capabilities, including multi-factor authentication capabilities, from
this cloud platform.
```

```txt [output]
Acme for Government utilizes AWS US East/West, a FedRAMP-compliant
cloud platform. Acme for Government inherits local access to systems control
capabilities, including multi-factor authentication capabilities, from
this cloud platform.
```

:::

## Element Mentions

Initiate Element Mentions with `@`. This will automatically link the element to its detail page. To mention an element, use the `@` symbol followed by the element name. In the final rendered document, the `@` symbol will be removed.

::: tip NOTE
Element Mentions, different than Smart Text, will appear as mentioned. They are not dynamic.
:::

**Example**

::: code-group

```txt [input]
If a user loses or compromises their password, they must create a help-desk
ticket in @Jira and the @IT Admin resets and distributes the new password
in person or via phone.
```

```txt [output]
If a user loses or compromises their password, they must create a help-desk
ticket in Jira and the IT Admin resets and distributes the new password
in person or via phone.
```

:::

## FAQ

::: details Can I use Smart Text and Element Mentions in custom control responses?
Yes! Smart Text and Element Mentions can be used in custom control responses. Smart Text will be instantly evaluated in the current context of the project.
:::
::: details What happens if I change the name of an element being mentioned?
If you change the name of an element, all mentions of that element will be updated to reflect the new name.
:::
::: details What happens if I delete an element that is mentioned?
If you delete an element that is mentioned, the mention will be replaced with the plaintext name of the element.
:::
