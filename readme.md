# Governance Draft

unified is governed by several teams.
Teams are scoped to the **collective** or an **organization**.
Respectively, they govern the **organizations** or the **projects** under them.
Two collective teams are special: the [core][] team and the [moderation][] team.

## Table of Contents

*   [Structure](#structure)
    *   [All teams](#all-teams)
    *   [Organization teams](#organization-teams)
    *   [Collective teams](#collective-teams)
*   [Teams](#teams)
    *   [Core team](#core-team)
    *   [Moderation team](#moderation-team)
    *   [unified team](#unified-team)
    *   [remark team](#remark-team)
    *   [rehype team](#rehype-team)
    *   [retext team](#retext-team)
    *   [redot team](#redot-team)
    *   [mdx team](#mdx-team)
    *   [micromark team](#micromark-team)
    *   [syntax tree team](#syntax-tree-team)
    *   [vfile team](#vfile-team)

## Structure

### All teams

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
    consensus otherwise (this should be unlikely).

The way that teams communicate internally and externally is left to each team
to decide, but:

*   Technical discussion should take place as much as possible on public forums,
    ideally on initiative or PR threads, or on forum posts.
*   Each team will have a dedicated forum channel.
*   Teams should actively seek out discussion and input from non-members.

### Organization teams

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

### Collective teams

**Collective teams** are scoped to the whole collective and govern the
organizations under it.

They have the same responsibilities as [all teams][all], and additionally:

*   **De-escalate initiatives to organization teams**.
*   **Focus on overarching concerns**.
    The collective teams are specifically designed to take a **global** view of
    the collective, to make sure the pieces are fitting together in a coherent
    way.

## Teams

### Core team

The **core team** is a **[collective][]** team responsible for governing all
other teams.
Members of this team **should not** be on the **[moderation team][moderation]**.

They additionally:

*   **Set the direction and vision across all teams**.
    That means setting the core values that are used when making decisions
    about tradeoffs, steering the ecosystem toward specific directions, and
    leading the discussion for **major** initiatives.
*   **Spin up or shut down teams**.
    That means creating teams around new (temporary) areas and disolving teams
    when their area is complete.
*   **Accept or reject members**.
    This means accepting or rejecting individuals nominated by existing members.
*   **Offboard team members**.

#### Members

*   Titus Wormer
    ([**@wooorm**](https://github.com/wooorm))
    &lt;tituswormer@gmail.com>
    (**lead**)
*   John Otander
    ([**@johno**](https://github.com/johno))
    &lt;johnotander@gmail.com>

### Moderation team

The **moderation team** is a **[collective][]** team responsible for enforcing
the code of conduct.
This team does not have a leader and, to limit conflicts of interest, **should**
not include **[core team][core]** members.

They additionally:

*   **Uphold the code of conduct**.

#### Members

*   Titus Wormer
    ([**@wooorm**](https://github.com/wooorm))
    &lt;tituswormer@gmail.com>
    (**lead**)

### unified team

The **unified team** is an **[organization][]** team responsible for
[**@unifiedjs**](https://github.com/unifiedjs).

#### Members

*   Titus Wormer
    ([**@wooorm**](https://github.com/wooorm))
    &lt;tituswormer@gmail.com>
    (**lead**)

### remark team

The **remark team** is an **[organization][]** team responsible for
[**@remarkjs**](https://github.com/remarkjs).

#### Members

*   Titus Wormer
    ([**@wooorm**](https://github.com/wooorm))
    &lt;tituswormer@gmail.com>
    (**lead**)

### rehype team

The **rehype team** is an **[organization][]** team responsible for
[**@rehypejs**](https://github.com/rehypejs).

#### Members

*   Titus Wormer
    ([**@wooorm**](https://github.com/wooorm))
    &lt;tituswormer@gmail.com>
    (**lead**)

### retext team

The **retext team** is an **[organization][]** team responsible for
[**@retextjs**](https://github.com/retextjs).

#### Members

*   Titus Wormer
    ([**@wooorm**](https://github.com/wooorm))
    &lt;tituswormer@gmail.com>
    (**lead**)

### redot team

The **redot team** is an **[organization][]** team responsible for
[**@redotjs**](https://github.com/redotjs).

#### Members

*   Titus Wormer
    ([**@wooorm**](https://github.com/wooorm))
    &lt;tituswormer@gmail.com>
    (**lead**)

### mdx team

The **mdx team** is an **[organization][]** team responsible for
[**@mdx-js**](https://github.com/mdx-js).

#### Members

*   John Otander
    ([**@johno**](https://github.com/johno))
    &lt;johnotander@gmail.com>
    (**lead**)
*   Titus Wormer
    ([**@wooorm**](https://github.com/wooorm))
    &lt;tituswormer@gmail.com>

### micromark team

The **micromark team** is an **[organization][]** team responsible for
[**@micromark**](https://github.com/micromark).

#### Members

*   Titus Wormer
    ([**@wooorm**](https://github.com/wooorm))
    &lt;tituswormer@gmail.com>
    (**lead**)

### syntax tree team

The **syntax tree team** is an **[organization][]** team responsible for
[**@syntax-tree**](https://github.com/syntax-tree).

#### Members

*   Titus Wormer
    ([**@wooorm**](https://github.com/wooorm))
    &lt;tituswormer@gmail.com>
    (**lead**)

### vfile team

The **vfile team** is an **[organization][]** team responsible for
[**@vfile**](https://github.com/vfile).

#### Members

*   Titus Wormer
    ([**@wooorm**](https://github.com/wooorm))
    &lt;tituswormer@gmail.com>
    (**lead**)

<!-- definitions -->

[all]: #all-teams

[core]: #core-team

[moderation]: #moderation-team

[collective]: #collective-teams

[organization]: #organization-teams
