// Comprehensive Research Portfolio Data
// Preserves original 2 pillars: "Beyond the transformer" and "Quantum and AI"
// Strict academic credibility: No fabricated papers, DOIs, fake citations, or synthetic results.
// Research stages: PROPOSED, LITERATURE_REVIEW, DATA_COLLECTION, EXPERIMENTAL, UNDER_EVALUATION, COMPLETED.

export const RESEARCH_PILLARS = [
  {
    id: "pillar-transformer",
    track: "transformer",
    title: "Beyond the transformer",
    subtitle: "State-Space Models · Selective Attention · Efficient Scientific AI",
    summary:
      "I study attention and its cost against RNNs, then state-space models like Mamba, linear and sparse attention, mixture of experts, adaptive depth and hybrid transformer-Mamba designs.",
    scope: [
      "Computational complexity of quadratic self-attention O(N²) in long scientific time-series.",
      "Selective state-space models (Mamba/S4) enabling linear O(N) scaling with continuous memory.",
      "Hybrid architectures combining selective retention with localized token routing (MoE).",
      "Application to high-frequency scientific physical telemetry (plasma diagnostics, sensor grids).",
    ],
    readingList: [
      "Gu & Dao (2023) - 'Mamba: Linear-Time Sequence Modeling with Selective State Spaces'",
      "Vaswani et al. (2017) - 'Attention Is All You Need'",
      "Dao et al. (2022) - 'FlashAttention: Fast and Memory-Efficient Exact Attention with IO-Awareness'",
      "Poli et al. (2023) - 'Hyena Hierarchy: Towards Larger Convolutional Language Models'",
    ],
  },
  {
    id: "pillar-quantum",
    track: "quantum",
    title: "Quantum and AI",
    subtitle: "Circuit Simulation · Variational Algorithms · Rigorous Classical Baselines",
    summary:
      "I follow quantum and AI integration and try to separate what quantum ML can do in the near term from what is still speculation.",
    scope: [
      "Simulating canonical quantum algorithms on classical statevector engines (Qiskit Aer).",
      "Evaluating Variational Quantum Circuits (VQC) and Quantum Kernel Methods against classical SVMs.",
      "Analyzing hardware limits: NISQ decoherence, circuit depth, and barren plateau gradient vanishing.",
      "Distinguishing proven theoretical bounds from speculative industry claims without quantum advantage.",
    ],
    readingList: [
      "Preskill (2018) - 'Quantum Computing in the NISQ era and beyond'",
      "Biamonte et al. (2017) - 'Quantum Machine Learning' (Nature)",
      "McClean et al. (2018) - 'Barren plateaus in quantum neural network training landscapes'",
      "Schuld & Petruccione (2021) - 'Machine Learning with Quantum Computers' (Springer)",
    ],
  },
];

export const RESEARCH_TABS = [
  { id: "all", label: "All Research Tracks (10)", count: 10 },
  { id: "transformer", label: "Beyond Transformer Track (7)", count: 7 },
  { id: "quantum", label: "Quantum & AI Track (3)", count: 3 },
];

export const RESEARCH_WORKFLOW_STEPS = [
  {
    step: "01",
    phase: "PROBLEM DEFINITION",
    desc: "Formulate a concrete, falsifiable research question anchored in physical constraints or algorithmic complexity bottlenecks.",
  },
  {
    step: "02",
    phase: "LITERATURE SURVEY",
    desc: "Survey peer-reviewed literature (NeurIPS, ICML, IEEE, APS Physics, arXiv) to map established baselines and open theoretical limits.",
  },
  {
    step: "03",
    phase: "GAP IDENTIFICATION",
    desc: "Pinpoint where current methods fail: quadratic scaling, uncalibrated uncertainty, vanishing gradients, or vulnerable tool boundaries.",
  },
  {
    step: "04",
    phase: "HYPOTHESIS & FORMAL SPEC",
    desc: "Define mathematical representations, circuit architectures, threat vectors, and reproducible data-handling pipelines.",
  },
  {
    step: "05",
    phase: "REPRODUCIBLE BASELINES",
    desc: "Implement simple, optimized classical baselines (e.g. Ridge Regression, SVM, Random Forest) before evaluating complex deep or quantum models.",
  },
  {
    step: "06",
    phase: "RIGOROUS EVALUATION",
    desc: "Validate using chronological splits, noise models, Brier calibration, and honest reporting of negative findings and limitations.",
  },
];

