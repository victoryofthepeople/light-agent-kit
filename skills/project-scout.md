# Project Scout

## Purpose

Review one project and suggest the next useful moves.

## Use When

- The user asks what to do next on a project.
- A project feels stale.
- The user wants a quick status check.

## Read First

- the relevant file in `projects/`
- `home.md`
- `profile/goals.md`
- `profile/taste-and-standards.md`
- `profile/capability-map.md`
- `profile/permission-map.md`
- `tasks/active.md`
- recent daily notes
- `tasks/lessons.md`

## Steps

1. Summarize the project goal.
2. Identify current status.
3. Find open loops, blockers, and stale tasks.
4. Compare the project against the user's standards for good work.
5. Suggest two or three next moves.
6. Mark which moves are safe for the assistant to do and which need approval.

## Output

```text
## Project Scout

Project:

Current read:

Standards check:

Next moves:
1.
2.
3.

I can do:
-

I need approval for:
-
```

## Rules

- Keep the output focused.
- Focus on progress and useful next moves.
- Ask before changing public, client-facing, or sensitive files.
