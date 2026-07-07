import { useState } from "react";
import JSZip from "jszip";
import type { GeneratedFile } from "./templates";

type Target = "cowork" | "code" | "projects" | "chatgpt";

const TARGETS: { key: Target; label: string; what: string; steps: string[]; link?: { href: string; label: string } }[] = [
  {
    key: "cowork",
    label: "Claude Cowork",
    what: "Claude's desktop app working inside a folder. No terminal, no code. The easiest full experience.",
    steps: ["Unzip your download. You'll get one folder.", "Open the Claude desktop app and start a Cowork session in that folder.", "Paste the first ask below."],
    link: { href: "https://claude.ai/download", label: "Get the Claude app" },
  },
  {
    key: "code",
    label: "Claude Code",
    what: "Claude in your terminal, reading and editing files directly. The most powerful path, and it's two commands.",
    steps: ["Unzip your download.", "In the terminal: cd into the folder, then type claude", "Paste the first ask below."],
  },
  {
    key: "projects",
    label: "claude.ai Projects",
    what: "A Project is a space on claude.ai that remembers files you give it. Works in any browser.",
    steps: ["Unzip your download.", "On claude.ai, create a Project and upload the files as knowledge.", "Start a chat in the Project and paste the first ask below.", "It can't edit files here — it hands you updated copies to save."],
    link: { href: "https://claude.ai", label: "Open claude.ai" },
  },
  {
    key: "chatgpt",
    label: "ChatGPT",
    what: "Works too. Same folder, different assistant.",
    steps: ["Unzip your download.", "Start a chat and attach the files (or paste them).", "Paste the first ask below.", "It can't edit files here — it hands you updated copies to save."],
    link: { href: "https://chatgpt.com", label: "Open ChatGPT" },
  },
];

const FIRST_ASK = "Read START-HERE.md, introduce yourself, and organize my inbox.";

export function Handoff({ files, folderName }: { files: GeneratedFile[]; folderName: string }) {
  const [target, setTarget] = useState<Target>("cowork");
  const [copied, setCopied] = useState(false);
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
  }

  async function copyAsk() {
    try {
      await navigator.clipboard.writeText(FIRST_ASK);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      /* text remains visible to copy manually */
    }
  }

  return (
    <section className="card handoff">
      <p className="qcount">Done</p>
      <h2 className="qprompt">Your workspace is ready.</h2>
      <p className="qhint">
        {files.length} files, written from your own words. From here, your chosen AI receives only the files you hand it.
      </p>

      <button className="btn-primary wide" onClick={download}>
        Download {folderName}.zip
      </button>

      <p className="handoff-label">Where's your AI?</p>
      <div className="chips" role="radiogroup" aria-label="Pick your AI">
        {TARGETS.map((x) => (
          <button key={x.key} role="radio" aria-checked={target === x.key} className={`chip${target === x.key ? " selected" : ""}`} onClick={() => setTarget(x.key)}>
            {x.label}
          </button>
        ))}
      </div>
      <p className="handoff-what">
        {t.what}
        {t.link && (
          <>
            {" "}
            <a href={t.link.href} target="_blank" rel="noreferrer">
              {t.link.label} ↗
            </a>
          </>
        )}
      </p>
      <ol className="steps">
        {t.steps.map((s, i) => (
          <li key={i}>{s}</li>
        ))}
      </ol>

      <div className="firstask">
        <div className="firstask-row">
          <code>{FIRST_ASK}</code>
          <button className="btn-secondary" onClick={copyAsk}>
            {copied ? "Copied ✓" : "Copy"}
          </button>
        </div>
        <p className="handoff-moment">Watch it organize your brain dump. That's the moment it stops being a folder and starts being yours.</p>
      </div>
    </section>
  );
}
