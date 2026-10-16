import Link from "next/link";
import { ArrowLeft, Download, Mail, MapPin, Globe } from "lucide-react";
import { cv } from "@/data/cv";
import PrintButton from "@/components/PrintButton";

export const metadata = {
  title: "CV — Rakib Hasan Shuvo",
  description: "Interactive CV of Rakib Hasan Shuvo — projects, skills, education.",
};

export default function CVPage() {
  return (
    <div className="mx-auto max-w-4xl px-5 pt-32 pb-20">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3 print:hidden">
        <Link href="/" className="glass inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-bold text-white hover:text-amber-200">
          <ArrowLeft size={15} /> Back to portfolio
        </Link>
        <div className="flex gap-2">
          <a href="/Rakib-Hasan-Shuvo-CV.pdf" download className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-fuchsia-500 to-violet-600 px-5 py-2.5 text-sm font-black text-white shadow-lg hover:scale-105">
            <Download size={15} /> Download PDF
          </a>
          <PrintButton />
        </div>
      </div>

      <article className="overflow-hidden rounded-3xl border border-white/15 bg-white text-slate-900 shadow-[0_30px_120px_rgba(168,85,247,0.35)] print:shadow-none print:rounded-none print:border-0">
        {/* header */}
        <div className="bg-gradient-to-r from-violet-700 via-fuchsia-600 to-cyan-600 p-8 text-white sm:flex sm:items-center sm:gap-6">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/profile.jpg" alt="Rakib" className="h-28 w-28 rounded-2xl border-4 border-white/60 object-cover object-top print:hidden" />
          <div>
            <h1 className="text-3xl font-black sm:text-4xl">{cv.name}</h1>
            <p className="mt-1 font-semibold text-white/90">{cv.role}</p>
            <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs text-white/85">
              <span className="inline-flex items-center gap-1"><Mail size={12} /> {cv.email}</span>
              <span className="inline-flex items-center gap-1"><MapPin size={12} /> {cv.location}</span>
              <span className="inline-flex items-center gap-1"><Globe size={12} /> {cv.github}</span>
            </div>
          </div>
        </div>

        <div className="grid gap-8 p-8 sm:grid-cols-[1fr_1.6fr]">
          <div>
            <h2 className="text-xs font-black uppercase tracking-[0.2em] text-fuchsia-700">Contact</h2>
            <ul className="mt-2 space-y-1 text-sm">
              <li>{cv.email}</li>
              <li>{cv.location}</li>
              <li>{cv.github}</li>
              <li>{cv.linkedin}</li>
            </ul>
            <h2 className="mt-6 text-xs font-black uppercase tracking-[0.2em] text-fuchsia-700">Skills</h2>
            <div className="mt-2 space-y-3">
              {cv.skills.map((k) => (
                <div key={k.g}>
                  <p className="text-xs font-black text-slate-700">{k.g}</p>
                  <p className="text-xs leading-relaxed text-slate-600">{k.s}</p>
                </div>
              ))}
            </div>
            <h2 className="mt-6 text-xs font-black uppercase tracking-[0.2em] text-fuchsia-700">Education</h2>
            <p className="mt-2 text-sm font-bold">B.Sc. CSE — Ongoing</p>
            <p className="text-xs text-slate-600">Bangladesh • Data Structures, DBMS, Networking + full-stack self-learning by building.</p>
            <h2 className="mt-6 text-xs font-black uppercase tracking-[0.2em] text-fuchsia-700">Goal</h2>
            <p className="mt-2 text-xs text-slate-600">Become a skilled Full-Stack Developer. Open to internships, freelance & collaboration.</p>
          </div>
          <div>
            <h2 className="text-xs font-black uppercase tracking-[0.2em] text-fuchsia-700">Summary</h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-700">{cv.summary}</p>
            <h2 className="mt-6 text-xs font-black uppercase tracking-[0.2em] text-fuchsia-700">Projects — all on GitHub, 2 live</h2>
            <div className="mt-3 space-y-4">
              {cv.projects.map((p) => (
                <div key={p.t} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-extrabold">{p.t}</p>
                  <p className="text-[11px] font-bold text-fuchsia-700">{p.m}</p>
                  <p className="mt-1 text-xs text-slate-600">{p.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </article>
      <p className="mt-4 text-center text-xs text-slate-500 print:hidden">
        Tip: click Download PDF for the one-page PDF, or Print → Save as PDF for this styled version.
      </p>
    </div>
  );
}
