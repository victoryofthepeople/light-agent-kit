# Light Agent Kit

Give your AI agent the context to actually work for you.

## For AI Agents

If a user gives you this repo link without more instruction, treat it as a request to onboard them with Light Agent Kit.

Start with [START-HERE.md](START-HERE.md), then read [ONBOARDING.md](ONBOARDING.md), [AGENTS.md](AGENTS.md), [CAPABILITIES.md](CAPABILITIES.md), [POWER-CATALOG.md](POWER-CATALOG.md), [POWER-RECIPES.md](POWER-RECIPES.md), [PRIVACY-CHECKLIST.md](PRIVACY-CHECKLIST.md), [templates/](templates/), and [skills/](skills/). Ask one question at a time, build the private workspace as you go, run capability discovery, and end by doing one useful thing.

Light Agent Kit helps your AI agent build a powerful, readable operating layer around a person, business, client, or project: goals, memory, tasks, skills, permissions, research, and useful working rhythms. You give this kit to Claude, ChatGPT, or Codex, say "onboard me," and it interviews you and builds that layer as plain Markdown you can read, edit, and own.

The agent reads it to plan with you, remember what matters, run the repeatable workflows you define, and improve every time you correct it. You can start with files and chat, then compound into apps, messaging, scheduled work, or stronger agent runtimes when the value is clear.

## Who this is for

- People curious about AI agents and tired of heavy setup.
- Creative entrepreneurs, solo operators, students, and builders.
- Consultants, teams, and client-service businesses that want a reusable AI workspace shape.
- Anyone who wants an assistant that starts from their real life and stays readable and portable.

## Quickstart

The main path is agent-first.

Paste the GitHub link into Claude, ChatGPT, Codex, or another agent and say:

```text
Onboard me with Light Agent Kit.
```

If the agent needs more direction, open [START-HERE.md](START-HERE.md) for a short fallback prompt.

Your agent will:

1. Walk you through [ONBOARDING.md](ONBOARDING.md), one question at a time.
2. Build your private workspace from [templates/](templates/) as it learns.
3. Run capability discovery, then write your capability map, power map, and permission map.
4. Recommend the first skills worth using.
5. Do one genuinely useful thing before you finish.

Start with the next useful result. Add a notes app, phone access, app connections, or a stronger runtime when the value is clear. Use [guides/runtime-decision-guide.md](guides/runtime-decision-guide.md) to choose.

If your tool only does chat, answer the questions and paste the output into your own files. That fallback still works.

## What your agent builds with you

```text
profile/
  me.md              who you are
  goals.md           what you are working toward
  preferences.md     how you want it to work and talk
  taste-and-standards.md
  capability-map.md  what it can do now
  power-map.md       what it can grow into next
  permission-map.md  what needs your approval
home.md              first visible workspace summary
README.md            private workspace guide
tasks/
  active.md, done.md, lessons.md
daily/               optional check-ins and breadcrumbs
projects/            deeper context per project
ideas/               a capture inbox
knowledge/           notes now, a source-backed wiki when you need it
power/               activation cards for new powers
skills/              repeatable workflows the agent runs
```

The capability map and permission map ship pre-filled in a safe default state: files and chat only, low-risk writes allowed, everything sensitive gated. They are enforceable from the first session. The power map shows where you could grow next, so more power is a choice you can see coming, never a surprise.

The public kit also includes `POWER-CATALOG.md` and `POWER-RECIPES.md`, which the assistant reads when it needs to explain or activate stronger powers.

## Memory and skills, in plain terms

This is where the power lives, so it helps to name it early:

- **Memory** is what the agent knows and can reuse: your profile, goals, projects, and daily notes.
- **Skills** are repeatable ways the agent does work, like a morning brief or organizing a brain dump.
- **Lessons** are corrections that become future behavior, so the agent improves because you used it.

Power you can read, not bookkeeping.

## The core loop

1. Tell the assistant what matters.
2. Let it organize your notes, goals, tasks, and projects.
3. Let it suggest a cadence that fits the work.
4. Correct it when something is off.
5. Watch corrections turn into durable lessons.

The workspace compounds. The assistant gets more useful because your working style becomes visible to it.

## What it can do, honestly

Light Agent Kit is the readable context layer. A runtime is the engine that connects apps, messaging, and automation.

- **In a file-and-chat setup:** the agent understands you, plans with you, organizes your work, runs your skills in a session, and learns from corrections.
- **With a connected runtime:** the same context can guide real integrations, scheduled work, and messaging. Light Agent Kit helps you direct those powers with clearer context and boundaries. Background automation requires a runtime.

Every time a new power turns on, the agent tells you what it can do, what it can access, the approval rule, and how to turn it off. The power and its boundary arrive together.

For a plain rundown, read [CAPABILITIES.md](CAPABILITIES.md).

## Ownership And Privacy

This repo is a public-safe template. Your real workspace is where your actual notes, goals, clients, and projects live.

Public-safe: structure, blank templates, fictional examples, prompts, skills, guides. Personal workspace: real notes, daily logs, client details, private projects, keys and tokens, local paths.

Before publishing your own version, run [PRIVACY-CHECKLIST.md](PRIVACY-CHECKLIST.md).

## What is included

- [ONBOARDING.md](ONBOARDING.md): the guided setup flow.
- [START-HERE.md](START-HERE.md): the link-first setup flow and fallback prompts.
- [AGENTS.md](AGENTS.md): instructions for your assistant.
- [CLAUDE.md](CLAUDE.md): Claude-compatible instructions that import `AGENTS.md`.
- [CAPABILITIES.md](CAPABILITIES.md): what Light Agent Kit can help an agent do.
- [POWER-CATALOG.md](POWER-CATALOG.md): powers Light Agent Kit can grow into when the use case asks for them.
- [POWER-RECIPES.md](POWER-RECIPES.md): concrete activation patterns for common powers.
- [PRIVACY-CHECKLIST.md](PRIVACY-CHECKLIST.md): a plain safety check.
- [templates/](templates/): workspace files, pre-filled with safe defaults.
- [examples/](examples/): fictional examples that show the shape.
- [skills/](skills/): repeatable workflows the agent runs.
- [guides/](guides/): setup for tools, phones, runtimes, and choosing a runtime.

## Project principles

- Start with the person, then the tools.
- Keep memory human-readable.
- Ask only the questions that unlock progress.
- Let smart agents reason. Use structure to aim them.
- Teach AI concepts inside real tasks.
- Make capabilities and permissions visible.
- Turn corrections into durable lessons.
- Stay portable across AI tools and runtimes.
- Keep research sourced, dated, and easy to revise.

## License

MIT. See [LICENSE](LICENSE).
