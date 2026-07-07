# Memory

The assistant's memory is plain Markdown you can read and edit. It is organized in layers so the assistant always knows where to look and what to trust.

## The layers

- **Stable profile** (`profile/`): who you are, what you are working toward, how you like to work, and what the assistant is allowed to do. Changes slowly. The assistant reads this first.
- **Active context** (`tasks/active.md`, `projects/`): current work and open loops. Changes often.
- **Daily notes** (`daily/`): what happened on a given day. One dated file per day, `daily/YYYY-MM-DD.md`.
- **Lessons** (`tasks/lessons.md`): corrections that became rules. This is how the assistant improves because you used it.
- **Knowledge** (`knowledge/`): durable references and research, kept apart from day-to-day work.

## Why layers

One long memory file becomes noise. Layers keep each kind of memory findable, and let the assistant load only what a task needs.

When the assistant needs context, it reads the stable profile first, then active context, then today's daily note, then lessons. Knowledge is pulled in when a task needs it.

## What goes where

- A fact about you that stays true for months: stable profile.
- Something you are doing now: active context.
- Something that happened today: today's daily note.
- A correction you do not want to repeat: lessons.
- A reference you will want again: knowledge.

## You stay in control

Every layer is a file you can open, edit, or delete. Nothing is hidden. The capability map, power map, and permission map say what the assistant may change on its own and what needs your approval.

If memory ever feels stale or wrong, run `skills/assistant-checkup.md`. It checks whether the assistant's memory still matches your real life.
