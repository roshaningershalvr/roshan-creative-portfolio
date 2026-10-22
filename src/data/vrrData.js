// VRR AI Workforce Operating System — Complete Strategic & Technical Data
// Derived directly from "AI Workforce Operating System Complete Strategic & Technical Manual"
// Founder: Roshan Inggershal VR
// Distinguishes strictly between Implemented Prototypes (e.g. WOS ML pipeline), Planned MVP, and Long-Term Vision.

export const VRR_HERO_NODES = [
  {
    id: "skills",
    name: "HUMAN SKILLS",
    tag: "CORE_ASSET",
    coord: [-2.8, 0.7, 0.8],
    color: "#00ff6a",
    phase: "MVP (Phase 1)",
    desc: "Atomic vector representations of human capabilities, proficiencies, tools, and cognitive strengths.",
    inputs: "Resumes, self-assessments, project code, verified certifications",
    outputs: "Standardized dense embeddings, skill confidence vectors",
    systemRole: "The atomic foundation of the skill graph upon which all matching, gap analysis, and roadmapping depend.",
  },
  {
    id: "careers",
    name: "CAREER PATHS",
    tag: "TRAJECTORY",
    coord: [2.8, 0.8, 0.6],
    color: "#00e5ff",
    phase: "MVP (Phase 1)",
    desc: "Target role definitions, transition trajectories, and progression milestones across industries.",
    inputs: "Industry occupational frameworks, title taxonomies, career shift patterns",
    outputs: "Role vector embeddings, prerequisite milestone sequences",
    systemRole: "Maps where human talent can transition next based on proximity in vector space.",
  },
  {
    id: "jobs",
    name: "JOB MARKET",
    tag: "DEMAND_SIDE",
    coord: [2.2, -1.2, 0.9],
    color: "#ffd166",
    phase: "Phase 2 (Planned)",
    desc: "Aggregated, real-time employer hiring signals, requisition volumes, and required qualifications.",
    inputs: "Live job feeds, hiring announcements, company growth signals",
    outputs: "Real-time demand weights, emerging skill frequency signals",
    systemRole: "Weights skill gaps so users prioritize high-demand, future-safe competencies.",
  },
  {
    id: "education",
    name: "EDUCATION",
    tag: "TALENT_SUPPLY",
    coord: [-2.2, -1.2, -0.8],
    color: "#00e5ff",
    phase: "Phase 3 (Vision)",
    desc: "University curricula, online learning catalogs, bootcamps, and institutional degree pipelines.",
    inputs: "Syllabi, course modules, graduation statistics, institutional programs",
    outputs: "Curriculum gap scores, industry alignment index",
    systemRole: "Connects institutional learning pipelines directly to real-time economic demand.",
  },
  {
    id: "roadmaps",
    name: "LEARNING ROADMAPS",
    tag: "ACTION_PLAN",
    coord: [-1.2, 1.8, -0.7],
    color: "#00ff6a",
    phase: "MVP (Phase 1)",
    desc: "Personalized, milestone-driven learning plans bridging user skill deltas to target career roles.",
    inputs: "Skill gap vectors, user learning pace, resource availability",
    outputs: "Ordered milestone sequences, recommended project specs, check-in intervals",
    systemRole: "Transforms abstract career intelligence into concrete, step-by-step actionable learning.",
  },
  {
    id: "automation",
    name: "AUTOMATION EXPOSURE",
    tag: "RISK_RADAR",
    coord: [1.2, 1.8, -0.8],
    color: "#ff2e93",
    phase: "MVP (Phase 1)",
    desc: "Task-level AI and robotics exposure modeling evaluating which capabilities face automation pressure.",
    inputs: "Task breakdown indices, AI capability benchmarks, labor economics reports",
    outputs: "Task exposure index, augmentation potential score, transition urgency index",
    systemRole: "Alerts users to commoditizing skills and guides them toward high-agency human strengths.",
  },
  {
    id: "analytics",
    name: "WORKFORCE ANALYTICS",
    tag: "B2B_INTELLIGENCE",
    coord: [2.6, -0.2, -1.1],
    color: "#00e5ff",
    phase: "Phase 2 (Planned)",
    desc: "Organizational talent visibility, internal skill inventory mapping, and attrition forecasting.",
    inputs: "Enterprise employee profiles, internal mobility records, team performance data",
    outputs: "Departmental skill heatmaps, reskilling ROI metrics, retention forecasts",
    systemRole: "Provides enterprise leaders with predictive intelligence to reskill from within.",
  },
  {
    id: "economic",
    name: "ECONOMIC INTELLIGENCE",
    tag: "MACRO_LAYER",
    coord: [-2.6, 0.1, -1.1],
    color: "#ffd166",
    phase: "Phase 3 (Vision)",
    desc: "Macro-level regional labor health, wage dynamics, and structural employment transition modeling.",
    inputs: "Census data, labor bureau feeds, regional industrial policy targets",
    outputs: "Regional skill gap indices, workforce transition simulations",
    systemRole: "Empowers public policy makers and regional development boards to plan national workforce resilience.",
  },
];

