import DecryptHeading from "./DecryptHeading.jsx";

export default function SectionHead({ title, cmd, calm }) {
  return (
    <div className="sec-h">
      <DecryptHeading text={title} calm={calm} />
      <span className="mono">{cmd}</span>
    </div>
  );
}
