import { useState, useEffect } from "react";
import RetrofitHero3D from "./RetrofitHero3D.jsx";
import RetrofitArchitecture from "./RetrofitArchitecture.jsx";
import RetrofitSimulation from "./RetrofitSimulation.jsx";
import { RETROFIT_HERO_NODES, RETROFIT_SECURITY_CONTROLS, RETROFIT_ROADMAP } from "../../data/retrofitData.js";
import { cyberAudio } from "../../utils/cyberAudio.js";

export default function RetrofitView({ calm, onBack, onTriggerGlitch }) {
  const [selectedNode, setSelectedNode] = useState(RETROFIT_HERO_NODES[0]);
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
    <div className="vrr-experience-wrap retrofit-theme">
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
            <span className="pulse-dot" style={{ background: "#ffd166", boxShadow: "0 0 10px #ffd166" }} />
            <span className="text-warn font-bold">RETROFIT // SAFETY_OS</span>
            <span className="text-muted hidden-mobile">PREDICTIVE INDUSTRIAL SAFETY</span>
          </div>
        </div>

        <div className="vrr-nav-links hidden-mobile">
          <a href="#3d-grid">3D_GRID</a>
          <a href="#overview">OVERVIEW</a>
          <a href="#sensor-fusion">SENSOR_FUSION</a>
          <a href="#architecture">SYSTEM_MAP</a>
          <a href="#simulation">SIMULATION</a>
          <a href="#failsafe">FAIL_SAFE</a>
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
      <header id="3d-grid" className="vrr-hero-section">
        <div className="vrr-hero-heading-block">
          <div className="vrr-pre-title mono">
            <span className="text-warn">// INDUSTRIAL EDGE SAFETY // ROSHAN INGGERSHAL VR</span>
            <span className="text-muted">[ STATUS: HARDWARE & TINYML PROTOTYPE TESTED ]</span>
          </div>

          <h1 className="vrr-main-title card-glitch-title" data-text="RETROFIT // PREDICTIVE INDUSTRIAL SAFETY">
            RETROFIT // PREDICTIVE INDUSTRIAL SAFETY
          </h1>

          <p className="vrr-hero-subtitle">
            Turning environmental sensor signals into earlier awareness of potential industrial hazards. Low-cost
            edge intelligence designed to protect small manufacturing workshops without expensive SCADA overhauls.
          </p>

          <div className="vrr-hero-metrics-strip mono">
            <span className="metric-tag"><span className="text-warn">EDGE PLATFORM:</span> ESP32 + RASPBERRY PI 4</span>
            <span className="metric-tag"><span className="text-green">ANOMALY ML:</span> ISOLATION FOREST + OC-SVM</span>
            <span className="metric-tag"><span className="text-cyan">SAFETY INTERLOCK:</span> FAIL-SAFE RELAYS (2.5s WDT)</span>
          </div>
        </div>

        {/* 3D Interactive Telemetry Grid */}
        <div className="vrr-hero-3d-wrapper">
          <RetrofitHero3D
            calm={calm}
            onSelectNode={handleSelectNode}
            selectedNodeId={selectedNode?.id}
          />

          {selectedNode && (
            <div className="vrr-node-inspector-card mono" data-target-box style={{ borderColor: "#ffd166" }}>
              <div className="inspector-top-tag">
                <span className="text-warn">INSPECTING SENSOR NODE // {selectedNode.tag}</span>
                <span className="text-green">[{selectedNode.status}]</span>
              </div>
              <h3 className="node-inspect-title text-warn">{selectedNode.name}</h3>
              <p className="node-inspect-desc">{selectedNode.desc}</p>
              <div className="node-meta-grid">
                <div><strong className="text-muted">SIGNAL INPUTS:</strong> {selectedNode.inputs}</div>
                <div><strong className="text-muted">CALCULATED OUTPUTS:</strong> {selectedNode.outputs}</div>
                <div className="full-span"><strong className="text-warn">SAFETY ROLE:</strong> {selectedNode.systemRole}</div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Overview & Problem Statement */}
      <section id="overview" className="vrr-sec-header">
        <span className="mono text-warn">// THE INDUSTRIAL REALITY</span>
        <h2 className="vrr-sec-title">ACCESSIBLE SAFETY FOR SMALL MACHINE SHOPS</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-16 text-sm text-fg leading-relaxed">
          <div className="p-16 bg-surface border border-line" data-target-box>
            <h4 className="text-warn mono font-bold mb-8">THE PROBLEM: THE COST BARRIER</h4>
            <p>
              Small-to-medium manufacturing workshops (machining, CNC, fabrication, solvent coating) operate high-powered
              machinery under tight margins. Traditional industrial SCADA and certified process monitoring systems cost tens
              of thousands of dollars, leaving thousands of small enterprises reliant on periodic manual walk-throughs or
              reactive smoke alarms that only trigger after flames appear.
            </p>
          </div>

          <div className="p-16 bg-surface border border-line" data-target-box>
            <h4 className="text-green mono font-bold mb-8">THE RETROFIT SOLUTION: EMBEDDED EDGE SENSING</h4>
            <p>
              Retrofit non-invasively clamps onto existing industrial equipment. By combining low-cost electrochemical
              gas probes, digital RTD thermal monitors, airflow differential sensors, and edge microcontrollers running
              unsupervised anomaly detection, the system detects micro-leaks and friction buildup hours before critical failure.
            </p>
          </div>
        </div>
      </section>

      {/* Sensor Fusion & TinyML Explanation */}
      <section id="sensor-fusion" className="vrr-sec-header mt-32">
        <span className="mono text-warn">// SIGNAL PROCESSING & EMBEDDED ML</span>
        <h2 className="vrr-sec-title">MULTIVARIATE SENSOR FUSION PIPELINE</h2>
        <p className="vrr-sec-lede">
          Single-sensor threshold triggers suffer from false positives due to ambient summer heat or harmless transient
          fumes. Retrofit evaluates the multi-dimensional correlation between all five parameters simultaneously.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16 mono text-xs">
          <div className="p-12 bg-surface border border-line" data-target-box>
            <div className="text-warn font-bold mb-4">01 // SIGNAL SANITIZATION</div>
            <p className="text-fg leading-relaxed">
              12-bit ADC voltage registers sampled at 100 Hz. Firmware applies exponential moving average (EMA) smoothing,
              rejects out-of-bounds electrical noise spikes, and clamps open-circuit disconnected probes.
            </p>
          </div>

          <div className="p-12 bg-surface border border-line" data-target-box>
            <div className="text-warn font-bold mb-4">02 // ISOLATION FOREST & OC-SVM</div>
            <p className="text-fg leading-relaxed">
              Trained on open sensor benchmark corpora (UCI Gas Sensor Array Drift & Kaggle Smoke Detection). Evaluates
              multidimensional vector distance to detect anomalous feature combinations without supervised labeled failure data.
            </p>
          </div>

          <div className="p-12 bg-surface border border-line" data-target-box>
            <div className="text-warn font-bold mb-4">03 // FOUR-BAND RISK SCORE</div>
            <p className="text-fg leading-relaxed">
              Maps multi-sensor divergence into 4 transparent bands: NORMAL (0-35), ELEVATED (36-60), WARNING (61-80),
              and HAZARD (81-100), driving deterministic physical relay interlocks.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive System Architecture */}
      <div id="architecture" className="mt-32">
        <RetrofitArchitecture />
      </div>

      {/* Interactive Risk Score Simulation Sandbox */}
      <div id="simulation" className="mt-32">
        <RetrofitSimulation />
      </div>

      {/* Fail-Safe Hardware Engineering */}
      <section id="failsafe" className="vrr-sec-header mt-32">
        <span className="mono text-warn">// DETERMINISTIC HARDWARE SAFETY</span>
        <h2 className="vrr-sec-title">FAIL-SAFE CIRCUIT DESIGN & RESILIENCE</h2>
        <div className="p-16 bg-surface border border-line mt-16" data-target-box>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 text-xs text-fg leading-relaxed mono">
            <div>
              <h4 className="text-warn font-bold text-sm mb-6">NORMALLY-OPEN DE-ENERGIZED HALT</h4>
              <p>
                In an industrial setting, software can crash and microcontrollers can suffer power brownouts. Retrofit’s
                safety relays are wired in a <strong>normally-open (NO)</strong> configuration for heating elements and motors:
                continuous electrical power to the relay coil is strictly required to keep the machine running.
              </p>
              <p className="mt-8 text-muted">
                If the ESP32 CPU brownouts, if the 5V power supply fails, or if a technician accidentally unplugs the module,
                the relay coil immediately de-energizes, dropping machinery into a harmless halt state.
              </p>
            </div>

            <div>
              <h4 className="text-green font-bold text-sm mb-6">HARDWARE WATCHDOG & BUS ISOLATION</h4>
              <p>
                The ESP32 firmware configures an independent hardware watchdog timer (WDT) with a strict 2500ms timeout.
                If any I2C read loop blocks or task starvation occurs, the hardware timer trips an instantaneous hardware reset.
              </p>
              <p className="mt-8 text-muted">
                Galvanic optocouplers decouple 230V AC switching surges from the sensitive 3.3V digital logic rails,
                preventing inductive back-EMF spikes from damaging microcontrollers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Security & Resilience Controls */}
      <section id="security" className="vrr-sec-header mt-32">
        <span className="mono text-warn">// INDUSTRIAL APPSEC & RESILIENCE</span>
        <h2 className="vrr-sec-title">VERIFIED HARDWARE & FIRMWARE CONTROLS</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-16 mono">
          {RETROFIT_SECURITY_CONTROLS.map((ctrl) => (
            <div key={ctrl.title} className="p-12 bg-surface border border-line" data-target-box>
              <div className="flex-between text-xs mb-4">
                <span className="font-bold text-warn">{ctrl.title}</span>
                <span className={ctrl.statusClass}>[{ctrl.status}]</span>
              </div>
              <p className="text-xs text-fg leading-relaxed mt-4">{ctrl.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Phased Roadmap */}
      <section id="roadmap" className="vrr-sec-header mt-32">
        <span className="mono text-warn">// FUTURE HORIZONS</span>
        <h2 className="vrr-sec-title">DEVELOPMENT ROADMAP</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-16 mono">
          {RETROFIT_ROADMAP.map((r) => (
            <div key={r.phase} className="p-16 bg-surface border border-line" data-target-box>
              <div className="flex-between text-xs mb-6">
                <span className="text-warn font-bold">{r.phase} // {r.title}</span>
                <span className={r.status === "done" ? "text-green" : r.status === "active" ? "text-cyan" : "text-muted"}>
                  [{r.timeframe}]
                </span>
              </div>
              <ul className="text-xs text-fg space-y-2">
                {r.items.map((it) => (
                  <li key={it} className="flex items-start gap-6">
                    <span className="text-warn">▹</span>
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
        <span>RETROFIT // PREDICTIVE INDUSTRIAL SAFETY · FOUNDED & ENGINEERED BY ROSHAN INGGERSHAL VR</span>
        <button
          type="button"
          className="btn-bottom-return text-warn"
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
