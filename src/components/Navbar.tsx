"use client";
import { useEffect, useState } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import { navLinks, profile } from "@/data/portfolio";
import { GithubIcon } from "./icons";
import clsx from "clsx";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <nav
        className={clsx(
          "mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-5 py-3 transition-all duration-300",
          scrolled
            ? "glass shadow-[0_8px_40px_rgba(168,85,247,0.25)]"
            : "border border-transparent bg-transparent"
        )}
      >
        <a href="#home" className="group flex items-center gap-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/profile.jpg"
            alt="RHS"
            className="h-10 w-10 rounded-xl border border-white/20 object-cover"
          />
          <span className="leading-none">
            <span className="block text-sm font-extrabold tracking-tight text-white">
              RAKIB HASAN <span className="bg-gradient-to-r from-fuchsia-400 to-cyan-300 bg-clip-text text-transparent">SHUVO</span>
            </span>
            <span className="mt-1 flex items-center gap-1 text-[11px] text-slate-400">
              <Sparkles size={11} className="text-amber-300" /> portfolio 2026
            </span>
          </span>
        </a>
        <div className="hidden items-center gap-6 md:flex">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-slate-300 transition hover:text-white hover:drop-shadow-[0_0_12px_rgba(244,114,182,0.8)]"
            >
              {l.label}
            </a>
          ))}
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-fuchsia-500 to-violet-600 px-4 py-2 text-sm font-bold text-white shadow-[0_4px_24px_rgba(192,38,211,0.5)] transition hover:scale-105 hover:from-fuchsia-400 hover:to-violet-500"
          >
            <GithubIcon size={16} /> Hire Me
          </a>
        </div>
        <button
          className="glass rounded-xl p-2 text-white md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>
      {open && (
        <div className="glass mx-auto mt-2 max-w-6xl rounded-2xl px-5 py-4 md:hidden">
          <div className="flex flex-col gap-1">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-2.5 text-slate-200 hover:bg-white/10"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
