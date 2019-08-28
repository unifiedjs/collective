# Permissions policy

This document describes the permissions that members of the collective have
across several services.

Whether to grant permissions is determined by optimizing for the following
conflicting requirements:

*   Limiting access to reduce risk
*   Increasing access to improve the bus factor
*   Enabling persons to move forward without undue delay

This document is developed by the unified collective core team.

## Table of contents

*   [GitHub](#github)
    *   [GitHub organization](#github-organization)
    *   [GitHub teams](#github-teams)
*   [npm](#npm)
    *   [npm organization](#npm-organization)
    *   [npm teams](#npm-teams)
*   [Spectrum](#spectrum)
*   [OpenCollective](#opencollective)
*   [Twitter](#twitter)
*   [Domains](#domains)
*   [Email](#email)
*   [License](#license)

## GitHub

[GitHub][] permissions are automated in [`github-tools`][gh-tools].

Members are required to have a GitHub account.

### GitHub organization

Maintainers of the collective core team are [**owners**][gh-org-perms] of all
GitHub organizations.

Maintainers of the collective moderation team are [**members**][gh-org-perms] of
all GitHub organizations.

Members of an organization team are [**members**][gh-org-perms] of their
respective GitHub organization.

### GitHub teams

The GitHub organization consists of GitHub teams:

*   `members`
    — includes members; maintained by the lead; [**triage**][gh-repo-perms]
    permissions
*   `contributors`
    — includes contributors; maintained by the lead; [**triage**][gh-repo-perms]
    permissions
*   `maintainers`
    — includes maintainers; maintained by the lead; [**write**][gh-repo-perms]
    permissions
*   `mergers`
    — includes mergers; maintained by the lead; [**write**][gh-repo-perms]
    permissions
*   `releasers`
    — includes releasers; maintained by the lead; [**maintain**][gh-repo-perms]
    permissions
*   `core`
    — includes collective core team maintainers; maintained by the lead;
    [**admin**][gh-repo-perms] permissions
*   `moderators`
    — includes collective moderation team maintainers; maintained by the lead;
    [**admin**][gh-repo-perms] permissions

Maintainers of collective teams may not use their administrative permissions,
except when explicitly allowed by collective governance documentation, or when
edge-cases occur that are not yet covered by collective governance
documentation.

## npm

[npm][] permissions are automated in [`npm-tools`][npm-tools].

Releasers are required to have an npm account.
Members without a known npm account are disregarded in this section.

### npm organization

The lead of an organization team is an [**owner**][npm-org-perms] of their
respective npm organization.

Maintainers of the collective core team are [**admins**][npm-org-perms] of all
npm organizations.

Maintainers of an organization team are [**members**][npm-org-perms] of their
respective npm organization.

### npm teams

The npm organization consists of npm teams:

*   `mergers`
    — includes mergers; [**read-only**][npm-repo-perms] permissions
*   `releasers`
    — includes releasers; [**read-write**][npm-repo-perms] permissions

## Spectrum

The `unified` and `mdx` communities on [Spectrum][] are governed by the
collective.
They are respectively owned by [**@wooorm**][wooorm] and [**@johno**][johno].
The reason for this is that Spectrum allows one owner.

Members are not required to participate on Spectrum.

Members of the MDX team that participate on Spectrum, are marked as team members
in the `mdx` community.

Members of other teams that participate on Spectrum, are marked as team members
in the `unified` community.

## OpenCollective

The `unified` collective on [OpenCollective][] is governed by the collective.

Maintainers of the collective core team are **admins** of the Collective.
Maintainers of the collective moderation team are **core contributors** of the
Collective.

Maintainers of collective teams are required to be listed on OpenCollective.

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

This provides us with collective email addresses that forward to actual email
addresses, and functionality to send from an actual email client (such as Gmail)
as a collective email address.

Maintainers of collective teams have personal addresses:

*   `titus@unifiedjs.com` — [**@wooorm**][wooorm]
*   `john@unifiedjs.com` — [**@johno**][johno]
*   `christian@unifiedjs.com` — [**@ChristianMurphy**][christianmurphy]
*   `merlijn@unifiedjs.com` — [**@Murderlon**][murderlon]
*   `richard@unifiedjs.com` — [**@RichardLitt**][richardlitt]
*   `olivia@unifiedjs.com` — [**@komaeda**][komaeda]

The following collective email addresses are in use:

*   `contact@unifiedjs.com`
    — forwards to maintainers of the collective core team
*   `security@unifiedjs.com`
    — forwards to maintainers of the collective core team
*   `moderation@unifiedjs.com`
    — forwards to maintainers of the collective moderation team

Maintainers of collective teams are required to read emails sent to them and,
when needed, to respond.

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
