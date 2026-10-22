import { useState } from "react";
import { VRR_ARCHITECTURE_LAYERS } from "../../data/vrrData.js";
import { cyberAudio } from "../../utils/cyberAudio.js";

export default function VRRArchitecture() {
  const [selectedLayerId, setSelectedLayerId] = useState(VRR_ARCHITECTURE_LAYERS[2].id); // default to Intelligence layer

  const activeLayer =
    VRR_ARCHITECTURE_LAYERS.find((l) => l.id === selectedLayerId) || VRR_ARCHITECTURE_LAYERS[0];

  return (
    <section className="vrr-arch-section">
      <div className="vrr-sec-header">
        <span className="mono text-cyan">// 03. SYSTEM ARCHITECTURE &amp; DATA FLOW</span>
        <h2 className="vrr-sec-title">FIVE-LAYER INTELLIGENCE STACK</h2>
        <p className="vrr-sec-lede">
          Data flows upward from external market feeds and unstructured resume intake to structured vector spaces and personalized decision outputs.
        </p>
      </div>

      <div className="vrr-arch-layout">
        {/* Left: 5-Layer Stack Interactive Diagram */}
        <div className="arch-stack-col">
          {VRR_ARCHITECTURE_LAYERS.map((layer) => (
            <div
              key={layer.id}
              className={`arch-layer-card mono ${layer.id === selectedLayerId ? "active" : ""}`}
              data-target-box
              onClick={() => {
                setSelectedLayerId(layer.id);
                cyberAudio.playTyping();
              }}
            >
              <div className="layer-top-meta">
                <span className="layer-idx text-cyan">LAYER {layer.num}</span>
                <span className={`st st-${layer.statusType}`}>[ {layer.status} ]</span>
              </div>
              <h4 className="layer-title">{layer.name}</h4>
              <div className="layer-tech text-muted">{layer.tech}</div>
              <div className="layer-arrow-indicator">▼</div>
            </div>
          ))}
        </div>

        {/* Right: Detailed Layer Inspector */}
        <div className="arch-inspector-col" data-target-box>
          <div className="inspector-header mono">
            <span className="pulse-dot" />
            <span className="text-cyan">LAYER_INSPECTOR: {activeLayer.name.toUpperCase()}</span>
          </div>

          <div className="inspector-content">
            <div className="inspector-badge-row mono">
              <span className={`st st-${activeLayer.statusType}`}>[ {activeLayer.status} ]</span>
              <span className="text-muted">LAYER {activeLayer.num} OF 05</span>
            </div>

            <h3 className="inspector-title text-green">{activeLayer.name}</h3>

            <div className="inspector-tech-badge mono">
              <span className="text-cyan">TECHNOLOGY STACK:</span> {activeLayer.tech}
            </div>

            <div className="inspector-block mt-14">
              <h5 className="mono text-cyan">// PURPOSE &amp; SYSTEM FUNCTION</h5>
              <p>{activeLayer.purpose}</p>
            </div>

            <div className="inspector-block mt-14">
              <h5 className="mono text-cyan">// INPUTS &amp; DATA SOURCES</h5>
              <p className="mono">{activeLayer.inputs}</p>
            </div>

            <div className="inspector-block mt-14">
              <h5 className="mono text-cyan">// OUTPUTS &amp; DOWNSTREAM SIGNALS</h5>
              <p className="mono">{activeLayer.outputs}</p>
            </div>

            <div className="inspector-block mt-14">
              <h5 className="mono text-warn">// SECURITY &amp; ISOLATION CONTROLS</h5>
              <div className="security-remaining-box mono">
                <p style={{ margin: 0 }}>{activeLayer.security}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
