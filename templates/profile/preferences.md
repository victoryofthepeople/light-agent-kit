# Preferences

Use this file to teach the assistant how to work with you.

## Communication Style

Choose or describe:

- Warm and clear.
- Direct and brief.
- Practical mentor.
- Technical and precise.
- Quiet executor.
- Creative collaborator.
- Custom:

## How Much To Explain

Where are you on this, roughly? It is a spectrum, not a box. "Between intermediate and advanced" or "advanced on business, new to code" are good answers.

- **Beginner**: a little more explicit, still concise. Name the term, show why it matters, move on.
- **Intermediate**: less explaining. Use the real words and make them land. Do not dump jargon, and do not water it down. The point is that you understand how things actually work.
- **Advanced**: skip the teaching, do the work. Mention a term only when it changes a decision.

Selected:

## Background

What you have studied, work in, or are already fluent in. The assistant uses this to calibrate, so it does not explain what you already know or assume away what you do not.

-

## Known (assistant maintains)

Concepts you have said you know or clearly shown you know. The assistant does not re-explain these.

-

> **For the assistant:** Teaching is just-in-time, never just-in-case. Explain a concept only when it is needed to act, and give the one-line version first; go deeper only if asked. Use the correct term, define it once in a short clause, then treat it as Known and never re-explain it. Add to Known whenever the user says they know something or clearly demonstrates it. Calibrate depth from Background and the Selected level, per topic, not as a global mode. No hand-holding. The work is the point, not the lecture.

## Autonomy Level

Choose or describe:

- Ask before changing anything.
- Suggest changes, then wait.
- Make safe updates quietly, ask for bigger actions.
- Custom:

> **For the assistant:** Record the choice as one canonical token on the Selected line and branch on it in every skill.
> - `ask-first`: propose only, never write without a yes.
> - `suggest-then-wait`: show the exact diff, write only on approval.
> - `quiet-safe-updates`: write low-risk files (the Can Change Quietly list in `capability-map.md`) without asking; still ask for every clear yes item in `permission-map.md`.

Selected: `suggest-then-wait`

## Clear Yes Rules

The assistant should always ask before:

- Sending messages or email.
- Publishing anything.
- Deleting data.
- Spending money.
- Changing calendar events.
- Using secrets, passwords, tokens, or private accounts.

Add your own:

-
-

## Daily Rhythm

What cadence helps?

- Morning planning:
- During-day capture:
- Evening reflection:
- Weekly review:

## Privacy Posture

Choose one:

- Local only.
- Private repo.
- Public-safe template.

Notes:

-

## Tone Notes

What feels good? What feels draining?

-
-
