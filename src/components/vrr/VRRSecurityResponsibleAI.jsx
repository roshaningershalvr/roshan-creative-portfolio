export default function VRRSecurityResponsibleAI() {
  return (
    <section className="vrr-security-section">
      <div className="vrr-sec-header">
        <span className="mono text-cyan">// 06. SECURITY, PRIVACY &amp; RESPONSIBLE AI</span>
        <h2 className="vrr-sec-title">DEFENSE-IN-DEPTH &amp; ETHICAL WORKFORCE GOVERNANCE</h2>
        <p className="vrr-sec-lede">
          Handling personal career records, resume documents, and predictive labor models demands strict technical safeguards and transparent limitations.
        </p>
      </div>

      <div className="vrr-security-grid">
        {/* Security Controls */}
        <div className="vrr-sec-card" data-target-box>
          <div className="card-top-tag mono text-green">[ TECHNICAL APPSEC CONTROLS ]</div>
          <h3>Data Protection &amp; File Ingestion Security</h3>
          <ul className="vrr-control-list mono">
            <li>
              <strong>Safe Document Parsing:</strong> Uploaded resume files (PDF, DOCX) pass through memory-limited text extraction workers without executing embedded macros or active scripts.
            </li>
            <li>
              <strong>Payload Validation:</strong> Enforces 2MB maximum file size thresholds and strict MIME-type whitelisting to eliminate upload-based DoS and binary execution vectors.
            </li>
            <li>
              <strong>PII De-Identification:</strong> User contact information (phone, physical address, email) is stripped before profile data is ingested into aggregate market training datasets.
            </li>
            <li>
              <strong>Ephemeral Session Tokens:</strong> Single-session evaluation tokens avoid persistent tracking cookies while permitting anonymous skill exploration.
            </li>
          </ul>
        </div>

        {/* Responsible AI & Ethical Safeguards */}
        <div className="vrr-sec-card" data-target-box>
          <div className="card-top-tag mono text-cyan">[ RESPONSIBLE AI GOVERNANCE ]</div>
          <h3>Transparent Reasoning &amp; Anti-Bias Boundaries</h3>
          <ul className="vrr-control-list mono">
            <li>
              <strong>No Black-Box Career Scores:</strong> Every readiness and automation exposure metric is paired with explicit task-level explanations and confidence signals.
            </li>
            <li>
              <strong>Human-In-The-Loop Overrides:</strong> Users maintain full visibility and editing control over their extracted skill graph, correcting false inferences before role matching.
            </li>
            <li>
              <strong>Demographic Blindness:</strong> Skill vector matching operates strictly on verified capabilities and completed project evidence, explicitly omitting demographic proxies.
            </li>
            <li>
              <strong>No Definitive Displacement Claims:</strong> Automation exposure scores represent task-level capability overlap, not fatalistic predictions of employment loss.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
