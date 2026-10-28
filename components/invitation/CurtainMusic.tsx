"use client";
import { useEffect, useRef, useState } from "react";
import { createMusic } from "@/lib/music";
import { invitation } from "@/lib/invitation";

export default function CurtainMusic() {
  const [phase, setPhase] = useState<"closed" | "open" | "gone">("closed");
  const [playing, setPlaying] = useState(false);
  const music = useRef<ReturnType<typeof createMusic> | null>(null);
  const openBtn = useRef<HTMLButtonElement>(null);
  const getMusic = () => (music.current = music.current ?? createMusic());

  useEffect(() => {
    document.body.classList.add("lock");
    openBtn.current?.focus();
    const onVis = () => {
      if (document.hidden) { music.current?.stop(); setPlaying(false); }
    };
    document.addEventListener("visibilitychange", onVis);
    return () => {
      document.removeEventListener("visibilitychange", onVis);
      music.current?.stop();
      document.body.classList.remove("lock");
    };
  }, []);

  const toggle = () => {
    const m = getMusic();
    if (playing) { m.stop(); setPlaying(false); } else setPlaying(m.start());
  };
  const open = (withMusic: boolean) => {
    setPhase("open");
    if (withMusic) setPlaying(getMusic().start());
    setTimeout(() => { document.body.classList.remove("lock"); setPhase("gone"); }, 1900);
  };

  return (
    <>
      {phase !== "gone" && (
        <div id="cur" className={phase === "open" ? "open" : ""} role="dialog" aria-label="Open the invitation">
          <div className="cp l" />
          <div className="cp r" />
          <div className="cs">
            <div className="eyebrow">You are invited</div>
            <div className="cn">{invitation.babyName}</div>
            <div className="of" style={{ margin: "0 0 4px", fontSize: 22, fontStyle: "italic" }}>{invitation.fullName}</div>
            <div className="of">Christening</div>
            <button ref={openBtn} id="co" className="btn" type="button" onClick={() => open(true)}>Open Invitation</button>
            <button id="cq" className="lnk" type="button" onClick={() => open(false)}>Open without music</button>
          </div>
        </div>
      )}
      <button id="mu" type="button" className={playing ? "on" : ""} aria-label="Play or pause music" aria-pressed={playing} hidden={phase === "closed"} onClick={toggle}>
        {playing ? "❚❚" : "♪"}
      </button>
    </>
  );
}
