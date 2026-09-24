import type { Metadata, Viewport } from "next";
import { DM_Mono, DM_Sans, Instrument_Serif } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-dm-sans", display: "swap" });
const dmMono = DM_Mono({ subsets: ["latin"], weight: "400", variable: "--font-dm-mono", display: "swap" });
const instrumentSerif = Instrument_Serif({ subsets: ["latin"], weight: "400", style: ["normal", "italic"], variable: "--font-instrument-serif", display: "swap" });

export const metadata: Metadata = {
  title: "Irshad Alam | Full-Stack Developer & GenAI Engineer",
  description: "Portfolio of Irshad Alam, a Full-Stack Developer building scalable web applications and AI-powered products with React, Next.js, Node.js, TypeScript, MySQL, LLMs and RAG.",
  keywords: ["Full Stack Developer", "React Developer", "Next.js Developer", "Node.js Developer", "TypeScript Developer", "GenAI Developer", "AI Application Developer", "Generative AI", "LLM", "RAG", "Dubai Developer", "UAE Software Developer"],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${dmMono.variable} ${instrumentSerif.variable} scroll-smooth`}>
      <body className="m-0 bg-paper font-sans text-ink antialiased">{children}</body>
    </html>
  );
}
