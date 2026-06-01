# Vault Bridge

## Purpose

Connect Light Agent Kit to another folder, vault, repo, client brain, or business knowledge base as a source of truth.

This is the public-safe version of a pattern many real systems use: one assistant workspace can reference another organized brain without copying all of it into memory.

## Use When

- The user already has an Obsidian vault, client folder, business brain, project repo, or personal OS.
- The user asks about work whose source of truth lives outside the Light Agent Kit workspace.
- A project, client, or team has its own files that should override stale chat memory.
- The assistant needs a read protocol before touching an external knowledge source.

## Read First

- `POWER-CATALOG.md`
- `home.md`
- `profile/capability-map.md`
- `profile/power-map.md`
- `profile/permission-map.md`
- existing activation cards in `power/`
- the external source's own entry files, if the user provides them

## Setup Steps

1. Name the external source in plain language.
2. Ask or confirm where it lives: local path, repo link, app, or connected file source.
3. Identify the source-of-truth files.
4. Define the read order.
5. Define when external source data beats Light Agent Kit memory.
6. Decide the access level:
   - read-only
   - suggest changes
   - write with approval
7. Define stale-data rules, such as checking a Last Updated field.
8. Create or update a power activation card in `power/`.
9. Update the capability, power, and permission maps after approval.
10. Refresh `home.md`.

## Suggested Read Protocol

Use this shape for each bridge:

```text
Source:

Path or connection:

Use when:

Read first:
1.
2.
3.

Read next, if relevant:
-

Source hierarchy:
- If Light Agent Kit and this source conflict, trust:

Access:

Always ask before:

Stale-data rule:

Output style:
```

## Output

```text
## Vault Bridge

Source:

Why this source matters:

Read protocol:

Access level:

Approval gates:

Map changes:

First test:
```

## Rules

- Default to read-only.
- Do not copy private source material into public examples.
- Do not write to a shared external source unless the permission map explicitly allows it.
- If the external source has fresher operational data than Light Agent Kit, say that and cite the file used.
- If a detail is missing from the source, say it is missing instead of guessing.
- Treat credentials, private accounts, client files, and financial data as gated.
