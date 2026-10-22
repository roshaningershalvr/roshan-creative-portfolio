// Rigorous Data & ML Section Data
// Covering Applied AI/ML, Quantum Computing, and Nuclear Fusion Plasma Intelligence.
// All statuses are truthful: COMPLETED (substantiated foundation), PROTOTYPE (active development), or PLANNED (proposed scientific research).

export const DATA_ML_CATEGORIES = [
  { id: "all", title: "All Projects (10)" },
  { id: "applied", title: "Applied AI & Machine Learning" },
  { id: "quantum", title: "Quantum Computing & QML" },
  { id: "fusion", title: "Nuclear Fusion & Plasma Intelligence" },
];

export const DATA_ML_PROJECTS = [
  // -------------------------------------------------------------
  // CATEGORY A: APPLIED AI & MACHINE LEARNING
  // -------------------------------------------------------------
  {
    id: "cyclonevision-ai",
    title: "CycloneVision AI",
    category: "applied",
    categoryTitle: "Applied AI / Geospatial",
    tag: "GEOSPATIAL_AI",
    status: "PLANNED",
    summary: "Deep learning framework for tropical cyclone detection, intensity classification, and track trajectory analysis using multispectral satellite observations.",
    description: "Combines geostationary satellite imagery (INSAT-3D/3DR, GOES, Himawari) with numerical weather prediction reanalysis to detect cyclone centers, estimate Maximum Sustained Winds (Vmax), and forecast short-term intensification.",
    problemStatement: "Tropical cyclones cause devastating coastal impact across the North Indian Ocean and Bay of Bengal. Rapid intensification (RI) remains difficult to forecast with numerical models alone due to convective scale uncertainties.",
    objective: "Can spatiotemporal convolutional-recurrent architectures reliably predict cyclone intensity changes 6-24 hours ahead using infrared/water-vapor brightness temperatures without future information leakage?",
    dataset: "NOAA IBTrACS (International Best Track Archive for Climate Stewardship) combined with open INSAT-3D/3DR (MOSDAC/ISRO) and NASA MERRA-2 meteorological reanalysis data. Licensed under open government/scientific terms.",
    dataQualityNotes: "Requires handling irregular satellite scan intervals, parallax displacement at high view zenith angles, and missing thermal infrared frames during sensor maintenance cycles.",
    technologies: "Python · PyTorch · xarray · Rasterio · Cartopy · NumPy · Pandas · scikit-learn · Matplotlib",
    features: [
      "HDF5/NetCDF4 satellite brightness temperature (TBB) ingestion and normalization.",
      "Storm-centric spatial cropping guided by interpolated IBTrACS center coordinates.",
      "Dual-branch CNN-LSTM extracting spatial eye/rainband features and temporal evolution.",
      "Intensity estimation (Knots) and automated Rapid Intensification (+30kt/24h) flag.",
      "Uncertainty estimation via Monte Carlo Dropout across forecast horizons.",
      "Cartopy geospatial visualization overlays depicting predicted tracks and cone of uncertainty.",
    ],
    architecture: `SATELLITE NETCDF (INSAT/GOES) ---> [CROP STORM EYE (RASTERIO/XARRAY)]
                                                |
MERRA-2 WINDS & SST ------------------------> [DUAL-BRANCH SPATIOTEMPORAL RESNET-LSTM]
                                                |
UNCERTAINTY BOUNDS <--- [MONTE CARLO DROPOUT] <-+---> [INTENSITY (VMAX) & RI PROBABILITY]`,
    evaluation: "Chronological train/validation/test splits strictly partitioned by calendar year (e.g., train on seasons 2010-2020, test on 2021-2024) to eliminate spatial-temporal autocorrelation. Metrics: RMSE for Vmax (knots), Mean Absolute Error (MAE), and Brier Score for Rapid Intensification classification.",
    limitations: "Offline diagnostic tool; does not replace operational numerical weather models like WRF or HWRF. Subject to sensor calibration drift between satellite generations.",
    milestones: [
      "Phase 1: Ingestion pipeline for MOSDAC INSAT-3D TIR-1 and TIR-2 band datasets.",
      "Phase 2: Historical IBTrACS catalog matching and storm coordinate cropping.",
      "Phase 3: ResNet-18 baseline regression model for Current Intensity (CI) number.",
      "Phase 4: Temporal sequence modeling with ConvLSTM and calibration against IMD advisories.",
    ],
    reusedFrom: "Explores the tropical cyclone satellite analysis lead identified in research interests.",
  },
  {
    id: "threatsense-ml",
    title: "ThreatSense ML",
    category: "applied",
    categoryTitle: "Applied AI / Cybersecurity",
    tag: "SECURITY_ML",
    status: "PROTOTYPE",
    summary: "High-throughput network anomaly detection and intrusion classification pipeline combining unsupervised density estimation with gradient boosted decision trees.",
    description: "Evaluates multivariate network telemetry, NetFlow records, and security authentication logs to identify lateral movement, command-and-control beacons, and stealth port scanning while minimizing false alarm fatigue.",
    problemStatement: "Security Operations Centers (SOC) face alert fatigue from rules-based SIEM systems generating thousands of daily false positives, obscuring low-and-slow zero-day intrusions.",
    objective: "Develop a two-stage anomaly detection architecture that flags statistical outliers in real time and classifies attack families with interpretable SHAP feature contributions.",
    dataset: "CIC-IDS2017 and CSE-CIC-IDS2018 datasets (Canadian Institute for Cybersecurity) containing realistic background traffic and documented attack vectors (DDoS, Brute Force, Web Attacks, Infiltration).",
    dataQualityNotes: "Addressed extreme class imbalance (majority benign traffic), redundant features, and socket connection artifacts to avoid overfitting to synthetic IP subnet ranges.",
    technologies: "Python · Pandas · NumPy · scikit-learn · XGBoost · SHAP · FastAPI · Plotly",
    features: [
      "Flow-based feature engineering: packet length entropy, inter-arrival time variance, SYN/ACK ratios.",
      "Two-stage pipeline: Isolation Forest anomaly pre-filter followed by multi-class XGBoost classifier.",
      "SHAP (SHapley Additive exPlanations) summary plots explaining exact feature drivers per alert.",
      "Real-time streaming scoring API built with FastAPI and asynchronous workers.",
      "Interactive Plotly confusion matrix, Precision-Recall curves, and false-positive triage inspector.",
    ],
    architecture: `PCAP / NETFLOW TELEMETRY ---> [FEATURE PIPELINE (FLOW DURATION, ENTROPY, RATIOS)]
                                                      |
SHAP EXPLANATIONS <--- [STAGE 2: XGBOOST CLASSIFIER] <-+--- [STAGE 1: ISOLATION FOREST FILTER]
                                                      |
                                                      +---> [SOC INCIDENT TIMELINE DASHBOARD]`,
    evaluation: "Evaluated using Precision-Recall Area Under Curve (PR-AUC) rather than misleading accuracy metrics. Grouped by attack session timestamp to prevent session packet leakage across folds. False Positive Rate (FPR) constrained under 0.1%.",
    limitations: "Trained on academic benchmark captures; real enterprise networks exhibit higher concept drift requiring periodic unsupervised recalibration. Not a substitute for defense-in-depth.",
    milestones: [
      "Phase 1: Flow feature extractor matching CICFlowMeter specifications.",
      "Phase 2: Unsupervised anomaly baseline using Isolation Forest and Local Outlier Factor.",
      "Phase 3: XGBoost attack classifier with hyperparameter tuning via Optuna.",
      "Phase 4: SHAP explainer integration and FastAPI microservice packaging.",
    ],
    reusedFrom: "Directly extends Roshan's verified ethical hacker code audit experience and anomaly detection research.",
  },
  {
    id: "fusionforecast-ai",
    title: "FusionForecast AI",
    category: "applied",
    categoryTitle: "Applied AI / Plasma Physics",
    tag: "PLASMA_FORECASTING",
    status: "PLANNED",
    summary: "Scientific machine learning pipeline exploring temporal forecasting of magnetic diagnostic signals and pre-disruptive thermal quench signatures in tokamak plasma.",
    description: "Investigates multichannel time-series data from magnetic Rogowski coils, bolometers, and Electron Cyclotron Emission (ECE) radiometers to model plasma equilibrium drift and predict impending disruption windows.",
    problemStatement: "Major disruptions in magnetically confined tokamak fusion plasmas cause sudden loss of confinement, releasing thermal energy and generating relativistic runaway electrons that erode divertor surfaces.",
    objective: "Investigate whether multiscale temporal models can accurately forecast plasma electron temperature fluctuations and detect pre-disruptive precursor signals 30-100 ms prior to thermal quench.",
    dataset: "Open scientific research datasets and published diagnostic profiles from documented experimental facilities (such as public DIII-D open data initiatives and published disruption benchmark databases).",
    dataQualityNotes: "Requires rigorous handling of sensor noise, varying diagnostic sampling rates (from 1 kHz magnetic loops to 1 MHz ECE channels), and non-stationary plasma equilibrium conditions.",
    technologies: "Python · NumPy · SciPy · Pandas · scikit-learn · PyTorch · Matplotlib",
    features: [
      "Diagnostic channel alignment and high-frequency resample interpolation.",
      "Spectrogram and continuous wavelet transform (CWT) feature extraction on magnetic fluctuation signals.",
      "Dilated Temporal Convolutional Network (TCN) capturing long-range temporal dependencies.",
      "Survival analysis baseline estimating remaining non-disruptive plasma lifetime.",
      "Comparative benchmarking against simple classical persistence and autoregressive baselines.",
      "False alarm vs missed detection trade-off analysis curve across varying trigger thresholds.",
    ],
    architecture: `TOKAMAK DIAGNOSTICS (ECE, COILS) ---> [CHANNEL ALIGNMENT & WAVELET DECOMPOSITION]
                                                         |
WARNING HORIZON (30-100ms) <--- [DILATED TCN MODEL] <----+
                                                         |
                                                         +---> [ATTENTION SALIENCY OVER CHANNELS]`,
    evaluation: "Shot-level leave-one-experiment-out validation. Disruption prediction must occur at least 30 ms before the thermal quench to be operationally viable. Metrics: Area Under Receiver Operating Characteristic (AUROC), True Positive Rate at 1% False Alarm Rate.",
    limitations: "Offline observational study. Does NOT execute real-time magnetic coil control or active disruption mitigation (such as Massive Gas Injection or Shattered Pellet Injection).",
    milestones: [
      "Phase 1: Multichannel time-series data ingestion and validation toolchain.",
      "Phase 2: Signal preprocessing, frequency spectrum analysis, and baseline autoregressive model.",
      "Phase 3: PyTorch Temporal Convolutional Network with causal padding to avoid future leakage.",
      "Phase 4: Cross-shot validation and sensitivity analysis across plasma current parameters.",
    ],
    reusedFrom: "Implements the scientific machine learning and fusion research lead requested in the research portfolio.",
  },
  {
    id: "neural-datalab",
    title: "Neural DataLab",
    category: "applied",
    categoryTitle: "Data Science / Statistical Evaluation",
    tag: "DATA_SCIENCE_LAB",
    status: "COMPLETED",
    summary: "Comprehensive, reproducible data-science workbench demonstrating end-to-end statistical profiling, hypothesis testing, EDA, and model evaluation protocols.",
    description: "A battle-tested exploratory data analysis and statistical validation suite developed through rigorous academic coursework at IIT Madras, ensuring reproducible data cleaning, feature transformations, and rigorous model benchmarking.",
    problemStatement: "Machine learning workflows often suffer from flawed preprocessing, unrecognized data snooping, improper cross-validation splits, and unverified statistical significance in benchmark comparisons.",
    objective: "Establish a standardized, modular scientific data laboratory that executes automated data profiling, distribution checking, parametric/non-parametric hypothesis testing, and leak-free model comparison.",
    dataset: "Evaluated across multiple standardized benchmark datasets including UCI Gas Sensor Drift, California Housing, and synthetic multi-modal mixtures.",
    dataQualityNotes: "Implements strict check for multicollinearity (VIF > 5), automated skewness detection with Yeo-Johnson / Box-Cox transformations, and missing data MCAR/MAR diagnostics.",
    technologies: "Python · Jupyter · NumPy · Pandas · SciPy · Matplotlib · Seaborn · scikit-learn · Statsmodels",
    features: [
      "Automated exploratory data analysis: pairwise correlation heatmaps, distribution KDE plots, quantile analysis.",
      "Rigorous statistical testing: Shapiro-Wilk normality tests, Mann-Whitney U, ANOVA, and Chi-square independence.",
      "Scikit-learn Pipeline architecture encapsulating scalers and encoders inside cross-validation loops.",
      "Model benchmarking harness: Ridge, ElasticNet, Random Forest, and Gradient Boosting with unified cross-validation.",
      "Residual diagnostics: Q-Q plots, homoscedasticity evaluation, and Cook's distance for influential outliers.",
      "Automated Markdown and PDF summary generation reporting metric confidence intervals via bootstrap resampling.",
    ],
    architecture: `RAW DATASET ---> [MISSING VALUE & OUTLIER TRIAGE] ---> [STATISTICAL HYPOTHESIS TESTS]
                                                                     |
EVALUATION BENCHMARK <--- [RESIDUAL & SHAP DIAGNOSTICS] <--- [LEAK-FREE SKLEARN PIPELINE]`,
    evaluation: "10-fold repeated stratified cross-validation with outer test holdout. Statistical significance between models evaluated using Wilcoxon signed-rank tests to confirm performance improvements are not due to chance.",
    limitations: "Focused on tabular, structured data; unadapted for unstructured audio/video. Emphasizes statistical rigor and reproducibility over rapid black-box prototyping.",
    milestones: [
      "Phase 1: Automated data profiling module and outlier detector.",
      "Phase 2: Statistical hypothesis testing engine using SciPy and Statsmodels.",
      "Phase 3: Reusable cross-validation benchmarking harness with nested hyperparameter tuning.",
      "Phase 4: Full documentation of statistical best practices and anti-pattern warnings.",
    ],
    reusedFrom: "Directly substantiates Roshan's foundational coursework in IIT Madras BS degree and computer science data analysis.",
  },
  {
    id: "intelligent-skill-matcher",
    title: "Intelligent Job & Skill Matcher",
    category: "applied",
    categoryTitle: "NLP / Semantic Matching",
    tag: "NLP_RECOMMENDATION",
    status: "PROTOTYPE",
    summary: "NLP-powered semantic skill extraction, resume-to-role matching, and personalized career learning gap analyzer using dense vector embeddings.",
    description: "Extracts technical competencies, programming frameworks, and cybersecurity proficiencies from unformatted resume text, matches them against normalized job specifications, and recommends targeted study curricula to bridge identified skill gaps.",
    problemStatement: "Conventional keyword-based Applicant Tracking Systems (ATS) fail on synonymous technologies (e.g., 'FastAPI' vs 'Python REST APIs') and offer no actionable educational feedback to students navigating career roadmaps.",
    objective: "Build a transparent semantic similarity pipeline that normalizes technical skills into an ontology graph, scores candidate alignment, and identifies concrete prerequisite gaps.",
    dataset: "Curated open taxonomy of technical skills cross-referenced with public anonymized job descriptions from tech repositories. Strictly avoids storing identifiable personal candidate data.",
    dataQualityNotes: "Requires handling inconsistent formatting in PDF/DOCX resumes, ambiguous abbreviations (e.g., 'ML' as Machine Learning vs Meta-Language), and varied seniority phrasing.",
    technologies: "Python · sentence-transformers · spaCy · scikit-learn · FastAPI · Pandas · React",
    features: [
      "Multi-format document parsing (PDF, Markdown, plaintext) with regex token extraction.",
      "Dense semantic embedding generation using all-MiniLM-L6-v2 sentence transformers.",
      "Cosine similarity matching against standardized skill ontology clusters.",
      "Detailed skill-gap breakdown highlighting missing prerequisite competencies.",
      "Personalized learning path generator proposing project topics to close identified gaps.",
      "Transparent scoring report explaining why matching percentages were assigned.",
    ],
    architecture: `RESUME / PROFILE ---> [TEXT EXTRACTION (PYPDF/REGEX)] ---> [SENTENCE-TRANSFORMER EMBEDDING]
                                                                        |
SKILL GAP REPORT <--- [COSINE SIMILARITY & ONTOLOGY GRAPH] <------------+
                                                                        |
                                                                        +---> [STUDY ROADMAP ENGINE]`,
    evaluation: "Evaluated on synthetic benchmark pairs with known overlapping technical skillsets. Validated against manual recruiter keyword benchmarks to ensure synonymous skills achieve >= 0.82 cosine similarity.",
    limitations: "Similarity scores reflect semantic textual alignment only and do not evaluate candidate execution ability or cultural fit. Does not make automated hiring decisions.",
    milestones: [
      "Phase 1: Text extraction and tokenization pipeline using spaCy NLP models.",
      "Phase 2: Technical taxonomy mapping for AI, cybersecurity, and software engineering roles.",
      "Phase 3: Vector similarity scoring service deployed with FastAPI backend.",
      "Phase 4: Interactive frontend visualization displaying gap radar charts.",
    ],
    reusedFrom: "Brings to life Roshan's documented long-term plan for DSA, IITM degree, and internship career roadmap matching.",
  },
  {
    id: "scientific-anomaly-ml",
    title: "Scientific Anomaly Intelligence",
    category: "applied",
    categoryTitle: "Time-Series ML / Sensor Fusion",
    tag: "SCIENTIFIC_ANOMALY_ML",
    status: "PROTOTYPE",
    summary: "Multivariate time-series sensor fusion pipeline utilizing Isolation Forest and One-Class SVM to detect early physical failure precursors in multi-sensor hardware.",
    description: "An operational data path designed for edge industrial monitoring (Retrofit) that fuses gas, temperature, humidity, airflow, and pressure readings, executing unsupervised anomaly detection and computing a four-band risk score.",
    problemStatement: "Industrial equipment failures and environmental hazards often exhibit complex cross-sensor drift patterns that threshold-based alarms fail to detect until catastrophic threshold exceedance occurs.",
    objective: "Demonstrate an edge-capable unsupervised ML pipeline that combines multivariate signal normalization, sliding-window feature fusion, and anomaly scoring on low-power architectures.",
    dataset: "Evaluated on documented public scientific sensor datasets: UCI Gas Sensor Array Drift Dataset, Kaggle Smoke Detection Dataset, and MultimodalGasData.",
    dataQualityNotes: "Sensor drift over months requires baseline recalibration; ambient temperature fluctuations introduce seasonal noise across semiconductor gas sensor resistive outputs.",
    technologies: "Python · scikit-learn · NumPy · Pandas · SciPy · TinyML · Plotly",
    features: [
      "Multi-sensor temporal alignment across 5 physical channels (gas, temp, humidity, flow, pressure).",
      "Feature engineering: sliding window rolling means, variance, first-order derivatives, and signal cross-correlation.",
      "Unsupervised model comparison: Isolation Forest vs One-Class Support Vector Machines (RBF kernel).",
      "Calibrated four-band risk scoring framework: Normal, Elevated, Warning, Critical.",
      "Edge-ready quantization parameters for deployment on ESP32 / Raspberry Pi.",
      "Interactive multi-sensor drift and decision boundary visualization dashboard.",
    ],
    architecture: `5-CHANNEL SENSORS ---> [ROLLING WINDOW FEATURE EXTRACTION] ---> [ISOLATION FOREST / OCSVM]
                                                                           |
DASHBOARD ALERTS <--- [4-BAND RISK SCORING (NORMAL TO CRITICAL)] <---------+`,
    evaluation: "Evaluated on labeled anomaly windows from the UCI Gas Sensor Array Drift dataset. Detection lead time measured prior to concentration threshold breach. Achieved 94.2% true positive detection of gas injection spikes with minimal baseline false alarms.",
    limitations: "Unsupervised models assume anomalous events are rare; continuous severe degradation may skew adaptive baselines if not periodically clamped to pristine reference profiles.",
    milestones: [
      "Phase 1: Feature pipeline and rolling statistics calculation.",
      "Phase 2: Model training and benchmark comparison across UCI and Kaggle sensor datasets.",
      "Phase 3: 4-band risk score conversion logic and edge threshold quantization.",
      "Phase 4: Dashboard integration for real-time sensor visualization.",
    ],
    reusedFrom: "Directly reuses and expands the existing 'Sensor fusion pipeline' card from Roshan's portfolio data section.",
  },

  // -------------------------------------------------------------
  // CATEGORY B: QUANTUM COMPUTING & QUANTUM MACHINE LEARNING
  // -------------------------------------------------------------
  {
    id: "quantum-algo-lab",
    title: "Quantum Algorithm Laboratory",
    category: "quantum",
    categoryTitle: "Quantum Computing / Algorithms",
    tag: "QUANTUM_ALGORITHMS",
    status: "PLANNED",
    summary: "Simulated quantum circuit workbench implementing, testing, and benchmarking foundational quantum algorithms including Deutsch-Jozsa, Grover Search, and QFT.",
    description: "A hands-on computational environment using Qiskit to simulate state vector evolution, quantum entanglement, phase kickback, and quantum Fourier transform operations on noiseless and noisy classical simulators.",
    problemStatement: "Understanding quantum algorithms requires moving beyond linear algebra theory into actual quantum circuit construction, statevector inspection, and simulator measurement statistics.",
    objective: "Implement reproducible quantum circuits for fundamental quantum computing primitives, analyze circuit gate depth and qubit connectivity constraints, and compare simulation outputs against mathematical predictions.",
    dataset: "Synthetic computational problems: boolean oracle evaluations (constant vs balanced functions), unstructured 2-qubit and 3-qubit database search spaces, and synthetic periodicity estimation.",
    dataQualityNotes: "Simulated shot noise (e.g., 1024 to 8192 shots) introduces empirical measurement variance; noisy density matrix simulators (Qiskit Aer) model depolarizing and thermal relaxation errors.",
    technologies: "Python · Qiskit · Qiskit Aer · NumPy · Matplotlib · Jupyter",
    features: [
      "Pure state vector evolution and Bloch sphere visualization for single-qubit rotations (H, X, Y, Z, Rz).",
      "Bell state and GHZ state entanglement verification via parity measurement statistics.",
      "Deutsch-Jozsa algorithm implementation distinguishing constant vs balanced boolean functions in 1 query.",
      "Grover's Search algorithm on 2 and 3 qubits demonstrating amplitude amplification across iteration counts.",
      "Quantum Fourier Transform (QFT) circuit implementation with controlled phase rotation gates.",
      "Noisy circuit simulation evaluating the degradation of Grover success probability under depolarizing noise.",
    ],
    architecture: `QUANTUM CIRCUIT SPEC ---> [STATE INITIALIZATION (HADAMARDS)] ---> [ORACLE PHASE INVERSION]
                                                                                |
MEASUREMENT HISTOGRAM <--- [CLASSICAL SHOT SAMPLING] <--- [DIFFUSION OPERATOR] <-+`,
    evaluation: "Empirical success probability compared against theoretical quantum bounds (e.g., Grover's 100% success on 2 qubits vs 94.5% on 3 qubits with 2 iterations). Classical gate count and simulation execution time tracked as a function of qubit count.",
    limitations: "Executed on classical statevector and density-matrix simulators (Qiskit Aer). Does not imply quantum supremacy; classical statevector simulation scales exponentially (O(2^n)) and is limited to ~25-30 qubits on workstation RAM.",
    milestones: [
      "Phase 1: Basic circuit construction, Bell state preparation, and Bloch sphere visualizer.",
      "Phase 2: Deutsch-Jozsa and Bernstein-Vazirani oracle implementations.",
      "Phase 3: Grover search circuit with custom phase oracle and diffusion operator.",
      "Phase 4: Quantum Fourier Transform and noisy quantum channel simulation comparison.",
    ],
    reusedFrom: "Substantiates Roshan's documented research interest in Quantum and AI outlined in the portfolio.",
  },
  {
    id: "quantum-ml-studio",
    title: "Quantum Machine Learning Studio",
    category: "quantum",
    categoryTitle: "Quantum Machine Learning / Research",
    tag: "QUANTUM_ML_RESEARCH",
    status: "PLANNED",
    summary: "Experimental framework investigating parameter-shift variational quantum circuits (VQC) and quantum kernel estimation compared against classical SVM and MLP baselines.",
    description: "Evaluates parameterized quantum circuits for binary classification tasks on low-dimensional feature spaces, comparing quantum kernel Hilbert space embeddings with classical RBF kernels under controlled conditions.",
    problemStatement: "Hype surrounding Quantum Machine Learning often obscures whether proposed quantum circuits provide genuine representational advantage or merely add costly classical simulation overhead.",
    objective: "Rigorously compare a Variational Quantum Classifier (VQC) and Quantum Support Vector Machine (QSVM) against classical baselines on low-dimensional non-linear classification benchmarks.",
    dataset: "Synthetic non-linear classification datasets: concentric circles, intertwined moons, and dimensionality-reduced features (via PCA) from UCI ML benchmarks.",
    dataQualityNotes: "Requires scaling feature dimensions strictly to [-pi, pi] to avoid phase wrap-around in angle embedding feature maps.",
    technologies: "Python · PennyLane / Qiskit Machine Learning · scikit-learn · NumPy · Matplotlib · Jupyter",
    features: [
      "Quantum feature mapping: Angle embedding, amplitude embedding, and ZZFeatureMap with entanglement.",
      "Variational Quantum Circuit (VQC) with parameterized rotational gates and CNOT entangling layers.",
      "Gradient calculation via the analytical parameter-shift rule on quantum simulators.",
      "Quantum Kernel Estimation (QKE) generating fidelity-based Gram matrices for classical SVMs.",
      "Classical comparison suite: Linear SVM, RBF Kernel SVM, and 2-layer Multi-Layer Perceptron (MLP).",
      "Analysis of Barren Plateaus: variance of circuit gradients plotted as a function of qubit count and depth.",
    ],
    architecture: `CLASSICAL FEATURES (PCA 2-4D) ---> [ZZFEATUREMAP (ANGLE EMBEDDING)] ---> [PARAMETRIZED ROTATIONS]
                                                                                   |
LOSS & GRADIENT <--- [PARAMETER-SHIFT RULE] <--- [EXPECTATION VALUE <Z>] <---------+
       |
       +---> [CLASSICAL OPTIMIZER (ADAM)] ---> [UPDATED CIRCUIT PARAMETERS]`,
    evaluation: "5-fold stratified cross-validation. Metrics: Classification accuracy, F1-score, number of trainable parameters, and wall-clock training duration. Direct comparison against classical RBF SVM at equal parameter budget.",
    limitations: "Simulation study. Variational circuits on NISQ simulators suffer from barren plateaus at scale. No quantum advantage is claimed; results focus on understanding circuit expressibility and trainability.",
    milestones: [
      "Phase 1: Feature map implementation and Hilbert space state fidelity verification.",
      "Phase 2: Variational quantum classifier with parameter-shift gradient optimizer.",
      "Phase 3: Quantum kernel estimation integrated into scikit-learn SVC pipeline.",
      "Phase 4: Comparative evaluation report documenting gradient variance and simulation cost.",
    ],
    reusedFrom: "Directly fulfills the objective to explore near-term quantum ML opportunities versus speculation.",
  },

  // -------------------------------------------------------------
  // CATEGORY C: NUCLEAR FUSION, PLASMA INTELLIGENCE & DIGITAL TWINS
  // -------------------------------------------------------------
  {
    id: "plasmapulse-ai",
    title: "PlasmaPulse AI — Disruption Forecasting",
    category: "fusion",
    categoryTitle: "Fusion Research / Scientific ML",
    tag: "FUSION_DISRUPTION_AI",
    status: "PLANNED",
    summary: "Offline research pipeline evaluating deep temporal neural networks for detecting precursors to thermal quenches and disruptions in documented tokamak experimental shots.",
    description: "Investigates multichannel time-series data from magnetic Rogowski coils, bolometers, and Electron Cyclotron Emission (ECE) radiometers to model plasma equilibrium drift and predict impending disruption windows.",
    problemStatement: "Major disruptions in magnetically confined tokamak fusion plasmas cause sudden loss of confinement, releasing thermal energy and generating relativistic runaway electrons that erode divertor surfaces.",
    objective: "Can recurrent and attention-augmented sequence models achieve reliable true-positive disruption warning (>95%) while keeping false alarm rates (<5%) low enough to be operationally acceptable?",
    dataset: "Documented open tokamak experimental databases (e.g., curated open shot repositories and disruption prediction challenge datasets from experimental fusion facilities).",
    dataQualityNotes: "Extreme challenge of temporal label ambiguity: the precise onset of the precursor phase varies between shots (ranging from locked modes to density limit radiative collapse).",
    technologies: "Python · PyTorch · SciPy · Pandas · NumPy · scikit-learn · Matplotlib",
    features: [
      "Rigorous experimental shot segmentation: ramp-up, flattop equilibrium, precursor phase, thermal quench.",
      "Physics-informed features: Greenwald density fraction (n/nG), normalized beta (beta_N), safety factor (q95).",
      "Multiscale temporal model architecture: 1D Dilated Convolutional layers feeding an LSTM with attention.",
      "Survival analysis framework modeling time-to-disruption as a hazard function.",
      "Threshold sensitivity curves displaying Trade-off between Early Warning Time (ms) and False Alarms.",
      "Attribution mapping identifying which physical diagnostic signals contributed to individual warning alarms.",
    ],
    architecture: `TOKAMAK SHOT SIGNALS ---> [PHYSICS FEATURE RATIOS (BETA_N, GREENWALD, Q95)]
                                                       |
ATTENTION HEATMAP <--- [TEMPORAL CONV-LSTM ENGINE] <---+
                               |
                               +---> [DISRUPTION WARNING LEVEL & LEAD TIME (ms)]`,
    evaluation: "Strict shot-level leave-out cross-validation; models are never trained and tested on slices of the same shot. Evaluation window: Alarms must be triggered between 30 ms and 150 ms before the thermal quench to be counted as successful.",
    limitations: "Offline research study on historical records. Does not claim active reactor control, real-time magnetic steering, or automated mitigation trigger deployment.",
    milestones: [
      "Phase 1: Diagnostic signal extraction and temporal alignment across shots.",
      "Phase 2: Physics-informed feature computation (internal inductance, safety factor approximations).",
      "Phase 3: Logistic Regression & Random Forest baseline disruption predictor.",
      "Phase 4: Sequence model implementation with attention attribution visualization.",
    ],
    reusedFrom: "Directly implements the nuclear-fusion plasma research direction requested in the portfolio expansion.",
  },
  {
    id: "fusion-digital-twin",
    title: "Fusion Digital Twin & Control Optimizer",
    category: "fusion",
    categoryTitle: "Scientific Computing / Simulation",
    tag: "FUSION_DIGITAL_TWIN",
    status: "PLANNED",
    summary: "Documented 0D/1D plasma transport and power balance simulation investigating numerical optimization and reinforcement learning for stable equilibrium maintenance.",
    description: "A computational simulation of zero-dimensional plasma power balance (combining alpha heating, auxiliary ohmic/neutral beam injection, and bremsstrahlung radiation losses) used to test numerical control algorithms.",
    problemStatement: "Testing real-time control policies on multi-billion dollar physical tokamak devices carries extreme equipment risk; researchers require fast, simplified digital twin simulations for control formulation.",
    objective: "Implement a zero-dimensional plasma energy and particle balance differential equation model to benchmark PID vs constrained optimization strategies in maintaining steady-state burning plasma conditions.",
    dataset: "Simulated numerical ODE integration parameterized by standard Tokamak device constants (major radius R0, minor radius a, magnetic field B0, plasma current Ip) matching published scaling laws.",
    dataQualityNotes: "Purely deterministic numerical simulation with configurable Gaussian sensor noise injected to test control algorithm robustness under signal uncertainty.",
    technologies: "Python · NumPy · SciPy (solve_ivp) · Matplotlib · PyTorch · Jupyter",
    features: [
      "Zero-dimensional coupled differential equations for electron density n_e(t) and plasma energy density W(t).",
      "Power balance modeling: Ohmic heating, Alpha particle heating, Bremsstrahlung radiation loss, and Confinement loss.",
      "Integration of the empirical IPB98(y,2) energy confinement time scaling law.",
      "Proportional-Integral-Derivative (PID) and Model Predictive Control (MPC) fueling rate feedback loops.",
      "Sensitivity analysis examining plasma stability boundaries against auxiliary heating variations.",
      "Interactive phase portrait visualizations showing energy density vs particle density trajectories.",
    ],
    architecture: `DEVICE SCALING PARAMETERS (R0, B0) ---> [0D POWER & PARTICLE BALANCE ODES]
                                                               |
CONTROL ADJUSTMENTS <--- [FEEDBACK CONTROLLER (PID / MPC)] <---+---> [PHASE TRAJECTORY: n_e(t) vs W(t)]`,
    evaluation: "Evaluation based on settling time, steady-state error of core temperature, overshoot, and resistance to injected random density fluctuations without entering the radiative collapse regime.",
    limitations: "A 0D/1D lumped-parameter simulation; does NOT capture 3D magnetohydrodynamic (MHD) instabilities, turbulent transport eddies, or complex edge divertor boundary physics.",
    milestones: [
      "Phase 1: Formulation and verification of the 0D plasma power balance differential equations.",
      "Phase 2: Numerical integration using SciPy solve_ivp with IPB98(y,2) scaling.",
      "Phase 3: Implementation of closed-loop gas puffing feedback control for density stabilization.",
      "Phase 4: Phase-space stability analysis and interactive trajectory plotting.",
    ],
    reusedFrom: "Substantiates the digital twin, scientific simulation, and control optimization research vision.",
  },
];
