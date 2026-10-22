import { useEffect, useRef, useState, useCallback } from "react";
import * as THREE from "three";
import { AXION_HERO_NODES } from "../../data/axionJarvisData.js";
import { cyberAudio } from "../../utils/cyberAudio.js";

export default function AxionJarvisHero3D({ calm, onSelectNode, selectedNodeId }) {
  const mountRef = useRef(null);
  const labelsLayerRef = useRef(null);
  const [webGLFailed, setWebGLFailed] = useState(false);
  const [hoveredNode, setHoveredNode] = useState(null);
  const worldGroupRef = useRef(null);

  const handleRecenter = useCallback(() => {
    if (worldGroupRef.current) {
      worldGroupRef.current.rotation.x = 0;
      worldGroupRef.current.rotation.y = 0;
      cyberAudio.playLock();
    }
  }, []);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "high-performance" });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
      renderer.setSize(container.clientWidth, container.clientHeight);
    } catch {
      setWebGLFailed(true);
      return;
    }

    container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x020805, 0.04);

    const computeTargetZ = (asp) => {
      if (asp < 1.1) return 11.2;
      if (asp < 1.5) return 9.6;
      return 8.6;
    };

    const initialAspect = container.clientWidth / container.clientHeight;
    const camera = new THREE.PerspectiveCamera(45, initialAspect, 0.1, 100);
    camera.position.set(0, 0, computeTargetZ(initialAspect));
    camera.lookAt(0, 0, 0);

    const worldGroup = new THREE.Group();
    scene.add(worldGroup);
    worldGroupRef.current = worldGroup;

    // 1. Central AXION Agentic Coordinator Core (Dual Wireframe Hexagonal Prisms)
    const prismGeo1 = new THREE.CylinderGeometry(0.75, 0.75, 0.5, 6);
    const prismMat1 = new THREE.MeshBasicMaterial({
      color: 0x00e5ff,
      wireframe: true,
      transparent: true,
      opacity: 0.85,
    });
    const prismMesh1 = new THREE.Mesh(prismGeo1, prismMat1);
    worldGroup.add(prismMesh1);

    const prismGeo2 = new THREE.CylinderGeometry(0.5, 0.5, 0.7, 6);
    const prismMat2 = new THREE.MeshBasicMaterial({
      color: 0x00ff6a,
      wireframe: true,
      transparent: true,
      opacity: 0.75,
    });
    const prismMesh2 = new THREE.Mesh(prismGeo2, prismMat2);
    prismMesh2.rotation.y = Math.PI / 6;
    worldGroup.add(prismMesh2);

    // Inner Glowing Voice Orb (JARVIS Audio Core)
    const voiceOrbGeo = new THREE.SphereGeometry(0.35, 20, 20);
    const voiceOrbMat = new THREE.MeshBasicMaterial({ color: 0xff2e93, transparent: true, opacity: 0.65 });
    const voiceOrb = new THREE.Mesh(voiceOrbGeo, voiceOrbMat);
    worldGroup.add(voiceOrb);

    // 2. Command Bus Orbit Rings
    const ringMat1 = new THREE.MeshBasicMaterial({ color: 0x00e5ff, transparent: true, opacity: 0.3, wireframe: true });
    const ringGeo1 = new THREE.TorusGeometry(1.65, 0.014, 12, 64);
    const ring1 = new THREE.Mesh(ringGeo1, ringMat1);
    ring1.rotation.x = Math.PI / 3;
    worldGroup.add(ring1);

    const ringMat2 = new THREE.MeshBasicMaterial({ color: 0xff2e93, transparent: true, opacity: 0.22, wireframe: true });
    const ringGeo2 = new THREE.TorusGeometry(2.15, 0.012, 12, 64);
    const ring2 = new THREE.Mesh(ringGeo2, ringMat2);
    ring2.rotation.y = Math.PI / 4;
    worldGroup.add(ring2);

    // 3. Ambient Command Matrix Data Packets
    const byteCount = 150;
    const bytePositions = new Float32Array(byteCount * 3);
    for (let i = 0; i < byteCount * 3; i += 3) {
      bytePositions[i] = (Math.random() - 0.5) * 11;
      bytePositions[i + 1] = (Math.random() - 0.5) * 7;
      bytePositions[i + 2] = (Math.random() - 0.5) * 8;
    }
    const byteGeo = new THREE.BufferGeometry();
    byteGeo.setAttribute("position", new THREE.BufferAttribute(bytePositions, 3));
    const byteMat = new THREE.PointsMaterial({ color: 0x00e5ff, size: 0.045, transparent: true, opacity: 0.45 });
    const byteField = new THREE.Points(byteGeo, byteMat);
    worldGroup.add(byteField);

    // 4. Agent Architecture Nodes
    const nodeMeshes = [];
    const haloMeshes = [];
    const lineMaterials = [];
    const packets = [];

    AXION_HERO_NODES.forEach((n) => {
      const pos = new THREE.Vector3(...n.coord);

      const nGeo = new THREE.OctahedronGeometry(0.24, 0);
      const nMat = new THREE.MeshBasicMaterial({ color: new THREE.Color(n.color) });
      const nMesh = new THREE.Mesh(nGeo, nMat);
      nMesh.position.copy(pos);
      nMesh.userData = { id: n.id, data: n };
      worldGroup.add(nMesh);
      nodeMeshes.push(nMesh);

      const haloGeo = new THREE.RingGeometry(0.28, 0.33, 16);
      const haloMat = new THREE.MeshBasicMaterial({
        color: new THREE.Color(n.color),
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.55,
      });
      const haloMesh = new THREE.Mesh(haloGeo, haloMat);
      haloMesh.position.copy(pos);
      haloMesh.lookAt(0, 0, 0);
      worldGroup.add(haloMesh);
      haloMeshes.push(haloMesh);

      const lineGeo = new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(0, 0, 0), pos]);
      const lineMat = new THREE.LineBasicMaterial({
        color: new THREE.Color(n.color),
        transparent: true,
        opacity: 0.32,
      });
      const lineMesh = new THREE.Line(lineGeo, lineMat);
      worldGroup.add(lineMesh);
      lineMaterials.push({ id: n.id, mat: lineMat, originalOpacity: 0.32 });

      const packetGeo = new THREE.SphereGeometry(0.04, 8, 8);
      const packetMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
      const packetMesh = new THREE.Mesh(packetGeo, packetMat);
      worldGroup.add(packetMesh);
      packets.push({
        mesh: packetMesh,
        start: new THREE.Vector3(0, 0, 0),
        end: pos,
        t: Math.random(),
        speed: 0.007 + Math.random() * 0.008,
      });
    });

    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2(-999, -999);

    const onPointerMove = (e) => {
      const rect = container.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
    };

    const onClick = () => {
      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(nodeMeshes);
      if (intersects.length > 0) {
        const hit = intersects[0].object.userData.data;
        if (hit) {
          onSelectNode(hit);
          cyberAudio.playLock();
        }
      }
    };

    container.addEventListener("pointermove", onPointerMove);
    container.addEventListener("click", onClick);

    let isDragging = false;
    let prevX = 0;
    let prevY = 0;

    const onMouseDown = (e) => {
      isDragging = true;
      prevX = e.clientX;
      prevY = e.clientY;
    };
    const onMouseUp = () => { isDragging = false; };
    const onMouseMove = (e) => {
      if (!isDragging) return;
      const deltaX = e.clientX - prevX;
      const deltaY = e.clientY - prevY;
      worldGroup.rotation.y += deltaX * 0.0045;
      worldGroup.rotation.x = Math.max(-0.85, Math.min(0.85, worldGroup.rotation.x + deltaY * 0.0045));
      prevX = e.clientX;
      prevY = e.clientY;
    };

    const onTouchStart = (e) => {
      if (e.touches.length === 1) {
        isDragging = true;
        prevX = e.touches[0].clientX;
        prevY = e.touches[0].clientY;
      }
    };
    const onTouchEnd = () => { isDragging = false; };
    const onTouchMove = (e) => {
      if (!isDragging || e.touches.length !== 1) return;
      const deltaX = e.touches[0].clientX - prevX;
      const deltaY = e.touches[0].clientY - prevY;
      worldGroup.rotation.y += deltaX * 0.0045;
      worldGroup.rotation.x = Math.max(-0.85, Math.min(0.85, worldGroup.rotation.x + deltaY * 0.0045));
      prevX = e.touches[0].clientX;
      prevY = e.touches[0].clientY;
    };

    container.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    window.addEventListener("mousemove", onMouseMove);
    container.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchend", onTouchEnd);
    window.addEventListener("touchmove", onTouchMove, { passive: true });

    const onResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      const asp = w / h;
      camera.aspect = asp;
      camera.position.set(0, 0, computeTargetZ(asp));
      camera.lookAt(0, 0, 0);
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", onResize);

    let animId;
    let clock = new THREE.Clock();
    const tempProjVec = new THREE.Vector3();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const delta = clock.getDelta();

      if (!calm) {
        if (!isDragging) {
          worldGroup.rotation.y += delta * 0.14;
          prismMesh1.rotation.y += delta * 0.2;
          prismMesh2.rotation.y -= delta * 0.25;
          voiceOrb.rotation.x += delta * 0.35;
          ring1.rotation.z += delta * 0.16;
          ring2.rotation.z -= delta * 0.14;
        }

        packets.forEach((p) => {
          p.t += p.speed;
          if (p.t > 1) p.t = 0;
          p.mesh.position.lerpVectors(p.start, p.end, p.t);
        });
      }

      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(nodeMeshes);
      if (intersects.length > 0) {
        const hit = intersects[0].object.userData.data;
        if (hit && (!hoveredNode || hoveredNode.id !== hit.id)) {
          setHoveredNode(hit);
          container.style.cursor = "pointer";
        }
      } else {
        if (hoveredNode) {
          setHoveredNode(null);
          container.style.cursor = "crosshair";
        }
      }

      const activeId = selectedNodeId || (hoveredNode ? hoveredNode.id : null);
      lineMaterials.forEach((lm) => {
        if (activeId && lm.id === activeId) {
          lm.mat.opacity = 0.95;
          lm.mat.linewidth = 2;
        } else {
          lm.mat.opacity = activeId ? 0.12 : lm.originalOpacity;
        }
      });

      if (labelsLayerRef.current) {
        const labelsContainer = labelsLayerRef.current;
        const width = container.clientWidth;
        const height = container.clientHeight;

        nodeMeshes.forEach((nMesh, i) => {
          nMesh.getWorldPosition(tempProjVec);
          tempProjVec.project(camera);

          const screenX = ((tempProjVec.x + 1) * width) / 2;
          const screenY = ((-tempProjVec.y + 1) * height) / 2;
          const isFront = tempProjVec.z < 1;

          const labelEl = labelsContainer.children[i];
          if (labelEl) {
            if (isFront) {
              labelEl.style.display = "inline-flex";
              labelEl.style.transform = `translate3d(${screenX}px, ${screenY}px, 0) translate(-50%, -150%)`;
            } else {
              labelEl.style.display = "none";
            }
          }
        });
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", onResize);
      container.removeEventListener("pointermove", onPointerMove);
      container.removeEventListener("click", onClick);
      container.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("mousemove", onMouseMove);
      container.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchend", onTouchEnd);
      window.removeEventListener("touchmove", onTouchMove);

      if (renderer.domElement && renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement);
      }
      renderer.dispose();
      prismGeo1.dispose();
      prismMat1.dispose();
      prismGeo2.dispose();
      prismMat2.dispose();
      voiceOrbGeo.dispose();
      voiceOrbMat.dispose();
      ringGeo1.dispose();
      ringMat1.dispose();
      ringGeo2.dispose();
      ringMat2.dispose();
      byteGeo.dispose();
      byteMat.dispose();
    };
  }, [calm, selectedNodeId, onSelectNode]);

  return (
    <div className="vrr-3d-wrapper-block">
      <div className="vrr-3d-container axion-3d-container">
        <div className="vrr-3d-canvas-mount" ref={mountRef} />

        <div className="vrr-3d-labels-layer" ref={labelsLayerRef}>
          {AXION_HERO_NODES.map((n, idx) => {
            const isSelected = selectedNodeId === n.id;
            return (
              <button
                key={n.id}
                type="button"
                className={`vrr-node-marker ${isSelected ? "active" : ""}`}
                onClick={(e) => {
                  e.stopPropagation();
                  onSelectNode(n);
                  cyberAudio.playLock();
                }}
                title={`Click to inspect ${n.name}`}
              >
                <span className="marker-dot" style={{ background: n.color }} />
                <span className="marker-num">A0{idx + 1}</span>
                <span className="marker-name">{n.name}</span>
              </button>
            );
          })}
        </div>

        {webGLFailed && (
          <div className="vrr-3d-fallback mono">
            <div className="fallback-core-graphic">
              <div className="fallback-ring r1" style={{ borderColor: "#00e5ff" }} />
              <div className="fallback-ring r2" style={{ borderColor: "#ff2e93" }} />
              <div className="fallback-center" style={{ color: "#00e5ff" }}>[ AXION MATRIX ]</div>
            </div>
            <p className="mt-8 text-warn">
              [!] Hardware WebGL acceleration unavailable. Rendering 2D agent architecture schema fallback.
            </p>
          </div>
        )}

        <div className="vrr-3d-hud-overlay mono">
          <div className="hud-corner top-left">
            <span className="pulse-dot" style={{ background: "#ff2e93", boxShadow: "0 0 10px #ff2e93" }} />
            <span className="text-magenta">AXION // AGENTIC CONTROL MATRIX</span>
          </div>

          <div className="hud-corner top-right">
            <button
              type="button"
              className="vrr-recenter-btn"
              onClick={handleRecenter}
              title="Reset orbital rotation to center"
            >
              [ ⟳ RE-CENTER ]
            </button>
            <span className="hud-hint hidden-mobile text-muted">DRAG TO ROTATE · CLICK NODE</span>
          </div>

          {hoveredNode && (
            <div className="hud-hover-card" data-target-box style={{ borderColor: "#ff2e93" }}>
              <div className="hover-tag text-magenta">{hoveredNode.tag}</div>
              <div className="hover-name text-green">{hoveredNode.name}</div>
              <div className="hover-phase text-muted">STATUS: {hoveredNode.status}</div>
              <div className="hover-desc">{hoveredNode.desc}</div>
            </div>
          )}
        </div>
      </div>

      <div className="vrr-node-pills-bar mono" data-target-box>
        {AXION_HERO_NODES.map((n, idx) => {
          const isSelected = selectedNodeId === n.id;
          return (
            <button
              key={n.id}
              type="button"
              className={`vrr-node-pill ${isSelected ? "active" : ""}`}
              onClick={() => {
                onSelectNode(n);
                cyberAudio.playLock();
              }}
            >
              <span className="pill-dot" style={{ background: n.color }} />
              <span>A0{idx + 1} {n.name.split(" ")[0]}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
