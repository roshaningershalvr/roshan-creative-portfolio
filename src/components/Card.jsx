import { useRef } from "react";

function getProjectMeta(title) {
  const t = (title || "").toLowerCase();
  if (t.includes("vrr")) {
    return {
      id: "vrr",
      badge: "[ FEATURED FOUNDER SYSTEM ]",
      cta: "[ EXPLORE OPERATING SYSTEM > ]",
      badgeClass: "text-cyan",
      actionClass: "text-green",
      cardClass: "card-featured-vrr",
      title: "Click to open immersive VRR AI Workforce Operating System experience",
    };
  }
  if (t.includes("retrofit")) {
    return {
      id: "retrofit",
      badge: "[ EDGE & TINYML PLATFORM ]",
      cta: "[ EXPLORE INDUSTRIAL SYSTEM > ]",
      badgeClass: "text-warn",
      actionClass: "text-green",
      cardClass: "card-featured-retrofit",
      title: "Click to open immersive Retrofit Predictive Industrial Safety experience",
    };
  }
  if (t.includes("careintake")) {
    return {
      id: "careintake",
      badge: "[ CLINICAL AYUSH KIOSK ]",
      cta: "[ EXPLORE CLINICAL KIOSK > ]",
      badgeClass: "text-cyan",
      actionClass: "text-cyan",
      cardClass: "card-featured-careintake",
      title: "Click to open immersive CareIntake Clinical History-Taking experience",
    };
  }
  if (t.includes("axion") || t.includes("jarvis")) {
    return {
      id: "axion-jarvis",
      badge: "[ AGENTIC AI & HOST INTEGRATION ]",
      cta: "[ EXPLORE AGENTIC SYSTEM > ]",
      badgeClass: "text-magenta",
      actionClass: "text-cyan",
      cardClass: "card-featured-axion",
      title: "Click to open immersive AXION & JARVIS Agentic Control experience",
    };
  }
  return null;
}

// Project card with targeting brackets, chromatic glitch header, and 3D tilt
export default function Card({ card, calm, onOpenProject }) {
  const ref = useRef(null);
  const projectMeta = getProjectMeta(card.title);
  const isInteractiveProject = Boolean(projectMeta);
  const canTilt = !calm && typeof matchMedia === "function" && matchMedia("(hover:hover)").matches;

  const onMove = (e) => {
    if (!canTilt) return;
    const b = ref.current.getBoundingClientRect();
    const x = (e.clientX - b.left) / b.width - 0.5;
    const y = (e.clientY - b.top) / b.height - 0.5;
    ref.current.style.transform = `perspective(900px) rotateY(${x * 6}deg) rotateX(${-y * 6}deg)`;
  };
  const onLeave = () => { if (ref.current) ref.current.style.transform = ""; };

  const handleClick = () => {
    if (projectMeta && onOpenProject) {
      onOpenProject(projectMeta.id);
    }
  };

  return (
    <article
      className={`card tilt ${projectMeta ? projectMeta.cardClass : ""}`}
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      onClick={handleClick}
      data-target-box
      title={projectMeta ? projectMeta.title : undefined}
      style={isInteractiveProject ? { cursor: "pointer" } : undefined}
    >
      <div className="sweep" />
      <div className="card-laser-line" />
      <div className="tag mono">
        <span>{card.tag}</span>
        <span className="st">[ {card.status} ]</span>
      </div>
      <h3 className="card-glitch-title" data-text={card.title}>
        {card.title}
      </h3>
      <p>{card.text}</p>
      {card.bullets && (
        <ul className="f">
          {card.bullets.map((b) => <li key={b}>{b}</li>)}
        </ul>
      )}
      {card.chips && (
        <ul className="chips">
          {card.chips.map((c) => (
            <li key={c} data-target-box>{c}</li>
          ))}
        </ul>
      )}
      {projectMeta && (
        <div className="card-vrr-cta mono">
          <span className={`vrr-cta-badge ${projectMeta.badgeClass}`}>{projectMeta.badge}</span>
          <span className={`vrr-cta-action ${projectMeta.actionClass}`}>{projectMeta.cta}</span>
        </div>
      )}
    </article>
  );
}
