import { useEffect, useRef, useState } from "react";
import { BorderBeam } from "border-beam";

const BEAT1 = ["AI is moving fast.", "It can be overwhelming.", "You're not behind."];
const DELAYS = ["0s", "1.1s", "2.4s"];

const STEPS = [
  "This is every AI chat. It only knows what you type, so the answer could be for anyone.",
  "Chat apps do have memory now. But it's thin, hidden, and lives in their app, not with you.",
  "So you hand it a folder about you. Plain files: your work, your people, how you like things done.",
  "Same question, and now it knows you. Every file you add makes the answers sharper.",
  "That's the secret. A workspace your AI reads before it answers. Let's build yours.",
];
const LAST = STEPS.length - 1;

const GENERIC_REPLY = "Sure! 1. Make a to-do list 2. Prioritize your tasks 3. Remember to take breaks…";
const PERSONAL_REPLY =
  "Sarah + Tom's gallery is due Friday, so start there. Then the two unpaid invoices. I drafted replies to your 14 inquiries, ready for your yes.";

const USECASES = ["Plans your week", "Drafts in your voice", "Handles the repeat work"];
const FILES = ["me.md", "work / current.md", "boundaries.md"];

/** steps: 0 generic chat · 1 memory truth · 2 folder docks, chat slides left · 3 personal reply · 4 CTA */
export function Intro({ onDone, dark }: { onDone: () => void; dark: boolean }) {
  const [beat, setBeat] = useState<1 | 2 | 3>(1);
  const [leaving, setLeaving] = useState(false);
  const [step, setStep] = useState(0);
  const [phase, setPhase] = useState<"send" | "typing" | "reply">("send");
  const [chars, setChars] = useState(0);
  const instant = useRef(false);
  const theme = dark ? "dark" : "light";
  const reduced = typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

  const mode: "generic" | "personal" = step >= 3 ? "personal" : "generic";
  const replyText = mode === "personal" ? PERSONAL_REPLY : GENERIC_REPLY;

  function advance(next: () => void) {
    setLeaving(true);
    setTimeout(() => {
      setLeaving(false);
      next();
    }, 380);
  }

  function goTo(n: number) {
    const target = Math.max(0, Math.min(LAST, n));
    if (target === step) return;
    instant.current = target < step;
    setStep(target);
  }

  // beat 2 auto-dissolves into the explainer
  useEffect(() => {
    if (beat !== 2) return;
    const t = setTimeout(() => advance(() => setBeat(3)), reduced ? 400 : 3000);
    return () => clearTimeout(t);
  }, [beat, reduced]);

  // chat playback: replays whenever the conversation changes (skipped when stepping back)
  useEffect(() => {
    if (beat !== 3) return;
    if (reduced || instant.current) {
      instant.current = false;
      setPhase("reply");
      setChars(replyText.length);
      return;
    }
    setPhase("send");
    setChars(0);
    const t1 = setTimeout(() => setPhase("typing"), 650);
    const t2 = setTimeout(() => setPhase("reply"), 1800);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [beat, mode]);

  // the reply streams in like a real assistant typing
  useEffect(() => {
    if (phase !== "reply" || reduced) return;
    const id = setInterval(() => {
      setChars((c) => {
        if (c >= replyText.length) {
          clearInterval(id);
          return c;
        }
        return c + 2;
      });
    }, 22);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase, mode]);

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
              <Chevron />
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
            <p className="mini-chat-title">{step < 2 ? "A normal chat" : "The same chat, with your files"}</p>
            <div className="bubble-area">
              <div className="bubble user" key={`sent-${mode}`}>
                Plan my week
              </div>
              {phase === "typing" && (
                <div className="bubble ai typing" aria-label="The assistant is typing">
                  <span />
                  <span />
                  <span />
                </div>
              )}
              {phase === "reply" && (
                <div className={`bubble ai ${mode === "personal" ? "personal-bubble" : "muted-bubble"}`} key={`reply-${mode}`}>
                  {replyText.slice(0, chars)}
                </div>
              )}
              {step === 1 && <p className="chat-reset">you can't open it, edit it, or take it with you</p>}
            </div>
          </div>

          <span className={`beamline${step >= 2 ? " on" : ""}`} aria-hidden="true" />

          <div className={`mini-folder${step >= 2 ? " docked" : ""}`} aria-hidden={step < 2}>
            <p className="mini-folder-title">
              <FolderIcon /> your workspace
            </p>
            {FILES.map((f, i) => (
              <span className="mini-file" style={{ animationDelay: `${0.15 * i + 0.25}s` }} key={f}>
                {f}
              </span>
            ))}
          </div>
        </div>

        <div className="explain-captions" aria-live="polite">
          <p className="explain-caption" key={step}>
            {STEPS[step]}
          </p>
        </div>

        <div className={`usecase-row${step >= 3 ? " shown" : ""}`} aria-hidden={step < 3}>
          {USECASES.map((u) => (
            <span className="usecase-pill" key={u}>
              {u}
            </span>
          ))}
        </div>

        <div className="cta-slot">
          {step === LAST && (
            <div className="intro-line">
              <BorderBeam colorVariant="colorful" strength={1} brightness={1.15} saturation={1.25} duration={3.4} theme={theme} className="cta-beam">
                <button className="btn-primary" onClick={() => advance(onDone)}>
                  Create your personal OS
                  <Chevron />
                </button>
              </BorderBeam>
            </div>
          )}
        </div>

        <div className="explain-nav">
          <button className="nav-arrow" onClick={() => goTo(step - 1)} disabled={step === 0} aria-label="Back">
            <Chevron left />
          </button>
          <div className="nav-dots">
            {STEPS.map((_, i) => (
              <button key={i} className={`nav-dot${i === step ? " on" : ""}`} onClick={() => goTo(i)} aria-label={`Step ${i + 1} of ${STEPS.length}`} />
            ))}
          </div>
          <button className="nav-arrow" onClick={() => goTo(step + 1)} disabled={step === LAST} aria-label="Next">
            <Chevron />
          </button>
        </div>
      </div>
    </div>
  );
}

function Chevron({ left }: { left?: boolean }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {left ? <path d="M15 6l-6 6 6 6" /> : <path d="M9 6l6 6-6 6" />}
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
