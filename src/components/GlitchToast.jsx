import { useState, useEffect } from "react";
import { cyberAudio } from "../utils/cyberAudio.js";

const SECURITY_EVENTS = [
  { code: "0x8F", type: "CANARY_SHIELD", msg: "Buffer overflow payload neutralized by stack canary.", sev: "CRITICAL" },
  { code: "0x1A", type: "IDS_ALERT", msg: "Stealth SYN probe detected on port 8080 -> IP dropped.", sev: "HIGH" },
  { code: "0xBE", type: "AI_GUARDRAIL", msg: "Prompt injection attempt in agent workflow filtered safely.", sev: "MED" },
  { code: "0x4C", type: "TRAVERSAL_BLOCK", msg: "Path traversal /../../ payload blocked via strict regex validator.", sev: "HIGH" },
  { code: "0x9D", type: "ZERO_DAY_AUDIT", msg: "Continuous fuzzing pipeline: 0 crashes across 100k cycles.", sev: "INFO" },
  { code: "0x6E", type: "INTEGRITY_CHECK", msg: "SHA-256 build checksum validated. Tamper-evident seal intact.", sev: "PASS" },
  { code: "0x3B", type: "DEEP_RECON", msg: "Port 22 SSH keys rotated. Ed25519 authentication enforced.", sev: "INFO" },
];

export default function GlitchToast({ calm }) {
  const [toast, setToast] = useState(SECURITY_EVENTS[0]);
  const [visible, setVisible] = useState(true);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (calm) return;
    const interval = setInterval(() => {
      setIndex((prev) => {
        const next = (prev + 1) % SECURITY_EVENTS.length;
        setToast(SECURITY_EVENTS[next]);
        setVisible(true);
        cyberAudio.playAlert();
        return next;
      });
    }, 12000);

    return () => clearInterval(interval);
  }, [calm]);

  if (calm || !visible) return null;

  const nextToast = () => {
    const next = (index + 1) % SECURITY_EVENTS.length;
    setIndex(next);
    setToast(SECURITY_EVENTS[next]);
    cyberAudio.playAlert();
  };

  return (
    <aside
      className="glitch-toast"
      onClick={nextToast}
      role="status"
      aria-live="polite"
      title="Live IDS Event Log (Click for next alert)"
    >
      <div className="toast-header">
        <span className={`toast-sev sev-${toast.sev.toLowerCase()}`}>
          [{toast.sev}]
        </span>
        <span className="toast-type mono">{toast.type}</span>
        <span className="toast-code mono">[{toast.code}]</span>
        <button
          type="button"
          className="toast-close"
          onClick={(e) => {
            e.stopPropagation();
            setVisible(false);
          }}
          aria-label="Dismiss security toast"
        >
          ×
        </button>
      </div>
      <p className="toast-body mono">{toast.msg}</p>
      <div className="toast-bar" />
    </aside>
  );
}
