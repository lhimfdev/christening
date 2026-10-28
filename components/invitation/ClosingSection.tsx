import { invitation as inv } from "@/lib/invitation";

export default function ClosingSection() {
  return (
    <footer className="fade">
      <div className="orn">{"\u2726"}</div>
      <p style={{ maxWidth: 480, margin: "0 auto 14px" }}>
        Thank you for being part of this beautiful milestone. Your love, prayers, and presence mean the world to our family.
      </p>
      <h2 id="name2">{inv.babyName}</h2>
      <p style={{ margin: "4px 0 14px", font: "italic 24px 'Cormorant Garamond',Georgia,serif" }}>{inv.fullName}</p>
      <p className="eyebrow">We Hope to See You There!</p>
    </footer>
  );
}
