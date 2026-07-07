import { useState } from "react";

const BEAT1 = ["AI is moving fast.", "It can be overwhelming.", "You're not behind."];

export function Intro({ onDone }: { onDone: () => void }) {
  const [beat, setBeat] = useState<1 | 2>(1);
  const [leaving, setLeaving] = useState(false);

  function advance(next: () => void) {
    setLeaving(true);
    setTimeout(() => {
      setLeaving(false);
      next();
    }, 380);
  }

  if (beat === 1) {
    return (
      <div className={`intro${leaving ? " leaving" : ""}`}>
        <div className="intro-lines">
          {BEAT1.map((t, i) => (
            <h1 className="intro-line" style={{ animationDelay: `${i * 1.8}s` }} key={i}>
              {t}
            </h1>
          ))}
        </div>
        <div className="intro-line" style={{ animationDelay: "5.2s" }}>
          <button className="btn-primary" onClick={() => advance(() => setBeat(2))}>
            Show me the secret
            <Arrow />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={`intro${leaving ? " leaving" : ""}`}>
      <div className="intro-secret">
        <h1 className="intro-line" style={{ animationDelay: "0.1s" }}>
          The secret is context.
        </h1>
        <p className="intro-sub intro-line" style={{ animationDelay: "1s" }}>
          Every AI chat works the same way: it reads everything in the conversation — one long string of text — and responds to what it sees.
          That text is its entire world.
        </p>
        <p className="intro-sub intro-line" style={{ animationDelay: "2s" }}>
          When it knows nothing about you, you get generic answers. Give it organized files about your world — who you are, what you're
          working on, your rules — and the same AI starts working like it's yours.
        </p>
        <ol className="intro-steps intro-line" style={{ animationDelay: "3s" }}>
          <li>
            <span>1</span>Answer 10 quick questions
          </li>
          <li>
            <span>2</span>Watch your files get written, live
          </li>
          <li>
            <span>3</span>Download your folder and hand it to your AI — Claude, ChatGPT, any of them
          </li>
        </ol>
        <p className="intro-trust intro-line" style={{ animationDelay: "3.7s" }}>
          Everything stays on this device. No account. Nothing stored.
        </p>
      </div>
      <div className="intro-line" style={{ animationDelay: "4.2s" }}>
        <button className="btn-primary" onClick={() => advance(onDone)}>
          Build my workspace
          <Arrow />
        </button>
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
