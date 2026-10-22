// Comprehensive cybersecurity arsenal data: Foundation competencies + 10 applied projects
// All projects are strictly framed for authorized educational research, local sandboxes, and defensive validation.

export const FOUNDATION_SKILLS = [
  {
    id: "recon-surface",
    name: "Recon & Surface Mapping",
    category: "offensive",
    categories: ["offensive"],
    tools: "Nmap · Shodan · Masscan · Wireshark · Amass · Gobuster",
    desc: "Passive & active OSINT, network topology scanning, service enumeration, and sub-domain discovery.",
    code: "PORT_ENUM // BANNER_GRAB",
    status: "VERIFIED SKILL",
    isProject: false,
    features: [
      "Network footprinting & ASN perimeter mapping.",
      "Service banner grabbing & TLS configuration audits.",
      "Subdomain enumeration via DNS brute-force & Certificate Transparency logs.",
      "Passive OSINT correlation and attack surface reduction.",
    ],
    architecture: `TARGET DOMAIN/IP ---> [PASSIVE OSINT / CT LOGS] ---> [SERVICE SCAN / NMAP] ---> [SURFACE REPORT]`,
  },
  {
    id: "web-api-exploit",
    name: "Web & API Exploitation",
    category: "offensive",
    categories: ["offensive"],
    tools: "Burp Suite Pro · OWASP Top 10 · Postman · SQLMap · JWT Tool",
    desc: "Testing for SSRF, IDOR, SQLi, command injection, broken authentication, and business logic flaws.",
    code: "OWASP // API_PEN_TEST",
    status: "VERIFIED SKILL",
    isProject: false,
    features: [
      "OWASP Top 10 vulnerability identification and manual triage.",
      "Authentication bypass and Broken Object Level Authorization (BOLA) tests.",
      "Session fixation, JWT tampering, and cryptographic flaw verification.",
      "Business logic flaw exploration in authorized environments.",
    ],
    architecture: `CLIENT REQUEST ---> [BURP SUITE PROXY] ---> [PAYLOAD INJECTION & TRIAGE] ---> [REPRODUCTION PROOF]`,
  },
  {
    id: "binary-memory",
    name: "Binary & Memory Audits",
    category: "offensive",
    categories: ["offensive"],
    tools: "Ghidra · GDB-pwndbg · Radare2 · Checksec",
    desc: "Reverse engineering ELF/PE binaries, identifying buffer overflows, formatting bugs, and analyzing stack defenses.",
    code: "ROP // MEMORY_CORRUPT",
    status: "VERIFIED SKILL",
    isProject: false,
    features: [
      "Disassembly & decompilation using Ghidra and Radare2.",
      "Stack canary, NX/DEP bit, and ASLR mitigation analysis.",
      "Buffer overflow boundary condition detection and crash triage.",
      "Return-Oriented Programming (ROP) chain conceptualization.",
    ],
    architecture: `BINARY EXECUTABLE ---> [CHECKSEC AUDIT] ---> [GHIDRA DECOMPILE / GDB] ---> [SECURITY MITIGATION REPORT]`,
  },
  {
    id: "adversarial-ai-red",
    name: "Adversarial AI & Red Teaming",
    category: "offensive",
    categories: ["offensive", "ai"],
    tools: "Prompt Fuzzing · Garak · Jailbreak Testing · PyRIT",
    desc: "Testing LLM agents against indirect prompt injections, jailbreaks, data exfiltration, and tool abuse.",
    code: "AI_INJECTION // RCE_GUARD",
    status: "VERIFIED SKILL",
    isProject: false,
    features: [
      "Direct & indirect prompt injection payload generation.",
      "Agentic tool boundary fuzzing and privilege escalation tests.",
      "Model extraction and system prompt exfiltration testing.",
      "Adversarial robustness evaluation for multi-agent workflows.",
    ],
    architecture: `UNTRUSTED INPUT ---> [ADVERSARIAL PROMPT ENGINE] ---> [AGENT SANDBOX] ---> [SAFETY COMPLIANCE LOG]`,
  },
  {
    id: "code-review",
    name: "Secure Code Review",
    category: "defensive",
    categories: ["defensive"],
    tools: "Semgrep · Bandit · Trivy · Git-Secrets",
    desc: "Static and dynamic source review to eliminate hardcoded secrets, unsafe deserialization, and path traversals.",
    code: "STATIC_AST // SANITIZE",
    status: "VERIFIED SKILL",
    isProject: false,
    features: [
      "Custom Semgrep rule development for company-specific patterns.",
      "Automated git pre-commit hooks for secret leakage prevention.",
      "Unsafe deserialization and SQL string concatenation discovery.",
      "Remediation guidance pairing with developers.",
    ],
    architecture: `GIT COMMIT ---> [PRE-COMMIT HOOK] ---> [SEMGREP / BANDIT AST MATCH] ---> [MERGE GATE PASS/FAIL]`,
  },
  {
    id: "zero-trust",
    name: "Architecture & Zero-Trust",
    category: "defensive",
    categories: ["defensive"],
    tools: "Least Privilege · Strict CORS · JWT / Ed25519 · Sandboxing",
    desc: "Defensive design from day one: scoped API credentials, isolated execution environments, and zero trust.",
    code: "ZERO_TRUST // TOKENS",
    status: "VERIFIED SKILL",
    isProject: false,
    features: [
      "Scoped OAuth2 tokens and short-lived ephemeral sessions.",
      "Strict Cross-Origin Resource Sharing (CORS) enforcement.",
      "Process isolation via Linux namespaces and Docker sandboxing.",
      "Zero-Trust network segmentation and perimeter-less defenses.",
    ],
    architecture: `CLIENT REQUEST ---> [ED25519 TOKEN VERIFY] ---> [SCOPED RBAC CHECK] ---> [ISOLATED SERVICE CONTAINER]`,
  },
  {
    id: "edge-fail-safe",
    name: "Edge & Industrial Fail-Safes",
    category: "defensive",
    categories: ["defensive"],
    tools: "ESP32 Watchdogs · Hardware Fail-Safe · Isolated Buses",
    desc: "Designing IoT hardware (Retrofit) so physical power loss or sensor failure defaults to safe states.",
    code: "TINY_ML // HARDWARE_SAFE",
    status: "VERIFIED SKILL",
    isProject: false,
    features: [
      "Hardware watchdog timers ensuring crash recovery.",
      "Fail-safe relay states in the event of electrical disconnect.",
      "Encrypted MQTT telemetry over TLS 1.3 with local certificates.",
      "Sensor anomaly detection filtering poisoned physical readings.",
    ],
    architecture: `ANALOG SENSOR MATRIX ---> [HARDWARE WATCHDOG] ---> [ISOLATED BUS / ESP32] ---> [SECURE MQTT / TLS]`,
  },
  {
    id: "anomaly-pipeline",
    name: "Anomaly Detection Pipelines",
    category: "defensive",
    categories: ["defensive"],
    tools: "Isolation Forest · One-Class SVM · Real-time Telemetry",
    desc: "Unsupervised machine learning on raw multi-sensor telemetry to flag anomalies before incidents occur.",
    code: "ML_ANOMALY // RISK_SCORE",
    status: "VERIFIED SKILL",
    isProject: false,
    features: [
      "Feature engineering on high-frequency sensor time-series.",
      "Unsupervised Isolation Forest outlier detection.",
      "Four-band risk quantification scoring.",
      "Alert threshold calibration to eliminate false positives.",
    ],
    architecture: `RAW TIME-SERIES ---> [PREPROCESSING & NORMALIZATION] ---> [ISOLATION FOREST MODEL] ---> [RISK SCORE 0-100]`,
  },
];

