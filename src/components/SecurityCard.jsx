import { useRef } from "react";

// Security card with targeting brackets, chromatic glitch title, and 3D tilt
export default function SecurityCard({ card, calm, onOpenModal }) {
  const ref = useRef(null);
  const canTilt = !calm && typeof matchMedia === "function" && matchMedia("(hover:hover)").matches;

  const onMove = (e) => {
    if (!canTilt) return;
    const b = ref.current.getBoundingClientRect();
    const x = (e.clientX - b.left) / b.width - 0.5;
    const y = (e.clientY - b.top) / b.height - 0.5;
    ref.current.style.transform = `perspective(900px) rotateY(${x * 6}deg) rotateX(${-y * 6}deg)`;
  };
  const onLeave = () => {
    if (ref.current) ref.current.style.transform = "";
  };

  return (
    <article
      className="card tilt security-card"
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      data-target-box
      onClick={() => onOpenModal(card)}
      title="Click to inspect threat model, verified controls, and audit evidence"
    >
      <div className="sweep" />
      <div className="card-laser-line" />

      <div className="tag mono">
        <div className="tag-left">
          <span>{card.tag}</span>
          {card.isOriginal && (
            <span className="card-original-badge mono">[ORIGINAL]</span>
          )}
        </div>
        <span className={`st st-${card.statusType || "implemented"}`}>
          [ {card.status} ]
        </span>
      </div>

      <h3 className="card-glitch-title" data-text={card.title}>
        {card.title}
      </h3>

      <p className="security-card-desc">{card.text}</p>

      {card.bullets && (
        <ul className="f">
          {card.bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
      )}

      {card.chips && (
        <ul className="chips">
          {card.chips.map((c) => (
            <li key={c} data-target-box>{c}</li>
          ))}
        </ul>
      )}

      <div className="security-card-spec-cta mono">
        <span>[ VIEW THREAT MODEL &amp; VERIFIED CONTROLS &gt; ]</span>
      </div>
    </article>
  );
}
