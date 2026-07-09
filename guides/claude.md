# Using Light Agent Kit With Claude

Claude is useful when you want a conversational assistant to help you think, plan, write, and organize files.

## Setup

1. Build your workspace with the guided setup site in [`site/`](../site/).
2. Unzip the download and open the folder in **Claude Cowork** or **Claude Code**.
3. Say hi. Claude reads `START-HERE.md` in your folder and takes it from there.

Claude Code can also read this repo's [EXPAND.md](../EXPAND.md) when you want to grow the workspace.

## Grow the workspace

Give Claude this GitHub repo and say:

```text
Read EXPAND.md. Look at my workspace files.
Suggest one useful thing I could add from templates/ or skills/.
```

## Claude Projects (chat-only)

Upload your workspace files as project knowledge. Claude can read and organize in chat, but cannot edit files directly. It will hand you replacement file contents to save.

## Safety notes

- Share only the context you want Claude to see.
- Keep private files in your downloaded workspace, not in this public repo.
- `boundaries.md` in your workspace is the approval source of truth.
