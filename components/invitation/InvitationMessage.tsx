import { invitation as inv } from "@/lib/invitation";
import Countdown from "./Countdown";

export default function InvitationMessage() {
  return (
    <section className="fade">
      <div className="eyebrow">With Grateful Hearts</div>
      <h2>You Are Invited</h2>
      <div className="orn">{"✦"}</div>
      <p id="msg" style={{ maxWidth: 560, margin: "auto", fontSize: 19 }}>{inv.message}</p>
      {inv.eventDate && <Countdown date={inv.eventDate} />}
    </section>
  );
}
