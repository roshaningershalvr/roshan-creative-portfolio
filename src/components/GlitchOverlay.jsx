import { useEffect, useState } from "react";

const GLITCH_MESSAGES = [
  "BUFFER OVERFLOW IN PROGRESS :: 0x7FFFFFFFDE40",
  "WARNING: STACK CANARY COMPROMISED -> EXPLOIT DEFLECTED",
  "SYNTAX_ERR: ILLEGAL INSTRUCTION AT 0x004012A3",
  "KERNEL TRAP: SEGMENTATION VIOLATION (SIGSEGV)",
  "ETHICAL DEFENSE ENGAGED :: ISOLATING SUBNET 192.168.1.0/24",
  "RESTORING SYSTEM INTEGRITY VIA IMMUTABLE SNAPSHOT...",
];

export default function GlitchOverlay({ active }) {
  const [frame, setFrame] = useState(0);

  useEffect(() => {
    if (!active) return;
    const interval = setInterval(() => {
      setFrame((f) => f + 1);
    }, 90);
    return () => clearInterval(interval);
  }, [active]);

  if (!active) return null;

  return (
    <div className="system-glitch-overlay" aria-hidden="true">
      <div className="glitch-chromatic-layer red-split" />
      <div className="glitch-chromatic-layer cyan-split" />
      <div className="glitch-static-noise" />
      <div className="glitch-slice slice-1" />
      <div className="glitch-slice slice-2" />
      <div className="glitch-slice slice-3" />
      <div className="glitch-screen-banner mono">
        <div className="glitch-danger-header">⚡ SYSTEM ERROR OVERLOAD // INTRUSION DETECTED ⚡</div>
        <div className="glitch-stream">
          {GLITCH_MESSAGES.map((msg, i) => (
            <div key={i} className="stream-line">
              [{i}] &gt;&gt; {msg}
            </div>
          ))}
        </div>
        <div className="glitch-status-restore">
          [ETHICAL HACKER PROTOCOL]: DEPLOYING AUTO-MITIGATION PATCH...
        </div>
      </div>
    </div>
  );
}
