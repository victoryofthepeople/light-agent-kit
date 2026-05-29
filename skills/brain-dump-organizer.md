# Brain Dump Organizer

## Purpose

Turn a messy note, voice transcript, or stream of thoughts into useful structure, and file it where it belongs instead of handing the user a list to file themselves.

## Use When

- The user pastes a long messy note.
- The user sends a voice note transcript.
- The user feels overwhelmed by loose thoughts.

## Read First

- `profile/preferences.md`
- `profile/taste-and-standards.md`
- `home.md`
- `profile/permission-map.md`
- `tasks/active.md`
- `projects/`
- `knowledge/`
- `ideas/inbox.md`

## Steps

1. Read the full brain dump.
2. Separate it into themes.
3. Pull out tasks, decisions, questions, ideas, and useful context.
4. Route each item to the right place.
5. Recommend only the next few actions.
6. Apply the routing, per the autonomy token in `profile/preferences.md`:
   - `quiet-safe-updates`: write low-risk items (ideas, lessons after a correction, today's daily note) directly; show the rest as a diff for approval.
   - `suggest-then-wait`: show the exact edits per file, then write on approval.
   - `ask-first`: propose only.
   - Then report what changed, file by file.

## Routing

- Tasks go to `tasks/active.md`.
- Completed work goes to `tasks/done.md`.
- Raw ideas go to `ideas/inbox.md`.
- Project context goes to the relevant file in `projects/`.
- Durable references go to `knowledge/`.
- Corrections to assistant behavior go to `tasks/lessons.md`.
- Changes to current focus or open loops can update `home.md`.

## Output

```text
## Organized Brain Dump

Main themes:
-

Tasks:
- [ ]

Decisions:
-

Ideas:
-

Questions:
-

Applied to files:
-

Next move:
-
```

## Rules

- Preserve the user's meaning.
- Keep raw language only when it is useful.
- Ask before saving sensitive personal details.
- Branch on the autonomy token; never write above the access set in `permission-map.md`.