export const VRR_INNOVATION_MODULES = [
  {
    id: "inn-01",
    num: "01",
    title: "AI Career Intelligence",
    tag: "MVP_FOUNDATION",
    stage: "PROTOTYPE IMPLEMENTED",
    stageType: "implemented",
    summary:
      "A personal career intelligence engine parsing resumes, mapping dense skill vectors, identifying missing qualifications, and generating custom career trajectories.",
    flow: "RESUME → SKILL EXTRACTION → VECTOR SEARCH → CAREER OPTIONS → LEARNING ROADMAP",
    problem:
      "Individuals don't know which of their current skills are becoming obsolete, lack clear paths to future-safe roles, and receive generic advice that ignores their actual skill graph.",
    solution:
      "Converts unstructured resume text into dense 384d/768d skill vectors, executes cosine similarity against standardized role taxonomies, and computes calibrated readiness scores.",
    inputsOutputs: {
      inputs: "Raw resume PDF/text, user career aspirations, current location",
      outputs: "Structured skill inventory, top-5 recommended career paths, readiness score (0-100%)",
    },
    methods:
      "Hybrid lexical tokenization + SentenceTransformer dense embeddings (all-MiniLM-L6-v2 / intfloat/e5-base-v2). Benchmark verified with 98.4% Precision@1.",
    limitations:
      "Requires user verification of extracted skills to ensure domain subtleties (e.g. distinguishing Python for DevOps vs Python for Quantitative Trading) are accurately disambiguated.",
  },
  {
    id: "inn-02",
    num: "02",
    title: "Workforce Demand Intelligence",
    tag: "LABOR_SIGNALS",
    stage: "PLANNED (PHASE 2)",
    stageType: "planned",
    summary:
      "A real-time labor market telemetry layer tracking requisition volume, emerging skill clusters, and shifting compensation trends across regions.",
    flow: "JOB FEEDS → SKILL EXTRACTION → TIME-SERIES AGGREGATION → DEMAND WEIGHT MATRIX",
    problem:
      "Hiring pipelines are reactive rather than predictive. Companies post requisitions only when shortages become critical, creating prolonged unfilled vacancies.",
    solution:
      "Scrapes and aggregates authorized job postings into structured skill-frequency time series, applying temporal exponential decay to capture recent market accelerations.",
    inputsOutputs: {
      inputs: "Normalized job postings, company hiring announcements, regional compensation logs",
      outputs: "Skill demand velocity scores, emerging cluster alerts, role-to-skill affinity graphs",
    },
    methods:
      "Natural Language Entity Extraction + Graph Centrality Algorithms + Exponentially Weighted Moving Average (EWMA) demand velocity scoring.",
    limitations:
      "Job postings reflect formal corporate intent rather than actual fulfilled headcount; requires correlation with employer outcome surveys to avoid phantom-posting bias.",
  },
  {
    id: "inn-03",
    num: "03",
    title: "Automation Exposure Intelligence",
    tag: "RISK_ANALYSIS",
    stage: "PROTOTYPE DESIGN",
    stageType: "prototype",
    summary:
      "Granular task-level automation modeling that decomposes career roles into specific activities to evaluate AI substitution and augmentation vectors.",
    flow: "ROLE DECOMPOSITION → TASK-LEVEL CAPABILITY MAPPING → EXPOSURE MATRIX → AUGMENTATION ROADMAP",
    problem:
      "Sensationalist headlines reduce whole occupations to crude 'X% will be eliminated' scores, generating panic without providing actionable career evolution advice.",
    solution:
      "Breaks roles into atomic O*NET task statements, mapping each task against known LLM/multimodal capabilities. Highlights which tasks are automatable vs which require human agency.",
    inputsOutputs: {
      inputs: "Occupational task lists, current AI benchmark performance metrics (MMLU, SWE-bench)",
      outputs: "Task exposure profile, human-AI augmentation score, safe pivot trajectory recommendations",
    },
    methods:
      "Task-level rubric scoring evaluating reasoning depth, physical embodiment, emotional empathy, and real-time accountability constraints.",
    limitations:
      "Estimates are model-based approximations reflecting current technology frontiers; does not predict regulatory, economic, or cultural barriers to adoption.",
  },
  {
    id: "inn-04",
    num: "04",
    title: "Adaptive Learning Roadmaps",
    tag: "RESKILLING_ENGINE",
    stage: "MVP (PHASE 1)",
    stageType: "prototype",
    summary:
      "Dynamic pedagogical milestone generator translating identified skill gaps into project-driven learning sequences with verified prerequisites.",
    flow: "SKILL GAP DELTA → PREREQUISITE DAG → MILESTONE SEQUENCING → ACTIVE PROGRESS TRACKING",
    problem:
      "Learners face infinite course catalogs on MOOC platforms, leading to 90%+ abandonment rates because courses are disconnected from real hiring requirements.",
    solution:
      "Builds a directed acyclic graph (DAG) of prerequisite skills, prioritizing topics by market demand weight, and prescribing hands-on portfolio build projects.",
    inputsOutputs: {
      inputs: "Missing skill set, weekly available hours, learner background proficiency",
      outputs: "Personalized 6-to-12 week milestone syllabus, capstone project blueprints, self-test checkpoints",
    },
    methods:
      "Topological sort over educational prerequisite graphs + constraint optimization balancing difficulty gradients.",
    limitations:
      "Requires user self-reporting of completion or GitHub repository integration to verify genuine skill acquisition.",
  },
  {
    id: "inn-05",
    num: "05",
    title: "Workforce Digital Twin",
    tag: "MACRO_SIMULATION",
    stage: "LONG-TERM VISION",
    stageType: "vision",
    summary:
      "A computational macro-model simulating interactions between talent supply, educational output, automation shocks, and corporate hiring demand.",
    flow: "TALENT POOLS + EDUCATION PIPELINES + AUTOMATION SHOCKS → MULTI-AGENT SIMULATION → SCENARIO FORECAST",
    problem:
      "Educational institutions and governments make multi-year curriculum and infrastructure investments based on backward-looking, stale economic surveys.",
    solution:
      "Creates an interconnected multi-agent graph of regional workforce ecosystems, allowing policymakers to simulate 'what if' scenarios (e.g. generative AI impact on BPO sectors).",
    inputsOutputs: {
      inputs: "Regional demographic data, university graduation volumes, sector economic forecasts",
      outputs: "Projected skill deficit curves, transition bottleneck warnings, economic resilience scores",
    },
    methods:
      "Agent-Based Modeling (ABM) combined with System Dynamics differential flow equations.",
    limitations:
      "Highly complex simulation requiring extensive verified data inputs; currently conceptual and intended for Phase 3/4 execution.",
  },
  {
    id: "inn-06",
    num: "06",
    title: "Workforce Intelligence Feedback Loop",
    tag: "CONTINUOUS_LEARNING",
    stage: "SYSTEM SPECIFICATION",
    stageType: "planned",
    summary:
      "The proprietary compounding flywheel where real-world career transitions and hiring outcomes continuously retrain and calibrate matching algorithms.",
    flow: "LEARN SKILL → COMPLETE PROJECT → ATTAIN INTERVIEW / HIRE → RECORD OUTCOME → RETRAIN EMBEDDING WEIGHTS",
    problem:
      "Career advisory platforms deliver static advice with zero accountability for whether their recommendations actually led to employment.",
    solution:
      "Tracks verified user employment transitions and salary increases (with explicit user consent), using outcome deltas as reward signals to fine-tune matching embeddings.",
    inputsOutputs: {
      inputs: "Anonymized user transition records (initial profile, completed roadmap, hired role, time-to-hire)",
      outputs: "Calibrated skill-relevance weights, validated transition probabilities",
    },
    methods:
      "Reinforcement Learning from Historical Outcomes (RLHO) + Bayesian update of role-skill affinity matrices.",
    limitations:
      "Requires critical mass of active users (10,000+ target in Phase 1) before statistical significance can be achieved without overfitting.",
  },
  {
    id: "inn-07",
    num: "07",
    title: "Regional Skill Intelligence",
    tag: "GEO_ANALYTICS",
    stage: "RESEARCH DIRECTION",
    stageType: "vision",
    summary:
      "Geospatial workforce intelligence mapping localized skill surpluses, deficits, and talent migration corridors across states and metropolitan areas.",
    flow: "GEOCODED RESUMES + LOCAL REQUISITIONS → SPATIAL DENSITY ESTIMATION → REGIONAL HEATMAPS",
    problem:
      "National labor statistics aggregate diverse regional economies into uniform averages, obscuring acute localized shortages (e.g. AI systems talent in Tier 2 cities).",
    solution:
      "Generates interactive geographic heatmaps highlighting localized supply-demand mismatches, informing remote hiring policies and state-level vocational initiatives.",
    inputsOutputs: {
      inputs: "Regional talent profiles, localized employer postings, municipal industrial incentives",
      outputs: "Tier-wise skill density maps, salary parity indices, talent retention metrics",
    },
    methods:
      "Spatial clustering (DBSCAN) + Choropleth geographic mapping + regional wage normalization.",
    limitations:
      "Data density varies significantly between tech hubs (Bengaluru, Hyderabad) and developing industrial corridors.",
  },
  {
    id: "inn-08",
    num: "08",
    title: "AI Workforce Research Engine",
    tag: "ACADEMIC_FOUNDATION",
    stage: "ONGOING INVESTIGATION",
    stageType: "prototype",
    summary:
      "An open academic research testbed investigating human-AI workforce dynamics, skill graph topology, and non-linear career transition mathematics.",
    flow: "ANONYMIZED GRAPHS → MATHEMATICAL BENCHMARKING → EMPIRICAL FINDINGS → OPEN RESEARCH NOTES",
    problem:
      "Much of current workforce literature is either purely qualitative or relies on proprietary corporate datasets inaccessible to independent researchers.",
    solution:
      "Provides structured, anonymized benchmarks (such as the WOS 61-record evaluation suite) to test and publish reproducible skill-matching and gap-detection algorithms.",
    inputsOutputs: {
      inputs: "Anonymized synthetic skill catalogs, curated evaluation benchmarks",
      outputs: "Open-source embedding comparison reports, ranking accuracy benchmarks",
    },
    methods:
      "Empirical model comparison (all-MiniLM-L6-v2 vs intfloat/e5-base-v2 vs BAAI/bge-base-en-v1.5) across Top-K retrieval, P@K, and R@K.",
    limitations:
      "Current benchmark reflects developer/technical career profiles; expansion to healthcare, finance, and creative roles is ongoing.",
  },
];