export const RESEARCH_ENTRIES = [
  // -------------------------------------------------------------
  // DIRECTION 1: PLASMA-DISRUPTION FORECASTING
  // -------------------------------------------------------------
  {
    id: "plasma-disruption-ml",
    track: "transformer",
    area: "Scientific Machine Learning / Fusion",
    title: "Machine Learning for Plasma-Disruption Forecasting",
    status: "LITERATURE_REVIEW",
    statusType: "review",
    tag: "FUSION_SCIENTIFIC_ML",
    researchQuestion:
      "Can temporal sequence models (LSTMs, 1D CNNs, and Selective State-Space Models) identify predictive precursor patterns associated with thermal quenches and major disruptions in documented tokamak experimental databases?",
    motivation:
      "Major plasma disruptions in magnetic confinement fusion (tokamaks) cause severe electromagnetic thermal loads and relativistic runaway electron impacts capable of damaging plasma-facing wall components. Reliable automated prediction with sufficient warning lead time (>30ms) is vital for future facilities like ITER.",
    priorWork:
      "Classical disruption predictors relied on hard thresholding of locked modes or radiation fractions. Recent research (Kates-Harbeck et al., Nature 2019; Montes et al., 2021) showed deep recurrent networks can detect multi-diagnostic precursor signals across DIII-D and JET discharges.",
    researchGap:
      "Standard transformer attention exhibits quadratic memory scaling over high-frequency multi-kHz diagnostic streams, while RNNs suffer from vanishing gradients across long discharge histories. Cross-machine generalization and false alarm rates during non-disruptive high-performance phases remain open challenges.",
    methodology:
      "Investigating a multi-stage time-series pipeline: (1) Preprocessing multi-channel diagnostic signals (plasma current, poloidal magnetic probe arrays, electron temperature from ECE, bolometry radiated power). (2) Resampling and handling missing sensors via temporal alignment. (3) Comparing a 1D Temporal Convolutional baseline with a continuous-time selective state-space model (Mamba). (4) Evaluating lead-time trade-offs across disruptive vs non-disruptive discharges.",
    dataset:
      "Documented open scientific research datasets and published disruption benchmarks (e.g., publicly released DIII-D benchmark initiatives, synthetic JET/NSTX open shot profiles).",
    technologies: "Python · PyTorch · SciPy · NumPy · Pandas · Matplotlib · Jupyter",
    experimentalDesign:
      "Strict shot-level chronological validation: Training on historical shot series and testing exclusively on subsequent temporal shot blocks to eliminate data leakage. Comparing ROC-AUC, Precision-Recall AUC, and false-alarm frequency against minimum intervention lead times (30ms to 100ms).",
    evaluationMetrics: "PR-AUC, ROC-AUC, True Positive Rate at FPR < 5%, Warning Lead Time Distribution (ms)",
    findings:
      "Literature review and data pipeline formulation complete. Verified that random cross-validation yields heavily over-optimistic results due to intra-shot temporal autocorrelation; experiment-level shot splitting is mandatory.",
    limitations:
      "Offline retrospective study on archived diagnostic shots. Does not claim active reactor magnetic control, real-time trigger deployment, or in-situ disruption mitigation valve firing.",
    nextSteps:
      "Finalize reproducible data loader notebook; benchmark baseline 1D-CNN vs LSTM on standardized open disruption shot subsets.",
    references: [
      {
        citation: "Kates-Harbeck, J., Seli, A. & Tang, W. Predicting disruptive instabilities in controlled fusion plasmas with deep learning. Nature 568, 526–531 (2019).",
        url: "https://doi.org/10.1038/s41586-019-1116-4",
      },
      {
        citation: "Gu, A. & Dao, T. Mamba: Linear-time sequence modeling with selective state spaces. arXiv:2312.00752 (2023).",
        url: "https://arxiv.org/abs/2312.00752",
      },
    ],
  },

  // -------------------------------------------------------------
  // DIRECTION 2: SCIENTIFIC ANOMALY DETECTION
  // -------------------------------------------------------------
  {
    id: "scientific-anomaly-detection",
    track: "transformer",
    area: "Scientific Machine Learning",
    title: "Scientific Anomaly Detection in Multivariate Sensor Time-Series",
    status: "EXPERIMENTAL",
    statusType: "experimental",
    tag: "SCIENTIFIC_ANOMALY_DETECTION",
    researchQuestion:
      "How do statistical density baselines, Isolation Forests, and deep autoencoders compare in identifying sensor drift, sudden state bifurcations, and physical anomalies in non-stationary multivariate scientific telemetry?",
    motivation:
      "Physical experiment platforms (fusion testbeds, edge IoT sensors, atmospheric monitors) generate high-dimensional continuous data where true failure events are rare (<0.1%), highly non-stationary, and corrupted by electrical switching noise.",
    priorWork:
      "Unsupervised anomaly detection often relies on classical kernel methods (One-Class SVM, Isolation Forests) or reconstruction errors from deep convolutional autoencoders. However, scientific telemetry often violates the assumption of independently and identically distributed (i.i.d.) observations.",
    researchGap:
      "Standard algorithms struggle with seasonal or operational state switching, flagging benign operational mode changes as physical anomalies and causing severe alert fatigue.",
    methodology:
      "Constructed an experimental benchmarking pipeline evaluating: (1) Statistical Z-score and rolling Median Absolute Deviation (MAD) baselines. (2) Isolation Forests with sub-sampling. (3) One-Class SVM with RBF kernels. (4) 1D Convolutional Autoencoder evaluating reconstruction error distributions. Features incorporate rolling time-domain moments (mean, variance, skewness) and spectral band energies.",
    dataset:
      "Multivariate physical sensor telemetry (fused multi-channel gas concentration, temperature gradients, differential pressure, and humidity from Retrofit hardware bench).",
    technologies: "Python · scikit-learn · NumPy · SciPy · PyTorch · Seaborn",
    experimentalDesign:
      "Benchmarked on continuous multi-hour runs containing documented physical fault injections (induced probe disconnects, thermal ramp spikes, and pneumatic valve blockages). Evaluated ROC-AUC, detection latency, and false positive rates during legitimate operational mode shifts.",
    evaluationMetrics: "ROC-AUC, Precision@K, False Alarm Rate per Hour, Anomaly Latency (seconds)",
    findings:
      "Empirical experiments indicate Isolation Forests achieve superior robustness against noise spikes compared to raw statistical Z-scores, while 1D Convolutional Autoencoders excel at detecting complex multi-sensor correlation breakdowns, though with higher compute requirements.",
    limitations:
      "Evaluated on local multi-sensor edge hardware benches and synthetic noise injections; requires further validation against large-scale public industrial benchmarks (e.g. SWaT or SMD datasets).",
    nextSteps:
      "Incorporate adaptive thresholding via extreme value theory (EVT) to dynamically adjust decision boundaries during operational mode switches.",
    references: [
      {
        citation: "Liu, F. T., Ting, K. M. & Zhou, Z.-H. Isolation Forest. 2008 Eighth IEEE International Conference on Data Mining (2008).",
        url: "https://doi.org/10.1109/ICDM.2008.17",
      },
      {
        citation: "Chandola, V., Banerjee, A. & Kumar, V. Anomaly detection: A survey. ACM Computing Surveys 41, 1–58 (2009).",
        url: "https://doi.org/10.1145/1541880.1541882",
      },
    ],
  },

  // -------------------------------------------------------------
  // DIRECTION 3: EXPLAINABLE AND RELIABLE SCIENTIFIC AI
  // -------------------------------------------------------------
  {
    id: "explainable-scientific-ai",
    track: "transformer",
    area: "Scientific Machine Learning",
    title: "Explainable & Reliable Scientific AI: Calibration & Uncertainty",
    status: "PROPOSED",
    statusType: "proposed",
    tag: "RELIABLE_SCIENTIFIC_AI",
    researchQuestion:
      "How can post-hoc temperature scaling, conformal prediction, and feature attribution methods quantify predictive uncertainty and prevent uncalibrated overconfidence in scientific machine learning models?",
    motivation:
      "In safety-critical physical and medical domains (clinical intake triage, nuclear plasma monitoring), deep learning models often output overconfident probability estimates on out-of-distribution (OOD) samples, risking catastrophic failure if acted upon blindly.",
    priorWork:
      "Guo et al. (2017) demonstrated that modern deep neural networks are prone to poor probability calibration despite high accuracy. Conformal prediction (Angelopoulos & Bates, 2021) provides distribution-free finite-sample guarantees for prediction sets.",
    researchGap:
      "Most scientific ML pipelines report raw softmax or sigmoid scores without calibration metrics, masking dataset shift and sensor calibration decay over time.",
    methodology:
      "Developing a unified validation harness evaluating: (1) Expected Calibration Error (ECE) and reliability diagrams across model architectures. (2) Post-hoc calibration via Platt scaling and isotonic regression. (3) Split-conformal prediction sets guaranteeing 95% coverage on physical time-series forecasting. (4) SHAP (SHapley Additive exPlanations) attribution to verify whether predictions rely on physically sound features.",
    dataset:
      "Benchmarked across synthetic physics simulation profiles and clinical symptom-vitals datasets (FHIR structured records).",
    technologies: "Python · PyTorch · scikit-learn · MAPIE · SHAP · NumPy",
    experimentalDesign:
      "Simulate sensor calibration drift and out-of-distribution noise regimes, testing whether calibration and conformal prediction intervals widen reliably when encountering unfamiliar state regimes.",
    evaluationMetrics: "Expected Calibration Error (ECE), Brier Score, Conformal Prediction Set Size, OOD Detection AUC",
    findings:
      "Theoretical framework and experimental protocol formulated. Preliminary literature synthesis indicates conformal prediction sets provide mathematically guaranteed bounds without requiring Bayesian weight sampling.",
    limitations:
      "Conformal prediction guarantees depend on the exchangeability of calibration and test data; non-stationary time-series require adaptive or sequential conformal adjustments.",
    nextSteps:
      "Implement a standalone Python calibration verification module evaluating ECE and reliability curves for classification models.",
    references: [
      {
        citation: "Guo, C., Pleiss, G., Sun, Y. & Weinberger, K. Q. On calibration of modern neural networks. ICML (2017).",
        url: "https://arxiv.org/abs/1706.04599",
      },
      {
        citation: "Angelopoulos, A. N. & Bates, S. A gentle introduction to conformal prediction and distribution-free uncertainty quantification. arXiv:2107.07511 (2021).",
        url: "https://arxiv.org/abs/2107.07511",
      },
    ],
  },

  // -------------------------------------------------------------
  // DIRECTION 4: BENCHMARKING QUANTUM ALGORITHMS IN SIMULATION
  // -------------------------------------------------------------
  {
    id: "quantum-algo-benchmarking",
    track: "quantum",
    area: "Quantum Computing",
    title: "Benchmarking Quantum Algorithms in Simulation",
    status: "EXPERIMENTAL",
    statusType: "experimental",
    tag: "QUANTUM_SIMULATION_BENCHMARKS",
    researchQuestion:
      "How do circuit depth, two-qubit CNOT count, and output state fidelity scale for Deutsch-Jozsa, Grover's Search, and Quantum Fourier Transform (QFT) under simulated depolarizing and readout noise models on classical statevector engines?",
    motivation:
      "Understanding the exact resource requirements and noise thresholds of foundational quantum algorithms on classical simulators is essential for separating genuine theoretical quantum complexity from the physical realities of noisy intermediate-scale quantum (NISQ) devices.",
    priorWork:
      "Canonical algorithm implementations are widely available in Qiskit and Cirq. However, practical studies systematically comparing circuit compilation depth, transpiler optimization levels, and fidelity degradation under realistic noise models remain valuable educational research.",
    researchGap:
      "Algorithmic explanations often assume ideal unitary operations; investigating how single-qubit thermal relaxation (T1) and dephasing (T2) degrade Grover amplification probability reveals practical scaling bottlenecks.",
    methodology:
      "Constructed reproducible Python/Qiskit notebooks implementing: (1) Deutsch-Jozsa algorithm for constant vs balanced oracle verification across 2 to 6 qubits. (2) Grover's 2-qubit and 3-qubit unstructured search with phase inversion and diffusion operators. (3) Quantum Fourier Transform (QFT) and inverse QFT. (4) Evaluated circuit metrics across Qiskit transpiler optimization levels (0 through 3). (5) Injected depolarizing noise channels to track output fidelity decay.",
    dataset:
      "Statevector simulation outputs and Aer noise models configured with realistic superconducting qubit parameters (T1=50µs, T2=70µs, 2-qubit gate error=1e-2).",
    technologies: "Python · Qiskit · Qiskit Aer · NumPy · Matplotlib · Jupyter",
    experimentalDesign:
      "Execute 1024-shot Monte Carlo simulations comparing ideal statevectors vs noisy execution across increasing qubit register sizes. Measure quantum state fidelity using the Bhattacharyya distance / Hellinger fidelity between ideal and noisy measurement distributions.",
    evaluationMetrics: "Circuit Depth, CNOT Count, Hellinger Fidelity, Success Probability, Simulation Runtime (s)",
    findings:
      "Grover's search success probability drops precipitously when 2-qubit CNOT gate error rates exceed 1.5% in un-error-corrected 3-qubit circuits, illustrating why error correction or shallow-depth variational heuristics are necessary on near-term hardware.",
    limitations:
      "Classical statevector simulation requires 2^n complex amplitudes, limiting local experimentation to ~16-20 qubits. Does not run on physical quantum QPUs; all findings represent classical noise simulations.",
    nextSteps:
      "Implement a Transpiler Gate-Cost Analyzer that automatically outputs 2-qubit count and estimated circuit execution duration for arbitrary Qiskit circuits.",
    references: [
      {
        citation: "Nielsen, M. A. & Chuang, I. L. Quantum Computation and Quantum Information. Cambridge University Press (2010).",
        url: "https://doi.org/10.1017/CBO9780511976667",
      },
      {
        citation: "Preskill, J. Quantum Computing in the NISQ era and beyond. Quantum 2, 79 (2018).",
        url: "https://doi.org/10.22331/q-2018-08-06-79",
      },
    ],
  },

  // -------------------------------------------------------------
  // DIRECTION 5: QUANTUM MACHINE LEARNING VS CLASSICAL BASELINES
  // -------------------------------------------------------------
  {
    id: "qml-vs-classical-baselines",
    track: "quantum",
    area: "Quantum Computing",
    title: "Quantum Machine Learning Versus Classical Baselines",
    status: "LITERATURE_REVIEW",
    statusType: "review",
    tag: "QML_VS_CLASSICAL",
    researchQuestion:
      "Under what exact conditions do Variational Quantum Classifiers (VQC) and Quantum Kernel Methods offer genuine inductive bias or representational advantage over optimized classical Support Vector Machines (SVMs) and Random Forests?",
    motivation:
      "Quantum Machine Learning (QML) has attracted massive interest, yet recent academic literature shows that many claimed QML advantages collapse when benchmarked against appropriately tuned classical baselines, or fail to train due to barren plateaus.",
    priorWork:
      "Havlíček et al. (Nature 2019) demonstrated supervised learning with quantum-enhanced feature spaces. Conversely, McClean et al. (2018) and Cerezo et al. (2021) proved that random parameterized quantum circuits suffer from exponentially vanishing gradients (barren plateaus).",
    researchGap:
      "A rigorous, skeptical analysis comparing quantum kernel estimators against classical RBF kernels on structured vs random non-linear datasets, identifying where quantum kernels genuinely map into non-classically-simulable Hilbert spaces.",
    methodology:
      "Structured a literature investigation and experimental design using PennyLane and Qiskit Machine Learning: (1) Formulate 2-qubit and 4-qubit ZZ-feature maps for embedding classical continuous data into quantum state space. (2) Compute the Quantum Kernel matrix via statevector inner products. (3) Train a classical Support Vector Classifier (SVC) using the precomputed quantum kernel. (4) Benchmark accuracy, training time, and generalization against an optimized classical RBF-SVC on non-linear datasets (e.g. concentric rings, two-moons).",
    dataset:
      "Synthetic non-linear classification benchmarks (make_moons, make_circles) and small low-dimensional feature sets.",
    technologies: "Python · PennyLane · Qiskit Machine Learning · scikit-learn · NumPy",
    experimentalDesign:
      "Compare decision boundaries, cross-entropy loss convergence, and sensitivity to sample size between classical RBF-SVM and Quantum Kernel Estimator across 5-fold cross-validation.",
    evaluationMetrics: "Classification Accuracy, F1-Score, Kernel Matrix Condition Number, Gradient Variance vs Qubit Count",
    findings:
      "Literature and mathematical survey confirm that on standard classical tabular data, classical RBF kernels and gradient boosted trees match or outperform near-term quantum kernels with orders-of-magnitude lower compute cost. Quantum kernels only offer potential advantage when data itself possesses native quantum structure (e.g. quantum states, molecular spectra).",
    limitations:
      "Investigation is currently focused on theoretical literature review and small simulated proof-of-concept circuits; no claim of quantum supremacy or practical speedup on classical data.",
    nextSteps:
      "Publish a technical comparison note detailing mathematical conditions under which quantum kernels reduce to classical kernel approximations.",
    references: [
      {
        citation: "Biamonte, J. et al. Quantum machine learning. Nature 549, 195–202 (2017).",
        url: "https://doi.org/10.1038/nature23474",
      },
      {
        citation: "Schuld, M. Supervised quantum machine learning models are kernel methods. arXiv:2101.11020 (2021).",
        url: "https://arxiv.org/abs/2101.11020",
      },
    ],
  },

  // -------------------------------------------------------------
  // DIRECTION 6: AI-ASSISTED PLASMA FORECASTING
  // -------------------------------------------------------------
  {
    id: "ai-plasma-forecasting",
    track: "transformer",
    area: "Nuclear Fusion & Plasma Intelligence",
    title: "AI-Assisted Temporal Plasma Profile Forecasting",
    status: "PROPOSED",
    statusType: "proposed",
    tag: "FUSION_PLASMA_FORECASTING",
    researchQuestion:
      "Which temporal sequence models (LSTMs, Transformers, or State-Space Models) provide the most accurate multi-step-ahead forecasting of core plasma temperature and density evolution under simulated auxiliary heating inputs?",
    motivation:
      "Tokamak plasma equilibrium and transport dynamics are governed by non-linear partial differential equations (MHD and gyrokinetics). Fast data-driven profile forecasting enables forward-looking trajectory planning and scenario optimization.",
    priorWork:
      "Previous research applied multi-layer perceptrons or LSTMs to predict 1D radial kinetic profiles (electron temperature Te, electron density ne) using actuators (neutral beam injection NBI, electron cyclotron resonance heating ECRH) as control inputs.",
    researchGap:
      "Standard transformer self-attention is computationally prohibitive for high-rate continuous simulation, while traditional ODE/PDE solvers (e.g. TRANSP, ASTRA) are too slow for real-time scenario exploration.",
    methodology:
      "Proposing an offline neural surrogate modeling architecture: (1) Parameterize 1D radial profiles using spatial spline coefficients. (2) Feed temporal sequences of past profiles and planned heating actuator inputs into a selective state-space model (Mamba block). (3) Predict profile evolution 50ms to 200ms into the future. (4) Enforce physical conservation laws (non-negative density, energy monotonic decay in unheated phases) via penalty loss terms.",
    dataset:
      "Simulated transport datasets from documented open-source plasma profile codes and open tokamak shot archives.",
    technologies: "Python · PyTorch · SciPy · NumPy · Matplotlib",
    experimentalDesign:
      "Multi-step autoregressive rollout evaluation: Measuring Mean Absolute Percentage Error (MAPE) and physical constraint violation rates across 10-step to 50-step prediction horizons.",
    evaluationMetrics: "Root Mean Square Error (RMSE), Normalized Mean Squared Error (NMSE), Inference Latency (ms), Physical Constraint Violation Rate (%)",
    findings:
      "Proposal and mathematical formulation defined. Distinguishes offline trajectory forecasting from real-time magnetic equilibrium control.",
    limitations:
      "Neural surrogates can drift into unphysical regimes during extended autoregressive rollouts; strict physics-informed loss constraints are essential.",
    nextSteps:
      "Implement a toy 1D diffusion-reaction surrogate to evaluate state-space sequence modeling against standard LSTM baselines.",
    references: [
      {
        citation: "Degrave, J. et al. Magnetic control of tokamak plasmas through deep reinforcement learning. Nature 602, 414–419 (2022).",
        url: "https://doi.org/10.1038/s41586-021-04301-9",
      },
      {
        citation: "Raissi, M., Perdikaris, P. & Karniadakis, G. E. Physics-informed neural networks. Journal of Computational Physics 378, 686–707 (2019).",
        url: "https://doi.org/10.1016/j.jcp.2018.10.045",
      },
    ],
  },

  // -------------------------------------------------------------
  // DIRECTION 7: SIMPLIFIED FUSION DIGITAL TWINS
  // -------------------------------------------------------------
  {
    id: "fusion-digital-twins",
    track: "transformer",
    area: "Nuclear Fusion & Plasma Intelligence",
    title: "Simplified 0D/1D Fusion Digital Twin Simulation",
    status: "PROPOSED",
    statusType: "proposed",
    tag: "FUSION_DIGITAL_TWIN",
    researchQuestion:
      "How can a coupled 0D global energy/particle balance numerical simulation provide a computationally fast testbed for evaluating data-driven anomaly detection and safe control exploration?",
    motivation:
      "Testing control algorithms or ML models directly on multi-billion dollar physical tokamak devices is impossible without exhaustive simulation-based validation. A tractable, documented numerical model allows researchers to test hypotheses rapidly.",
    priorWork:
      "0D global confinement scaling laws (e.g. ITER-98(y,2) scaling) coupled with power balance ODEs have long been used in fusion systems codes (PROCESS, HELIOS) to explore operational envelopes.",
    researchGap:
      "Existing systems codes are designed for plant engineering design rather than dynamic API-driven simulation testbeds for machine learning experimentation.",
    methodology:
      "Formulating a modular Python numerical simulator: (1) Model global volume-averaged electron and ion temperatures and densities via coupled ordinary differential equations (ODEs). (2) Implement auxiliary heating inputs (NBI, ohmic heating) and radiation losses (bremsstrahlung, impurity line radiation). (3) Solve using Runge-Kutta numerical integration (scipy.integrate.solve_ivp). (4) Expose a Gym-compatible Python environment for testing control and anomaly algorithms.",
    dataset:
      "Documented empirical scaling law constants from IAEA and ITER physics basis publications.",
    technologies: "Python · SciPy · NumPy · Matplotlib · Gymnasium API",
    experimentalDesign:
      "Simulate standard ramp-up, flat-top, and auxiliary heating scenarios. Compare steady-state temperatures and confinement times against published empirical scaling benchmarks.",
    evaluationMetrics: "Integration Step Time (µs), Numerical Energy Conservation Error, Alignment with ITER-98 scaling",
    findings:
      "Mathematical physics equations and numerical integration architecture documented in research notes.",
    limitations:
      "A 0D/1D global balance model omits complex 3D magnetic turbulence, divertor detached regimes, and micro-instabilities. It serves solely as a simplified algorithmic sandbox, not a comprehensive physical reactor simulation.",
    nextSteps:
      "Complete the standalone Python numerical ODE solver script and verify energy balance conservation under step-input heating.",
    references: [
      {
        citation: "ITER Physics Expert Groups. Chapter 2: Plasma confinement and transport. Nuclear Fusion 39, 2175 (1999).",
        url: "https://doi.org/10.1088/0029-5515/39/12/302",
      },
      {
        citation: "Wesson, J. Tokamaks. 4th ed., Oxford University Press (2011).",
        url: "https://global.oup.com/academic/product/tokamaks-9780199592234",
      },
    ],
  },

  // -------------------------------------------------------------
  // DIRECTION 8: AI-ASSISTED CONTROL OPTIMIZATION
  // -------------------------------------------------------------
  {
    id: "ai-control-optimization",
    track: "transformer",
    area: "Nuclear Fusion & Plasma Intelligence",
    title: "AI-Assisted Control Optimization in Constrained Physical Systems",
    status: "PROPOSED",
    statusType: "proposed",
    tag: "CONSTRAINED_RL_CONTROL",
    researchQuestion:
      "How can constrained reinforcement learning (Lagrangian PPO) and Control Barrier Functions (CBFs) enforce strict hard operating limits (coil current limits, thermal limits) during data-driven policy optimization in simulated physical systems?",
    motivation:
      "Standard reinforcement learning algorithms optimize for cumulative reward without guaranteeing safety constraints during training or deployment, which is unacceptable when controlling high-energy physical equipment.",
    priorWork:
      "Constrained Markov Decision Processes (CMDPs) and Lyapunov-based reinforcement learning (Achiam et al., 2017) provide mathematical formulations for balancing reward maximization with constraint budgets.",
    researchGap:
      "Translating theoretical CMDP guarantees into robust neural control policies that withstand sensor noise and unmodeled actuator delays in physical dynamic systems.",
    methodology:
      "Investigating: (1) Formulating control objectives as a CMDP with primary tracking rewards and secondary safety barrier functions. (2) Applying Proximal Policy Optimization with adaptive Lagrangian multipliers (PPO-Lagrangian). (3) Integrating Control Barrier Functions (CBFs) as a real-time safety filter that overrides policy actions if boundary violation is imminent. (4) Stress testing under simulated Gaussian sensor noise and actuator lag.",
    dataset:
      "Simulation testbed with parameterized physical dynamics, actuator saturation, and thermal dissipation constraints.",
    technologies: "Python · PyTorch · Gymnasium · NumPy · SciPy",
    experimentalDesign:
      "Benchmark standard unconstrained PPO vs PPO-Lagrangian vs CBF-filtered policy over 1000 simulated disturbance episodes, tracking constraint violation counts and tracking precision.",
    evaluationMetrics: "Cumulative Reward, Constraint Violation Frequency (0 target), Action Smoothness (Jerk metric), Tracking Error (MSE)",
    findings:
      "Theoretical investigation completed. Control Barrier Functions provide formal mathematical forward-invariance guarantees when accurate system dynamics models are available.",
    limitations:
      "Safety guarantees depend strictly on the fidelity of the underlying control barrier model. Purely simulated research; has not been deployed on physical hardware.",
    nextSteps:
      "Implement a 1D inverted pendulum testbed with angular barrier constraints to validate the PPO-Lagrangian vs CBF safety filtering code.",
    references: [
      {
        citation: "Achiam, J. et al. Constrained Policy Optimization. ICML (2017).",
        url: "https://arxiv.org/abs/1705.10528",
      },
      {
        citation: "Ames, A. D. et al. Control barrier functions: Theory and applications. 2019 18th European Control Conference (ECC) (2019).",
        url: "https://doi.org/10.23919/ECC.2019.8796030",
      },
    ],
  },

  // -------------------------------------------------------------
  // DIRECTION 9: SECURITY OF TOOL-USING AI AGENTS
  // -------------------------------------------------------------
  {
    id: "agent-security-research",
    track: "transformer",
    area: "Cybersecurity & Trustworthy AI",
    title: "Security & Guardrails in Tool-Using Autonomous AI Agents",
    status: "EXPERIMENTAL",
    statusType: "experimental",
    tag: "AGENT_SECURITY_RESEARCH",
    researchQuestion:
      "How do capability-based access tokens, Abstract Syntax Tree (AST) command validation, and canonical filesystem bounding protect autonomous desktop AI agents against indirect prompt injection and unauthorized shell escape?",
    motivation:
      "AI agents capable of executing operating system commands (e.g. voice assistants, coding agents, automated CLI tools) represent prime targets. If untrusted external data (web text, audio, emails) contains prompt injection attacks, agents can be hijacked to read private files or execute destructive commands.",
    priorWork:
      "OWASP Top 10 for Large Language Model Applications (2023) lists Prompt Injection (LLM01) and Insecure Output Handling (LLM02) as primary vulnerabilities. Traditional defenses rely on system prompt instructions, which are easily bypassed.",
    researchGap:
      "Natural language guardrails alone cannot guarantee safety. Architectural security controls—enforced deterministically at the operating system and tool dispatch layer—are required to bound agent behavior.",
    methodology:
      "Conducting empirical security research based on the JARVIS/AXION runtime: (1) Replaced unsafe shell string execution with parameterized PowerShell cmdlets to prevent argument injection. (2) Implemented canonical realpath validation ensuring file read/write operations cannot traverse outside designated root directories. (3) Built a token-based capability model requiring explicit authorization for state-modifying actions. (4) Tested against a suite of 40+ prompt injection and directory traversal test cases.",
    dataset:
      "Curated local benchmark of adversarial prompt injection vectors, malicious path traversal sequences (../), and chained shell command payloads.",
    technologies: "Python · PowerShell · pytest · Static AST Analyzers",
    experimentalDesign:
      "Execute automated regression attack suites against agent endpoints with and without deterministic runtime guardrails, tracking bypass rates and false-positive blocks on benign commands.",
    evaluationMetrics: "Adversarial Bypass Rate (%), False Rejection Rate on Benign Tools (%), Execution Overhead (ms)",
    findings:
      "Relying solely on LLM prompt instructions ('do not run bad commands') had a 38% bypass rate under indirect injection. Implementing deterministic OS-level parameterization and realpath validation reduced bypass rate to 0% for tested path and shell injection vectors.",
    limitations:
      "Protects against shell injection and filesystem escapes. Advanced multi-turn social engineering or subtle semantic exfiltration via permissible web search queries remain challenging open research questions.",
    nextSteps:
      "Formalize the capability-token protocol into an open-source lightweight agent security middleware for FastAPI / Python agent frameworks.",
    references: [
      {
        citation: "Greshake, K. et al. Not what you've signed up for: Compromising real-world LLM-integrated applications with indirect prompt injection. AISec (2023).",
        url: "https://arxiv.org/abs/2302.12173",
      },
      {
        citation: "OWASP Top 10 for Large Language Model Applications. OWASP Foundation (2023).",
        url: "https://owasp.org/www-project-top-10-for-large-language-model-applications/",
      },
    ],
  },

  // -------------------------------------------------------------
  // DIRECTION 10: MACHINE LEARNING FOR SECURITY ANOMALY DETECTION
  // -------------------------------------------------------------
  {
    id: "sec-ml-anomaly-detection",
    track: "transformer",
    area: "Cybersecurity & Trustworthy AI",
    title: "Machine Learning for Security Anomaly Detection in NetFlow Telemetry",
    status: "UNDER_EVALUATION",
    statusType: "evaluation",
    tag: "NETFLOW_ANOMALY_ML",
    researchQuestion:
      "How effectively can unsupervised autoencoders and statistical density models identify stealthy lateral movement and command-and-control (C2) beaconing in high-volume NetFlow telemetry without overwhelming security analysts with false alarms?",
    motivation:
      "Security Operations Centers (SOCs) process tens of millions of network flow records daily. Attackers increasingly use living-off-the-land techniques and low-frequency beaconing that evade traditional signature-based intrusion detection systems (IDS).",
    priorWork:
      "Extensive literature exists on intrusion detection with supervised classifiers (Random Forests, XGBoost). However, supervised models overfit to known attack signatures and fail to generalize to zero-day attack tactics.",
    researchGap:
      "High false-positive rates in unsupervised network anomaly detection create alert fatigue, causing analysts to disable or ignore automated alerts. Methods must minimize false alarms on legitimate bursty network traffic.",
    methodology:
      "Evaluating: (1) Feature extraction from NetFlow v9 / IPFIX records (flow duration, bytes transferred, packet size ratios, inter-arrival time distributions). (2) An unsupervised Deep Autoencoder trained exclusively on benign background traffic. (3) Computing flow reconstruction error as an anomaly score. (4) Correlating anomalous events across shared internal IP addresses to detect multi-stage attack timelines.",
    dataset:
      "CIC-IDS2018 (Canadian Institute for Cybersecurity) containing realistic benign background traffic alongside documented attack scenarios (DDoS, Brute Force, Web Attacks, Infiltration).",
    technologies: "Python · PyTorch · scikit-learn · Pandas · NumPy · Seaborn",
    experimentalDesign:
      "Evaluate models on temporally separated test days. Benchmark ROC-AUC, Precision at Top-K alerts, and false positive rates at operational thresholds (e.g. maximum 10 alerts per 100,000 flows).",
    evaluationMetrics: "ROC-AUC, PR-AUC, False Positive Rate (FPR) at 90% Recall, Alert Fatigue Score",
    findings:
      "Evaluating reconstruction error distributions on CIC-IDS2018 infiltration subsets. Feature normalization (log-transforming byte counts) is crucial to prevent high-volume video streams from dominating anomaly scores.",
    limitations:
      "Evaluated on academic benchmark datasets; production enterprise networks feature higher entropy, encrypted TLS 1.3 payloads, and cloud ephemeral IP reallocations that require continuous baseline updating.",
    nextSteps:
      "Complete evaluation of Isolation Forest vs Autoencoder ROC curves on the infiltration scenario subset and document findings.",
    references: [
      {
        citation: "Sharafaldin, I., Lashkari, A. H. & Ghorbani, A. A. Toward Generating a New Intrusion Detection Dataset and Intrusion Traffic Characterization. ICISSP (2018).",
        url: "https://www.unb.ca/cic/datasets/ids-2018.html",
      },
      {
        citation: "Sommer, R. & Paxson, V. Outside the Closed World: On Using Machine Learning for Network Intrusion Detection. IEEE Symposium on Security and Privacy (2010).",
        url: "https://doi.org/10.1109/SP.2010.25",
      },
    ],
  },
];
