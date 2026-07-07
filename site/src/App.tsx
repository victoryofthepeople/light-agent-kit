import { useEffect, useMemo, useState } from "react";
import { buildQuestionList, type Question } from "./questions";
import { buildFiles, getRoute, sanitizeSlug, type Answers } from "./templates";
import { FilePanel } from "./FilePanel";
import { Handoff } from "./Handoff";
import { Intro } from "./Intro";
import "./index.css";

type Phase = "intro" | "interview" | "handoff";

const store = {
  get(): { phase: Phase; qi: number; answers: Answers } | null {
    try {
      const raw = localStorage.getItem("lak-draft");
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  },
  set(v: { phase: Phase; qi: number; answers: Answers }) {
    try {
      localStorage.setItem("lak-draft", JSON.stringify(v));
    } catch {
      /* private mode — session continues in memory */
    }
  },
  clear() {
    try {
      localStorage.removeItem("lak-draft");
    } catch {
      /* ignore */
    }
  },
};

const TEACHING: Record<string, string> = {
  name: "There it is — your first file. Everything you share becomes readable text like this.",
  route: "home.md just got a map: which file to read for which job. It's why your AI won't get lost.",
  boundaries: "These rules ride along in every session. Your AI asks first, every time.",
  dump: "Your AI's first job will be organizing all of that. You never have to.",
};

function SunIcon({ dark }: { dark: boolean }) {
  return dark ? (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2m0 16v2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M2 12h2m16 0h2M4.9 19.1l1.4-1.4m11.4-11.4 1.4-1.4" />
    </svg>
  ) : (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
    </svg>
  );
}

export default function App() {
  const saved = useMemo(() => store.get(), []);
  const [phase, setPhase] = useState<Phase>(saved?.phase ?? "intro");
  const [qi, setQi] = useState(saved?.qi ?? 0);
  const [answers, setAnswers] = useState<Answers>(saved?.answers ?? {});
  const [draft, setDraft] = useState("");
  const [multi, setMulti] = useState<string[]>([
    "Sending messages or email on my behalf",
    "Spending any money",
    "Deleting files or notes",
    "Posting anything publicly",
  ]);
  const [teach, setTeach] = useState<string | null>(null);
  const [dark, setDark] = useState<boolean>(() => window.matchMedia?.("(prefers-color-scheme: dark)").matches ?? true);

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? "dark" : "light";
  }, [dark]);

  useEffect(() => {
    store.set({ phase, qi, answers });
  }, [phase, qi, answers]);

  const route = getRoute(answers);
  const questions = useMemo(() => buildQuestionList(route), [route]);
  const q: Question | undefined = questions[qi];
  const previewFiles = useMemo(() => buildFiles(answers, "preview"), [answers]);
  const downloadFiles = useMemo(() => buildFiles(answers, "download"), [answers]);
  const name = typeof answers.name === "string" ? answers.name.trim() : "";
  const folderName = `${sanitizeSlug(name)}-workspace`;
  const panelVisible = phase === "handoff" || (phase === "interview" && previewFiles.length > 0);

  const progress = phase === "intro" ? 6 : phase === "handoff" ? 100 : 12 + Math.round((qi / questions.length) * 88);

  function submit(value: string | string[]) {
    if (!q) return;
    setAnswers({ ...answers, [q.id]: value });
    setDraft("");
    const lesson = TEACHING[q.id];
    if (lesson && (typeof value === "string" ? value : value.length)) {
      setTeach(lesson);
      setTimeout(() => setTeach(null), 5200);
    }
    if (qi + 1 >= questions.length) setPhase("handoff");
    else setQi(qi + 1);
  }

  function startOver() {
    store.clear();
    setAnswers({});
    setQi(0);
    setPhase("intro");
  }

  return (
    <div className="app">
      <header className="topbar">
        {phase !== "intro" && (
        <div className="progress" role="progressbar" aria-valuenow={progress} aria-valuemin={0} aria-valuemax={100} aria-label="Setup progress">
          <div className="progress-fill" style={{ width: `${progress}%` }} />
        </div>
        )}
        <button className="icon-btn" onClick={() => setDark(!dark)} aria-label="Toggle light or dark mode">
          <SunIcon dark={dark} />
        </button>
      </header>

      {phase === "intro" && <Intro onDone={() => setPhase("interview")} />}

      {phase === "interview" && q && (
        <main className={`stage${panelVisible ? " with-panel" : ""}`}>
          <section className="card interview" key={qi}>
            <p className="qcount">
              {qi + 1} / {questions.length}
            </p>
            <h2 className="qprompt">{q.prompt}</h2>
            {q.hint && <p className="qhint">{q.hint}</p>}

            {(q.kind === "text" || q.kind === "dump") && (
              <textarea
                className={q.kind === "dump" ? "field dumpbox" : "field"}
                value={draft}
                onChange={(e) => setDraft(e.target.value.slice(0, 20000))}
                placeholder={q.kind === "dump" ? "Everything on your mind…" : "Type here…"}
                rows={q.kind === "dump" ? 7 : 3}
                autoFocus
                onKeyDown={(e) => {
                  if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) submit(draft.trim());
                }}
              />
            )}

            {q.kind === "chips" && (
              <div className="chips" role="radiogroup" aria-label={q.prompt}>
                {q.chips!.map((c) => (
                  <button key={c.value} role="radio" aria-checked={false} className="chip" onClick={() => submit(c.value)}>
                    {c.label}
                  </button>
                ))}
              </div>
            )}

            {q.kind === "chips-multi" && (
              <>
                <div className="chips" role="group" aria-label={q.prompt}>
                  {q.chips!.map((c) => {
                    const on = multi.includes(c.value);
                    return (
                      <button
                        key={c.value}
                        aria-pressed={on}
                        className={`chip${on ? " selected" : ""}`}
                        onClick={() => setMulti(on ? multi.filter((v) => v !== c.value) : [...multi, c.value])}
                      >
                        {c.label}
                      </button>
                    );
                  })}
                </div>
                <input
                  className="field"
                  value={draft}
                  onChange={(e) => setDraft(e.target.value.slice(0, 500))}
                  placeholder="Anything else it should always ask about? (optional)"
                />
              </>
            )}

            <div className="qactions">
              <button className="btn-skip" onClick={() => submit(q.kind === "chips-multi" ? [] : "")}>
                Skip
              </button>
              {q.kind !== "chips" && (
                <button
                  className="btn-primary"
                  onClick={() => {
                    if (q.kind === "chips-multi") {
                      if (draft.trim()) setAnswers((a) => ({ ...a, "boundaries-extra": draft.trim() }));
                      submit(multi);
                    } else submit(draft.trim());
                  }}
                >
                  Next
                </button>
              )}
            </div>

            {teach && (
              <div className="teach" role="status">
                {teach}
              </div>
            )}
          </section>

          {panelVisible && <FilePanel files={previewFiles} folderName={folderName} activeIds={q ? [q.id] : []} showEducation={qi <= 2} />}
        </main>
      )}

      {phase === "handoff" && (
        <main className="stage with-panel">
          <Handoff files={downloadFiles} folderName={folderName} />
          <FilePanel files={downloadFiles} folderName={folderName} activeIds={[]} showEducation={false} />
        </main>
      )}

      {phase !== "intro" && (
      <footer className="foot">
        <span>Everything stays on this device. No account, no cookies, no analytics.</span>
        <span className="foot-right">
          <a href="https://github.com/victoryofthepeople/light-agent-kit" target="_blank" rel="noreferrer">
            Open source
          </a>
          <button className="linklike" onClick={startOver}>
            Start over
          </button>
        </span>
      </footer>
      )}
    </div>
  );
}
