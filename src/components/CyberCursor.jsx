import { useEffect, useRef, useState } from "react";
import { cyberAudio } from "../utils/cyberAudio.js";

const ERROR_STRINGS = [
  "0xDEADBEEF",
  "SIGSEGV",
  "NULL_PTR",
  "0x1337",
  "BUFFER_OVERFLOW",
  "CANARY_INTACT",
  "RCE_BLOCK",
  "0xCAFEBABE",
  "ERR_403_ACCESS",
  "PAYLOAD_TRAP",
  "HONEYPOT_LOCK",
  "01001001",
  "0x7FFF_802",
  "CVE_MITIGATED",
  "MEM_CORRUPT",
  "DEFCON_2",
];

export default function CyberCursor({ calm }) {
  const reticleRef = useRef(null);
  const coordsRef = useRef(null);
  const ghostRef = useRef(null);
  const targetBoxRef = useRef(null);
  const targetTagRef = useRef(null);
  const trailContainerRef = useRef(null);

  const [visible, setVisible] = useState(false);
  const [lockedTarget, setLockedTarget] = useState(null);

  useEffect(() => {
    if (calm) return;
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (isTouch) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ghostX = mouseX;
    let ghostY = mouseY;
    let lastSpawnTime = 0;
    let lastDistX = 0;
    let lastDistY = 0;
    let rafId = 0;
    let currentLockedEl = null;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      setVisible(true);

      // Direct transform on reticle for instantaneous 60fps tracking
      if (reticleRef.current) {
        reticleRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }

      // Update coordinate telemetry
      if (coordsRef.current) {
        const intX = Math.round(mouseX);
        const intY = Math.round(mouseY);
        const hex = (Math.floor(intX * 17 + intY * 31) % 0xffff)
          .toString(16)
          .toUpperCase()
          .padStart(4, "0");
        coordsRef.current.textContent = `[${intX},${intY}]::0x${hex}`;
      }

      // Spawn cursor glitch trail / corrupted error text particles
      const now = performance.now();
      const dist = Math.hypot(mouseX - lastDistX, mouseY - lastDistY);
      if (now - lastSpawnTime > 70 && dist > 14) {
        lastSpawnTime = now;
        lastDistX = mouseX;
        lastDistY = mouseY;
        spawnGlitchParticle(mouseX, mouseY);
      }
    };

    const spawnGlitchParticle = (x, y) => {
      const container = trailContainerRef.current;
      if (!container) return;

      const p = document.createElement("div");
      const isText = Math.random() > 0.45;
      const text = ERROR_STRINGS[Math.floor(Math.random() * ERROR_STRINGS.length)];
      
      const offsetX = (Math.random() - 0.5) * 28;
      const offsetY = (Math.random() - 0.5) * 28;
      
      p.className = isText ? "cursor-glitch-particle text-glitch" : "cursor-glitch-particle box-glitch";
      p.style.left = `${x + offsetX}px`;
      p.style.top = `${y + offsetY}px`;

      if (isText) {
        p.textContent = text;
        p.setAttribute("data-text", text);
      }

      container.appendChild(p);

      setTimeout(() => {
        if (p.parentNode === container) {
          container.removeChild(p);
        }
      }, 700);
    };

    // Hover targeting detection ("boxing it")
    const onMouseOver = (e) => {
      const target = e.target.closest(
        "a, button, .btn, .card, .panel, input, .chips li, .kv div, .hint button, .name, .sec-h, .ticker span, [data-target-box]"
      );

      if (target && target !== currentLockedEl) {
        currentLockedEl = target;
        setLockedTarget(target);
        updateTargetBox(target);
        cyberAudio.playLock();
      } else if (!target && currentLockedEl) {
        currentLockedEl = null;
        setLockedTarget(null);
        if (targetBoxRef.current) {
          targetBoxRef.current.classList.remove("active");
        }
      }
    };

    const updateTargetBox = (el) => {
      if (!targetBoxRef.current || !el) return;
      const rect = el.getBoundingClientRect();
      const padding = 5;

      targetBoxRef.current.style.width = `${rect.width + padding * 2}px`;
      targetBoxRef.current.style.height = `${rect.height + padding * 2}px`;
      targetBoxRef.current.style.transform = `translate3d(${rect.left - padding}px, ${rect.top - padding}px, 0)`;
      targetBoxRef.current.classList.add("active");

      if (targetTagRef.current) {
        const idOrClass = el.id ? `#${el.id}` : el.className.split(" ")[0] || el.tagName.toLowerCase();
        const randHash = Math.floor(Math.random() * 0xfff).toString(16).toUpperCase();
        targetTagRef.current.textContent = `TARGET_LOCK::[${idOrClass}] 0x${randHash}`;
      }
    };

    const onScrollOrResize = () => {
      if (currentLockedEl) {
        updateTargetBox(currentLockedEl);
      }
    };

    const onMouseDown = (e) => {
      cyberAudio.playGlitch();
      // Shockwave ripple
      const container = trailContainerRef.current;
      if (!container) return;
      const ripple = document.createElement("div");
      ripple.className = "cursor-shockwave";
      ripple.style.left = `${e.clientX}px`;
      ripple.style.top = `${e.clientY}px`;
      container.appendChild(ripple);
      setTimeout(() => {
        if (ripple.parentNode === container) {
          container.removeChild(ripple);
        }
      }, 600);
    };

    // Smooth ghost reticle loop with slight inertia
    const loop = () => {
      ghostX += (mouseX - ghostX) * 0.18;
      ghostY += (mouseY - ghostY) * 0.18;

      if (ghostRef.current) {
        ghostRef.current.style.transform = `translate3d(${ghostX}px, ${ghostY}px, 0)`;
      }

      rafId = requestAnimationFrame(loop);
    };
    rafId = requestAnimationFrame(loop);

    window.addEventListener("pointermove", onMouseMove, { passive: true });
    window.addEventListener("mouseover", onMouseOver, { passive: true });
    window.addEventListener("mousedown", onMouseDown, { passive: true });
    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize, { passive: true });

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("pointermove", onMouseMove);
      window.removeEventListener("mouseover", onMouseOver);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
    };
  }, [calm]);

  if (calm) return null;

  return (
    <>
      {/* Glitch trails & particles container */}
      <div ref={trailContainerRef} className="cyber-trail-layer" aria-hidden="true" />

      {/* Target Bounding Box that clamps to hovered elements */}
      <div ref={targetBoxRef} className="cyber-target-box" aria-hidden="true">
        <div className="corner c-tl" />
        <div className="corner c-tr" />
        <div className="corner c-bl" />
        <div className="corner c-br" />
        <div className="box-sweep-laser" />
        <div ref={targetTagRef} className="target-badge">TARGET_LOCK</div>
      </div>

      {/* Custom Crosshair Reticle & Telemetry */}
      <div
        ref={reticleRef}
        className={`cyber-reticle ${visible ? "visible" : ""}`}
        aria-hidden="true"
      >
        <div className="reticle-core" />
        <div className="reticle-ring" />
        <div className="reticle-cross hair-h" />
        <div className="reticle-cross hair-v" />
        <div ref={coordsRef} className="reticle-coords">[0,0]::0x0000</div>
      </div>

      {/* Lagging Chromatic Ghost Box */}
      <div
        ref={ghostRef}
        className={`cyber-ghost-reticle ${visible ? "visible" : ""}`}
        aria-hidden="true"
      >
        <div className="ghost-box" />
      </div>
    </>
  );
}
