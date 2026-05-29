# Capability Map

What your assistant can do now. It pairs with `power-map.md` (what it could grow into next) and `permission-map.md` (what needs your approval). The assistant maintains these with you, and they should stay readable at a glance.

> **For the assistant:** Treat this as live policy, not notes. Act only within Can Read, Can Suggest, Can Change With Approval, and Can Change Quietly. Anything not listed here is not authorized yet. Approval gates live in `permission-map.md`. Re-read this file at the start of any session that will change files. During onboarding and the `capability-discovery` skill, replace the defaults below with the user's real choices and update Last Reviewed.

This file ships in the **safe default state**: files and chat only. It is useful and enforceable exactly as-is. Widen it on purpose, one capability at a time.

## Current Mode

**Default: files and chat only.**

Upgrade path. Move to the next one only when the value is clear:

- [x] Files and chat only
- [ ] Notes workspace (for example an Obsidian vault)
- [ ] Phone access (message the assistant)
- [ ] Read-only app access (for example Calendar or Gmail)
- [ ] Write access with approval
- [ ] Runtime automation. Requires a connected runtime (see `guides/runtime-adapters.md`). Lumina by itself does not run background automation.

## Can Read

- All files in this Lumina workspace.
- Anything you paste or share in chat.

## Can Suggest

- Daily and weekly plans.
- Task and project organization.
- Drafts: messages, copy, outlines, for your review.
- Research questions and summaries.
- Lessons drawn from your corrections.

## Can Change With Approval

- `home.md`
- `tasks/active.md`, `tasks/done.md`
- `projects/*`
- `profile/*`, including goals, preferences, and these maps
- `knowledge/*`
- `power/*`

## Can Change Quietly

- `ideas/inbox.md`, capture only.
- Today's file in `daily/` when you ask for a plan or a reflection.
- `tasks/lessons.md` after an explicit correction from you.
- `home.md` when summarizing already approved workspace files.

Everything else needs approval first. The full approval list lives in `permission-map.md`.

## Not Connected Yet

- Email (Gmail).
- Calendar.
- Messaging (Telegram or similar).
- A stronger runtime (Hermes, OpenClaw, Claude, Codex).

The assistant has no access to anything in this list until you connect it and record it above.

## Growing Next

What to add next lives in `power-map.md`, so this file stays a clean picture of what is true now. The `capability-discovery` skill moves a power here only once it is connected and live.

## Last Reviewed

YYYY-MM-DD
