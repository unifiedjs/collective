# Collective governance

The unified collective is a federated system of organizations, consisting in
turn of projects, governed by the team members steering them.

This project is maintained by the unified collective core team and describes how
the collective is governed.

This document describes the teams of the collective.
Additional policies describe other aspects of governance in detail:

*   [`decisions.md`][decisions-policy] — how decisions are made
*   [`members.md`][members-policy] — how people participate
*   [`moderation.md`][moderation-policy] — how the code of conduct is enforced
*   [`organizations.md`][organizations-policy] — how organizations are managed
*   [`permissions.md`][permissions-policy] — the permissions members have

## Table of contents

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
*   [Code of conduct](#code-of-conduct)
*   [Acknowledgements](#acknowledgements)
*   [License](#license)

## Teams

```ascii
+-------------------------------------------------+
|                   COLLECTIVE                    |
|                core & moderation                |
|                                                 |
|                                                 |
|                  ORGANIZATIONS                  |
| +-------------+ +-------------+ +-------------+ |
| |   unified   | |   remark    | |   rehype    | |
| +-------------+ +-------------+ +-------------+ |
| +-------------+ +-------------+ +-------------+ |
| |    retext   | |    redot    | |     mdx     | |
| +-------------+ +-------------+ +-------------+ |
| +-------------+ +-------------+ +-------------+ |
| |  micromark  | |    vfile    | | syntax tree | |
| +-------------+ +-------------+ +-------------+ |
+-------------------------------------------------+
```

The collective is governed by teams.
Teams are scoped to one **organization** or the **collective**, respectively
governing the **projects** or **organizations** under them.
The [core][] and [moderation][] teams are special.

Teams serve as leadership for their scope.
They:

*   **Set the direction**:
    setting the values that are used when making decisions about tradeoffs,
    steering the scope toward specific directions, and leading the discussion
    for initiatives
*   **Shepherd initiatives**:
    making stakeholders (people who are strongly affected by decisions) aware of
    initiatives, teasing out design tradeoffs and alternatives, and helping
    build consensus
*   **Accept or reject issues, pull requests, and RFCs**:
    deciding on initiatives, whether small or substantial
*   **Nominate team members**:
    nominating individuals making significant and valuable contributions across
    to be part of the team

Teams should be made up of:

*   **Area experts**:
    people who have a lot of interest and expertise in the area covered by the
    team, but who may be far less engaged with other areas of the collective
*   **Stakeholders**:
    people who are strongly affected by decisions in the area of the team, but
    who may not be experts in the design or implementation of that area

How teams communicate internally and externally is left to each team to decide,
but:

*   Discussion should take place as much as possible in public spaces, ideally
    on issues, pull requests, or GitHub discussions
*   Teams should actively seek out discussion and input from non-members

## Organization teams

**Organization teams** are scoped to an organization and govern the projects
under it.

They have the same responsibilities as [all teams][all], and additionally:

*   **Escalate initiatives affecting the collective to a collective team**
*   **Implement accepted collective-level initiatives**
*   **Define policy on what form changes should take**:
    such as which can be a direct pull request or RFC, which need to be
    escalated, and which can be handled by the team itself

Organization teams additionally include:

*   **Team lead**:
    person responsible for ensuring initiatives are progressing at a reasonable
    rate

### unified team

The **unified team** is an *[organization][]* team responsible for
[**@unifiedjs**](https://github.com/unifiedjs).

<!--humans start team=unified shift=3-->

#### Members

##### Releasers

*   Titus Wormer
    ([**@wooorm**](https://github.com/wooorm))
    \<tituswormer\@gmail.com>
    (**lead**)

*   Remco Haszing
    ([**@remcohaszing**](https://github.com/remcohaszing))
    \<remcohaszing\@gmail.com>

##### Mergers

*   Christian Murphy
    ([**@ChristianMurphy**](https://github.com/ChristianMurphy))
    \<christian.murphy.42\@gmail.com>

*   John Otander
    ([**@johno**](https://github.com/johno))
    \<johnotander\@gmail.com>

*   Joun Qin
    ([**@JounQin**](https://github.com/JounQin))
    \<admin\@1stg.me>

*   Junyoung Choi
    ([**@Rokt33r**](https://github.com/Rokt33r))
    \<fluke8259\@gmail.com>

*   Merlijn Vos
    ([**@Murderlon**](https://github.com/Murderlon))
    \<merlijn\@soverin.net>

#### Contributors

*   Mudit Ameta
    ([**@zeusdeux**](https://github.com/zeusdeux))
    \<zeusdeux\@gmail.com>

*   Stephan Schneider
    ([**@zcei**](https://github.com/zcei))
    \<stephanschndr\@gmail.com>

*   Victor Felder
    ([**@vhf**](https://github.com/vhf))
    \<victor\@draft.li>

<!--humans end-->

### remark team

The **remark team** is an *[organization][]* team responsible for
[**@remarkjs**](https://github.com/remarkjs).

<!--humans start team=remark shift=3-->

#### Members

##### Releasers

*   John Otander
    ([**@johno**](https://github.com/johno))
    \<johnotander\@gmail.com>

*   Titus Wormer
    ([**@wooorm**](https://github.com/wooorm))
    \<tituswormer\@gmail.com>
    (**lead**)

*   Remco Haszing
    ([**@remcohaszing**](https://github.com/remcohaszing))
    \<remcohaszing\@gmail.com>

##### Mergers

*   Christian Murphy
    ([**@ChristianMurphy**](https://github.com/ChristianMurphy))
    \<christian.murphy.42\@gmail.com>

*   Jonathan Haines
    ([**@BarryThePenguin**](https://github.com/BarryThePenguin))
    \<jonno.haines\@gmail.com>

*   Joun Qin
    ([**@JounQin**](https://github.com/JounQin))
    \<admin\@1stg.me>

*   Junyoung Choi
    ([**@Rokt33r**](https://github.com/Rokt33r))
    \<fluke8259\@gmail.com>

*   Keith McKnight
    ([**@kmck**](https://github.com/kmck))
    \<keith\@mcknig.ht>

*   Marouane Fazouane
    ([**@fazouane-marouane**](https://github.com/fazouane-marouane))
    \<fazouanem3\@gmail.com>

*   Merlijn Vos
    ([**@Murderlon**](https://github.com/Murderlon))
    \<merlijn\@soverin.net>

*   Victor Felder
    ([**@vhf**](https://github.com/vhf))
    \<victor\@draft.li>

*   Zeke Sikelianos
    ([**@zeke**](https://github.com/zeke))
    \<zeke\@sikelianos.com>

#### Contributors

*   Mudit Ameta
    ([**@zeusdeux**](https://github.com/zeusdeux))
    \<zeusdeux\@gmail.com>

*   Nikita Sobolev
    ([**@sobolevn**](https://github.com/sobolevn))
    \<mail\@sobolevn.me>

<!--humans end-->

### rehype team

The **rehype team** is an *[organization][]* team responsible for
[**@rehypejs**](https://github.com/rehypejs).

<!--humans start team=rehype shift=3-->

#### Members

##### Releasers

*   Keith McKnight
    ([**@kmck**](https://github.com/kmck))
    \<keith\@mcknig.ht>

*   Titus Wormer
    ([**@wooorm**](https://github.com/wooorm))
    \<tituswormer\@gmail.com>
    (**lead**)

*   Remco Haszing
    ([**@remcohaszing**](https://github.com/remcohaszing))
    \<remcohaszing\@gmail.com>

##### Mergers

*   Christian Murphy
    ([**@ChristianMurphy**](https://github.com/ChristianMurphy))
    \<christian.murphy.42\@gmail.com>

*   John Otander
    ([**@johno**](https://github.com/johno))
    \<johnotander\@gmail.com>

*   Joun Qin
    ([**@JounQin**](https://github.com/JounQin))
    \<admin\@1stg.me>

*   Merlijn Vos
    ([**@Murderlon**](https://github.com/Murderlon))
    \<merlijn\@soverin.net>

#### Contributors

*   Victor Felder
    ([**@vhf**](https://github.com/vhf))
    \<victor\@draft.li>

<!--humans end-->

### retext team

The **retext team** is an *[organization][]* team responsible for
[**@retextjs**](https://github.com/retextjs).

<!--humans start team=retext shift=3-->

#### Members

##### Releasers

*   Titus Wormer
    ([**@wooorm**](https://github.com/wooorm))
    \<tituswormer\@gmail.com>
    (**lead**)

##### Mergers

*   Merlijn Vos
    ([**@Murderlon**](https://github.com/Murderlon))
    \<merlijn\@soverin.net>

#### Contributors

*   Richard Littauer
    ([**@RichardLitt**](https://github.com/RichardLitt))
    \<richard\@maintainer.io>

<!--humans end-->

### redot team

The **redot team** is an *[organization][]* team responsible for
[**@redotjs**](https://github.com/redotjs).

<!--humans start team=redot shift=3-->

#### Members

##### Releasers

*   Christian Murphy
    ([**@ChristianMurphy**](https://github.com/ChristianMurphy))
    \<christian.murphy.42\@gmail.com>
    (**lead**)

*   Titus Wormer
    ([**@wooorm**](https://github.com/wooorm))
    \<tituswormer\@gmail.com>

##### Mergers

None.

<!--humans end-->

### mdx team

The **mdx team** is an *[organization][]* team responsible for
[**@mdx-js**](https://github.com/mdx-js).

<!--humans start team=mdx shift=3-->

#### Members

##### Releasers

*   John Otander
    ([**@johno**](https://github.com/johno))
    \<johnotander\@gmail.com>
    (**lead**)

*   Remco Haszing
    ([**@remcohaszing**](https://github.com/remcohaszing))
    \<remcohaszing\@gmail.com>

*   Tim Neutkens
    ([**@timneutkens**](https://github.com/timneutkens))
    \<tim\@vercel.com>

*   Titus Wormer
    ([**@wooorm**](https://github.com/wooorm))
    \<tituswormer\@gmail.com>

##### Mergers

*   Christopher Biscardi
    ([**@ChristopherBiscardi**](https://github.com/ChristopherBiscardi))
    \<chris\@christopherbiscardi.com>

*   Joun Qin
    ([**@JounQin**](https://github.com/JounQin))
    \<admin\@1stg.me>

*   Laurie Barth
    ([**@laurieontech**](https://github.com/laurieontech))

*   Sidhartha Chatterjee
    ([**@sidharthachatterjee**](https://github.com/sidharthachatterjee))
    \<me\@sidharthachatterjee.com>

#### Contributors

*   Adam Morse
    ([**@mrmrs**](https://github.com/mrmrs))
    \<hi\@mrmrs.cc>

*   Ahmad Awais
    ([**@ahmadawais**](https://github.com/ahmadawais))
    \<me\@AhmadAwais.com>

*   Brent Jackson
    ([**@jxnblk**](https://github.com/jxnblk))
    \<jxnblk\@gmail.com>

*   Guillermo Rauch
    ([**@rauchg**](https://github.com/rauchg))
    \<rauchg\@gmail.com>

*   Jessica Stokes
    ([**@ticky**](https://github.com/ticky))
    \<hello\@jessicastokes.net>

*   Stephan Schneider
    ([**@zcei**](https://github.com/zcei))
    \<stephanschndr\@gmail.com>

<!--humans end-->

### micromark team

The **micromark team** is an *[organization][]* team responsible for
[**@micromark**](https://github.com/micromark).

<!--humans start team=micromark shift=3-->

#### Members

##### Releasers

*   Titus Wormer
    ([**@wooorm**](https://github.com/wooorm))
    \<tituswormer\@gmail.com>
    (**lead**)

##### Mergers

*   John Otander
    ([**@johno**](https://github.com/johno))
    \<johnotander\@gmail.com>

*   Joun Qin
    ([**@JounQin**](https://github.com/JounQin))
    \<admin\@1stg.me>

*   Marouane Fazouane
    ([**@fazouane-marouane**](https://github.com/fazouane-marouane))
    \<fazouanem3\@gmail.com>

*   Merlijn Vos
    ([**@Murderlon**](https://github.com/Murderlon))
    \<merlijn\@soverin.net>

*   Remco Haszing
    ([**@remcohaszing**](https://github.com/remcohaszing))
    \<remcohaszing\@gmail.com>

#### Contributors

*   Mudit Ameta
    ([**@zeusdeux**](https://github.com/zeusdeux))
    \<zeusdeux\@gmail.com>

*   Stephan Schneider
    ([**@zcei**](https://github.com/zcei))
    \<stephanschndr\@gmail.com>

*   Victor Felder
    ([**@vhf**](https://github.com/vhf))
    \<victor\@draft.li>

<!--humans end-->

### syntax tree team

The **syntax tree team** is an *[organization][]* team responsible for
[**@syntax-tree**](https://github.com/syntax-tree).

<!--humans start team="syntax tree" shift=3-->

#### Members

##### Releasers

*   Keith McKnight
    ([**@kmck**](https://github.com/kmck))
    \<keith\@mcknig.ht>

*   Titus Wormer
    ([**@wooorm**](https://github.com/wooorm))
    \<tituswormer\@gmail.com>
    (**lead**)

##### Mergers

*   Christian Murphy
    ([**@ChristianMurphy**](https://github.com/ChristianMurphy))
    \<christian.murphy.42\@gmail.com>

*   Jonathan Haines
    ([**@BarryThePenguin**](https://github.com/BarryThePenguin))
    \<jonno.haines\@gmail.com>

*   Joun Qin
    ([**@JounQin**](https://github.com/JounQin))
    \<admin\@1stg.me>

*   Merlijn Vos
    ([**@Murderlon**](https://github.com/Murderlon))
    \<merlijn\@soverin.net>

*   Remco Haszing
    ([**@remcohaszing**](https://github.com/remcohaszing))
    \<remcohaszing\@gmail.com>

<!--humans end-->

### vfile team

The **vfile team** is an *[organization][]* team responsible for
[**@vfile**](https://github.com/vfile).

<!--humans start team=vfile shift=3-->

#### Members

##### Releasers

*   Titus Wormer
    ([**@wooorm**](https://github.com/wooorm))
    \<tituswormer\@gmail.com>
    (**lead**)

##### Mergers

*   Christian Murphy
    ([**@ChristianMurphy**](https://github.com/ChristianMurphy))
    \<christian.murphy.42\@gmail.com>

*   Joun Qin
    ([**@JounQin**](https://github.com/JounQin))
    \<admin\@1stg.me>

*   Junyoung Choi
    ([**@Rokt33r**](https://github.com/Rokt33r))
    \<fluke8259\@gmail.com>

*   Remco Haszing
    ([**@remcohaszing**](https://github.com/remcohaszing))
    \<remcohaszing\@gmail.com>

#### Contributors

*   Olivia Hugger
    ([**@komaeda**](https://github.com/komaeda))
    \<mokou\@posteo.de>

<!--humans end-->

## Collective teams

**Collective teams** are scoped to the whole collective and govern the
organizations under it.

They have the same responsibilities as [all teams][all], and additionally:

*   **De-escalate initiatives to organization teams**
*   **Focus on overarching concerns**:
    they are specifically designed to take a *global* view of the collective, to
    make sure the pieces are fitting together in a coherent way

### Core team

The **core team** is a *[collective][]* team responsible for governing all
other teams.
This team does not have a lead and, to limit conflicts of interest, **should**
not include **[moderation team][moderation]** members.

They:

*   **Set the direction and vision for the collective across organizations**:
    setting the core values that are used when making decisions about tradeoffs,
    steering the collective toward specific directions, and leading the
    discussion for **major** initiatives
*   **Spin up or shut down teams**:
    creating teams around new (temporary) areas and dissolving teams when their
    area is complete
*   **Accept or reject motions**:
    deciding on initiatives involving people and destructive actions on projects
*   **Follow playbooks**:
    following certain steps to enact accepted motions

<!--humans start team=core shift=3-->

#### Members

*   Christian Murphy
    ([**@ChristianMurphy**](https://github.com/ChristianMurphy))
    \<christian.murphy.42\@gmail.com>

*   John Otander
    ([**@johno**](https://github.com/johno))
    \<johnotander\@gmail.com>

*   Merlijn Vos
    ([**@Murderlon**](https://github.com/Murderlon))
    \<merlijn\@soverin.net>

*   Titus Wormer
    ([**@wooorm**](https://github.com/wooorm))
    \<tituswormer\@gmail.com>

#### Contributors

*   Richard Littauer
    ([**@RichardLitt**](https://github.com/RichardLitt))
    \<richard\@maintainer.io>

*   Stephan Schneider
    ([**@zcei**](https://github.com/zcei))
    \<stephanschndr\@gmail.com>

<!--humans end-->

### Moderation team

The **moderation team** is a *[collective][]* team responsible for enforcing the
code of conduct.
This team does not have a lead and, to limit conflicts of interest, **should**
not include **[core team][core]** members.

<!--humans start team=moderation shift=3-->

#### Members

*   Olivia Hugger
    ([**@komaeda**](https://github.com/komaeda))
    \<mokou\@posteo.de>

*   Richard Littauer
    ([**@RichardLitt**](https://github.com/RichardLitt))
    \<richard\@maintainer.io>

<!--humans end-->

## Glossary

###### Collective

The collective is unified as a whole with the [organization][dfn-organization]s
under it and the [project][dfn-project]s under them.

###### Organization

An organization is a collection of [project][dfn-project]s around a shared area
typically hosted in a GitHub organization.

###### Project

A project is a single repository on GitHub governed by a team.

###### Initiative

An initiative is a (proposed) change.

## Code of conduct

We follow the Contributor Covenant [code of conduct][coc].
Please read it, as you agree to abide by it by interacting with the collective
spaces (includes any online or offline place such as email, GitHub, npm, or
Twitter).

## Acknowledgements

This project is inspired by the [Rust governance proposal][rust], the [Node
governance docs][node], the [Node admin project][node-admin], the [Electron
governance docs][electron], and [Django’s dissolving of core][django].

## License

This work is licensed under a
[Creative Commons Attribution 4.0 International License][license].

<!-- definitions -->

[all]: #teams

[collective]: #collective-teams

[organization]: #organization-teams

[core]: #core-team

[moderation]: #moderation-team

[dfn-organization]: #organization

[dfn-project]: #project

[decisions-policy]: decisions.md

[members-policy]: members.md

[moderation-policy]: moderation.md

[organizations-policy]: organizations.md

[permissions-policy]: permissions.md

[coc]: code-of-conduct.md

[rust]: https://github.com/rust-lang/rfcs/blob/HEAD/text/1068-rust-governance.md

[node]: https://github.com/nodejs/node/blob/HEAD/GOVERNANCE.md

[node-admin]: https://github.com/nodejs/admin

[electron]: https://github.com/electron/governance

[django]: https://github.com/django/deps/blob/HEAD/accepted/0010-new-governance.rst

[license]: https://creativecommons.org/licenses/by/4.0/
