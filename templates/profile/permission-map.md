# Permission Map

What needs a clear yes. It pairs with `capability-map.md` (what your assistant can do now) and `power-map.md` (what could become useful next). The assistant maintains these with you, and they should stay readable at a glance.

> **For the assistant:** Use this as the working agreement. Move freely inside approved low-risk work. Ask before actions that affect other people, accounts, public publishing, money, deletion, app connections, or private systems. During onboarding and `capability-discovery`, replace these defaults with the user's real choices and update Last Reviewed.

Starts simple: workspace files and chat, with no app or runtime access.

## Access Levels

### No Access (default for all apps and accounts)

- Email.
- Calendar.
- Messaging apps.
- Financial, client, and private accounts.
- Any stronger runtime, until you connect one.

### Read-Only

- Nothing yet. Add an app here only after you connect it read-only.

### Draft Only

- Messages, client copy, and posts. The assistant drafts, you send.

### Write With Approval

- `home.md`, `tasks/*`, `projects/*`, `profile/*`, `knowledge/*`, `power/*`, and dated `daily/` files.

### Safe Quiet Updates

- `ideas/inbox.md`, capture only.
- `tasks/lessons.md` after an explicit correction from you.
- Today's `daily/` file when you ask for a plan or a reflection.
- `home.md` when summarizing already approved workspace files.

## Clear Yes Rules

Always ask before:

- Sending messages or email.
- Publishing anything publicly.
- Deleting anything.
- Spending money.
- Changing calendar events.
- Using secrets, passwords, tokens, or private accounts.
- Installing or enabling third-party skills.
- Connecting a new app or runtime.

## App Access

| App or tool | Access level | Notes |
| --- | --- | --- |
| (none connected) | no access | files-and-chat default; add a row as you connect each app |

## Skill Access

Default access for the skills shipped with Lumina. Tighten or loosen during onboarding.

| Skill | Access level | Approval needed |
| --- | --- | --- |
| workspace-builder | create a private workspace from approved templates | yes, before choosing or writing outside the current folder |
| home-refresh | read workspace; update `home.md` | no, if only summarizing existing approved files |
| power-activation | read maps and guides; propose activation card and map changes | yes, before writing maps or connecting anything |
| runtime-export | read selected workspace files; draft export bundle | yes, before placing export outside workspace |
| vault-bridge | read approved external source files; propose read protocol and map changes | yes, before connecting or writing to any external source |
| skill-builder | read workspace context; create or draft a new skill | yes, before adding tool access or writing outside `skills/` |
| morning-brief | read workspace; write today's daily file | follow the autonomy setting |
| evening-planning | read workspace; update tasks and today's daily file | confirm the summary; quiet file moves only if autonomy is set to quiet updates |
| brain-dump-organizer | read input; propose routed edits | yes, before routed edits beyond approved quiet capture |
| research-helper | web only when asked; write to `knowledge/` | cite sources; approve knowledge writes |
| project-scout | read `projects/` and `tasks/`; suggest only | no, read-only |
| lessons-updater | append to `tasks/lessons.md` after an explicit correction | no |
| assistant-checkup | read the whole workspace; report only | no, read-only |
| capability-discovery | interview; propose edits to maps, `home.md`, and activation cards | yes, before writing maps or activation cards |

## Last Reviewed

YYYY-MM-DD
