# Skill Safety

Skills can make an assistant much more useful. They can also create risk when they touch files, apps, secrets, or external services.

Use this checklist before enabling a new skill.

## Quick Check

Ask:

- What does this skill do?
- What files, apps, or accounts can it touch?
- Does it run code?
- Does it send data anywhere?
- Does it need secrets, tokens, passwords, or API keys?
- Could it publish, delete, spend, send, or change something?
- Is this useful enough to enable now?

## Access Level

Choose the narrowest useful level:

- Read only.
- Draft only.
- Write with approval.
- Fully manual.

## Skill Quality

A good skill has:

- A clear purpose.
- A clear "when to use" section.
- Step-by-step procedure.
- Pitfalls or edge cases.
- Verification steps.
- Clear yes rules for bigger actions.

## Third-Party Skills

Treat third-party skills as untrusted until reviewed.

Before enabling one:

- Read the instructions.
- Check scripts or commands it may run.
- Check any required environment variables.
- Keep secrets out of prompts and logs.
- Start in a private test workspace.

## Light Agent Kit Rule

The assistant should explain what a skill can access before recommending it.

If the user is unsure, keep the skill disabled and use a manual prompt instead.
