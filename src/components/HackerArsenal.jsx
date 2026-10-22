import { useState, useMemo, useEffect } from "react";
import DecryptHeading from "./DecryptHeading.jsx";
import { cyberAudio } from "../utils/cyberAudio.js";
import { FOUNDATION_SKILLS, ARSENAL_PROJECTS } from "../data/arsenalData.js";

const ALL_ARSENAL_ITEMS = [...FOUNDATION_SKILLS, ...ARSENAL_PROJECTS];

const TABS = [
  { id: "offensive", title: "Offensive Security & Red Teaming" },
  { id: "defensive", title: "Defensive Security & Hardening" },
  { id: "ai", title: "AI Security & Guardrails" },
  { id: "all", title: "All Arsenal Items" },
];

const SCAN_TARGETS = [
  { id: "agent", label: "ai-agent.local:8080 (AXION/JARVIS Stack)", port: "8080/tcp", vuln: "Path Traversal & Unbounded Shell Execution" },
  { id: "vulnlab", label: "vulnlab-sandbox.local:3000 (VulnLab Container)", port: "3000/tcp", vuln: "SQL Injection & Broken Access Control (BOLA)" },
  { id: "iot", label: "iot-gateway.internal (Retrofit Edge)", port: "1883/mqtt", vuln: "Unauthenticated Sensor Broadcast & Buffer Overflow" },
  { id: "clinic", label: "clinic-api.careintake (FHIR / OAuth2)", port: "443/tcp", vuln: "Broken Object Level Auth (BOLA) & Token Replay" },
];

