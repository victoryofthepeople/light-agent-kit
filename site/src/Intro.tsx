import { useState } from "react";
import { BorderBeam } from "border-beam";

const BEAT1 = ["AI is moving fast.", "It can be overwhelming.", "You're not behind."];
const DELAYS = ["0s", "1.1s", "2.4s"];

export function Intro({ onDone, dark }: { onDone: () => void; dark: boolean }) {
  const [beat, setBeat] = useState<1 | 2>(1);
  const [leaving, setLeaving] = useState(false);

  function advance(next: () => void) {
    setLeaving(true);
    setTimeout(() => {
      setLeaving(false);
      next();
    }, 380);
  }

  const theme = dark ? "dark" : "light";

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

  return (
    <div className={`intro${leaving ? " leaving" : ""}`}>
      <div className="intro-secret">
        <h1 className="intro-line" style={{ animationDelay: "0.1s" }}>
          The secret is context.
        </h1>
        <p className="intro-sub intro-line" style={{ animationDelay: "0.9s" }}>
          AI reads whatever words you give it.
          <br />
          That text is its whole world.
        </p>
        <p className="intro-sub intro-line" style={{ animationDelay: "1.8s" }}>
          Give it a few simple files about you and your work,
          <br />
          and the same AI starts working like it's yours.
        </p>
        <ol className="intro-steps intro-line" style={{ animationDelay: "2.7s" }}>
          <li>
            <span>1</span>Answer 10 quick questions
          </li>
          <li>
            <span>2</span>Watch your files get written, live
          </li>
          <li>
            <span>3</span>Download your workspace and hand it to Claude or ChatGPT
          </li>
        </ol>
        <p className="intro-trust intro-line" style={{ animationDelay: "3.3s" }}>
          Everything stays on this device. No account. Nothing stored.
        </p>
      </div>
      <div className="intro-line" style={{ animationDelay: "3.8s" }}>
        <BorderBeam colorVariant="colorful" strength={1} brightness={1.15} saturation={1.25} duration={3.4} theme={theme} className="cta-beam">
          <button className="btn-primary" onClick={() => advance(onDone)}>
            Build my workspace
            <Arrow />
          </button>
        </BorderBeam>
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
