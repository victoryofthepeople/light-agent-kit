import { useEffect, useMemo, useState } from "react";
import type { GeneratedFile } from "./templates";

export function FilePanel({ files, folderName, activeIds }: { files: GeneratedFile[]; folderName: string; activeIds: string[] }) {
  const activeFile = useMemo(() => {
    const hit = files.find((f) => f.touchedBy.some((id) => activeIds.includes(id)));
    return hit ?? files.find((f) => f.path === "home.md") ?? files[0];
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
      <p className="filepanel-title">
        <span aria-hidden="true">▸ </span>
        {folderName} <span className="muted">— building as you answer</span>
      </p>
      <div className="tree" role="list">
        {grouped.roots.map((f) => (
          <TreeItem key={f.path} file={f} depth={0} open={shown?.path === f.path} active={f.path === activeFile?.path} onOpen={setOpenPath} />
        ))}
        {[...grouped.rooms.entries()].map(([dir, fs]) => (
          <div key={dir}>
            <p className="tree-dir">{dir}/</p>
            {fs.map((f) => (
              <TreeItem key={f.path} file={f} depth={1} open={shown?.path === f.path} active={f.path === activeFile?.path} onOpen={setOpenPath} />
            ))}
          </div>
        ))}
      </div>
      {shown && (
        <div className="file-preview" aria-live="polite">
          <p className="file-preview-name">{shown.path}</p>
          <pre>{shown.content}</pre>
        </div>
      )}
    </aside>
  );
}

function TreeItem({ file, depth, open, active, onOpen }: { file: GeneratedFile; depth: number; open: boolean; active: boolean; onOpen: (p: string) => void }) {
  const name = file.path.split("/").pop();
  return (
    <button type="button" role="listitem" className={`tree-item${open ? " open" : ""}${active ? " active" : ""}`} style={{ paddingLeft: `${8 + depth * 16}px` }} onClick={() => onOpen(file.path)}>
      {name}
      {active && <span className="writing"> · writing…</span>}
    </button>
  );
}
