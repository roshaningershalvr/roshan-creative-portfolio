import { SECURITY_CARDS } from "./securityData.js";
import { RESEARCH_PILLARS, RESEARCH_ENTRIES } from "./researchData.js";

// ============================================================
//  ALL SITE CONTENT LIVES HERE. Edit text, add or remove items.
//  Words wrapped in *asterisks* are highlighted in green.
// ============================================================

export const site = {
  name: "Roshan Inggershal VR",
  nameLines: ["Roshan", "Inggershal VR"],
  portfolioUrl: "https://roshanvrportfolio.vercel.app/",
  year: 2026,
  footerRight: "Ethical hacker · Data scientist · AI/ML",
};

// Header links: [section id, label]
export const nav = [
  ["about", "about"],
  ["work", "work"],
  ["security", "security"],
  ["arsenal", "arsenal"],
  ["data", "data"],
  ["research", "research"],
  ["contact", "contact"],
];

export const boot = [
  "mounting /home/roshan ... done",
  "loading agents: axion, jarvis, vrr ... done",
  "security toolkit + ml pipelines ... armed",
  "identity verified. welcome.",
];

// Words that type and delete on the prompt line.
export const roles = [
  "ethical hacker",
  "data scientist",
  "AI/ML engineer",
  "software engineer",
  "IIT Madras BS student",
];

export const lede =
  "Ethical hacker, data scientist and AI/ML engineer. I break systems to harden them, mine data for signal, and build *agentic AI*, *voice interfaces* and *edge ML* that hold up under attack. BS student at IIT Madras and computer science student, working toward research and internships.";

export const ctas = [
  { label: "Security work", href: "#security", solid: true },
  { label: "Open projects", href: "#work" },
  { label: "Establish contact", href: "#contact" },
];

// Scrolling strip under the hero.
export const ticker = [
  "ethical hacking", "secure code review", "hardening", "python", "fastapi",
  "websocket", "react", "next.js", "typescript", "firebase", "gemini",
  "claude api", "whisper", "tinyml", "esp32", "raspberry pi", "scikit-learn",
  "anomaly detection", "risk scoring", "fhir", "agentic ai", "edge ml",
];

export const about = {
  title: "About",
  cmd: "whoami",
  paragraphs: [
    "I'm Roshan, a security-minded data scientist and engineer who works across the stack, from sensor firmware and ML pipelines to FastAPI backends and React front ends. I review what I build the way an attacker would, then fix it. I'm pursuing the IIT Madras BS degree alongside regular college coursework in computer science.",
    "I take part in hackathons, ship working prototypes, and keep a written plan for DSA, projects, the IITM degree and internships through 2028-29. My longer-term goal is graduate research at a top university and work I'm proud of in AI.",
  ],
  // [label, value, highlight?]
  facts: [
    ["name", "Roshan Inggershal VR"],
    ["role", "Ethical hacker · data scientist"],
    ["also", "AI/ML + software engineer"],
    ["study", "IIT Madras BS + CS"],
    ["base", "India"],
    ["focus", "agents, voice, edge ML"],
    ["status", "building", true],
  ],
};

// Each card: tag (small label), status (green badge), title, text, bullets, chips
export const work = {
  id: "work",
  title: "Selected work",
  cmd: "ls ./projects",
  cards: [
    {
      tag: "voice · agents",
      status: "access granted",
      title: "AXION & JARVIS",
      text: "JARVIS is a voice-first AI assistant, and AXION is the agentic framework underneath it. I moved an early macOS codebase to Windows, hardened its security, fixed async database issues and wired in PowerShell for OS control.",
      bullets: [
        "Working Windows 10 build on FastAPI, WebSocket and the Web Speech API.",
        "Reviewed the code for exposed keys, a double audio invocation bug, a safety-checker flaw and path traversal.",
      ],
      chips: ["FastAPI", "WebSocket", "Web Speech API", "PowerShell"],
    },
    {
      tag: "healthcare",
      status: "access granted",
      title: "CAREINTAKE",
      text: "An AI clinical history-taking kiosk for AYUSH outpatient departments, designed for AIIA under the Ministry of Ayush. Patients speak or touch their way through a history before they see the doctor.",
      bullets: [
        "Adaptive SOCRATES-style questioning plus AYUSH assessments: Dashavidha Pariksha, Ahara-Vihara and a CCRAS-based Prakriti.",
        "FHIR-compliant, ABHA-linked records. Autonomous diagnosis and prescribing are deliberately out of MVP scope.",
        "Planned Bhashini integration for speech, OCR and text normalization.",
      ],
      chips: ["Next.js", "TypeScript", "FastAPI", "Gemini", "Firebase", "FHIR"],
    },
    {
      tag: "industrial safety",
      status: "access granted",
      title: "Retrofit",
      text: "Predictive safety for small manufacturers. It fuses gas, temperature, humidity, airflow and pressure readings to catch leaks and fire risk early, running on low-cost edge hardware.",
      bullets: [
        "TinyML on ESP32 and Raspberry Pi with a fail-safe hardware design, alerts via FastAPI and Firebase, and a React dashboard.",
        "Isolation Forest and One-Class SVM anomaly detection feeding a four-band risk score.",
        "Designed for robust, continuous edge operation in industrial environments.",
      ],
      chips: ["TinyML", "ESP32", "Isolation Forest", "One-Class SVM", "React"],
    },
    {
      tag: "founder · early stage",
      status: "prototype verified",
      title: "VRR",
      text: "AI Workforce Operating System (WOS). Connects human capability extraction, dense vector skill-to-job matching (98.36% Top-1 accuracy prototype), and adaptive reskilling roadmaps into a continuous intelligence infrastructure.",
      bullets: [
        "Dense semantic matching benchmarked across all-MiniLM, BGE, and e5-base-v2 on 61 canonical engineering disciplines.",
        "5-layer architecture: multi-agent intelligence, demand velocity tracking, and institutional labor APIs.",
        "Zero-retention privacy sandbox with client-side PII sanitization and guardrailed DAG execution.",
      ],
      chips: ["Dense Embeddings", "Workforce OS", "Cosine Similarity", "Multi-Agent Workflows", "Vector Roadmaps", "Interactive 3D"],
    },
  ],
};

