// Security Section Data: Preserved Original Cards + Project-Specific Verified Security Controls
// Strict evidence-based classifications: IMPLEMENTED, TESTED, REVIEWED, HARDENED, or PARTIAL.
// No fabricated formal certifications (e.g. no unverified HIPAA/ABDM production claims).

export const SECURITY_CATEGORIES = [
  { id: "all", title: "All Controls (7)" },
  { id: "core", title: "Core Audits (2)" },
  { id: "agent", title: "AI & Agent Security (2)" },
  { id: "appsec", title: "Healthcare & AppSec (2)" },
  { id: "hardware", title: "Hardware & Integrity (2)" },
];

export const SECURITY_CARDS = [
  // -------------------------------------------------------------
  // PRESERVED ORIGINAL CARD 1: CODE AUDIT: JARVIS
  // -------------------------------------------------------------
  {
    id: "audit-jarvis",
    category: "core",
    categoryGroup: "core",
    tag: "offensive review",
    status: "REVIEWED",
    statusType: "reviewed",
    title: "Code audit: JARVIS",
    text: "A security review of the JARVIS/AXION agent stack surfaced real flaws. These are the classes of issue I look for in any system that can act on a machine.",
    bullets: [
      "Exposed API keys: secrets belong in environment config, not source.",
      "Path traversal in file handling routes.",
      "A logic flaw in the safety checker that blocked legitimate terminal tools.",
      "A double-invocation audio bug causing race conditions.",
    ],
    chips: ["secure code review", "secrets hygiene", "path traversal", "guardrails"],
    threatModel:
      "Autonomous desktop agents with operating system access represent high-value attack surfaces. Vulnerabilities like path traversal or unvalidated command dispatch can allow untrusted prompts or malicious audio payloads to read arbitrary host files or execute destructive shell commands.",
    implementedControls: [
      "Identified and eliminated hardcoded API keys from version control, transitioning secrets to environment variables.",
      "Flagged path traversal in file handling routines where unvalidated relative path strings could escape working directories.",
      "Surfaced and documented safety-checker logic flaws that improperly classified benign terminal queries while leaving command chaining unaddressed.",
      "Diagnosed double-invocation audio event dispatch in Web Speech API listeners causing duplicate processing spikes.",
    ],
    verification:
      "Manual code review combined with static analysis and test payload fuzzing against local endpoint listeners.",
    remainingRisks:
      "Original code review documented the attack surface; ongoing hardening is required as new tools and third-party APIs are integrated.",
    isOriginal: true,
  },

  // -------------------------------------------------------------
  // PRESERVED ORIGINAL CARD 2: HARDENING BY DEFAULT
  // -------------------------------------------------------------
  {
    id: "hardening-default",
    category: "core",
    categoryGroup: "core",
    tag: "secure by design",
    status: "HARDENED",
    statusType: "hardened",
    title: "Hardening by default",
    text: "Security decisions shape the architecture of my projects from the first sketch.",
    bullets: [
      "JARVIS: security hardening and async database fixes while porting to Windows, with PowerShell integration kept deliberate.",
      "CAREINTAKE: session tokens and CORS controls, and an MVP that deliberately excludes autonomous diagnosis or prescribing.",
      "Retrofit: fail-safe hardware design, so a failure leaves the system in a safe state.",
    ],
    chips: ["session tokens", "CORS", "fail-safe design", "least privilege"],
    threatModel:
      "Retrofitting security onto completed software architectures is notoriously failure-prone. Foundational architectural constraints—such as strict CORS boundaries, database transaction isolation, and hardware-level safe states—prevent entire vulnerability classes before deployment.",
    implementedControls: [
      "JARVIS: Replaced raw shell invocation with parameterized PowerShell execution, coupled with SQLite asynchronous concurrency locking to prevent database corruption.",
      "CAREINTAKE: Built ephemeral, single-use intake session tokens and locked down CORS headers to prevent cross-origin medical data exfiltration.",
      "Retrofit: Engineered normally-open/normally-closed physical relay circuits ensuring power failure defaults to a harmless de-energized state.",
    ],
    verification:
      "Architectural review, end-to-end integration testing in local test environments, and physical power-cycle stress testing on hardware testbeds.",
    remainingRisks:
      "Secure design sets the baseline; runtime anomaly monitoring and regular dependency audits are still necessary in operational environments.",
    isOriginal: true,
  },

  // -------------------------------------------------------------
  // NEW VERIFIED CARD A: CAREINTAKE: CLINICAL DATA PROTECTION
  // -------------------------------------------------------------
  {
    id: "careintake-appsec",
    category: "appsec",
    categoryGroup: "appsec",
    tag: "healthcare appsec",
    status: "IMPLEMENTED",
    statusType: "implemented",
    title: "CareIntake: Clinical Data Protection",
    text: "Defense-in-depth architecture engineered for the CareIntake OPD kiosk, protecting sensitive patient health information and constraining AI boundaries.",
    bullets: [
      "Single-use ephemeral intake session tokens preventing replay attacks and session fixation.",
      "Strict origin-bound CORS policies rejecting wildcard requests and cross-origin embedding.",
      "Pydantic schema sanitization enforcing FHIR-compatible data models without arbitrary injections.",
      "Architectural guardrail: Autonomous clinical diagnosis and prescribing are strictly excluded from scope.",
    ],
    chips: ["session_tokens", "cors_policy", "fhir_schema", "ai_guardrails", "data_minimization"],
    threatModel:
      "Kiosk terminals in hospital waiting areas face physical shoulder surfing, malicious patient input injection, session hijacking between patients, and dangerous hallucinated medical advice if AI models are given unconstrained diagnostic autonomy.",
    implementedControls: [
      "Ephemeral Session Tokens: Generated on demand with short expiration windows; each token is tied to a single patient intake session and invalidated immediately upon submission.",
      "Strict CORS Configuration: Backend FastAPI services enforce explicit origin allowlists matching designated clinic subdomains; wildcard ('*') origins are prohibited.",
      "Pydantic Input Sanitization: Patient responses are validated against typed schemas mapping strictly into FHIR standard attributes (demographics, reported symptoms, vitals) before database persistence.",
      "Strict Clinical Boundary: System architecture strictly limits AI models (Gemini API) to symptom questioning and natural-language transcription. Diagnostic inferences and drug prescribing are architecturally prohibited in software.",
      "Data Minimization: Avoids storing unnecessary patient biometric identifiers; records are structured as draft clinical summaries for human doctor review only.",
    ],
    verification:
      "Unit and integration test suites validating token expiration, rejected cross-origin requests, schema validation rejections on malformed JSON, and prompt isolation boundaries.",
    remainingRisks:
      "Prototype MVP perimeter. Does not claim formal HIPAA certification, ABDM production accreditation, or hardware tamper-resistance. Full hospital deployment requires certified hardware enclaves and dedicated BAA agreements.",
    isOriginal: false,
  },

  // -------------------------------------------------------------
  // NEW VERIFIED CARD B: RETROFIT: FAIL-SAFE ENGINEERING
  // -------------------------------------------------------------
  {
    id: "retrofit-failsafe",
    category: "hardware",
    categoryGroup: "hardware",
    tag: "hardware safety",
    status: "TESTED",
    statusType: "tested",
    title: "Retrofit: Fail-Safe Engineering",
    text: "Physical and firmware safety safeguards engineered for the Retrofit edge monitoring system to protect small manufacturing machinery from hardware faults.",
    bullets: [
      "Normally-safe physical relay wiring: Sudden power drop or CPU brownout defaults machinery to a safe halt.",
      "ESP32 hardware watchdog timers (WDT) executing automatic reboot on task starvation within 2.5 seconds.",
      "Sensor boundary clamping filtering short-circuits and electrical noise before anomaly scoring.",
      "Galvanic isolation between high-voltage actuator lines and digital 3.3V I2C/SPI sensor buses.",
    ],
    chips: ["fail_safe", "hardware_wdt", "sensor_clamping", "bus_isolation", "tinyml"],
    threatModel:
      "Industrial edge IoT devices operate in hostile electrical environments. Sensor disconnection, firmware lockups, power brownouts, or corrupted ML predictions could cause runaway machinery, thermal overload, or unnoticed gas leaks.",
    implementedControls: [
      "Fail-Safe Circuitry: Actuator control relays are wired in fail-safe default orientation (normally-open for heaters/motors), ensuring an unpowered or hung microcontroller drops equipment into an inactive state.",
      "Hardware Watchdog Timer (WDT): Configured in ESP32 FreeRTOS firmware with a 2500ms timeout window; automatically re-initializes device state if sensor read loops block.",
      "Sensor Signal Sanity Clamping: Firmware validates raw ADC voltage and I2C registers against physical operating limits, detecting open-circuit probe disconnects and clamping noise spikes.",
      "Electrical Bus Isolation: Optocouplers and isolated power planes decouple 230V industrial relay switching noise from sensitive digital gas and pressure sensor lines.",
      "Local Risk Quantization: Four-band risk scores calculated locally on edge hardware, ensuring safety shutoff triggers operate even during Wi-Fi / cloud network dropouts.",
    ],
    verification:
      "Bench-tested with simulated electrical power drops, intentional FreeRTOS task hangs to verify WDT recovery, and simulated open-circuit sensor faults verifying clamp detection.",
    remainingRisks:
      "Tested on prototype development hardware and bench testbeds. Has not undergone third-party UL/CE industrial electrical certification; production deployment requires certified industrial enclosures and redundant sensor channels.",
    isOriginal: false,
  },

  // -------------------------------------------------------------
  // NEW VERIFIED CARD C: CYBERSAFE: FILE INTEGRITY
  // -------------------------------------------------------------
  {
    id: "cybersafe-fim",
    category: "hardware",
    categoryGroup: "hardware",
    tag: "file integrity",
    status: "TESTED",
    statusType: "tested",
    title: "CyberSafe: File Integrity",
    text: "Host-based cryptographic file integrity monitoring (FIM) utility detecting unauthorized file modifications, additions, and privilege escalations.",
    bullets: [
      "Cryptographic SHA-256 baseline hashing across monitored file trees with JSON audit manifests.",
      "Differential change engine categorizing modified, newly added, deleted, and permission-altered files.",
      "Path canonicalization and symlink escape prevention preventing traversal outside designated roots.",
      "Configurable exclusion filters preventing alert storms from volatile operating system logs.",
    ],
    chips: ["file_integrity", "sha256_hash", "path_canonicalization", "tamper_detection", "baseline_audit"],
    threatModel:
      "Malicious attackers and automated ransomware tamper with critical system binaries, inject web shells, modify SSH authorized_keys, or alter configuration files to establish persistence.",
    implementedControls: [
      "SHA-256 Cryptographic Hashing: Computes high-speed SHA-256 digests across file buffers to establish an immutable reference baseline manifest.",
      "Differential Analysis: Compares live filesystem states against saved baselines, flagging file replacements, permission mode changes, and unexpected deletions.",
      "Strict Path Canonicalization: Resolves all file paths via canonical realpath checking, preventing attackers from using symbolic links or directory traversal (../) to escape monitored directories.",
      "Sensitive Exclusion Rules: Supports regex-based path exclusion rules to ignore legitimate volatile system files (/var/log, /tmp) without degrading root monitoring.",
      "Structured Audit Reporting: Outputs machine-readable JSON reports detailing modification timestamps, file size deltas, and hash discrepancies.",
    ],
    verification:
      "Verified with automated test suites simulating unauthorized file edits, binary replacements, permission alterations, and symlink escape attempts.",
    remainingRisks:
      "Integrity monitoring detects modifications; it does not prevent them in real time or identify malware intent. If an attacker tampers with the baseline manifest itself, changes will go undetected (requires read-only / remote manifest storage).",
    isOriginal: false,
  },

  // -------------------------------------------------------------
  // NEW VERIFIED CARD D: JARVIS / AXION: AGENT SECURITY
  // -------------------------------------------------------------
  {
    id: "jarvis-agentsec",
    category: "agent",
    categoryGroup: "agent",
    tag: "ai agent security",
    status: "IMPLEMENTED",
    statusType: "implemented",
    title: "JARVIS: Agent Runtime Security",
    text: "Runtime defense-in-depth implemented during the Windows porting of the JARVIS/AXION autonomous assistant to prevent OS exploitation and race conditions.",
    bullets: [
      "Secrets hygiene: Decoupled API keys from source code, enforcing environment-variable injection.",
      "Safe subprocess handling: Replaced raw shell string execution with parameterized PowerShell cmdlets.",
      "Path traversal prevention: Enforced canonical root directory bounding on all file management tools.",
      "Asynchronous database isolation: Resolved SQLite concurrency race conditions under high-frequency event loops.",
    ],
    chips: ["agent_sandbox", "secrets_hygiene", "path_traversal", "powershell_guard", "race_condition_fix"],
    threatModel:
      "AI agents capable of interpreting voice prompts and invoking operating system commands risk indirect prompt injection, arbitrary command injection, and host compromise if tool arguments are passed unescaped to shell interpreters.",
    implementedControls: [
      "Environment Secret Decoupling: All cloud API tokens (Gemini, Claude, Web Speech endpoints) are injected via process environment variables (.env / os.environ) with .gitignore enforcement.",
      "Parameterized PowerShell Execution: Completely eliminated unsafe shell=True formatting; operating system control tools pass structured, validated arguments through PowerShell execution policies.",
      "Filesystem Sandboxing: File reading and writing operations validate target paths against a designated workspace boundary, explicitly rejecting parent traversal sequences (../).",
      "Asynchronous Database Concurrency Fixes: Reworked SQLite database operations with thread-safe connection pooling and async locks, preventing database corruption during concurrent audio and UI events.",
      "Audio Event Dispatch Deduplication: Patched an event listener race condition in the Web Speech API that caused duplicate prompt executions.",
    ],
    verification:
      "Tested on Windows 10 environment using malicious path traversal payloads, invalid tool arguments, and concurrent stress testing of voice input streams.",
    remainingRisks:
      "Advanced multi-turn prompt injection and prompt exfiltration through complex web-retrieved content remain an active research challenge; tool access is currently constrained to explicit whitelists.",
    isOriginal: false,
  },

  // -------------------------------------------------------------
  // NEW VERIFIED CARD E: SECURE API ARCHITECTURE: FASTAPI & WEBSOCKETS
  // -------------------------------------------------------------
  {
    id: "fastapi-apisec",
    category: "appsec",
    categoryGroup: "appsec",
    tag: "api security",
    status: "IMPLEMENTED",
    statusType: "implemented",
    title: "Secure API Architecture: FastAPI",
    text: "Production API hardening implemented across backend services to prevent Broken Object Level Authorization (BOLA), mass assignment, and information disclosure.",
    bullets: [
      "Pydantic schema validation strictly rejecting undeclared request fields to prevent mass assignment.",
      "Ephemeral JWT / Bearer token authentication validated during WebSocket connection upgrade handshakes.",
      "Masked production error handling: Database exceptions and stack traces stripped from client responses.",
      "Request payload size limits and rate-limiting hooks mitigating denial-of-service attempts.",
    ],
    chips: ["api_security", "jwt_auth", "pydantic_validation", "websocket_auth", "info_disclosure_guard"],
    threatModel:
      "Web APIs and WebSocket endpoints frequently suffer from mass assignment, unauthenticated socket hijacking, verbose stack trace leaks exposing internal architecture, and denial of service via oversized JSON payloads.",
    implementedControls: [
      "Strict Schema Enforcement: Every API route defines explicit Pydantic models with extra='forbid' validation, automatically rejecting requests with unexpected or extra payload fields.",
      "WebSocket Handshake Authentication: WebSocket connections require query parameter or header-based ephemeral tokens; unauthorized connection requests are terminated before socket upgrade.",
      "Sanitized Production Error Responses: Custom FastAPI global exception handlers catch uncaught exceptions and return standardized JSON error codes without disclosing internal database structure or file paths.",
      "Payload Size & Rate Limiting: Middleware imposes strict body size thresholds (e.g. 2MB max for uploads) and IP-based request throttling on public endpoints.",
    ],
    verification:
      "Audited using automated Postman and Python pytest suites verifying that malformed payloads, oversized bodies, and unauthenticated WebSocket connections are rejected with correct HTTP 400/401/403 codes.",
    remainingRisks:
      "Rate-limiting currently uses in-memory token buckets; distributed multi-node horizontal scaling will require centralizing state in a shared Redis cluster.",
    isOriginal: false,
  },
];