export const VRR_ARCHITECTURE_LAYERS = [
  {
    id: "layer-1",
    num: "01",
    name: "Interface Layer",
    tech: "React 18 · Next.js · Vanilla CSS · Three.js WebGL",
    status: "IMPLEMENTED IN PORTFOLIO",
    statusType: "implemented",
    purpose:
      "Delivers the interactive control surface, 3D workforce intelligence network visualization, and responsive user workflow.",
    inputs: "User pointer events, resume text, target role selections",
    outputs: "Interactive DOM updates, 3D WebGL scene rendering, client-side session states",
    security: "Client-side input sanitization, CSP headers, zero external third-party tracking scripts",
  },
  {
    id: "layer-2",
    num: "02",
    name: "Application & API Layer",
    tech: "Python 3.11+ · FastAPI · REST & WebSocket Endpoints",
    status: "PROTOTYPE ARCHITECTURE",
    statusType: "prototype",
    purpose:
      "Orchestrates authentication, request routing, file intake parsing, rate-limiting, and microservice communication.",
    inputs: "HTTP requests, uploaded resume documents, user profile edits",
    outputs: "Validated JSON payloads, async task dispatching, structured responses",
    security: "JWT bearer tokens, ephemeral intake sessions, file size limits (2MB), MIME-type verification",
  },
  {
    id: "layer-3",
    num: "03",
    name: "Intelligence & ML Layer",
    tech: "PyTorch · SentenceTransformers · intfloat/e5-base-v2 · scikit-learn",
    status: "BENCHMARKED IN D:\\WOS\\ml",
    statusType: "implemented",
    purpose:
      "The algorithmic core executing skill vectorization, hybrid lexical-semantic retrieval, cosine matching, and gap demand weighting.",
    inputs: "Extracted candidate text, target job descriptions, demand signal matrices",
    outputs: "Ranked role recommendations, missing skill lists, readiness scores (0-100%)",
    security: "Isolated local inference runtimes, deterministic scoring bounds, prompt injection defense",
  },
  {
    id: "layer-4",
    num: "04",
    name: "Data & Vector Layer",
    tech: "PostgreSQL · pgvector / Qdrant / Pinecone · Redis Cache",
    status: "LOCAL ARTIFACTS / SPECIFIED",
    statusType: "prototype",
    purpose:
      "Persists relational user profiles, skill taxonomies, canonical embeddings, and time-series market signals.",
    inputs: "384d / 768d dense vector floats, relational user records, feedback event logs",
    outputs: "High-speed approximate nearest neighbor (ANN) vector search results, cached query results",
    security: "Encryption at rest (AES-256), TLS 1.3 in transit, automated PII anonymization pipelines",
  },
  {
    id: "layer-5",
    num: "05",
    name: "External Integration Layer",
    tech: "API Gateways · Async Web Scraping Queues · Government Data Connectors",
    status: "PLANNED (PHASE 2/3)",
    statusType: "planned",
    purpose:
      "Ingests external labor statistics, live job board feeds, and university curriculum frameworks into normalized schemas.",
    inputs: "Public job boards, labor bureau feeds, enterprise ATS exports",
    outputs: "De-duplicated market signals, normalized salary ranges, emerging skill mentions",
    security: "Rate-limited outbound crawlers, strict robots.txt compliance, data provenance logging",
  },
];

