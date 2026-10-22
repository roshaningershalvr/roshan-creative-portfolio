import { useState } from "react";
import { VRR_SIMULATION_PERSONAS } from "../../data/vrrData.js";
import { cyberAudio } from "../../utils/cyberAudio.js";

export default function VRRSimulation() {
  const [selectedPersonaId, setSelectedPersonaId] = useState(VRR_SIMULATION_PERSONAS[0].id);
  const [demandMultiplier, setDemandMultiplier] = useState(1.0);

  const persona = VRR_SIMULATION_PERSONAS.find((p) => p.id === selectedPersonaId) || VRR_SIMULATION_PERSONAS[0];

  // Dynamic calculation based on demand weight slider
  const dynamicReadiness = Math.min(
    95,
    Math.max(25, (persona.baseReadiness * (1 + (demandMultiplier - 1.0) * 0.12)).toFixed(1))
  );

  return (
    <div className="vrr-simulation-wrapper" data-target-box>
      <div className="sim-header-row mono">
        <div className="sim-title-wrap">
          <span className="pulse-dot" />
          <span className="text-cyan">// SYSTEM SIMULATION: EXPLORE THE WORKFORCE ENGINE</span>
        </div>
        <span className="sim-badge text-muted">[ DETERMINISTIC WOS ML BENCHMARK HARNESS ]</span>
      </div>

      <p className="sim-lede">
        Test how the intelligence engine embeds candidate profiles, computes cosine similarity against target roles,
        quantifies automation exposure, and dynamically prioritizes learning roadmaps based on real-time market demand signals.
      </p>

      {/* Persona Selector Tabs */}
      <div className="sim-personas-bar">
        <span className="mono text-muted label-prefix">SELECT CANDIDATE:</span>
        <div className="sim-persona-buttons">
          {VRR_SIMULATION_PERSONAS.map((p) => (
            <button
              key={p.id}
              type="button"
              className={`sim-persona-btn mono ${p.id === selectedPersonaId ? "active" : ""}`}
              onClick={() => {
                setSelectedPersonaId(p.id);
                cyberAudio.playTyping();
              }}
            >
              {p.name}
            </button>
          ))}
        </div>
      </div>

      {/* Main Simulation Workbench */}
      <div className="sim-workbench-grid">
        {/* Left Column: Candidate & Target Role Vector Delta */}
        <div className="sim-col sim-profile-card">
          <div className="card-top-tag mono">
            <span className="text-cyan">CANDIDATE VECTOR</span>
            <span className="text-muted">{persona.experience}</span>
          </div>

          <h4 className="persona-role-title text-green">{persona.name}</h4>

          <div className="sim-field-group">
            <span className="field-label mono text-muted">EXTRACTED CANDIDATE SKILLS:</span>
            <div className="chips-wrap">
              {persona.currentSkills.map((s) => (
                <span key={s} className="skill-chip current mono">
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div className="sim-field-group mt-12">
            <span className="field-label mono text-muted">TARGET CAREER ASPIRATION:</span>
            <div className="target-role-badge mono text-cyan">{persona.targetRole}</div>
          </div>

          <div className="sim-field-group mt-12">
            <span className="field-label mono text-muted">REQUIRED ROLE PROFILE:</span>
            <div className="chips-wrap">
              {persona.targetSkills.map((s) => (
                <span key={s} className="skill-chip target mono">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Algorithmic Scorer & Dynamic Demand Slider */}
        <div className="sim-col sim-results-card">
          <div className="card-top-tag mono">
            <span className="text-cyan">INTELLIGENCE SCORER</span>
            <span className="text-green">MODEL: intfloat/e5-base-v2</span>
          </div>

          {/* Readiness Score Gauge */}
          <div className="score-gauge-row">
            <div className="gauge-metric">
              <span className="mono text-muted">ROLE READINESS:</span>
              <div className="metric-val text-green mono">{dynamicReadiness}%</div>
            </div>
            <div className="gauge-metric">
              <span className="mono text-muted">AUTOMATION EXPOSURE:</span>
              <div className="metric-val text-warn mono">{persona.automationExposure}%</div>
            </div>
          </div>

          <div className="sim-exposure-note mono text-muted">
            <span className="text-warn">[!] TASK EXPOSURE NOTE:</span> {persona.exposureNote}
          </div>

          {/* Interactive Demand Weight Slider */}
          <div className="demand-slider-box mono">
            <div className="slider-label-row">
              <label htmlFor="demand-slider">MARKET DEMAND SIGNAL MULTIPLIER:</label>
              <span className="text-cyan">{demandMultiplier.toFixed(2)}x VELOCITY</span>
            </div>
            <input
              id="demand-slider"
              type="range"
              min="0.5"
              max="2.0"
              step="0.05"
              value={demandMultiplier}
              onChange={(e) => setDemandMultiplier(parseFloat(e.target.value))}
            />
            <div className="slider-bounds">
              <span>0.5x (Depressed Demand)</span>
              <span>1.0x (Baseline)</span>
              <span>2.0x (Critical Surge)</span>
            </div>
          </div>

          {/* Delta Breakdown */}
          <div className="delta-breakdown-row mono">
            <div className="delta-box matched">
              <span className="delta-title text-green">MATCHED QUALIFICATIONS:</span>
              <ul>
                {persona.matchedSkills.map((m) => (
                  <li key={m}>✓ {m}</li>
                ))}
              </ul>
            </div>
            <div className="delta-box missing">
              <span className="delta-title text-warn">PRIORITIZED SKILL GAPS:</span>
              <ul>
                {persona.missingSkills.map((m) => (
                  <li key={m}>✗ {m}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Generated 3-Stage Adaptive Learning Roadmap */}
      <div className="sim-roadmap-section">
        <div className="roadmap-sec-title mono text-cyan">
          // GENERATED ADAPTIVE RESKILLING ROADMAP (PROJECT-BASED MILESTONES)
        </div>
        <div className="sim-roadmap-grid">
          {persona.roadmap.map((stage, idx) => (
            <div key={idx} className="sim-roadmap-card mono" data-target-box>
              <div className="roadmap-phase-num text-cyan">MILESTONE 0{idx + 1}</div>
              <div className="roadmap-timeframe text-green">{stage.week}</div>
              <div className="roadmap-focus text-fg">{stage.focus}</div>
              <div className="roadmap-proj-box">
                <span className="text-muted">HANDS-ON CAPSTONE:</span>
                <p>{stage.project}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
