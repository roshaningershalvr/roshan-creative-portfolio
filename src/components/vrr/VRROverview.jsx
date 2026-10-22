export default function VRROverview() {
  return (
    <section className="vrr-overview-section">
      <div className="vrr-sec-header">
        <span className="mono text-cyan">// 01. PRODUCT OVERVIEW &amp; STRATEGIC THESIS</span>
        <h2 className="vrr-sec-title">THE INTELLIGENCE LAYER OF THE HUMAN ECONOMY</h2>
      </div>

      <div className="vrr-overview-grid">
        {/* Core Thesis Card */}
        <div className="vrr-overview-card thesis-card" data-target-box>
          <div className="card-tag mono text-green">[ CORE STARTUP THESIS ]</div>
          <h3>Infrastructure, Not An App</h3>
          <p>
            WOS (AI Workforce Operating System) is designed as a foundational infrastructure layer that sits underneath
            careers, hiring, and workforce policy—the way cloud infrastructure sits underneath modern software, or payment
            rails sit underneath commerce.
          </p>
          <div className="contrast-box mono mt-14">
            <div className="contrast-item">
              <span className="text-warn">WHAT IT IS NOT:</span>
              <p>Not a job board, not an AI chatbot, not a generic course platform. Those are surface products.</p>
            </div>
            <div className="contrast-item mt-8">
              <span className="text-green">WHAT IT IS:</span>
              <p>The unified intelligence layer connecting individuals, companies, and markets through one continuously-learning system.</p>
            </div>
          </div>
        </div>

        {/* The Global Problem */}
        <div className="vrr-overview-card problem-card" data-target-box>
          <div className="card-tag mono text-warn">[ THE GLOBAL PROBLEM ]</div>
          <h3>The Looming Workforce Mismatch</h3>
          <p>
            The next decade will experience one of the largest workforce transitions in human history. Rapid AI automation
            is moving faster than education, corporate hiring, and policy systems can track or adapt to.
          </p>
          <ul className="problem-list mono">
            <li>
              <strong className="text-cyan">INDIVIDUALS:</strong> Don't know which skills are becoming obsolete; receive generic advice disconnected from their actual skill graph.
            </li>
            <li>
              <strong className="text-cyan">COMPANIES:</strong> Cannot forecast next-generation skill needs; hiring pipelines remain reactive rather than predictive.
            </li>
            <li>
              <strong className="text-cyan">INSTITUTIONS:</strong> University curricula lag years behind market demand; policy decisions rely on stale, aggregated statistics.
            </li>
          </ul>
        </div>
      </div>

      {/* Target Audiences & Phased Expansion */}
      <div className="vrr-audiences-banner" data-target-box>
        <div className="banner-title mono text-cyan">// TARGET USERS ACROSS HORIZONS</div>
        <div className="audiences-grid mono">
          <div className="aud-col">
            <span className="aud-phase text-green">NEAR-TERM (PHASE 1)</span>
            <div className="aud-group">Engineering Students · Fresh Graduates · Early-Career Techs</div>
            <p className="aud-desc">Personal skill extraction, automation exposure guidance, and project-based learning roadmaps.</p>
          </div>
          <div className="aud-col">
            <span className="aud-phase text-cyan">MID-TERM (PHASE 2)</span>
            <div className="aud-group">Technology Startups · Corporate HR · EdTech Providers</div>
            <p className="aud-desc">Internal workforce analytics dashboards, talent mobility, and pre-hire readiness scoring.</p>
          </div>
          <div className="aud-col">
            <span className="aud-phase text-warn">LONG-TERM (PHASE 3+)</span>
            <div className="aud-group">Universities · State Governments · Economic Councils</div>
            <p className="aud-desc">Regional skill gap heatmaps, transition forecasting, and macro workforce resilience modeling.</p>
          </div>
        </div>
      </div>

      {/* Product Philosophy */}
      <div className="philosophy-strip mono" data-target-box>
        <span className="pulse-dot" />
        <span className="text-cyan">FOUNDING PHILOSOPHY:</span>
        <span className="philo-rules text-fg">
          START NARROW · BUILD REAL UTILITY · COLLECT MEANINGFUL DATA · FOCUS ON LONG-TERM TRUST · THINK INFRASTRUCTURE, NOT APP
        </span>
      </div>
    </section>
  );
}