export const VRR_ROADMAP_PHASES = [
  {
    phase: "PHASE 1",
    horizon: "Year 1",
    title: "AI Career Intelligence Platform (MVP)",
    status: "ACTIVE DEVELOPMENT & PROTOTYPING",
    statusType: "active",
    objective: "Ship the single-user career intelligence engine, validate user demand, and reach 10,000+ active users.",
    audience: "Engineering students, fresh graduates, early-career technical professionals.",
    deliverables: [
      "Automated resume ingestion and dense skill extraction (tested 98.4% P@1).",
      "Cosine-similarity role matching against standardized career taxonomies.",
      "Automation-exposure assessment for task activities.",
      "Personalized 6-to-12 week project-driven learning roadmap generation.",
      "User feedback collection loop to validate recommendation utility.",
    ],
    technicalChallenges:
      "Balancing sentence embedding inference latency with semantic precision; handling domain ambiguity in technical acronyms.",
    metrics: "10,000+ registered users, 70%+ roadmap completion on Week 1, qualitative user satisfaction >4.5/5.",
  },
  {
    phase: "PHASE 2",
    horizon: "Year 2",
    title: "Skill Demand Intelligence (B2B)",
    status: "PLANNED EXPANSION",
    statusType: "planned",
    objective: "Expand from individual career navigation to employer-facing workforce analytics and hiring intelligence.",
    audience: "Technology startups, corporate HR departments, talent recruiters, EdTech providers.",
    deliverables: [
      "Real-time skill demand dashboards tracking hiring velocity across tech sectors.",
      "Internal workforce skill inventory mapping and gap analysis for engineering teams.",
      "Pre-hire candidate readiness scoring reducing initial screening interview cycles.",
      "B2B SaaS subscription tiers and customized workforce intelligence reports.",
    ],
    technicalChallenges:
      "De-duplicating noisy web job postings; ensuring vector databases scale horizontally across millions of daily signals.",
    metrics: "Paying B2B accounts, recurring subscription revenue, 50,000+ candidate profiles indexed.",
  },
  {
    phase: "PHASE 3",
    horizon: "Years 3–5",
    title: "Workforce Infrastructure Layer",
    status: "LONG-TERM VISION",
    statusType: "vision",
    objective: "Evolve into national-scale intelligence infrastructure guiding education curricula and regional labor policy.",
    audience: "State governments, national skill development councils, universities, economic development boards.",
    deliverables: [
      "Regional skill heatmaps identifying metropolitan and rural supply-demand disparities.",
      "Workforce transition forecasting simulating macro automation and industrial shifts.",
      "Institutional curriculum alignment recommendations updated dynamically against market signals.",
      "Predictive ROI modeling for government-subsidized reskilling programs.",
    ],
    technicalChallenges:
      "Integrating disparate public data standards; modeling non-stationary macroeconomic and demographic shocks.",
    metrics: "Adoption by educational boards, institutional partnerships, measurable improvement in graduate placement rates.",
  },
  {
    phase: "PHASE 4",
    horizon: "Long Horizon",
    title: "Global Workforce Infrastructure",
    status: "LONG-TERM MISSION",
    statusType: "vision",
    objective: "The unified intelligence layer underneath careers, hiring, and workforce policy worldwide.",
    audience: "Cross-border institutions, global remote employment markets, international economic bodies.",
    deliverables: [
      "Cross-border skill equivalency mapping standardizing qualifications internationally.",
      "Autonomous labor transition liquidity connecting displaced workers globally to emerging demand.",
      "The definitive global operating system aligning human skill development with AI economic evolution.",
    ],
    technicalChallenges: "Multi-language semantic alignment; complex international labor regulations and data sovereignty laws.",
    metrics: "Global workforce infrastructure standard status.",
  },
];

