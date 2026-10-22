import { useState, useEffect } from "react";
import VRRHero3D from "./VRRHero3D.jsx";
import VRROverview from "./VRROverview.jsx";
import VRRInnovationLab from "./VRRInnovationLab.jsx";
import VRRArchitecture from "./VRRArchitecture.jsx";
import VRRRoadmap from "./VRRRoadmap.jsx";
import VRRIntelligenceML from "./VRRIntelligenceML.jsx";
import VRRSimulation from "./VRRSimulation.jsx";
import VRRSecurityResponsibleAI from "./VRRSecurityResponsibleAI.jsx";
import VRRBusinessModel from "./VRRBusinessModel.jsx";
import VRRVision from "./VRRVision.jsx";
import { VRR_HERO_NODES } from "../../data/vrrData.js";
import { cyberAudio } from "../../utils/cyberAudio.js";

export default function VRRView({ calm, onBack, onTriggerGlitch }) {
  const [selectedNode, setSelectedNode] = useState(VRR_HERO_NODES[0]); // default to Human Skills
  const [sfxOn, setSfxOn] = useState(() => cyberAudio.isEnabled());

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleSelectNode = (node) => {
    setSelectedNode(node);
    cyberAudio.playLock();
  };

  const toggleSfx = () => {
    const next = cyberAudio.toggle();
    setSfxOn(next);
  };

  return (
    <div className="vrr-experience-wrap">
      {/* VRR Top Fixed / Sticky Control Bar */}
      <nav className="vrr-top-nav mono" data-target-box>
        <div className="vrr-nav-left">
          <button
            type="button"
            className="vrr-back-btn"
            onClick={() => {
              cyberAudio.playTyping();
              onBack();
            }}
          >
            ← BACK TO PORTFOLIO
          </button>

          <div className="vrr-nav-brand">
            <span className="pulse-dot" />
            <span className="text-green font-bold">VRR // WOS_v1.0</span>
            <span className="text-muted hidden-mobile">AI WORKFORCE OS</span>
          </div>
        </div>

        <div className="vrr-nav-links hidden-mobile">
          <a href="#3d-core">3D_CORE</a>
          <a href="#overview">OVERVIEW</a>
          <a href="#innovations">INNOVATION_LAB</a>
          <a href="#architecture">SYSTEM_MAP</a>
          <a href="#simulation">SIMULATION</a>
          <a href="#roadmap">ROADMAP</a>
          <a href="#ml-engine">ML_BENCHMARK</a>
          <a href="#security">SECURITY</a>
          <a href="#vision">VISION</a>
        </div>

        <div className="vrr-nav-right">
          <button
            type="button"
            className="vrr-nav-btn sfx-btn"
            onClick={toggleSfx}
            title="Toggle Synthesized Cyber SFX"
          >
            SFX: {sfxOn ? "[LIVE]" : "[MUTED]"}
          </button>

          {onTriggerGlitch && (
            <button
              type="button"
              className="vrr-nav-btn glitch-btn"
              onClick={onTriggerGlitch}
              title="Inject simulated error glitch overload"
            >
              ⚡ GLITCH
            </button>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <header id="3d-core" className="vrr-hero-section">
        <div className="vrr-hero-heading-block">
          <div className="vrr-pre-title mono">
            <span className="text-cyan">// STARTUP FOUNDATION // ROSHAN INGGERSHAL VR</span>
            <span className="text-muted">[ STATUS: EARLY STAGE PROTOTYPE ]</span>
          </div>

          <h1 className="vrr-main-title card-glitch-title" data-text="VRR // AI WORKFORCE OPERATING SYSTEM">
            VRR // AI WORKFORCE OPERATING SYSTEM
          </h1>

          <p className="vrr-hero-subtitle">
            Intelligence infrastructure for the future of work. Connecting human skills, career trajectories,
            employer demand, and economic intelligence into one continuously learning system.
          </p>

          <div className="vrr-hero-metrics-strip mono">
            <span className="metric-tag"><span className="text-green">PROTOTYPE:</span> WOS ML 61-REC BENCHMARK</span>
            <span className="metric-tag"><span className="text-cyan">TOP-1 ACC:</span> 98.36% (E5)</span>
            <span className="metric-tag"><span className="text-warn">MISSION:</span> INFRASTRUCTURE, NOT AN APP</span>
          </div>
        </div>

        {/* 3D Interactive Workforce Network */}
        <div className="vrr-hero-3d-wrapper">
          <VRRHero3D
            calm={calm}
            onSelectNode={handleSelectNode}
            selectedNodeId={selectedNode?.id}
          />

          {/* Interactive Selected Node Inspector Panel */}
          {selectedNode && (
            <div className="vrr-node-inspector-card mono" data-target-box>
              <div className="inspector-top-tag">
                <span className="text-cyan">INSPECTING NODE // {selectedNode.tag}</span>
                <span className="text-green">[{selectedNode.phase}]</span>
              </div>
              <h3 className="node-inspect-title text-green">{selectedNode.name}</h3>
              <p className="node-inspect-desc">{selectedNode.desc}</p>
              <div className="node-meta-grid">
                <div><strong className="text-muted">INPUTS:</strong> {selectedNode.inputs}</div>
                <div><strong className="text-muted">OUTPUTS:</strong> {selectedNode.outputs}</div>
                <div className="full-span"><strong className="text-cyan">SYSTEM ROLE:</strong> {selectedNode.systemRole}</div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Product Overview */}
      <div id="overview">
        <VRROverview />
      </div>

      {/* Detailed MVP Workflow (7 Steps) */}
      <section className="vrr-mvp-workflow-section">
        <div className="vrr-sec-header">
          <span className="mono text-cyan">// MVP PRODUCT JOURNEY: 7-STEP RECURSIVE PIPELINE</span>
          <h2 className="vrr-sec-title">FROM RESUME INTAKE TO VERIFIED RESKILLING</h2>
        </div>

        <div className="mvp-steps-grid mono">
          <div className="mvp-step-card" data-target-box>
            <div className="step-num text-cyan">STEP 01</div>
            <div className="step-title text-green">RESUME INPUT</div>
            <p>User supplies raw resume PDF, text, or profile credentials via web interface.</p>
          </div>
          <div className="mvp-step-card" data-target-box>
            <div className="step-num text-cyan">STEP 02</div>
            <div className="step-title text-green">SKILL EXTRACTION</div>
            <p>Deterministic lexical parsing combined with dense sentence embeddings extracts verified capabilities.</p>
          </div>
          <div className="mvp-step-card" data-target-box>
            <div className="step-num text-cyan">STEP 03</div>
            <div className="step-title text-green">SKILL PROFILE</div>
            <p>Generates an interactive, editable user skill graph for human-in-the-loop validation and correction.</p>
          </div>
          <div className="mvp-step-card" data-target-box>
            <div className="step-num text-cyan">STEP 04</div>
            <div className="step-title text-green">CAREER INTELLIGENCE</div>
            <p>Cosine similarity matching ranks highest-affinity career roles based on vector proximity.</p>
          </div>
          <div className="mvp-step-card" data-target-box>
            <div className="step-num text-cyan">STEP 05</div>
            <div className="step-title text-green">SKILL-GAP ANALYSIS</div>
            <p>Identifies exact vector delta between current profile and target role, weighted by market demand velocity.</p>
          </div>
          <div className="mvp-step-card" data-target-box>
            <div className="step-num text-cyan">STEP 06</div>
            <div className="step-title text-green">LEARNING ROADMAP</div>
            <p>Builds a directed acyclic graph (DAG) of prerequisite milestones and portfolio capstone projects.</p>
          </div>
          <div className="mvp-step-card" data-target-box>
            <div className="step-num text-cyan">STEP 07</div>
            <div className="step-title text-green">FEEDBACK LOOP</div>
            <p>Records real-world interview and transition outcomes, feeding back into embedding calibration.</p>
          </div>
        </div>
      </section>

      {/* Innovation Lab (8 Modules) */}
      <div id="innovations">
        <VRRInnovationLab />
      </div>

      {/* System Architecture (5 Layers) */}
      <div id="architecture">
        <VRRArchitecture />
      </div>

      {/* Interactive System Simulation */}
      <div id="simulation">
        <VRRSimulation />
      </div>

      {/* Phased Roadmap */}
      <div id="roadmap">
        <VRRRoadmap />
      </div>

      {/* ML Intelligence & Real Benchmarks */}
      <div id="ml-engine">
        <VRRIntelligenceML />
      </div>

      {/* Security & Responsible AI */}
      <div id="security">
        <VRRSecurityResponsibleAI />
      </div>

      {/* Business Model */}
      <div id="business">
        <VRRBusinessModel />
      </div>

      {/* Founder's Vision */}
      <div id="vision">
        <VRRVision onBackToPortfolio={onBack} />
      </div>

      {/* Sticky Bottom Return Bar */}
      <footer className="vrr-bottom-bar mono">
        <span>VRR // AI WORKFORCE OPERATING SYSTEM · FOUNDED BY ROSHAN INGGERSHAL VR</span>
        <button
          type="button"
          className="btn-bottom-return text-green"
          onClick={() => {
            cyberAudio.playTyping();
            onBack();
          }}
        >
          [ ↑ BACK TO PORTFOLIO ]
        </button>
      </footer>
    </div>
  );
}
