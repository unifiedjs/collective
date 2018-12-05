# Governance Draft

The unified collective is made up of organizations and governed by the team
members steering them.

## Summary

*   unified is governed by several teams
*   teams are scoped to one **organization** or the **collective**
*   teams respectively govern the **projects** or **organizations** under them
*   the [core][] and [moderation][] teams are special
*   individuals making significant contributions may join a team, they are
    nominated by existing members of that team and approved by the [core][] team
*   any member may merge, some members may release

```ascii
+-------------------------------------------------+
|                   COLLECTIVE                    |
|                core & moderation                |
|                                                 |
|                                                 |
|                  ORGANIZATIONS                  |
| +-------------+ +-------------+ +-------------+ |
| |  unifiedjs  | |  remarkjs   | |  rehypejs   | |
| +-------------+ +-------------+ +-------------+ |
| +-------------+ +-------------+ +-------------+ |
| |   retextjs  | |   redotjs   | |   mdx-js    | |
| +-------------+ +-------------+ +-------------+ |
| +-------------+ +-------------+ +-------------+ |
| |  micromark  | |    vfile    | | syntax-tree | |
| +-------------+ +-------------+ +-------------+ |
+-------------------------------------------------+
```

## Table of Contents

*   [Teams](#teams)
*   [Organization teams](#organization-teams)
    *   [unified team](#unified-team)
    *   [remark team](#remark-team)
    *   [rehype team](#rehype-team)
    *   [retext team](#retext-team)
    *   [redot team](#redot-team)
    *   [mdx team](#mdx-team)
    *   [micromark team](#micromark-team)
    *   [syntax tree team](#syntax-tree-team)
    *   [vfile team](#vfile-team)
*   [Collective teams](#collective-teams)
    *   [Core team](#core-team)
    *   [Moderation team](#moderation-team)
*   [Glossary](#glossary)
*   [License](#license)

## Teams

**All teams serve as leadership for their scope**.
They:

*   **Set the direction in their scope**.
    That means setting the values that are used when making decisions about
    tradeoffs, steering the scope toward specific directions, and leading the
    discussion for initiatives
*   **Shepherd initiatives for what is governed**.
    This means making stakeholders (people who are strongly affected by
    decisions) aware of initiatives, teasing out design tradeoffs and
    alternatives, and helping build consensus.
*   **Accept or reject initiatives**.
*   **Nominate and onboard team members**
    This means nominating individuals making significant and valuable
    contributions across the scope to be part of the team, and when accepted,
    onboarding them.

Teams should be made up of:

*   A team lead: this role must be fulfilled by a **[core team][core]** member.
    Each team except for the **[moderation][]** and **[core][]** teams has a
    lead.
*   Area experts: people who have a lot of interest and expertise in the area
    covered by the team, but who may be far less engaged with other areas of
    the collective.
*   Stakeholders: people who are strongly affected by decisions in the area of
    the team, but who may not be experts in the design or implementation of that
    area.

The team leader is responsible for:

*   Setting up the team: this includes deciding on the initial membership of the
    team (in consultation with the core team) when the team is up and running
    and working with team members to determine and publish team policies and
    mechanics, including the way that team members join or leave the team (which
    should be based on consensus).
*   Communicating between the team and collective teams.
*   Alerting collective teams of initiatives that need global, cross-cutting
    attention.
*   Ensuring initiatives and PRs are progressing at a reasonable rate,
    re-assigning as needed.
*   Making final decisions in cases of initiatives that are unable to reach
    consensus otherwise (this should be unlikely, and should be discussed with
    the [core][] team).

The way that teams communicate internally and externally is left to each team
to decide, but:

*   Technical discussion should take place as much as possible on public forums,
    ideally on initiative or PR threads, or on forum posts.
*   Each team will have a dedicated forum channel.
*   Teams should actively seek out discussion and input from non-members.

## Organization teams

**Organization teams** are scoped to an organization and govern the projects
under it.

They have the same responsibilities as [all teams][all], and additionally:

*   **Escalate initiatives affecting the collective to a collective team**
*   **Implement accepted collective-level initiatives**
*   **Define policy on what form changes should take**.
    This includes which changes can be a direct PR, which need to be escalated,
    and which can be handled by the team itself.

It’s suggested that organization teams differentiate between mergers and
releasers.
All team members are mergers: they have the right to merge a pull request,
although it is highly suggested to wait at least 72 hours, in order to gather
enough feedback, and at least 2 approvals from other members.
Some members are releasers: they can release a new version of a project, taking
into account that some changes are better bundled together.

Mergers materialize in having write access to the GitHub organization, and
releasers in that they have access to npm.

These guidelines are suggestions because there are differences between the
projects under the unified umbrella and differences in proposed changes.
For example, making a breaking change to a high-level project should be handled
differently that adding prettier to a refactor a low-level project’s style.

Projects under an organization team are sometimes originally developed or
maintained by an individual outside that team.
These individuals, in the scope of that project, have the responsibility and
right like team members of accepting or rejecting initiatives.
If the organization differentiates between mergers and releasers, these
individuals should additionally be classified as mergers, but not releasers.

### unified team

The **unified team** is an **[organization][]** team responsible for
[**@unifiedjs**](https://github.com/unifiedjs).

#### Members

*   Christian Murphy
    ([**@christianmurphy**](https://github.com/christianmurphy))
    &lt;christian.murphy.42@gmail.com>
*   John Otander
    ([**@johno**](https://github.com/johno))
    &lt;johnotander@gmail.com>
*   Merlijn Vos
    ([**@Murderlon**](https://github.com/Murderlon))
    &lt;merlijn@soverin.net>
*   Stephan Schneider
    ([**@zcei**](https://github.com/zcei))
    &lt;stephanschndr@gmail.com>
*   Titus Wormer
    ([**@wooorm**](https://github.com/wooorm))
    &lt;tituswormer@gmail.com>
    (**lead**)
*   Victor Felder
    ([**@vhf**](https://github.com/vhf))
    &lt;victor@draft.li>

### remark team

The **remark team** is an **[organization][]** team responsible for
[**@remarkjs**](https://github.com/remarkjs).

#### Members

*   Christian Murphy
    ([**@christianmurphy**](https://github.com/christianmurphy))
    &lt;christian.murphy.42@gmail.com>
*   John Otander
    ([**@johno**](https://github.com/johno))
    &lt;johnotander@gmail.com>
*   Junyoung Choi
    ([**@Rokt33r**](https://github.com/Rokt33r))
    &lt;fluke8259@gmail.com>
*   Merlijn Vos
    ([**@Murderlon**](https://github.com/Murderlon))
    &lt;merlijn@soverin.net>
*   Nikita Sobolev
    ([**@sobolevn**](https://github.com/sobolevn))
    &lt;mail@sobolevn.me>
*   Titus Wormer
    ([**@wooorm**](https://github.com/wooorm))
    &lt;tituswormer@gmail.com>
    (**lead**)
*   Victor Felder
    ([**@vhf**](https://github.com/vhf))
    &lt;victor@draft.li>
*   Zeke Sikelianos
    ([**@zeke**](https://github.com/zeke))
    &lt;zeke@sikelianos.com>

### rehype team

The **rehype team** is an **[organization][]** team responsible for
[**@rehypejs**](https://github.com/rehypejs).

#### Members

*   Christian Murphy
    ([**@christianmurphy**](https://github.com/christianmurphy))
    &lt;christian.murphy.42@gmail.com>
*   John Otander
    ([**@johno**](https://github.com/johno))
    &lt;johnotander@gmail.com>
*   Merlijn Vos
    ([**@Murderlon**](https://github.com/Murderlon))
    &lt;merlijn@soverin.net>
*   Titus Wormer
    ([**@wooorm**](https://github.com/wooorm))
    &lt;tituswormer@gmail.com>
    (**lead**)
*   Victor Felder
    ([**@vhf**](https://github.com/vhf))
    &lt;victor@draft.li>

### retext team

The **retext team** is an **[organization][]** team responsible for
[**@retextjs**](https://github.com/retextjs).

#### Members

*   Merlijn Vos
    ([**@Murderlon**](https://github.com/Murderlon))
    &lt;merlijn@soverin.net>
*   Richard Littauer
    ([**@RichardLitt**](https://github.com/RichardLitt))
    &lt;richard@maintainer.io>
*   Titus Wormer
    ([**@wooorm**](https://github.com/wooorm))
    &lt;tituswormer@gmail.com>
    (**lead**)

### redot team

The **redot team** is an **[organization][]** team responsible for
[**@redotjs**](https://github.com/redotjs).

#### Members

*   Christian Murphy
    ([**@christianmurphy**](https://github.com/christianmurphy))
    &lt;christian.murphy.42@gmail.com>
    (**lead**)
*   Titus Wormer
    ([**@wooorm**](https://github.com/wooorm))
    &lt;tituswormer@gmail.com>

### mdx team

The **mdx team** is an **[organization][]** team responsible for
[**@mdx-js**](https://github.com/mdx-js).

#### Members

*   Christopher Biscardi
    ([**@ChristopherBiscardi**](https://github.com/ChristopherBiscardi))
    &lt;chris@christopherbiscardi.com>
*   John Otander
    ([**@johno**](https://github.com/johno))
    &lt;johnotander@gmail.com>
    (**lead**)
*   Stephan Schneider
    ([**@zcei**](https://github.com/zcei))
    &lt;stephanschndr@gmail.com>
*   Titus Wormer
    ([**@wooorm**](https://github.com/wooorm))
    &lt;tituswormer@gmail.com>

#### Emeriti

*   Jessica Stokes
    ([**@ticky**](https://github.com/ticky))
    &lt;hello@jessicastokes.net>

### micromark team

The **micromark team** is an **[organization][]** team responsible for
[**@micromark**](https://github.com/micromark).

#### Members

*   John Otander
    ([**@johno**](https://github.com/johno))
    &lt;johnotander@gmail.com>
*   Merlijn Vos
    ([**@Murderlon**](https://github.com/Murderlon))
    &lt;merlijn@soverin.net>
*   Mudit Ameta
    ([**@zeusdeux**](https://github.com/zeusdeux))
    &lt;zeusdeux@gmail.com>
*   Stephan Schneider
    ([**@zcei**](https://github.com/zcei))
    &lt;stephanschndr@gmail.com>
*   Titus Wormer
    ([**@wooorm**](https://github.com/wooorm))
    &lt;tituswormer@gmail.com>
    (**lead**)
*   Victor Felder
    ([**@vhf**](https://github.com/vhf))
    &lt;victor@draft.li>

### syntax tree team

The **syntax tree team** is an **[organization][]** team responsible for
[**@syntax-tree**](https://github.com/syntax-tree).

#### Members

*   Christian Murphy
    ([**@christianmurphy**](https://github.com/christianmurphy))
    &lt;christian.murphy.42@gmail.com>
*   Merlijn Vos
    ([**@Murderlon**](https://github.com/Murderlon))
    &lt;merlijn@soverin.net>
*   Titus Wormer
    ([**@wooorm**](https://github.com/wooorm))
    &lt;tituswormer@gmail.com>
    (**lead**)

### vfile team

The **vfile team** is an **[organization][]** team responsible for
[**@vfile**](https://github.com/vfile).

#### Members

*   Christian Murphy
    ([**@christianmurphy**](https://github.com/christianmurphy))
    &lt;christian.murphy.42@gmail.com>
*   Olivia Hugger
    ([**@komaeda**](https://github.com/komaeda))
    &lt;liv@fastmail.com>
*   Titus Wormer
    ([**@wooorm**](https://github.com/wooorm))
    &lt;tituswormer@gmail.com>
    (**lead**)

## Collective teams

**Collective teams** are scoped to the whole collective and govern the
organizations under it.

They have the same responsibilities as [all teams][all], and additionally:

*   **De-escalate initiatives to organization teams**.
*   **Focus on overarching concerns**.
    The collective teams are specifically designed to take a **global** view of
    the collective, to make sure the pieces are fitting together in a coherent
    way.

### Core team

The **core team** is a **[collective][]** team responsible for governing all
other teams.
Members of this team **should not** be on the **[moderation team][moderation]**.

They additionally:

*   **Set the direction and vision for the collective across organizations**.
    That means setting the core values that are used when making decisions
    about tradeoffs, steering the collective toward specific directions, and
    leading the discussion for **major** initiatives.
*   **Spin up or shut down teams**.
    That means creating teams around new (temporary) areas and disolving teams
    when their area is complete.
*   **Accept or reject members**.
    This means accepting or rejecting individuals nominated by existing members.
*   **Review inactive team members**.
    The core team periodically reviews the list of team members to identify
    inactive team members.
    Past members are typically given Emeritus status.
    Emeriti may request that the their status is restored.
*   **Offboard team members**.

#### Members

*   Christian Murphy
    ([**@christianmurphy**](https://github.com/christianmurphy))
    &lt;christian.murphy.42@gmail.com>
*   John Otander
    ([**@johno**](https://github.com/johno))
    &lt;johnotander@gmail.com>
*   Richard Littauer
    ([**@RichardLitt**](https://github.com/RichardLitt))
    &lt;richard@maintainer.io>
*   Stephan Schneider
    ([**@zcei**](https://github.com/zcei))
    &lt;stephanschndr@gmail.com>
*   Titus Wormer
    ([**@wooorm**](https://github.com/wooorm))
    &lt;tituswormer@gmail.com>

### Moderation team

The **moderation team** is a **[collective][]** team responsible for enforcing
the code of conduct.
This team does not have a leader and, to limit conflicts of interest, **should**
not include **[core team][core]** members.

#### Members

*   Olivia Hugger
    ([**@komaeda**](https://github.com/komaeda))
    &lt;liv@fastmail.com>

## Glossary

###### Collective

The collective is unified as a whole with the [organization][dfn-organization]s
under it the [project][dfn-project]s under them.

###### Organization

An organization is a collection of [project][dfn-project]s around a shared area
typically hosted in a GitHub organization.

###### Project

A project is typically one GitHub repository, although some repositories are
not projects in the sense that they include code.

###### Initiative

An initiative is a non-trivial change that significantly affects users.
Teams must define what they deem **trivial** or **significant**.

## License

This work is licensed under a
[Creative Commons Attribution 4.0 International License][license].
It’s based on the [Rust governance proposal][rust] and the [Node governance
docs][node].

<!-- definitions -->

[core]: #core-team

[moderation]: #moderation-team

[collective]: #collective-teams

[organization]: #organization-teams

[all]: #teams

[dfn-organization]: #organization

[dfn-project]: #project

[rust]: https://github.com/rust-lang/rfcs/blob/master/text/1068-rust-governance.md

[node]: https://github.com/nodejs/node/blob/master/GOVERNANCE.md

[license]: https://creativecommons.org/licenses/by/4.0/
