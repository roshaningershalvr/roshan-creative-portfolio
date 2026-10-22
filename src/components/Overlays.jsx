import { useEffect, useRef } from "react";

// Cursor glow, vignette, scanlines and the scroll progress bar.
export default function Overlays() {
  const prog = useRef(null);

  useEffect(() => {
    const root = document.documentElement;
    const onMove = (e) => {
      root.style.setProperty("--mx", e.clientX + "px");
      root.style.setProperty("--my", e.clientY + "px");
    };
    const onScroll = () => {
      const h = root.scrollHeight - window.innerHeight;
      prog.current?.style.setProperty("--p", h > 0 ? Math.min(1, window.scrollY / h) : 0);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      <div className="glow" aria-hidden="true" />
      <div className="vig" aria-hidden="true" />
      <div className="scan" aria-hidden="true" />
      <div className="progress" ref={prog} aria-hidden="true" />
    </>
  );
}
