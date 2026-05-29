# Runtime Adapters

Lumina is a readable Markdown workspace. Stronger runtimes can use that context when you add them. This guide shows how your Lumina files carry over into Hermes, OpenClaw, and other agent systems.

## Read this first

The mappings below come from a review of each runtime's public docs, not a tested migration. Runtimes rename and reorganize their files between versions. Treat the destination names as "look for the runtime's equivalent of this," not as exact paths. Confirm the current names in your runtime's own docs before relying on them.

You do not need to memorize any of these names. The fastest, version-proof way to move your context is the copy-paste prompt in [Generic Runtime Adapter](#generic-runtime-adapter). Use that first. The tables are a cheat sheet for when you want more control.

## Why this matters

Your personal context belongs to you. If you later use Hermes, OpenClaw, Claude, Codex, or another runtime, you should be able to carry over who you are, what you are working toward, how you like help, what requires approval, the skills you use, and the lessons the assistant has learned. Lumina keeps all of that in plain files so it stays portable.

## Generic Runtime Adapter

This works for any runtime, regardless of what it names its files. Paste this into the new runtime once it can read your Lumina workspace:

```text
Read my Lumina workspace: home.md, profile/me.md, profile/goals.md,
profile/preferences.md, profile/taste-and-standards.md,
profile/capability-map.md, profile/power-map.md, profile/permission-map.md,
tasks/active.md, tasks/lessons.md, power/, and skills/.

Then do four things:
1. Summarize my durable context compactly: who I am, what I am working
   toward, what good work looks like, how I want help, and what always needs my approval.
2. Put that summary wherever YOU store user profile, long-term memory, and
   assistant instructions. Use your own correct file names and locations.
3. Register my Lumina skills as your kind of skill or saved procedure.
4. Show me exactly where you put each piece, and confirm my approval
   gates carried over. Do not enable app access, sending, spending, or
   automation until I approve each one.
```

That prompt makes the runtime do the mapping with its own current file names, so it keeps working even when those names change.

## Lumina to Hermes

Hermes uses long-term memory, skills, context files, provider setup, gateway setup, and optional personality files. Look for the Hermes equivalent of each Lumina file:

| Lumina file | Hermes equivalent |
| --- | --- |
| `profile/me.md` | user profile summary |
| `profile/preferences.md` | user profile and personality file |
| `profile/taste-and-standards.md` | style, quality, and review standards |
| `profile/goals.md` | compact goals in long-term memory |
| `profile/permission-map.md` | approval and tool guidance in project context |
| `tasks/lessons.md` | skills or memory entries, depending on whether the lesson is a procedure or a fact |
| `skills/*.md` | AgentSkills-style `SKILL.md` folders |

Hermes ideas worth keeping: keep factual memory compact, use skills for procedures, use recovery commands like `hermes doctor`, and use per-platform skill controls when a skill is too powerful for phone chat.

Sources (verify current file names here):

- [Hermes Memory](https://hermes-agent.nousresearch.com/docs/user-guide/features/memory)
- [Hermes Skills](https://hermes-agent.nousresearch.com/docs/user-guide/features/skills)
- [Hermes Quickstart](https://hermes-agent.nousresearch.com/docs/getting-started/quickstart)

## Lumina to OpenClaw

OpenClaw uses agent workspaces, Markdown memory files, skills, gateway configuration, channels, and optional memory wiki layers. Look for the OpenClaw equivalent of each Lumina file:

| Lumina file | OpenClaw equivalent |
| --- | --- |
| `profile/me.md` | durable user context in workspace memory |
| `profile/preferences.md` | workspace memory and personality file |
| `profile/taste-and-standards.md` | workspace standards or review guidance |
| `profile/goals.md` | workspace memory or project files |
| `daily/*.md` | dated daily notes in the memory folder |
| `profile/capability-map.md` | workspace reference file |
| `profile/permission-map.md` | tool policy and assistant guidance |
| `skills/*.md` | workspace skill folders |

OpenClaw ideas worth keeping: keep memory on disk in Markdown, use a workspace for durable context, run a health check after setup, treat third-party skills as untrusted until reviewed, and use skill allowlists for narrower agents.

Sources (verify current file names here):

- [OpenClaw GitHub](https://github.com/openclaw/openclaw)
- [OpenClaw Memory Wiki](https://docs.openclaw.ai/plugins/memory-wiki)

## Adapter rule

Compact the durable context first, then link back to the full Lumina files when the runtime can read them. Carry approval gates over before any capability. A runtime should know what needs your sign-off before it can act, not after.
