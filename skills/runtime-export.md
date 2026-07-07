# Runtime Export

## Purpose

Prepare Light Agent Kit context for another AI tool or runtime without dumping the whole workspace.

Use this to carry the user's profile, standards, permissions, lessons, skills, and active context into Claude, Codex, Hermes, OpenClaw, or another runtime.

## Use When

- The user wants to use kit context in another AI tool.
- The user is connecting a stronger runtime.
- The user asks for a compact system prompt, context bundle, or migration summary.

## Read First

- `home.md`
- `AGENTS.md`
- `profile/me.md`
- `profile/goals.md`
- `profile/preferences.md`
- `profile/taste-and-standards.md`
- `profile/capability-map.md`
- `profile/power-map.md`
- `profile/permission-map.md`
- `tasks/active.md`
- `tasks/lessons.md`
- relevant `projects/`
- relevant `skills/`

## Steps

1. Identify the target runtime or tool.
2. Summarize stable context:
   - who the user is
   - what they are working toward
   - how they like help
   - taste and quality standards
   - current projects and tasks
3. Carry permissions before capabilities.
4. Carry lessons before preferences that might conflict with them.
5. Include only skills relevant to the target use case.
6. List source files used so the user can inspect the bundle.
7. Show the export bundle and ask before placing it anywhere outside the kit workspace.

## Output

```text
# Light Agent Kit Runtime Export

Target:

Purpose:

Stable context:

Current work:

Taste and standards:

Live capabilities:

Clear yes rules:

Lessons to preserve:

Relevant skills:

Source files used:
```

## Rules

- Do not include secrets, tokens, private account details, or raw sensitive notes.
- Do not widen permissions in the export.
- If the target runtime needs a specific file format, adapt the bundle but preserve the clear yes rules.
- Keep the export compact. Link back to source files when the runtime can read them.
