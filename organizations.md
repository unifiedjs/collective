# Organizations policy

This document describes how organizations are managed by an organization team
and the collective teams.
It makes several suggestions on how projects are maintained and describes how
projects are managed.
Furthermore, it describes how to initiate management of a project through
informal initiatives or formal motions.
Finally, it describes how accepted motions are enacted through playbooks for
archival, removal, withdrawal, and granting.

This document is developed by the unified collective core team.

## Table of contents

* [Projects](#projects)
  * [Maintenance](#maintenance)
  * [Management](#management)
  * [Meta projects](#meta-projects)
* [Motions](#motions)
  * [Motion to archive a project](#motion-to-archive-a-project)
  * [Motion to delete a project](#motion-to-delete-a-project)
  * [Motion to withdraw governance](#motion-to-withdraw-governance)
  * [Motion to grant governance](#motion-to-grant-governance)
* [Playbooks](#playbooks)
  * [Archival](#archival)
  * [Removal](#removal)
  * [Withdrawal](#withdrawal)
  * [Granting](#granting)

## Projects

Projects relating to the areas covered by the collective can be governed inside
or outside of the collective: anyone can develop, maintain, manage, and
self-govern projects.

Projects can flourish whether they are governed by the collective or not.
But wilting projects reflect badly on the collective as they provide a bad user
experience.
Signs of a wilting project are, for example, that issues are left unanswered or
that dependencies are outdated.

Maintainers of projects not governed by the collective can request a *motion to
grant governance* to pass governance over to the collective.
Maintainers of wilting projects typically grant governance as they no longer
want to maintain those projects.
Maintainers of flourishing projects typically make good candidates to become
maintainers on an organization team.

A **project**, in the scope of collective governance, is a single repository on
GitHub governed by a team.

All projects must be in a GitHub organization associated with an organization
team.
Typically, all projects inside a GitHub organization are governed by the
associated organization team.
However, in the case of the `unifiedjs` GitHub organization, some projects are
governed by a collective team.

A **package**, in the scope of collective governance, is a published asset
originating from a project.
Not every project contains a package.
Some projects include multiple packages.
Packages originating from a project governed by a team are governed by that
team.

Organizations define how they maintain their projects but the following section,
*Maintenance*, gives a few suggestions.

The collective defines how projects are managed in the *Management* section.

Organizations can have **meta projects** that to discuss maintenance and
management.
Some meta projects are required by the collective, as described in the
*Meta projects* section.

### Maintenance

Any member may, on their own initiative, participate by triaging issues and pull
requests.
Triage is a process of sifting through all the things that can be worked on to
select the few things that will be worked on.
A helpful tool with triaging is [GitHub Labels][gh-labels].
The collective has tooling in place to ensure all projects have the same [set of
labels][labels].

Any maintainer may, on their own initiative, participate by pushing directly to
a project or merging any pull request, within the scope of their organization.
Maintainers are trusted to use their judgment in deciding whether to do so.
Maintainers should, however, create a pull request if the changes could warrant
discussion or review, and wait to merge a pull request that makes a significant
change until discussion has occurred.

Any releaser may, on their own initiative, release a package.
Releasers are trusted to use their judgment in deciding whether to do so.
Releasers should, however, consider that quickly releasing backwards-compatible
fixes and changes benefits users, but batching major changes together limits
churn.

Any moderator (a maintainer of the collective moderation team) may, on their own
initiative, moderate a post.
Moderators are trusted to use their judgment in deciding whether to do so.
Moderators should, however, consider whether there are tangible grounds for
moderation and the possible intent of the author.

Core (maintainers of the collective core team) may not use their administrative
permissions, except when explicitly allowed by collective governance
documentation, or when edge-cases occur that are not yet covered by collective
governance documentation.
Core may, of course, participate as allowed by their other roles (such as that
they may maintain a project if they are a maintainer on an organization team).

### Management

Some persons may initiate the management of a project by requesting a relevant
formal motion.
Other management initiatives, such as creating a new project or moving a project
into the collective, are intentionally informal.
These informal initiatives still cause changes to the project if the project is
thereafter subject to the governance policies of the collective.

Any member may **create a new project**.
This is an informal initiative and does not involve requesting a motion.
Governance dictates that all members except for the team lead thereafter loose
certain permissions on that project.

Any member may **fork a project**.
This is an informal initiative and does not involve requesting a motion.
The collective does not govern the fork.

Any person may **transfer a project into the collective**.
Members may do this through an informal initiative that does not involve
requesting a motion.
Any person can do this through a formal initiative that involves a *motion to
grant governance*.
Governance dictates that persons thereafter loose certain permissions on that
project.
A formal motion can result in more permissions.

Any member may request to **transfer a project from the collective**.
This is a formal initiative that involves a *motion to withdraw governance*.

Any member may request to **archive a project**.
This is a formal initiative that involves a *motion to archive a project*.

Any member may request to **delete a project**.
This is a formal initiative that involves a *motion to delete a project*.

### Meta projects

The collective dictates that organization teams set up several meta projects.
These projects and their requirements are as follows:

###### `governance`

The `governance` project documents how the organization is governed.
The governance project links to different policies from the collective, and
states where and how organization policies deviate.

###### `.github`

The `.github` project contains community health files for the organization.
This project has a special name supported by GitHub to provide default community
health files for a whole organization.
As unified collective organizations typically consists of many projects, having
defaults makes sense.
Other projects may overwrite these files.

It should include the following health files:

* `.github/ISSUE_TEMPLATE/*.md`:
  Templates that guide new issues ([example][c-issue])
* `.github/pull-request-template.md`:
  Template that guides new PRs ([example][c-pr])
* `code-of-conduct.md`:
  Copy of our [code of conduct][c-coc]
* `contributing.md`:
  Docs that explain how to contribute ([example][c-contributing])
* `funding.yml`:
  Config file to display a sponsor button ([example][c-funding])
* `security.md`:
  Docs that explain how to report security issues ([example][c-security])
* `support.md`:
  Docs that explain how to get support ([example][c-support])

Furthermore, it should include a `readme.md`.

## Motions

Motions are used to initiate certain changes to management of a project in the
collective.

This section describes who may request a motion (the movant) and who may vote
(the voters).

Furthermore, this section describes what happens when the vote dismisses the
motion and what playbook is followed when it is accepted.

### Motion to archive a project

A member (the movant) requests that a project is archived.

The movant must open an issue on the team’s governance repository to formally
request the motion.

The movant is tasked with convincing the team to accept the motion.
Any maintainer of the team may vote.

When the motion is accepted, the lead of the team enacts the motion by following
the *archival* playbook.

Nothing happens when the motion is dismissed.

### Motion to delete a project

A member (the movant) requests that a project is deleted.
It is discouraged to request to delete a project, instead a *motion to archive a
project* is preferred.

The movant must open an issue on `unifiedjs/collective` to formally request the
motion.

The movant is tasked with convincing the team to accept the motion.
Any collective core team maintainer may vote.

When the motion is accepted, the lead of the team enacts the motion by following
the *removal* playbook.

Nothing happens when the motion is dismissed.

### Motion to withdraw governance

A member (the movant) requests that a project is transferred from the
collective.

The movant must open an issue on `unifiedjs/collective` to formally request the
motion.

The movant is tasked with convincing the team to accept the motion.
Any collective core team maintainer may vote.

When the motion is accepted, the lead of the team enacts the motion by following
the *withdrawal* playbook.

Nothing happens when the motion is dismissed.

### Motion to grant governance

A person (the movant) requests that a project is transferred to the collective.

The movant must open an issue on the team’s governance repository to formally
request the motion.
The outside maintainer (the current owner of the project) must confirm that they
agree with the proposed changes in governance.

The movant is tasked with convincing the team to accept the motion.
Any maintainer of the team may vote.

When the motion is accepted, the lead of the team enacts the motion.
If the outside maintainer is not a member of the team, the enactor first follows
the *inviting* playbook.
The enactor follows the *granting* playbook.

When the motion is dismissed, the project is ineligible to be granted again for
six months.

## Playbooks

Playbooks describe the steps the enactor must follow to enact changes initiated
through accepted motions.

### Archival

The *archival* playbook is followed when a *motion to archive a project* is
accepted.
The enactor of the playbook is a lead of a team.
The result of *archival* is that packages are deprecated and a repository is
archived, because the project no longer maintained by the collective.

* If the project includes published packages, enactor (or a by the enactor
  appointed releaser) deprecates them when needed
* Enactor may close open issues and pull requests to notify persons that the
  project is no longer maintained
* Enactor updates the repository description on GitHub to state that the
  project is no longer maintained
* Enactor archives the repository on GitHub

### Removal

The *removal* playbook is followed when a *motion to delete a project* is
accepted.
The enactor of the playbook is a lead of a team.
The result of *removal* is that packages are deprecated and a repository is
deleted.

* If the project includes published packages, enactor (or a by the enactor
  appointed releaser) deprecates them when needed
* Enactor deletes the repository on GitHub

### Withdrawal

The *withdrawal* playbook is followed when a *motion to withdraw governance* is
accepted.
The enactor of the playbook is a lead of a team.
The person is the proposed owner of the project.
The result of *withdrawal* is that a project is no longer governed by the
collective.

* Enactor removes references to the unified collective from the project
* Enactor transfers the project to person
* If the project includes published packages, enactor (or a by the enactor
  appointed releaser) moves them from the organization to their own account,
  and invites person as a maintainer to all packages
* If there are guest maintainers associated with the project, enactor removes
  them from [`github-tools`][gh-tools]

### Granting

The *granting* playbook is followed when a *motion to grant governance* is
accepted.
The member is the current owner of the project.
The enactor of the playbook is a lead of a team.
The result of *granting* is that a project comes under governance of the
collective.

* Member transfers the project to enactor
* If the project includes published packages, member invites
  [**@wooorm**][wooorm] as a maintainer to all packages
* Enactor transfers the project to the organization
* If the member is contributor on the team, enactor configures member as a
  guest maintainer in [`github-tools`][gh-tools]
* Tooling will automatically update [permissions][] on GitHub and npm within
  24 hours.
  Enactor may have to manually perform actions as reported by tooling
* Enactor and member make sure the project matches other projects inside the
  organization, such as having a “Contributing” section, a proper license,
  etc.

<!-- Definitions -->

[c-coc]: code-of-conduct.md

[c-contributing]: https://github.com/unifiedjs/.github/blob/main/contributing.md

[c-funding]: https://github.com/unifiedjs/.github/blob/main/funding.yml

[c-issue]: https://github.com/unifiedjs/.github/tree/main/.github/ISSUE_TEMPLATE

[c-pr]: https://github.com/unifiedjs/.github/blob/main/.github/pull-request-template.md

[c-security]: https://github.com/unifiedjs/.github/blob/main/security.md

[c-support]: https://github.com/unifiedjs/.github/blob/main/support.md

[gh-labels]: https://help.github.com/en/articles/about-labels

[gh-tools]: https://github.com/unifiedjs/github-tools

[labels]: https://github.com/unifiedjs/github-tools/labels

[permissions]: permissions.md

[wooorm]: https://github.com/wooorm
