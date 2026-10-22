import { useState, useMemo, useEffect } from "react";
import DecryptHeading from "./DecryptHeading.jsx";
import ResearchCard from "./ResearchCard.jsx";
import { cyberAudio } from "../utils/cyberAudio.js";
import {
  RESEARCH_PILLARS,
  RESEARCH_TABS,
  RESEARCH_WORKFLOW_STEPS,
  RESEARCH_ENTRIES,
} from "../data/researchData.js";

export default function Research({ section, calm }) {
  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedEntry, setSelectedEntry] = useState(null);
  const [showWorkflow, setShowWorkflow] = useState(false);
  const [showTemplate, setShowTemplate] = useState(false);
  const [copiedTemplate, setCopiedTemplate] = useState(false);

  // Close modal on Escape key
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") setSelectedEntry(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  // Filter research entries by track tab and search query
  const filteredEntries = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return RESEARCH_ENTRIES.filter((entry) => {
      const matchesTrack =
        activeTab === "all" ? true : entry.track === activeTab;
      if (!matchesTrack) return false;
      if (!q) return true;
      return (
        entry.title.toLowerCase().includes(q) ||
        entry.area.toLowerCase().includes(q) ||
        entry.researchQuestion.toLowerCase().includes(q) ||
        entry.motivation.toLowerCase().includes(q) ||
        entry.technologies.toLowerCase().includes(q) ||
        entry.tag.toLowerCase().includes(q)
      );
    });
  }, [activeTab, searchQuery]);

  const openModal = (entry) => {
    setSelectedEntry(entry);
    cyberAudio.playLock();
  };

  const closeModal = () => {
    setSelectedEntry(null);
    cyberAudio.playTyping();
  };

  const handleCopyTemplate = () => {
    const templateText = `# SCIENTIFIC RESEARCH PROTOCOL & EXPERIMENT NOTE
Project / Research Title: 
Research Track: [ Beyond Transformer / Quantum & AI ]
Current Stage: [ PROPOSED / LITERATURE_REVIEW / EXPERIMENTAL / UNDER_EVALUATION ]

## 1. Research Question
* Exact falsifiable question being investigated:

## 2. Motivation & Physical / Computational Significance
* Why this problem matters:

## 3. Literature Context & Prior Art
* Key published papers and established baselines:

## 4. Identified Research Gap
* What existing methods fail to address:

## 5. Working Hypothesis & Formal Representation
* Mathematical assumptions, loss formulation, or circuit specs:

## 6. Dataset / Simulation Environment
* Data source, license, sampling frequency, and train/val/test split protocol:

## 7. Baseline Methods
* Standard classical or statistical baselines to compare against:

## 8. Proposed Methodology
* Architecture, hyperparameters, and implementation details:

## 9. Evaluation Metrics
* Quantitative metrics (e.g. PR-AUC, ECE, CNOT depth, Brier score):

## 10. Empirical Findings & Observations
* Documented results (or "Pending experiment execution"):

## 11. Scientific Limitations & Failure Modes
* Explicit boundaries of the study:

## 12. Next Steps & References
* Immediate next milestones and academic citations:
`;
    navigator.clipboard?.writeText(templateText).then(() => {
      setCopiedTemplate(true);
      cyberAudio.playLock();
      setTimeout(() => setCopiedTemplate(false), 2600);
    });
  };

  return (
    <section id="research" className="research-section">
      <div className="sec-h">
        <DecryptHeading text={section?.title || "Research"} calm={calm} />
        <span className="mono">
          // cat ./interests · scientific ml · quantum computing · fusion intelligence
        </span>
      </div>

      {/* -------------------------------------------------------------
          TWO PRESERVED ORIGINAL PILLARS (Enhanced with reading lists)
          ------------------------------------------------------------- */}
      <div className="research-pillars-intro mono">
        <span className="text-cyan">// FOUNDATIONAL RESEARCH PILLARS (PRESERVED CORE)</span>
      </div>
      <div className="two research-pillars-grid">
        {RESEARCH_PILLARS.map((p) => (
          <div className="panel research-pillar-panel" key={p.id} data-target-box>
            <div className="pillar-header">
              <span className="pillar-badge mono">PILLAR: {p.track.toUpperCase()}</span>
              <h3 className="pillar-title">{p.title}</h3>
              <p className="pillar-subtitle mono">{p.subtitle}</p>
            </div>
            <p className="pillar-text">{p.summary}</p>
            <div className="pillar-scope">
              <span className="mono text-muted">KEY FOCUS AREAS:</span>
              <ul className="pillar-bullets">
                {p.scope.map((s, idx) => (
                  <li key={idx}>{s}</li>
                ))}
              </ul>
            </div>
            <div className="pillar-reading mono text-muted">
              <span>FOUNDATIONAL READING:</span>
              <ul>
                {p.readingList.map((r, idx) => (
                  <li key={idx}>{r}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* -------------------------------------------------------------
          WORKFLOW & PROTOCOL TEMPLATE TOGGLE BAR
          ------------------------------------------------------------- */}
      <div className="research-aux-bar">
        <button
          type="button"
          className={`btn-aux mono ${showWorkflow ? "active" : ""}`}
          onClick={() => {
            setShowWorkflow((prev) => !prev);
            cyberAudio.playTyping();
          }}
        >
          {showWorkflow ? "[-] HIDE RESEARCH METHODOLOGY PROTOCOL" : "[+] VIEW 6-STAGE RESEARCH METHODOLOGY PROTOCOL"}
        </button>
        <button
          type="button"
          className={`btn-aux mono ${showTemplate ? "active" : ""}`}
          onClick={() => {
            setShowTemplate((prev) => !prev);
            cyberAudio.playTyping();
          }}
        >
          {showTemplate ? "[-] HIDE EXPERIMENT PROTOCOL TEMPLATE" : "[+] VIEW EXPERIMENT PROTOCOL TEMPLATE"}
        </button>
      </div>

      {/* 6-Stage Research Methodology Workflow */}
      {showWorkflow && (
        <div className="research-workflow-wrapper" data-target-box>
          <div className="workflow-title mono">
            <span className="pulse-dot" />
            <span>RIGOROUS SCIENTIFIC INVESTIGATION WORKFLOW</span>
          </div>
          <div className="workflow-grid">
            {RESEARCH_WORKFLOW_STEPS.map((ws) => (
              <div key={ws.step} className="workflow-step-card mono">
                <div className="workflow-num text-cyan">STEP {ws.step}</div>
                <div className="workflow-phase">{ws.phase}</div>
                <p className="workflow-desc">{ws.desc}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Experiment Protocol Template */}
      {showTemplate && (
        <div className="research-template-wrapper" data-target-box>
          <div className="template-top-bar mono">
            <span className="text-cyan">// REPRODUCIBLE RESEARCH PROTOCOL TEMPLATE</span>
            <button
              type="button"
              className="btn-copy-template mono"
              onClick={handleCopyTemplate}
            >
              {copiedTemplate ? "[ COPIED TO CLIPBOARD! ]" : "[ COPY TEMPLATE ]"}
            </button>
          </div>
          <pre className="template-pre mono">
{`# SCIENTIFIC RESEARCH PROTOCOL & EXPERIMENT NOTE
Project Title: 
Research Track: [ Beyond Transformer / Quantum & AI ]
Current Stage: [ PROPOSED / LITERATURE_REVIEW / EXPERIMENTAL / UNDER_EVALUATION ]

1. Research Question: Clear, falsifiable hypothesis
2. Motivation: Physical or algorithmic significance
3. Literature Context & Prior Art: Established baselines
4. Identified Research Gap: Where current methods fail
5. Dataset / Simulator: Provenance, resolution, and splits
6. Baseline Models: Simple classical baselines first
7. Proposed Method: Architecture, loss, and formal constraints
8. Evaluation Metrics: PR-AUC, ECE, CNOT depth, Brier score
9. Empirical Findings: Documented results or "Pending"
10. Scientific Limitations: Boundaries and negative observations`}
          </pre>
        </div>
      )}

      {/* -------------------------------------------------------------
          TRACK TABS & LIVE SEARCH HEADER
          ------------------------------------------------------------- */}
      <div className="research-header-bar">
        <div
          className="research-tabs"
          role="tablist"
          aria-label="Research track categories"
        >
          {RESEARCH_TABS.map((tab) => (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={activeTab === tab.id}
              className={`research-tab ${activeTab === tab.id ? "active" : ""}`}
              onClick={() => {
                setActiveTab(tab.id);
                cyberAudio.playTyping();
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Live Search Box */}
        <div className="research-search-box mono">
          <label htmlFor="research-search">SEARCH_RESEARCH:</label>
          <input
            id="research-search"
            type="text"
            value={searchQuery}
            placeholder="filter by question, area, or stack..."
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

      {/* Research Telemetry Status Strip */}
      <div className="research-telemetry-strip mono" data-target-box>
        <span className="telemetry-item">
          <span className="pulse-dot" /> SHOWING:{" "}
          <span className="green">{filteredEntries.length} OF 10 DIRECTIONS</span>
        </span>
        <span className="telemetry-item text-muted">
          STATUS: <span className="cyan">3 EXPERIMENTAL</span> ·{" "}
          <span className="warn">2 LITERATURE REVIEW</span> ·{" "}
          <span className="cyan">1 UNDER EVALUATION</span> ·{" "}
          <span className="muted">4 PROPOSED</span>
        </span>
        <span className="telemetry-item text-muted">
          INTEGRITY: <span className="green">0 FABRICATED PAPERS</span> ·{" "}
          <span className="cyan">EVIDENCE-BOUND ACADEMIC CITATIONS</span>
        </span>
      </div>

      {/* -------------------------------------------------------------
          GRID OF RESEARCH CARDS
          ------------------------------------------------------------- */}
      <div className="grid">
        {filteredEntries.map((entry) => (
          <ResearchCard
            key={entry.id}
            entry={entry}
            calm={calm}
            onOpenModal={openModal}
          />
        ))}
      </div>

      {filteredEntries.length === 0 && (
        <div className="dataml-empty-state mono">
          [!] No research directions match query "{searchQuery}" under track "{activeTab}".
        </div>
      )}

      {/* -------------------------------------------------------------
          RESEARCH DETAIL & SPECIFICATION MODAL
          ------------------------------------------------------------- */}
      {selectedEntry && (
        <div
          className="arsenal-modal-backdrop"
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="arsenal-modal-window research-modal-window"
            onClick={(e) => e.stopPropagation()}
            data-target-box
          >
            <div className="modal-top-bar">
              <div className="modal-title-wrap">
                <span className="pulse-dot" />
                <span className="mono text-cyan">
                  [RESEARCH_SPEC: {selectedEntry.tag}]
                </span>
              </div>
              <button
                type="button"
                className="modal-close-btn mono"
                onClick={closeModal}
                aria-label="Close research modal"
              >
                [ESC / ×]
              </button>
            </div>

            <div className="modal-scroll-content">
              <div className="modal-header-hero">
                <div className="modal-badge-row mono">
                  <span
                    className={`st st-${
                      selectedEntry.statusType || "proposed"
                    }`}
                  >
                    [ STATUS: {selectedEntry.status.replace("_", " ")} ]
                  </span>
                  <span className="text-cyan">
                    TRACK: {selectedEntry.track === "transformer" ? "BEYOND TRANSFORMER" : "QUANTUM & AI"}
                  </span>
                  <span className="text-muted">
                    AREA: {selectedEntry.area.toUpperCase()}
                  </span>
                </div>
                <h2
                  className="modal-project-title glitch-title"
                  data-text={selectedEntry.title}
                >
                  {selectedEntry.title}
                </h2>
                <div className="modal-rq-highlight mono">
                  <span className="text-cyan">PRIMARY RESEARCH QUESTION:</span>
                  <p>{selectedEntry.researchQuestion}</p>
                </div>
              </div>

              {/* 01. Motivation & Significance */}
              <div className="modal-section">
                <h4 className="mono text-cyan">// 01. MOTIVATION &amp; PHYSICAL / COMPUTATIONAL SIGNIFICANCE</h4>
                <p>{selectedEntry.motivation}</p>
              </div>

              {/* 02. Literature Context & Research Gap */}
              <div className="modal-section">
                <h4 className="mono text-cyan">// 02. LITERATURE CONTEXT &amp; IDENTIFIED GAP</h4>
                <p><strong>Prior Art:</strong> {selectedEntry.priorWork}</p>
                <p className="mt-8"><strong>Identified Research Gap:</strong> {selectedEntry.researchGap}</p>
              </div>

              {/* 03. Methodology & Architecture */}
              <div className="modal-section">
                <h4 className="mono text-cyan">// 03. PROPOSED / ACTUAL METHODOLOGY</h4>
                <p>{selectedEntry.methodology}</p>
              </div>

              {/* 04. Dataset / Simulator & Tech Stack */}
              <div className="modal-section">
                <h4 className="mono text-cyan">// 04. DATASET PROVENANCE &amp; COMPUTATION STACK</h4>
                <p><strong>Data / Simulator:</strong> {selectedEntry.dataset}</p>
                <div className="dataml-origin-box mono mt-8">
                  <span className="cyan">STACK: </span> {selectedEntry.technologies}
                </div>
              </div>

              {/* 05. Experimental Design & Evaluation Metrics */}
              <div className="modal-section">
                <h4 className="mono text-cyan">// 05. EXPERIMENTAL DESIGN &amp; EVALUATION METRICS</h4>
                <p><strong>Design:</strong> {selectedEntry.experimentalDesign}</p>
                <p className="mt-8"><strong>Metrics:</strong> <span className="mono green">{selectedEntry.evaluationMetrics}</span></p>
              </div>

              {/* 06. Empirical Findings */}
              <div className="modal-section">
                <h4 className="mono text-cyan">// 06. EMPIRICAL FINDINGS &amp; OBSERVATIONS</h4>
                <div className="research-findings-box mono">
                  <p style={{ margin: 0 }}>{selectedEntry.findings}</p>
                </div>
              </div>

              {/* 07. Scientific Limitations */}
              <div className="modal-section">
                <h4 className="mono text-warn">// 07. SCIENTIFIC LIMITATIONS &amp; SCOPE BOUNDARIES</h4>
                <div className="security-remaining-box mono">
                  <p style={{ margin: 0 }}>{selectedEntry.limitations}</p>
                </div>
              </div>

              {/* 08. Next Steps */}
              <div className="modal-section">
                <h4 className="mono text-cyan">// 08. NEXT MILESTONES &amp; ROADMAP</h4>
                <p>{selectedEntry.nextSteps}</p>
              </div>

              {/* 09. Genuine Academic References */}
              {selectedEntry.references && selectedEntry.references.length > 0 && (
                <div className="modal-section">
                  <h4 className="mono text-cyan">// 09. GENUINE ACADEMIC REFERENCES &amp; CITATIONS</h4>
                  <ul className="research-references-list mono">
                    {selectedEntry.references.map((ref, idx) => (
                      <li key={idx}>
                        <span>{ref.citation}</span>
                        {ref.url && (
                          <a
                            href={ref.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ref-link"
                          >
                            [DOI / arXiv &gt;]
                          </a>
                        )}
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
