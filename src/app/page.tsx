"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const marqueeText = [
    "React", "Node.js", "Next.js", "TypeScript", "LangGraph", "LLMs", 
    "Generative AI", "MongoDB", "SQL", "Tailwind CSS", "Figma", "Git & GitHub"
  ];

  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-11 py-5 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] flex justify-between items-center ${scrolled ? 'top-4 md:left-[22%] md:right-[22%] bg-background/80 backdrop-blur-xl shadow-2xl rounded-full py-3 md:px-9 border border-border/50' : ''}`}>
        <Link href="#hero" className="font-syne font-extrabold text-[15px] tracking-tight hover:opacity-70 transition-opacity">
          yash.dev
        </Link>
        <div className="hidden md:flex items-center gap-9">
          <ul className="flex gap-7">
            <li><Link href="#work" className="text-[12px] uppercase tracking-[0.1em] text-muted-foreground hover:text-foreground relative after:absolute after:bottom-[-2px] after:left-0 after:h-[1px] after:w-0 after:bg-foreground hover:after:w-full after:transition-all after:duration-300">Work</Link></li>
            <li><Link href="#about" className="text-[12px] uppercase tracking-[0.1em] text-muted-foreground hover:text-foreground relative after:absolute after:bottom-[-2px] after:left-0 after:h-[1px] after:w-0 after:bg-foreground hover:after:w-full after:transition-all after:duration-300">About</Link></li>
            <li><Link href="#contact" className="text-[12px] uppercase tracking-[0.1em] text-muted-foreground hover:text-foreground relative after:absolute after:bottom-[-2px] after:left-0 after:h-[1px] after:w-0 after:bg-foreground hover:after:w-full after:transition-all after:duration-300">Contact</Link></li>
          </ul>
        </div>
      </nav>

      <main className="flex-1">
        
        {/* Hero Section */}
        <section id="hero" className="min-h-[100svh] flex flex-col justify-end px-6 md:px-11 pb-[max(56px,calc(56px+env(safe-area-inset-bottom)))] relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <p className="text-[11px] tracking-[0.14em] uppercase text-muted-foreground mb-5 overflow-hidden py-1">
              <motion.span 
                initial={{ y: "110%" }} 
                animate={{ y: 0 }} 
                transition={{ duration: 0.75, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.5 }}
                className="inline-block"
              >
                Full-Stack & GenAI Developer
              </motion.span>
            </p>

            <h1 className="hero-title flex flex-col">
              <span className="overflow-hidden block py-1">
                <motion.span initial={{ y: "110%" }} animate={{ y: 0 }} transition={{ duration: 1.05, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.05 }} className="block">Yash</motion.span>
              </span>
              <span className="overflow-hidden block py-1">
                <motion.span initial={{ y: "110%" }} animate={{ y: 0 }} transition={{ duration: 1.05, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.15 }} className="block">Agarwal</motion.span>
              </span>
            </h1>

            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
              <motion.p 
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, ease: "easeOut", delay: 0.65 }}
                className="max-w-[360px] text-[15px] leading-[1.65] text-muted-foreground font-light"
              >
                Full-stack developer building scalable applications with integrated GenAI systems. Focused on React, Node.js, LLMs, agent workflows, and context-aware products.
              </motion.p>
              
              <div className="flex flex-col items-start md:items-end gap-2.5">
                <motion.div initial={{ opacity: 0, x: 32 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.55, delay: 0.75 }} className="inline-flex items-center gap-[7px] text-[11px] tracking-[0.09em] uppercase border border-[#00DC64]/30 text-[#00DC64] px-3.5 py-[7px] rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-current animate-blink"></span>
                  Open for opportunities
                </motion.div>
                <motion.div initial={{ opacity: 0, x: 32 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.55, delay: 0.85 }} className="inline-flex items-center gap-[7px] text-[11px] tracking-[0.09em] uppercase border border-border text-muted-foreground px-3.5 py-[7px] rounded-full">
                  Based in India
                </motion.div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2, duration: 0.6 }}
            className="absolute top-[110px] right-11 hidden md:flex flex-col items-center gap-2.5"
          >
            <div className="w-[1px] h-[64px] bg-border relative overflow-hidden">
              <div className="absolute top-[-100%] left-0 w-full h-full bg-primary animate-shline"></div>
            </div>
            <span className="text-[9px] tracking-[0.18em] uppercase text-muted-foreground" style={{ writingMode: 'vertical-lr' }}>Scroll</span>
          </motion.div>
        </section>

        {/* Marquee Section */}
        <div className="border-y border-border py-3.5 overflow-hidden whitespace-nowrap bg-background group flex">
          <div className="inline-flex animate-marquee group-hover:[animation-play-state:paused]">
            {[...marqueeText, ...marqueeText, ...marqueeText].map((text, i) => (
              <span key={i} className="font-syne text-[11px] font-semibold tracking-[0.12em] uppercase text-muted-foreground px-7 inline-flex items-center gap-14 after:content-['✦'] after:text-[7px]">
                {text}
              </span>
            ))}
          </div>
        </div>

        {/* Work Section */}
        <section id="work" className="py-[80px] md:py-[120px] px-6 md:px-11">
          <div className="flex justify-between items-center pb-5 border-b border-border mb-10 md:mb-16">
            <div>
              <p className="text-[10px] tracking-[0.14em] uppercase text-muted-foreground mb-2">Selected Projects</p>
              <h2 className="s-title flex"><span className="overflow-hidden py-1"><motion.span initial={{ y: "110%" }} whileInView={{ y: 0 }} viewport={{ once: true }} transition={{ duration: 1.05 }} className="block">Work</motion.span></span></h2>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            
            {/* Project 01: FitMate */}
            <Link href="https://fitmate-v2.vercel.app/" target="_blank" rel="noopener noreferrer" className="block">
              <motion.article 
                initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.75 }}
                className="pcard border border-border rounded-[var(--radius)] overflow-hidden transition-colors duration-400 hover:border-border-hover group"
              >
                <div className="grid md:grid-cols-2 min-h-[400px]">
                  <div className="p-7 md:p-11 flex flex-col justify-between gap-5 order-2 md:order-1">
                    <div className="flex items-start justify-between">
                      <span className="text-[10px] font-semibold tracking-[0.12em] text-muted-foreground">01</span>
                      <div className="flex flex-wrap gap-1.5 justify-end">
                        <span className="text-[9px] tracking-[0.1em] uppercase px-3 py-1 border border-border rounded-full text-muted-foreground">React & Node.js</span>
                        <span className="text-[9px] tracking-[0.1em] uppercase px-3 py-1 border border-border rounded-full text-muted-foreground">LangGraph AI</span>
                        <span className="text-[9px] tracking-[0.1em] uppercase px-3 py-1 border border-border rounded-full text-muted-foreground">GenAI Workflows</span>
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col justify-start gap-3.5 py-1">
                      <p className="text-[12px] tracking-[0.12em] uppercase text-muted-foreground mb-2">March 2026</p>
                      <h3 className="font-sans text-[clamp(22px,2.8vw,40px)] font-extrabold tracking-[-0.03em] leading-[1.08]">FitMate: Fitness Coaching Platform</h3>
                      <p className="text-sm text-muted-foreground mt-2 max-w-sm">
                        Full-stack platform with role-based dashboards, RESTful APIs, and stateful workout systems. Implements LangGraph, context-aware AI, Mem0 (LTM), and agentic checkpointing.
                      </p>
                    </div>
                  </div>
                  <div className="relative overflow-hidden h-[220px] md:h-auto order-1 md:order-2">
                    <div className="pcard-bg bg-gradient-to-br from-[#0B0114] via-[#2E0854] to-[#6B21A8]"></div>
                    <div className="blob w-[310px] h-[310px] top-[-70px] right-[-60px] bg-[#A855F7] z-0"></div>
                    <div className="blob w-[190px] h-[190px] bottom-[40px] right-[80px] bg-[#C084FC] opacity-10 z-0"></div>
                    <Image src="/Screenshot 2026-05-24 at 7.17.06 PM.png" alt="FitMate Platform" fill sizes="(max-width: 768px) 100vw, 50vw" className="pcard-img object-cover object-left-top z-10" />
                    
                    {/* Arrow Icon */}
                    <div className="absolute bottom-6 right-6 w-11 h-11 bg-background/50 backdrop-blur-xl border border-border/50 rounded-full flex items-center justify-center transition-all duration-500 group-hover:bg-primary group-hover:border-primary group-hover:rotate-45 z-30 shadow-2xl">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M2 12L12 2M12 2H4M12 2V10" stroke="currentColor" className="text-foreground transition-colors duration-500 group-hover:text-primary-foreground" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </motion.article>
            </Link>

            {/* Project 02: FitPlate */}
            <Link href="https://recipe-finder-orpin-pi.vercel.app/" target="_blank" rel="noopener noreferrer" className="block">
              <motion.article 
                initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.75, delay: 0.1 }}
                className="pcard border border-border rounded-[var(--radius)] overflow-hidden transition-colors duration-400 hover:border-border-hover group"
              >
                <div className="grid md:grid-cols-2 min-h-[400px]">
                  <div className="p-7 md:p-11 flex flex-col justify-between gap-5 order-2 md:order-1">
                    <div className="flex items-start justify-between">
                      <span className="text-[10px] font-semibold tracking-[0.12em] text-muted-foreground">02</span>
                      <div className="flex flex-wrap gap-1.5 justify-end">
                        <span className="text-[9px] tracking-[0.1em] uppercase px-3 py-1 border border-border rounded-full text-muted-foreground">Next.js & React</span>
                        <span className="text-[9px] tracking-[0.1em] uppercase px-3 py-1 border border-border rounded-full text-muted-foreground">LLMs (Groq)</span>
                        <span className="text-[9px] tracking-[0.1em] uppercase px-3 py-1 border border-border rounded-full text-muted-foreground">MongoDB & Prisma</span>
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col justify-start gap-3.5 py-1">
                      <p className="text-[12px] tracking-[0.12em] uppercase text-muted-foreground mb-2">February 2026</p>
                      <h3 className="font-sans text-[clamp(22px,2.8vw,40px)] font-extrabold tracking-[-0.03em] leading-[1.08]">FitPlate: Nutrition & Recipes</h3>
                      <p className="text-sm text-muted-foreground mt-2 max-w-sm">
                        Full-stack platform featuring CRUD, RESTful APIs, and scalable meal flows. Integrates structured LLM outputs, prompt engineering, and constraint personalization.
                      </p>
                    </div>
                  </div>
                  <div className="relative overflow-hidden h-[220px] md:h-auto order-1 md:order-2 bg-secondary">
                    <div className="pcard-bg bg-gradient-to-br from-[#022C22] via-[#064E3B] to-[#0F766E]"></div>
                    <div className="blob w-[310px] h-[310px] top-[-70px] right-[-60px] bg-[#10B981] z-0"></div>
                    <div className="blob w-[190px] h-[190px] bottom-[40px] right-[80px] bg-[#14B8A6] opacity-10 z-0"></div>
                    <Image src="/image123.png" alt="FitPlate Platform" fill sizes="(max-width: 768px) 100vw, 50vw" className="pcard-img object-cover object-left-top z-10" />
                    
                    {/* Arrow Icon */}
                    <div className="absolute bottom-6 right-6 w-11 h-11 bg-background/50 backdrop-blur-xl border border-border/50 rounded-full flex items-center justify-center transition-all duration-500 group-hover:bg-primary group-hover:border-primary group-hover:rotate-45 z-30 shadow-2xl">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M2 12L12 2M12 2H4M12 2V10" stroke="currentColor" className="text-foreground transition-colors duration-500 group-hover:text-primary-foreground" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </motion.article>
            </Link>

            {/* Project 03: Student Pass/Fail Predictor */}
            <Link href="https://studentpass-fapredictingmlmodel-cr9r6kmp3swsgnsmqn6dzk.streamlit.app/" target="_blank" rel="noopener noreferrer" className="block">
              <motion.article 
                initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.75, delay: 0.2 }}
                className="pcard border border-border rounded-[var(--radius)] overflow-hidden transition-colors duration-400 hover:border-border-hover group"
              >
                <div className="grid md:grid-cols-2 min-h-[400px]">
                  <div className="p-7 md:p-11 flex flex-col justify-between gap-5 order-2 md:order-1">
                    <div className="flex items-start justify-between">
                      <span className="text-[10px] font-semibold tracking-[0.12em] text-muted-foreground">03</span>
                      <div className="flex flex-wrap gap-1.5 justify-end">
                        <span className="text-[9px] tracking-[0.1em] uppercase px-3 py-1 border border-border rounded-full text-muted-foreground">XGBoost & LR</span>
                        <span className="text-[9px] tracking-[0.1em] uppercase px-3 py-1 border border-border rounded-full text-muted-foreground">LangGraph Agent</span>
                        <span className="text-[9px] tracking-[0.1em] uppercase px-3 py-1 border border-border rounded-full text-muted-foreground">RAG + Groq LLM</span>
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col justify-start gap-3.5 py-1">
                      <p className="text-[12px] tracking-[0.12em] uppercase text-muted-foreground mb-2">May 2026</p>
                      <h3 className="font-sans text-[clamp(22px,2.8vw,40px)] font-extrabold tracking-[-0.03em] leading-[1.08]">Student Pass/Fail Predictor</h3>
                      <p className="text-sm text-muted-foreground mt-2 max-w-sm">
                        ML pipeline (XGBoost + Logistic Regression via GridSearchCV, SMOTE, KMeans) with a Streamlit dashboard. Paired with a LangGraph AI Study Coach using ChromaDB RAG, Groq LLM, and Tavily live web search.
                      </p>
                    </div>
                  </div>
                  <div className="relative overflow-hidden h-[220px] md:h-auto order-1 md:order-2">
                    <div className="pcard-bg bg-gradient-to-br from-[#0A0F2E] via-[#1E3A8A] to-[#0E7490]"></div>
                    <div className="blob w-[310px] h-[310px] top-[-70px] right-[-60px] bg-[#3B82F6] z-0"></div>
                    <div className="blob w-[190px] h-[190px] bottom-[40px] right-[80px] bg-[#06B6D4] opacity-10 z-0"></div>
                    
                    <Image src="/student_prediction.png" alt="Student Pass/Fail Predictor" fill sizes="(max-width: 768px) 100vw, 50vw" className="pcard-img object-cover object-left-top z-10" />

                    {/* Arrow Icon */}
                    <div className="absolute bottom-6 right-6 w-11 h-11 bg-background/50 backdrop-blur-xl border border-border/50 rounded-full flex items-center justify-center transition-all duration-500 group-hover:bg-primary group-hover:border-primary group-hover:rotate-45 z-30 shadow-2xl">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M2 12L12 2M12 2H4M12 2V10" stroke="currentColor" className="text-foreground transition-colors duration-500 group-hover:text-primary-foreground" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </motion.article>
            </Link>

          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-[80px] md:py-[120px] px-6 md:px-11">
          <div className="flex justify-between items-center pb-5 border-b border-border mb-10 md:mb-16">
            <div>
              <p className="text-[10px] tracking-[0.14em] uppercase text-muted-foreground mb-2">My Story</p>
              <h2 className="s-title flex"><span className="overflow-hidden py-1"><motion.span initial={{ y: "110%" }} whileInView={{ y: 0 }} viewport={{ once: true }} transition={{ duration: 1.05 }}>About</motion.span></span></h2>
            </div>
          </div>

          <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-12 md:gap-20 mt-12 md:mt-20">
            <div className="flex flex-col gap-6">
              <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-[clamp(17px,1.7vw,22px)] leading-[1.62] font-light text-muted-foreground">
                <strong className="font-light text-foreground">Full-Stack & GenAI Developer</strong> with a passion for building scalable, context-aware systems. Pursuing my B.Tech in AI & ML at Rishihood University (2024 - 2028).
              </motion.p>
              <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-[clamp(17px,1.7vw,22px)] leading-[1.62] font-light text-muted-foreground">
                <strong className="font-light text-foreground">My approach is system-oriented and data-driven.</strong> I specialize in backend architecture, building interactive web apps, and integrating context-aware AI workflows using tools like LangGraph, LLMs, and agentic state management.
              </motion.p>
              <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="text-[clamp(17px,1.7vw,22px)] leading-[1.62] font-light text-muted-foreground">
                Beyond my coursework, I'm involved in the <strong className="font-light text-foreground">AI Club Startup (Fashion Culture Lab)</strong>, working at the intersection of computer vision, fashion, and cultural analytics to build AI-driven visual understanding systems.
              </motion.p>
              
              <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="mt-4">
                <a href="https://github.com/Yash-205" target="_blank" rel="noopener" className="inline-flex items-center gap-[7px] bg-transparent border border-border rounded-full px-[15px] py-[7px] text-[11px] tracking-[0.08em] uppercase text-muted-foreground transition-all hover:bg-foreground hover:text-background hover:border-foreground group">
                  View GitHub
                  <svg width="12" height="12" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-[3px]">
                    <path d="M2 12L12 2M12 2H4M12 2V10"/>
                  </svg>
                </a>
              </motion.div>
            </div>

            <div className="flex flex-col gap-11">
              <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h3 className="text-[10px] tracking-[0.14em] uppercase text-muted-foreground mb-4">Education</h3>
                <ul className="flex flex-col">
                  <li className="flex justify-between items-baseline py-3.5 border-b border-border gap-3">
                    <div className="flex flex-col gap-0.5">
                      <span className="font-syne text-[14px] font-bold tracking-[-0.01em]">B.Tech in AI & ML (8.464 CGPA)</span>
                      <span className="text-[12px] text-muted-foreground">Rishihood University</span>
                    </div>
                    <span className="text-[11px] text-muted-foreground whitespace-nowrap shrink-0">2024 - 2028</span>
                  </li>
                  <li className="flex justify-between items-baseline py-3.5 border-b border-border gap-3">
                    <div className="flex flex-col gap-0.5">
                      <span className="font-syne text-[14px] font-bold tracking-[-0.01em]">Intermediate - Class XII (92.25%)</span>
                      <span className="text-[12px] text-muted-foreground">City Montessori School</span>
                    </div>
                    <span className="text-[11px] text-muted-foreground whitespace-nowrap shrink-0">2022 - 2023</span>
                  </li>
                  <li className="flex justify-between items-baseline py-3.5 border-b border-border gap-3">
                    <div className="flex flex-col gap-0.5">
                      <span className="font-syne text-[14px] font-bold tracking-[-0.01em]">Matriculation - Class X (95.6%)</span>
                      <span className="text-[12px] text-muted-foreground">City Montessori School</span>
                    </div>
                    <span className="text-[11px] text-muted-foreground whitespace-nowrap shrink-0">2020 - 2021</span>
                  </li>
                  <li className="flex justify-between items-baseline py-3.5 border-b border-border gap-3">
                    <div className="flex flex-col gap-0.5">
                      <span className="font-syne text-[14px] font-bold tracking-[-0.01em]">AI Club Startup</span>
                      <span className="text-[12px] text-muted-foreground">Fashion Culture Lab</span>
                    </div>
                    <span className="text-[11px] text-muted-foreground whitespace-nowrap shrink-0">Extracurricular</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
                <h3 className="text-[10px] tracking-[0.14em] uppercase text-muted-foreground mb-4">Skills</h3>
                <div className="flex flex-wrap gap-[7px]">
                  {["React", "Next.js", "Node.js", "Express JS", "TypeScript", "Python", "scikit-learn", "Streamlit", "SQL", "MongoDB", "ChromaDB", "Prisma ORM", "LangGraph", "LLMs", "Generative AI", "Tailwind CSS", "Figma", "Git & GitHub"].map((skill) => (
                    <span key={skill} className="text-[11px] tracking-[0.06em] px-3.5 py-1.5 border border-border rounded-full text-muted-foreground">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-[80px] md:py-[120px] px-6 md:px-11">
          <p className="text-[10px] tracking-[0.14em] uppercase text-muted-foreground mb-2">Get in touch</p>

          <div className="font-syne text-[clamp(52px,9vw,130px)] font-extrabold tracking-[-0.045em] leading-[0.88] my-14 md:my-[72px]">
            <motion.span initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9 }} className="block">Say hi!</motion.span>
            <motion.span initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9, delay: 0.1 }} className="block mt-4 md:mt-0">
              <a href="https://www.linkedin.com/in/yash-agarwal-7a840234a/" target="_blank" rel="noopener noreferrer" className="relative inline-block transition-colors hover:text-primary group">
                Let's talk 
                <svg width="0.7em" height="0.7em" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block align-middle mb-[0.12em] ml-2">
                  <path d="M3 15L15 3M15 3H5M15 3V13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="absolute bottom-1.5 left-0 w-0 h-1 bg-primary transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:w-full"></span>
              </a>
            </motion.span>
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex flex-col md:flex-row justify-between items-start md:items-end pt-9 gap-6 md:gap-0">
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2 group cursor-pointer" onClick={() => navigator.clipboard.writeText('yash.agarwal2024@nst.rishihood.edu.in')}>
                <p className="text-[13px] text-muted-foreground leading-[1.7]">yash.agarwal2024@nst.rishihood.edu.in</p>
                <button className="opacity-0 group-hover:opacity-100 transition-opacity text-muted-foreground hover:text-foreground">
                  <svg width="13" height="13" viewBox="0 0 13 13" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="4.5" y="4.5" width="7" height="7" rx="1.2"/>
                    <path d="M1.5 8.5V2.5a1 1 0 0 1 1-1h6"/>
                  </svg>
                </button>
              </div>
              <div className="flex items-center gap-2 group cursor-pointer" onClick={() => navigator.clipboard.writeText('+919236756100')}>
                <p className="text-[13px] text-muted-foreground leading-[1.7]">+91 92367 56100</p>
                <button className="opacity-0 group-hover:opacity-100 transition-opacity text-muted-foreground hover:text-foreground">
                  <svg width="13" height="13" viewBox="0 0 13 13" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="4.5" y="4.5" width="7" height="7" rx="1.2"/>
                    <path d="M1.5 8.5V2.5a1 1 0 0 1 1-1h6"/>
                  </svg>
                </button>
              </div>
              <p className="text-[13px] text-muted-foreground leading-[1.7]">Based in India</p>
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              <a href="https://www.linkedin.com/in/yash-agarwal-7a840234a/" target="_blank" rel="noopener noreferrer" className="text-[11px] tracking-[0.1em] uppercase text-muted-foreground hover:text-foreground transition-colors">LinkedIn</a>
              <a href="https://github.com/Yash-205" target="_blank" rel="noopener noreferrer" className="text-[11px] tracking-[0.1em] uppercase text-muted-foreground hover:text-foreground transition-colors">GitHub</a>
              <a href="https://leetcode.com/u/YA_YAshAgarwal/" target="_blank" rel="noopener noreferrer" className="text-[11px] tracking-[0.1em] uppercase text-muted-foreground hover:text-foreground transition-colors">LeetCode</a>
              <a href="https://www.hackerrank.com/profile/ya_yash_agarwal1" target="_blank" rel="noopener noreferrer" className="text-[11px] tracking-[0.1em] uppercase text-muted-foreground hover:text-foreground transition-colors">HackerRank</a>
            </div>
          </motion.div>

          <p className="text-[11px] text-muted-foreground mt-8 text-center pt-8 border-t border-border">
            © {new Date().getFullYear()} Yash Agarwal · Full-Stack & GenAI Developer
          </p>
        </section>

      </main>
    </div>
  );
}
