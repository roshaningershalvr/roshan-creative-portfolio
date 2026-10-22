import { VRR_BUSINESS_TIERS } from "../../data/vrrData.js";

export default function VRRBusinessModel() {
  return (
    <section className="vrr-biz-section">
      <div className="vrr-sec-header">
        <span className="mono text-cyan">// 07. BUSINESS MODEL &amp; ECONOMIC IMPACT</span>
        <h2 className="vrr-sec-title">MULTI-STAKEHOLDER SUSTAINABILITY</h2>
        <p className="vrr-sec-lede">
          A sustainable, multi-tier economic model aligning individual career growth with enterprise workforce agility and national labor resilience.
        </p>
      </div>

      <div className="vrr-tiers-grid">
        {VRR_BUSINESS_TIERS.map((tier) => (
          <div key={tier.tier} className="vrr-tier-card" data-target-box>
            <div className="tier-header mono">
              <span className="tier-name text-green">{tier.tier}</span>
              <div className="tier-price text-cyan">{tier.price}</div>
            </div>

            <div className="tier-aud mono text-muted">
              <span>FOR: {tier.audience}</span>
            </div>

            <div className="tier-highlight mono text-fg">
              {tier.highlight}
            </div>

            <ul className="tier-features mono">
              {tier.features.map((f, i) => (
                <li key={i}>✓ {f}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="vrr-impact-banner mono" data-target-box>
        <div className="banner-title text-cyan">// PROJECTED SYSTEMIC IMPACT</div>
        <div className="impact-stats-row">
          <div className="impact-stat">
            <span className="stat-label text-muted">INDIVIDUALS</span>
            <p>Clarity on future-safe skills, elimination of dead-end courses, shorter transition cycles.</p>
          </div>
          <div className="impact-stat">
            <span className="stat-label text-muted">COMPANIES</span>
            <p>Predictive hiring, internal reskilling over firing, elimination of chronic skill deficits.</p>
          </div>
          <div className="impact-stat">
            <span className="stat-label text-muted">ECONOMIES</span>
            <p>Curricula synchronized with market velocity, higher labor productivity, targeted reskilling subsidies.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
