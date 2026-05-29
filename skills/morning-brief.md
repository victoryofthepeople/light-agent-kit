# Morning Brief

## Purpose

Help the user start the day with clear focus and a usable plan, and leave that plan written down where the assistant and the user will both see it.

## Use When

- The user starts the day.
- The user feels scattered.
- The user asks, "What should I do today?"

## Read First

- yesterday's `daily/` file, the Where I Left Off note
- `home.md`
- `profile/goals.md`
- `profile/preferences.md`
- `profile/taste-and-standards.md`
- `profile/capability-map.md`
- `tasks/active.md`
- today's file in `daily/`
- relevant project files in `projects/`
- `tasks/lessons.md`

## Steps

1. Read yesterday's Where I Left Off note first, so the day resumes at full speed instead of from a blank page.
2. Identify the most important active goals.
3. Check today's tasks and open loops.
4. Notice constraints like energy, time, appointments, or deadlines. If calendar access is granted in `capability-map.md`, use it; otherwise ask.
5. Suggest a usable plan for the day, and name the one real thing worth shipping today.
6. Ask one clarifying question only if the plan depends on it.
7. Write back, per the autonomy token in `profile/preferences.md`:
   - `quiet-safe-updates`: write the plan into today's `daily/` file and sync the top three items into `tasks/active.md`, then report what changed.
   - `suggest-then-wait`: show the exact lines you would add, then write on approval.
   - `ask-first`: present the plan only.
8. If the day's focus changed, refresh the Current Focus, Useful This Week, and Open Loops sections of `home.md` within the same autonomy setting.

## Output

Use this shape:

```text
## Morning Brief

Picking up from:
-

Why it matters:

Top focus:
-

Today:
- [ ]
- [ ]
- [ ]

One thing to ship:
-

If energy dips:
-

One clean first move:
-

Written to:
-
```

## Rules

- Keep it short.
- Give a realistic plan.
- Prefer three meaningful tasks over a long list.
- Branch on the autonomy token; never write above the access set in `permission-map.md`.
