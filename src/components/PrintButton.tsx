"use client";
export default function PrintButton() {
  return (
    <button
      onClick={() => window.print()}
      className="glass rounded-xl px-5 py-2.5 text-sm font-bold text-white hover:text-amber-200"
    >
      Print
    </button>
  );
}