export default function HackerArsenal({ calm }) {
  const [activeTab, setActiveTab] = useState("offensive");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedTarget, setSelectedTarget] = useState(SCAN_TARGETS[0]);
  const [scanning, setScanning] = useState(false);
  const [scanLogs, setScanLogs] = useState([]);

  // Close modal on Escape key
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") setSelectedProject(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  // Filter items based on active tab and search query
  const filteredItems = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return ALL_ARSENAL_ITEMS.filter((item) => {
      const matchesTab =
        activeTab === "all" ? true : item.categories.includes(activeTab);
      if (!matchesTab) return false;
      if (!q) return true;
      return (
        item.name.toLowerCase().includes(q) ||
        item.code.toLowerCase().includes(q) ||
        item.desc.toLowerCase().includes(q) ||
        item.tools.toLowerCase().includes(q)
      );
    });
  }, [activeTab, searchQuery]);

  const openSpecModal = (item) => {
    setSelectedProject(item);
    cyberAudio.playLock();
  };

  const closeSpecModal = () => {
    setSelectedProject(null);
    cyberAudio.playTyping();
  };

  const runAudit = () => {
    if (scanning) return;
    setScanning(true);
    setScanLogs([]);
    cyberAudio.playGlitch();

    const steps = [
      `[+] Initializing ethical audit against ${selectedTarget.label}...`,
      `[+] Phase 1: Port probe on ${selectedTarget.port} -> SYN_ACK received.`,
      `[!] Phase 2: Vulnerability surface check: Detected "${selectedTarget.vuln}".`,
      `[*] Phase 3: Simulated exploit vector tested in isolated sandbox...`,
      `[✓] Phase 4: Exploitation blocked! Stack canary & strict input sanitizers held.`,
      `[#] Remediation deployed: Least privilege policy + Ed25519 token enforcement verified.`,
      `>>> AUDIT COMPLETE: 0 Unmitigated Vulnerabilities. Status: HARDENED <<<`,
    ];

    steps.forEach((step, idx) => {
      setTimeout(() => {
        setScanLogs((prev) => [...prev, step]);
        cyberAudio.playTyping();
        if (idx === steps.length - 1) {
          setScanning(false);
          cyberAudio.playLock();
        }
      }, (idx + 1) * 380);
    });
  };

  return (
    <section id="arsenal" className="arsenal-section">
      <div className="sec-h">
        <DecryptHeading text="Ethical Hacker Arsenal" calm={calm} />
        <span className="mono">// offensive recon + defensive hardening</span>
      </div>

      {/* Tabs & Search Controls */}
      <div className="arsenal-header-bar">
        <div className="arsenal-tabs" role="tablist" aria-label="Arsenal categories">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={activeTab === tab.id}
              className={`arsenal-tab ${activeTab === tab.id ? "active" : ""}`}
              onClick={() => {
                setActiveTab(tab.id);
                cyberAudio.playTyping();
              }}
            >
              {tab.title}
            </button>
          ))}
        </div>

        {/* Live Arsenal Search Filter */}
        <div className="arsenal-search-box mono">
          <label htmlFor="arsenal-search">SEARCH_ARSENAL:</label>
          <input
            id="arsenal-search"
            type="text"
            value={searchQuery}
            placeholder="filter by name, tool, or tag..."
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

      {/* Grid of Arsenal Cards */}
      <div className="grid">
        {filteredItems.map((item) => (
          <article
            key={item.id}
            className={`card tilt arsenal-card ${item.isProject ? "is-project-card" : "is-skill-card"}`}
            data-target-box
            onClick={() => openSpecModal(item)}
            title="Click to inspect architecture and technical specification"
          >
            <div className="sweep" />
            <div className="card-laser-line" />
            
            <div className="tag mono">
              <span className="arsenal-card-code">{item.code}</span>
              <span className={`st ${item.status === "PLANNED" ? "st-planned" : "st-verified"}`}>
                [ {item.status} ]
              </span>
            </div>

            <h3 className="glitch-title card-glitch-title" data-text={item.name}>
              {item.name}
            </h3>

            <p className="arsenal-desc">{item.desc}</p>

            {item.features && item.features.length > 0 && (
              <ul className="f arsenal-mini-features">
                {item.features.slice(0, 3).map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
            )}

            <div className="tools-badge mono">
              <span className="cyan">TOOLCHAIN:</span> {item.tools}
            </div>

            <div className="card-spec-cta mono">
              <span>[ VIEW ARCHITECTURE SPEC &gt; ]</span>
            </div>
          </article>
        ))}
      </div>

      {filteredItems.length === 0 && (
        <div className="arsenal-empty-state mono">
          [!] No arsenal items match query "{searchQuery}" under current tab filter.
        </div>
      )}

      {/* Interactive Vulnerability Audit Simulator */}
      <div className="vuln-simulator-box" data-target-box>
        <div className="sim-header">
          <div className="sim-title">
            <span className="pulse-dot" />
            <span className="mono">INTERACTIVE ETHICAL HACKING AUDIT SIMULATOR</span>
          </div>
          <span className="mono text-muted">[SIMULATION SANDBOX]</span>
        </div>

        <div className="sim-controls">
          <div className="sim-target-select">
            <label htmlFor="target-select" className="mono">TARGET_SYSTEM:</label>
            <select
              id="target-select"
              value={selectedTarget.id}
              onChange={(e) => {
                const found = SCAN_TARGETS.find((t) => t.id === e.target.value);
                if (found) setSelectedTarget(found);
              }}
              disabled={scanning}
            >
              {SCAN_TARGETS.map((t) => (
                <option key={t.id} value={t.id}>{t.label}</option>
              ))}
            </select>
          </div>

          <button
            type="button"
            className={`btn ${scanning ? "scanning" : "solid"}`}
            onClick={runAudit}
            disabled={scanning}
          >
            {scanning ? "AUDITING IN PROGRESS..." : "⚡ RUN ETHICAL AUDIT"}
          </button>
        </div>

        {scanLogs.length > 0 && (
          <div className="sim-terminal-screen mono">
            {scanLogs.map((log, i) => (
              <div
                key={i}
                className={`sim-log-line ${
                  log.includes("ERR") || log.includes("[!]")
                    ? "log-warn"
                    : log.includes(">>>") || log.includes("[✓]")
                    ? "log-success"
                    : "log-info"
                }`}
              >
                {log}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Expanded Project Architecture & Technical Spec Modal */}
      {selectedProject && (
        <div className="arsenal-modal-backdrop" onClick={closeSpecModal} role="dialog" aria-modal="true">
          <div
            className="arsenal-modal-window"
            onClick={(e) => e.stopPropagation()}
            data-target-box
          >
            <div className="modal-top-bar">
              <div className="modal-title-wrap">
                <span className="pulse-dot" />
                <span className="mono text-cyan">[SPEC_AUDIT: {selectedProject.code}]</span>
              </div>
              <button
                type="button"
                className="modal-close-btn mono"
                onClick={closeSpecModal}
                aria-label="Close specification modal"
              >
                [ESC / ×]
              </button>
            </div>

            <div className="modal-scroll-content">
              <div className="modal-header-hero">
                <div className="modal-badge-row mono">
                  <span className={`st ${selectedProject.status === "PLANNED" ? "st-planned" : "st-verified"}`}>
                    [ STATUS: {selectedProject.status} ]
                  </span>
                  <span className="text-muted">
                    CATEGORY: {selectedProject.categories.join(" / ").toUpperCase()}
                  </span>
                </div>
                <h2 className="modal-project-title glitch-title" data-text={selectedProject.name}>
                  {selectedProject.name}
                </h2>
                <p className="modal-project-lede">{selectedProject.desc}</p>
              </div>

              {selectedProject.problemStatement && (
                <div className="modal-section">
                  <h4 className="mono text-cyan">// 01. OVERVIEW &amp; PROBLEM STATEMENT</h4>
                  <p>{selectedProject.problemStatement}</p>
                </div>
              )}

              {selectedProject.objectives && (
                <div className="modal-section">
                  <h4 className="mono text-cyan">// 02. OBJECTIVES &amp; INTENDED USERS</h4>
                  <p>{selectedProject.objectives}</p>
                </div>
              )}

              {selectedProject.features && (
                <div className="modal-section">
                  <h4 className="mono text-cyan">// 03. KEY FEATURES &amp; CAPABILITIES</h4>
                  <ul className="f modal-feature-list">
                    {selectedProject.features.map((feat, i) => (
                      <li key={i}>{feat}</li>
                    ))}
                  </ul>
                </div>
              )}

              {selectedProject.architecture && (
                <div className="modal-section">
                  <h4 className="mono text-cyan">// 04. ARCHITECTURE &amp; DATA FLOW DIAGRAM</h4>
                  <pre className="modal-arch-diagram mono">{selectedProject.architecture}</pre>
                </div>
              )}

              <div className="modal-section">
                <h4 className="mono text-cyan">// 05. TECHNOLOGY STACK &amp; TOOLCHAIN</h4>
                <div className="tools-badge mono modal-tools">
                  <span className="cyan">STACK:</span> {selectedProject.tools}
                </div>
              </div>

              {selectedProject.milestones && (
                <div className="modal-section">
                  <h4 className="mono text-cyan">// 06. DEVELOPMENT MILESTONES &amp; ROADMAP</h4>
                  <ul className="f modal-feature-list">
                    {selectedProject.milestones.map((m, i) => (
                      <li key={i}>{m}</li>
                    ))}
                  </ul>
                </div>
              )}

              {selectedProject.testingStrategy && (
                <div className="modal-section">
                  <h4 className="mono text-cyan">// 07. TESTING &amp; VERIFICATION STRATEGY</h4>
                  <p className="text-muted">{selectedProject.testingStrategy}</p>
                </div>
              )}

              {selectedProject.ethicalBoundaries && (
                <div className="modal-section ethical-notice-box">
                  <h4 className="mono text-green">// 08. SECURITY &amp; ETHICAL LAB BOUNDARIES</h4>
                  <p className="mono">{selectedProject.ethicalBoundaries}</p>
                </div>
              )}
            </div>

            <div className="modal-footer-bar">
              <button
                type="button"
                className="btn solid mono"
                onClick={closeSpecModal}
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
