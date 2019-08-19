# unified Collective Permissions Policy Draft

This policy describes permissions the people in the collective have across
several services.

Which permissions to grant is determined by optimizing for the following
conflicting requirements:

*   Limiting access to reduce risk
*   Increasing access to improve the bus factor
*   Enabling persons to move forward without undue delay

Services governed by the collective include: [GitHub](#github), [npm](#npm),
[Spectrum](#spectrum), [OpenCollective](#opencollective), [Twitter](#twitter),
[domains](#domains), and [email](#email).

This document is developed by the unified collective core team.

## Table of Contents

*   [GitHub](#github)
    *   [Summary](#summary)
    *   [GitHub Organization](#github-organization)
    *   [GitHub Teams](#github-teams)
    *   [Repositories](#repositories)
*   [npm](#npm)
    *   [Summary](#summary-1)
    *   [npm Organization](#npm-organization)
    *   [npm Teams](#npm-teams)
    *   [Packages](#packages)
*   [Spectrum](#spectrum)
*   [OpenCollective](#opencollective)
*   [Twitter](#twitter)
*   [Domains](#domains)
*   [Email](#email)
*   [License](#license)

## GitHub

[GitHub][] permissions are automated in [`github-tools`][gh-tools].

It is required for members of the unified collective to have a GitHub account.

### Summary

*   There’s a difference between unified teams and GitHub teams
*   Active members of the unified collective core team are owners of all GitHub
    organizations
*   Active members of the unified collective moderation team are members of all
    GitHub organizations
*   All members of a unified organization team, active or not, are members of
    their respective GitHub organization
*   GitHub orgs have an emeritus team.
    Its members have **triage** permissions
*   GitHub orgs have a mergers team.
    Its members have with **write** permissions
*   GitHub orgs have a releasers team.
    Its members have **maintain** permissions
*   GitHub orgs have a core and a moderation team.
    Its members have **admin** permissions.

### GitHub Organization

Each GitHub organization should have an admin repository, `governance`,
detailing how the organization is governed.

Active core team members are [**owners**][gh-org-perms] of all GitHub
organizations.
This gives them the most powerful permissions.

Active moderation team members are [**members**][gh-org-perms] of all GitHub
organizations.

All members of a unified collective organization team, active or not, are
[**members**][gh-org-perms] of their respective GitHub organization.

### GitHub Teams

The GitHub organization consists of GitHub teams:

*   `emeritus`
    — Inactive members of the unified collective organization team.
    Has [**triage**][gh-repo-perms] permissions.
    Maintained by the releasers of the organization team.
*   `members`
    — Active members of the unified collective organization team.
    Has [**triage**][gh-repo-perms] permissions.
    Maintained by the releasers of the organization team.
*   `mergers`
    — Active mergers of the unified collective organization team.
    Has [**write**][gh-repo-perms] permissions.
    Maintained by the releasers of the organization team.
*   `releasers`
    — Active releasers of the unified collective organization team.
    Has [**maintain**][gh-repo-perms] permissions.
    Maintained by the lead of the organization team.
*   `core`
    — Active members of the unified collective core team.
    Has [**admin**][gh-repo-perms] permissions.
    Maintained by the lead of the organization team.
*   `moderators`
    — Active members of the unified collective moderation team.
    Has [**admin**][gh-repo-perms] permissions.
    Maintained by the lead of the organization team.

Core team members and moderators will limit use of the granted admin
capabilities to that required to carry out administrative work across the GitHub
organizations.

### Repositories

Every repository in a GitHub organization is considered to be a project under
the governance of the respective unified collective organization team and
therefore also the unified collective.

Every repository in a GitHub organization is governed by all GitHub teams.

## npm

[npm][] permissions are automated in [`npm-tools`][npm-tools].

It is optional for members of the unified collective to have an npm account.
Members without an account are disregarded in this section.

### Summary

*   There’s a difference between unified teams and npm teams
*   Active members of the unified collective core team, are admins of all npm
    organizations
*   The lead of a unified collective organization team is an owner of their
    respective npm organization
*   Active members of a unified team are members of their respective npm
    organization
*   npm orgs have a mergers team.
    Its members have with read permissions
*   npm orgs have a releasers team.
    Its members have read/write permissions

### npm Organization

The lead of a unified collective organization team is an
[**owner**][npm-org-perms] of the respective npm organization.
This gives them the most powerful permissions.

Active unified collective core team members are [**admins**][npm-org-perms] of
all npm organizations.

Active members of a unified organization team are [**members**][npm-org-perms]
of their respective npm organization.

### npm Teams

The npm organization is divided into npm teams:

*   `mergers`
    — Active mergers of the unified team.
    Has [**read**][npm-repo-perms] permissions.
*   `releasers`
    — Active releasers of the unified team.
    Has [**read/write**][npm-repo-perms] permissions.

### Packages

Every package (that is parseable, valid, has a name, and is not private) in a
repository (that is not archived) in a GitHub organization is considered to be a
project under the governance of the respective unified collective organization
team and therefore also the unified collective.

Every package in an npm organization is governed by all teams.

## Spectrum

The `unified` and `mdx` communities on [Spectrum][] are governed by the
collective.
They are respectively owned by [**@wooorm**][wooorm] and [**@johno**][johno].
The reason for this is that Spectrum allows one owner.

It is optional for members of the unified collective to be present on Spectrum.
Members without a presence are disregards in this section.

Active members of the MDX team that are present on Spectrum, are marked as team
members in the `mdx` community.

Active members of other teams that are present on Spectrum, are marked as team
members in the `unified` community.

## OpenCollective

The `unified` collective on [OpenCollective][] is governed by the collective.

Core collective team members are admins of the Collective.
Moderation collective team members are marked as core contributors.

It is required for members of the core and moderation collective teams to be
listed on OpenCollective.

## Twitter

The [`unifiedjs`](https://twitter.com/unifiedjs) account on [Twitter][] is
governed by the collective.
It is owned by [**@wooorm**][wooorm].

## Domains

The [`unifiedjs.com`](https://unifiedjs.com) and
[`mdxjs.com`](https://mdxjs.com) domains are governed by the collective.
They are respectively registered by [**@wooorm**][wooorm] and
[**@johno**][johno].

## Email

Email is provided by [Mailgun][] and [**@wooorm**][wooorm] has access to it.
The reason for this is financial in nature: it is free of charge.

This provides us with unified email addresses that forward to actual email
addresses, and functionality to send from an actual email client (such as Gmail)
as a unified email address.

The core and moderation collective teams have a personal address:

*   `titus@unifiedjs.com` ([**@wooorm**][wooorm]
*   `john@unifiedjs.com` ([**@johno**][johno])
*   `christian@unifiedjs.com` ([**@ChristianMurphy**][christianmurphy])
*   `merlijn@unifiedjs.com` ([**@Murderlon**][murderlon])
*   `richard@unifiedjs.com` ([**@RichardLitt**][richardlitt])
*   `olivia@unifiedjs.com` ([**@komaeda**][komaeda])

It is required for members with a `unifiedjs.com` email address to read emails
sent to them.

The following collective email addresses are in use:

*   `contact@unifiedjs.com` (forwarded to the core collective team)
*   `security@unifiedjs.com` (forwarded to the core collective team)
*   `moderation@unifiedjs.com` (forwarded to the moderation collective team)

It is required for members who are forwarded these respective addresses to read
and, when needed, respond to them.

## License

This work is licensed under a
[Creative Commons Attribution 4.0 International License][license].

<!-- definitions -->

[license]: https://creativecommons.org/licenses/by/4.0/

[gh-tools]: https://github.com/unifiedjs/github-tools

[npm-tools]: https://github.com/unifiedjs/github-tools

[mailgun]: https://www.mailgun.com

[wooorm]: https://github.com/wooorm

[johno]: https://github.com/johno

[christianmurphy]: https://github.com/ChristianMurphy

[murderlon]: https://github.com/Murderlon

[richardlitt]: https://github.com/RichardLitt

[komaeda]: https://github.com/komaeda

[github]: https://github.com

[npm]: https://www.npmjs.com

[spectrum]: https://spectrum.chat/about

[opencollective]: https://opencollective.com

[twitter]: https://twitter.com

[gh-org-perms]: https://help.github.com/en/articles/permission-levels-for-an-organization#permission-levels-for-an-organization

[gh-repo-perms]: https://help.github.com/en/articles/repository-permission-levels-for-an-organization#repository-access-for-each-permission-level

[npm-org-perms]: https://docs.npmjs.com/org-roles-and-permissions

[npm-repo-perms]: https://docs.npmjs.com/cli/access
