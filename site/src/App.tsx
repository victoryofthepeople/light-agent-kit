import { useEffect, useMemo, useState } from "react";
import { buildQuestionList, type Question } from "./questions";
import { buildFiles, getRoute, sanitizeSlug, type Answers } from "./templates";
import { FilePanel } from "./FilePanel";
import { Handoff } from "./Handoff";
import { Manifesto } from "./Manifesto";
import "./index.css";

type Phase = "manifesto" | "interview" | "handoff";

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
      /* Safari private mode etc. — session continues in memory */
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
  days: "That's your AI's first memory of you. Plain text. You can read and edit it anytime.",
  route: "home.md just got a map: which file to read for which job. It's why your AI won't get lost.",
  dump: "Your AI's first job will be organizing this. You never had to.",
};

export default function App() {
  const saved = useMemo(() => store.get(), []);
  const [phase, setPhase] = useState<Phase>(saved?.phase ?? "manifesto");
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
  const [dark, setDark] = useState<boolean>(() => window.matchMedia?.("(prefers-color-scheme: dark)").matches ?? false);

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? "dark" : "light";
  }, [dark]);

  useEffect(() => {
    store.set({ phase, qi, answers });
  }, [phase, qi, answers]);

  const route = getRoute(answers);
  const questions = useMemo(() => buildQuestionList(route), [route]);
  const q: Question | undefined = questions[qi];
  const files = useMemo(() => buildFiles(answers), [answers]);
  const name = typeof answers.name === "string" ? answers.name : "";
  const folderName = `${sanitizeSlug(name)}-workspace`;

  const progress = phase === "manifesto" ? 8 : phase === "handoff" ? 100 : 15 + Math.round((qi / questions.length) * 80);

  function submit(value: string | string[]) {
    if (!q) return;
    const next = { ...answers, [q.id]: value };
    setAnswers(next);
    setDraft("");
    if (TEACHING[q.id]) {
      setTeach(TEACHING[q.id]);
      setTimeout(() => setTeach(null), 5200);
    }
    if (qi + 1 >= questions.length) setPhase("handoff");
    else setQi(qi + 1);
  }

  function startOver() {
    store.clear();
    setAnswers({});
    setQi(0);
    setPhase("manifesto");
  }

  return (
    <div className="app">
      <header className="topbar">
        <span className="brand">Light Agent Kit</span>
        <div className="topbar-right">
          <div className="progress" role="progressbar" aria-valuenow={progress} aria-valuemin={0} aria-valuemax={100} aria-label="Setup progress">
            <div className="progress-fill" style={{ width: `${progress}%` }} />
          </div>
          <button className="ghost small" onClick={() => setDark(!dark)} aria-label="Toggle light or dark mode">
            {dark ? "Light" : "Dark"}
          </button>
        </div>
      </header>

      {phase === "manifesto" && <Manifesto onDone={() => setPhase("interview")} />}

      {phase === "interview" && q && (
        <main className="split">
          <section className="interview">
            <p className="qcount">
              Question {qi + 1} of {questions.length}
            </p>
            <h2 className="qprompt">{q.prompt}</h2>
            {q.hint && <p className="qhint">{q.hint}</p>}

            {(q.kind === "text" || q.kind === "dump") && (
              <>
                <textarea
                  className={q.kind === "dump" ? "dumpbox" : "textbox"}
                  value={draft}
                  onChange={(e) => setDraft(e.target.value.slice(0, 20000))}
                  placeholder={q.kind === "dump" ? "Everything on your mind…" : "Type here…"}
                  rows={q.kind === "dump" ? 8 : 3}
                  autoFocus
                />
                {q.mic && <p className="micnote">Voice input is coming — it will run entirely on this device.</p>}
              </>
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
                        {on ? "✓ " : ""}
                        {c.label}
                      </button>
                    );
                  })}
                </div>
                <input
                  className="textbox"
                  value={draft}
                  onChange={(e) => setDraft(e.target.value.slice(0, 500))}
                  placeholder="Anything else it should always ask about? (optional)"
                />
              </>
            )}

            <div className="qactions">
              <button className="ghost" onClick={() => submit(q.kind === "chips-multi" ? [] : "")}>
                Skip
              </button>
              {q.kind !== "chips" && (
                <button
                  className="primary"
                  onClick={() => {
                    if (q.kind === "chips-multi") {
                      if (draft.trim()) setAnswers((a) => ({ ...a, "boundaries-extra": draft.trim() }));
                      submit(multi);
                    } else submit(draft.trim());
                  }}
                >
                  Next →
                </button>
              )}
            </div>

            {teach && (
              <div className="teach" role="status">
                {teach}
              </div>
            )}
          </section>

          <FilePanel files={files} folderName={folderName} activeIds={q ? [q.id] : []} />
        </main>
      )}

      {phase === "handoff" && (
        <main className="split">
          <Handoff files={files} folderName={folderName} />
          <FilePanel files={files} folderName={folderName} activeIds={[]} />
        </main>
      )}

      <footer className="foot">
        <span>No accounts. No cookies. No analytics. Everything stays on this device.</span>
        <span className="foot-right">
          <a href="https://github.com/victoryofthepeople/light-agent-kit" target="_blank" rel="noreferrer">
            Open source
          </a>
          {" · "}
          <button className="linklike" onClick={startOver}>
            Start over (wipes your draft)
          </button>
        </span>
      </footer>
    </div>
  );
}
