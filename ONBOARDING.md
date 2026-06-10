# Onboarding

This is the setup flow for Light Agent Kit.

It is written for the AI agent. The user should be able to paste this repo into Claude, ChatGPT, Codex, or another agent and say:

```text
Onboard me with Light Agent Kit.
```

## Goal

By the end, the user has:

- A private Light Agent Kit workspace.
- A `home.md` page that shows the current setup.
- A useful profile.
- Goals and active tasks.
- Preferences for tone, autonomy, explanation, taste, and standards.
- Three simple maps: what is live now, what could come next, and what needs a clear yes.
- A useful working cadence, if one helps.
- A few useful skills.
- One real thing completed or clarified today.

## Read First

Before asking questions, read:

- `README.md`
- `START-HERE.md`
- `AGENTS.md`
- `PRIVACY-CHECKLIST.md`
- `CAPABILITIES.md`
- `POWER-CATALOG.md`
- `POWER-RECIPES.md`
- `templates/TEMPLATE-CATALOG.md`
- `templates/home.md`
- `templates/profile/`
- `templates/tasks/`
- `templates/daily/daily-template.md`
- `skills/workspace-builder.md`
- `skills/capability-discovery.md`
- `skills/vault-bridge.md`
- `skills/README.md`
- `examples/onboarding-sample.md`
- `examples/first-session-walkthrough.md`

If using Claude Code, also read `CLAUDE.md`.

## Operating Rule

Build as you ask.

Do not interview the user for twenty minutes and then dump a pile of files at the end. After each section, update or draft the relevant file while the context is fresh.

If you can edit files:

- Create the private workspace.
- Copy templates as needed.
- Copy `templates/workspace-readme.md` to the private workspace as `README.md` if the tool can edit files.
- Fill them in as the user answers.
- Keep the public kit unchanged.

If you are chat-only, treat this as the fallback:

- Draft each file section as you go.
- Keep the drafts organized so the user can move into a file-editing agent or paste them into files later.

Ask one question at a time. Skip anything the user already answered.

## Suggested Private Workspace

Use one of these:

```text
my-workspace/
```

or:

```text
agent-workspace/
```

The public repo is the kit. The private workspace is the user's real assistant context.

## Flow

### 1. Start With The Use Case

Ask:

> What do you want this agent to help with first?

Listen for one of these modes:

- Personal life.
- Business or projects.
- Learning AI.
- Client or team work.
- A mix.

Create or draft:

- `profile/me.md`
- `profile/goals.md`
- `home.md`
- `README.md` in the private workspace if editing files

Keep it broad enough for personal, business, client, or project use. Light Agent Kit is a flexible agent workspace that should adapt to the user's real context.

### 2. Find The First Useful Result

Ask:

> What would make this useful within the next week?

Listen for:

- Planning the day.
- Planning a week or project sprint.
- Organizing tasks.
- Tracking a project.
- Capturing ideas.
- Researching something.
- Writing or drafting.
- Following up.
- Learning how agents can help.

Create or draft:

- `tasks/active.md`
- today's `daily/YYYY-MM-DD.md` only if a dated note helps
- `home.md`

Name one likely first win.

### 3. Run Capability Discovery

Ask:

> What parts of your life or work feel repetitive, scattered, annoying, or valuable enough that an agent might help?

Translate the answer into plain capabilities:

- Capture.
- Organize.
- Search.
- Remind.
- Draft.
- Review.
- Research.
- Summarize.
- Compare.
- Monitor.
- Schedule.
- Automate.
- Send with approval.

Then run the logic in `skills/capability-discovery.md`.

Create or update:

- `profile/capability-map.md`: what the agent can do now.
- `profile/power-map.md`: what it could grow into next.
- `profile/permission-map.md`: what needs a clear yes.
- `home.md`: the first visible summary.

Explain the difference in one sentence:

> Capability is what is live now. Power is what we may add next. Permission is what needs a clear yes.

### 4. Set Working Style

Ask:

> How should this assistant talk to you and how much should it explain?

