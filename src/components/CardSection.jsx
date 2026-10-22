import SectionHead from "./SectionHead.jsx";
import Card from "./Card.jsx";

export default function CardSection({ section, calm, onOpenProject }) {
  return (
    <section id={section.id}>
      <SectionHead title={section.title} cmd={section.cmd} calm={calm} />
      <div className="grid">
        {section.cards.map((c) => (
          <Card
            key={c.title}
            card={c}
            calm={calm}
            onOpenProject={onOpenProject}
          />
        ))}
      </div>
    </section>
  );
}
