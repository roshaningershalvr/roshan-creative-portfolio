import { useEffect, useState } from "react";
import { nav } from "../data/content.js";

function Clock() {
  const [t, setT] = useState(() => new Date().toLocaleTimeString([], { hour12: false }));
  useEffect(() => {
    const id = setInterval(() => setT(new Date().toLocaleTimeString([], { hour12: false })), 1000);
    return () => clearInterval(id);
  }, []);
  return <span style={{ color: "var(--muted)" }}>{t}</span>;
}

export default function Header({ calm, onToggleFx }) {
  return (
    <header className="top">
      <span className="mono sys">
        <i className="dot" />sys://roshan <Clock />
      </span>
      <nav aria-label="Sections">
        {nav.map(([id, label]) => (
          <a key={id} href={"#" + id}>{label}</a>
        ))}
      </nav>
      <button className="fx" type="button" aria-pressed={!calm} aria-label="Toggle animations" onClick={onToggleFx}>
        FX: {calm ? "OFF" : "ON"}
      </button>
    </header>
  );
}
