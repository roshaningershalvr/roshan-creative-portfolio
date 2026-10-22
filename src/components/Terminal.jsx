import { useEffect, useRef, useState } from "react";
import { commands } from "../data/content.js";
import { cyberAudio } from "../utils/cyberAudio.js";

const HACKER_COMMANDS = [
  "help",
  "whoami",
  "nmap",
  "exploit",
  "glitch",
  "cve",
  "arsenal",
  "recon",
  "security",
  "data",
  "projects",
  "clear",
];

function helpLines() {
  const baseRows = [
    { t: "ETHICAL HACKER TERMINAL COMMANDS:", c: "c" },
    { t: "  nmap       run simulated stealth port audit", c: "k" },
    { t: "  exploit    test offensive payload against active defenses", c: "k" },
    { t: "  glitch     trigger system glitch & chromatic overload", c: "k" },
    { t: "  cve        inspect patched vulnerabilities & CVE logs", c: "k" },
    { t: "  arsenal    view offensive & defensive toolbelt", c: "k" },
    { t: "  recon      target intelligence & threat model summary", c: "k" },
    { t: "  whoami     identity, degrees and credentials", c: "m" },
    { t: "  security   deep-dive into code review and hardening", c: "m" },
    { t: "  data       sensor fusion & machine learning pipelines", c: "m" },
    { t: "  projects   selected engineering projects", c: "m" },
    { t: "  clear      wipe the screen", c: "m" },
  ];
  return baseRows;
}

function outputFor(cmd, onTriggerGlitch) {
  if (cmd === "help") return helpLines();

  if (cmd === "nmap") {
    return [
      { t: "Starting Nmap 7.94 ( https://nmap.org ) at " + new Date().toISOString().slice(0, 10), c: "m" },
      { t: "Nmap scan report for roshan.local (127.0.0.1)", c: "c" },
      { t: "Host is up (0.00028s latency).", c: "m" },
      { t: "Not shown: 996 filtered/closed ports", c: "m" },
      { t: "PORT     STATE SERVICE     VERSION", c: "c" },
      { t: "22/tcp   OPEN  ssh         OpenSSH 9.6p1 (Ed25519 enforced)", c: "k" },
      { t: "80/tcp   OPEN  http        nginx/1.26 (HSTS + strict CSP)", c: "k" },
      { t: "443/tcp  OPEN  https       TLSv1.3 AES_256_GCM verified", c: "k" },
      { t: "8080/tcp OPEN  http-proxy  FastAPI (AXION Sandboxed Agent)", c: "k" },
      { t: "MAC Address: 00:1A:2B:3C:4D:5E (Virtual Network Tap)", c: "m" },
      { t: ">>> SCAN RESULT: 0 unpatched zero-days detected. Hardened. <<<", c: "c" },
    ];
  }

  if (cmd === "exploit") {
    return [
      { t: "[*] Arming offensive exploit test payload...", c: "w" },
      { t: "[!] Injecting NOP sled & shellcode to buffer 0x7FFFFFFFDE40...", c: "w" },
      { t: "[*] Intercepting return address pointer...", c: "w" },
      { t: "[x] EXPLOIT MITIGATED: __stack_chk_fail() triggered!", c: "c" },
      { t: "[✓] Active Defenses: Full ASLR, DEP/NX enabled, Stack Canaries verified.", c: "c" },
      { t: "[+] Intrusion attempt trapped in honeypot. Attacker IP logged.", c: "k" },
    ];
  }

  if (cmd === "glitch") {
    if (onTriggerGlitch) onTriggerGlitch();
    cyberAudio.playGlitch();
    return [
      { t: "[⚡] SYSTEM OVERLOAD SIGNAL INJECTED!", c: "w" },
      { t: "[!] Displacing chromatic color planes & tearing scanlines...", c: "w" },
      { t: "[✓] Buffer sanity checks restored. Defensive baseline operational.", c: "c" },
    ];
  }

  if (cmd === "cve") {
    return [
      { t: "DOCUMENTED CVE & VULNERABILITY REVIEWS:", c: "c" },
      { t: "  [CVE-2024-JARVIS-01] Path Traversal in voice tool runner -> SANITIZED", c: "k" },
      { t: "  [CVE-2024-AGENT-02]  Prompt Injection in agentic subroutines -> GUARDRAILS ARMED", c: "k" },
      { t: "  [CVE-2024-IOT-03]    MQTT unauthenticated spoofing on ESP32 -> SIGNED ED25519", c: "k" },
      { t: "  [CVE-2024-AUTH-04]   Session Token fixation on CAREINTAKE -> EPHEMERAL KEYS", c: "k" },
    ];
  }

  if (cmd === "arsenal" || cmd === "tools") {
    return [
      { t: "ETHICAL HACKER ARSENAL & TOOLBELT:", c: "c" },
      { t: "  Offensive: Nmap, Burp Suite Pro, Ghidra, GDB-pwndbg, Wireshark, SQLMap", c: "k" },
      { t: "  Defensive: Semgrep, Bandit, Trivy, Fail2ban, Hardware Watchdogs", c: "k" },
      { t: "  AI Security: Prompt Fuzzing, Adversarial ML Guardrails, Sandboxing", c: "k" },
    ];
  }

  if (cmd === "recon") {
    return [
      { t: "RECON REPORT: Roshan Inggershal VR", c: "c" },
      { t: "  Target Role: Ethical Hacker · Data Scientist · AI/ML Engineer", c: "k" },
      { t: "  Education: IIT Madras BS Programme + Computer Science", c: "k" },
      { t: "  Philosophy: 'I break systems to harden them.'", c: "c" },
    ];
  }

  if (cmd.startsWith("sudo")) {
    return [{ t: "roshan is not in the sudoers file. this incident will be reported.", c: "w" }];
  }

  const found = commands.find((x) => x.name === cmd);
  if (found) return found.out.map(([t, c]) => ({ t, c }));

  return [{ t: `command not found: ${cmd}. type 'help' for ethical hacking commands.`, c: "w" }];
}

