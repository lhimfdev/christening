import type { ReactNode } from "react";
import { invitation as inv, type Place } from "@/lib/invitation";
import { formatDate, serif24 } from "@/lib/format";

interface Card { label: string; body: ReactNode; url?: string; btn?: string }

const placeCard = (label: string, p: Place): Card | null =>
  p.name || p.address
    ? { label, url: p.mapsUrl, btn: `View ${label} Location`, body: <>{p.name}{p.address && <><br /><small>{p.address}</small></>}</> }
    : null;

export default function EventDetails() {
  const cards = [
    inv.eventDate ? { label: "Date", body: formatDate(inv.eventDate, "full") } : null,
    inv.eventTime ? { label: "Time", body: inv.eventTime } : null,
    placeCard("Church", inv.church),
    placeCard("Reception", inv.reception),
  ].filter((c): c is Card => c !== null);

  return (
    <section id="details" className="fade band">
      <div>
        <div className="eyebrow">Save the Date</div>
        <h2>Event Details</h2>
        <div className="orn">{"\u2726"}</div>
        <div className="grid">
          {cards.length === 0 && <p className="ph" style={{ gridColumn: "1/-1" }}>Event details will be shared soon.</p>}
          {cards.map((c) => (
            <div className="card" key={c.label}>
              <div className="l">{c.label}</div>
              <p style={serif24}>{c.body}</p>
              {c.url && <a className="btn o" target="_blank" rel="noopener noreferrer" href={c.url}>{c.btn}</a>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
