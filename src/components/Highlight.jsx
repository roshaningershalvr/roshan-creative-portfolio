// Renders text where *words* between asterisks are highlighted.
export default function Highlight({ text }) {
  return text.split("*").map((part, i) =>
    i % 2 ? <mark key={i}>{part}</mark> : <span key={i}>{part}</span>
  );
}
