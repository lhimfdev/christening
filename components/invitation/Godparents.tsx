import { invitation as inv } from "@/lib/invitation";
import { serif24 } from "@/lib/format";

export default function Godparents() {
  const { godparents, dressCode } = inv;
  if (godparents.length === 0 && !dressCode) return null;
  return (
    <section className="fade">
      {godparents.length > 0 && (
        <>
          <div className="eyebrow">Our Beloved</div>
          <h2>Godparents</h2>
          <div className="orn">{"\u2726"}</div>
          <div className="grid" style={{ maxWidth: 600, margin: "24px auto 0" }}>
            {godparents.map((g) => (
              <div className="card" key={g.role + g.name}>
                <div className="l">{g.role}</div>
                <p style={serif24}>{g.name}</p>
              </div>
            ))}
          </div>
        </>
      )}
      {dressCode && (
        <>
          <h3 style={{ marginTop: 44, fontSize: 30 }}>{dressCode.title}</h3>
          <div className="sw">{dressCode.swatches.map((c) => <i key={c} style={{ background: c }} />)}</div>
        </>
      )}
      {inv.isSample && <p className="ph" style={{ fontSize: 13 }}>Sample details for preview</p>}
    </section>
  );
}
