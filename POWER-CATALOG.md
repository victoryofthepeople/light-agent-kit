# Power Catalog

This catalog tells the assistant what kinds of powers Light Agent Kit can grow into.

It is not an install list. It is not permission. It is a map of what is possible, what each power needs, and when it is worth activating.

Use it during onboarding, capability discovery, assistant checkups, and power activation.

For concrete activation patterns, read [POWER-RECIPES.md](POWER-RECIPES.md).

## How The Assistant Uses This

1. Listen for a real need in the user's life, business, client work, or project.
2. Check `profile/capability-map.md` to see what is live now.
3. If the power is not live, explain what it could unlock.
4. Check what access it needs.
5. Read the matching recipe in `POWER-RECIPES.md`.
6. Create a `power/` activation card before connecting anything.
7. Update `profile/power-map.md`, `profile/permission-map.md`, and `home.md`.

The user should feel that stronger agent powers are available without being pushed into setup before the value is clear.

## Power Layers

| Power | What it unlocks | Usually needs | Activate when |
| --- | --- | --- | --- |
| Workspace brain | A readable home for goals, tasks, projects, notes, standards, and lessons | Markdown files | The user wants an assistant that remembers and can be inspected |
| External vault bridge | Read from another vault, repo, client folder, or business brain as the source of truth | A path or connected file source | The user already has important context somewhere else |
| Notes app workflow | Work inside Obsidian, local notes, or another Markdown workspace | Local file access or app access | The user already lives in a notes app |
| Phone capture | Let the user text or voice-note the assistant from away from the desk | Telegram, WhatsApp, SMS, Discord, or another channel | Useful thoughts, tasks, or follow-ups happen on the go |
| Messaging assistant | Draft, triage, or send messages with approval | Messaging app access and strict approval gates | Replies and follow-ups are a recurring bottleneck |
| Email intelligence | Summarize inbox, draft replies, track follow-ups, prepare decisions | Gmail, Outlook, or email API access | Email holds important work and open loops |
| Calendar awareness | Plan around real events and prep for meetings | Read-only calendar access first | Time and meetings shape the user's day |
| Scheduled work | Morning briefs, weekly reviews, monitors, reminders, and check-ins | Cron, automation tool, agent runtime, or server | The work should happen while the user is away |
| Tool workflows | Use APIs, scripts, MCP tools, or app actions to do repeatable work | Tool credentials and per-action approval rules | The same digital process repeats often |
| Browser or desktop action | Operate websites or local apps when APIs are missing | Browser or computer-use runtime | The work can only happen through a user interface |
| Code and workspace agent | Edit files, run tests, inspect repos, ship technical changes | Codex, Claude Code, or similar file-editing agent | The user is building websites, apps, docs, or automations |
| Research pipeline | Search, read, compare, cite, and turn findings into knowledge | Web access, transcript tools, source rules | Decisions need current outside information |
| Memory wiki | Turn sources into briefs, concepts, claims, evidence, and freshness checks | Knowledge folder or memory runtime | Notes are becoming research infrastructure |
| Contacts and network intelligence | Map people, relationships, follow-ups, opportunities, and stale loops | Contacts export, CRM, messages, or vault files | Relationships are valuable and easy to lose track of |
| Call intelligence | Turn calls into summaries, action items, decisions, and project context | Fireflies, recordings, transcripts, or manual notes | Meetings produce work that needs follow-through |
| CRM or pipeline workflow | Track leads, clients, deals, tasks, and delivery status | CRM access or structured local files | Business operations need a shared source of truth |
| Multi-agent work | Split research, implementation, review, or monitoring across agents | Runtime with subagents or parallel jobs | The work has independent pieces that can run at once |
| Health check or doctor flow | Check broken setup, stale files, missing permissions, and risky drift | A skill, script, or runtime command | The system starts feeling messy or unreliable |
| Always-on runtime | Let the assistant run in the background, receive messages, and trigger workflows | VPS, daemon, hosted agent, or automation platform | The assistant needs to work when no chat session is open |

## Activation Rule

Every power starts in one of these states:

- Future: useful someday, not live.
- Proposed: worth discussing, not live.
- Approved: allowed to set up.
- Active: connected and recorded in the maps.
- Paused: turned off without deleting the notes.
- Retired: no longer part of the system.

Live powers belong in `profile/capability-map.md`.

Future and proposed powers belong in `profile/power-map.md`.

Access and approval gates belong in `profile/permission-map.md`.

The setup notes belong in `power/POWER-NAME.md`.

## Good Default

Start with the workspace brain and capability discovery.

Then add the power that removes the clearest repeated friction.

Examples:

- If ideas arrive away from the desk, consider phone capture.
- If meetings create forgotten tasks, consider call intelligence or calendar awareness.
- If client context lives in another folder, consider a vault bridge.
- If follow-ups are the bottleneck, consider draft-only messaging or email intelligence.
- If the assistant should act while the user is offline, consider scheduled work or an always-on runtime.

## What This Does Not Do

This catalog does not install Hermes, OpenClaw, Claude, Codex, Telegram, a VPS, or any other tool.

It gives the assistant enough awareness to explain those options, choose the right next one, and activate it deliberately when the user asks.
