# Workspace Builder

## Purpose

Create the user's private Light Agent Kit workspace from the kit without mixing public templates, private notes, and build notes.

Use this when the assistant can edit files directly.

## Use When

- The user says "install Light Agent Kit," "set this up," "onboard me," or "build my workspace."
- The agent is running in Codex, Claude Code, or another file-editing runtime.
- The user wants a private workspace instead of chat-only drafts.

## Read First

- `START-HERE.md`
- `ONBOARDING.md`
- `templates/TEMPLATE-CATALOG.md`
- `templates/workspace-readme.md`
- `PRIVACY-CHECKLIST.md`
- `AGENTS.md`

## Steps

1. Choose the private workspace location.
   - If the user gave a path, use it.
   - If not, suggest `my-lumina/` or `lumina-workspace/`.
2. Create the minimum folder structure:
   - `profile/`
   - `tasks/`
   - `daily/`
   - `projects/`
   - `ideas/`
   - `knowledge/`
   - `power/`
   - `skills/`, only if skills are being copied into the private workspace.
3. Copy `templates/workspace-readme.md` to `README.md`.
4. Copy the core templates:
   - `templates/home.md` -> `home.md`
   - `templates/profile/me.md` -> `profile/me.md`
   - `templates/profile/goals.md` -> `profile/goals.md`
   - `templates/profile/preferences.md` -> `profile/preferences.md`
   - `templates/profile/taste-and-standards.md` -> `profile/taste-and-standards.md`
   - `templates/profile/capability-map.md` -> `profile/capability-map.md`
   - `templates/profile/power-map.md` -> `profile/power-map.md`
   - `templates/profile/permission-map.md` -> `profile/permission-map.md`
   - `templates/tasks/active.md` -> `tasks/active.md`
   - `templates/tasks/done.md` -> `tasks/done.md`
   - `templates/tasks/lessons.md` -> `tasks/lessons.md`
   - `templates/ideas/inbox.md` -> `ideas/inbox.md`
   - `templates/knowledge/index.md` -> `knowledge/index.md`
5. Add dated daily notes only when useful.
   - If creating one, copy `templates/daily/daily-template.md` to `daily/YYYY-MM-DD.md`.
6. Add project, knowledge, and power templates only when the onboarding answers call for them.
7. Copy selected skills only if the workspace should be portable without the public kit.
   - Otherwise, reference the skills from the kit.
8. Do not copy:
   - files outside the public kit path the user approved
   - existing task files from the kit source folder
   - private local files
   - private build notes
   - examples as real user data
9. Run `skills/home-refresh.md` after the first useful result is known.
10. Run `skills/assistant-checkup.md` before calling setup done.

## Output

```text
## Workspace Built

Location:

Created:
-

Copied from templates:
-

Skills available:
-

Still needs user input:
-

First useful thing completed:
-

Next move:
-
```

## Rules

- Keep the public kit unchanged.
- Keep private user data in the private workspace.
- Prefer copying only the files that are useful now.
- If copying the full template folder, copy `workspace-readme.md` to `README.md` in the destination.
- Never copy fictional examples into the user's real workspace as facts.
