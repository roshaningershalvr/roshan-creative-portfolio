import { useEffect, useRef, useState } from "react";

const GLYPHS = "!<>-_\\/[]{}=+*^?#01";
const FRAMES = 22;

// Heading that scrambles, then resolves, the first time it scrolls into view.
export default function DecryptHeading({ text, calm }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(text);

  useEffect(() => {
    setShown(text);
    if (calm || !("IntersectionObserver" in window)) return;
    let timer;
    const io = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return;
        io.disconnect();
        let f = 0;
        timer = setInterval(() => {
          f++;
          setShown(
            [...text]
              .map((ch, i) =>
                ch === " " ? " " : i / text.length < f / FRAMES ? ch : GLYPHS[Math.floor(Math.random() * GLYPHS.length)]
              )
              .join("")
          );
          if (f >= FRAMES) { clearInterval(timer); setShown(text); }
        }, 40);
      },
      { threshold: 0.6 }
    );
    io.observe(ref.current);
    return () => { io.disconnect(); clearInterval(timer); };
  }, [text, calm]);

  return <h2 ref={ref}>{shown}</h2>;
}
