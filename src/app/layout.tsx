import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";

/* Arc reads Geist for display type and Inter for everything else. */
const geist = Geist({ variable: "--font-geist", subsets: ["latin"], display: "swap" });
const inter = Inter({ variable: "--font-inter", subsets: ["latin"], display: "swap" });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://unnamed.plus"),
  title: {
    default: "Unnamed+, design and engineering studio",
    template: "%s · Unnamed+",
  },
  description:
    "Unnamed+ is a compact design and engineering studio. We build websites and web applications around business goals: generate inquiries, communicate clearly, and simplify how work gets done.",
  openGraph: {
    type: "website",
    siteName: "Unnamed+",
    title: "Unnamed+, design and engineering studio",
    description:
      "Websites and web applications built around business goals. Product design and software engineering for companies with complex products to explain.",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      data-theme="light"
      data-accent="neutral"
      className={`${geist.variable} ${inter.variable} ${geistMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
