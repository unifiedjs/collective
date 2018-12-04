# unified Collective GitHub Policy Draft

This document describes how the GitHub organizations under the unified
collective can be managed.
It’s a guide for organization teams to follow, but they are free in defining
their own GitHub policy instead.

This document is developed by the unified collective core team.

## Summary

*   There’s a difference between unified teams and GitHub teams
*   The GitHub org has teams for each collective team, e.g.,
    `@remarkjs/core` refers to the unified collective core team.
*   The GitHub org has an emeritus team with inactive members
*   The GitHub org has a mergers team with active members with write rights
*   The GitHub org has a releasers team with active members with admin rights
*   Outside collaborators are defined on a per-project basis, typically because
    they previously authored or maintained a project, these members have the
    same rights and responsibilities as mergers on that project

## Table of Contents

*   [Members](#members)
*   [GitHub Organization](#github-organization)
*   [GitHub Teams](#github-teams)
*   [Repositories](#repositories)
*   [Removing members](#removing-members)
*   [License](#license)

## Members

Members in an organization team can have either of the following rights.

*   `emeritus`
    — previously active maintainers
*   `write`
    — active maintainers
*   `admin`
    — active maintainers with extra administration rights
*   `lead`
    — leader of active maintainers

## GitHub Organization

Core collective team members will have admin access over the GitHub
organization.

The organization should have an admin repository, `governance`, detailing how
the organization is governed.

## GitHub Teams

The GitHub organization is divided into GitHub teams:

*   `members`
    — active members of the unified organization.
    Maintained by admins.
    All repositories under the GitHub organization are governed with read
    rights.
*   `mergers`
    — active members of the unified organization.
    Maintained by admins.
    All repositories under the GitHub organization are governed with write
    rights.
*   `releasers`
    — active members with release rights.
    Maintained by lead.
    All repositories under the GitHub organization are governed with admin
    rights.
*   `emeritus`
    — inactive members.
    Maintained by releasers.
    All repositories under the GitHub organization are governed with read
    rights.
*   `core`
    — active core collective team members.
    Maintained by lead.
    All repositories under the GitHub organization are governed with admin
    rights.
*   `moderators`
    — active moderators collective team members.
    Maintained by lead.
    All repositories under the GitHub organization are governed with admin
    rights.

Note that there are no active members with just read rights.

## Repositories

Any repository created under the GitHub organization is considered to be a
project under the ownership of that organization and the unified collective.

Any organization member may request the management of repositories within
organization by opening an issue in the governance repository.
The actions requested could be:

*   Creating a new repository
*   Transferring a repository into or out of the organization
*   Archiving an existing repository
*   Deleting an existing repository

Provided there are no objections from the core collective team, such requests
are approved automatically after 72 hours.
If any objection is made, the request may be moved to a majority vote in the
core team.
If the core team rejects the request, then the request is denied.

## Removing members

Only the core team may remove an individual from a team or block an individual.

Any organization member may request the removal of a member or blocking of an
individual by opening an issue in the central governance repository
(`unifiedjs/governance`).
When requesting to block an individual, one approval from the core collective
is enough to block the individual at any time.
When requesting to remove a member, provided there are no objections from the
core collective team, such requests are approved automatically after 72 hours.
If any objection is made in 72 hours, the request may be moved to a majority
vote in the core team.
If after a vote the core team rejects the request for removing, then the request
is denied in the case of removing, or reverted in the case of blocking.

## License

This work is licensed under a
[Creative Commons Attribution 4.0 International License][license].

<!-- definitions -->

[license]: https://creativecommons.org/licenses/by/4.0/
