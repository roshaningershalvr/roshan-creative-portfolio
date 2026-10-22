import { useEffect, useRef } from "react";

const CHARS = "アイウエオカキクケコサシスセソタチツテトナニヌネノ0123456789ABCDEF<>{}[]/\\=+*#$%&";
const FS = 16;

export default function MatrixRain({ calm }) {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas.getContext("2d");
    let cols = [], W = 0, H = 0, raf = 0, last = 0, timer;
    const pick = () => CHARS.charAt(Math.floor(Math.random() * CHARS.length));

    const size = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
      cols = Array.from({ length: Math.ceil(W / FS) }, () => (Math.random() * H) / FS);
      ctx.fillStyle = "#020805";
      ctx.fillRect(0, 0, W, H);
    };

    const frame = () => {
      ctx.fillStyle = "rgba(2,8,5,0.09)";
      ctx.fillRect(0, 0, W, H);
      ctx.font = FS + 'px "Share Tech Mono", monospace';
      for (let i = 0; i < cols.length; i++) {
        const x = i * FS, y = cols[i] * FS;
        ctx.fillStyle = "#d9ffe6";
        ctx.fillText(pick(), x, y);
        ctx.fillStyle = "rgba(0,255,106,.85)";
        ctx.fillText(pick(), x, y - FS);
        if (y > H && Math.random() > 0.975) cols[i] = 0;
        else cols[i] += 1;
      }
    };

    const still = () => { for (let i = 0; i < 70; i++) frame(); };
    const loop = (ts) => {
      if (!document.hidden && ts - last > 55) { last = ts; frame(); }
      raf = requestAnimationFrame(loop);
    };

    size();
    if (calm) still(); else raf = requestAnimationFrame(loop);

    const onResize = () => {
      clearTimeout(timer);
      timer = setTimeout(() => { size(); if (calm) still(); }, 150);
    };
    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(timer);
      window.removeEventListener("resize", onResize);
    };
  }, [calm]);

  return <canvas id="rain" ref={ref} aria-hidden="true" />;
}