export const VRR_SIMULATION_PERSONAS = [
  {
    id: "persona-1",
    name: "Arun K. (Junior Backend Developer)",
    experience: "1.5 Years · B.Tech Graduate",
    currentSkills: ["Python", "FastAPI", "Docker", "Git", "REST APIs", "SQL"],
    targetRole: "Machine Learning Engineer",
    targetSkills: ["Python", "Machine Learning", "Docker", "PyTorch", "TensorFlow", "Kubernetes", "MLOps"],
    baseReadiness: 61.8,
    matchedSkills: ["Python", "Docker", "FastAPI / REST APIs"],
    missingSkills: ["PyTorch / TensorFlow", "Machine Learning Theory", "Kubernetes / MLOps"],
    automationExposure: 32,
    exposureNote: "Core backend scripting has moderate LLM code-generation exposure; transitioning to ML pipelines and model serving increases human architectural agency.",
    roadmap: [
      { week: "Weeks 1–3", focus: "ML Fundamentals & PyTorch", project: "Train a convolutional image classifier from scratch with custom training loop." },
      { week: "Weeks 4–7", focus: "Model Serving & Inference Optimization", project: "Deploy a quantised LLM/embedding endpoint behind FastAPI with batching." },
      { week: "Weeks 8–10", focus: "Kubernetes & Production MLOps", project: "Build an end-to-end continuous training and evaluation pipeline with Docker & K8s." },
    ],
  },
  {
    id: "persona-2",
    name: "Sneha R. (Frontend Web Developer)",
    experience: "2 Years · Self-Taught & Bootcamp",
    currentSkills: ["JavaScript", "React", "HTML5", "CSS3", "Tailwind CSS", "Redux"],
    targetRole: "Full-Stack AI Application Engineer",
    targetSkills: ["React", "TypeScript", "Node.js", "Python", "Vector Databases", "LangChain / LlamaIndex", "FastAPI"],
    baseReadiness: 48.5,
    matchedSkills: ["React", "JavaScript / Frontend Architecture"],
    missingSkills: ["Python / FastAPI", "Vector Search (Pinecone/pgvector)", "LLM Agent Toolchains"],
    automationExposure: 42,
    exposureNote: "Static UI component creation is heavily augmented by AI tools; pivoting to full-stack AI orchestration and real-time streaming interfaces secures long-term value.",
    roadmap: [
      { week: "Weeks 1–3", focus: "Python & FastAPI Backend Foundations", project: "Build an asynchronous REST backend with JWT authentication and rate limiting." },
      { week: "Weeks 4–6", focus: "Vector Embeddings & Semantic Search", project: "Implement semantic document search using pgvector and SentenceTransformers." },
      { week: "Weeks 7–10", focus: "Agent Tool Integration & Streaming UI", project: "Connect a voice/text agent with tool-calling capabilities to a streaming React UI." },
    ],
  },
  {
    id: "persona-3",
    name: "Vikram M. (Data Analyst)",
    experience: "3 Years · Statistics Background",
    currentSkills: ["SQL", "Excel", "Tableau", "Python", "Pandas", "Hypothesis Testing"],
    targetRole: "Scientific AI & Decision Intelligence Lead",
    targetSkills: ["Python", "SQL", "Scikit-Learn", "Causal Inference", "Time-Series Forecasting", "PyTorch"],
    baseReadiness: 56.0,
    matchedSkills: ["Python", "SQL", "Statistical Methods"],
    missingSkills: ["Causal Inference", "Deep Temporal Modeling (LSTMs/Mamba)", "ML System Deployment"],
    automationExposure: 51,
    exposureNote: "Basic dashboard generation and SQL querying are increasingly automated by natural-language BI agents; transitioning into causal analysis and scientific forecasting delivers high differentiation.",
    roadmap: [
      { week: "Weeks 1–4", focus: "Causal Inference & Do-Calculus", project: "Analyze synthetic marketing/sensor data with Double Machine Learning for causal effect estimation." },
      { week: "Weeks 5–8", focus: "Advanced Multivariate Time-Series", project: "Implement an anomaly detection and forecasting pipeline using Isolation Forests and State-Space Models." },
      { week: "Weeks 9–12", focus: "Decision Intelligence Systems", project: "Deliver an executive decision engine balancing uncertainty estimates with economic trade-offs." },
    ],
  },
];

