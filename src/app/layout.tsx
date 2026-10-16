import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollProgress, { BackToTop } from "@/components/Chrome";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rakib Hasan Shuvo — Full-Stack Developer in Progress",
  description:
    "Portfolio of Rakib Hasan Shuvo — CSE student from Bangladesh building Bazar Dor, Fit Log and modern web apps with React, Next.js, TypeScript.",
  openGraph: {
    title: "Rakib Hasan Shuvo — Portfolio",
    description: "CSE Student & Aspiring Full-Stack Developer.",
    type: "website",
    images: ["/profile.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} grain min-h-screen font-sans text-slate-100 antialiased`}
      >
        {/* ambient aurora background */}
        <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
          <div className="bg-grid absolute inset-0" />
          <div className="animate-aurora absolute -top-40 left-[8%] h-[34rem] w-[34rem] rounded-full bg-violet-600/25 blur-[130px]" />
          <div
            className="animate-aurora absolute top-[10%] right-[4%] h-[28rem] w-[28rem] rounded-full bg-cyan-500/20 blur-[130px]"
            style={{ animationDelay: "-4s" }}
          />
          <div
            className="animate-aurora absolute bottom-[-10%] left-[30%] h-[30rem] w-[36rem] rounded-full bg-fuchsia-600/18 blur-[140px]"
            style={{ animationDelay: "-8s" }}
          />
        </div>
        <ScrollProgress />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
