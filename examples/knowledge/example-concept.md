# Assistant Permissions

Fictional example.

---
title: "Assistant Permissions"
category: "personal-ai"
sources: [example-source]
last_updated: 2026-01-01
confidence: emerging
applied: false
---

## Core Idea

Assistant permissions are the plain-language rules for what the assistant can read, suggest, change, automate, or send.

## Key Principles

- Write permissions before connecting tools.
- Use read-only access before write access when possible.
- Approval rules should name the action, not only the app.
- Sensitive actions stay approval-gated.

## Frameworks

1. No access: the assistant only knows what the user shares.
2. Read-only: the assistant can observe and suggest.
3. Write with approval: the assistant can prepare changes and wait for approval.
4. Quiet updates: the assistant can make low-risk updates inside clear boundaries.

## How I Use This

This example would guide the user's `profile/permission-map.md`.

## Examples

- Sending email: approval required.
- Updating a typo in a private project note: quiet update allowed if the user chose that.

## Open Questions

- Which tools need a separate approval rule?

## Sources

- `example-source`: introduces the approval-before-access rule.

## Update Notes

- 2026-01-01: Created as a fictional example.