export default function Terminal({ onTriggerGlitch }) {
  const [lines, setLines] = useState(() => [
    { t: "ETHICAL HACKER OS v4.2 [INITIALIZED]", c: "c" },
    { t: "last login: " + new Date().toDateString() + " from 127.0.0.1", c: "m" },
    { t: "$ nmap ./my-systems", c: "m" },
    ...outputFor("nmap", onTriggerGlitch).slice(0, 7),
  ]);
  const [value, setValue] = useState("");
  const outRef = useRef(null);

  useEffect(() => {
    const el = outRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [lines]);

  const run = (raw) => {
    cyberAudio.playTyping();
    const cmd = raw.trim().toLowerCase();
    if (cmd === "clear") { setLines([]); return; }
    if (cmd === "glitch" && onTriggerGlitch) {
      onTriggerGlitch();
    }
    const add = [{ t: "$ " + raw, c: "m" }];
    if (cmd) add.push(...outputFor(cmd, onTriggerGlitch));
    setLines((l) => [...l, ...add]);
  };

  return (
    <div className="shell" data-target-box>
      <div className="bar">
        <i /><i /><i />
        <span>roshan@ethical-hacker: ~ (type 'help' or 'nmap')</span>
      </div>
      <div id="out" ref={outRef} role="log" aria-live="polite">
        {lines.map((l, i) => (
          <div key={i} className={l.c}>{l.t}</div>
        ))}
      </div>
      <form
        className="prompt"
        autoComplete="off"
        onSubmit={(e) => { e.preventDefault(); run(value); setValue(""); }}
      >
        <label htmlFor="cmd">roshan@hacker:~$</label>
        <input
          id="cmd"
          type="text"
          value={value}
          spellCheck={false}
          autoCapitalize="off"
          autoComplete="off"
          aria-label="Terminal command"
          onChange={(e) => setValue(e.target.value)}
        />
      </form>
      <div className="hint">
        {HACKER_COMMANDS.map((n) => (
          <button key={n} type="button" onClick={() => run(n)}>{n}</button>
        ))}
      </div>
    </div>
  );
}
