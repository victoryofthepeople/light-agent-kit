import { useState } from "react";
import JSZip from "jszip";
import type { GeneratedFile } from "./templates";

type Target = "cowork" | "code" | "projects" | "chatgpt";

const TARGETS: { key: Target; label: string; note: string; steps: string[] }[] = [
  {
    key: "cowork",
    label: "Claude Cowork",
    note: "Easiest if you have a Claude plan. No terminal.",
    steps: [
      "Unzip the download. You'll get one folder.",
      "Open Claude's desktop app and start a Cowork session in that folder.",
      "Paste the first ask below.",
    ],
  },
  {
    key: "code",
    label: "Claude Code",
    note: "The powerful path. Terminal, but only two commands.",
    steps: [
      "Unzip the download.",
      "In your terminal: cd into the folder, then type: claude",
      "Paste the first ask below.",
    ],
  },
  {
    key: "projects",
    label: "claude.ai Projects",
    note: "Works in the browser on any plan.",
    steps: [
      "Unzip the download.",
      "On claude.ai, create a Project and upload all the files as Project knowledge.",
      "Start a chat in the Project and paste the first ask below.",
      "Note: it can't edit files — it will hand you updated copies to save.",
    ],
  },
  {
    key: "chatgpt",
    label: "ChatGPT",
    note: "Works too. Same folder, different assistant.",
    steps: [
      "Unzip the download.",
      "Start a chat and attach all the files (or paste them).",
      "Paste the first ask below.",
      "Note: it can't edit files — it will hand you updated copies to save.",
    ],
  },
];

const FIRST_ASK = "Read START-HERE.md, introduce yourself, and organize my inbox.";

export function Handoff({ files, folderName }: { files: GeneratedFile[]; folderName: string }) {
  const [target, setTarget] = useState<Target>("cowork");
  const [copied, setCopied] = useState(false);
  const [downloaded, setDownloaded] = useState(false);
  const t = TARGETS.find((x) => x.key === target)!;

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
    setDownloaded(true);
  }

  async function copyAsk() {
    try {
      await navigator.clipboard.writeText(FIRST_ASK);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      /* clipboard unavailable; text is visible to copy manually */
    }
  }

  return (
    <div className="handoff">
      <h2>Your workspace is ready.</h2>
      <p className="muted">
        {files.length} files, built from your own words. From here, your chosen AI receives the files you attach or paste — that part is up to you.
      </p>

      <button className="primary big" onClick={download}>
        {downloaded ? "Downloaded ✓ — download again" : `Download ${folderName}.zip`}
      </button>

      <h3>Where's your AI?</h3>
      <div className="chips" role="radiogroup" aria-label="Pick your AI">
        {TARGETS.map((x) => (
          <button key={x.key} role="radio" aria-checked={target === x.key} className={`chip${target === x.key ? " selected" : ""}`} onClick={() => setTarget(x.key)}>
            {x.label}
          </button>
        ))}
      </div>
      <p className="muted">{t.note}</p>
      <ol className="steps">
        {t.steps.map((s, i) => (
          <li key={i}>{s}</li>
        ))}
      </ol>

      <div className="firstask">
        <p className="muted">Your first ask, ready to paste:</p>
        <div className="firstask-row">
          <code>{FIRST_ASK}</code>
          <button onClick={copyAsk}>{copied ? "Copied ✓" : "Copy"}</button>
        </div>
        <p className="muted small">
          Then watch it organize your brain dump. That's the moment this stops being a folder and starts being an assistant.
        </p>
      </div>
    </div>
  );
}
