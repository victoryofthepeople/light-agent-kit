# Skill Builder

## Purpose

Turn a useful repeatable task into a plain Markdown skill the assistant can run again.

A skill is a saved way of working. It tells the assistant when to use the workflow, what to read first, what steps to follow, what output to produce, and what needs a clear yes.

## Use When

- The user says "make this repeatable."
- The user corrects the assistant and the fix should become a workflow.
- A task has happened two or three times and the assistant keeps re-explaining or re-inventing it.
- The user wants a custom workflow for planning, research, writing, client work, project review, capture, or automation.
- The user wants to prepare a skill that could later move into Claude, Codex, Hermes, OpenClaw, or another runtime.

## Read First

- `home.md`
- `profile/preferences.md`
- `profile/taste-and-standards.md`
- `profile/capability-map.md`
- `profile/permission-map.md`
- `tasks/lessons.md`
- relevant files in `projects/`, `knowledge/`, or `power/`

## Steps

1. Name the repeatable result.
   - Ask: "What should this skill help you do again?"
2. Find the trigger.
   - Ask: "When should I use this skill?"
3. Identify the context the assistant needs.
   - Files to read.
   - Apps or tools needed, if any.
   - Examples of good output.
4. Write the simplest useful workflow.
   - Keep it short.
   - Use steps the assistant can actually follow.
   - Add clear yes rules only where the skill touches sending, publishing, deleting, spending, app access, client-facing work, or private accounts.
5. Add the output format.
   - The user should know what they will get back.
6. Add verification.
   - How the assistant checks that the skill worked.
7. Save or draft the skill.
   - If the assistant can edit files, create `skills/SKILL-NAME.md`.
   - If the assistant only has chat, draft the skill clearly so the user can place it later.
8. Update `home.md` or `profile/capability-map.md` only if the new skill changes what the assistant can do now.

## Good Skill Shape

```text
# Skill Name

## Purpose

What this helps the assistant do.

## Use When

- Trigger 1.
- Trigger 2.

## Read First

- File or folder.

## Steps

1. Do the first thing.
2. Do the second thing.
3. Ask before any sensitive action.

## Output

What the assistant should produce.

## Verification

How the assistant checks the work.

## Rules

- Keep the important boundary here.
```

## Output

```text
## Skill Built

Skill name:

Use when:

Reads:

Steps:

Needs a clear yes:

Saved at:

First test:
```

## Rules

- Build skills for real repeated work, not every one-off task.
- Prefer a short useful skill over a long perfect one.
- Keep tool-specific details out unless that tool is already connected.
- If the skill needs a new app, runtime, or account, create a power activation card first.
- If the target runtime has its own skill format, keep the Light Agent Kit skill as the readable source, then adapt it with `skills/runtime-export.md`.
