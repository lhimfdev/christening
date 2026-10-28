"use client";
import { useEffect, useState } from "react";
import { eventStart } from "@/lib/format";

const UNITS: [string, number][] = [["Days", 864e5], ["Hours", 36e5], ["Min", 6e4], ["Sec", 1e3]];

/** Counts down to the event; once the date has passed it counts up instead. */
export default function Countdown({ date }: { date: string }) {
  const [now, setNow] = useState<number | null>(null);
  useEffect(() => {
    setNow(Date.now());
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);
  if (now === null) return null;
  const diff = eventStart(date) - now;
  let rest = Math.abs(diff);
  return (
    <div className="cd">
      {diff <= 0 && (
        <p style={{ width: "100%", margin: "0 0 4px", fontSize: 13, letterSpacing: ".2em", textTransform: "uppercase", color: "var(--gold)" }}>
          Since we celebrated
        </p>
      )}
      {UNITS.map(([label, ms]) => {
        const v = Math.floor(rest / ms);
        rest %= ms;
        return <div key={label}><b>{v}</b><span>{label}</span></div>;
      })}
    </div>
  );
}
