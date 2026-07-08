import { useEffect, useState } from "react";
import { BorderBeam } from "border-beam";

const BEAT1 = ["AI is moving fast.", "It can be overwhelming.", "You're not behind."];
const DELAYS = ["0s", "1.1s", "2.4s"];

const CAPTIONS = [
  "A normal chat only knows what you type into it.",
  "Chat apps do have memory now. But it's thin, hidden, and belongs to their app.",
  "This is a second brain you own. Plain files your AI reads before it answers.",
  "Save how you think, and it compounds. The repeat work becomes something you hand off.",
  "No hype. Just control.",
];

const USECASES = ["Plans your week", "Drafts in your voice", "Handles the repeat work"];

/** stage: 0 chat+generic · 1 forgets caption · 2 files dock in · 3 personal reply · 4 CTA */
export function Intro({ onDone, dark }: { onDone: () => void; dark: boolean }) {
  const [beat, setBeat] = useState<1 | 2 | 3>(1);
  const [leaving, setLeaving] = useState(false);
  const [stage, setStage] = useState(0);
  const theme = dark ? "dark" : "light";
  const reduced = typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

  function advance(next: () => void) {
    setLeaving(true);
    setTimeout(() => {
      setLeaving(false);
      next();
    }, 380);
  }

  // beat 2 auto-dissolves into the explainer
  useEffect(() => {
    if (beat !== 2) return;
    const t = setTimeout(() => advance(() => setBeat(3)), reduced ? 400 : 2600);
    return () => clearTimeout(t);
  }, [beat, reduced]);

  // beat 3 stage machine
  useEffect(() => {
    if (beat !== 3) return;
    if (reduced) {
      setStage(4);
      return;
    }
    const timers = [
      setTimeout(() => setStage(1), 3400),
      setTimeout(() => setStage(2), 6800),
      setTimeout(() => setStage(3), 10200),
      setTimeout(() => setStage(4), 13400),
    ];
    return () => timers.forEach(clearTimeout);
  }, [beat, reduced]);

  if (beat === 1) {
    return (
      <div className={`intro${leaving ? " leaving" : ""}`}>
        <div className="intro-lines">
          {BEAT1.map((t, i) => (
            <h1 className="intro-line" style={{ animationDelay: DELAYS[i] }} key={i}>
              {t}
            </h1>
          ))}
        </div>
        <div className="intro-line" style={{ animationDelay: "3.8s" }}>
          <BorderBeam colorVariant="colorful" strength={1} brightness={1.15} saturation={1.25} duration={3.4} theme={theme} className="cta-beam">
            <button className="btn-primary" onClick={() => advance(() => setBeat(2))}>
              Here's the secret
              <Arrow />
            </button>
          </BorderBeam>
        </div>
      </div>
    );
  }

  if (beat === 2) {
    return (
      <div className={`intro${leaving ? " leaving" : ""}`}>
        <h1 className="intro-line">The secret is context.</h1>
      </div>
    );
  }

  return (
    <div className={`intro intro-explain${leaving ? " leaving" : ""}`}>
      <div className="explain-card intro-line">
        <div className="explain-visual">
          <div className="mini-chat">
            <p className="mini-chat-title">{stage < 2 ? "A normal chat" : "The same chat, with your files"}</p>
            <div className="bubble-area">
              <div className="bubble user">Plan my week</div>
              {stage < 3 ? (
                <div className="bubble ai muted-bubble" key="generic">
                  Sure! 1. Make a to-do list 2. Prioritize your tasks 3. Remember to take breaks…
                </div>
              ) : (
                <div className="bubble ai personal-bubble" key="personal">
                  Sarah + Tom's gallery is due Friday, so start there. Then the two unpaid invoices. I drafted replies to your 14 inquiries,
                  ready for your yes.
                </div>
              )}
              {stage === 1 && <p className="chat-reset">its memory of you lives in their app, not with you</p>}
            </div>
          </div>

          <div className={`mini-folder${stage >= 2 ? " docked" : ""}`} aria-hidden={stage < 2}>
            <p className="mini-folder-title">
              <FolderIcon /> your workspace
            </p>
            {["me.md", "work / current.md", "boundaries.md"].map((f, i) => (
              <span className="mini-file" style={{ animationDelay: `${0.15 * i + 0.1}s` }} key={f}>
                {f}
              </span>
            ))}
            <span className="beamline" />
          </div>
        </div>

        <div className="explain-captions" aria-live="polite">
          <p className="explain-caption" key={Math.min(stage, CAPTIONS.length - 1)}>
            {CAPTIONS[Math.min(stage, CAPTIONS.length - 1)]}
          </p>
        </div>

        <div className={`usecase-row${stage >= 3 ? " shown" : ""}`} aria-hidden={stage < 3}>
          {USECASES.map((u) => (
            <span className="usecase-pill" key={u}>
              {u}
            </span>
          ))}
        </div>

        <div className="cta-slot">
          {stage >= 4 ? (
            <div className="intro-line">
              <BorderBeam colorVariant="colorful" strength={1} brightness={1.15} saturation={1.25} duration={3.4} theme={theme} className="cta-beam">
                <button className="btn-primary" onClick={() => advance(onDone)}>
                  Create your personal OS
                  <Arrow />
                </button>
              </BorderBeam>
            </div>
          ) : (
            <button className="btn-skip" onClick={() => setStage(4)}>
              Skip
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

function Arrow() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

function FolderIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
    </svg>
  );
}
