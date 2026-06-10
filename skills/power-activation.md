# Power Activation

## Purpose

Help the user turn on a new agent power deliberately.

This skill creates or updates a power activation card, then updates the capability, power, and permission maps after approval.

## Use When

- The user wants phone access, app access, scheduled work, messaging, automation, a runtime, or a new tool.
- `profile/power-map.md` has a Next Activation the user wants to explore.
- The assistant notices a repeated workflow that may deserve more power.

## Read First

- `profile/capability-map.md`
- `profile/power-map.md`
- `profile/permission-map.md`
- `POWER-CATALOG.md`
- `POWER-RECIPES.md`
- `templates/power/power-activation-card.md`
- relevant guides in `guides/`

## Steps

1. Name the power in plain language.
2. Match it to the closest recipe in `POWER-RECIPES.md`.
3. Explain what it would let the assistant do for this user.
4. Identify what access it needs.
5. Choose the approval rule.
6. Define a first test that proves value.
7. Define the off switch.
8. Show the proposed activation card.
9. Ask for approval before connecting anything or widening any permission.
10. After approval, update:
   - `profile/capability-map.md` if the power is live now.
   - `profile/power-map.md` if the power is still planned.
   - `profile/permission-map.md` for clear yes rules and access level.
   - `home.md` with a short summary.

## Output

```text
## Power Activation

Power:

Recipe:

What this unlocks:

Access needed:

Approval rule:

First test:

Off switch:

Map changes:
```

## Rules

- A proposed power is not live until the user approves it.
- Prefer read-only before write access when possible.
- Sending, publishing, deleting, spending, secrets, and calendar changes always need a clear yes.
- Every power needs an off switch.
- Keep unapproved ideas in `profile/power-map.md`, not `profile/capability-map.md`.
