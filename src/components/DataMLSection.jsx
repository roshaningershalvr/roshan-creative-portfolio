import { useState, useMemo, useEffect } from "react";
import DecryptHeading from "./DecryptHeading.jsx";
import { cyberAudio } from "../utils/cyberAudio.js";
import { DATA_ML_CATEGORIES, DATA_ML_PROJECTS } from "../data/dataMlProjects.js";

export default function DataMLSection({ calm }) {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProject, setSelectedProject] = useState(null);

  // Close modal on Escape key
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") setSelectedProject(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  // Filter projects by category and search query
  const filteredProjects = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return DATA_ML_PROJECTS.filter((p) => {
      const matchesCat =
        activeCategory === "all" ? true : p.category === activeCategory;
      if (!matchesCat) return false;
      if (!q) return true;
      return (
        p.title.toLowerCase().includes(q) ||
        p.tag.toLowerCase().includes(q) ||
        p.summary.toLowerCase().includes(q) ||
        p.technologies.toLowerCase().includes(q) ||
        p.categoryTitle.toLowerCase().includes(q)
      );
    });
  }, [activeCategory, searchQuery]);

  const openModal = (proj) => {
    setSelectedProject(proj);
    cyberAudio.playLock();
  };

  const closeModal = () => {
    setSelectedProject(null);
    cyberAudio.playTyping();
  };

  return (
    <section id="data" className="dataml-section">
      <div className="sec-h">
        <DecryptHeading text="Data & Machine Learning" calm={calm} />
        <span className="mono">// scientific ml · applied ai · quantum computing · fusion intelligence</span>
      </div>

      {/* Categories & Search Header */}
      <div className="dataml-header-bar">
        <div className="dataml-tabs" role="tablist" aria-label="Data and ML categories">
          {DATA_ML_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              role="tab"
              aria-selected={activeCategory === cat.id}
              className={`dataml-tab ${activeCategory === cat.id ? "active" : ""}`}
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
        <div className="dataml-search-box mono">
          <label htmlFor="dataml-search">SEARCH_DATA_ML:</label>
          <input
            id="dataml-search"
            type="text"
            value={searchQuery}
            placeholder="filter by title, tag, or stack..."
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

      {/* Telemetry Status Bar */}
      <div className="dataml-telemetry-strip mono" data-target-box>
        <span className="telemetry-item">
          <span className="pulse-dot" /> SHOWING: <span className="green">{filteredProjects.length} OF 10 PROJECTS</span>
        </span>
        <span className="telemetry-item text-muted">
          STATUS: <span className="green">1 COMPLETED</span> · <span className="cyan">3 PROTOTYPE</span> · <span className="warn">6 PLANNED RESEARCH</span>
        </span>
        <span className="telemetry-item text-muted">
          DISCIPLINES: <span className="cyan">CLIMATE · SEC-OPS · QUANTUM · PLASMA DIGITAL TWINS</span>
        </span>
      </div>

      {/* Grid of Data & ML Cards */}
      <div className="grid">
        {filteredProjects.map((p) => (
          <article
            key={p.id}
            className="card tilt dataml-card"
            data-target-box
            onClick={() => openModal(p)}
            title="Click to view scientific methodology, architecture, and validation protocol"
          >
            <div className="sweep" />
            <div className="card-laser-line" />

            <div className="tag mono">
              <span className="dataml-tag-code">{p.tag}</span>
              <span
                className={`st ${
                  p.status === "COMPLETED"
                    ? "st-completed"
                    : p.status === "PROTOTYPE"
                    ? "st-prototype"
                    : "st-planned"
                }`}
              >
                [ {p.status} ]
              </span>
            </div>

            <div className="dataml-category-label mono text-muted">
              {p.categoryTitle.toUpperCase()}
            </div>

            <h3 className="glitch-title card-glitch-title" data-text={p.title}>
              {p.title}
            </h3>

            <p className="dataml-summary">{p.summary}</p>

            {p.features && (
              <ul className="f dataml-mini-features">
                {p.features.slice(0, 3).map((feat, idx) => (
                  <li key={idx}>{feat}</li>
                ))}
              </ul>
            )}

            <div className="tools-badge mono">
              <span className="cyan">STACK:</span> {p.technologies}
            </div>

            <div className="card-spec-cta mono">
              <span>[ VIEW RESEARCH SPEC &amp; ARCHITECTURE &gt; ]</span>
            </div>
          </article>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="dataml-empty-state mono">
          [!] No Data &amp; ML projects match query "{searchQuery}" under category "{activeCategory}".
        </div>
      )}

      {/* Scientific Architecture & Methodology Specification Modal */}
      {selectedProject && (
        <div
          className="arsenal-modal-backdrop"
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="arsenal-modal-window dataml-modal-window"
            onClick={(e) => e.stopPropagation()}
            data-target-box
          >
            <div className="modal-top-bar">
              <div className="modal-title-wrap">
                <span className="pulse-dot" />
                <span className="mono text-cyan">[SPEC_DOC: {selectedProject.tag}]</span>
              </div>
              <button
                type="button"
                className="modal-close-btn mono"
                onClick={closeModal}
                aria-label="Close specification modal"
              >
                [ESC / ×]
              </button>
            </div>

            <div className="modal-scroll-content">
              <div className="modal-header-hero">
                <div className="modal-badge-row mono">
                  <span
                    className={`st ${
                      selectedProject.status === "COMPLETED"
                        ? "st-completed"
                        : selectedProject.status === "PROTOTYPE"
                        ? "st-prototype"
                        : "st-planned"
                    }`}
                  >
                    [ STATUS: {selectedProject.status} ]
                  </span>
                  <span className="text-muted">
                    CATEGORY: {selectedProject.categoryTitle.toUpperCase()}
                  </span>
                </div>
                <h2
                  className="modal-project-title glitch-title"
                  data-text={selectedProject.title}
                >
                  {selectedProject.title}
                </h2>
                <p className="modal-project-lede">{selectedProject.description}</p>
              </div>

              {/* 01. Problem Statement */}
              <div className="modal-section">
                <h4 className="mono text-cyan">// 01. PROBLEM STATEMENT</h4>
                <p>{selectedProject.problemStatement}</p>
              </div>

              {/* 02. Research Question / Objective */}
              <div className="modal-section">
                <h4 className="mono text-cyan">// 02. RESEARCH QUESTION &amp; OBJECTIVE</h4>
                <p>{selectedProject.objective}</p>
              </div>

              {/* 03. Dataset & Data Provenance */}
              <div className="modal-section">
                <h4 className="mono text-cyan">// 03. DATASET &amp; DATA PROVENANCE</h4>
                <p>{selectedProject.dataset}</p>
                {selectedProject.dataQualityNotes && (
                  <div className="dataml-note-box mono">
                    <span className="warn">DATA QUALITY &amp; PREPROCESSING CHALLENGES:</span>{" "}
                    {selectedProject.dataQualityNotes}
                  </div>
                )}
              </div>

              {/* 04. Key Capabilities & Features */}
              {selectedProject.features && (
                <div className="modal-section">
                  <h4 className="mono text-cyan">// 04. KEY CAPABILITIES &amp; PIPELINE STAGES</h4>
                  <ul className="f modal-feature-list">
                    {selectedProject.features.map((feat, i) => (
                      <li key={i}>{feat}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* 05. Architecture Diagram */}
              {selectedProject.architecture && (
                <div className="modal-section">
                  <h4 className="mono text-cyan">// 05. DATA FLOW &amp; PIPELINE ARCHITECTURE</h4>
                  <pre className="modal-arch-diagram mono">{selectedProject.architecture}</pre>
                </div>
              )}

              {/* 06. Technology Stack */}
              <div className="modal-section">
                <h4 className="mono text-cyan">// 06. SCIENTIFIC SOFTWARE STACK</h4>
                <div className="tools-badge mono modal-tools">
                  <span className="cyan">STACK:</span> {selectedProject.technologies}
                </div>
              </div>

              {/* 07. Evaluation Strategy */}
              {selectedProject.evaluation && (
                <div className="modal-section">
                  <h4 className="mono text-cyan">// 07. VALIDATION PROTOCOL &amp; LEAKAGE PREVENTION</h4>
                  <p>{selectedProject.evaluation}</p>
                </div>
              )}

              {/* 08. Limitations & Boundaries */}
              {selectedProject.limitations && (
                <div className="modal-section ethical-notice-box">
                  <h4 className="mono text-warn">// 08. SCIENTIFIC BOUNDARIES &amp; LIMITATIONS</h4>
                  <p className="mono">{selectedProject.limitations}</p>
                </div>
              )}

              {/* 09. Milestones & Roadmap */}
              {selectedProject.milestones && (
                <div className="modal-section">
                  <h4 className="mono text-cyan">// 09. DEVELOPMENT MILESTONES &amp; ROADMAP</h4>
                  <ul className="f modal-feature-list">
                    {selectedProject.milestones.map((m, i) => (
                      <li key={i}>{m}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* 10. Existing Foundation Connection */}
              {selectedProject.reusedFrom && (
                <div className="modal-section dataml-origin-box mono text-muted">
                  <span className="green">// PROJECT GENEALOGY:</span> {selectedProject.reusedFrom}
                </div>
              )}
            </div>

            <div className="modal-footer-bar">
              <button
                type="button"
                className="btn solid mono"
                onClick={closeModal}
              >
                CLOSE SPECIFICATION
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
