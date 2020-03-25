# Members policy

This document describes the individuals in and around the unified collective.
It describes the motions used to initiate how individuals are nominated and how
they step down.
Finally, it describes how accepted motions are enacted through playbooks for
inviting, onboarding, awarding, succession, and offboarding.

This document is developed by the unified collective core team.

## Table of contents

*   [Persons](#persons)
    *   [Participation](#participation)
*   [Motions](#motions)
    *   [Motion to nominate a contributor](#motion-to-nominate-a-contributor)
    *   [Motion to nominate a maintainer](#motion-to-nominate-a-maintainer)
    *   [Request to become a maintainer](#request-to-become-a-maintainer)
    *   [Request to become a releaser](#request-to-become-a-releaser)
    *   [Request to elect a lead](#request-to-elect-a-lead)
    *   [Request to resign](#request-to-resign)
    *   [Motion to prune](#motion-to-prune)
*   [Playbooks](#playbooks)
    *   [Inviting](#inviting)
    *   [Onboarding](#onboarding)
    *   [Awarding](#awarding)
    *   [Succession](#succession)
    *   [Offboarding](#offboarding)

## Persons

```ascii
+--------------------------------------------------------------------------+
|                                  person                                  |
|                 +------------------------------------------------------+ |
|                 |                        member                        | |
|                 |                 +----------------------------------+ | |
|                 |                 |            maintainer            | | |
| +-------------+ | +-------------+ | +-------------+  +-------------+ | | |
| |    user     | | | contributor | | |    merger   |  |  releaser   | | | |
| +-------------+ | +-------------+ | +-------------+  +-------------+ | | |
|                 |                 +----------------------------------+ | |
|                 +------------------------------------------------------+ |
+--------------------------------------------------------------------------+
```

A **person**, in the scope of collective governance, is any individual that
participates in a space where the collective has a presence.

Participation includes dealing in the projects governed by the collective (such
as using, distributing, or selling), and activity such as code, comments,
commits, edits, emails, issues, posts, pull requests, or tweets.

Spaces includes any online or offline place such as email, GitHub, npm,
Spectrum, or Twitter.

Persons are further divided into two groups: users and members.
A **member** is a person that is part of a team, a **user** is not.

Members are further divided into two groups: contributors and maintainers.
A **maintainer** is an active member whose significant and valuable
participation spans the whole scope of the team and improves the longevity
of the collective, a **contributor** is not.

The set of contributors should be large; the ideal would be ten or more, as
contributors can be contacted to voice their opinions on matters affecting the
community, and could in the future become maintainers.

In some cases, a contributor can be an invited **guest maintainer** on certain
projects governed by an organization team.
Guest maintainers have the same rights and responsibilities as normal
maintainers (specifically mergers, not releasers), except that their
participation focusses on one or a few projects instead of the whole
organization.
Guest maintainers do not have the voting rights that actual maintainers have
and cannot nominate other maintainers.
Guest maintainers should be the exception to the rule, and are invited through a
*motion to grant governance*.

The set of maintainers should be medium; the ideal would be more than three and
less than ten, to spread the workload and avoid burdening or burning out any
person.
The set of maintainers of the moderation team should instead be small; the ideal
would be two or three.

Maintainers of the moderation and core teams are further limited in that they
should not be on both teams at the same time to avoid conflicts of interest.

Organization teams further differentiate between two types of maintainers:
mergers and releasers.
A **releaser** is a maintainer with the authority to release projects produced
by the team, a **merger** is not.

The set of releasers should be small; the ideal would be three or less, to limit
access and reduce risk.

Releasers are required to have an npm account.

One maintainer of an organization team is elected as the team **lead**.
This role must be fulfilled by a collective core team maintainer.

### Participation

Some (but not all) examples of participation can be gathered through GitHub
search, for example, like so:

*   [Find commits by a user in an org][search-commits]
*   [Find issues / PRs opened by a user in an org][search-issues]
*   [Find issues / PRs with comments by a user in an org][search-comments]
*   [Find PRs with reviews by a user in an org][search-reviews]

> You can also [search in the entire collective][search-collective].

Typical participation of a member includes:

*   Asking questions
*   Reporting problems and requesting new features
*   Commenting on issues and pull requests
*   Triaging issues
*   Requesting motions

Typical participation of an organization team maintainer includes:

*   Answering questions and helping novice contributors
*   Contributing code, non-code, and documentation changes that improve the
    scope of the team
*   Reviewing and merging pull requests
*   Participating in initiatives and discussions

Maintainers are not required to contribute code.
It is, however, required that maintainers have actively participated for a
consistent and significant amount of time already.

Typical participation of a moderation team maintainer includes:

*   Enforcing the code of conduct
*   Expelling members and blocking users

Typical participation of a core team maintainer includes:

*   Focusing on overarching concerns
*   Voting to accept or dismiss motions
*   Enacting accepted motions
*   Communicating between all teams

Typical participation of a lead includes:

*   Setting up a team
*   Ensuring initiatives are progressing at a reasonable rate

## Motions

Motions are used to initiate changes in the roles people have based on their
participation.

This section describes who may request a motion (the movant), who may be
nominated (the nominee), and who may vote (the voters).
In some cases, the movant and nominee are the same individual.

Furthermore, this section describes what happens when the vote dismisses a
motion and what playbook is followed when it is accepted.

This section describes motions where both the movant and nominee operate in
*good-faith*.
Additional policy is needed to define *bad-faith* scenarios.

### Motion to nominate a contributor

A user (the nominee) is nominated by a member (the movant) to become a
contributor on one or more team.
Users are free to contact members beforehand to suggest their own nomination.

A motion to nominate a contributor cannot be requested to collective teams.
For collective teams, request a *motion to nominate a maintainer*.

The movant must open an issue on `unifiedjs/collective` to request the motion.
The movant should be convinced that the nominee is indeed an active contributor,
and is therefore tasked to convince the collective core team to accept the
motion, through proof that participation matches that of a contributor.
Other than proof, the motion must include the full name, email address, GitHub
handle, and npm handle (optional) of the nominee, and the teams the nominee is
nominated for.

Any collective core team maintainer may vote.

When the motion is accepted, the lead of a team (if an organization team) or any
maintainer (if a collective team), enacts the motion by following the *inviting*
playbook.

When the motion is dismissed, the nominee is ineligible to be nominated as a
contributor to the relevant team(s) for six months.

### Motion to nominate a maintainer

A person (the nominee) is nominated by a maintainer (the movant) to become a
merger (in case of an organization team) or maintainer (in case of a collective
team) on a single team.
Contributors are free to contact maintainers beforehand to suggest their own
nomination.

The movant must open an issue on `unifiedjs/collective` to request the motion.
The movant should be convinced that the nominee is indeed an active maintainer,
and is therefore tasked with convincing the collective core team to accept the
motion, through proof that participation matches that of a maintainer.
The movant should include, if not already known, the npm handle of the nominee.

Any collective core team maintainer may vote.

When the motion is accepted, the lead of the team (if an organization team) or
any maintainer (if a collective team), enacts the motion by following the
*inviting* playbook (in case the person has not been invited before) and the
*onboarding* playbook.

When the motion is dismissed, the nominee is ineligible to be nominated as a
maintainer to the team for six months.

### Request to become a maintainer

> Also known as: *Motion to nominate a maintainer*.

A contributor (the nominee and movant) who previously held the role of a
maintainer may self-nominate to become a merger (in case of an organization
team) or maintainer (in case of a collective team) on a single team.

The movant must open an issue on `unifiedjs/collective` to request the motion.
The movant is tasked with convincing the collective core team to accept the
motion.
The movant should include, if not already known, their npm handle.

Any collective core team maintainer may vote.

When the motion is accepted, the lead of the team (if an organization team) or
any maintainer (if a collective team), enacts the motion by following the
*onboarding* playbook.

When the motion is dismissed, the nominee is ineligible to be nominated as a
maintainer to the team for six months.

### Request to become a releaser

> Also known as: *Motion to nominate a releaser*.

In case of an organization team, a merger (the nominee and movant) may
self-nominate to become a releaser on a team.

The movant must open an issue on `unifiedjs/collective` to request the motion.
The movant is tasked with convincing the collective core team to accept the
motion.
The movant must include, if not already known, their npm handle.

Any collective core team maintainer may vote.

When the motion is accepted, the lead of the team enacts the motion by following
the *awarding* playbook.

When the motion is dismissed, the nominee is ineligible to be nominated as a
releaser to the team for six months.

### Request to elect a lead

> Also known as: *Motion to elect a lead*.

In case of an organization team, yearly, the lead (the movant) must open an
issue on the team’s governance repository to notify maintainers that elections
are coming up.
Maintainers of the team that are interested in volunteering as lead but are not
collective core team maintainers, may then move to become core team maintainers.

When one month has passed, the movant must open another issue on the team’s
governance repository to request a motion to elect a lead.
The movant is tasked with compiling a list of nominees with all maintainers of
the team, that are also collective core team maintainers, and are interested in
volunteering as lead.
The nominees may include the movant.

Any maintainer of the team may vote.

The motion cannot be dismissed.

The motion is accepted immediately if there is only one nominee and otherwise
after 14 days.
The movant enacts the motion by following the *succession* playbook for the
nominee with the most votes.

### Request to resign

> Also known as: *Motion to be excused from duty*.

Any maintainer (the movant and nominee) may request a motion to be excused from
duty.

The movant must open an issue on `unifiedjs/collective` to request the motion.
It is discouraged to request to resign if the nominee is the lead, or the last
maintainer of a team, before finding suitable replacement.
The motion must include the new role the nominee wishes to have, which must
require less participation that their current role (one of: merger, maintainer,
or contributor).

The motion cannot be dismissed.

The motion is accepted.
The lead of a team (if an organization team) or any maintainer (if a collective
team), enacts the motion by following the *offboarding* playbook.
The offboarding may take up to 45 days (in case of a collective team maintainer)
or 7 days (in case of a releaser) if a suitable replacement needs to be found.

### Motion to prune

The lead of a team (if an organization team) or any maintainer (if a collective
team), known as the movant, may request a motion to prune a team.
A motion to prune cannot be requested within six months of the previous motion
to prune.

The movant must open an issue on the team’s governance repository to request the
motion.
The motion asks current maintainers for their continued volunteering efforts.

Any maintainer that responds affirmative remains on the team in their current
role.

The motion cannot be dismissed.

The motion is accepted after 14 days.
Maintainer that did not respond (the nominees) are treated as if they had
requested a *motion to be excused from duty* with a role of `contributor`.
The movant enacts the motion by following the *offboarding* playbook for the
nominees.
The offboarding may take up to 45 days (in case of a collective team maintainer)
or 7 days (in case of a releaser) if suitable replacements needs to be found.
After offboarding the nominees are immediately eligible to *request to become a
maintainer* again.

## Playbooks

Playbooks describe the steps the enactor and nominee(s) must follow to enact
changes initiated through accepted motions.

### Inviting

The *inviting* playbook is followed when a *motion to nominate a contributor*,
and in some cases a *motion to nominate a maintainer* or a *motion to grant
governance*, is accepted.
The enactor of the playbook is a lead of a team (if an organization team) or any
maintainer (if a collective team).
The result of *inviting* is that a user (the nominee) becomes a contributor on
one or more teams.

*   Nominee ensures 2FA is enabled on GitHub
*   Nominee confirms that they have read, understand, and agree to uphold the
    code of conduct
*   Enactor adds the nominee, if not already listed, to
    [`data/humans.yml`][humans]
*   Enactor adds the nominee to the respective teams as a `contributor` in
    [`data/teams.yml`][teams]
*   Tooling automatically invites the nominee and sets their [permissions][] on
    GitHub within 24 hours

### Onboarding

The *onboarding* playbook is followed when a *motion to nominate a maintainer*
is accepted.
The enactor of the playbook is the lead of a team (if an organization team) or
any maintainer (if a collective team).
The result of *onboarding* is that a contributor (the nominee) becomes a
maintainer on a team.

*   Enactor adds the npm handle of the nominee, if known and not already listed,
    to [`data/humans.yml`][humans]
*   Enactor changes the role of the nominee in the team from `contributor` to
    `merger` (if an organization team) or `maintainer` (if a collective team) in
    [`data/teams.yml`][teams]
*   Tooling automatically updates the nominee and changes their [permissions][]
    on GitHub, and invites the nominee and sets their permissions on npm, within
    24 hours
*   Enactor and nominee should schedule a call to walk through relevant
    processes, documents, and expectations

If the nominee is added to a collective team, the following steps additionally
apply:

*   Enactor adds the nominee to OpenCollective
*   [**@wooorm**][wooorm] sets up an email address for the nominee and ensures
    the relevant collective email addresses are forwarded to it
*   Nominee confirms emails can be received

### Awarding

The *awarding* playbook is followed when a *motion to nominate a releaser* is
accepted.
The enactor of the playbook is the lead of a team.
The result of *awarding* is that a merger (the nominee) becomes a releaser on a
team.

*   Nominee ensures 2FA is enabled on npm
*   Enactor adds the npm handle of the nominee, if not already listed, to
    [`data/humans.yml`][humans]
*   Enactor changes the role of the nominee in the team from `merger` to
    `releaser` in [`data/teams.yml`][teams]
*   Tooling automatically updates the nominee and changes their [permissions][]
    on GitHub and npm within 24 hours
*   Enactor and nominee should schedule a call to walk through relevant
    processes, documents, and expectations

### Succession

The *succession* playbook is followed when a *motion to elect a lead* is
accepted.
The enactor of the playbook is the current lead of the team.
The result of *succession* is that a maintainer (the nominee) becomes the lead
of the team.

If the nominee is not the enactor, the following steps are taken:

*   Enactor changes the `lead` field in [`data/teams.yml`][teams] to the GitHub
    handle of the nominee
*   Tooling automatically updates the enactor and nominee and changes their
    [permissions][] on GitHub within 24 hours.
    Enactor may have to manually perform destructive actions as reported by
    tooling
*   Enactor and nominee should schedule a call to walk through relevant
    processes, documents, and expectations

### Offboarding

The *offboarding* playbook is followed when a *motion to be excused from duty*,
and in some cases a *motion to prune*, is accepted.
The enactor of the playbook is the lead of a team (if an organization team) or
any maintainer (if a collective team).
If the enactor is also the nominee (because the nominee is the last maintainer
of a team), a collective core team maintainer is the enactor.
The result of *offboarding* is that a maintainer (the nominee) becomes a merger,
maintainer, or contributor on a team.

Note that if the nominee is being excused from duty as a collective core team
maintainer, they are also excused from duty as lead of any organization teams.

*   If nominee is being excused from duty as a lead, the collective core team
    appoints a guest lead.
    The guest lead is tasked with requesting a motion to elect a lead.
    This may take up to 45 days
*   If the nominee is being excused from duty as a collective moderation team
    maintainer, and the team is getting too small, the collective core team
    appoints a guest moderator.
    The guest moderator and remaining moderators are tasked with finding
    suitable replacement.
    This may take up to 45 days
*   If the nominee is being excused from duty as a releaser and the set of
    releasers on the team is getting too small, enactor raises a call for
    releasers to ask that current mergers request a *motion to nominate a
    releaser*.
    This may take up to 7 days
*   Enactor changes the role of the nominee in the respective teams to the
    approved role in [`data/teams.yml`][teams]
*   Tooling automatically updates the nominee and changes their [permissions][]
    on GitHub and npm within 24 hours.
    Enactor may have to manually perform destructive actions as reported by
    tooling

If the nominee is removed from a collective team as a maintainer, the following
steps additionally apply:

*   Enactor removes the nominee from OpenCollective
*   [**@wooorm**][wooorm] removes the nominee’s email address and ensures the
    relevant collective email addresses are no longer forwarded to them.

<!-- Definitions -->

[wooorm]: https://github.com/wooorm

[humans]: data/humans.yml

[teams]: data/teams.yml

[permissions]: permissions.md

[search-commits]: https://github.com/search?type=Commits&o=desc&s=committer-date&q=org:syntax-tree+author:eush77

[search-issues]: https://github.com/search?type=Issues&o=desc&s=created&q=org:remarkjs+author:ben-eb

[search-comments]: https://github.com/search?type=Issues&o=desc&s=created&q=org:vfile+commenter:ChristianMurphy

[search-reviews]: https://github.com/search?type=Issues&o=desc&s=created&q=org:unifiedjs+reviewed-by:Murderlon

[search-collective]: https://github.com/search?q=org:unifiedjs+org:vfile+org:syntax-tree+org:remarkjs+org:rehypejs+org:retextjs+org:redotjs+org:micromark+org:mdx-js
