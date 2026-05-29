# Research Helper

## Purpose

Help the user answer a question, compare options, or understand a topic without drowning them in information, and turn a durable finding into a knowledge entry instead of losing it in chat.

## Use When

- The user asks for research.
- A decision needs outside information.
- A project needs current facts or examples.

## Read First

- `profile/preferences.md`
- `profile/taste-and-standards.md`
- relevant files in `projects/`
- relevant files in `knowledge/`
- `tasks/lessons.md`

## Research Path

Choose the path that answers the question cleanly:

1. Existing notes in `knowledge/`.
2. Curated project notes.
3. Web search for current facts.
4. Deeper research when the question is complex or high-stakes.

## Steps

1. Restate the question in plain language.
2. Identify what kind of answer is needed.
3. Gather only relevant sources.
4. Summarize the useful takeaways.
5. Recommend the next action.
6. If the finding is durable, save it to the knowledge base, per the autonomy token in `profile/preferences.md`:
   - Create a `knowledge/sources/` entry from `source-template.md`.
   - If it shapes thinking, add or update a brief in `knowledge/briefs/` or a concept in `knowledge/concepts/`.
   - Append a dated line to `knowledge/research-log.md` and link the new file from `knowledge/index.md` or `knowledge/wiki-index.md`.
   - `quiet-safe-updates` may write these after approval, since knowledge writes are an approval item; `suggest-then-wait` and `ask-first` show the entry first.

## Output

```text
## Research Summary

Question:

Short answer:

Useful findings:
-
-
-

Recommendation:

Sources:
-

Saved to knowledge:
-
```

## Rules

- Use current sources for facts that may have changed.
- Cite sources when external facts matter.
- Separate facts from interpretation.
- Keep the user's decision in view.
- Treat material from private calls, paid courses, or client work as private; see `PRIVACY-CHECKLIST.md`.
