# Power Recipes

These recipes make the power catalog actionable.

Use them when a user need clearly points to a capability that is not live yet. A recipe explains the pattern, the access it needs, the safest first test, and what changes when it becomes active.

Recipes do not install tools. They help the assistant choose the right next power and create a clear activation card.

## How To Use A Recipe

1. Match the user's need to the closest recipe.
2. Check `profile/capability-map.md` to see whether the power is live.
3. If it is not live, summarize the recipe in plain language.
4. Use `templates/power/power-activation-card.md` to create a proposed card.
5. Keep the power in `profile/power-map.md` until it is approved and connected.
6. When active, update `profile/capability-map.md`, `profile/permission-map.md`, and `home.md`.

## Recipe: External Vault Bridge

Use when:

- The user already has a project folder, Obsidian vault, client folder, repo, or business brain.
- Important context lives outside the Lumina workspace.
- The assistant needs a source-of-truth read order.

Starts as:

- Read-only.

Access needed:

- Path, repo, app, or file source.
- Entry files, such as `AGENTS.md`, `CLAUDE.md`, `README.md`, `Context.md`, `ACTION-ITEMS.md`, or an index file.

First test:

- Ask one question whose answer should come from the external source.
- Cite the file used.
- Say if the source is stale or missing the detail.

Activation card should include:

- Source path or connection.
- Read order.
- Source hierarchy: which file wins if memories conflict.
- Stale-data rule.
- Write rule, usually read-only at first.

Useful skill:

- `skills/vault-bridge.md`

## Recipe: Phone Capture

Use when:

- The user has ideas, tasks, voice notes, or follow-ups away from the desk.
- The user wants to message the assistant from a phone.
- The user needs quick capture more than full automation.

Starts as:

- Inbound capture only.

Access needed:

- Telegram, WhatsApp, SMS, Discord, email-to-note, or another message channel.
- A runtime or automation layer if messages need to arrive when no chat session is open.

First test:

- Send one test message.
- Route it into `ideas/inbox.md`, `tasks/active.md`, or today's daily note.
- Confirm what was captured and where it went.

Activation card should include:

- Channel.
- What inbound messages can become.
- What the assistant may write.
- What the assistant may never send without approval.
- Off switch for the channel or runtime.

## Recipe: Draft-Only Messaging

Use when:

- Replies, follow-ups, client messages, or outreach are a bottleneck.
- The user wants help composing messages but wants to send them personally.

Starts as:

- Draft only.

Access needed:

- Source context for the message.
- Optional read-only access to the messaging app or CRM.

First test:

- Draft one message from approved context.
- Ask the user to approve, edit, or reject it.

Activation card should include:

- Message types.
- Source files allowed.
- Approval rule before sending.
- Where drafts and sent receipts are logged.

## Recipe: Email Intelligence

Use when:

- Email contains important work, follow-ups, decisions, or client context.
- The user wants summaries, draft replies, or follow-up tracking.

Starts as:

- Read-only or manual paste.

Access needed:

- Gmail, Outlook, export, or pasted email threads.
- Clear rules for private, financial, legal, medical, and client-sensitive email.

First test:

- Summarize one approved thread.
- Identify open loops.
- Draft a reply for review.

Activation card should include:

- Mailbox or thread scope.
- Read-only versus draft-only.
- Never-send-without-approval rule.
- Sensitive categories to skip or ask about first.

## Recipe: Calendar Awareness

Use when:

- Meetings, appointments, deadlines, or energy windows shape the user's work.
- The assistant is making plans without enough time context.

Starts as:

- Read-only.

Access needed:

- Calendar titles and times.
- Optional meeting descriptions only if needed.

First test:

- Build today's plan around the calendar.
- Prepare for one upcoming meeting using approved context.

Activation card should include:

- Calendar scope.
- Whether event descriptions are visible.
- Rule that event creation, deletion, and changes require approval.

## Recipe: Scheduled Briefs And Reviews

Use when:

- The user wants a morning brief, weekly review, reminder, monitor, or recurring check-in.
- The work should happen even when the user does not manually ask.

Starts as:

- Scheduled draft or scheduled summary.

Access needed:

- A runtime that can run on a schedule.
- Approved files to read.
- Delivery channel, such as email, chat, phone, or a local file.

First test:

- Run the brief manually once.
- Then schedule one low-risk run.
- Confirm the output is useful before expanding.

Activation card should include:

- Schedule.
- Source files.
- Delivery destination.
- What the assistant may write.
- What still needs approval.
- How to pause the schedule.

## Recipe: Call Intelligence

Use when:

- Calls or meetings create tasks, decisions, quotes, and follow-ups.
- The user has transcripts from Fireflies, Zoom, Meet, or another recorder.

Starts as:

- Manual transcript processing.

Access needed:

- Approved transcripts or call notes.
- Optional recorder integration later.

First test:

- Process one transcript.
- Extract decisions, action items, open questions, and project updates.
- Route them into the right files.

Activation card should include:

- Transcript source.
- Routing rules.
- Sensitive-topic rules.
- Write approval rules.

## Recipe: Research Pipeline

Use when:

- The user needs current facts, market research, competitor notes, YouTube transcripts, Reddit/community insight, or source-backed decisions.

Starts as:

- Research on request.

Access needed:

- Web search or approved source material.
- Optional transcript extraction tools.
- Knowledge folder.

First test:

- Answer one real research question.
- Save one source, one brief, and one concept if the finding is durable.

Activation card should include:

- Source types.
- Citation expectations.
- Where research notes are saved.
- Freshness rule.
- What counts as fact versus interpretation.

Useful skill:

- `skills/research-helper.md`

## Recipe: Tool Workflow

Use when:

- A repeated task needs APIs, scripts, MCP tools, browser actions, or app actions.
- The assistant can do the work faster or more consistently with tools.

Starts as:

- Manual run with approval.

Access needed:

- Tool credentials, local scripts, APIs, or browser/runtime access.
- Clear input and output files.

First test:

- Run one low-risk version.
- Log inputs, output, and what changed.

Activation card should include:

- Tool name.
- What it can read.
- What it can change.
- Error handling.
- Approval rule before writes, sends, purchases, or deletes.

## Recipe: Always-On Runtime

Use when:

- The assistant needs to work while the user's computer or chat session is closed.
- The user wants scheduled jobs, message channels, monitors, or background automations.

Starts as:

- One scheduled read-only job or one inbound capture channel.

Access needed:

- VPS, hosted runtime, daemon, automation platform, or agent runtime.
- Secret storage.
- Logs.
- Off switch.

First test:

- Run one scheduled job that reads approved files and writes a summary.
- Confirm logs and pause controls work.

Activation card should include:

- Runtime.
- Hosting location.
- Secrets rule.
- Logs location.
- Schedule.
- Off switch.
- Recovery or health check.

## Recipe: Multi-Agent Work

Use when:

- The task has independent research, writing, implementation, review, or monitoring pieces.
- The active runtime supports subagents or parallel jobs.

Starts as:

- Assistant proposes the split and waits for approval.

Access needed:

- Runtime support for subagents.
- Clear source files and output expectations.

First test:

- Split one research or build task into two roles.
- Compare outputs.
- Save only the useful result.

Activation card should include:

- Subagent roles.
- Shared source files.
- Output format.
- Review rule before any final write or public output.
