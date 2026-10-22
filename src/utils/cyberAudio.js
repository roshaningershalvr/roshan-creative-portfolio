// Synthetic Web Audio API generator for retro cyber/hacker telemetry SFX
// 100% in-browser synthesis. No external audio files required.

class CyberAudioController {
  constructor() {
    this.ctx = null;
    this.enabled = false;
    try {
      this.enabled = localStorage.getItem("cyber_sfx") === "1";
    } catch {
      this.enabled = false;
    }
  }

  init() {
    if (!this.ctx && typeof window !== "undefined") {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === "suspended") {
      this.ctx.resume();
    }
  }

  toggle() {
    this.enabled = !this.enabled;
    try {
      localStorage.setItem("cyber_sfx", this.enabled ? "1" : "0");
    } catch {}
    if (this.enabled) {
      this.init();
      this.playLock();
    }
    return this.enabled;
  }

  isEnabled() {
    return this.enabled;
  }

  playLock() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;

    try {
      const t = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(980, t);
      osc.frequency.exponentialRampToValueAtTime(1440, t + 0.05);

      gain.gain.setValueAtTime(0.04, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.06);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(t);
      osc.stop(t + 0.06);
    } catch {}
  }

  playTyping() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;

    try {
      const t = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = "triangle";
      osc.frequency.setValueAtTime(600 + Math.random() * 400, t);

      gain.gain.setValueAtTime(0.02, t);
      gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.03);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(t);
      osc.stop(t + 0.03);
    } catch {}
  }

  playGlitch() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;

    try {
      const t = this.ctx.currentTime;
      const dur = 0.18;

      // Noise buffer for glitch static
      const bufferSize = this.ctx.sampleRate * dur;
      const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const output = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        output[i] = Math.random() * 2 - 1;
      }

      const whiteNoise = this.ctx.createBufferSource();
      whiteNoise.buffer = buffer;

      // Filter for electronic digital crunch
      const filter = this.ctx.createBiquadFilter();
      filter.type = "bandpass";
      filter.frequency.setValueAtTime(1600, t);
      filter.Q.setValueAtTime(3.0, t);

      const gain = this.ctx.createGain();
      gain.gain.setValueAtTime(0.06, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + dur);

      whiteNoise.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);

      whiteNoise.start(t);
      whiteNoise.stop(t + dur);

      // Low frequency rumble drop
      const sub = this.ctx.createOscillator();
      const subGain = this.ctx.createGain();
      sub.type = "sawtooth";
      sub.frequency.setValueAtTime(140, t);
      sub.frequency.exponentialRampToValueAtTime(40, t + dur);
      subGain.gain.setValueAtTime(0.05, t);
      subGain.gain.exponentialRampToValueAtTime(0.001, t + dur);

      sub.connect(subGain);
      subGain.connect(this.ctx.destination);
      sub.start(t);
      sub.stop(t + dur);
    } catch {}
  }

  playAlert() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;

    try {
      const t = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = "sawtooth";
      osc.frequency.setValueAtTime(440, t);
      osc.frequency.setValueAtTime(880, t + 0.08);
      osc.frequency.setValueAtTime(440, t + 0.16);

      gain.gain.setValueAtTime(0.05, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.25);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(t);
      osc.stop(t + 0.25);
    } catch {}
  }
}

export const cyberAudio = new CyberAudioController();
