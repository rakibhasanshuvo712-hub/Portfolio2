import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { skillGroups } from "@/data/portfolio";

const levels = [92, 88, 72, 70, 85, 78, 90, 80];
const grads = [
  "from-amber-400 to-pink-500",
  "from-fuchsia-500 to-violet-600",
  "from-cyan-400 to-blue-600",
  "from-emerald-400 to-teal-600",
  "from-orange-400 to-rose-500",
  "from-violet-400 to-purple-600",
  "from-sky-400 to-indigo-600",
  "from-lime-400 to-emerald-600",
];

export default function Skills() {
  return (
    <section id="skills" className="border-y border-white/5 bg-black/20">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <SectionHeading
          kicker="My toolkit"
          title="Skills & Technologies"
          desc="Technologies and tools I use or am currently mastering."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((g, i) => (
            <Reveal key={g.title} delay={(i % 4) * 0.06}>
              <div className="glass group h-full rounded-2xl p-5 transition hover:-translate-y-1">
                <p className="text-xs font-black text-white/25">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="mt-1 bg-gradient-to-r from-white to-white/60 bg-clip-text font-extrabold text-transparent">{g.title}</h3>
                <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/10">
                  <div className={`h-full w-0 rounded-full bg-gradient-to-r ${grads[i % grads.length]} transition-all duration-1000 group-hover:w-full`} style={{ width: `${levels[i % levels.length]}%` }} />
                </div>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {g.items.map((s) => (
                    <span key={s} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-medium text-slate-200">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