export const security = {
  id: "security",
  title: "Security",
  cmd: "nmap ./my-systems",
  cards: SECURITY_CARDS,
};

export const data = {
  id: "data",
  title: "Data & ML",
  cmd: "python analyze.py",
  cards: [
    {
      tag: "anomaly detection",
      status: "pipeline",
      title: "Sensor fusion pipeline",
      text: "For Retrofit I designed the full data path from raw readings to a risk decision.",
      bullets: [
        "Multi-sensor fusion across gas, temperature, humidity, airflow and pressure.",
        "Isolation Forest and One-Class SVM for unsupervised anomaly detection.",
        "A four-band risk score that turns model output into an action.",
        "Datasets evaluated: UCI Gas Sensor Array Drift, Kaggle Smoke Detection and MultimodalGasData.",
      ],
      chips: ["scikit-learn", "TinyML", "feature fusion", "risk scoring"],
    },
    {
      tag: "applied ai",
      status: "deployed in design",
      title: "Models with guardrails",
      text: "I use models where they help and constrain them where they could hurt.",
      bullets: [
        "CAREINTAKE: adaptive questioning with Gemini, structured into FHIR-compliant records.",
        "JARVIS and VRR: LLM-driven agents with safety checks around tool use.",
        "Edge inference on ESP32 and Raspberry Pi, where compute and memory are tight.",
      ],
      chips: ["Gemini", "Claude API", "Whisper", "FHIR"],
    },
  ],
};

export const research = {
  id: "research",
  title: "Research",
  cmd: "cat ./interests",
  panels: RESEARCH_PILLARS,
  entries: RESEARCH_ENTRIES,
};

export const contact = {
  id: "contact",
  title: "Contact",
  cmd: "curl https://roshanvrportfolio.vercel.app/",
  intro:
    "Open to internships, research collaborations and hackathon teams. Explore my verified portfolio and connect directly:",
};

// Terminal commands. out = [text, style] where style: c green, k cyan, m grey, w yellow, "" plain.
// "help" and "clear" are built in.
export const commands = [
  { name: "whoami", desc: "who I am", out: [
    ["Roshan Inggershal VR", "c"],
    ["ethical hacker · data scientist · AI/ML engineer · software engineer", ""],
    ["BS student at IIT Madras + computer science student", ""],
  ]},
  { name: "security", desc: "ethical hacking work", out: [
    ["security review of my agent stack: exposed keys, path traversal, a guardrail logic flaw", "k"],
    ["hardening by default: session tokens, CORS, fail-safe hardware, scoped AI permissions", "k"],
  ]},
  { name: "data", desc: "data science + ML work", out: [
    ["multi-sensor fusion, isolation forest + one-class svm, four-band risk scoring", "k"],
    ["adaptive clinical questioning (gemini) into fhir records", "k"],
  ]},
  { name: "projects", desc: "what I have built", out: [
    ["AXION/JARVIS   voice-first agentic assistant", "k"],
    ["CAREINTAKE      AI clinical history kiosk for AYUSH OPDs", "k"],
    ["Retrofit        predictive industrial safety on edge hardware", "k"],
    ["VRR             AI Workforce Operating System", "k"],
  ]},
  { name: "stack", desc: "tools I use", out: [
    ["python · fastapi · websocket · react · next.js · typescript · tailwind", ""],
    ["firebase · gemini · claude api · whisper · tinyml · esp32 · raspberry pi · scikit-learn", ""],
  ]},
  { name: "research", desc: "what I study", out: [
    ["post-transformer architectures: mamba/ssm, linear + sparse attention, moe, hybrids", ""],
    ["quantum + ai: near-term ml opportunity vs speculation", ""],
  ]},
  { name: "goals", desc: "where I am headed", out: [
    ["internships, hackathons, graduate research at a top university.", ""],
    ["plan: DSA, projects and the IITM degree through 2028-29.", ""],
  ]},
  { name: "contact", desc: "how to reach me", out: [["https://roshanvrportfolio.vercel.app/", "c"]] },
];
