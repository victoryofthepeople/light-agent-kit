# Light Agent Kit — Setup Site

The guided onboarding app. This is the main product.

## What it does

- Walks a user through ~10 questions in the browser
- Builds a starter workspace folder live in a side panel
- Downloads a zip — no server, no accounts, no cloud AI
- Hands off to Claude Cowork, Claude Code, Codex, ChatGPT, etc.

## Run locally

```bash
npm install
npm run dev
```

Open the URL shown (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
npm run preview
```

Output goes to `dist/`.

## Key source files

| File | Role |
|---|---|
| `src/App.tsx` | Flow orchestration (intro → interview → handoff) |
| `src/Intro.tsx` | Opening explainer |
| `src/questions.ts` | Question definitions |
| `src/templates.ts` | Answers → Markdown files |
| `src/FilePanel.tsx` | Live workspace preview |
| `src/Handoff.tsx` | Download zip + AI tool picker |
| `src/index.css` | Visual design |

## After the download

The user's workspace is self-contained. To grow it, they give their AI the parent repo link and read `EXPAND.md` at the repo root.

## Stack

React 19, TypeScript, Vite 8.
