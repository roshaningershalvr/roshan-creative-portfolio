import { useState } from "react";
import { site } from "../data/content.js";
import SectionHead from "./SectionHead.jsx";
import { cyberAudio } from "../utils/cyberAudio.js";

export default function Contact({ section, calm }) {
  const [copied, setCopied] = useState(false);
  const portfolioUrl = site.portfolioUrl || "https://roshanvrportfolio.vercel.app/";

  const handleCopy = (e) => {
    e.stopPropagation();
    try {
      navigator.clipboard.writeText(portfolioUrl).then(() => {
        setCopied(true);
        cyberAudio.playTyping();
        setTimeout(() => setCopied(false), 2200);
      });
    } catch {
      // Clipboard fallback
    }
  };

  const handleClickPortal = () => {
    cyberAudio.playLock();
  };

  return (
    <section id={section.id}>
      <SectionHead title={section.title} cmd={section.cmd} calm={calm} />
      <p style={{ maxWidth: "60ch", margin: "0 0 20px" }}>{section.intro}</p>

      {/* Innovative Interactive Cyber Identity Gateway */}
      <div className="contact-portal-card" data-target-box>
        <div className="sweep" />
        <div className="portal-top-bar mono">
          <div className="portal-indicator">
            <span className="pulse-dot" />
            <span className="text-green font-bold">SECURE UPLINK // NEURAL IDENTITY GATEWAY</span>
          </div>
          <span className="st st-verified">[ VERIFIED DOSSIER ]</span>
        </div>

        <div className="portal-body">
          <a
            href={portfolioUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="portal-main-action"
            onClick={handleClickPortal}
            title="Access Roshan's Portfolio"
          >
            <span className="portal-action-glitch" data-text="TO KNOW ABOUT ME CLICK HERE">
              TO KNOW ABOUT ME CLICK HERE
            </span>
            <span className="portal-arrow">↗</span>
          </a>

          <p className="portal-subtext mono text-muted">
            ACCESS COMPLETE DOSSIER · LIVE PROJECTS · ACADEMIC CREDENTIALS · RESEARCH LOGS
          </p>
        </div>

        <div className="portal-footer mono">
          <div className="portal-tags">
            <span className="portal-tag">#IIT_MADRAS</span>
            <span className="portal-tag">#ETHICAL_HACKER</span>
            <span className="portal-tag">#AI_ML_RESEARCH</span>
          </div>

          <div className="portal-quick-actions">
            <button
              type="button"
              className="portal-btn"
              onClick={handleCopy}
              title="Copy dossier link to clipboard"
            >
              {copied ? "[ LINK COPIED TO CLIPBOARD ✓ ]" : "[ COPY DOSSIER LINK ]"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
