import { useState, useMemo } from "react";
import { RETROFIT_SIMULATION_SCENARIOS } from "../../data/retrofitData.js";
import { cyberAudio } from "../../utils/cyberAudio.js";

export default function RetrofitSimulation() {
  const [selectedScenario, setSelectedScenario] = useState(RETROFIT_SIMULATION_SCENARIOS[0]);
  const [gasPpm, setGasPpm] = useState(RETROFIT_SIMULATION_SCENARIOS[0].gasPpm);
  const [tempC, setTempC] = useState(RETROFIT_SIMULATION_SCENARIOS[0].tempC);
  const [airflow, setAirflow] = useState(RETROFIT_SIMULATION_SCENARIOS[0].airflowMps);

  const handleSelectScenario = (sc) => {
    setSelectedScenario(sc);
    setGasPpm(sc.gasPpm);
    setTempC(sc.tempC);
    setAirflow(sc.airflowMps);
    cyberAudio.playLock();
  };

  const calculatedRisk = useMemo(() => {
    const gasFactor = Math.min(gasPpm / 220, 1.0) * 45;
    const tempFactor = Math.max(0, Math.min((tempC - 25) / 60, 1.0)) * 35;
    const airflowDeficit = Math.max(0, (4.5 - airflow) / 4.0) * 20;

    const rawScore = Math.min(100, Math.round(gasFactor + tempFactor + airflowDeficit));

    let band = "NORMAL";
    let bandColor = "#00ff6a";
    let relayState = "ENERGIZED (NORMAL)";
    let action = "Routine operation. Background telemetry streaming via WebSocket.";

    if (rawScore >= 80) {
      band = "HAZARD";
      bandColor = "#ff2e93";
      relayState = "TRIPPED (DE-ENERGIZED SAFE HALT)";
      action = "CRITICAL HAZARD: Fail-safe relay tripped. High-voltage actuator cut off. Sirens active.";
    } else if (rawScore >= 60) {
      band = "WARNING";
      bandColor = "#ff8c00";
      relayState = "ENERGIZED (WARNING ACTIVE)";
      action = "Multivariate anomaly detected. Alert notification pushed to shop-floor dashboard.";
    } else if (rawScore >= 35) {
      band = "ELEVATED";
      bandColor = "#ffd166";
      relayState = "ENERGIZED (MONITORING)";
      action = "Minor parameter drift detected. Logged to local SQLite circular buffer.";
    }

    const anomalyProbability = (rawScore / 100).toFixed(2);

    return { rawScore, band, bandColor, relayState, action, anomalyProbability };
  }, [gasPpm, tempC, airflow]);

  return (
    <section className="vrr-simulation-section">
      <div className="vrr-sec-header">
        <span className="mono text-warn">// INTERACTIVE EDGE ML TESTBED</span>
        <h2 className="vrr-sec-title">FOUR-BAND RISK SCORE SANDBOX</h2>
        <p className="vrr-sec-lede">
          Simulate environmental sensor inputs on an edge-connected machine cell. Test how multi-sensor fusion
          computes anomaly probabilities and drives deterministic fail-safe relay responses.
        </p>
      </div>

      <div className="vrr-sim-scenarios-strip mono" data-target-box>
        <span className="text-muted text-xs">PRESET SCENARIOS:</span>
        {RETROFIT_SIMULATION_SCENARIOS.map((sc) => {
          const isActive = selectedScenario.id === sc.id;
          return (
            <button
              key={sc.id}
              type="button"
              className={`sim-persona-pill ${isActive ? "active" : ""}`}
              onClick={() => handleSelectScenario(sc)}
            >
              <span>{sc.name.split(":")[0]}</span>
            </button>
          );
        })}
      </div>

      <div className="vrr-sim-sandbox-grid">
        {/* Left Column: Interactive Telemetry Sliders */}
        <div className="sim-profile-card mono" data-target-box>
          <div className="sim-card-top-tag text-warn">
            <span>LIVE SENSOR TELEMETRY INPUTS</span>
            <span className="text-muted">[ ESP32 12-BIT ADC ]</span>
          </div>

          <p className="text-sm text-fg mb-16">{selectedScenario.desc}</p>

          <div className="sim-control-group mb-16">
            <div className="flex-between text-xs mb-4">
              <span className="text-muted">GAS CONCENTRATION (MQ-4/135):</span>
              <span className="text-warn font-bold">{gasPpm} PPM</span>
            </div>
            <input
              type="range"
              min="10"
              max="300"
              step="5"
              value={gasPpm}
              onChange={(e) => setGasPpm(Number(e.target.value))}
              className="vrr-sim-slider"
            />
            <div className="flex-between text-muted text-xs mt-2">
              <span>10 PPM (Clean)</span>
              <span>120 PPM (Warning)</span>
              <span>300 PPM (Explosive Hazard)</span>
            </div>
          </div>

          <div className="sim-control-group mb-16">
            <div className="flex-between text-xs mb-4">
              <span className="text-muted">BEARING / AMBIENT TEMP (DS18B20):</span>
              <span className="text-warn font-bold">{tempC}°C</span>
            </div>
            <input
              type="range"
              min="20"
              max="95"
              step="1"
              value={tempC}
              onChange={(e) => setTempC(Number(e.target.value))}
              className="vrr-sim-slider"
            />
            <div className="flex-between text-muted text-xs mt-2">
              <span>20°C (Ambient)</span>
              <span>55°C (Elevated)</span>
              <span>95°C (Thermal Runaway)</span>
            </div>
          </div>

          <div className="sim-control-group mb-16">
            <div className="flex-between text-xs mb-4">
              <span className="text-muted">EXHAUST AIRFLOW VELOCITY:</span>
              <span className="text-warn font-bold">{airflow} m/s</span>
            </div>
            <input
              type="range"
              min="0.5"
              max="6.0"
              step="0.1"
              value={airflow}
              onChange={(e) => setAirflow(Number(e.target.value))}
              className="vrr-sim-slider"
            />
            <div className="flex-between text-muted text-xs mt-2">
              <span>0.5 m/s (Clogged)</span>
              <span>2.5 m/s (Restricted)</span>
              <span>6.0 m/s (Optimal CFM)</span>
            </div>
          </div>

          <div className="text-xs text-muted mt-12 pt-8 border-t border-line">
            * Simulated values for demonstration. Actual edge inference executes via TinyML on ESP32 & Raspberry Pi.
          </div>
        </div>

        {/* Right Column: Real-time Calculated Risk & Action */}
        <div className="sim-results-card mono" data-target-box>
          <div className="sim-card-top-tag text-green">
            <span>EDGE ML ANOMALY & RISK ARBITRATOR</span>
            <span className="text-muted">[ 4-BAND ARBITRATION ]</span>
          </div>

          <div className="sim-score-block">
            <div className="sim-score-badge" style={{ borderColor: calculatedRisk.bandColor }}>
              <span className="score-num font-bold" style={{ color: calculatedRisk.bandColor }}>
                {calculatedRisk.rawScore}
              </span>
              <span className="score-label">/ 100 RISK</span>
            </div>

            <div className="sim-score-meta">
              <div className="text-xs text-muted">CURRENT OPERATIONAL BAND:</div>
              <div className="text-lg font-bold" style={{ color: calculatedRisk.bandColor }}>
                [ BAND: {calculatedRisk.band} ]
              </div>
              <div className="text-xs text-muted mt-4">
                ISOLATION FOREST OUTLIER SCORE:{" "}
                <span className="text-cyan font-bold">{calculatedRisk.anomalyProbability}</span>
              </div>
            </div>
          </div>

          <div className="mt-16 pt-12 border-t border-line">
            <div className="text-xs text-muted mb-4">FAIL-SAFE RELAY PHYSICAL STATE:</div>
            <div
              className="p-8 text-xs font-bold"
              style={{
                background: calculatedRisk.rawScore >= 80 ? "rgba(255, 46, 147, 0.15)" : "rgba(0, 255, 106, 0.1)",
                border: `1px solid ${calculatedRisk.bandColor}`,
                color: calculatedRisk.bandColor,
              }}
            >
              PHYSICAL RELAY: {calculatedRisk.relayState}
            </div>
          </div>

          <div className="mt-12">
            <div className="text-xs text-muted mb-4">AUTOMATED ARBITRATION ACTION:</div>
            <p className="text-xs text-fg leading-relaxed bg-surface p-8 border border-line">
              {calculatedRisk.action}
            </p>
          </div>

          <div className="sim-milestone-roadmap mt-16 pt-12 border-t border-line">
            <div className="text-xs text-muted mb-6">DATA PATH LATENCY PROFILE:</div>
            <div className="grid grid-cols-3 gap-8 text-center text-xs">
              <div className="p-4 bg-surface border border-line">
                <div className="text-cyan font-bold">0.8 ms</div>
                <div className="text-muted text-xxs">ADC READ</div>
              </div>
              <div className="p-4 bg-surface border border-line">
                <div className="text-warn font-bold">14.2 ms</div>
                <div className="text-muted text-xxs">TINYAML SCORE</div>
              </div>
              <div className="p-4 bg-surface border border-line">
                <div className="text-green font-bold">&lt; 25 ms</div>
                <div className="text-muted text-xxs">RELAY TRIP</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
