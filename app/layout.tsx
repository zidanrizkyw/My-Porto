import type { Metadata } from "next";
import { Press_Start_2P, VT323 } from "next/font/google";
import "./globals.css";

const pressStart2P = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-press-start",
  display: "swap",
});

const vt323 = VT323({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-vt323",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Zidan Rizky Wijaya — Frontend Developer",
  description:
    "Portfolio Zidan Rizky Wijaya. Frontend Developer membangun pengalaman digital dengan estetika gaming cyberpunk.",
  openGraph: {
    title: "Zidan Rizky Wijaya — Frontend Developer",
    description: "Building digital experiences, one line of code at a time.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${pressStart2P.variable} ${vt323.variable}`}>
      <body>{children}</body>
    </html>
  );
}
