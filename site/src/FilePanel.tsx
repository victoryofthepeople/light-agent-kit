import { useEffect, useMemo, useState } from "react";
import type { GeneratedFile } from "./templates";
import { Markdown } from "./Markdown";

export function FilePanel({ files, title, activeIds, showEducation }: { files: GeneratedFile[]; title: string; activeIds: string[]; showEducation: boolean }) {
  const activeFile = useMemo(() => {
    const hit = files.find((f) => f.touchedBy.some((id) => activeIds.includes(id)));
    return hit ?? files[files.length - 1];
  }, [files, activeIds]);

  const [openPath, setOpenPath] = useState<string | null>(null);
  useEffect(() => setOpenPath(activeFile?.path ?? null), [activeFile]);
  const shown = files.find((f) => f.path === openPath) ?? activeFile;

  const grouped = useMemo(() => {
    const roots: GeneratedFile[] = [];
    const rooms = new Map<string, GeneratedFile[]>();
    for (const f of files) {
      const i = f.path.indexOf("/");
      if (i === -1) roots.push(f);
      else {
        const dir = f.path.slice(0, i);
        rooms.set(dir, [...(rooms.get(dir) ?? []), f]);
      }
    }
    return { roots, rooms };
  }, [files]);

  return (
    <aside className="filepanel" aria-label="Your workspace, building as you answer">
      <div className="filepanel-head">
        <span className="folder-icon" aria-hidden="true">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>
        </span>
        <span className="filepanel-name">{title}</span>
        <span className="lockline">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect x="3" y="11" width="18" height="11" rx="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
          Your answers stay with you
        </span>
      </div>

      <div className="filepanel-body">
        <nav className="tree" role="list">
          {grouped.roots.map((f) => (
            <TreeItem key={f.path} file={f} depth={0} open={shown?.path === f.path} active={f.path === activeFile?.path} onOpen={setOpenPath} />
          ))}
          {[...grouped.rooms.entries()].map(([dir, fs]) => (
            <div key={dir} className="tree-appear">
              <p className="tree-dir">{dir}/</p>
              {fs.map((f) => (
                <TreeItem key={f.path} file={f} depth={1} open={shown?.path === f.path} active={f.path === activeFile?.path} onOpen={setOpenPath} />
              ))}
            </div>
          ))}
        </nav>

        {shown && (
          <div className="file-view" aria-live="polite" key={shown.path + shown.content.length}>
            <Markdown text={shown.content} />
          </div>
        )}
      </div>

      {showEducation && (
        <p className="filepanel-edu">
          This is a real folder. Each file is markdown, a lightweight document format AI reads best. Yours to keep, open, and edit anywhere.
        </p>
      )}
    </aside>
  );
}

function TreeItem({ file, depth, open, active, onOpen }: { file: GeneratedFile; depth: number; open: boolean; active: boolean; onOpen: (p: string) => void }) {
  const name = file.path.split("/").pop();
  return (
    <button type="button" role="listitem" className={`tree-item tree-appear${open ? " open" : ""}${active ? " active" : ""}`} style={{ paddingLeft: `${10 + depth * 14}px` }} onClick={() => onOpen(file.path)}>
      <span className="tree-dot" aria-hidden="true" />
      {name}
    </button>
  );
}
