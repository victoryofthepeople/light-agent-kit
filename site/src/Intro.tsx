import { useState } from "react";

const BEAT1 = ["AI is moving fast.", "It can be overwhelming.", "You're not behind."];

export function Intro({ onDone }: { onDone: () => void }) {
  const [beat, setBeat] = useState<1 | 2>(1);

  if (beat === 1) {
    return (
      <div className="intro">
        <div className="intro-lines">
          {BEAT1.map((t, i) => (
            <h1 className="intro-line" style={{ animationDelay: `${i * 0.9}s` }} key={i}>
              {t}
            </h1>
          ))}
        </div>
        <button className="btn-glow" style={{ animationDelay: "3s" }} onClick={() => setBeat(2)}>
          Show me the secret
        </button>
      </div>
    );
  }

  return (
    <div className="intro">
      <div className="intro-secret">
        <h1 className="intro-line" style={{ animationDelay: "0s" }}>
          The secret isn't code.
        </h1>
        <p className="intro-sub intro-line" style={{ animationDelay: "0.7s" }}>
          AI does its best work when it can read you — your world, your work, your rules — from a few simple files you own.
        </p>
        <ol className="intro-steps intro-line" style={{ animationDelay: "1.4s" }}>
          <li><span>1</span>Answer 10 quick questions</li>
          <li><span>2</span>Watch your files get written, live</li>
          <li><span>3</span>Download your folder and hand it to your AI — Claude, ChatGPT, any of them</li>
        </ol>
        <p className="intro-trust intro-line" style={{ animationDelay: "2s" }}>
          Everything stays on this device. No account. Nothing stored.
        </p>
      </div>
      <button className="btn-glow" style={{ animationDelay: "2.4s" }} onClick={onDone}>
        Build my workspace
      </button>
    </div>
  );
}
