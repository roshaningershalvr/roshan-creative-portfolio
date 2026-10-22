import { useState } from "react";
import { AXION_SIMULATION_COMMANDS } from "../../data/axionJarvisData.js";
import { cyberAudio } from "../../utils/cyberAudio.js";

export default function AxionJarvisSimulation() {
  const [selectedCmd, setSelectedCmd] = useState(AXION_SIMULATION_COMMANDS[0]);

  const handleSelectCmd = (cmd) => {
    setSelectedCmd(cmd);
    cyberAudio.playLock();
  };

  return (
    <section className="vrr-simulation-section">
      <div className="vrr-sec-header">
        <span className="mono text-magenta">// INTERACTIVE AGENT COMMAND TESTBED</span>
        <h2 className="vrr-sec-title">AGENTIC WORKFLOW & POLICY CHECKER SANDBOX</h2>
        <p className="vrr-sec-lede">
          Simulate spoken voice prompts and observe the end-to-end execution pipeline: intent decomposition,
          safety policy enforcement (Allowed, Confirmation Required, or Blocked), and safe parameterized PowerShell dispatch.
        </p>
      </div>

      <div className="vrr-sim-scenarios-strip mono" data-target-box>
        <span className="text-muted text-xs">SAMPLE AGENT COMMANDS:</span>
        {AXION_SIMULATION_COMMANDS.map((cmd) => {
          const isActive = selectedCmd.id === cmd.id;
          return (
            <button
              key={cmd.id}
              type="button"
              className={`sim-persona-pill ${isActive ? "active" : ""}`}
              onClick={() => handleSelectCmd(cmd)}
            >
              <span>{cmd.id.toUpperCase()}</span>
            </button>
          );
        })}
      </div>

      <div className="vrr-sim-sandbox-grid">
        {/* Left Column: Voice Input & Intent Decomposition */}
        <div className="sim-profile-card mono" data-target-box>
          <div className="sim-card-top-tag text-cyan">
            <span>JARVIS SPOKEN PROMPT & INTENT PARSE</span>
            <span className="text-muted">[ WEB SPEECH INPUT ]</span>
          </div>

          <div className="p-12 bg-surface border border-line mb-16">
            <div className="text-xs text-muted mb-4">🎤 TRANSCRIBED VOICE INPUT:</div>
            <div className="text-sm font-bold text-cyan leading-relaxed">
              &quot;{selectedCmd.voicePrompt}&quot;
            </div>
          </div>

          <div className="mb-16">
            <div className="text-xs text-muted mb-4">AXION INTENT DECOMPOSITION:</div>
            <p className="text-xs text-fg leading-relaxed bg-surface p-8 border border-line">
              {selectedCmd.intent}
            </p>
          </div>

          <div className="p-10 border mb-16" style={{ background: "rgba(4, 17, 9, 0.9)", borderColor: "var(--line)" }}>
            <div className="text-xs text-muted mb-4">SECURITY POLICY EVALUATION VERDICT:</div>
            <div className={`text-sm font-bold ${selectedCmd.verdictClass}`}>
              [ {selectedCmd.safetyVerdict} ]
            </div>
          </div>

          <div className="text-xs text-muted">
            GENERATED POWERSHELL INVOCATION:
            <pre className="p-8 bg-surface border border-line text-xs text-green mt-4 overflow-x-auto">
              <code>{selectedCmd.powershellCmd}</code>
            </pre>
          </div>
        </div>

        {/* Right Column: Execution Output & Voice Feedback */}
        <div className="sim-results-card mono" data-target-box>
          <div className="sim-card-top-tag text-green">
            <span>HOST OS EXECUTION & VOICE RESPONSE</span>
            <span className="text-muted">[ POWERSHELL GATEWAY ]</span>
          </div>

          <div className="mb-16">
            <div className="text-xs text-muted mb-4">SIMULATED POWERSHELL STDOUT / STDERR:</div>
            <pre className="p-10 bg-surface border border-line text-xs text-fg leading-relaxed overflow-x-auto whitespace-pre-wrap font-mono">
              <code>{selectedCmd.executionOutput}</code>
            </pre>
          </div>

          <div
            className="p-12 mb-16 border"
            style={{
              background: "rgba(0, 229, 255, 0.08)",
              borderColor: "var(--cyan)",
            }}
          >
            <div className="flex items-center gap-6 text-xs font-bold text-cyan mb-4">
              <span>🔊 JARVIS SYNTHESIZED VOICE FEEDBACK:</span>
            </div>
            <p className="text-xs text-fg leading-relaxed">
              &quot;{selectedCmd.voiceResponse}&quot;
            </p>
          </div>

          <div className="sim-milestone-roadmap pt-12 border-t border-line">
            <div className="text-xs text-muted mb-6">RUNTIME DEFENSE ENFORCEMENT:</div>
            <div className="grid grid-cols-3 gap-8 text-center text-xs">
              <div className="p-4 bg-surface border border-line">
                <div className="text-cyan font-bold">REALPATH</div>
                <div className="text-muted text-xxs">PATH TRAVERSAL GUARD</div>
              </div>
              <div className="p-4 bg-surface border border-line">
                <div className="text-green font-bold">NO SHELL=TRUE</div>
                <div className="text-muted text-xxs">ARGUMENT ARRAY</div>
              </div>
              <div className="p-4 bg-surface border border-line">
                <div className="text-warn font-bold">ASYNC LOCK</div>
                <div className="text-muted text-xxs">SQLITE CONCURRENCY</div>
              </div>
            </div>
          </div>

          <div className="text-xs text-muted mt-12 pt-8 border-t border-line">
            * Simulated in-browser demonstration. No real operating system commands are dispatched from this public portfolio.
          </div>
        </div>
      </div>
    </section>
  );
}
