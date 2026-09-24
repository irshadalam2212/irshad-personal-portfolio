"use client";

import Link from "next/link";

const label = "font-mono text-[10px] tracking-[.06em] uppercase";
const block = "border-b border-line py-6.75";
const heading = `${label} mb-3.5`;
const body = "max-w-137.5 leading-normal";
const role = "my-5";
const roleCopy = `${body} text-sm`;

export default function ResumePage() {
  return <main data-theme="light" className="min-h-screen bg-paper p-4 text-ink sm:p-6 md:p-8 print:p-0">
    <div className="mx-auto mb-6.25 flex max-w-195 flex-wrap justify-between gap-4 font-mono text-xs print:hidden">
      <Link href="/">← Back to portfolio</Link>
      <button className="cursor-pointer border-0 bg-transparent p-0" onClick={() => window.print()}>Print / Save PDF</button>
    </div>
    <article className="mx-auto max-w-195 bg-white px-6.25 py-8.5 shadow-[0_10px_30px_rgba(0,0,0,.08)] sm:p-12 md:p-18 print:max-w-none print:shadow-none">
      <header className="border-b-2 border-ink pb-6.25">
        <p className={label}>Full-Stack Developer</p>
        <h1 className="my-1.75 text-[clamp(36px,11vw,58px)] tracking-[-.07em]">Irshad Alam</h1>
        <a className="break-all" href="mailto:irshadalam1414@gmail.com">irshadalam1414@gmail.com</a>
        <p className={label}>Thane, Maharashtra, India · +91 9137464728</p>
      </header>
      <section className={block}><h2 className={heading}>Profile</h2><p className={body}>Full-Stack Developer with 2+ years of experience designing, developing, and maintaining scalable web applications with React.js, Next.js, TypeScript, Node.js, Express.js, MongoDB, and MySQL.</p></section>
      <section className={block}>
        <h2 className={heading}>Experience</h2>
        <div className={role}>
          <b>Full-Stack Developer · Millicent Technology, Mumbai</b>
          <span className="mt-1.5 block font-mono text-[10px] text-muted sm:mt-0 sm:ml-3.75 sm:inline">Jul 2023 — Present</span>
          <p className={roleCopy}>Developing scalable web applications, business portals, and dashboards. Built 50+ RESTful APIs, secure JWT/RBAC flows, and a reusable React component library with 20+ modular UI components.</p>
        </div>
      </section>
      <section className={block}>
        <h2 className={heading}>Selected projects</h2>
        <div className={role}><b>QuickQuote · Freelance project</b><p className={roleCopy}>AI-powered quotation and invoice platform using React, Node.js, MySQL, Prisma, TanStack Query, React Hook Form, and Gemini API.</p></div>
        <div className={role}><b>LeadFlow · Personal project</b><p className={roleCopy}>Real Estate CRM SaaS with Next.js, React 19, NextAuth, MongoDB, Mongoose, Cloudinary, and REST APIs.</p></div>
      </section>
      <section className={block}><h2 className={heading}>Core skills</h2><p className={body}>React.js · Next.js · TypeScript · Node.js · Express.js · MongoDB · MySQL · PostgreSQL · Prisma · Tailwind CSS · TanStack Query · REST APIs · JWT · RBAC · OpenAI API</p></section>
      <section className={block}><h2 className={heading}>Education</h2><p className={body}>B.E. Electronics & Telecommunication, Anjuman-I-Islam&apos;s School of Engineering and Technology · 2020 — 2023</p><p className={body}>Diploma in Computer Engineering, Anjuman-I-Islam Abdul Razzak Kalsekar Polytechnic · 2017 — 2020</p></section>
      <small className={`${label} mt-6.25 block leading-normal text-muted`}>GitHub: github.com/irshadalam2212 · MERN Full-Stack Development Certification, SpeedUp Infotech</small>
    </article>
  </main>;
}
