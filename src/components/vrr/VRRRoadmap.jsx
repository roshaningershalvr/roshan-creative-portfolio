import { VRR_ROADMAP_PHASES } from "../../data/vrrData.js";

export default function VRRRoadmap() {
  return (
    <section className="vrr-roadmap-section">
      <div className="vrr-sec-header">
        <span className="mono text-cyan">// 04. DEVELOPMENT ROADMAP &amp; HORIZONS</span>
        <h2 className="vrr-sec-title">PHASED EXECUTION FROM MVP TO INFRASTRUCTURE</h2>
        <p className="vrr-sec-lede">
          From a focused single-user career intelligence tool to enterprise workforce analytics and regional labor economic modeling.
        </p>
      </div>

      <div className="vrr-roadmap-timeline">
        {VRR_ROADMAP_PHASES.map((phase, idx) => (
          <div key={phase.phase} className="roadmap-phase-card" data-target-box>
            <div className="phase-marker mono">
              <span className="marker-dot" />
              <span className="marker-line" />
            </div>

            <div className="phase-card-content">
              <div className="phase-meta mono">
                <span className="phase-badge text-green">{phase.phase}</span>
                <span className="phase-horizon text-cyan">[{phase.horizon}]</span>
                <span className={`st st-${phase.statusType}`}>[ {phase.status} ]</span>
              </div>

              <h3 className="phase-title text-fg">{phase.title}</h3>

              <div className="phase-audience mono text-muted">
                <span className="text-cyan">TARGET BENEFICIARY:</span> {phase.audience}
              </div>

              <p className="phase-obj">{phase.objective}</p>

              <div className="phase-deliverables mono">
                <span className="text-cyan">// DELIVERABLES &amp; CAPABILITIES:</span>
                <ul>
                  {phase.deliverables.map((d, i) => (
                    <li key={i}>▹ {d}</li>
                  ))}
                </ul>
              </div>

              <div className="phase-footer-meta mono">
                <div><strong className="text-warn">CHALLENGES:</strong> {phase.technicalChallenges}</div>
                <div className="mt-8"><strong className="text-green">SUCCESS METRICS:</strong> {phase.metrics}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
