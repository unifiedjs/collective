# Decisions policy

This document describes how members of the collective make decisions.
It describes how initiatives can be brought forward through issues, pull
requests, RFCs, and motions.
The collective follows a, typically lazy, consensus-seeking decision-making
process, with voting as a last resort.

This document is developed by the unified collective core team.

## Table of contents

* [Initiatives](#initiatives)
  * [Issues](#issues)
  * [RFCs](#rfcs)
  * [Motions](#motions)

## Initiatives

```ascii
  +-------------------+
  |   Does it impact  | yes
  | roles of persons? +----------------------------------------+
  +---------+---------+                                        |
            | no                                               |
  +---------+---------+                                        |
  |   Does it impact  |                                        |
  |   management of   | yes                                    |
  |  organizations or +--------------------------------------+ |
  |      projects     |                                      | |
  +---------+---------+                                      | |
            | no                                             | |
  +---------+---------+                                      | |
  |   Does it impact  | yes                                  | |
  |      multiple     +---------------+                      | |
  |   organizations?  |               |                      | |
  +---------+---------+               |                      | |
            | no                      |                      | |
  +---------+---------+               |                      | |
  |   Does it impact  | yes           |                      | |
  |      multiple     +-------------+ |                      | |
  |     projects?     |             | |                      | |
  +---------+---------+             | |                      | |
            | no                    | |                      | |
  +---------+---------+    +--------+-+--------+    +--------+-+--------+
  | Open a PR / issue |    |   Create an RFC   |    | Request a motion  |
  +-------------------+    +-------------------+    +-------------------+
```

The collective is a federated system of organizations, consisting in turn of
small and highly interconnected projects, governed by different people with
different interests.
This means that centrally organizing decisions is rather tricky.
The challenge thus rests in providing a decision system scoped towards both
collective and organization teams, without compromising simplicity for either of
them.

Typically, decisions can be made through **issues** (and pull requests).
For “substantial” initiatives, such as those affecting multiple projects or
organizations, decisions are made through **RFC**s.
If a decision affects management of projects or organizations, or the roles of
persons within the collective, decisions are made through **motion**s.

All persons participating in the collective must follow the code of conduct.
This code provides the *minimum* of expected behavior in the community.
It is understood and, in fact, *expected* that members will have and express
individual opinions.
If other members express concerns about initiatives, acknowledge their concerns
by pausing, and discussing to come to a common agreement.
Value a diversity of views and opinions.
Everyone gets to speak up.
Criticize ideas rather than people.
Avoid preferential treatment and hold everyone (including yourself) accountable
to the same set of standards.
Treat the community and its members with respect, consideration, and the highest
standards of ethical conduct.
Take responsibility for the collective’s statements.

The collective follows a, typically lazy, consensus-seeking decision-making
process.

The goal of **consensus** is that everyone (whose voice is recognized) agrees on
a decision.
**Consensus therefore results in an acceptable solution**, one that can be
supported, even though it may not be the “favorite” of each individual.

**Lazy consensus** does not require explicit approval from every member.
Under lazy consensus a lack of objections is interpreted as a silent approval.

**Consensus-seeking** is consensus with an additional option of a fallback vote
if consensus appears unattainable during the process.

In consensus-seeking, discussion of potential proposals is held first, followed
by the framing of a solution, and then modifying it until the group reaches a
consensus if there is no longer any disagreement.
If agreement cannot be reached, the group votes.

### Issues

Most initiatives can be initiated as issues or pull requests.
Fixing a typo, reporting a bug, adding a new option, etc.

Issues are, typically, a solution to an initiative.
The decision to be made is whether the initiative makes sense for the project
and whether the solution matches the criteria of the project.

The process for deciding on issues and pull requests is lazy consensus.
The wait time for an issue or pull requests starts when it is opened.
It could be zero, such as for a typo, but it is recommended to last for two days
(48 hours): it’s open for interpretation by maintainers.
In case consensus is split between actively disagreeing factions, a vote is held
to accept the initiative, requiring active agreement from the majority.

### RFCs

Some initiatives are “substantial”, and we ask that these be put through a bit
of a design process and produce a consensus among the community.

An **RFC** (*request for changes* or *request for comments*, whichever you
prefer) is a document written to justify a change or decision.
RFCs are, typically, initiatives that have different solutions, one of which can
be proposed.
The decision to be made is to reach consensus for an initiative and around
its solution.
Once an RFC is accepted, the changes detailed in it can be implemented through
issues and pull requests.

For the collective, RFCs are kept in the [`unifiedjs/rfcs`][rfcs] repository.
Consult its readme for detailed information on the RFC process.

Anyone may propose an initiative, and anyone may voice their opinions, but only
maintainers can object or vote.

The process for deciding on RFCs is consensus seeking, with an emphasis on the
discussion of potential proposals.
The wait time for an RFC starts when a maintainer calls for the final comment
period and lasts for three days (72 hours).
In case consensus is split between actively disagreeing factions, a vote is held
to accept the initiative, requiring active agreement from the majority.

### Motions

Some initiatives affect the roles of persons in the collective or the management
of projects.
These are put through a process of a formal motion.

A **motion** is a proposal from a person to a group that the group takes a
certain action.
The process for deciding on motions is a vote to accept the initiative,
requiring agreement from the majority.
The wait time for a motion starts when it is requested, and lasts for at least
three days (72 hours), or longer, until a majority is reached or cannot be
reached.

| Scope        | Topic   | Name                             | Initiator                  | Voter      | Enactor           |
| ------------ | ------- | -------------------------------- | -------------------------- | ---------- | ----------------- |
| Collective   | Person  | Motion to nominate a contributor | Member                     | Core       | Lead / maintainer |
| Collective   | Person  | Motion to nominate a maintainer  | Maintainer / ex-maintainer | Core       | Lead / maintainer |
| Collective   | Person  | Motion to nominate a releaser    | Merger                     | Core       | Lead / maintainer |
| Collective   | Person  | Motion to be excused from duty   | Maintainer                 | n/a        | Lead / maintainer |
| Collective   | Project | Motion to delete a project       | Member                     | Core       | Lead              |
| Collective   | Project | Motion to withdraw governance    | Member                     | Core       | Lead              |
| Collective   | Person  | Motion to prune                  | Lead / maintainer          | Maintainer | Lead / maintainer |
| Organization | Person  | Motion to elect a lead           | Lead                       | Maintainer | Lead              |
| Organization | Project | Motion to archive a project      | Member                     | Maintainer | Lead              |
| Organization | Project | Motion to grant governance       | Person                     | Maintainer | Lead              |

<!-- Definitions. -->

[rfcs]: https://github.com/unifiedjs/rfcs
