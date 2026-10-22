import { useState, useEffect } from "react";
import { cyberAudio } from "../utils/cyberAudio.js";

export default function CyberHUD({ onTriggerGlitch, calm }) {
  const [sfxOn, setSfxOn] = useState(() => cyberAudio.isEnabled());
  const [probesCount, setProbesCount] = useState(1337);
  const [defcon, setDefcon] = useState("2");

  useEffect(() => {
    const timer = setInterval(() => {
      setProbesCount((prev) => prev + Math.floor(Math.random() * 3 + 1));
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const toggleSfx = () => {
    const next = cyberAudio.toggle();
    setSfxOn(next);
  };

  return (
    <div className="cyber-hud" role="region" aria-label="Ethical Hacker HUD">
      <div className="hud-content">
        <div className="hud-left">
          <span className="hud-pill threat-pill">
            <span className="pulse-dot" /> DEFCON {defcon} :: THREAT ELEVATED
          </span>
          <span className="hud-item mono">
            FIREWALL: <span className="green">STRICT_DROP</span>
          </span>
          <span className="hud-item mono">
            PROBES BLOCKED: <span className="cyan">{probesCount.toLocaleString()}</span>
          </span>
          <span className="hud-item mono">
            STATUS: <span className="green">ETHICAL HACKER ACTIVE</span>
          </span>
        </div>

        <div className="hud-right">
          <button
            type="button"
            className="hud-btn sfx-btn"
            onClick={toggleSfx}
            title="Toggle Synthesized Cyber SFX"
          >
            SFX: {sfxOn ? "[LIVE]" : "[MUTED]"}
          </button>

          <button
            type="button"
            className="hud-btn glitch-btn"
            onClick={onTriggerGlitch}
            title="Inject simulated error glitch overload"
          >
            ⚡ INJECT GLITCH
          </button>
        </div>
      </div>
    </div>
  );
}
