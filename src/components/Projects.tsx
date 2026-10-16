import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { projects, profile } from "@/data/portfolio";
import { GithubIcon } from "./icons";

const cardGrads = [
  "from-fuchsia-600/40 via-violet-600/10 to-transparent",
  "from-cyan-500/40 via-blue-600/10 to-transparent",
  "from-amber-500/40 via-pink-600/10 to-transparent",
  "from-emerald-500/40 via-teal-600/10 to-transparent",
  "from-violet-600/40 via-purple-600/10 to-transparent",
  "from-orange-500/40 via-rose-600/10 to-transparent",
];

export default function Projects() {
  const [featured, ...rest] = projects;
  return (
    <section id="projects" className="mx-auto max-w-6xl px-5 py-20">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <SectionHeading kicker="Selected work" title="Projects that pop" desc="Real apps I built while learning full-stack development." />
        <a href={`${profile.github}?tab=repositories`} target="_blank" rel="noreferrer" className="glass mb-10 inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-bold text-amber-200 hover:text-amber-100">
          View all on GitHub <ArrowUpRight size={16} />
        </a>
      </div>

      {/* featured */}
      <Reveal>
        <article className="glass group relative mb-6 overflow-hidden rounded-3xl p-8 transition hover:shadow-[0_20px_80px_rgba(168,85,247,0.4)] md:p-10">
          <div className={`absolute inset-0 bg-gradient-to-br ${cardGrads[0]}`} />
          <div className="relative grid gap-8 md:grid-cols-2">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-fuchsia-300">{featured.category} • Featured</p>
              <h3 className="mt-3 text-3xl font-black text-white sm:text-4xl">{featured.title}</h3>
              <p className="mt-3 text-slate-300">{featured.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {featured.tags.map((t) => (
                  <span key={t} className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white">{t}</span>
                ))}
              </div>
              <div className="mt-6 flex gap-3">
                {featured.live && (
                  <a href={featured.live} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 rounded-xl bg-white px-5 py-2.5 text-xs font-black text-slate-950 transition hover:scale-105">
                    Live Demo <ArrowUpRight size={14} />
                  </a>
                )}
                <a href={featured.source} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 rounded-xl border border-white/20 px-5 py-2.5 text-xs font-bold text-white hover:bg-white/10">
                  <GithubIcon size={14} /> Source
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="ring-conic absolute -inset-1 rounded-2xl opacity-50 blur-[6px]" />
              <div className="relative rounded-2xl border border-white/20 bg-gradient-to-br from-slate-900 to-slate-800 p-8 text-center">
                <p className="text-5xl">🛒</p>
                <p className="mt-3 font-black text-white">বাজার দর</p>
                <p className="text-xs text-slate-400">Daily market prices • Bengali UI</p>
                <div className="mx-auto mt-4 grid max-w-[220px] grid-cols-3 gap-2 text-[11px]">
                  {["Rice", "Oil", "Fish"].map((x) => (
                    <span key={x} className="rounded-lg bg-white/10 px-2 py-1.5 text-slate-200">{x}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </article>
      </Reveal>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {rest.map((p, i) => (
          <Reveal key={p.id} delay={(i % 3) * 0.07}>
            <article className="glass group flex h-full flex-col overflow-hidden rounded-2xl transition hover:-translate-y-1.5 hover:shadow-[0_16px_60px_rgba(34,211,238,0.25)]">
              <div className={`h-2 bg-gradient-to-r ${cardGrads[i % cardGrads.length].split(" ")[0].replace("/40", "-500")} to-transparent`} style={{ background: "linear-gradient(90deg,#e879f9,#22d3ee)" }} />
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold uppercase tracking-widest text-cyan-300">{p.category}</span>
                  <span className="font-black text-white/20">{p.index}</span>
                </div>
                <h3 className="mt-2 text-lg font-extrabold text-white group-hover:text-amber-200">{p.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">{p.description}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <span key={t} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] text-slate-300">{t}</span>
                  ))}
                </div>
                <div className="mt-5 flex gap-2">
                  {p.live && (
                    <a href={p.live} target="_blank" rel="noreferrer" className="inline-flex flex-1 items-center justify-center gap-1 rounded-xl bg-gradient-to-r from-fuchsia-500 to-violet-600 px-3 py-2 text-xs font-bold text-white hover:opacity-90">
                      Live <ArrowUpRight size={13} />
                    </a>
                  )}
                  <a href={p.source} target="_blank" rel="noreferrer" className="inline-flex flex-1 items-center justify-center gap-1 rounded-xl border border-white/15 px-3 py-2 text-xs font-bold text-white hover:bg-white/10">
                    <GithubIcon size={13} /> Code
                  </a>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
