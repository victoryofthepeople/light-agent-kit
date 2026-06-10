# Power Activation Card

Fictional example.

## Power

Name: Phone capture

Status:

- [ ] Proposed
- [x] Approved
- [ ] Active
- [ ] Paused
- [ ] Retired

## Why It Matters

What this lets the assistant do:

- Receive quick ideas, tasks, and voice-note summaries while Maya is away from her desk.
- Route captures into the right Light Agent Kit files.

What real problem it solves:

- Useful thoughts and follow-ups happen during the day, then scatter before they become action.

## Access Needed

What the assistant can read:

- Inbound messages sent to the approved capture channel.
- `ideas/inbox.md`
- `tasks/active.md`
- today's daily file

What the assistant can change:

- `ideas/inbox.md` for raw ideas.
- Today's daily file for dated notes.
- Suggested changes to `tasks/active.md` after approval.

What the assistant can send, publish, schedule, or trigger:

- Nothing in the first version.

## Approval Rule

Choose one:

- [ ] Suggest only
- [ ] Draft only
- [ ] Read-only
- [ ] Write with approval
- [x] Safe quiet updates
- [ ] Scheduled with clear yes rules

Always ask before:

- Sending messages.
- Replying through the channel.
- Creating calendar events.
- Moving client-facing work.
- Connecting a second app.

## First Test

Send one phone message:

```text
Idea: turn the studio review into a weekly skill.
```

The assistant routes it to `ideas/inbox.md`, then suggests whether it belongs in `tasks/active.md`.

## Off Switch

Pause the channel connection and mark this card Paused.

## Logs Or Receipts

Capture receipts go in today's daily file under `## Captured`.

## Decision

Approved by: Maya

Date: 2026-01-01

Notes:

- Inbound capture only.
- Draft replies can be discussed later as a separate power.
