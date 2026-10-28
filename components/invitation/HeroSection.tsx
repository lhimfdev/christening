import { invitation as inv } from "@/lib/invitation";
import { formatDate } from "@/lib/format";

const stars = [
  { s: "✦", style: { top: "9%", left: "12%" } },
  { s: "✧", style: { top: "18%", right: "14%", animationDelay: "1s" } },
  { s: "✧", style: { top: "62%", left: "8%", animationDelay: "2s" } },
  { s: "✦", style: { top: "74%", right: "10%", animationDelay: ".6s" } },
];

export default function HeroSection() {
  const preview = inv.eventDate
    ? formatDate(inv.eventDate, "long") + (inv.church.name ? " · " + inv.church.name : "")
    : "Date & venue to be announced";
  return (
    <header className="hero">
      {stars.map((x, i) => <span key={i} className="st" style={x.style}>{x.s}</span>)}
      <div className="ring">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/matty-1.jpg" alt={`Portrait of ${inv.babyName} with hair in two little buns`} />
      </div>
      <div className="eyebrow">A Special Day to Celebrate</div>
      <div className="of">The Christening of</div>
      <h1 id="name">{inv.babyName}</h1>
      <div className="of" style={{ fontStyle: "italic", letterSpacing: ".04em", marginTop: -6 }}>{inv.fullName}</div>
      <p style={{ maxWidth: 440, margin: "14px 24px 26px" }}>{inv.intro}</p>
      <p id="preview" style={{ margin: "0 0 26px" }}>{preview}</p>
      <a className="btn" href="#details">View Invitation</a>
    </header>
  );
}
