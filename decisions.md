# unified Decision Processes

1.  [How Decisions are made][decisions]
2.  [The RFC Process][rfc]
3.  [Local Consensus][local]

## How Decisions are made

unified is a federated system of smaller, highly interconnected projects.
This means that centrally organizing decisions is rather tricky.
Going with the terms as defined in our [Governance document][governance], the
challenge rests in providing a system scoped towards both collective and
organization teams, without compromising simplicity for either of them.

Generally, when making a decision or proposing something new, it depends in
what **scope** you’re acting in:

*   If it’s a change that *impacts the entire unified collective*:
    Open an RFC ([link][rfc])
*   If it’s a change that *impacts one or multiple organizations*:
    Open an RFC ([link][rfc])
*   If it’s a change that *impacts multiple projects inside of a single
    organization*:
    Ask the project’s organization team first ([link][local])
*   If it’s a change that *only impacts one project inside an organization*:
    Open an issue in that project ([link][local])

## The RFC Process

An **RFC** (*Request for Changes*) is a document written to justify a change
or decision.
This document is proposed via opening a Pull Request.
Once it has been merged, the changes detailed in it are implemented into the
related project(s).

In unified, RFCs are kept in the [`unifiedjs/rfcs` repository][rfcs].
What follows in this document is a general outline of the RFC process, consult
the `unifiedjs/rfcs` `README` file for more detailed information.

*   Fork the RFC repo to your account (<https://github.com/unifiedjs/rfcs/fork>)
*   Copy `0000-template.md` to `text/0000-my-proposal.md` (don’t assign a RFC
    number quite yet)
*   Fill in the RFC
*   Submit a pull request
*   Engage in the discussion in your pull request!
    Try to build consensus.
*   Ultimately, your proposal will enter a “final comment period” lasting for
    3 days
*   At the end of this period, your RFC will be accepted.
    The RFC is now “active”, and may be implemented!
    Congrats!

In the RFC template, you can choose in which scope this RFC is to be
implemented.
If you, say, wanted to propose a change that concerns the entirety of `remark`
and `retext`, you would write this in your RFC proposal.
If it’s a change that concerns the entirety of the collective, you should state
this appropriately.

If the RFC only concerns a subsection of organizations, the related
organization teams have the responsibility of reviewing and building consensus
on this RFC.
If the RFC concerns the entire collective, the unified core team is responsible
instead.

Anyone may input their opinion on an RFC, however conflict should be kept to a
minimum.
In case of escalation of conflict, the moderation team may intervene and take
appropriate measures.

## Local Consensus

If a change is not significant enough across the entire collective to warrant
an RFC, an issue may be opened on project repositories.
This process follows a standard feedback loop, however the respective project
pusher/merger team, as well as the organization team may close the discussion
at any point if they deem necessary.

In case a decision has to be made across a project or organization team, a
simple Lazy Consensus method may be used.
When the item has appeared to reach a consensus, the facilitator will ask
“Does anyone object?” as a final call for dissent from the consensus.
If an item cannot reach a consensus, a team member can call for either a closing
vote or a vote to table the issue.
The call for a vote must be seconded by a majority of the team or else the
discussion will continue.
Simple majority wins.

In case consensus is split between two factions, even in the closing vote, a
third-party tiebreaker may be consulted.
This should be someone who has knowledge of the item at hand, and who is
qualified to make a clear decision on the matter.

[decisions]: #how-decisions-are-made

[rfc]: #the-rfc-process

[local]: #local-consensus

[governance]: readme.md

[rfcs]: https://github.com/unifiedjs/rfcs
