import { invitation as inv } from "@/lib/invitation";

export default function EventSchedule() {
  if (inv.schedule.length === 0) return null;
  return (
    <section className="fade">
      <div className="eyebrow">The Day</div>
      <h2>Schedule</h2>
      <div className="orn">{"\u2726"}</div>
      <div className="tl">
        {inv.schedule.map((s) => (
          <div key={s.time + s.title}><b>{s.time} &middot; {s.title}</b>{s.note}</div>
        ))}
      </div>
      {inv.isSample && <p className="ph" style={{ fontSize: 13, marginTop: 20 }}>Sample schedule for preview</p>}
    </section>
  );
}
