import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Irshad Alam | Full-Stack Developer & GenAI Engineer",
  description: "Portfolio of Irshad Alam, a Full-Stack Developer building scalable web applications and AI-powered products with React, Next.js, Node.js, TypeScript, MySQL, LLMs and RAG.",
  keywords: ["Full Stack Developer", "React Developer", "Next.js Developer", "Node.js Developer", "TypeScript Developer", "GenAI Developer", "AI Application Developer", "Generative AI", "LLM", "RAG", "Dubai Developer", "UAE Software Developer"],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
