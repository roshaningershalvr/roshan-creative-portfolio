import { useState, useEffect } from "react";
import AxionJarvisHero3D from "./AxionJarvisHero3D.jsx";
import AxionJarvisArchitecture from "./AxionJarvisArchitecture.jsx";
import AxionJarvisSimulation from "./AxionJarvisSimulation.jsx";
import { AXION_HERO_NODES, AXION_SECURITY_AUDIT_FINDINGS, AXION_ROADMAP } from "../../data/axionJarvisData.js";
import { cyberAudio } from "../../utils/cyberAudio.js";

export default function AxionJarvisView({ calm, onBack, onTriggerGlitch }) {
  const [selectedNode, setSelectedNode] = useState(AXION_HERO_NODES[0]);
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
    <div className="vrr-experience-wrap axion-theme">
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
            <span className="pulse-dot" style={{ background: "#ff2e93", boxShadow: "0 0 10px #ff2e93" }} />
            <span className="text-magenta font-bold">AXION & JARVIS // COMMAND_OS</span>
            <span className="text-muted hidden-mobile">AGENTIC VOICE SYSTEM</span>
          </div>
        </div>

        <div className="vrr-nav-links hidden-mobile">
          <a href="#3d-matrix">3D_MATRIX</a>
          <a href="#overview">OVERVIEW</a>
          <a href="#migration">WINDOWS_PORT</a>
          <a href="#voice-loop">VOICE_BUS</a>
          <a href="#architecture">SYSTEM_MAP</a>
          <a href="#simulation">SIMULATION</a>
          <a href="#security-audit">SECURITY_AUDIT</a>
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
      <header id="3d-matrix" className="vrr-hero-section">
        <div className="vrr-hero-heading-block">
          <div className="vrr-pre-title mono">
            <span className="text-magenta">// AGENTIC AI & HOST INTEGRATION // ROSHAN INGGERSHAL VR</span>
            <span className="text-muted">[ STATUS: WINDOWS 10 BUILD · CODE AUDIT HARDENED ]</span>
          </div>

          <h1 className="vrr-main-title card-glitch-title" data-text="AXION & JARVIS // AGENTIC CONTROL SYSTEM">
            AXION & JARVIS // AGENTIC CONTROL SYSTEM
          </h1>

          <p className="vrr-hero-subtitle">
            A voice-first assistant backed by an agentic framework and operating-system integration. Migrated from an early
            macOS prototype to Windows 10/11, hardened through comprehensive security code audit, and wired into PowerShell.
          </p>

          <div className="vrr-hero-metrics-strip mono">
            <span className="metric-tag"><span className="text-magenta">FRAMEWORK:</span> AXION AGENT ORCHESTRATION</span>
            <span className="metric-tag"><span className="text-cyan">TRANSPORT:</span> FASTAPI + WEBSOCKETS</span>
            <span className="metric-tag"><span className="text-green">OS INTEGRATION:</span> PARAMETERIZED POWERSHELL</span>
          </div>
        </div>

        {/* 3D Interactive Agentic Matrix */}
        <div className="vrr-hero-3d-wrapper">
          <AxionJarvisHero3D
            calm={calm}
            onSelectNode={handleSelectNode}
            selectedNodeId={selectedNode?.id}
          />

          {selectedNode && (
            <div className="vrr-node-inspector-card mono" data-target-box style={{ borderColor: "#ff2e93" }}>
              <div className="inspector-top-tag">
                <span className="text-magenta">INSPECTING AGENT MODULE // {selectedNode.tag}</span>
                <span className="text-green">[{selectedNode.status}]</span>
              </div>
              <h3 className="node-inspect-title text-magenta">{selectedNode.name}</h3>
              <p className="node-inspect-desc">{selectedNode.desc}</p>
              <div className="node-meta-grid">
                <div><strong className="text-muted">SUBSYSTEM INPUTS:</strong> {selectedNode.inputs}</div>
                <div><strong className="text-muted">SUBSYSTEM OUTPUTS:</strong> {selectedNode.outputs}</div>
                <div className="full-span"><strong className="text-magenta">SYSTEM ROLE:</strong> {selectedNode.systemRole}</div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Overview & Relationship */}
      <section id="overview" className="vrr-sec-header">
        <span className="mono text-magenta">// ARCHITECTURAL DIVISION</span>
        <h2 className="vrr-sec-title">AXION FRAMEWORK VS. JARVIS ASSISTANT</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-16 text-sm text-fg leading-relaxed">
          <div className="p-16 bg-surface border border-line" data-target-box>
            <h4 className="text-cyan mono font-bold mb-8">JARVIS: THE VOICE-FIRST DESKTOP ASSISTANT</h4>
            <p>
              JARVIS is the user-facing voice and conversation layer. Using the Web Speech API and WebSocket duplexing,
              it captures natural-language speech commands, speaks synthesized audio confirmations, presents a real-time
              command HUD, and manages multi-turn conversational context for hands-free computing.
            </p>
          </div>

          <div className="p-16 bg-surface border border-line" data-target-box>
            <h4 className="text-magenta mono font-bold mb-8">AXION: THE AGENTIC ORCHESTRATION FRAMEWORK</h4>
            <p>
              AXION is the autonomous engine beneath JARVIS. It decomposes complex user instructions into executable tool DAGs,
              validates arguments against safety policies, manages conversational memory, handles error recovery, and
              dispatches validated system commands through the parameterized PowerShell gateway.
            </p>
          </div>
        </div>
      </section>

      {/* Windows Migration Engineering */}
      <section id="migration" className="vrr-sec-header mt-32">
        <span className="mono text-magenta">// PLATFORM ENGINEERING</span>
        <h2 className="vrr-sec-title">PORTING EARLY MACOS CODEBASE TO WINDOWS 10</h2>
        <p className="vrr-sec-lede">
          The initial prototype relied on macOS-specific AppleScript, bash subprocesses, and Darwin audio daemons.
          Roshan re-engineered the stack into a hardened, native Windows 10/11 environment.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16 mono text-xs">
          <div className="p-12 bg-surface border border-line" data-target-box>
            <div className="text-magenta font-bold mb-4">01 // POWERSHELL INTEGRATION</div>
            <p className="text-fg leading-relaxed">
              Replaced macOS AppleScript and Unix bash tools with native PowerShell cmdlets. Completely eliminated unsafe
              shell string interpolation in favor of structured argument arrays.
            </p>
          </div>

          <div className="p-12 bg-surface border border-line" data-target-box>
            <div className="text-cyan font-bold mb-4">02 // FASTAPI & WEBSOCKET CONCURRENCY</div>
            <p className="text-fg leading-relaxed">
              Implemented a low-latency asynchronous Python backend with WebSocket duplexing, replacing sluggish HTTP polling
              and providing real-time token-by-token streaming response telemetry.
            </p>
          </div>

          <div className="p-12 bg-surface border border-line" data-target-box>
            <div className="text-green font-bold mb-4">03 // SQLITE ASYNC LOCKING</div>
            <p className="text-fg leading-relaxed">
              Resolved persistent &quot;database is locked&quot; concurrency collisions under simultaneous audio streams and UI events
              by implementing aiosqlite and asyncio.Lock serialization.
            </p>
          </div>
        </div>
      </section>

      {/* Voice Interaction & Deduplication */}
      <section id="voice-loop" className="vrr-sec-header mt-32">
        <span className="mono text-magenta">// SPEECH EVENT PIPELINE</span>
        <h2 className="vrr-sec-title">DETERMINISTIC VOICE INTERACTION LOOP</h2>
        <div className="p-16 bg-surface border border-line mt-16" data-target-box>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 text-xs text-fg leading-relaxed mono">
            <div>
              <h4 className="text-cyan font-bold text-sm mb-6">WEB SPEECH API AUDIO LIFECYCLE</h4>
              <p>
                JARVIS establishes a continuous speech recognition loop in the browser. Interim hypotheses are displayed
                live on the command HUD, and finalized transcripts are packaged into typed JSON event frames dispatched across
                the WebSocket connection to the AXION agent runner.
              </p>
              <p className="mt-8 text-muted">
                Synthesized speech responses are managed through an active audio queue that automatically ducks background
                listening while speaking, eliminating acoustic self-triggering feedback loops.
              </p>
            </div>

            <div>
              <h4 className="text-magenta font-bold text-sm mb-6">AUDIO RACE-CONDITION DEDUPLICATION BUG FIX</h4>
              <p>
                During Roshan’s security code review, an audio listener race condition was surfaced: browser Web Speech
                engines occasionally emit simultaneous &apos;onresult&apos; and &apos;onend&apos; events, triggering double LLM inferences
                and duplicate command dispatches.
              </p>
              <p className="mt-8 text-muted">
                Remediated by building a session transcript UUID cache and debounce state machine ensuring that each spoken
                command turn executes exactly once.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Architecture Diagram */}
      <div id="architecture" className="mt-32">
        <AxionJarvisArchitecture />
      </div>

      {/* Interactive Command Simulation Sandbox */}
      <div id="simulation" className="mt-32">
        <AxionJarvisSimulation />
      </div>

      {/* Comprehensive Security Code Audit Findings */}
      <section id="security-audit" className="vrr-sec-header mt-32">
        <span className="mono text-magenta">// ETHICAL HACKER CODE AUDIT</span>
        <h2 className="vrr-sec-title">VERIFIED CODE AUDIT & REMEDIATION MATRIX</h2>
        <p className="vrr-sec-lede">
          Detailed breakdown of security vulnerabilities and architectural bugs identified, audited, and resolved
          during the hardening of the JARVIS / AXION codebase.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-16 mono">
          {AXION_SECURITY_AUDIT_FINDINGS.map((finding) => (
            <div key={finding.id} className="p-12 bg-surface border border-line" data-target-box>
              <div className="flex-between text-xs mb-4">
                <span className="font-bold text-magenta">{finding.title}</span>
                <span className={finding.sevClass}>[{finding.severity}]</span>
              </div>
              <div className="text-xs text-muted mb-4">
                <strong className="text-warn">FINDING:</strong> {finding.finding}
              </div>
              <div className="text-xs text-fg leading-relaxed">
                <strong className="text-green">REMEDIATION:</strong> {finding.remediation}
              </div>
              <div className="mt-8 pt-6 border-t border-line text-xs font-bold text-green">
                STATUS: {finding.status}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Phased Roadmap */}
      <section id="roadmap" className="vrr-sec-header mt-32">
        <span className="mono text-magenta">// HORIZONS</span>
        <h2 className="vrr-sec-title">DEVELOPMENT ROADMAP</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-16 mono">
          {AXION_ROADMAP.map((r) => (
            <div key={r.phase} className="p-16 bg-surface border border-line" data-target-box>
              <div className="flex-between text-xs mb-6">
                <span className="text-magenta font-bold">{r.phase} // {r.title}</span>
                <span className={r.status === "done" ? "text-green" : r.status === "active" ? "text-cyan" : "text-muted"}>
                  [{r.timeframe}]
                </span>
              </div>
              <ul className="text-xs text-fg space-y-2">
                {r.items.map((it) => (
                  <li key={it} className="flex items-start gap-6">
                    <span className="text-magenta">▹</span>
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
        <span>AXION & JARVIS // AGENTIC AI & HOST INTEGRATION · SECURITY AUDITED BY ROSHAN INGGERSHAL VR</span>
        <button
          type="button"
          className="btn-bottom-return text-magenta"
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
