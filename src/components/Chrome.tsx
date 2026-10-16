"use client";
import { useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 25 });
  return (
    <motion.div
      className="fixed inset-x-0 top-0 z-[70] h-1 origin-left bg-gradient-to-r from-amber-300 via-fuchsia-500 to-cyan-400"
      style={{ scaleX }}
    />
  );
}

export function BackToTop() {
  useEffect(() => {
    const btn = document.getElementById("to-top");
    const onScroll = () => {
      if (btn) btn.style.opacity = window.scrollY > 600 ? "1" : "0";
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <button
      id="to-top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="glass fixed bottom-6 right-6 z-[70] rounded-2xl px-4 py-3 text-lg font-black text-white opacity-0 transition hover:scale-110"
      aria-label="Back to top"
    >
      ↑
    </button>
  );
}
