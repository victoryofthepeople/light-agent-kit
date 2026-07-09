import { useState } from "react";
import JSZip from "jszip";
import type { GeneratedFile } from "./templates";

type Panel = "none" | "use" | "others";

const OTHER_OPTIONS: { name: string; blurb: string }[] = [
  { name: "Codex", blurb: "OpenAI's desktop coding agent. Open the folder and chat." },
  { name: "Cursor", blurb: "An AI code editor. Open the folder as a project." },
  { name: "Claude Code", blurb: "Claude's coding agent — in the terminal or the desktop app. Point it at the folder." },
  { name: "VS Code", blurb: "With Copilot or another agent extension that can edit files." },
  { name: "LM Studio", blurb: "Run a local model on your computer. Point it at the folder for private, offline use." },
];

export function Handoff({ files, folderName }: { files: GeneratedFile[]; folderName: string }) {
  const [open, setOpen] = useState<Panel>("none");

  async function download() {
    const zip = new JSZip();
    for (const f of files) zip.file(`${folderName}/${f.path}`, f.content);
    const blob = await zip.generateAsync({ type: "blob" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${folderName}.zip`;
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <section className="card handoff">
      <div className="handoff-top">
        <p className="qcount">Done</p>
        <h2 className="qprompt">Your workspace is ready.</h2>
        <p className="qhint">
          {files.length} files, written from your own words. Download the folder, then open it in a tool that can read and write files.
        </p>

        <button className="btn-primary wide" onClick={download}>
          Download {folderName}.zip
        </button>
      </div>

      {open === "none" && (
        <p className="handoff-grow">
          This is a starting point, not a finished system. Keep talking with your AI and it will grow the folder with you — ideas, lessons, daily notes, and more.
          <br />
          <br />
          Later you can add skills: short, repeatable prompts for things you do often, so the AI runs the same workflow the same way every time.
        </p>
      )}

      {open === "use" && (
        <div className="handoff-primary">
          <p className="handoff-what">
            Claude Cowork — the simplest path.
            <br />
            Desktop app, no terminal, works inside your folder.
            <br />
            <a href="https://claude.ai/download" target="_blank" rel="noreferrer">
              Get the Claude app ↗
            </a>
          </p>
          <ol className="steps">
            <li>Unzip your download. You'll get one folder.</li>
            <li>Open the Claude desktop app and start a Cowork session in that folder.</li>
            <li>Say hi. It reads START-HERE.md and takes it from there.</li>
          </ol>
          <p className="handoff-moment">Just talk. Your assistant logs the day, keeps tasks current, and remembers what matters.</p>
        </div>
      )}

      {open === "others" && (
        <ul className="handoff-options">
          {OTHER_OPTIONS.map((o) => (
            <li key={o.name}>
              <strong>{o.name}</strong> — {o.blurb}
            </li>
          ))}
        </ul>
      )}

      <div className="handoff-foot">
        <button
          type="button"
          className="handoff-toggle"
          aria-expanded={open === "use"}
          onClick={() => setOpen((cur) => (cur === "use" ? "none" : "use"))}
        >
          <span>What to use</span>
          <svg className={`handoff-chevron${open === "use" ? " open" : ""}`} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </button>

        {open !== "none" && (
          <button
            type="button"
            className="handoff-toggle"
            aria-expanded={open === "others"}
            onClick={() => setOpen((cur) => (cur === "others" ? "use" : "others"))}
          >
            <span>{open === "others" ? "Back to Claude Cowork" : "Other options"}</span>
            <svg className={`handoff-chevron${open === "others" ? " open" : ""}`} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M6 9l6 6 6-6" />
            </svg>
          </button>
        )}
      </div>
    </section>
  );
}
