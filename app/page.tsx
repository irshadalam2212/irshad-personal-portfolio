"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const projects = [
  { name: "Support AI", type: "AI CUSTOMER SUPPORT SAAS", tone: "coral", symbol: "✦", copy: "AI-powered customer support and knowledge base SaaS." },
  { name: "Quick Quote", type: "AI QUOTATION & INVOICE PLATFORM", tone: "violet", symbol: "↗", copy: "Streamlined quotation and invoice creation with AI." },
  { name: "LeadFlow", type: "REAL ESTATE CRM SAAS", tone: "lime", symbol: "⌁", copy: "A sharper way to manage every lead." },
] as const;

const toneStyles = {
  coral: {
    card: "bg-[#f47d65]",
    orb: "size-37.5 sm:size-45 rounded-full bg-[#f4eee6] opacity-95",
    ui: "w-37.5 -rotate-6 bg-[#1a1717] text-white",
  },
  violet: {
    card: "bg-[#a9a0ef]",
    orb: "size-41.25 sm:size-50 rounded-full bg-[#553cb5]",
    ui: "w-34.75 rotate-6 bg-[#f5f3ef] text-[#292348]",
  },
  lime: {
    card: "bg-[#c6dd4a]",
    orb: "size-38 sm:size-45.75 rounded-[43%_57%_58%_42%/43%_40%_60%_57%] bg-[#172c20]",
    ui: "w-37.5 rounded-[72px_72px_14px_14px] bg-[#e8f0db] text-[#172c20]",
  },
};

const skills = ["React.js", "Next.js", "TypeScript", "Node.js", "MySQL", "LLMs"];

const genaiFocus = [
  { title: "LLM INTEGRATION", copy: "Integrating LLM APIs into applications to generate useful, context-aware business outputs." },
  { title: "PROMPT ENGINEERING", copy: "Designing structured prompts and AI workflows for reliable and useful application behavior." },
  { title: "RAG", copy: "Connecting LLMs with external knowledge sources to generate context-aware responses grounded in application data." },
  { title: "EMBEDDINGS", copy: "Using embeddings and semantic retrieval to connect AI systems with application knowledge." },
  { title: "AI ASSISTANTS", copy: "Building conversational AI experiences connected to business data, knowledge bases and application workflows." },
  { title: "AI-POWERED SAAS", copy: "Integrating Generative AI into real business workflows instead of treating AI as an isolated feature." },
];

