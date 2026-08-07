import type { Metadata } from "next";
import { Anton, Barlow } from "next/font/google";
import { PLATE_PHOTOS } from "@/lib/images";
import "./globals.css";

const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const siteUrl = "https://illuminatedigm.info";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Illuminate Digm — a programme in your inbox, every week",
  description:
    "One lift-focused email a week. Sets, reps, load, and why. No fluff, no supplement pitches. Built for people who train regularly.",
  openGraph: {
    title: "Illuminate Digm",
    description:
      "One lift-focused email a week. Sets, reps, load, and why. Built for people who train regularly.",
    url: siteUrl,
    siteName: "Illuminate Digm",
    type: "website",
    images: [
      {
        url: PLATE_PHOTOS.plateCloseup.src,
        width: 900,
        height: 900,
        alt: "Illuminate Digm — 5x5, 3x8: your next programme in your inbox",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Illuminate Digm",
    description: "One lift-focused email a week. Sets, reps, load, and why.",
    images: [PLATE_PHOTOS.plateCloseup.src],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${anton.variable} ${barlow.variable}`}>
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
