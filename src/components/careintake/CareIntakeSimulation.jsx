import { useState } from "react";
import { CAREINTAKE_SIMULATION_CASES } from "../../data/careintakeData.js";
import { cyberAudio } from "../../utils/cyberAudio.js";

export default function CareIntakeSimulation() {
  const [selectedCase, setSelectedCase] = useState(CAREINTAKE_SIMULATION_CASES[0]);

  const handleSelectCase = (c) => {
    setSelectedCase(c);
    cyberAudio.playLock();
  };

  return (
    <section className="vrr-simulation-section">
      <div className="vrr-sec-header">
        <span className="mono text-cyan">// INTERACTIVE CLINICAL WORKFLOW SANDBOX</span>
        <h2 className="vrr-sec-title">CLINICAL HISTORY & AYUSH INTAKE TESTBED</h2>
        <p className="vrr-sec-lede">
          Experience how unstructured patient chief complaints are structured into adaptive SOCRATES chronologies,
          correlated with AYUSH lifestyle markers, and synthesized into draft notes for clinician review.
        </p>
      </div>

      <div className="vrr-sim-scenarios-strip mono" data-target-box>
        <span className="text-muted text-xs">SAMPLE OPD INTAKE CASES:</span>
        {CAREINTAKE_SIMULATION_CASES.map((c) => {
          const isActive = selectedCase.id === c.id;
          return (
            <button
              key={c.id}
              type="button"
              className={`sim-persona-pill ${isActive ? "active" : ""}`}
              onClick={() => handleSelectCase(c)}
            >
              <span>{c.name.split(":")[0]}</span>
            </button>
          );
        })}
      </div>

      <div className="vrr-sim-sandbox-grid">
        {/* Left Column: Patient Complaint & SOCRATES Breakdown */}
        <div className="sim-profile-card mono" data-target-box>
          <div className="sim-card-top-tag text-cyan">
            <span>PATIENT CHIEF COMPLAINT & SOCRATES CHRONOLOGY</span>
            <span className="text-muted">[ KIOSK INTAKE ]</span>
          </div>

          <div className="p-8 bg-surface border border-line mb-16">
            <div className="text-xs text-muted">PATIENT PROFILE:</div>
            <div className="text-sm font-bold text-fg mt-2">{selectedCase.patient}</div>
          </div>

          <div className="mb-16">
            <div className="text-xs text-muted mb-4">RAW RECORDED COMPLAINT:</div>
            <p className="text-xs text-fg leading-relaxed bg-surface p-8 border border-line">
              &quot;{selectedCase.chiefComplaint}&quot;
            </p>
          </div>

          <div className="mb-16">
            <div className="text-xs text-muted mb-4">ADAPTIVE SOCRATES DECOMPOSITION:</div>
            <div className="text-xs text-fg leading-relaxed bg-surface p-8 border border-line space-y-2">
              {selectedCase.socratesSummary.split("|").map((segment, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <span className="text-cyan font-bold">▹</span>
                  <span>{segment.trim()}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-8 bg-surface border border-line">
            <div className="text-xs text-muted mb-2">AYUSH LIFESTYLE & VITALITY CORRELATION:</div>
            <div className="text-xs text-fg space-y-2">
              <div><strong className="text-cyan">Prakriti:</strong> {selectedCase.ayushMetrics.prakriti}</div>
              <div><strong className="text-muted">Ahara-Vihara:</strong> {selectedCase.ayushMetrics.aharaVihara}</div>
              <div><strong className="text-muted">Dashavidha:</strong> {selectedCase.ayushMetrics.dashavidha}</div>
            </div>
          </div>
        </div>

        {/* Right Column: Synthesized Doctor Draft & Safety Guardrails */}
        <div className="sim-results-card mono" data-target-box>
          <div className="sim-card-top-tag text-green">
            <span>SYNTHESIZED CLINICIAN CONSULTATION DRAFT</span>
            <span className="text-muted">[ 30-SEC DOCTOR REVIEW ]</span>
          </div>

          <div className="p-12 bg-surface border border-line mb-16">
            <div className="text-xs text-muted mb-4">STRUCTURED CLINICAL SUMMARY (FOR PHYSICIAN REVIEW):</div>
            <p className="text-xs text-fg leading-relaxed">
              {selectedCase.draftSummary}
            </p>
          </div>

          {/* Strict Clinical Safety Boundary Guardrail */}
          <div
            className="p-12 mb-16 border"
            style={{
              background: "rgba(0, 229, 255, 0.08)",
              borderColor: "var(--cyan)",
            }}
          >
            <div className="flex items-center gap-6 text-xs font-bold text-cyan mb-4">
              <span>🛡️ CLINICAL SAFETY BOUNDARY ENFORCED</span>
            </div>
            <p className="text-xs text-fg leading-relaxed">
              {selectedCase.clinicalSafetyNote} Autonomous diagnosis and prescription generation are strictly prohibited
              in code. The system acts solely as a structured clinical scribe.
            </p>
          </div>

          <div className="sim-milestone-roadmap pt-12 border-t border-line">
            <div className="text-xs text-muted mb-6">STANDARDS COMPLIANCE MATRIX:</div>
            <div className="grid grid-cols-3 gap-8 text-center text-xs">
              <div className="p-4 bg-surface border border-line">
                <div className="text-cyan font-bold">FHIR R4</div>
                <div className="text-muted text-xxs">JSON SCHEMA</div>
              </div>
              <div className="p-4 bg-surface border border-line">
                <div className="text-green font-bold">ABHA</div>
                <div className="text-muted text-xxs">M1/M2 LINKED</div>
              </div>
              <div className="p-4 bg-surface border border-line">
                <div className="text-warn font-bold">ZERO PHI</div>
                <div className="text-muted text-xxs">CLIENT PURGE</div>
              </div>
            </div>
          </div>

          <div className="text-xs text-muted mt-12 pt-8 border-t border-line">
            * Demonstrated using synthetic anonymized clinical scenarios. No actual patient health information is processed or persisted.
          </div>
        </div>
      </div>
    </section>
  );
}
