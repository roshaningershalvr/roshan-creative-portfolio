export default function VRRIntelligenceML() {
  return (
    <section className="vrr-ml-section">
      <div className="vrr-sec-header">
        <span className="mono text-cyan">// 05. AI, MACHINE LEARNING &amp; DATA ENGINE</span>
        <h2 className="vrr-sec-title">ALGORITHMIC LOGIC &amp; EMBEDDING BENCHMARKS</h2>
        <p className="vrr-sec-lede">
          Truthful technical documentation of the machine-learning pipeline, evaluation metrics from the 61-record WOS benchmark,
          and mathematical formulation of the scoring engine.
        </p>
      </div>

      <div className="vrr-ml-grid">
        {/* Core Mathematical Logic */}
        <div className="vrr-ml-card" data-target-box>
          <div className="card-top-tag mono text-green">[ CORE MATHEMATICAL FORMULAS ]</div>
          <h3>Vector Matching &amp; Gap Prioritization</h3>
          <p>
            The intelligence engine converts unstructured text into dense vectors, calculates multi-dimensional proximity,
            and weights gaps by market urgency.
          </p>

          <div className="math-formula-box mono">
            <div className="formula-item">
              <span className="formula-title text-cyan">// 01. COSINE ROLE SIMILARITY</span>
              <code>similarity(user, role) = (user · role) / (||user|| · ||role||)</code>
              <p className="formula-desc text-muted">
                Measures angle between dense candidate embedding and candidate role embeddings in 768-dimensional latent space.
              </p>
            </div>

            <div className="formula-item mt-14">
              <span className="formula-title text-cyan">// 02. DEMAND-WEIGHTED GAP SCORE</span>
              <code>gap_score(skill) = (target_level − user_level) × demand_weight(skill, region)</code>
              <p className="formula-desc text-muted">
                Small gaps in critical surge skills outrank large gaps in low-demand skills, optimizing the reskilling ROI.
              </p>
            </div>
          </div>
        </div>

        {/* Real Benchmark Matrix from D:\WOS\ml */}
        <div className="vrr-ml-card" data-target-box>
          <div className="card-top-tag mono text-cyan">[ EMPIRICAL BENCHMARK // D:\WOS\ml ]</div>
          <h3>Model Evaluation On 61-Record Catalog</h3>
          <p>
            Rigorous evaluation comparing three sentence embedding families across top-k accuracy, precision, and recall
            on canonical tech skills.
          </p>

          <div className="benchmark-table-wrap mono">
            <table className="benchmark-table">
              <thead>
                <tr>
                  <th>MODEL</th>
                  <th>DIM</th>
                  <th>TOP-1</th>
                  <th>TOP-3</th>
                  <th>P@1</th>
                  <th>R@5</th>
                  <th>LATENCY</th>
                </tr>
              </thead>
              <tbody>
                <tr className="highlight-row">
                  <td className="text-green">intfloat/e5-base-v2 (Selected)</td>
                  <td>768</td>
                  <td>0.9836</td>
                  <td>1.0000</td>
                  <td>0.9836</td>
                  <td>0.8880</td>
                  <td>0.028s</td>
                </tr>
                <tr>
                  <td>all-MiniLM-L6-v2 (Fast Baseline)</td>
                  <td>384</td>
                  <td>0.9672</td>
                  <td>1.0000</td>
                  <td>0.9672</td>
                  <td>0.9112</td>
                  <td>0.004s</td>
                </tr>
                <tr>
                  <td>BAAI/bge-base-en-v1.5</td>
                  <td>768</td>
                  <td>0.9672</td>
                  <td>0.9836</td>
                  <td>0.9672</td>
                  <td>0.8948</td>
                  <td>0.038s</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="benchmark-footer-note mono text-muted mt-10">
            <span>AUDIT STATUS: Evaluated on test dataset with hybrid lexical-semantic fallback.</span>
          </div>
        </div>
      </div>

      {/* The Feedback Loop Diagram */}
      <div className="vrr-feedback-banner" data-target-box>
        <div className="banner-title mono text-cyan">// THE CONTINUOUS LEARNING FLYWHEEL</div>
        <div className="feedback-flow-steps mono">
          <div className="f-step">
            <span className="step-num text-green">01</span>
            <span className="step-name">USER LEARNS SKILL</span>
          </div>
          <div className="f-arrow">→</div>
          <div className="f-step">
            <span className="step-num text-cyan">02</span>
            <span className="step-name">APPLIES &amp; INTERVIEWS</span>
          </div>
          <div className="f-arrow">→</div>
          <div className="f-step">
            <span className="step-num text-green">03</span>
            <span className="step-name">HIRED / TRANSITIONS</span>
          </div>
          <div className="f-arrow">→</div>
          <div className="f-step">
            <span className="step-num text-warn">04</span>
            <span className="step-name">RECORDS OUTCOME DELTA</span>
          </div>
          <div className="f-arrow">→</div>
          <div className="f-step">
            <span className="step-num text-green">05</span>
            <span className="step-name">CALIBRATES EMBEDDINGS</span>
          </div>
        </div>
      </div>
    </section>
  );
}
