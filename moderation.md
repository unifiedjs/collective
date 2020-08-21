# Moderation policy

This document describes how moderation occurs across the collective.
It describes how people can handle code of conduct violations.
Furthermore it describes the actions any maintainer, and specifically moderators
(maintainers of the collective moderation team), can make.

This document is developed by the unified collective moderation team and the
unified collective core team.

## Table of contents

*   [Violations](#violations)
    *   [Reporting](#reporting)
    *   [Enforcement](#enforcement)
*   [Playbooks](#playbooks)
    *   [Moderation](#moderation)
    *   [Warning](#warning)
    *   [Expulsion](#expulsion)
    *   [Blocking](#blocking)

## Violations

A **violation**, in the scope of collective governance, is any post that
violates the [code of conduct][coc].
The collective moderation team decides what inappropriate behavior constitutes a
violation.

A post includes activity that can be moderated, such as code, comments, commits,
edits, issues, posts, or pull requests, in a project governed by the collective.
Posts additionally include activity that cannot be moderated, such as emails or
tweets, from members of the collective.

**Moderation**, in the scope of collective governance, includes actions such as
editing, deleting, hiding, or locking one or more posts to address violations.
Not all posts can be moderated.

These actions are not considered moderation if they do not address violations,
such as minor edits to fix formatting or typos, hiding outdated posts, or
locking old issues.

Persons should carefully consider the possible intent of the author of a
violation.
It may be that they made an error, are not familiar with the code of conduct,
are unaware that something is inappropriate, or that cultural differences exist.
In such cases, the author can be given an opportunity to correct the error they
made.
This does not excuse a violation, but sometimes making an author aware is better
than enforcement.

Violations should be reported and can result in enforcement such as moderation,
warning, blocking, and expulsion.

This policy does not restrict any individual blocking another individual from
their personal GitHub account (or in another space, such as Twitter).
A personal block is not considered enforcement of moderation.

### Reporting

Anyone may report a violation.
Members should report violations.
Violations can be reported in the following ways:

*   In private, via the collective email address `moderation@unifiedjs.com`
*   In private, via email to one or more moderators
*   In public, via a new post in the same thread as the violation (mentioning
    `@unifiedjs/moderators`)

Reporting in private is appropriate when the reporter does not feel comfortable
directly or publicly making the request.
Reports sent to `moderation@unifiedjs.com` are forwarded to all maintainers of
the collective moderation team.

Reports should contain as much information and context as possible, including
the URL and a screenshot of the violation.
Details may be modified to obscure obscene or offensive content.
Quoting original content of a violation within a report is not a violation.
However, discretion is advised when including such quotes in public reports.

Members must not discuss specific details of reports in any public space.

Violations are reported to track violations, their context, and the resulting
enforcement, across the collective.
Reports are also used to track continued violations across the collective.

### Enforcement

Moderators may enforce moderation, warning, expulsion, and blocking.

If the violation is from a user (an individual that is not a member), any
maintainer may enforce moderation and blocking.

Moderators may **moderate** any post, and maintainers may moderate a post from a
user, by following (if possible) the *moderation* playbook.

For extreme violations, moderators may **expel** any member by following the
*expulsion* playbook, and moderators may **block** any person, and maintainers
may block a user, by following the *blocking* playbook.

Moderators must keep track of the violations (that are indeed offenses) of
an offender.
First and second offenses must result in following the *warning* playbook.
A third offense, if offender is a member, must result in following the
*expulsion* playbook.
A third offense (or the fourth offense, if the offender is expelled) must result
in following the *blocking* playbook.

## Playbooks

Playbooks describe the steps an enactor must follow to enact enforcement of the
code of conduct.

### Moderation

The enactor of a *moderation* playbook is a maintainer.
The offender is a person that authored a violation.
The result of *moderation* is that a violation is no longer present.

*   Enactor ensures the violation is reported
*   If the offender is a member, the enactor should give the offender a
    reasonable opportunity to self-moderate the post.
    If the offender disagrees to self-moderate, the enactor can escalate to the
    collective moderation team, by following up on the report, while not
    continuing to enact moderation.
    Moderators can decide to continue enacting moderation
*   Enactor moderates the post, such as by editing, deleting, hiding, or locking
*   Enactor posts a notification within the original thread, mentioning the
    offender, that they are in violation of the code of conduct, what behavior
    was unacceptable, what changes were made to the post, and previously taken
    steps to resolve, to justify why moderation was warranted

### Warning

The enactor of a *warning* playbook is a moderator (a maintainer of the
collective moderation team).
The offender is a person that authored a violation for the first or second time.
The result of *warning* is that an offender is aware that their behavior is
in violation of the code of conduct, that the code of conduct is enforced,
and of future enforcements for continued violations.

*   Enactor posts a warning within the original thread, confirming the
    justification of why moderation was warranted, that this their first or
    second official warning, and how a third violation is enforced

### Expulsion

The enactor of an *expulsion* playbook is a moderator (a maintainer of the
collective moderation team).
The offender is a member that authored an extreme or continued violation.
The *expulsion* playbook is followed after (swift) moderation.
The result of *expulsion* is that a member is excused from duty and removed from
all teams.

*   Enactor ensures the violation is reported
*   Enactor coordinates with a maintainer of the collective core team to jointly
    and swiftly enact the *offboarding* playbook for all teams the offender
    is currently a member of, but instead of assigning a new role, removing them
    entirely
*   Enactor posts within the original thread, mentioning the offender,
    explaining what behavior was unacceptable, that this was the offender’s
    third violation or an extreme violation, and confirming that they are
    expelled from the collective

Expulsion poses an imminent risk to the collective as it could cause the
offender to act in extreme bad-faith and misuse the permissions they were
granted.

### Blocking

The enactor of a *blocking* playbook is a moderator (a maintainer of the
collective moderation team) and in some cases a maintainer.
The offender is a person that authored an extreme violation, or a continued
third (or fourth) violation.
The result of *blocking* is that an offender is forcefully removed from the
spaces governed by the collective.

*   Enactor ensures the violation is reported
*   Enactor coordinates with a maintainer of the collective core team to jointly
    block the offender in the spaces governed by the collective, such as GitHub
    and Twitter
*   Enactor posts within the original thread, mentioning the offender,
    explaining what behavior was unacceptable, that this was the offender’s
    third/fourth violation or an extreme violation, and confirming that they are
    blocked from the collective

GitHub provides an interface for blocking persons for 1, 3, 7, or 30 days, or
indefinitely.
This policy intentionally does not dictate whether blocking is temporary or
indefinite, and leaves that up to moderators.

<!-- Definitions -->

[coc]: code-of-conduct.md
