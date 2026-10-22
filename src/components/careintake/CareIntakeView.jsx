import { useState, useEffect } from "react";
import CareIntakeHero3D from "./CareIntakeHero3D.jsx";
import CareIntakeArchitecture from "./CareIntakeArchitecture.jsx";
import CareIntakeSimulation from "./CareIntakeSimulation.jsx";
import { CAREINTAKE_HERO_NODES, CAREINTAKE_SECURITY_CONTROLS, CAREINTAKE_ROADMAP } from "../../data/careintakeData.js";
import { cyberAudio } from "../../utils/cyberAudio.js";

export default function CareIntakeView({ calm, onBack, onTriggerGlitch }) {
  const [selectedNode, setSelectedNode] = useState(CAREINTAKE_HERO_NODES[0]);
  const [sfxOn, setSfxOn] = useState(() => cyberAudio.isEnabled());

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
    <div className="vrr-experience-wrap careintake-theme">
      {/* Top Fixed / Sticky Control Bar */}
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
            <span className="pulse-dot" style={{ background: "#00e5ff", boxShadow: "0 0 10px #00e5ff" }} />
            <span className="text-cyan font-bold">CAREINTAKE // CLINICAL_OS</span>
            <span className="text-muted hidden-mobile">AI CLINICAL HISTORY KIOSK</span>
          </div>
        </div>

        <div className="vrr-nav-links hidden-mobile">
          <a href="#3d-intake">3D_INTAKE</a>
          <a href="#overview">OVERVIEW</a>
          <a href="#socrates">SOCRATES</a>
          <a href="#ayush">AYUSH_EXAM</a>
          <a href="#architecture">SYSTEM_MAP</a>
          <a href="#simulation">SIMULATION</a>
          <a href="#safety">SAFETY_BOUNDARY</a>
          <a href="#security">SECURITY</a>
          <a href="#roadmap">ROADMAP</a>
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
      <header id="3d-intake" className="vrr-hero-section">
        <div className="vrr-hero-heading-block">
          <div className="vrr-pre-title mono">
            <span className="text-cyan">// CLINICAL HEALTHCARE AI // DESIGNED FOR AIIA · MINISTRY OF AYUSH</span>
            <span className="text-muted">[ STATUS: MVP CORE VALIDATED · OPD PILOT READY ]</span>
          </div>

          <h1 className="vrr-main-title card-glitch-title" data-text="CAREINTAKE // CLINICAL HISTORY INTELLIGENCE">
            CAREINTAKE // CLINICAL HISTORY INTELLIGENCE
          </h1>

          <p className="vrr-hero-subtitle">
            Structured patient history before the clinician consultation. AI-assisted touch and voice kiosk designed
            for AYUSH Outpatient Departments to maximize doctor-patient face-to-face consultation depth.
          </p>

          <div className="vrr-hero-metrics-strip mono">
            <span className="metric-tag"><span className="text-cyan">INQUIRY FRAMEWORK:</span> ADAPTIVE SOCRATES</span>
            <span className="metric-tag"><span className="text-green">AYUSH DOMAIN:</span> DASHAVIDHA + PRAKRITI</span>
            <span className="metric-tag"><span className="text-warn">CLINICAL SAFETY:</span> ZERO AUTONOMOUS PRESCRIBING</span>
          </div>
        </div>

        {/* 3D Interactive Clinical Topology */}
        <div className="vrr-hero-3d-wrapper">
          <CareIntakeHero3D
            calm={calm}
            onSelectNode={handleSelectNode}
            selectedNodeId={selectedNode?.id}
          />

          {selectedNode && (
            <div className="vrr-node-inspector-card mono" data-target-box style={{ borderColor: "#00e5ff" }}>
              <div className="inspector-top-tag">
                <span className="text-cyan">INSPECTING CLINICAL SUBSYSTEM // {selectedNode.tag}</span>
                <span className="text-green">[{selectedNode.status}]</span>
              </div>
              <h3 className="node-inspect-title text-cyan">{selectedNode.name}</h3>
              <p className="node-inspect-desc">{selectedNode.desc}</p>
              <div className="node-meta-grid">
                <div><strong className="text-muted">CLINICAL INPUTS:</strong> {selectedNode.inputs}</div>
                <div><strong className="text-muted">STANDARDIZED OUTPUTS:</strong> {selectedNode.outputs}</div>
                <div className="full-span"><strong className="text-cyan">SYSTEM ROLE:</strong> {selectedNode.systemRole}</div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Overview & Healthcare Context */}
      <section id="overview" className="vrr-sec-header">
        <span className="mono text-cyan">// THE CLINICAL MOTIVATION</span>
        <h2 className="vrr-sec-title">RECLAIMING TIME IN OVERBURDENED AYUSH OPDS</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-16 text-sm text-fg leading-relaxed">
          <div className="p-16 bg-surface border border-line" data-target-box>
            <h4 className="text-cyan mono font-bold mb-8">THE PROBLEM: TIME-CONSTRAINED CONSULTATIONS</h4>
            <p>
              In premier tertiary institutes like the All India Institute of Ayurveda (AIIA) and national AYUSH hospitals,
              clinicians examine upwards of 60 to 100 outpatient cases each morning. Doctors spend more than 60% of consultation
              time recording basic demographics, onset dates, dietary habits, and bowel movements, leaving minimal time for
              deep physical pulse examination (Nadi Pariksha) and individualized lifestyle counseling.
            </p>
          </div>

          <div className="p-16 bg-surface border border-line" data-target-box>
            <h4 className="text-green mono font-bold mb-8">THE CAREINTAKE MODEL: PRE-CONSULTATION INTAKE</h4>
            <p>
              CareIntake acts as a structured pre-consultation scribe kiosk in waiting areas. While awaiting their turn, patients
              use voice or high-contrast touchscreens to complete structured symptom chronologies, Ahara-Vihara lifestyle
              inventories, and CCRAS Prakriti questionnaires. A synthesized one-page clinical draft is immediately available on
              the doctor’s screen as the patient enters.
            </p>
          </div>
        </div>
      </section>

      {/* Adaptive SOCRATES Questioning */}
      <section id="socrates" className="vrr-sec-header mt-32">
        <span className="mono text-cyan">// ADAPTIVE INQUIRY FRAMEWORK</span>
        <h2 className="vrr-sec-title">DYNAMIC SOCRATES CHIEF COMPLAINT EXPLORATION</h2>
        <p className="vrr-sec-lede">
          Rather than presenting rigid, static surveys, the adaptive engine explores symptoms using the proven medical
          SOCRATES framework, adjusting follow-up inquiries dynamically based on patient responses.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mt-16 mono text-xs">
          <div className="p-10 bg-surface border border-line" data-target-box>
            <div className="text-cyan font-bold mb-2">S // SITE</div>
            <p className="text-fg leading-relaxed">Pinpoints exact anatomical location, unilateral or bilateral presentation.</p>
          </div>
          <div className="p-10 bg-surface border border-line" data-target-box>
            <div className="text-cyan font-bold mb-2">O // ONSET</div>
            <p className="text-fg leading-relaxed">Distinguishes acute sudden trauma versus insidious chronic progression.</p>
          </div>
          <div className="p-10 bg-surface border border-line" data-target-box>
            <div className="text-cyan font-bold mb-2">C // CHARACTER</div>
            <p className="text-fg leading-relaxed">Sharp, burning (Daha), dull throbbing, stabbing (Shoola), or spasmodic pain.</p>
          </div>
          <div className="p-10 bg-surface border border-line" data-target-box>
            <div className="text-cyan font-bold mb-2">R // RADIATION</div>
            <p className="text-fg leading-relaxed">Maps nerve dermatome radiation patterns (e.g. sciatica along lumbar-sacral line).</p>
          </div>
          <div className="p-10 bg-surface border border-line" data-target-box>
            <div className="text-green font-bold mb-2">A // ASSOCIATIONS</div>
            <p className="text-fg leading-relaxed">Concomitant signs: fever, swelling (Shopha), nausea, sour eructations, stiffness.</p>
          </div>
          <div className="p-10 bg-surface border border-line" data-target-box>
            <div className="text-green font-bold mb-2">T // TIME COURSE</div>
            <p className="text-fg leading-relaxed">Diurnal cycle: nocturnal aggravation, early morning joint gel, post-prandial.</p>
          </div>
          <div className="p-10 bg-surface border border-line" data-target-box>
            <div className="text-green font-bold mb-2">E // EXACERBATING</div>
            <p className="text-fg leading-relaxed">Cold climate, physical exertion, spicy diet, fasting, or postural strain.</p>
          </div>
          <div className="p-10 bg-surface border border-line" data-target-box>
            <div className="text-green font-bold mb-2">S // SEVERITY</div>
            <p className="text-fg leading-relaxed">Calibrated visual analog scale (1-10) quantifying interference with daily tasks.</p>
          </div>
        </div>
      </section>

      {/* AYUSH Specialty Clinical Assessments */}
      <section id="ayush" className="vrr-sec-header mt-32">
        <span className="mono text-cyan">// DOMAIN-SPECIFIC MEDICAL EXAMINATIONS</span>
        <h2 className="vrr-sec-title">INTEGRATED AYUSH DIAGNOSTIC PROTOCOLS</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16 mono text-xs">
          <div className="p-12 bg-surface border border-line" data-target-box>
            <div className="text-cyan font-bold mb-4">DASHAVIDHA PARIKSHA</div>
            <p className="text-fg leading-relaxed">
              Standardized 10-fold clinical evaluation examining Prakriti, Vikriti (morbidity), Sara (tissue quality),
              Samhanana (body build), Satva (mental resilience), and Agni (digestive capacity).
            </p>
          </div>

          <div className="p-12 bg-surface border border-line" data-target-box>
            <div className="text-green font-bold mb-4">AHARA-VIHARA MATRIX</div>
            <p className="text-fg leading-relaxed">
              Detailed quantification of dietary habits (Ahara), meal regularity, water temperature, sleep cycles (Nidra),
              and bowel evacuation consistency (Koshta) identifying classical Ayurvedic disease etiology (Hetu).
            </p>
          </div>

          <div className="p-12 bg-surface border border-line" data-target-box>
            <div className="text-cyan font-bold mb-4">CCRAS PRAKRITI SCORING</div>
            <p className="text-fg leading-relaxed">
              Validated questionnaire developed by the Central Council for Research in Ayurvedic Sciences (CCRAS) computing
              the patient’s constitutional bio-temperament (Vata, Pitta, Kapha percentage breakdown).
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Architecture Diagram */}
      <div id="architecture" className="mt-32">
        <CareIntakeArchitecture />
      </div>

      {/* Interactive Clinical Sandbox */}
      <div id="simulation" className="mt-32">
        <CareIntakeSimulation />
      </div>

      {/* Clinical Safety Boundaries & Guardrails */}
      <section id="safety" className="vrr-sec-header mt-32">
        <span className="mono text-cyan">// RESPONSIBLE CLINICAL AI</span>
        <h2 className="vrr-sec-title">STRICT MEDICAL SAFETY BOUNDARIES</h2>
        <div className="p-16 bg-surface border border-line mt-16" data-target-box>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 text-xs text-fg leading-relaxed mono">
            <div>
              <h4 className="text-cyan font-bold text-sm mb-6">NO AUTONOMOUS DIAGNOSIS OR PRESCRIBING</h4>
              <p>
                A core ethical design constraint of CareIntake is the <strong>absolute exclusion of automated medical diagnosis
                and pharmacological prescribing</strong> from the software scope. Healthcare decisions require licensed human
                physician clinical judgment, palpation, and legal accountability.
              </p>
              <p className="mt-8 text-muted">
                The software functions strictly as a structured clinical scribe. It formats patient complaints into standard
                medical terminology but never tells a patient what disease they have or what herbal formulation to consume.
              </p>
            </div>

            <div>
              <h4 className="text-green font-bold text-sm mb-6">PLANNED BHASHINI REGIONAL AI INTEGRATION</h4>
              <p>
                To eliminate language barriers for rural citizens visiting central specialty clinics, the architecture is
                designed for integration with the <strong>Government of India Bhashini National Language Mission</strong>.
              </p>
              <p className="mt-8 text-muted">
                * Note on Implementation Status: Bhashini speech-to-text, regional translation, and Indic prescription OCR
                are verified as planned architectural milestones in Phase 3, not active production components in the Phase 1 MVP.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Security & Clinical Privacy Controls */}
      <section id="security" className="vrr-sec-header mt-32">
        <span className="mono text-cyan">// HEALTHCARE APPSEC & DATA PRIVACY</span>
        <h2 className="vrr-sec-title">VERIFIED CLINICAL DATA PROTECTIONS</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-16 mono">
          {CAREINTAKE_SECURITY_CONTROLS.map((ctrl) => (
            <div key={ctrl.title} className="p-12 bg-surface border border-line" data-target-box>
              <div className="flex-between text-xs mb-4">
                <span className="font-bold text-cyan">{ctrl.title}</span>
                <span className={ctrl.statusClass}>[{ctrl.status}]</span>
              </div>
              <p className="text-xs text-fg leading-relaxed mt-4">{ctrl.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Phased Roadmap */}
      <section id="roadmap" className="vrr-sec-header mt-32">
        <span className="mono text-cyan">// CLINICAL HORIZONS</span>
        <h2 className="vrr-sec-title">PROJECT EXECUTION ROADMAP</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-16 mono">
          {CAREINTAKE_ROADMAP.map((r) => (
            <div key={r.phase} className="p-16 bg-surface border border-line" data-target-box>
              <div className="flex-between text-xs mb-6">
                <span className="text-cyan font-bold">{r.phase} // {r.title}</span>
                <span className={r.status === "done" ? "text-green" : r.status === "active" ? "text-cyan" : "text-muted"}>
                  [{r.timeframe}]
                </span>
              </div>
              <ul className="text-xs text-fg space-y-2">
                {r.items.map((it) => (
                  <li key={it} className="flex items-start gap-6">
                    <span className="text-cyan">▹</span>
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Sticky Bottom Return Bar */}
      <footer className="vrr-bottom-bar mono">
        <span>CAREINTAKE // CLINICAL HISTORY INTELLIGENCE · DESIGNED FOR AIIA · MINISTRY OF AYUSH · ROSHAN INGGERSHAL VR</span>
        <button
          type="button"
          className="btn-bottom-return text-cyan"
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
