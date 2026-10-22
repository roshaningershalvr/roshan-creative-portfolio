import { ticker } from "../data/content.js";

export default function Ticker() {
  const items = [...ticker, ...ticker]; // doubled for a seamless loop
  return (
    <div className="ticker" aria-hidden="true">
      <div className="track">
        {items.map((t, i) => <span key={i}>{"// " + t}</span>)}
      </div>
    </div>
  );
}
