import { profile } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/40 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 py-8 text-center sm:flex-row sm:text-left">
        <div className="flex items-center gap-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/profile.jpg" alt="rhs" className="h-9 w-9 rounded-xl border border-white/20 object-cover object-top" />
          <p className="text-sm text-slate-300">© 2026 {profile.name} • Crafted with obsession</p>
        </div>
        <p className="bg-gradient-to-r from-fuchsia-300 to-cyan-300 bg-clip-text text-xs font-bold text-transparent">
          Next.js • TypeScript • Tailwind • Framer Motion
        </p>
      </div>
    </footer>
  );
}
