import { useState, useMemo, useEffect } from "react";
import DecryptHeading from "./DecryptHeading.jsx";
import SecurityCard from "./SecurityCard.jsx";
import { cyberAudio } from "../utils/cyberAudio.js";
import { SECURITY_CATEGORIES, SECURITY_CARDS } from "../data/securityData.js";

export default function SecuritySection({ calm }) {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCard, setSelectedCard] = useState(null);

  // Close modal on Escape key
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") setSelectedCard(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  // Filter cards by category and search query
  const filteredCards = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return SECURITY_CARDS.filter((c) => {
      const matchesCat =
        activeCategory === "all" ? true : c.category === activeCategory;
      if (!matchesCat) return false;
      if (!q) return true;
      return (
        c.title.toLowerCase().includes(q) ||
        c.tag.toLowerCase().includes(q) ||
        c.text.toLowerCase().includes(q) ||
        (c.bullets && c.bullets.some((b) => b.toLowerCase().includes(q))) ||
        (c.chips && c.chips.some((chip) => chip.toLowerCase().includes(q)))
      );
    });
  }, [activeCategory, searchQuery]);

  const openModal = (card) => {
    setSelectedCard(card);
    cyberAudio.playLock();
  };

  const closeModal = () => {
    setSelectedCard(null);
    cyberAudio.playTyping();
  };

  return (
    <section id="security" className="security-section">
      <div className="sec-h">
        <DecryptHeading text="Security" calm={calm} />
        <span className="mono">// nmap ./my-systems</span>
      </div>

      {/* Categories & Search Header */}
      <div className="security-header-bar">
        <div
          className="security-tabs"
          role="tablist"
          aria-label="Security control categories"
        >
          {SECURITY_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              role="tab"
              aria-selected={activeCategory === cat.id}
              className={`security-tab ${
                activeCategory === cat.id ? "active" : ""
              }`}
              onClick={() => {
                setActiveCategory(cat.id);
                cyberAudio.playTyping();
              }}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Live Search Input */}
        <div className="security-search-box mono">
          <label htmlFor="security-search">SEARCH_SECURITY:</label>
          <input
            id="security-search"
            type="text"
            value={searchQuery}
            placeholder="filter by threat, tag, or control..."
            spellCheck={false}
            autoComplete="off"
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <button
              type="button"
              className="search-clear-btn"
              onClick={() => setSearchQuery("")}
              title="Clear filter"
            >
              ×
            </button>
          )}
        </div>
      </div>

      {/* Security Telemetry Status Bar */}
      <div className="security-telemetry-strip mono" data-target-box>
        <span className="telemetry-item">
          <span className="pulse-dot" /> SHOWING:{" "}
          <span className="green">{filteredCards.length} OF 7 CONTROLS</span>
        </span>
        <span className="telemetry-item text-muted">
          STATUS: <span className="cyan">2 TESTED</span> ·{" "}
          <span className="green">3 IMPLEMENTED</span> ·{" "}
          <span className="green">1 HARDENED</span> ·{" "}
          <span className="cyan">1 REVIEWED</span>
        </span>
        <span className="telemetry-item text-muted">
          ASSURANCE: <span className="green">0 UNVERIFIED CLAIMS</span> ·{" "}
          <span className="cyan">EVIDENCE-BOUND REPO AUDIT</span>
        </span>
      </div>

      {/* Grid of Security Cards */}
      <div className="grid">
        {filteredCards.map((card) => (
          <SecurityCard
            key={card.id}
            card={card}
            calm={calm}
            onOpenModal={openModal}
          />
        ))}
      </div>

      {filteredCards.length === 0 && (
        <div className="dataml-empty-state mono">
          [!] No security controls match query "{searchQuery}" under category "
          {activeCategory}".
        </div>
      )}

      {/* Threat Model & Verified Security Control Modal */}
      {selectedCard && (
        <div
          className="arsenal-modal-backdrop"
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="arsenal-modal-window security-modal-window"
            onClick={(e) => e.stopPropagation()}
            data-target-box
          >
            <div className="modal-top-bar">
              <div className="modal-title-wrap">
                <span className="pulse-dot" />
                <span className="mono text-cyan">
                  [SECURITY_AUDIT: {selectedCard.tag.toUpperCase()}]
                </span>
              </div>
              <button
                type="button"
                className="modal-close-btn mono"
                onClick={closeModal}
                aria-label="Close security specification modal"
              >
                [ESC / ×]
              </button>
            </div>

            <div className="modal-scroll-content">
              <div className="modal-header-hero">
                <div className="modal-badge-row mono">
                  <span
                    className={`st st-${
                      selectedCard.statusType || "implemented"
                    }`}
                  >
                    [ STATUS: {selectedCard.status} ]
                  </span>
                  {selectedCard.isOriginal ? (
                    <span className="text-cyan">
                      [ PRESERVED ORIGINAL CARD ]
                    </span>
                  ) : (
                    <span className="text-green">[ PROJECT REPO AUDIT ]</span>
                  )}
                  <span className="text-muted">
                    TAG: {selectedCard.tag.toUpperCase()}
                  </span>
                </div>
                <h2
                  className="modal-project-title glitch-title"
                  data-text={selectedCard.title}
                >
                  {selectedCard.title}
                </h2>
                <p className="modal-project-lede">{selectedCard.text}</p>
              </div>

              {/* 01. Threat Model */}
              <div className="modal-section">
                <h4 className="mono text-cyan">// 01. THREAT MODEL &amp; ATTACK VECTORS</h4>
                <p>{selectedCard.threatModel}</p>
              </div>

              {/* 02. Verified Implemented Controls */}
              <div className="modal-section">
                <h4 className="mono text-cyan">
                  // 02. IMPLEMENTED &amp; VERIFIED CONTROLS
                </h4>
                <ul className="security-controls-list mono">
                  {selectedCard.implementedControls.map((ctrl, idx) => (
                    <li key={idx}>{ctrl}</li>
                  ))}
                </ul>
              </div>

              {/* 03. Verification Procedure & Evidence */}
              <div className="modal-section">
                <h4 className="mono text-cyan">
                  // 03. VERIFICATION &amp; AUDIT EVIDENCE
                </h4>
                <div className="dataml-origin-box mono">
                  <p style={{ margin: 0 }}>{selectedCard.verification}</p>
                </div>
              </div>

              {/* 04. Remaining Risks & Gaps */}
              <div className="modal-section">
                <h4 className="mono text-warn">
                  // 04. REMAINING RISKS, LIMITATIONS &amp; SCOPE BOUNDS
                </h4>
                <div className="security-remaining-box mono">
                  <p style={{ margin: 0 }}>{selectedCard.remainingRisks}</p>
                </div>
              </div>

              {/* 05. Security Chips */}
              {selectedCard.chips && (
                <div className="modal-section">
                  <h4 className="mono text-cyan">
                    // 05. ATTACK SURFACE &amp; DEFENSE LABELS
                  </h4>
                  <ul className="chips">
                    {selectedCard.chips.map((c) => (
                      <li key={c} data-target-box>
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
