"use client";
import { useState } from "react";
import { Mail, Send, MessageCircle } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { profile } from "@/data/portfolio";
import { GithubIcon, LinkedinIcon } from "./icons";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio contact from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.name} (${form.email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section id="contact" className="mx-auto max-w-6xl px-5 py-20">
      <SectionHeading kicker="Let's connect" title="Have an idea? Let's build it." desc="Open to internships, freelance work and collaborations." />
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <div className="glass relative overflow-hidden rounded-3xl p-6">
            <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-fuchsia-600/30 blur-[60px]" />
            <div className="flex items-center gap-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/profile.jpg" alt="contact" className="h-16 w-16 rounded-2xl border border-white/20 object-cover object-top" />
              <div>
                <h3 className="font-extrabold text-white">Let&apos;s build something together.</h3>
                <p className="flex items-center gap-1 text-xs text-emerald-300"><MessageCircle size={12} /> replies within 24h</p>
              </div>
            </div>
            <div className="mt-6 space-y-3">
              {[
                { Icon: Mail, label: "EMAIL", value: profile.email, href: `mailto:${profile.email}` },
                { Icon: GithubIcon, label: "GITHUB", value: "rakibhasanshuvo712-hub", href: profile.github },
                { Icon: LinkedinIcon, label: "LINKEDIN", value: "Rakib Hasan Shuvo", href: profile.linkedin },
              ].map(({ Icon, label, value, href }) => (
                <a key={label} href={href} target={href.startsWith("mailto") ? undefined : "_blank"} rel="noreferrer" className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition hover:border-fuchsia-400/50 hover:bg-white/[0.06]">
                  <span className="rounded-xl bg-gradient-to-br from-fuchsia-500 to-cyan-500 p-2.5 text-white"><Icon size={16} /></span>
                  <span>
                    <span className="block text-[10px] font-black tracking-[0.2em] text-slate-500">{label}</span>
                    <span className="block text-sm font-bold text-white">{value}</span>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <form onSubmit={submit} className="glass rounded-3xl p-6 sm:p-8">
            <h3 className="text-lg font-extrabold text-white">Send me a message ✨</h3>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <input required placeholder="Your name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-fuchsia-400/70" />
              <input required type="email" placeholder="Your email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-fuchsia-400/70" />
            </div>
            <textarea required placeholder="Tell me about your project..." rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="mt-3 w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-fuchsia-400/70" />
            <button type="submit" className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-fuchsia-500 via-violet-600 to-cyan-500 px-6 py-3.5 text-sm font-black text-white shadow-[0_8px_30px_rgba(168,85,247,0.5)] transition hover:scale-[1.01]">
              <Send size={16} /> Send Message
            </button>
            {sent && <p className="mt-3 text-center text-xs text-emerald-300">Opening your email app — I&apos;ll get back soon!</p>}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