Listen for:

- Tone.
- Detail level.
- Background.
- What the user already knows.
- What feels draining.

Create or update:

- `profile/preferences.md`
- `profile/taste-and-standards.md`

Teach through the work. Define useful terms once, then move on.

### 5. Set Autonomy And Boundaries

Ask:

> How much should the assistant do on its own?

Explain this plainly:

> This is just how we keep the assistant moving fast on safe work while pausing for actions that touch other people, money, accounts, or public publishing.

Good options:

- Ask before changing anything.
- Suggest changes, then wait.
- Make safe updates quietly, ask for bigger actions.

Always require a clear yes for:

- Sending messages or email.
- Publishing.
- Deleting.
- Spending money.
- Changing calendar events.
- Using secrets, passwords, tokens, or private accounts.
- Connecting new apps or runtimes.

Update:

- `profile/preferences.md`
- `profile/permission-map.md`

### 6. Choose Memory And Knowledge

Ask:

> What should the assistant remember, and what should stay out of memory?

Then ask:

> Do you want simple notes for now, or a source-backed knowledge base?

Use:

- `knowledge/index.md` and `knowledge/knowledge-note-template.md` for simple notes.
- `knowledge/wiki-index.md`, `knowledge/research-log.md`, `sources/`, `briefs/`, and `concepts/` for source-backed research.

Keep sensitive material out of public examples and shared repos.

### 7. Add Projects, Ideas, Or Client Context

Ask only if relevant:

> Is there one project, business, client, or idea this agent should help organize first?

Create only what is useful:

- `projects/first-project.md`
- `ideas/inbox.md`
- `knowledge/index.md`

For business or client use, make the project file specific enough to act:

- Goal.
- Current state.
- Deliverables.
- Stakeholders.
- Next moves.
- Open questions.

### 8. Pick Useful Skills

Recommend two to four skills that match the first useful result:

- `skills/capability-discovery.md`
- `skills/workspace-builder.md`
- `skills/home-refresh.md`
- `skills/power-activation.md`
- `skills/runtime-export.md`
- `skills/vault-bridge.md`
- `skills/skill-builder.md`
- `skills/morning-brief.md`
- `skills/evening-planning.md`
- `skills/brain-dump-organizer.md`
- `skills/lessons-updater.md`
- `skills/research-helper.md`
- `skills/project-scout.md`
- `skills/assistant-checkup.md`

Choose based on the user's first useful result. Do not force morning or evening skills if a project, research, client, or build workflow matters more.

If the user's first useful result is something they will repeat, use `skills/skill-builder.md` to turn it into a saved workflow.

### 9. Discuss Power Layers

Ask:

> Do you want to stay files-and-chat for now, or should we plan a next power layer?

Use `guides/runtime-decision-guide.md` if needed.

Possible next layers:

- Notes app.
- Phone access.
- Read-only app access.
- Write access with approval.
- Scheduled work.
- Hermes, OpenClaw, Claude, Codex, or another runtime.

If the user wants to explore a new power, use `templates/power/power-activation-card.md` and `skills/power-activation.md`.

If the user already has an existing vault, repo, client folder, or business brain, use `skills/vault-bridge.md` so the kit can reference it without turning onboarding into a copy-and-paste migration.

Do not connect anything during onboarding unless the user explicitly asks and the approval rule is clear.

### 10. Do One Real Thing

End by doing one useful action, not just planning.

Pick one:

- Organize a brain dump.
- Create today's plan.
- Map one project.
- Draft a useful message or outline.
- Create the first research note.
- Save one lesson.
- Choose the next power to activate.

Write the result into the relevant file. If this is the chat-only fallback, show the exact draft.

Refresh `home.md` before the final summary.

## Final Output

End with:

```text
## Light Agent Kit Setup Summary

Workspace created:

What the assistant knows:

What it can do now:

What it could grow into next:

What needs a clear yes:

Useful skills:

One thing completed today:

Next useful move:
```

Keep it short. The system should feel usable now.
