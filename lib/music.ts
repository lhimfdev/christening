const SQ = [659.25, 783.99, 1046.5, 783.99, 880, 783.99, 659.25, 587.33, 523.25, 659.25, 783.99, 659.25, 587.33, 659.25, 523.25, 0];
const BS = [130.81, 196, 174.61, 196];

/** Tiny synthesized music-box lullaby (Web Audio, no audio files). */
export function createMusic() {
  let ac: AudioContext | null = null;
  let timer: ReturnType<typeof setInterval> | null = null;
  let step = 0;

  const note = (freq: number, dur: number, gain: number, type: OscillatorType) => {
    if (!ac) return;
    const t = ac.currentTime, o = ac.createOscillator(), v = ac.createGain();
    o.type = type; o.frequency.value = freq;
    v.gain.setValueAtTime(0, t);
    v.gain.linearRampToValueAtTime(gain, t + 0.01);
    v.gain.exponentialRampToValueAtTime(0.0008, t + dur);
    o.connect(v).connect(ac.destination);
    o.start(t); o.stop(t + dur + 0.05);
  };
  const tick = () => {
    const f = SQ[step % 16];
    if (f) note(f, 1.6, 0.07, "triangle");
    if (step % 4 === 0) note(BS[(step / 4) % 4], 2.4, 0.05, "sine");
    step++;
  };

  return {
    start(): boolean {
      try {
        const Ctor = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        ac = ac ?? new Ctor();
        if (ac.state === "suspended") void ac.resume();
        if (!timer) timer = setInterval(tick, 470);
        return true;
      } catch {
        return false;
      }
    },
    stop() {
      if (timer) clearInterval(timer);
      timer = null;
    },
  };
}
