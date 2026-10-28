import type { Metadata, Viewport } from "next";
import "./globals.css";
import { invitation as inv } from "@/lib/invitation";

const title = `The Christening of ${inv.fullName.split(" ").slice(0, -1).join(" ")} “${inv.babyName}” ${inv.fullName.split(" ").slice(-1)}`;
const description = `You are warmly invited to the christening of ${inv.babyName}. Join us to celebrate this beautiful milestone.`;

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title,
  description,
  openGraph: { title, description, type: "website", images: [{ url: "/images/matty-1.jpg", width: 900, height: 1200, alt: `Portrait of ${inv.babyName}` }] },
  twitter: { card: "summary_large_image", title, description, images: ["/images/matty-1.jpg"] },
};
export const viewport: Viewport = { themeColor: "#FAF7F2", width: "device-width", initialScale: 1, viewportFit: "cover" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400&family=Jost:wght@300;400;500&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
