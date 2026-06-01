# Permission Map

Fictional connected example.

What needs approval. It pairs with `capability-map.md` and `power-map.md`.

## Access Levels

### No Access

- Financial accounts.
- Client private systems.
- Personal email.
- Password managers.
- Publishing platforms.

### Read-Only

- Calendar event titles, times, and attendees.
- Approved research sources.
- Approved project folders.

### Draft Only

- Client follow-up messages.
- Social posts.
- Email replies.

### Write With Approval

- `home.md`
- `tasks/*`
- `projects/*`
- `profile/*`
- `knowledge/*`
- `power/*`

### Safe Quiet Updates

- `ideas/inbox.md`, capture only.
- Today's `daily/` file during a requested review.
- `tasks/lessons.md` after an explicit correction.
- `home.md` when summarizing already approved workspace files.

## Approval Gates

Always ask before:

- Sending messages or email.
- Publishing anything publicly.
- Deleting anything.
- Spending money.
- Changing calendar events.
- Using secrets, passwords, tokens, or private accounts.
- Connecting a new app or runtime.
- Expanding scheduler scope.

## App Access

| App or tool | Access level | Notes |
| --- | --- | --- |
| Phone capture channel | inbound capture only | assistant can read messages sent to the capture channel |
| Calendar | read-only | event titles, times, and attendees only |
| Local Light Agent Kit workspace | write with approval; quiet safe updates | no writes outside the workspace |
| Scheduler runtime | limited automation | morning brief and Friday review only |
| Email | no access | next possible activation is read-only triage |

## Skill Access

| Skill | Access level | Approval needed |
| --- | --- | --- |
| workspace-builder | create a private workspace from approved templates | yes, before choosing or writing outside the current folder |
| home-refresh | read workspace; update `home.md` | no, if only summarizing existing approved files |
| power-activation | read maps and guides; propose activation card and map changes | yes, before writing maps or connecting anything |
| runtime-export | read selected workspace files; draft export bundle | yes, before placing export outside workspace |
| vault-bridge | read approved external source files; propose read protocol and map changes | yes, before connecting or writing to any external source |
| morning-brief | read workspace and calendar; write today's daily file | follow the autonomy setting |
| evening-planning | read workspace; update tasks and today's daily file | confirm the summary |
| brain-dump-organizer | read capture input; propose routed edits | yes, before writing project or task changes |
| research-helper | web only when asked; write to `knowledge/` | cite sources; approve knowledge writes |
| project-scout | read `projects/` and `tasks/`; suggest next steps | no, read-only |
| lessons-updater | append to `tasks/lessons.md` after an explicit correction | no |
| assistant-checkup | read the whole workspace; report only | no, read-only |
| capability-discovery | interview; propose edits to maps, `home.md`, and activation cards | yes, before writing maps or activation cards |

## Last Reviewed

2026-01-01