const skillsDetailed = [
  { title: "FRONTEND", items: ["React.js", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Redux Toolkit", "Zustand", "TanStack Query", "React Hook Form", "Zod", "Shadcn UI"] },
  { title: "BACKEND", items: ["Node.js", "Express.js", "REST APIs", "JWT Authentication", "RBAC", "Middleware", "MVC Architecture", "Server Actions", "Cron Jobs"] },
  { title: "DATABASE", items: ["MySQL", "MongoDB", "PostgreSQL", "Prisma ORM", "Mongoose", "SQL"] },
  { title: "AI / GENAI", items: ["LLM Integration", "OpenAI API", "Gemini API", "Prompt Engineering", "Generative AI", "RAG", "Embeddings", "AI Assistants"] },
  { title: "TOOLS & PLATFORMS", items: ["Git", "GitHub", "Postman", "VS Code", "Figma", "ESLint", "Prettier"] },
  { title: "TESTING & ENGINEERING", items: ["Jest", "React Testing Library", "Agile/Scrum", "Code Review"] },
];

const impact = [
  { value: "2 +", label: "YEARS EXPERIENCE" },
  { value: "FULL-STACK", label: "APPLICATIONS" },
  { value: "AI / GENAI", label: "PROJECTS" },
];

const experience = [
  { period: "JUL 2024 — PRESENT", role: "Full-Stack Developer", company: "Millicent Technology", location: "Mumbai", description: "Building and maintaining business applications using React, Next.js, TypeScript, Node.js, Express.js and MySQL, with a focus on REST APIs, authentication, RBAC, responsive interfaces and maintainable application architecture. Working across frontend and backend systems to translate business requirements into reliable, scalable software and integrate practical AI capabilities where they improve the product." },
];

const socialLinks = [
  { label: "LINKEDIN", href: "https://www.linkedin.com/in/your-username", external: true },
  { label: "GITHUB", href: "https://github.com/irshadalam2212", external: true },
  { label: "EMAIL", href: "mailto:irshadalam1414@gmail.com", external: false },
];

const wrap = "mx-auto w-full max-w-360 px-5.5 sm:px-8 lg:px-[4.2vw]";
const section = `${wrap} scroll-mt-24 pb-21 md:pb-30`;
const navLink = "relative text-[13px] font-semibold after:absolute after:-bottom-1.25 after:left-0 after:h-px after:w-full after:origin-right after:scale-x-0 after:bg-accent after:transition-transform after:duration-250 hover:after:origin-left hover:after:scale-x-100";
const textLink = "mt-4.25 inline-block font-mono text-[10px] tracking-[.03em] underline underline-offset-[5px]";
const serif = "font-serif font-normal";

function SectionHeading({ left, right }: { left: string; right: string }) {
  return (
    <div className="flex justify-between gap-4 border-t border-ink pt-2.75 font-mono text-[10px] tracking-[.05em] text-muted">
      <p>{left}</p>
      <p className="text-right">{right}</p>
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = window.localStorage.getItem("portfolio-theme");
    const systemTheme = window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
    const initialTheme = (savedTheme === "light" || savedTheme === "dark") ? savedTheme : systemTheme;
    setTheme(initialTheme);
    document.documentElement.dataset.theme = initialTheme;
  }, []);

  useEffect(() => {
    if (mounted) {
      document.documentElement.dataset.theme = theme;
      window.localStorage.setItem("portfolio-theme", theme);
    }
  }, [theme, mounted]);

  return (
    <main
      data-theme={theme}
      className="relative isolate min-h-screen overflow-x-clip bg-[linear-gradient(120deg,#f7f5f0_0%,#ede9e2_50%,#f3efe8_100%)] text-ink transition-colors duration-300 before:pointer-events-none before:fixed before:inset-0 before:-z-10 before:bg-[radial-gradient(circle_at_88%_10%,rgba(255,96,61,.27),transparent_26rem),radial-gradient(circle_at_8%_38%,rgba(137,122,240,.22),transparent_33rem),radial-gradient(circle_at_70%_78%,rgba(190,220,64,.19),transparent_31rem)] dark:bg-[linear-gradient(128deg,#111217_0%,#191b25_46%,#12141a_100%)] dark:before:bg-[radial-gradient(circle_at_88%_8%,rgba(255,96,61,.24),transparent_27rem),radial-gradient(circle_at_8%_38%,rgba(104,84,232,.25),transparent_34rem),radial-gradient(circle_at_70%_76%,rgba(143,186,55,.13),transparent_31rem)]"
    >
      <nav className={`${wrap} sticky top-0 z-20 flex h-19 animate-nav-enter items-center justify-between border-b border-line bg-paper/90 backdrop-blur-[14px] md:h-20`} aria-label="Main navigation">
        <a className="text-[29px] font-bold tracking-[-2px] transition duration-250 hover:scale-106 hover:-rotate-5 hover:text-accent" href="#top" aria-label="Irshad Alam home">
          IA<span className="ml-0.5 align-top text-[10px] tracking-normal">®</span>
        </a>
        <div
          id="primary-links"
          className={`${menuOpen ? "flex" : "hidden"} absolute inset-x-0 top-full z-30 flex-col gap-4.5 border-b border-line bg-paper px-5.5 py-6 sm:px-8 md:static md:mr-auto md:ml-10 md:flex md:flex-row md:gap-7 md:border-0 md:bg-transparent md:p-0 lg:ml-22.5 lg:gap-8.75`}
        >
          {["Work", "About", "Experience", "Contact"].map((label) => (
            <a key={label} className={`${navLink} self-start`} href={`#${label.toLowerCase()}`} onClick={() => setMenuOpen(false)}>{label}</a>
          ))}
        </div>
        <div className="flex items-center gap-3 md:gap-5">
          <a className="hidden items-center gap-2 text-[13px] font-semibold lg:flex" href="mailto:irshadalam1414@gmail.com">
            <i className="block size-2 rounded-full bg-[#70ac67]" /> Available for work
          </a>
          {mounted && (
            <button
              className="flex cursor-pointer items-center gap-1.75 rounded-full border border-current bg-transparent px-2.5 py-1.75 font-mono text-[9px] tracking-[.05em] transition duration-250 hover:-translate-y-0.5 hover:bg-ink hover:text-paper"
              type="button"
              onClick={() => setTheme(currentTheme => currentTheme === "dark" ? "light" : "dark")}
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
            >
              <span className="text-[13px] leading-none">{theme === "dark" ? "☀" : "☾"}</span><b className="font-normal">{theme === "dark" ? "LIGHT" : "DARK"}</b>
            </button>
          )}
          <button
            className="flex cursor-pointer flex-col gap-1.25 border-0 bg-transparent p-2 md:hidden"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            aria-controls="primary-links"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className={`block h-px w-5.75 bg-ink transition-transform duration-250 ${menuOpen ? "translate-y-0.75 rotate-45" : ""}`} />
            <span className={`block h-px w-5.75 bg-ink transition-transform duration-250 ${menuOpen ? "-translate-y-0.75 -rotate-45" : ""}`} />
          </button>
        </div>
      </nav>

      <section className={`${wrap} relative scroll-mt-24 pt-12.75 pb-20.75 md:pt-10 md:pb-29.5`} id="top">
        <div className="animate-rise-1 font-mono text-[10px] leading-relaxed tracking-[.05em]">
          FULL-STACK DEVELOPER + GENAI ENGINEER <span className="pl-1.75 text-sm text-accent">⌘</span> MUMBAI, INDIA · OPEN TO DUBAI / UAE
        </div>
        <div className="mt-5.75 flex animate-rise-2 items-end justify-between gap-4 md:mt-7.75">
          <h1 className="text-[clamp(40px,13vw,84px)] leading-[.9] font-medium tracking-[-.072em] md:text-[clamp(54px,8.1vw,126px)]">
            Full-Stack products,<br />powered by <em className={serif}>AI.</em>
          </h1>
          <div className="mb-2.25 animate-bob text-[27px] md:mr-[5%] md:text-[42px]" aria-hidden="true">↓</div>
        </div>
        <div className="mt-10.75 flex animate-rise-3 flex-col gap-8 sm:flex-row sm:items-end sm:justify-between md:mt-13.25">
          <div className="flex max-w-127.5 items-center gap-3 md:gap-4.5">
            <Image
              className="size-14.5 flex-none animate-portrait-in rounded-full object-cover shadow-[0_8px_24px_rgba(33,26,22,.22)] grayscale md:size-20.5"
              src="/irshad-alam-portrait.png"
              alt="Irshad Alam"
              width={160}
              height={160}
              priority
            />
            <p className="max-w-97.5 text-[13px] leading-[1.35] md:text-[17px] md:leading-[1.45]">
              <strong className="text-[13px] font-semibold md:text-[15px]">Irshad Alam</strong><br />
              Full-Stack Developer building scalable web applications and AI-powered products with React, Next.js, Node.js, TypeScript, MySQL, LLMs and RAG.
            </p>
          </div>
          <div className="flex items-center justify-between gap-6 sm:justify-end md:mr-[10.5%]">
            <a className="font-mono text-[9px] tracking-[.05em] md:hidden" href="/resume" target="_blank">VIEW MY RESUME ↗</a>
            <a
              className="flex size-20 flex-none flex-col items-center justify-center rounded-full border border-ink text-center font-mono text-[7px] leading-[1.4] transition duration-250 hover:-rotate-8 hover:bg-ink hover:text-paper md:size-32 md:text-[9px]"
              href="#work"
            >
              <span>EXPLORE<br />SELECTED<br />WORK</span>
              <b className="mt-0.5 font-[Arial] text-xs font-normal md:mt-1.5 md:text-lg">↘</b>
            </a>
          </div>
        </div>
      </section>

      <section className={section} id="work">
        <SectionHeading left="01 / SELECTED WORK" right="2023—2026" />
        <div className="mt-7.5 grid grid-cols-1 gap-3 sm:grid-cols-2 md:mt-10.5 md:gap-4 lg:grid-cols-3">
          {projects.map((project, index) => {
            const tone = toneStyles[project.tone];
            return (
              <article
                key={project.name}
                className={`group flex min-h-88 flex-col justify-between overflow-hidden rounded-[14px] px-4.5 py-4.25 text-[#151515] transition duration-350 ease-[cubic-bezier(.2,.8,.2,1)] hover:-translate-y-2.25 hover:shadow-[0_18px_35px_rgba(21,21,21,.13)] sm:last:col-span-2 md:min-h-111 lg:last:col-span-1 dark:shadow-[0_16px_38px_rgba(0,0,0,.2)] ${tone.card}`}
              >
                <div className="flex justify-between gap-3 font-mono text-[10px] tracking-[.05em]"><span>{project.type}</span><span>0{index + 1}</span></div>
                <div className="relative grid flex-1 place-items-center">
                  <div className={tone.orb} />
                  <div className={`absolute flex h-32.25 flex-col justify-between rounded-[9px] p-3.5 shadow-[12px_15px_0_rgba(25,24,22,.18)] group-hover:animate-tilt dark:shadow-[12px_15px_0_rgba(0,0,0,.25)] ${tone.ui}`}>
                    <span className="text-[35px]">{project.symbol}</span>
                    <small className="max-w-23.75 text-[9px] leading-[1.2]">{project.copy}</small>
                  </div>
                </div>
                <div className="flex items-end justify-between">
                  <h2 className="text-[34px] font-medium tracking-[-.06em] md:text-[42px]">{project.name}</h2>
                  <a className="text-[22px]" aria-label={`See ${project.name} project`}>↗</a>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className={section} id="about">
        <SectionHeading left="02 / ABOUT ME" right="THE SHORT VERSION" />
        <div className="grid grid-cols-1 gap-7.5 py-11.75 md:py-17.5 lg:grid-cols-[1.1fr_.65fr] lg:gap-[10%]">
          <h2 className="max-w-165 text-[clamp(40px,12vw,82px)] leading-[.93] font-medium tracking-[-.065em] lg:text-[clamp(48px,5.5vw,82px)]">
            I build full-stack applications<br />with <em className={serif}>AI at the core.</em>
          </h2>
          <div className="max-w-140 text-base leading-[1.45] md:text-[17px] lg:max-w-100 lg:pt-1.75">
            <p className="mb-4.75">I&apos;m Irshad, a Full-Stack Developer with 2+ years of experience building scalable web applications using React.js, Next.js, Node.js, Express.js, TypeScript, MongoDB and MySQL. I work across the stack—from responsive interfaces and REST APIs to authentication, RBAC, database design and business workflows.</p>
            <p className="mb-4.75">I&apos;m also focused on Generative AI application development, working with LLM APIs, prompt engineering, embeddings and Retrieval-Augmented Generation (RAG). My goal is to combine strong software engineering fundamentals with AI to build practical products that solve real business problems.</p>
            <a className={textLink} href="/resume" target="_blank">VIEW FULL RESUME <span className="ml-1.25 font-[Arial] text-[15px]">↗</span></a>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-x-1.25 gap-y-4.75 border-y border-line py-4.75 sm:grid-cols-3 lg:flex lg:justify-between lg:gap-4">
          {skills.map((skill, i) => <span key={skill} className="text-sm"><b className="mr-2.5 font-mono text-[9px] font-normal text-muted">0{i + 1}</b>{skill}</span>)}
        </div>
      </section>

      <section className={section} id="genai">
        <SectionHeading left="03 / AI & GENAI" right="INTELLIGENT APPLICATIONS" />
        <div className="mt-7.5 mb-12 md:mt-10.5 md:mb-20">
          <h2 className="mb-4 text-[clamp(38px,11vw,84px)] leading-[1.1] font-medium tracking-[-.05em] md:mb-5 lg:text-[clamp(42px,6vw,84px)]">
            Building applications that <em className={serif}>think with context.</em>
          </h2>
          <p className="max-w-150 text-[15px] leading-[1.6] text-muted md:text-base">I&apos;m expanding my full-stack engineering experience into Generative AI, focusing on building practical AI-powered applications rather than theoretical ML research.</p>
        </div>
        <div className="grid grid-cols-1 gap-4.5 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-7.5">
          {genaiFocus.map((item, i) => (
            <article key={item.title} className="rounded-[10px] border border-line p-7 transition duration-300 hover:-translate-y-1 hover:border-accent md:rounded-xl md:p-8 lg:p-10">
              <h3 className="mb-4 font-mono text-[11px] font-semibold tracking-[.05em] text-accent md:text-xs">0{i + 1} — {item.title}</h3>
              <p className="text-sm leading-[1.6] text-muted md:text-[15px]">{item.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={section} id="experience">
        <SectionHeading left="04 / EXPERIENCE" right="SELECTED ROLES" />
        <div className="grid grid-cols-1 gap-4 border-b border-line py-8.75 sm:grid-cols-3 sm:gap-0 md:py-13.5">
          {impact.map((item) => (
            <div key={item.label} className="flex flex-col gap-1.5 border-t border-line pt-4 first:border-t-0 first:pt-0 sm:border-t-0 sm:border-l sm:pt-0 sm:pl-5 sm:first:border-l-0 sm:first:pl-0">
              <strong className="text-[clamp(34px,10vw,48px)] font-medium tracking-[-.07em] sm:text-[clamp(26px,4.5vw,70px)]">{item.value}</strong>
              <span className="font-mono text-[10px] tracking-[.04em] text-muted">{item.label}</span>
            </div>
          ))}
        </div>
        <div className="mt-5">
          {experience.map((item) => (
            <article key={item.period} className="grid grid-cols-[1fr_20px] gap-2 border-b border-line py-7 transition-[padding] duration-250 hover:pl-3.25 md:grid-cols-[18%_1fr_30px] md:gap-5">
              <p className="col-span-2 my-1 font-mono text-[10px] tracking-[.04em] text-muted md:col-span-1">{item.period}</p>
              <div>
                <h3 className="mb-2.25 text-[21px] font-medium tracking-[-.045em] md:text-[25px]">{item.role} <em className={serif}>@ {item.company}</em></h3>
                <p className="max-w-132.5 text-sm leading-[1.45] text-muted">{item.description}</p>
              </div>
              <span className="text-xl">↗</span>
            </article>
          ))}
        </div>
      </section>

      <section className={section} id="skills">
        <SectionHeading left="05 / SKILLS & EXPERTISE" right="WHAT I WORK WITH" />
        <div className="mt-7.5 grid grid-cols-1 gap-6 sm:grid-cols-2 md:mt-15 md:gap-7.5 lg:grid-cols-3 lg:gap-10">
          {skillsDetailed.map((category) => (
            <article key={category.title} className="rounded-xl border border-line p-5 transition duration-300 hover:border-accent hover:bg-accent/3 md:p-6 lg:p-7.5">
              <h3 className="mb-4 font-mono text-[10px] font-semibold tracking-[.08em] text-accent uppercase md:mb-5 md:text-[11px]">{category.title}</h3>
              <div className="flex flex-wrap gap-2.5 md:gap-3">
                {category.items.map((skill) => (
                  <span key={skill} className="rounded-md bg-white/5 px-2.5 py-1.25 text-[13px] text-muted transition duration-250 hover:bg-accent/10 hover:text-accent md:px-3 md:py-1.5 md:text-sm">{skill}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="scroll-mt-20 bg-ink text-paper dark:border-t dark:border-[#393b45] dark:bg-[#0d0e12] dark:text-[#f1eee9]" id="contact">
        <div className={`${wrap} flex min-h-140 flex-col pt-5.75 md:min-h-160`}>
          <p className="font-mono text-[10px] tracking-[.05em] text-[#b5b1aa] dark:text-[#c4c1ba]">06 / HAVE A PROJECT IN MIND?</p>
          <h2 className="mt-17.5 mb-7.5 text-[clamp(46px,15vw,96px)] leading-[.87] font-medium tracking-[-.075em] md:mt-20 md:text-[clamp(65px,8.6vw,130px)]">
            Let&apos;s make something<br /><em className={serif}>great.</em>
          </h2>
          <p className="mt-4 mb-6 max-w-150 font-mono text-[15px] leading-[1.6] text-[#b5b1aa] md:text-base dark:text-[#c4c1ba]">Have a product idea, a technical challenge, or an opportunity? Let&apos;s talk.</p>
          <a className="self-start font-mono text-[clamp(14px,4.2vw,25px)] break-all underline underline-offset-[7px] sm:break-normal md:text-[clamp(16px,2vw,25px)]" href="mailto:irshadalam1414@gmail.com">
            irshadalam1414@gmail.com <span className="ml-2">↗</span>
          </a>
          <p className="mt-5 mb-7.5 font-mono text-sm leading-[1.6] text-[#b5b1aa] dark:text-[#c4c1ba]">Currently open to Full-Stack Developer and AI/GenAI opportunities, including relocation to Dubai/UAE.</p>
          <div className="flex flex-wrap gap-x-5.75 gap-y-3" aria-label="Social media links">
            {socialLinks.map((link) => (
              <a key={link.label} className="font-mono text-[10px] tracking-[.04em] transition-colors hover:text-accent" href={link.href} {...(link.external ? { target: "_blank", rel: "noreferrer" } : {})}>{link.label} ↗</a>
            ))}
          </div>
          <div className="mt-auto pt-16 md:pt-20">
            <footer className="flex items-end justify-between gap-3 border-t border-[#484743] pt-5 pb-5.75 font-mono text-[8px] tracking-[.05em] text-[#aaa7a1] md:items-center md:text-[10px]">
              <span>© 2026 IRSHAD ALAM</span>
              <div className="flex flex-col gap-2 md:flex-row md:gap-6.25">
                {socialLinks.map((link) => (
                  <a key={link.label} className="transition-colors hover:text-accent" href={link.href} {...(link.external ? { target: "_blank", rel: "noreferrer" } : {})}>{link.label}</a>
                ))}
              </div>
              <a className="max-w-12 text-right leading-[1.35] transition-colors hover:text-accent md:max-w-none" href="#top">BACK TO TOP ↑</a>
            </footer>
          </div>
        </div>
      </section>
    </main>
  );
}
