import { invitation as inv } from "@/lib/invitation";

const photos = [
  { src: "/images/matty-1.jpg", alt: "Baby smiling softly in a white shirt and navy vest with a bow tie" },
  { src: "/images/matty-2.jpg", alt: "Baby wearing a teddy bear cap and a teal shirt" },
  { src: "/images/matty-3.jpg", alt: "Three-month-old baby with a full head of dark hair on a cream pillow" },
  { src: "/images/matty-4.jpg", alt: "Baby smiling happily with two little hair buns" },
];

export default function BabyPhotos() {
  return (
    <section className="fade band">
      <div>
        <div className="eyebrow">Our Little Blessing</div>
        <h2>Baby&apos;s Portrait</h2>
        <div className="orn">{"✦"}</div>
        <div className="pair" aria-label={`Photos of ${inv.babyName}`}>
          {photos.map((p) => (
            <div className="frame" key={p.src}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={p.src} alt={p.alt} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
