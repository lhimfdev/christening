"use client";
import { useState, type FormEvent } from "react";

/**
 * PREVIEW-ONLY RSVP: validates and shows a success state but does NOT store anything.
 * To make it real, POST the values to an API route (e.g. app/api/rsvp/route.ts) in onSubmit.
 */
export default function RSVPForm() {
  const [name, setName] = useState("");
  const [guests, setGuests] = useState("1");
  const [attending, setAttending] = useState<"yes" | "no">("yes");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState<string | null>(null);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const n = name.trim();
    const g = Number(guests);
    if (n.length < 2) return setError("Please enter your full name.");
    if (!(g >= 1 && g <= 10)) return setError("Attendees must be between 1 and 10.");
    setError("");
    setSending(true);
    setTimeout(() => {
      setDone(
        attending === "yes"
          ? `Thank you, ${n}! We can't wait to celebrate with you and your party of ${g}.`
          : `Thank you, ${n}. You will be missed, and we appreciate your prayers.`
      );
    }, 900);
  };

  return (
    <section id="rsvp" className="fade band">
      <div>
        <div className="eyebrow">RSVP</div>
        <h2>Will You Join Us?</h2>
        <div className="orn">{"\u2726"}</div>
        {done === null ? (
          <form onSubmit={submit} noValidate style={{ maxWidth: 460, margin: "24px auto 0", textAlign: "left", display: "grid", gap: 16 }}>
            <label>Full Name<input value={name} onChange={(e) => setName(e.target.value)} required autoComplete="name" /></label>
            <label>Number of Attendees<input type="number" min={1} max={10} value={guests} onChange={(e) => setGuests(e.target.value)} required /></label>
            <fieldset style={{ border: 0, padding: 0, margin: 0 }}>
              <legend style={{ padding: 0 }}>Will you attend?</legend>
              <label className="rad"><input type="radio" name="att" checked={attending === "yes"} onChange={() => setAttending("yes")} /> Attending</label>
              <label className="rad"><input type="radio" name="att" checked={attending === "no"} onChange={() => setAttending("no")} /> Unable to attend</label>
            </fieldset>
            <label>Message (optional)<textarea rows={3} value={message} onChange={(e) => setMessage(e.target.value)} /></label>
            <p role="alert" style={{ color: "#8a3b2e", margin: 0, fontSize: 14 }}>{error}</p>
            <button className="btn" type="submit" disabled={sending}>{sending ? "Sending\u2026" : "Send RSVP"}</button>
            <p className="ph" style={{ fontSize: 13, margin: 0, textAlign: "center" }}>Preview only &mdash; responses are not saved.</p>
          </form>
        ) : (
          <div className="card" style={{ maxWidth: 460, margin: "24px auto 0" }}>
            <h3>Thank you!</h3>
            <p>{done}</p>
          </div>
        )}
      </div>
    </section>
  );
}
