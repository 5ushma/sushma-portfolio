import type { Metadata, Viewport } from "next";
import { Sora, Inter, JetBrains_Mono } from "next/font/google";
import { site } from "@/data/content";
import "./globals.css";

// Display / headings
const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

// Body / UI
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

// Mono accents / kicker labels
const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${site.firstName} · ${site.title}`,
  description: site.valueProp,
  keywords: [
    "QA Automation",
    "Test Automation",
    "Playwright",
    "Appium",
    "SDET",
    "Senior QA Engineer",
  ],
  authors: [{ name: site.name }],
  openGraph: {
    title: `${site.firstName} · ${site.title}`,
    description: site.valueProp,
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0f1e",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${sora.variable} ${inter.variable} ${jetbrains.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
