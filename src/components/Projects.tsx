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
  return (
    <section id="projects" className="mx-auto max-w-6xl px-5 py-20">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <SectionHeading kicker="Selected work" title="Projects that pop" desc="Pinned GitHub repositories and other projects I built while learning full-stack development." />
        <a href={`${profile.github}?tab=repositories`} target="_blank" rel="noreferrer" className="glass mb-10 inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-bold text-amber-200 hover:text-amber-100">
          View all on GitHub <ArrowUpRight size={16} />
        </a>
      </div>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <Reveal key={p.id} delay={(i % 3) * 0.07}>
            <article className="glass group flex h-full flex-col overflow-hidden rounded-2xl transition hover:-translate-y-1.5 hover:shadow-[0_16px_60px_rgba(34,211,238,0.25)]">
              <div className={`h-2 bg-gradient-to-r ${cardGrads[i % cardGrads.length].split(" ")[0].replace("/40", "-500")} to-transparent`} style={{ background: "linear-gradient(90deg,#e879f9,#22d3ee)" }} />
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold uppercase tracking-widest text-cyan-300">{p.category}</span>
                  <span className="font-black text-white/20">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="mt-2 text-lg font-extrabold text-white group-hover:text-amber-200">{p.title}</h3>
                {p.pinned && <span className="mt-2 w-fit rounded-full border border-amber-300/30 bg-amber-300/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-amber-200">Pinned on GitHub</span>}
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
