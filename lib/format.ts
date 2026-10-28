export function formatDate(iso: string, style: "full" | "long"): string {
  const [y, m, d] = iso.split("-").map(Number);
  return new Intl.DateTimeFormat("en-PH", { dateStyle: style, timeZone: "UTC" }).format(new Date(Date.UTC(y, m - 1, d)));
}
/** Midnight of the event day in Philippine time (UTC+8). */
export const eventStart = (iso: string): number => new Date(`${iso}T00:00:00+08:00`).getTime();
export const serif24 = { font: "400 24px 'Cormorant Garamond',Georgia,serif" } as const;
