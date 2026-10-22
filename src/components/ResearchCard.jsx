import { useRef } from "react";

// Research card with 3D tilt, targeting brackets, chromatic title, and click-to-expand modal
export default function ResearchCard({ entry, calm, onOpenModal }) {
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
      className="card tilt research-card"
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      data-target-box
      onClick={() => onOpenModal(entry)}
      title="Click to view full research question, methodology, limitations, and citations"
    >
      <div className="sweep" />
      <div className="card-laser-line" />

      <div className="tag mono">
        <span className="research-area-tag">{entry.area}</span>
        <span className={`st st-${entry.statusType || "proposed"}`}>
          [ {entry.status.replace("_", " ")} ]
        </span>
      </div>

      <h3 className="card-glitch-title" data-text={entry.title}>
        {entry.title}
      </h3>

      <div className="research-question-box mono">
        <span className="text-cyan">RQ: </span>
        {entry.researchQuestion}
      </div>

      <p className="research-card-summary">{entry.motivation}</p>

      <div className="tools-badge mono">
        <span className="cyan">STACK: </span>
        {entry.technologies}
      </div>

      <div className="research-card-spec-cta mono">
        <span>[ VIEW METHODOLOGY, LIMITATIONS &amp; CITATIONS &gt; ]</span>
      </div>
    </article>
  );
}