export const VRR_BUSINESS_TIERS = [
  {
    tier: "Free Tier",
    audience: "Individual Students & Fresh Graduates",
    price: "₹0 / Free Always",
    highlight: "Democratizing Career Direction",
    features: [
      "Resume upload & dense skill extraction",
      "Top-3 career trajectory matches",
      "Basic automation exposure summary",
      "Standard 6-week curriculum outline",
      "Access to open research notes and benchmarks",
    ],
  },
  {
    tier: "Pro Individual",
    audience: "Early-Career Engineers & Up-skillers",
    price: "₹499 / Month (Proposed)",
    highlight: "High-Agency Career Acceleration",
    features: [
      "Unlimited resume iterations & target role matching",
      "Deep task-level automation breakdown",
      "Dynamic DAG learning roadmap with capstone projects",
      "Live demand-weighted skill prioritization",
      "Interview readiness checklist & GitHub project reviews",
    ],
  },
  {
    tier: "Enterprise Team",
    audience: "Startups & Corporate Engineering Leads",
    price: "Custom B2B SaaS",
    highlight: "Predictive Internal Talent Mobility",
    features: [
      "Company-wide skill inventory dashboard",
      "Internal talent mobility & reskilling recommendations",
      "Automated candidate resume screening vs job specs",
      "Tech stack obsolescence warning radar",
      "Dedicated API access & custom taxonomy mapping",
    ],
  },
  {
    tier: "Institutional",
    audience: "State Governments & Universities",
    price: "Public-Private Partnerships",
    highlight: "Regional Economic Resilience",
    features: [
      "Regional skill heatmaps & talent migration analytics",
      "Curriculum alignment gap reports for universities",
      "Workforce transition simulation sandboxes",
      "Targeted reskilling program ROI measurement",
      "Sovereign data governance & dedicated on-prem deployments",
    ],
  },
];