export const ARSENAL_PROJECTS = [
  {
    id: "vulnlab",
    name: "VulnLab",
    category: "offensive",
    categories: ["offensive"],
    code: "WEB_SECURITY_LAB",
    status: "PLANNED",
    isProject: true,
    tools: "Python · Flask/FastAPI · Docker · OWASP Juice Shop · OWASP ZAP",
    desc: "A controlled web application security lab for learning, reproducing, and validating common vulnerabilities in intentionally vulnerable applications.",
    problemStatement:
      "Security engineers and developers need isolated, repeatable environments to reproduce and mitigate web vulnerabilities without risking external systems or production data.",
    objectives:
      "Provide a locally sandboxed testbed with documented vulnerability reproductions, exploit proofs-of-concept, and corresponding defensive code patches.",
    features: [
      "Local Docker sandbox for authorized security testing.",
      "Demonstrations of SQL injection, XSS, authentication weaknesses, and access-control flaws.",
      "Reproducible test cases and side-by-side remediation examples.",
      "Before-and-after security validation comparing vulnerable vs patched code.",
      "Documentation of findings, impact analysis, and hardening guidelines.",
    ],
    architecture: `DOCKER ISOLATED NETWORK
[ATTACK WORKBENCH] ---> [OWASP ZAP PROXY] ---> [VULNLAB APP (FASTAPI)]
       |                                                 |
       +<------------- [VULN REPRO / PATCH TEST] <-------+`,
    milestones: [
      "Phase 1: Docker Compose scaffolding with isolated network subnet.",
      "Phase 2: Implementation of intentionally vulnerable endpoints (SQLi, IDOR, CSRF).",
      "Phase 3: Python remediation test harness with automated pass/fail verification.",
      "Phase 4: Detailed documentation and step-by-step remediation guide.",
    ],
    testingStrategy:
      "Automated pytest test suite executing attacks against vulnerable endpoints (expecting failure) and patched endpoints (expecting mitigation).",
    ethicalBoundaries:
      "Strictly bound to 127.0.0.1 Docker containers with non-routable interfaces. No live external targeting capabilities.",
  },
  {
    id: "codesentinel",
    name: "CodeSentinel",
    category: "defensive",
    categories: ["defensive"],
    code: "STATIC_CODE_ANALYSIS",
    status: "PLANNED",
    isProject: true,
    tools: "Python · Semgrep · Bandit · Git · JSON",
    desc: "A static source-code security analyzer that identifies potentially dangerous coding patterns and provides actionable remediation guidance.",
    problemStatement:
      "Security flaws like hardcoded tokens, unsanitized inputs, and insecure library calls frequently bypass standard peer reviews and reach production.",
    objectives:
      "Build a lightweight, developer-friendly static analysis CLI that parses codebases against AST security rules and produces structured remediation reports.",
    features: [
      "Scan supported source files and directories recursively.",
      "Detect hardcoded secrets, private keys, and suspicious insecure patterns.",
      "Flag unsafe input handling, SQL string concatenation, and command execution.",
      "Categorize findings by severity (Critical, High, Medium, Low) and confidence.",
      "Generate exportable JSON and clean HTML security summaries.",
      "Provide specific remediation recommendations and test cases.",
    ],
    architecture: `SOURCE REPO ---> [AST PARSER (SEMGREP / BANDIT)] ---> [RULE MATCH ENGINE]
                                                             |
HTML/JSON REPORT <--- [CONFIDENCE & SEVERITY TRIAGE] <-------+`,
    milestones: [
      "Phase 1: Core CLI with file discovery and language identification.",
      "Phase 2: Custom Semgrep rule packs for OWASP Top 10 patterns.",
      "Phase 3: Bandit integration for Python-specific security checks.",
      "Phase 4: HTML report generation with inline remediation snippets.",
    ],
    testingStrategy:
      "Tested against synthetic test code suites with known vulnerable patterns (positive controls) and secure patterns (negative controls).",
    ethicalBoundaries:
      "Operates purely locally on user-provided source trees. No telemetry or source code is transmitted off the machine.",
  },
  {
    id: "api-guardian",
    name: "API Guardian",
    category: "offensive",
    categories: ["offensive"],
    code: "API_SECURITY_AUDIT",
    status: "PLANNED",
    isProject: true,
    tools: "Python · FastAPI · OpenAPI · Postman · OWASP ZAP",
    desc: "An API security assessment tool that evaluates configured endpoints for common authorization, authentication, input-validation, and configuration weaknesses.",
    problemStatement:
      "APIs are the primary attack surface for modern web applications, often plagued by Broken Object Level Authorization (BOLA), mass assignment, and weak token validation.",
    objectives:
      "Automate the validation of OpenAPI contracts against OWASP API Security Top 10 risks in authorized staging and mock environments.",
    features: [
      "Import OpenAPI v3 / Swagger specifications automatically.",
      "Validate authentication and authorization rules across multi-tenant scopes.",
      "Test access-control boundaries using designated test accounts (User A vs User B).",
      "Check input validation, rate limiting, and common API security misconfigurations.",
      "Produce reproducible findings and actionable remediation reports.",
      "Support mock APIs and explicitly authorized staging environments.",
    ],
    architecture: `OPENAPI SPEC ---> [ENDPOINT DISCOVERY] ---> [DUAL-ROLE TOKEN INJECTOR]
                                                    |
FINDINGS AUDIT <--- [BOLA & SCOPE MATRIX VERIFIER] <-+`,
    milestones: [
      "Phase 1: OpenAPI 3.0 JSON/YAML parser and route mapper.",
      "Phase 2: Dual-user role credential switcher for BOLA detection.",
      "Phase 3: Fuzzing input validation checks (type confusion, oversized payloads).",
      "Phase 4: Structured Markdown/JSON compliance reporter.",
    ],
    testingStrategy:
      "Evaluated against mock FastAPI services designed with deliberate access control vulnerabilities.",
    ethicalBoundaries:
      "Requires explicit authorization configuration. Restricted to designated localhost and staging domain patterns.",
  },
  {
    id: "threatlens",
    name: "ThreatLens",
    category: "defensive",
    categories: ["defensive"],
    code: "LOG_ANOMALY_DETECTION",
    status: "PLANNED",
    isProject: true,
    tools: "Python · Pandas · scikit-learn · FastAPI · Plotly",
    desc: "A security-log analysis system that detects unusual patterns, highlights suspicious events, and helps analysts investigate potential incidents.",
    problemStatement:
      "Security analysts are overwhelmed by massive log volumes, making it difficult to detect subtle lateral movement, brute force spikes, and credential stuffing attacks.",
    objectives:
      "Ingest, normalize, and score security events using unsupervised anomaly detection models to correlate incidents into explainable investigation timelines.",
    features: [
      "Ingest sample or authorized security logs (auth.log, nginx, web server access).",
      "Normalize timestamps and extract standardized event fields (IP, user, URI, status).",
      "Identify unusual login activity, geo-velocity anomalies, and abnormal event spikes.",
      "Correlate related security events into chronological investigation timelines.",
      "Assign explainable risk scores based on statistical deviation.",
      "Display real-time visual alerts and generate incident investigation summaries.",
    ],
    architecture: `RAW AUDIT LOGS ---> [INGESTION & FIELD NORMALIZER] ---> [FEATURE VECTORIZER]
                                                               |
INVESTIGATION TIMELINE <--- [EXPLAINABLE RISK SCORER] <--- [ISOLATION FOREST]`,
    milestones: [
      "Phase 1: Log normalization parser for syslog and Apache/Nginx formats.",
      "Phase 2: Feature engineering (request rate, failed auth frequency, entropy).",
      "Phase 3: Scikit-learn Isolation Forest unsupervised model training.",
      "Phase 4: Interactive Plotly timeline UI and alert dashboard.",
    ],
    testingStrategy:
      "Evaluated against anonymized public security log datasets containing labeled synthetic intrusion attempts.",
    ethicalBoundaries:
      "Analyzes strictly sanitized and authorized logs. Designed for defensive telemetry monitoring only.",
  },
  {
    id: "supplychain-shield",
    name: "SupplyChain Shield",
    category: "defensive",
    categories: ["defensive"],
    code: "DEPENDENCY_RISK_SCAN",
    status: "PLANNED",
    isProject: true,
    tools: "Python · OSV API · CycloneDX · Syft · GitHub Actions",
    desc: "A dependency-risk analyzer that helps developers identify vulnerable packages, outdated dependencies, and software supply-chain risks.",
    problemStatement:
      "Modern applications rely on thousands of transitive open-source libraries, creating blind spots where known CVEs can be exploited.",
    objectives:
      "Generate machine-readable SBOMs and cross-reference dependency trees against open vulnerability databases to identify outdated or vulnerable packages.",
    features: [
      "Parse supported dependency manifests and lockfiles (package-lock.json, poetry.lock, requirements.txt).",
      "Identify known vulnerabilities using trusted vulnerability databases (OSV, GitHub Advisory).",
      "Display affected packages, vulnerability severity, and available patched versions.",
      "Generate Software Bill of Materials (SBOM) reports in CycloneDX and SPDX formats.",
      "Highlight outdated, deprecated, and unmaintained package dependencies.",
      "Integrate with continuous development workflows through automated CI checks.",
    ],
    architecture: `LOCKFILES / MANIFESTS ---> [DEPENDENCY TREE RESOLVER] ---> [OSV.DEV API CLIENT]
                                                                 |
CYCLONEDX SBOM + REPORT <--- [SEVERITY & PATCH ADVISORY] <-------+`,
    milestones: [
      "Phase 1: Multi-ecosystem lockfile parser (npm, pip, cargo).",
      "Phase 2: Client integration with Google OSV REST API.",
      "Phase 3: CycloneDX 1.5 JSON SBOM generator.",
      "Phase 4: GitHub Action integration for pull-request security gates.",
    ],
    testingStrategy:
      "Tested against mock repository lockfiles containing archived dependencies with historical vulnerabilities.",
    ethicalBoundaries:
      "Read-only dependency inspection using publicly available security advisories; no code modification without user approval.",
  },
  {
    id: "privacyscope",
    name: "PrivacyScope",
    category: "defensive",
    categories: ["defensive"],
    code: "BROWSER_PRIVACY_AUDIT",
    status: "PLANNED",
    isProject: true,
    tools: "JavaScript · TypeScript · Python · Playwright · Browser DevTools",
    desc: "A browser privacy and security assessment tool that helps users understand common tracking mechanisms and website security configurations.",
    problemStatement:
      "Users and developers struggle to evaluate whether websites properly protect sessions with secure cookie flags, strict transport headers, and privacy-preserving policies.",
    objectives:
      "Evaluate client-observable HTTP response headers, transport security, and tracking indicators during headless navigation to generate a clear privacy report card.",
    features: [
      "Analyze website security headers (CSP, HSTS, X-Content-Type-Options, Referrer-Policy).",
      "Evaluate cookie security attributes (HttpOnly, Secure, SameSite) when observable.",
      "Identify third-party tracking scripts, fingerprinting APIs, and analytics beacons.",
      "Review HTTPS encryption grade and transport-security configurations.",
      "Present privacy observations with plain-language technical explanations.",
      "Generate a structured privacy and security summary score.",
    ],
    architecture: `TARGET URL ---> [HEADLESS PLAYWRIGHT BROWSER] ---> [HTTP HEADER EXTRACTOR]
                                                          |
PRIVACY SCORECARD <--- [COOKIE ATTRIBUTE & TRACKER AUDIT] <+`,
    milestones: [
      "Phase 1: Headless browser session runner with network interception.",
      "Phase 2: Security header scoring engine against OWASP Secure Headers Project.",
      "Phase 3: Cookie flag verification and tracker domain matching.",
      "Phase 4: Interactive HTML/JSON privacy scorecard report generator.",
    ],
    testingStrategy:
      "Validated against public test suites (badssl.com, OWASP security header benchmarks).",
    ethicalBoundaries:
      "Restricted to passive, client-observable HTTP interactions. No active probing or vulnerability exploitation.",
  },
  {
    id: "cloudguard",
    name: "CloudGuard",
    category: "defensive",
    categories: ["defensive"],
    code: "CLOUD_CONFIG_AUDIT",
    status: "PLANNED",
    isProject: true,
    tools: "Python · Checkov · Prowler · Terraform · JSON/YAML",
    desc: "A cloud configuration review tool that identifies potentially risky settings in authorized cloud environments or offline configuration fixtures.",
    problemStatement:
      "Cloud misconfigurations—such as overly permissive IAM roles, unencrypted storage, and public ingress rules—account for the majority of cloud data breaches.",
    objectives:
      "Audit Infrastructure-as-Code (IaC) files and cloud policy fixtures against CIS benchmarks and least-privilege standards before deployment.",
    features: [
      "Inspect supported configuration exports and Infrastructure-as-Code files (Terraform, CloudFormation).",
      "Detect overly permissive access policies and wildcard IAM permissions (Action: *).",
      "Flag publicly exposed storage buckets, databases, and unauthenticated endpoints.",
      "Identify missing encryption-at-rest and disabled audit logging configurations.",
      "Assign severity levels with actionable remediation code snippets.",
      "Export audit findings in structured JSON, JUnit, and Markdown reports.",
    ],
    architecture: `IAC TEMPLATES (TF/YAML) ---> [STATIC PARSER] ---> [CIS BENCHMARK POLICY ENGINE]
                                                            |
REMEDIATION REPORT <--- [RISK & SEVERITY TRIAGE MATRIX] <---+`,
    milestones: [
      "Phase 1: HCL and YAML parser for Terraform and CloudFormation.",
      "Phase 2: Rule library matching CIS AWS/GCP Foundations Benchmarks.",
      "Phase 3: IAM policy analyzer flagging wildcard grants.",
      "Phase 4: Automated diff generator proposing corrected IaC code.",
    ],
    testingStrategy:
      "Tested against open-source vulnerable infrastructure templates (e.g., Terragoat) in offline test runs.",
    ethicalBoundaries:
      "Performs static evaluation of local configuration fixtures. Does not initiate unauthorized cloud API connections.",
  },
  {
    id: "llm-shield",
    name: "LLM Shield",
    category: "defensive",
    categories: ["offensive", "defensive", "ai"],
    code: "LLM_APPSEC_TESTING",
    status: "PLANNED",
    isProject: true,
    tools: "Python · FastAPI · pytest · OWASP LLM Top 10 · LLM APIs",
    desc: "A security testing framework for evaluating AI applications against prompt injection, insecure tool use, sensitive-data exposure, and unsafe output handling.",
    problemStatement:
      "Autonomous agents and generative AI interfaces introduce unvetted vulnerabilities like jailbreaks, indirect prompt injection, and unauthorized remote tool invocation.",
    objectives:
      "Benchmark AI pipelines against adversarial test corpora aligned with the OWASP Top 10 for Large Language Model Applications.",
    features: [
      "Run a controlled library of adversarial test cases against candidate system prompts.",
      "Evaluate direct and indirect prompt-injection resistance in simulated workflows.",
      "Test whether sensitive information or system instructions are improperly exposed.",
      "Assess tool permissions and sandbox access boundaries for agentic execution.",
      "Evaluate output validation and unsafe command execution handling.",
      "Produce reproducible evaluation reports and recommended mitigation guardrails.",
    ],
    architecture: `ADVERSARIAL PROMPTS ---> [INJECTION RUNNER] ---> [AGENT / SYSTEM PROMPT UNDER TEST]
                                                        |
MITIGATION SCORECARD <--- [GUARDRAIL & TOOL BOUNDARY VALIDATOR] <+`,
    milestones: [
      "Phase 1: Curated dataset of prompt injection and jailbreak test vectors.",
      "Phase 2: Automated execution harness measuring bypass rates across model endpoints.",
      "Phase 3: Tool-execution boundary sandbox testing (command execution, file access).",
      "Phase 4: Defensive guardrail recommendations (input sanitization, dual-LLM verifiers).",
    ],
    testingStrategy:
      "Tested against mock agent architectures with controlled synthetic secret keys in sandboxed environments.",
    ethicalBoundaries:
      "Restricted to evaluating explicitly owned system prompts and APIs in isolated test fixtures.",
  },
  {
    id: "forensicflow",
    name: "ForensicFlow",
    category: "defensive",
    categories: ["defensive"],
    code: "DIGITAL_FORENSICS",
    status: "PLANNED",
    isProject: true,
    tools: "Python · hashlib · SQLite · JSON · Timeline Visualization",
    desc: "A digital forensics utility that organizes authorized evidence files, extracts relevant metadata, and reconstructs event timelines for investigation.",
    problemStatement:
      "Digital forensics investigations require verifiable chain-of-custody, cryptographic evidence hashing, and temporal correlation across fragmented evidence files.",
    objectives:
      "Automate the extraction of forensic artifacts, calculate cryptographic hashes, and build chronological, searchable incident timelines.",
    features: [
      "Calculate SHA-256 and MD5 file hashes for evidence integrity verification.",
      "Extract supported file metadata (creation, modification, access, owner timestamps).",
      "Normalize disparate event timestamps into unified UTC chronological sequences.",
      "Build searchable incident timelines with keyword and event-type filtering.",
      "Maintain an auditable, tamper-evident log of all analyst actions.",
      "Export structured investigation reports in JSON, CSV, and visual HTML timelines.",
    ],
    architecture: `EVIDENCE DIRECTORY ---> [HASH & INTEGRITY SEAL] ---> [METADATA EXTRACTOR]
                                                             |
INVESTIGATION REPORT <--- [SEARCHABLE TIMELINE BUILDER] <---+`,
    milestones: [
      "Phase 1: Cryptographic hash verification and chain-of-custody logging.",
      "Phase 2: File system metadata extraction engine.",
      "Phase 3: SQLite-backed normalized event database.",
      "Phase 4: Web-based interactive timeline visualizer with query filters.",
    ],
    testingStrategy:
      "Validated using public digital forensic challenge images and synthetic disk artifact fixtures.",
    ethicalBoundaries:
      "Designed strictly for authorized post-incident analysis on user-supplied evidence files with read-only access.",
  },
  {
    id: "fuzzforge",
    name: "FuzzForge",
    category: "offensive",
    categories: ["offensive"],
    code: "FUZZ_TEST_LAB",
    status: "PLANNED",
    isProject: true,
    tools: "Python · pytest · Hypothesis · Atheris · libFuzzer",
    desc: "A controlled fuzz-testing framework that generates test inputs to uncover crashes, parsing failures, and unexpected behavior in software under test.",
    problemStatement:
      "Software parsers and protocols often contain critical memory corruption bugs and unhandled edge cases that evade conventional unit testing.",
    objectives:
      "Provide a property-based mutation engine that generates unexpected inputs to stress-test local software interfaces and minimize crash reproducers.",
    features: [
      "Run against local programs or explicitly authorized test targets.",
      "Generate structured and mutated test inputs using coverage feedback.",
      "Capture crashes, uncaught exceptions, and processing timeouts.",
      "Save reproducible failing inputs with minimal byte representations.",
      "Minimize failing test cases where practical to isolate root causes.",
      "Generate automated test summaries and regression test suites.",
    ],
    architecture: `SEED CORPUS ---> [MUTATION ENGINE] ---> [TARGET FUNCTION / PARSER]
                                                 |
CRASH REPRODUCER <--- [TEST CASE MINIMIZER] <--- [EXCEPTION & CRASH DETECTOR]`,
    milestones: [
      "Phase 1: Core mutation generator supporting byte flipping, boundary values, and dictionary inserts.",
      "Phase 2: Crash monitor logging stack traces and reproducing inputs.",
      "Phase 3: Automated test case minimizer using delta debugging.",
      "Phase 4: Integration with pytest for automated regression testing.",
    ],
    testingStrategy:
      "Tested on open-source parsers with known historical parsing bugs in controlled test runs.",
    ethicalBoundaries:
      "Fuzzing targets must be local, compiled source code or explicitly authorized testing stubs.",
  },
];
