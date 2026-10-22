import { useState } from "react";
import { CAREINTAKE_SYSTEM_LAYERS } from "../../data/careintakeData.js";
import { cyberAudio } from "../../utils/cyberAudio.js";

export default function CareIntakeArchitecture() {
  const [selectedLayer, setSelectedLayer] = useState(CAREINTAKE_SYSTEM_LAYERS[0]);

  const handleSelectLayer = (layer) => {
    setSelectedLayer(layer);
    cyberAudio.playLock();
  };

  return (
    <section className="vrr-architecture-section">
      <div className="vrr-sec-header">
        <span className="mono text-cyan">// 5-LAYER CLINICAL DATA STACK</span>
        <h2 className="vrr-sec-title">CAREINTAKE SYSTEM ARCHITECTURE</h2>
        <p className="vrr-sec-lede">
          From patient-facing multimodal kiosk touchpoints to adaptive clinical inquiry, AYUSH domain scoring,
          FHIR R4 interoperability, and clinician review dashboards.
        </p>
      </div>

      <div className="vrr-arch-interactive-container">
        {/* Layer Stack Selector */}
        <div className="arch-layers-stack">
          {CAREINTAKE_SYSTEM_LAYERS.map((layer) => {
            const isSelected = selectedLayer.id === layer.id;
            return (
              <div
                key={layer.id}
                className={`arch-layer-card ${isSelected ? "selected" : ""}`}
                onClick={() => handleSelectLayer(layer)}
                data-target-box
              >
                <div className="layer-card-left">
                  <span className="layer-number text-cyan font-bold">{layer.num}</span>
                  <div className="layer-title-box">
                    <span className="layer-tag text-green mono">{layer.tag}</span>
                    <h4 className="layer-name">{layer.name}</h4>
                  </div>
                </div>

                <div className="layer-card-right">
                  <span className="text-muted text-xs hidden-mobile">
                    {layer.components.length} SUBSYSTEMS
                  </span>
                  <span className="layer-chevron text-cyan">
                    {isSelected ? "▶ ACTIVE" : "▷ INSPECT"}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Layer Detailed Inspector */}
        {selectedLayer && (
          <div className="arch-layer-inspector mono" data-target-box style={{ borderColor: "#00e5ff" }}>
            <div className="inspector-head">
              <div className="text-cyan text-xs">
                CLINICAL STACK LAYER // {selectedLayer.num} [{selectedLayer.tag}]
              </div>
              <h3 className="text-green text-lg font-bold">{selectedLayer.name}</h3>
              <p className="text-fg text-sm mt-4">{selectedLayer.desc}</p>
            </div>

            <div className="mt-16 pt-12 border-t border-line">
              <div className="text-xs text-muted mb-8">VERIFIED SUBSYSTEM MODULES:</div>
              <div className="grid grid-cols-1 gap-8">
                {selectedLayer.components.map((comp) => (
                  <div key={comp.name} className="p-8 bg-surface border border-line">
                    <div className="text-cyan font-bold text-xs">{comp.name}</div>
                    <div className="text-fg text-xs mt-2 leading-relaxed">{comp.detail}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
