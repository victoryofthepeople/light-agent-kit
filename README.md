# Light Agent Kit

Give your AI agent the context to actually work for you.

## Start here

**The product is the guided setup site** in [`site/`](site/).

It walks you through a short interview in the browser and builds a starter workspace folder you download as a zip. No account, no cloud AI — your answers stay on your device until you hand the folder to your own AI tool.

```bash
cd site
npm install
npm run dev
```

Open the local URL (usually `http://localhost:5173`), answer the questions, download your folder, then open it in Claude Cowork, Claude Code, Codex, Cursor, or attach it to a chat.

## What you get

A small, readable workspace your AI can actually navigate:

```text
START-HERE.md       tells your AI how to begin
home.md             map of the workspace
me.md               who you are
boundaries.md       what needs your yes
tasks.md            active work
decisions.md        calls worth keeping
daily/              running log
work/ life/ notes/  work has your answers; others are ready to grow
```

Then talk to your AI in chat. It reads the files, organizes your brain dump, and keeps the folder current.

## Grow it with this repo

Once you have a workspace, **this GitHub repo becomes the expansion library**.

Give the repo link to your AI and say something like:

```text
I have a Light Agent Kit workspace. Read EXPAND.md in this repo and suggest one useful thing I could add based on what you know about me.
```

Your agent can browse:

- [`templates/`](templates/) — deeper files to add (goals, projects, knowledge base, power maps)
- [`skills/`](skills/) — repeatable workflows (morning brief, brain dump organizer, lessons updater)
- [`guides/`](guides/) — optional tool and runtime setup
- [`examples/`](examples/) — fictional workspaces showing what good growth looks like
- [`POWER-CATALOG.md`](POWER-CATALOG.md) and [`POWER-RECIPES.md`](POWER-RECIPES.md) — stronger powers when the value is clear

Read [EXPAND.md](EXPAND.md) for the full agent instructions.

## For AI Agents

| User has… | Do this |
|---|---|
| Nothing yet | Send them to the setup site in `site/`. Do not run a full repo onboarding. |
| A workspace folder | Read their `home.md`, then [EXPAND.md](EXPAND.md). Suggest one useful addition at a time. |
| This repo only, no workspace | Read [EXPAND.md](EXPAND.md) Step 1. Site first. |

Also read [AGENTS.md](AGENTS.md), [CAPABILITIES.md](CAPABILITIES.md), and [PRIVACY-CHECKLIST.md](PRIVACY-CHECKLIST.md) when helping inside a workspace.

## Who this is for

- People curious about AI agents and tired of heavy setup
- Solo operators, students, builders, consultants
- Anyone who wants an assistant that starts from their real life and stays readable and portable

## The core loop

1. Build your starter folder on the site.
2. Hand it to your AI and talk in chat.
3. Let it organize tasks, daily notes, and active work into files.
4. Correct it when something is off.
5. Give it this repo when you want to add structure, skills, or stronger powers.

## Ownership and privacy

Your real workspace lives in the folder you downloaded — not in this public repo.

Public-safe here: the site, templates, examples, skills, guides. Private: your answers, daily logs, client details, keys, and tokens.

Before publishing your own version, run [PRIVACY-CHECKLIST.md](PRIVACY-CHECKLIST.md).

## Repo layout

| Path | What it is |
|---|---|
| `site/` | **The product** — guided setup web app |
| `EXPAND.md` | Agent instructions for growing a workspace |
| `templates/` | Blank expansion files |
| `skills/` | Repeatable assistant workflows |
| `guides/` | Optional integrations and runtimes |
| `examples/` | Fictional shapes that worked |
| `AGENTS.md` | How to help inside a user's workspace |

## Principles

- Start with the person, then the tools.
- Keep memory human-readable.
- Add structure only when it unlocks progress.
- Make boundaries visible.
- Stay portable across AI tools.

## License

MIT. See [LICENSE](LICENSE).
