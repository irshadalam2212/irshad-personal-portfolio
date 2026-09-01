"use client";

import Link from "next/link";

export default function ResumePage() {
  return <main className="resume-page">
    <div className="resume-actions"><Link href="/">← Back to portfolio</Link><button onClick={() => window.print()}>Print / Save PDF</button></div>
    <article className="resume-sheet">
      <header><p>Full-Stack Developer</p><h1>Irshad Alam</h1><a href="mailto:irshadalam1414@gmail.com">irshadalam1414@gmail.com</a><p>Thane, Maharashtra, India · +91 9137464728</p></header>
      <section><h2>Profile</h2><p>Full-Stack Developer with 2+ years of experience designing, developing, and maintaining scalable web applications with React.js, Next.js, TypeScript, Node.js, Express.js, MongoDB, and MySQL.</p></section>
      <section><h2>Experience</h2><div className="resume-role"><b>Full-Stack Developer · Millicent Technology, Mumbai</b><span>Jul 2023 — Present</span><p>Developing scalable web applications, business portals, and dashboards. Built 50+ RESTful APIs, secure JWT/RBAC flows, and a reusable React component library with 20+ modular UI components.</p></div></section>
      <section><h2>Selected projects</h2><div className="resume-role"><b>QuickQuote · Freelance project</b><p>AI-powered quotation and invoice platform using React, Node.js, MySQL, Prisma, TanStack Query, React Hook Form, and Gemini API.</p></div><div className="resume-role"><b>LeadFlow · Personal project</b><p>Real Estate CRM SaaS with Next.js, React 19, NextAuth, MongoDB, Mongoose, Cloudinary, and REST APIs.</p></div></section>
      <section><h2>Core skills</h2><p>React.js · Next.js · TypeScript · Node.js · Express.js · MongoDB · MySQL · PostgreSQL · Prisma · Tailwind CSS · TanStack Query · REST APIs · JWT · RBAC · OpenAI API</p></section>
      <section><h2>Education</h2><p>B.E. Electronics & Telecommunication, Anjuman-I-Islam&apos;s School of Engineering and Technology · 2020 — 2023</p><p>Diploma in Computer Engineering, Anjuman-I-Islam Abdul Razzak Kalsekar Polytechnic · 2017 — 2020</p></section>
      <small>GitHub: github.com/irshadalam2212 · MERN Full-Stack Development Certification, SpeedUp Infotech</small>
    </article>
  </main>;
}
