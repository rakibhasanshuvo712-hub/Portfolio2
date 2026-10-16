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
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when menu is open, close on resize to desktop + Escape
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("resize", onResize);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("resize", onResize);
      window.removeEventListener("keydown", onKey);
    };
  }, [open ]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-4 sm:pt-4">
      {open && (
        <div
          onClick={() => setOpen(false)}
          aria-hidden="true"
          className="fixed inset-0 bg-black/60 backdrop-blur-sm md:hidden"
        />
      )}
      <nav
        className={clsx(
          "relative z-10 mx-auto flex max-w-6xl items-center justify-between gap-2 rounded-xl px-3 py-2.5 transition-all duration-300 sm:rounded-2xl sm:px-5 sm:py-3",
          scrolled || open
            ? "border border-white/10 bg-[#0d0726]/90 shadow-[0_8px_40px_rgba(168,85,247,0.25)] backdrop-blur-xl"
            : "border border-transparent bg-transparent"
        )}
      >
        <a href="#home" className="group flex min-w-0 flex-1 items-center gap-2.5 sm:gap-3" onClick={() => setOpen(false)}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/profile.jpg"
            alt="RHS"
            className="h-8 w-8 shrink-0 rounded-lg border border-white/20 object-cover sm:h-10 sm:w-10 sm:rounded-xl"
          />
          <span className="min-w-0 leading-none">
            <span className="block truncate text-[13px] font-extrabold tracking-tight text-white sm:text-sm">
              RAKIB HASAN <span className="bg-gradient-to-r from-fuchsia-400 to-cyan-300 bg-clip-text text-transparent">SHUVO</span>
            </span>
            <span className="mt-1 flex items-center gap-1 text-[11px] text-slate-400">
              <Sparkles size={11} className="shrink-0 text-amber-300" /> portfolio 2026
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
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-[#0d0726]/90 text-white backdrop-blur-xl transition active:scale-95 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>
      {open && (
          <div className="relative z-10 mx-auto mt-2 max-w-6xl overflow-hidden rounded-2xl border border-white/10 bg-[#0d0726]/95 shadow-[0_20px_60px_rgba(0,0,0,0.6)] backdrop-blur-xl md:hidden">
            <div className="flex max-h-[70vh] flex-col gap-1 overflow-y-auto p-2">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3 text-[15px] font-medium text-slate-200 transition hover:bg-white/10 hover:text-white active:bg-white/15"
                >
                  {l.label}
                </a>
              ))}
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                onClick={() => setOpen(false)}
                className="mt-1 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-fuchsia-500 to-violet-600 px-4 py-3 text-sm font-bold text-white"
              >
                <GithubIcon size={16} /> Hire Me
              </a>
            </div>
          </div>
      )}
    </header>
  );
}
