"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, MapPin, Star, Zap, Trophy } from "lucide-react";
import { profile } from "@/data/portfolio";
import { GithubIcon, LinkedinIcon } from "./icons";

const roles = ["Full-Stack Developer", "Next.js Builder", "React Enthusiast", "Problem Solver"];

function useTypewriter(words: string[]) {
  const [text, setText] = useState("");
  const [wi, setWi] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[wi % words.length];
    const speed = deleting ? 40 : 85;
    const t = setTimeout(() => {
      if (!deleting) {
        const next = word.slice(0, text.length + 1);
        setText(next);
        if (next === word) setTimeout(() => setDeleting(true), 1100);
      } else {
        const next = word.slice(0, text.length - 1);
        setText(next);
        if (next === "") {
          setDeleting(false);
          setWi((v) => v + 1);
        }
      }
    }, speed);
    return () => clearTimeout(t);
  }, [text, wi, deleting, words]);

  return text;
}

const marquee = ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Express", "MongoDB", "REST API", "Vercel", "Git & GitHub"];

export default function Hero() {
  const typed = useTypewriter(roles);

  return (
    <section id="home" className="relative overflow-hidden pt-36 pb-10 sm:pt-44">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 lg:grid-cols-[1.15fr_0.85fr]">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-300/30 bg-amber-300/10 px-4 py-1.5 text-xs font-semibold text-amber-200">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Available for internships & freelance
          </div>

          <p className="mt-6 text-sm font-bold uppercase tracking-[0.35em] text-fuchsia-300">Hello, I&apos;m</p>
          <h1 className="text-glow mt-2 text-5xl font-black leading-[0.95] tracking-tight text-white sm:text-7xl">
            RAKIB
            <br />
            <span className="bg-gradient-to-r from-amber-200 via-fuchsia-400 to-cyan-300 bg-clip-text text-transparent">
              HASAN SHUVO
            </span>
          </h1>

          <p className="mt-5 flex h-7 items-center text-lg font-semibold text-cyan-200 sm:text-xl">
            <Zap size={18} className="mr-2 text-amber-300" />
            {typed}
            <span className="animate-blink ml-1 inline-block h-5 w-[2px] bg-cyan-300" />
          </p>

          <p className="mt-4 max-w-xl leading-relaxed text-slate-300/90">{profile.tagline}</p>
          <p className="mt-3 flex items-center gap-2 text-sm text-slate-400">
            <MapPin size={15} className="text-fuchsia-300" /> {profile.location}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="group btn-shine inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-fuchsia-500 via-violet-600 to-cyan-500 bg-[length:200%_100%] bg-left px-7 py-3.5 text-sm font-bold text-white shadow-[0_8px_40px_rgba(168,85,247,0.5)] transition-all hover:bg-right hover:shadow-[0_8px_50px_rgba(34,211,238,0.5)]"
            >
              View Projects
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="/cv"
              className="glass inline-flex items-center gap-2 rounded-2xl px-7 py-3.5 text-sm font-bold text-white transition hover:border-amber-300/50 hover:text-amber-200"
            >
              <Download size={16} /> View Smart CV
            </a>
            <a
              href="/Rakib-Hasan-Shuvo-CV.pdf"
              download
              className="inline-flex items-center gap-2 rounded-2xl border border-white/10 px-5 py-3.5 text-xs font-bold text-slate-300 transition hover:border-cyan-300/50 hover:text-cyan-200"
            >
              PDF ↓
            </a>
          </div>

          <div className="mt-6 flex items-center gap-3">
            {[
              { Icon: GithubIcon, href: profile.github, label: "GitHub" },
              { Icon: LinkedinIcon, href: profile.linkedin, label: "LinkedIn" },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="glass rounded-2xl p-3.5 text-slate-200 transition hover:scale-110 hover:text-amber-200"
              >
                <Icon size={18} />
              </a>
            ))}
            <div className="ml-2 flex items-center gap-1 text-sm text-slate-400">
              <Star size={14} className="fill-amber-300 text-amber-300" />
              <Star size={14} className="fill-amber-300 text-amber-300" />
              <Star size={14} className="fill-amber-300 text-amber-300" />
              <span className="ml-1">20 repos on GitHub</span>
            </div>
          </div>

          <div className="mt-8 grid max-w-md grid-cols-3 gap-3">
            {[
              { n: "6+", l: "Projects" },
              { n: "8", l: "Tech Groups" },
              { n: "20", l: "Repos" },
            ].map((s) => (
              <div key={s.l} className="glass rounded-2xl px-4 py-3 text-center">
                <p className="bg-gradient-to-r from-amber-200 to-fuchsia-300 bg-clip-text text-2xl font-black text-transparent">{s.n}</p>
                <p className="text-[11px] font-semibold uppercase tracking-widest text-slate-400">{s.l}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* PHOTO SHOWCASE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="ring-conic animate-spin-slow absolute -inset-3 rounded-[2.5rem] opacity-70 blur-[6px]" />
          <div className="absolute -inset-3 rounded-[2.5rem] bg-[#06040f]" style={{ inset: "2px" }} />
          <div className="animate-floaty relative overflow-hidden rounded-[2.2rem] border border-white/20">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/profile.jpg" alt={profile.name} className="h-[30rem] w-full object-cover object-top" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#06040f] via-transparent to-transparent" />
            <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/15 bg-black/55 p-4 backdrop-blur-xl">
              <p className="text-sm font-extrabold text-white">Rakib Hasan Shuvo</p>
              <p className="bg-gradient-to-r from-amber-200 to-cyan-300 bg-clip-text text-xs font-semibold text-transparent">
                CSE Student • Building full-stack dreams
              </p>
            </div>
          </div>

          <div className="glass animate-floaty absolute -left-8 top-10 flex items-center gap-2 rounded-2xl px-4 py-2.5 text-xs font-bold text-white" style={{ animationDelay: "-2s" }}>
            <span className="rounded-lg bg-gradient-to-r from-emerald-400 to-cyan-400 p-1.5 text-slate-950"><Trophy size={14} /></span>
            Bazar Dor • Live
          </div>
          <div className="glass animate-floaty absolute -right-6 top-1/2 flex items-center gap-2 rounded-2xl px-4 py-2.5 text-xs font-bold text-white" style={{ animationDelay: "-3.5s" }}>
            <span className="rounded-lg bg-gradient-to-r from-fuchsia-500 to-violet-500 p-1.5 text-white"><Zap size={14} /></span>
            Next.js + TS
          </div>
        </motion.div>
      </div>

      {/* marquee */}
      <div className="mt-16 overflow-hidden border-y border-white/10 bg-black/30 py-4 backdrop-blur">
        <div className="animate-marquee flex w-max gap-4">
          {[...marquee, ...marquee].map((m, i) => (
            <span key={i} className="flex items-center gap-4 rounded-full border border-white/10 bg-white/5 px-6 py-2 text-sm font-semibold text-slate-200">
              <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-fuchsia-400 to-cyan-300" /> {m}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
