export interface Place { name: string; address: string; mapsUrl: string }
export interface Invitation {
  babyName: string; fullName: string; eventDate: string; eventTime: string; parents: string;
  message: string; intro: string; church: Place; reception: Place;
  schedule: { time: string; title: string; note: string }[];
  godparents: { role: string; name: string }[];
  dressCode: { title: string; swatches: string[] } | null;
  /** Shows "sample" labels on placeholder content. Set to false once all details are real. */
  isSample: boolean;
}

const maps = "https://www.google.com/maps/search/?api=1&query=";

export const invitation: Invitation = {
  babyName: "Matty",
  fullName: "Alford Matthias Sevilla",
  eventDate: "2026-08-19", // YYYY-MM-DD, Philippine time. Future date = countdown, past date = count-up.
  eventTime: "10:00 AM",
  parents: "Mark & Anna Sevilla",
  intro: "Join us as we welcome our little blessing into the faith, with grateful hearts and endless love.",
  message:
    "With grateful hearts and endless love, we invite you to join us as we celebrate a beautiful milestone in our little one's life. Your presence and prayers will make this special day even more meaningful.",
  church: { name: "St. Matthew Parish Church", address: "Poblacion, Boac, Marinduque, Philippines", mapsUrl: maps + "Boac+Marinduque+Philippines+church" },
  reception: { name: "Casa Marinduque Garden Pavilion", address: "Brgy. Sample, Boac, Marinduque, Philippines", mapsUrl: maps + "Boac+Marinduque+Philippines+garden+venue" },
  schedule: [
    { time: "9:30 AM", title: "Guest Arrival", note: "Warm welcome at the church" },
    { time: "10:00 AM", title: "Holy Mass & Christening", note: "St. Matthew Parish Church" },
    { time: "11:30 AM", title: "Family Photos", note: "Church grounds" },
    { time: "12:30 PM", title: "Lunch & Celebration", note: "Casa Marinduque Garden Pavilion" },
  ],
  godparents: [{ role: "Ninong", name: "Daniel Reyes" }, { role: "Ninang", name: "Sofia Mendoza" }],
  dressCode: { title: "Attire: Soft Whites & Neutrals", swatches: ["#FAF7F2", "#E8DDCE", "#A8B5A0", "#C5A46D"] },
  isSample: true,
};
