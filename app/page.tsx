"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const projects = [
  { name: "Support AI", type: "AI CUSTOMER SUPPORT SAAS", tone: "coral", symbol: "✦", copy: "AI-powered customer support and knowledge base SaaS." },
  { name: "Quick Quote", type: "AI QUOTATION & INVOICE PLATFORM", tone: "violet", symbol: "↗", copy: "Streamlined quotation and invoice creation with AI." },
  { name: "LeadFlow", type: "REAL ESTATE CRM SAAS", tone: "lime", symbol: "⌁", copy: "A sharper way to manage every lead." },
];

const skills = ["React.js", "Next.js", "TypeScript", "Node.js", "MySQL", "LLMs"];

const skillsDetailed = {
  frontend: ["React.js", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Redux Toolkit", "Zustand", "TanStack Query", "React Hook Form", "Zod", "Shadcn UI"],
  backend: ["Node.js", "Express.js", "REST APIs", "JWT Authentication", "RBAC", "Middleware", "MVC Architecture", "Server Actions", "Cron Jobs"],
  database: ["MySQL", "MongoDB", "PostgreSQL", "Prisma ORM", "Mongoose", "SQL"],
  aiGenai: ["LLM Integration", "OpenAI API", "Gemini API", "Prompt Engineering", "Generative AI", "RAG", "Embeddings", "AI Assistants"],
  tools: ["Git", "GitHub", "Postman", "VS Code", "Figma", "ESLint", "Prettier"],
  testing: ["Jest", "React Testing Library", "Agile/Scrum", "Code Review"],
};

const experience = [
  { period: "JUL 2024 — PRESENT", role: "Full-Stack Developer", company: "Millicent Technology", location: "Mumbai", description: "Building and maintaining business applications using React, Next.js, TypeScript, Node.js, Express.js and MySQL, with a focus on REST APIs, authentication, RBAC, responsive interfaces and maintainable application architecture. Working across frontend and backend systems to translate business requirements into reliable, scalable software and integrate practical AI capabilities where they improve the product." },
];

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
    <main data-theme={theme}>
      <nav className="nav wrap" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="Irshad Alam home">IA<span>®</span></a>
        <div className={`nav-links ${menuOpen ? "visible" : ""}`}>
          <a href="#work" onClick={() => setMenuOpen(false)}>Work</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </div>
        <div className="nav-right">
          <a className="availability" href="mailto:irshadalam1414@gmail.com"><i /> Available for work</a>
          {mounted && (
            <button className="theme-toggle" type="button" onClick={() => setTheme(currentTheme => currentTheme === "dark" ? "light" : "dark")} aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}><span>{theme === "dark" ? "☀" : "☾"}</span><b>{theme === "dark" ? "LIGHT" : "DARK"}</b></button>
          )}
        </div>
        <button className="menu" aria-label="Toggle menu" onClick={() => setMenuOpen(!menuOpen)}><span /><span /></button>
      </nav>

      <section className="hero wrap" id="top">
        <div className="eyebrow">FULL-STACK DEVELOPER + GENAI ENGINEER <span>⌘</span> MUMBAI, INDIA · OPEN TO DUBAI / UAE</div>
        <div className="hero-title"><h1>Full-Stack products,<br />powered by <em>AI.</em></h1><div className="arrow">↓</div></div>
        <div className="hero-bottom">
          <div className="intro-card">
            <Image className="portrait" src="/irshad-alam-portrait.png" alt="Irshad Alam" width={160} height={160} priority />
            <p><strong>Irshad Alam</strong><br />Full-Stack Developer building scalable web applications and AI-powered products with React, Next.js, Node.js, TypeScript, MySQL, LLMs and RAG.</p>
          </div>
          <a className="circle-link" href="#work"><span>EXPLORE<br />SELECTED<br />WORK</span><b>↘</b></a>
          <a className="hero-resume" href="/resume" target="_blank">VIEW MY RESUME ↗</a>
        </div>
      </section>

      <section className="work-section wrap" id="work">
        <div className="section-heading"><p>01 / SELECTED WORK</p><p>2023—2026</p></div>
        <div className="project-grid">
          {projects.map((project, index) => <article className={`project-card ${project.tone}`} key={project.name}>
            <div className="card-meta"><span>{project.type}</span><span>0{index + 1}</span></div>
            <div className="project-art"><div className="art-orb" /><div className="art-ui"><span>{project.symbol}</span><small>{project.copy}</small></div></div>
            <div className="card-footer"><h2>{project.name}</h2><a aria-label={`See ${project.name} project`}>↗</a></div>
          </article>)}
        </div>
        {/* <a className="text-link" href="#">ALL PROJECTS <span>↗</span></a> */}
      </section>

      <section className="about wrap" id="about">
        <div className="section-heading"><p>02 / ABOUT ME</p><p>THE SHORT VERSION</p></div>
        <div className="about-grid">
          <h2>I build full-stack applications<br />with <em>AI at the core.</em></h2>
          <div className="about-copy"><p>I'm Irshad, a Full-Stack Developer with 2+ years of experience building scalable web applications using React.js, Next.js, Node.js, Express.js, TypeScript, MongoDB and MySQL. I work across the stack—from responsive interfaces and REST APIs to authentication, RBAC, database design and business workflows.</p><p>I'm also focused on Generative AI application development, working with LLM APIs, prompt engineering, embeddings and Retrieval-Augmented Generation (RAG). My goal is to combine strong software engineering fundamentals with AI to build practical products that solve real business problems.</p>
            <a className="text-link" href="/resume" target="_blank">VIEW FULL RESUME <span>↗</span></a>
          </div>
        </div>
        <div className="skill-row">{skills.map((skill, i) => <span key={skill}><b>0{i + 1}</b>{skill}</span>)}</div>
      </section>

      <section className="genai-section wrap" id="genai">
        <div className="section-heading"><p>03 / AI & GENAI</p><p>INTELLIGENT APPLICATIONS</p></div>
        <div className="genai-intro">
          <h2>Building applications that <em>think with context.</em></h2>
          <p>I'm expanding my full-stack engineering experience into Generative AI, focusing on building practical AI-powered applications rather than theoretical ML research.</p>
        </div>
        <div className="genai-grid">
          <article className="genai-card">
            <h3>01 — LLM INTEGRATION</h3>
            <p>Integrating LLM APIs into applications to generate useful, context-aware business outputs.</p>
          </article>
          <article className="genai-card">
            <h3>02 — PROMPT ENGINEERING</h3>
            <p>Designing structured prompts and AI workflows for reliable and useful application behavior.</p>
          </article>
          <article className="genai-card">
            <h3>03 — RAG</h3>
            <p>Connecting LLMs with external knowledge sources to generate context-aware responses grounded in application data.</p>
          </article>
          <article className="genai-card">
            <h3>04 — EMBEDDINGS</h3>
            <p>Using embeddings and semantic retrieval to connect AI systems with application knowledge.</p>
          </article>
          <article className="genai-card">
            <h3>05 — AI ASSISTANTS</h3>
            <p>Building conversational AI experiences connected to business data, knowledge bases and application workflows.</p>
          </article>
          <article className="genai-card">
            <h3>06 — AI-POWERED SAAS</h3>
            <p>Integrating Generative AI into real business workflows instead of treating AI as an isolated feature.</p>
          </article>
        </div>
      </section>

      <section className="experience-section wrap" id="experience">
        <div className="section-heading"><p>04 / EXPERIENCE</p><p>SELECTED ROLES</p></div>
        <div className="impact-row"><div><strong>2 +</strong><span>YEARS EXPERIENCE</span></div><div><strong>FULL-STACK</strong><span>APPLICATIONS</span></div><div><strong>AI / GENAI</strong><span>PROJECTS</span></div></div>
        <div className="experience-list">
          {experience.map((item) => <article className="experience-item" key={item.period}>
            <p>{item.period}</p><div><h3>{item.role} <em>@ {item.company}</em></h3><p>{item.description}</p></div><span>↗</span>
          </article>)}
        </div>
      </section>

      <section className="skills-section wrap" id="skills">
        <div className="section-heading"><p>05 / SKILLS & EXPERTISE</p><p>WHAT I WORK WITH</p></div>
        <div className="skills-grid">
          <article className="skill-category">
            <h3>FRONTEND</h3>
            <div className="skill-list">{skillsDetailed.frontend.map((skill) => <span key={skill}>{skill}</span>)}</div>
          </article>
          <article className="skill-category">
            <h3>BACKEND</h3>
            <div className="skill-list">{skillsDetailed.backend.map((skill) => <span key={skill}>{skill}</span>)}</div>
          </article>
          <article className="skill-category">
            <h3>DATABASE</h3>
            <div className="skill-list">{skillsDetailed.database.map((skill) => <span key={skill}>{skill}</span>)}</div>
          </article>
          <article className="skill-category">
            <h3>AI / GENAI</h3>
            <div className="skill-list">{skillsDetailed.aiGenai.map((skill) => <span key={skill}>{skill}</span>)}</div>
          </article>
          <article className="skill-category">
            <h3>TOOLS & PLATFORMS</h3>
            <div className="skill-list">{skillsDetailed.tools.map((skill) => <span key={skill}>{skill}</span>)}</div>
          </article>
          <article className="skill-category">
            <h3>TESTING & ENGINEERING</h3>
            <div className="skill-list">{skillsDetailed.testing.map((skill) => <span key={skill}>{skill}</span>)}</div>
          </article>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="contact-inner wrap">
          <p>06 / HAVE A PROJECT IN MIND?</p>
          <h2>Let&apos;s make something<br /><em>great.</em></h2>
          <p className="contact-subtitle">Have a product idea, a technical challenge, or an opportunity? Let's talk.</p>
          <a className="email" href="mailto:irshadalam1414@gmail.com">irshadalam1414@gmail.com <span>↗</span></a>
          <p className="contact-availability">Currently open to Full-Stack Developer and AI/GenAI opportunities, including relocation to Dubai/UAE.</p>
          <div className="social-links" aria-label="Social media links"><a href="https://www.linkedin.com/in/your-username" target="_blank" rel="noreferrer">LINKEDIN ↗</a><a href="https://github.com/irshadalam2212" target="_blank" rel="noreferrer">GITHUB ↗</a><a href="mailto:irshadalam1414@gmail.com">EMAIL ↗</a></div>
          <footer><span>© 2026 IRSHAD ALAM</span><div><a href="https://www.linkedin.com/in/your-username" target="_blank" rel="noreferrer">LINKEDIN</a><a href="https://github.com/irshadalam2212" target="_blank" rel="noreferrer">GITHUB</a><a href="mailto:irshadalam1414@gmail.com">EMAIL</a></div><a href="#top">BACK TO TOP ↑</a></footer>
        </div>
      </section>
    </main>
  );
}
