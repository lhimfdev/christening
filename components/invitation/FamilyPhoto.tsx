import { invitation as inv } from "@/lib/invitation";

export default function FamilyPhoto() {
  return (
    <section className="fade">
      <div className="eyebrow">Our Family</div>
      <h2>Three Hearts, One Love</h2>
      <div className="orn">{"✦"}</div>
      <div className="frame fam">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/family.jpg" alt="Parents holding their baby in a church aisle, all dressed in white" loading="lazy" />
      </div>
      <p style={{ marginTop: 18, font: "italic 26px 'Cormorant Garamond',Georgia,serif" }}>{inv.parents}</p>
      {inv.isSample && <p className="ph" style={{ fontSize: 13, margin: 0 }}>Sample names for preview</p>}
    </section>
  );
}
