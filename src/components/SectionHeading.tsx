import Reveal from "./Reveal";

export default function SectionHeading({
  kicker,
  title,
  desc,
}: {
  kicker: string;
  title: string;
  desc?: string;
}) {
  return (
    <Reveal className="mb-10 max-w-2xl">
      <p className="inline-flex items-center gap-2 rounded-full border border-fuchsia-400/30 bg-fuchsia-400/10 px-4 py-1 text-[11px] font-bold uppercase tracking-[0.25em] text-fuchsia-200">
        <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-fuchsia-400 to-cyan-300" />
        {kicker}
      </p>
      <h2 className="mt-4 bg-gradient-to-br from-white via-white to-white/50 bg-clip-text text-3xl font-extrabold tracking-tight text-transparent sm:text-5xl">
        {title}
      </h2>
      {desc && <p className="mt-3 max-w-xl text-slate-400">{desc}</p>}
      <div className="mt-5 h-1 w-24 rounded-full bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-400" />
    </Reveal>
  );
}
