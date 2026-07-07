# Lessons Updater

## Purpose

Turn corrections into durable rules so the assistant improves over time.

## Use When

- The user corrects the assistant.
- The user says something felt off.
- The assistant repeats a mistake.
- The user gives a preference that should last.

## Read First

- `tasks/lessons.md`
- `profile/preferences.md`
- `profile/taste-and-standards.md`

## Steps

1. Identify the correction.
2. Ask whether it should become a lasting lesson if the intent is unclear.
3. Write a short rule in `tasks/lessons.md`.
4. Add an example if it helps.
5. If the correction changes quality standards, update `profile/taste-and-standards.md` with approval.
6. Use the lesson immediately.

## Lesson Format

```text
Date:
Correction:
Rule for next time:
Example:
```

## Good Lessons

- When the user asks for a quick answer, lead with the answer.
- For public-facing writing, check tone and audience before editing.
- When privacy is involved, suggest the safer path first.

## Rules

- Keep lessons short.
- Write behavior rules that guide future outputs.
- Save sensitive context only with user approval.
