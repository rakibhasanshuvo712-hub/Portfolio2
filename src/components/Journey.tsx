import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { journey } from "@/data/portfolio";

export default function Journey() {
  return (
    <section id="journey" className="border-y border-white/5 bg-black/20">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <SectionHeading kicker="My resume" title="Journey & Goals" />
        <div className="relative grid gap-4 md:grid-cols-3">
          <div className="absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-transparent via-fuchsia-500/50 to-transparent md:block" />
          {journey.map((j, i) => (
            <Reveal key={j.title} delay={i * 0.08}>
              <div className="glass relative h-full rounded-2xl p-6">
                <span className="absolute -top-3 left-6 rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-500 px-3 py-1 text-[11px] font-black text-white">
                  {j.period}
                </span>
                <h3 className="mt-3 font-extrabold text-white">{j.title}</h3>
                <p className="mt-2 text-sm text-slate-400">{j.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="glass mt-8 overflow-hidden rounded-3xl p-8 text-center sm:flex sm:items-center sm:justify-between sm:text-left">
          <div>
            <h3 className="bg-gradient-to-r from-amber-200 via-fuchsia-300 to-cyan-200 bg-clip-text text-2xl font-black text-transparent">
              Want the full story?
            </h3>
            <p className="mt-1 text-sm text-slate-400">Download my CV — skills, projects and experience in one page.</p>
          </div>
          <a href="/cv" className="mt-5 inline-block rounded-2xl bg-gradient-to-r from-amber-300 via-fuchsia-500 to-violet-600 px-8 py-3.5 text-sm font-black text-white shadow-[0_8px_40px_rgba(217,70,239,0.5)] transition hover:scale-105 sm:mt-0">
            View Smart CV →
          </a>
        </Reveal>
      </div>
    </section>
  );
}
