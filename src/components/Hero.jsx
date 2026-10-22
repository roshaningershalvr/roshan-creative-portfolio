import { site, boot, lede, ctas } from "../data/content.js";
import RoleTyper from "./RoleTyper.jsx";
import Terminal from "./Terminal.jsx";
import Highlight from "./Highlight.jsx";

export default function Hero({ calm, onTriggerGlitch }) {
  const [first, last] = site.nameLines;
  return (
    <div className="hero">
      <div className="hero-top-bar">
        <div className="boot" aria-hidden="true">
          {boot.map((l) => (
            <span key={l}><b>[ OK ]</b> {l}</span>
          ))}
        </div>
        <div className="hero-cyber-badge mono" data-target-box>
          <span className="pulse-dot" /> CLASSIFICATION: ETHICAL RED-TEAMER
        </div>
      </div>

      <h1
        className="name cursor-pointer"
        aria-label={site.name}
        onClick={onTriggerGlitch}
        title="Click to inject glitch pulse"
      >
        <span className="glitch" data-text={first} aria-hidden="true">{first}</span>
        <span className="glitch g2" data-text={last} aria-hidden="true">{last}</span>
      </h1>

      <RoleTyper calm={calm} />
      <p className="lede"><Highlight text={lede} /></p>

      <div className="cta">
        {ctas.map((c) => (
          <a
            key={c.label}
            className={"btn" + (c.solid ? " solid" : "")}
            href={c.href}
            data-target-box
          >
            {c.label}
          </a>
        ))}
      </div>

      <Terminal onTriggerGlitch={onTriggerGlitch} />
    </div>
  );
}
