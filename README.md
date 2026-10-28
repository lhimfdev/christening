# The Christening of Matty (Next.js)

One-page christening invitation: curtain intro, synthesized lullaby, countdown/count-up clock, photo sections, event details, schedule, godparents, dress code and a preview-only RSVP form. Next.js (App Router) + TypeScript, styled with plain CSS in `app/globals.css`.

## Run locally
```bash
npm install
npm run dev        # http://localhost:3000
npm run typecheck && npm run lint && npm run build
```
Requires Node.js 18.18+ (20+ recommended).

## Edit the invitation
- All text, dates, venues, schedule, godparents and dress code live in **`lib/invitation.ts`**.
- Set `isSample: false` there to remove the "sample" labels once details are real.
- `eventDate` (`YYYY-MM-DD`, Philippine time): a future date shows a countdown; a past date counts up "Since we celebrated".
- Replace photos in `public/images/` (`family.jpg`, `matty-1.jpg` ... `matty-4.jpg`) keeping the same file names. `matty-1.jpg` is also the hero portrait and link-preview image.
- Real Google Maps links: paste them into `church.mapsUrl` / `reception.mapsUrl`.

## Deploy (Vercel)
1. Push this folder to GitHub and import it at vercel.com.
2. Add env var `NEXT_PUBLIC_SITE_URL` (see `.env.example`) set to your final URL so link previews work.
3. Deploy. Any static host that supports Next.js also works.

## Notes / remaining tasks
- The RSVP is **preview-only** (nothing is stored). To collect real responses, add `app/api/rsvp/route.ts` with server-side validation and a database/form service, then call it from `components/invitation/RSVPForm.tsx`.
- Music is a Web Audio music box (no file). To use a real song, add an MP3 to `public/` and swap `lib/music.ts` for an `<audio>` element. It only plays after the guest taps the curtain.
- No `.ics`/Google Calendar button yet.
- Tailwind, Framer Motion and Lucide were not used, to keep the design identical to the approved preview.
