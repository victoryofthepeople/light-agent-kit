# Expand Your Workspace

This repo is the **expansion library** for Light Agent Kit.

The main product is the guided setup site in `site/`. That builds a starter workspace folder in the browser. This GitHub repo holds deeper templates, skills, guides, and examples your AI can use to grow that folder over time.

## For AI Agents

If a user gives you this repo link, **do not start a full onboarding from scratch** unless they have no workspace yet and cannot use the site.

### Step 1: Check what they already have

Look for a workspace folder with at least:

- `home.md`
- `me.md`
- `boundaries.md`

If those exist, they likely came from the guided setup. **Work inside their folder.** Read `home.md` first, then `me.md`, then `boundaries.md`, then the active room and today's `daily/` file.

If they have nothing yet, send them to the setup site first:

```text
Go through the guided setup in the Light Agent Kit site (site/ in this repo, or the deployed version).
Download your workspace zip, unzip it, and open that folder with your AI tool.
Then give me this repo link if you want help growing it.
```

### Step 2: Understand the starter shape

The guided setup produces a small, readable workspace:

```text
START-HERE.md       bootstrap for the AI
home.md             map of the workspace
me.md               who they are, how to talk to them
boundaries.md       what needs a yes before acting
tasks.md            active work
decisions.md        calls worth remembering
daily/              running log
work/ life/ notes/  work goes deep; the others ship as starters
```

This is enough to start. Do not rebuild it into the full kit shape unless the user asks.

### Step 3: Suggest additions only when useful

Browse this repo and recommend **one next addition at a time** based on real friction:

| If the user needs… | Look at… |
|---|---|
| Clearer goals or standards | `templates/profile/goals.md`, `taste-and-standards.md` |
| A capability / power / permission map | `templates/profile/capability-map.md`, `power-map.md`, `permission-map.md` |
| Project depth | `templates/projects/project-template.md`, `examples/projects/` |
| Research with sources | `templates/knowledge/`, `guides/knowledge-base.md` |
| A repeatable workflow | `skills/` — morning brief, brain dump, evening planning, etc. |
| A stronger runtime or app access | `POWER-CATALOG.md`, `POWER-RECIPES.md`, `guides/runtime-decision-guide.md` |
| Proof the shape works | `examples/first-session-walkthrough.md`, `examples/connected-workspace/` |

Read `templates/TEMPLATE-CATALOG.md` for the full expansion menu.

### Step 4: Add with consent

Before creating files:

1. Name the useful result in plain language.
2. Say which file or folder you would add and why now.
3. Ask once if they want it.
4. Copy from `templates/` or adapt from `examples/` — do not invent a parallel structure.
5. Update `home.md` so the new file appears in the map.

Keep `boundaries.md` as the source of truth for approvals. If you add `profile/permission-map.md`, align it with what is already in `boundaries.md`.

### Step 5: Run capability discovery when growth is the goal

If the user asks what else their AI could do, or their work has changed, run `skills/capability-discovery.md`.

Adapt paths to their workspace:

- `me.md` instead of `profile/me.md` when profile files do not exist yet
- `tasks.md` instead of `tasks/active.md` when the starter layout is in use
- Create `profile/` files when the maps outgrow the starter layout

## What worked (examples to learn from)

These are fictional but concrete. Use them to explain what growth looks like:

- [examples/first-session-walkthrough.md](examples/first-session-walkthrough.md) — brain dump in, organized week out, correction becomes a lesson
- [examples/connected-workspace/](examples/connected-workspace/) — stronger setup with phone capture, calendar awareness, scheduled reviews
- [examples/onboarding-sample.md](examples/onboarding-sample.md) — tone and shape of a good first working session

## Repo map

| Folder / file | Role |
|---|---|
| `site/` | The product — guided setup that builds the starter folder |
| `templates/` | Blank files to add when the starter is not enough |
| `skills/` | Repeatable workflows the assistant can run |
| `guides/` | Optional tool and runtime setup |
| `examples/` | Fictional workspaces that show what good looks like |
| `CAPABILITIES.md` | Plain rundown of what an agent can help with |
| `POWER-CATALOG.md` / `POWER-RECIPES.md` | Stronger powers when the use case asks for them |
| `PRIVACY-CHECKLIST.md` | Run before publishing anything |

## Legacy note

The old flow — paste this repo and say "onboard me" — is archived in [examples/legacy-agent-onboarding.md](examples/legacy-agent-onboarding.md). Do not use it as the default path.
