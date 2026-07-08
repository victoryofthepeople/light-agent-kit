/** Obsidian-style rendered view of the generated markdown, no raw syntax on screen. */
export function Markdown({ text }: { text: string }) {
  const lines = text.split("\n");
  const out: React.ReactNode[] = [];
  let i = 0;
  let key = 0;

  while (i < lines.length) {
    const line = lines[i];

    // user-content fence -> "your words" card
    if (/^~+\s+user-content/.test(line)) {
      const delim = line.match(/^(~+)/)![1];
      const body: string[] = [];
      i++;
      while (i < lines.length && lines[i] !== delim) {
        body.push(lines[i]);
        i++;
      }
      i++;
      out.push(
        <div className="md-yourwords" key={key++}>
          <span className="md-yourwords-tag">your words</span>
          <p>{body.join("\n")}</p>
        </div>
      );
      continue;
    }

    // table
    if (line.startsWith("|")) {
      const rows: string[][] = [];
      while (i < lines.length && lines[i].startsWith("|")) {
        const cells = lines[i].split("|").slice(1, -1).map((c) => c.trim());
        if (!cells.every((c) => /^-+$/.test(c))) rows.push(cells);
        i++;
      }
      out.push(
        <table className="md-table" key={key++}>
          <tbody>
            {rows.map((r, ri) => (
              <tr key={ri}>
                {r.map((c, ci) => (ri === 0 ? <th key={ci}>{inline(c)}</th> : <td key={ci}>{inline(c)}</td>))}
              </tr>
            ))}
          </tbody>
        </table>
      );
      continue;
    }

    if (line.startsWith("### ")) out.push(<h4 key={key++}>{inline(line.slice(4))}</h4>);
    else if (line.startsWith("## ")) out.push(<h3 key={key++}>{inline(line.slice(3))}</h3>);
    else if (line.startsWith("# ")) out.push(<h2 key={key++}>{inline(line.slice(2))}</h2>);
    else if (line.startsWith("- ")) {
      const items: string[] = [];
      while (i < lines.length && lines[i].startsWith("- ")) {
        items.push(lines[i].slice(2));
        i++;
      }
      out.push(
        <ul key={key++}>
          {items.map((it, ii) => (
            <li key={ii}>{inline(it)}</li>
          ))}
        </ul>
      );
      continue;
    } else if (line.trim() === "") {
      // skip blank
    } else {
      out.push(<p key={key++}>{inline(line)}</p>);
    }
    i++;
  }

  return <div className="md">{out}</div>;
}

function inline(s: string): React.ReactNode[] {
  // `code`, **bold**, _(italic note)_
  const parts = s.split(/(`[^`]+`|\*\*[^*]+\*\*|_\([^)]*\)_)/g);
  return parts.map((p, i) => {
    if (p.startsWith("`") && p.endsWith("`")) return <code key={i}>{p.slice(1, -1)}</code>;
    if (p.startsWith("**") && p.endsWith("**")) return <strong key={i}>{p.slice(2, -2)}</strong>;
    if (p.startsWith("_(") && p.endsWith(")_")) return <em key={i} className="md-note">{p.slice(1, -1)}</em>;
    return <span key={i}>{p}</span>;
  });
}
