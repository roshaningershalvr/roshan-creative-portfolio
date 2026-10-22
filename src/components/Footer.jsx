import { site } from "../data/content.js";

export default function Footer() {
  return (
    <footer className="mono">
      <span>© {site.year} {site.name}</span>
      <span>{site.footerRight}</span>
    </footer>
  );
}
