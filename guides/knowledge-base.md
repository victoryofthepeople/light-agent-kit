# Knowledge Base

Light Agent Kit can start with simple notes. When your notes become important enough to reuse, turn them into a living knowledge base.

The goal is practical memory you can trust.

## Two Modes

### Simple Notes

Use this when you are starting.

Files:

- `knowledge/index.md`
- `knowledge/knowledge-note-template.md`

Good for:

- Useful ideas.
- Small research notes.
- Links you want to remember.
- Questions to revisit.

### Light Agent Kit Wiki

Use this when the assistant needs durable knowledge across sources.

Think of this as an LLM wiki-style layer. It stays in Markdown first, so you can read and edit the knowledge before any runtime tries to retrieve it.

Files:

- `knowledge/sources/`
- `knowledge/briefs/`
- `knowledge/concepts/`
- `knowledge/wiki-index.md`
- `knowledge/research-log.md`

Good for:

- Research that changes over time.
- Product strategy.
- Personal frameworks.
- Learning a domain.
- Comparing tools.
- Building an assistant that can explain where an idea came from.

## The Flow

```text
source -> brief -> concept
```

Source:

Raw material. A book, article, video, repo, transcript, doc, or observation. Keep it close to what the source actually said.

Brief:

A short, readable summary. The assistant should be able to scan it fast.

Concept:

A living synthesis. This is where the useful idea lives after multiple sources or real use have shaped it.

## Why This Matters

Raw notes are easy to capture and hard to reuse.

A concept page is easier for an assistant to query because it has:

- The core idea.
- Key principles.
- Useful examples.
- Confidence level.
- Source links.
- Open questions.
- How the idea applies to your life or work.

## Suggested Folder

```text
knowledge/
  index.md
  research-log.md
  sources/
  briefs/
  concepts/
```

You can add folders later for domains:

```text
knowledge/
  concepts/
    business/
    health/
    productivity/
    creative/
```

## When To Create Each File

Create a source when:

- You found material worth keeping.
- You want the assistant to know where an idea came from.
- The source may matter again later.

Create a brief when:

- The source is too long to read every time.
- You want a 1 to 2 page version.
- You need to compare several sources.

Create a concept page when:

- The idea appears in more than one source.
- The idea affects your decisions.
- You want the assistant to use it in future work.

## Confidence

Use simple confidence labels:

- `emerging`: early idea, one source, or untested.
- `solid`: multiple sources or repeated use.
- `deep`: well tested and personally useful.

## Updating The Wiki

Ask the assistant:

```text
Review my knowledge folder.
Find sources that need briefs, briefs that should update concept pages, and concept pages with stale or low-confidence claims.
Suggest a small update plan before changing files.
```

## Keep It Useful

The wiki should make thinking clearer.

If the system starts feeling like paperwork, simplify:

- Keep the source.
- Write one useful brief.
- Update one concept page.
- Stop there.
