import { Code2, Server, LayoutDashboard, Rocket, Heart, Target, Coffee } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const cards = [
  { icon: LayoutDashboard, n: "01", title: "Frontend Development", desc: "Pixel-clean responsive interfaces with React, Next.js and Tailwind.", grad: "from-fuchsia-500 to-violet-600", glow: "hover:shadow-[0_12px_50px_rgba(217,70,239,0.4)]" },
  { icon: Server, n: "02", title: "Backend Development", desc: "Node.js, Express and REST APIs — currently leveling up fast.", grad: "from-cyan-400 to-blue-600", glow: "hover:shadow-[0_12px_50px_rgba(34,211,238,0.4)]" },
  { icon: Code2, n: "03", title: "Web App Development", desc: "Full apps: auth, routing, database, deployment on Vercel.", grad: "from-amber-400 to-pink-600", glow: "hover:shadow-[0_12px_50px_rgba(251,191,36,0.35)]" },
];

const values = [
  { icon: Rocket, t: "Ships fast", d: "Ideas → live Vercel links" },
  { icon: Heart, t: "Clean UI lover", d: "Responsive, polished" },
  { icon: Target, t: "Goal-driven", d: "Full-stack by shipping" },
  { icon: Coffee, t: "Always learning", d: "Docs + building daily" },
];

export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-5 py-20">
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-72 w-[36rem] -translate-x-1/2 rounded-full bg-violet-700/15 blur-[100px]" />
      <div className="grid items-start gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <SectionHeading
            kicker="About me"
            title="Code, curiosity & clean interfaces."
            desc="I’m Rakib Hasan Shuvo, a CSE student from Bangladesh turning ideas into live web apps. I obsess over responsive layouts, smooth interactions, and learning full-stack by shipping — Bazar Dor, Fit Log and more."
          />
          <Reveal delay={0.05}>
            <blockquote className="glass relative overflow-hidden rounded-2xl p-5 text-sm leading-relaxed text-slate-300">
              <span className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-fuchsia-500 via-violet-500 to-cyan-400" />
              “I don’t just watch tutorials — I build, break, fix and deploy. Every project teaches me routing, auth, APIs and UI polish.”
            </blockquote>
          </Reveal>
          <div className="mt-5 grid grid-cols-2 gap-3">
            {values.map(({ icon: Icon, t, d }, i) => (
              <Reveal key={t} delay={i * 0.06}>
                <div className="glass group flex items-center gap-3 rounded-2xl p-4 transition hover:-translate-y-0.5 hover:border-fuchsia-400/40">
                  <span className="rounded-xl bg-gradient-to-br from-fuchsia-500/30 to-cyan-500/20 p-2.5 text-amber-200 transition group-hover:scale-110">
                    <Icon size={17} />
                  </span>
                  <span>
                    <span className="block text-sm font-bold text-white">{t}</span>
                    <span className="block text-[11px] text-slate-400">{d}</span>
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* code window instead of photo */}
        <Reveal delay={0.1}>
          <div className="relative">
            <div className="ring-conic absolute -inset-1.5 rounded-[1.8rem] opacity-40 blur-[10px]" />
            <div className="relative overflow-hidden rounded-[1.6rem] border border-white/15 bg-[#0a0618]/95 shadow-2xl backdrop-blur-xl">
              <div className="flex items-center gap-2 border-b border-white/10 px-5 py-3.5">
                <span className="h-3 w-3 rounded-full bg-rose-500" />
                <span className="h-3 w-3 rounded-full bg-amber-400" />
                <span className="h-3 w-3 rounded-full bg-emerald-400" />
                <span className="ml-3 rounded-md bg-white/5 px-3 py-1 font-mono text-[11px] text-slate-400">developer.ts</span>
                <span className="ml-auto hidden items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-[10px] font-bold text-emerald-300 sm:flex">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" /> open to work
                </span>
              </div>
              <pre className="overflow-x-auto p-6 font-mono text-[12.5px] leading-relaxed">
                <code>
                  <span className="text-fuchsia-400">const</span> <span className="text-cyan-300">developer</span> <span className="text-slate-500">=</span> <span className="text-slate-300">{"{"}</span>{"\n"}
                  {"  "}name: <span className="text-amber-200">&quot;Rakib Hasan Shuvo&quot;</span>,{"\n"}
                  {"  "}base: <span className="text-amber-200">&quot;Savar, Dhaka 🇧🇩&quot;</span>,{"\n"}
                  {"  "}focus: [<span className="text-emerald-300">&quot;React&quot;</span>, <span className="text-emerald-300">&quot;Next.js&quot;</span>, <span className="text-emerald-300">&quot;TypeScript&quot;</span>],{"\n"}
                  {"  "}backend: <span className="text-amber-200">&quot;Node + Express + MongoDB ⏳&quot;</span>,{"\n"}
                  {"  "}shipped: <span className="text-cyan-300">["Bazar Dor", "Fit Log"]</span>,{"\n"}
                  {"  "}motto: <span className="text-amber-200">&quot;learn by shipping 🚀&quot;</span>,{"\n"}
                  {"  "}hireable: <span className="text-fuchsia-400">true</span>{"\n"}
                  <span className="text-slate-300">{"}"}</span>;
                </code>
              </pre>
              <div className="flex items-center justify-between border-t border-white/10 bg-white/[0.02] px-6 py-3 text-[11px]">
                <span className="font-mono text-slate-500">▸ 6 projects • 20 repos • 2 live</span>
                <span className="bg-gradient-to-r from-amber-200 to-fuchsia-300 bg-clip-text font-bold text-transparent">TypeScript ✓ No errors</span>
              </div>
            </div>
            <div className="glass animate-floaty absolute -bottom-5 -left-4 rounded-2xl px-4 py-2.5 text-xs font-bold text-white">
              ⚡ Builds & deploys on Vercel
            </div>
            <div className="glass animate-floaty absolute -right-3 -top-5 rounded-2xl px-4 py-2.5 text-xs font-bold text-white" style={{ animationDelay: "-2.5s" }}>
              🎯 Goal: Full-Stack Dev
            </div>
          </div>
        </Reveal>
      </div>

      <div className="mt-14 grid gap-4 md:grid-cols-3">
        {cards.map(({ icon: Icon, n, title, desc, grad, glow }, i) => (
          <Reveal key={title} delay={i * 0.08}>
            <div className={`glass group relative h-full overflow-hidden rounded-2xl p-6 transition duration-300 hover:-translate-y-1.5 ${glow}`}>
              <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${grad}`} />
              <div className="flex items-center justify-between">
                <span className={`bg-gradient-to-r ${grad} rounded-2xl p-3 text-white shadow-lg transition group-hover:scale-110 group-hover:rotate-3`}>
                  <Icon size={20} />
                </span>
                <span className="bg-gradient-to-br from-white/30 to-white/5 bg-clip-text text-3xl font-black text-transparent">{n}</span>
              </div>
              <h3 className="mt-4 font-extrabold text-white">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
