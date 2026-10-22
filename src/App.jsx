import { useEffect, useState, useCallback } from "react";
import {
  about, work, security, data, research, contact,
} from "./data/content.js";
import MatrixRain from "./components/MatrixRain.jsx";
import Overlays from "./components/Overlays.jsx";
import CyberCursor from "./components/CyberCursor.jsx";
import CyberHUD from "./components/CyberHUD.jsx";
import GlitchToast from "./components/GlitchToast.jsx";
import GlitchOverlay from "./components/GlitchOverlay.jsx";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Ticker from "./components/Ticker.jsx";
import About from "./components/About.jsx";
import CardSection from "./components/CardSection.jsx";
import SecuritySection from "./components/SecuritySection.jsx";
import HackerArsenal from "./components/HackerArsenal.jsx";
import DataMLSection from "./components/DataMLSection.jsx";
import Research from "./components/Research.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import VRRView from "./components/vrr/VRRView.jsx";
import RetrofitView from "./components/retrofit/RetrofitView.jsx";
import CareIntakeView from "./components/careintake/CareIntakeView.jsx";
import AxionJarvisView from "./components/axion/AxionJarvisView.jsx";
import { cyberAudio } from "./utils/cyberAudio.js";

// Animations are on by default. The FX button in the header turns them off.
function useCalm() {
  const [calm, setCalm] = useState(() => {
    try { return localStorage.getItem("calm") === "1"; } catch { return false; }
  });
  useEffect(() => {
    document.documentElement.classList.toggle("calm", calm);
    try { localStorage.setItem("calm", calm ? "1" : "0"); } catch { /* storage blocked */ }
  }, [calm]);
  return [calm, setCalm];
}

function getInitialView() {
  if (typeof window === "undefined") return "home";
  const path = window.location.pathname.toLowerCase();
  const hash = window.location.hash.toLowerCase();

  if (path.includes("/projects/retrofit") || hash.includes("retrofit")) {
    return "retrofit";
  }
  if (path.includes("/projects/careintake") || hash.includes("careintake")) {
    return "careintake";
  }
  if (path.includes("/projects/axion-jarvis") || hash.includes("axion-jarvis") || hash.includes("jarvis") || path.includes("/projects/axion")) {
    return "axion-jarvis";
  }
  if (path.includes("/projects/vrr") || hash.includes("vrr")) {
    return "vrr";
  }

  return "home";
}

export default function App() {
  const [calm, setCalm] = useCalm();
  const [isGlitching, setIsGlitching] = useState(false);
  const [currentView, setCurrentView] = useState(getInitialView);

  // Sync routing on browser forward/back
  useEffect(() => {
    const handlePopState = () => {
      setCurrentView(getInitialView());
    };
    window.addEventListener("popstate", handlePopState);
    window.addEventListener("hashchange", handlePopState);
    return () => {
      window.removeEventListener("popstate", handlePopState);
      window.removeEventListener("hashchange", handlePopState);
    };
  }, []);

  const navigateToProject = (projId) => {
    setCurrentView(projId);
    try {
      window.history.pushState(null, "", `/projects/${projId}`);
    } catch {
      window.location.hash = `#/projects/${projId}`;
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navigateToHome = () => {
    setCurrentView("home");
    try {
      window.history.pushState(null, "", "/");
    } catch {
      window.location.hash = "";
    }
    setTimeout(() => {
      const el = document.getElementById("work");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const triggerGlitch = useCallback(() => {
    if (isGlitching) return;
    setIsGlitching(true);
    cyberAudio.playGlitch();
    document.body.classList.add("system-overload-glitch");

    setTimeout(() => {
      setIsGlitching(false);
      document.body.classList.remove("system-overload-glitch");
      cyberAudio.playLock();
    }, 2400);
  }, [isGlitching]);

  const isProjectView = currentView !== "home";

  return (
    <>
      <CyberCursor calm={calm} />
      <MatrixRain calm={calm} />
      <Overlays />
      <GlitchOverlay active={isGlitching} />
      {!isProjectView && <CyberHUD onTriggerGlitch={triggerGlitch} calm={calm} />}

      <div className={`wrap flicker ${isGlitching ? "glitching-wrap" : ""}`}>
        {currentView === "vrr" && (
          <VRRView calm={calm} onBack={navigateToHome} onTriggerGlitch={triggerGlitch} />
        )}

        {currentView === "retrofit" && (
          <RetrofitView calm={calm} onBack={navigateToHome} onTriggerGlitch={triggerGlitch} />
        )}

        {currentView === "careintake" && (
          <CareIntakeView calm={calm} onBack={navigateToHome} onTriggerGlitch={triggerGlitch} />
        )}

        {currentView === "axion-jarvis" && (
          <AxionJarvisView calm={calm} onBack={navigateToHome} onTriggerGlitch={triggerGlitch} />
        )}

        {currentView === "home" && (
          <>
            <Header calm={calm} onToggleFx={() => setCalm((c) => !c)} />
            <main>
              <Hero calm={calm} onTriggerGlitch={triggerGlitch} />
              <Ticker />
              <About data={about} calm={calm} />
              <CardSection
                section={work}
                calm={calm}
                onOpenProject={navigateToProject}
              />
              <SecuritySection calm={calm} />
              <HackerArsenal calm={calm} />
              <DataMLSection calm={calm} />
              <Research section={research} calm={calm} />
              <Contact section={contact} calm={calm} />
            </main>
            <Footer />
          </>
        )}
      </div>

      {!isProjectView && <GlitchToast calm={calm} />}
    </>
  );
}
