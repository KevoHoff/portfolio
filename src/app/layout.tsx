import type { Metadata } from "next";
import { Playfair_Display, IBM_Plex_Mono, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import ScrollRevealInit from "@/components/ScrollRevealInit";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-mono",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["300", "400"],
  style: ["normal", "italic"],
  variable: "--font-source-serif",
});

export const metadata: Metadata = {
  title: "Kevin — AI Engineer",
  description: "AI Engineer at The Philadelphia Inquirer. Building production systems that bring natural language to journalism.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${ibmPlexMono.variable} ${sourceSerif.variable}`}>
      <body>
        <ScrollRevealInit />
        {children}
      </body>
    </html>
  );
}
