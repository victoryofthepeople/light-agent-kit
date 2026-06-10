# Power Activation Card

Fictional example.

## Power

Name: Weekly project review

Status:

- [ ] Proposed
- [x] Approved
- [x] Active
- [ ] Paused
- [ ] Retired

## Why It Matters

What this lets the assistant do:

- Review active projects every Friday.
- Find stale next steps.
- Suggest follow-ups.

What real problem it solves:

- Client projects can scatter across notes and tasks.

## Access Needed

What the assistant can read:

- `projects/*`
- `tasks/active.md`
- `tasks/lessons.md`

What the assistant can change:

- Today's `daily/` file.
- Suggested updates to `tasks/active.md` after approval.

What the assistant can send, publish, schedule, or trigger:

- Nothing.

## Approval Rule

Choose one:

- [ ] Suggest only
- [ ] Draft only
- [x] Read-only
- [ ] Write with approval
- [ ] Safe quiet updates
- [ ] Scheduled with clear yes rules

Always ask before:

- Moving tasks.
- Archiving projects.
- Drafting client-facing follow-ups.

## First Test

Run one Friday review on the current project list and produce three next moves.

## Off Switch

Remove the weekly review from `profile/power-map.md` and delete or pause any scheduled runtime job.

## Logs Or Receipts

Weekly review notes go in the dated daily file.

## Decision

Approved by: Maya

Date: 2026-01-01

Notes:

- Keep it read-only for now.
