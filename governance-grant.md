# Project Governance Grant Policy

This document describes how specific projects can move under a unified
collective organization.
It’s a guide for organization teams to follow, but they are free to define
their own governance grant policy instead.

This document is developed by the unified collective core team.

## Summary

Projects in the ecosystem can flourish outside an organization.
Wilting projects can reflect badly on the collective and provide a bad end-user
experience.

Maintainers of outside projects can grant governance of a project to the
organization team.
If the team accepts governance, the project moves under the organization.
Previous maintainers become outside collaborators and loose and gain some
rights.

Maintainers of wilting projects typically grant governance as they no longer
want to maintain those projects.
Maintainers of flourishing projects typically make good candidates for team
membership.

## Table of Contents

*   [Glossary](#glossary)
*   [Applicable Projects](#applicable-projects)
*   [Governance grant procedure](#governance-grant-procedure)
*   [License](#license)

## Glossary

*   **org**
    — unified organization team
*   **inside project**
    — project maintained by an **org**
*   **outside project**
    — project maintained outside of an **org**
*   **member**
    — active member of an **org**
*   **outside maintainer**
    — individual who maintains an **outside project**
*   **outside collaborator**
    — non-member who granted governance over an **outside project**

## Applicable Projects

Organization teams maintain projects in the ecosystem around their area of
expertise from inside an organization.
Projects in the ecosystem can also be maintained outside of an organization:
anyone can develop, maintain, and self-govern such projects.

Outside projects can flourish, but sometimes they could benefit from being
governed by the organization.
Signs of a wilting project are for example that issues are left unanswered or
that dependencies are outdated.

## Governance grant procedure

*   Optionally, a **member** may contact an **outside maintainer** to suggest
    governance over an applicable **outside project** to be granted to an
    **org**.
    Alternatively, members may nominate outside collaborators for membership.
    An **outside maintainer** may decline these suggestions
*   An **outside maintainer** nominates a project they administer for donation
    on the organization’s governance repository (e.g., `remarkjs/governance`)
*   **Members** review whether adopting the project makes sense and whether
    they accept governance over the repository.
    <!-- TODO: update when consensus seeking is drafted, maybe longer?. -->
    Provided there are no objections from members, such requests are approved
    automatically after 72 hours.
    If any objection is made, the request may be moved to a majority vote in
    the core team.
    If the vote rejects the request, the project is not adopted
*   The **outside maintainer** adds a **member** to the **outside project** on
    GitHub and npm
*   The **member** and **outside collaborators** make sure the project matches
    **inside projects**, such as having a “Contributing” section, a proper
    license, etc.
*   The **member** moves the project, and configures the **outside maintainers**
    <!-- TODO: link to `governance.md` if there’s a specific section -->
    as **outside collaborators**

## License

This work is licensed under a
[Creative Commons Attribution 4.0 International License][license].

<!-- definitions -->

[license]: https://creativecommons.org/licenses/by/4.0/
