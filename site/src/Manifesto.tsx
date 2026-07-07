import { useEffect, useState } from "react";
import { MANIFESTO_LINES } from "./questions";

export function Manifesto({ onDone }: { onDone: () => void }) {
  const reduced = typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
  const [shown, setShown] = useState(reduced ? MANIFESTO_LINES.length : 1);

  useEffect(() => {
    if (reduced || shown >= MANIFESTO_LINES.length) return;
    const t = setTimeout(() => setShown((s) => s + 1), 2100);
    return () => clearTimeout(t);
  }, [shown, reduced]);

  const done = shown >= MANIFESTO_LINES.length;

  return (
    <div className="manifesto" onClick={() => !done && setShown((s) => Math.min(s + 1, MANIFESTO_LINES.length))}>
      <div className="manifesto-lines">
        {MANIFESTO_LINES.slice(0, shown).map((l, i) => (
          <p key={i} className={`m-line${i === shown - 1 ? " latest" : ""}`}>
            {l.text}
            {l.small && <span className="m-small"> — {l.small}</span>}
          </p>
        ))}
      </div>
      <div className="manifesto-actions">
        {done ? (
          <button className="primary big" onClick={onDone}>
            Begin
          </button>
        ) : (
          <button className="ghost" onClick={(e) => { e.stopPropagation(); onDone(); }}>
            Skip intro
          </button>
        )}
      </div>
    </div>
  );
}
