import SectionHead from "./SectionHead.jsx";

export default function About({ data, calm }) {
  return (
    <section id="about">
      <SectionHead title={data.title} cmd={data.cmd} calm={calm} />
      <div className="about">
        <div>
          {data.paragraphs.map((p) => <p key={p}>{p}</p>)}
        </div>
        <dl className="kv">
          {data.facts.map(([k, v, hot]) => (
            <div key={k}>
              <dt>{k}</dt>
              <dd style={hot ? { color: "var(--green)" } : undefined}>{v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
