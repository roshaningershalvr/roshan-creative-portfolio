export default function VRRVision({ onBackToPortfolio }) {
  return (
    <section className="vrr-vision-section">
      <div className="vrr-sec-header">
        <span className="mono text-cyan">// 08. FOUNDER'S VISION &amp; MISSION MANIFESTO</span>
        <h2 className="vrr-sec-title">BEYOND A CAREER APP: A SYSTEMS COMPANY</h2>
      </div>

      <div className="vision-manifesto-card" data-target-box>
        <div className="manifesto-badge mono text-green">[ FOUNDER COMMITMENT: ROSHAN INGGERSHAL VR ]</div>

        <h3 className="manifesto-heading">
          “Build the intelligence infrastructure that helps humanity adapt to the AI economy.”
        </h3>

        <p className="manifesto-lede">
          This is not a fast-rich startup. This is a long-term systems company.
          Apps compete on ephemeral features and churn quickly. Infrastructure compounds:
          every user profile, hiring signal, and verified career transition strengthens the underlying intelligence engine.
        </p>

        <div className="manifesto-principles-grid mono">
          <div className="p-card">
            <span className="text-cyan">01. COMPREHENSIVE HORIZON</span>
            <p>From single-user resume navigation to university curriculum synchronization and national economic forecasting.</p>
          </div>
          <div className="p-card">
            <span className="text-green">02. DATA OVER INTERFACE</span>
            <p>The real defensible moat of VRR is not the visual dashboard; the moat is the compounding workforce intelligence graph.</p>
          </div>
          <div className="p-card">
            <span className="text-warn">03. SYSTEMIC ALIGNMENT</span>
            <p>Aligning human skills, corporate productivity, educational institutions, and AI technological evolution into one unified operating layer.</p>
          </div>
        </div>

        <div className="manifesto-quote-box mono">
          <div className="quote-text text-green">
            INFRASTRUCTURE. NOT AN APP.
          </div>
          <div className="quote-sub text-muted">
            VRR AI WORKFORCE OPERATING SYSTEM // SYSTEM BLUEPRINT 2026
          </div>
        </div>

        <div className="manifesto-actions">
          <button
            type="button"
            className="btn solid mono"
            onClick={onBackToPortfolio}
          >
            ← RETURN TO ROSHAN'S PORTFOLIO
          </button>
        </div>
      </div>
    </section>
  );
}
