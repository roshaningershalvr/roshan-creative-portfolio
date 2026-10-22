import { useState } from "react";
import { VRR_INNOVATION_MODULES } from "../../data/vrrData.js";
import { cyberAudio } from "../../utils/cyberAudio.js";

export default function VRRInnovationLab() {
  const [selectedModule, setSelectedModule] = useState(null);

  const openModule = (mod) => {
    setSelectedModule(mod);
    cyberAudio.playLock();
  };

  const closeModal = () => {
    setSelectedModule(null);
    cyberAudio.playTyping();
  };

  return (
    <section className="vrr-innovations-section">
      <div className="vrr-sec-header">
        <span className="mono text-cyan">// 02. INNOVATION LAB: THE FUTURE OF WORK</span>
        <h2 className="vrr-sec-title">EIGHT ARCHITECTURAL INNOVATION MODULES</h2>
        <p className="vrr-sec-lede">
          A modular intelligence architecture transforming raw human credentials and volatile market signals into calibrated economic intelligence.
          Click any module to inspect inputs, outputs, mathematical methods, and development stages.
        </p>
      </div>

      <div className="innovations-grid">
        {VRR_INNOVATION_MODULES.map((mod) => (
          <article
            key={mod.id}
            className="vrr-mod-card"
            data-target-box
            onClick={() => openModule(mod)}
            title="Click to inspect module architecture, methods, and limitations"
          >
            <div className="sweep" />
            <div className="card-laser-line" />

            <div className="mod-card-top mono">
              <span className="mod-num text-cyan">INNOVATION {mod.num}</span>
              <span className={`st st-${mod.stageType}`}>[ {mod.stage} ]</span>
            </div>

            <h3 className="mod-title text-green card-glitch-title" data-text={mod.title}>
              {mod.title}
            </h3>

            <div className="mod-flow-tag mono text-muted">
              <code>{mod.flow}</code>
            </div>

            <p className="mod-summary">{mod.summary}</p>

            <div className="mod-card-cta mono">
              <span>[ VIEW SYSTEM SPECIFICATION &gt; ]</span>
            </div>
          </article>
        ))}
      </div>

      {/* Module Specification Modal */}
      {selectedModule && (
        <div
          className="arsenal-modal-backdrop"
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="arsenal-modal-window vrr-modal-window"
            onClick={(e) => e.stopPropagation()}
            data-target-box
          >
            <div className="modal-top-bar">
              <div className="modal-title-wrap">
                <span className="pulse-dot" />
                <span className="mono text-cyan">
                  [INNOVATION_SPEC: {selectedModule.num} // {selectedModule.tag}]
                </span>
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
                  <span className={`st st-${selectedModule.stageType}`}>
                    [ STATUS: {selectedModule.stage} ]
                  </span>
                  <span className="text-muted">MODULE: {selectedModule.tag}</span>
                </div>
                <h2 className="modal-project-title glitch-title" data-text={selectedModule.title}>
                  {selectedModule.title}
                </h2>
                <div className="modal-flow-box mono text-green">
                  FLOW: {selectedModule.flow}
                </div>
              </div>

              {/* Problem Addressed */}
              <div className="modal-section">
                <h4 className="mono text-cyan">// 01. PROBLEM ADDRESSED</h4>
                <p>{selectedModule.problem}</p>
              </div>

              {/* Proposed Solution */}
              <div className="modal-section">
                <h4 className="mono text-cyan">// 02. ARCHITECTURAL SOLUTION</h4>
                <p>{selectedModule.solution}</p>
              </div>

              {/* Inputs & Outputs */}
              <div className="modal-section">
                <h4 className="mono text-cyan">// 03. SYSTEM INPUTS &amp; OUTPUTS</h4>
                <div className="dataml-origin-box mono">
                  <div><strong>INPUTS:</strong> {selectedModule.inputsOutputs.inputs}</div>
                  <div className="mt-8"><strong>OUTPUTS:</strong> {selectedModule.inputsOutputs.outputs}</div>
                </div>
              </div>

              {/* Methods & Algorithms */}
              <div className="modal-section">
                <h4 className="mono text-cyan">// 04. AI / ML METHODS &amp; BENCHMARKS</h4>
                <p>{selectedModule.methods}</p>
              </div>

              {/* Scientific Limitations */}
              <div className="modal-section">
                <h4 className="mono text-warn">// 05. CURRENT LIMITATIONS &amp; ETHICAL BOUNDARIES</h4>
                <div className="security-remaining-box mono">
                  <p style={{ margin: 0 }}>{selectedModule.limitations}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
