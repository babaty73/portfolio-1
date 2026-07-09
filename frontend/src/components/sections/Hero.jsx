import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import profImage from "../../assets/Prof.png";

const fontStyles = `
  @import url('https://api.fontshare.com/v2/css?f[]=clash-display@600,700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');
`;

export default function PortfolioHero() {
  return (
    <div
      className="min-h-screen bg-zinc-950 text-zinc-100 relative overflow-hidden"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <style>{fontStyles}</style>

      {/* ambient glows */}
      <div className="pointer-events-none absolute -top-32 right-0 w-96 h-96 rounded-full bg-blue-600 opacity-10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 -left-40 w-96 h-96 rounded-full bg-blue-600 opacity-5 blur-3xl" />

      {/* hero content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-18 md:pt-32 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 lg:gap-10 items-center">
          {/* profile — top on mobile, right column on desktop */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="order-1 lg:order-2 flex justify-start lg:justify-end"
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-6">
              <div className="shrink-0 w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden ring-1 ring-zinc-700 ring-offset-2 ring-offset-zinc-950">
                <img
                  src={profImage}
                  alt="Imran Idris"
                  className="w-full h-full object-cover object-[center_20%]"
                  width={112}
                  height={112}
                  loading="eager"
                  decoding="async"
                />
              </div>
              <div className="text-left">
                <p
                  className="text-base font-medium text-zinc-200"
                  style={{ fontFamily: "'Clash Display', sans-serif" }}
                >
                  Imran Idris
                </p>
                <p
                  className="mt-1 text-xs text-zinc-500 tracking-wide"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  Full-Stack Developer · Addis Ababa
                </p>
              </div>
            </div>
          </motion.div>

          {/* text & CTA */}
          <div className="order-2 lg:order-1 w-full">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-zinc-800 bg-zinc-900 mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-lime-400" />
            </span>
            <span
              className="text-xs tracking-wide text-zinc-400"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              AVAILABLE FOR FREELANCE WORK
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-semibold text-4xl sm:text-5xl md:text-6xl leading-tight tracking-tight"
            style={{ fontFamily: "'Clash Display', sans-serif" }}
          >
            I build full-stack web apps that{" "}
            <span className="text-blue-400">solve real problems.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-zinc-400 text-lg max-w-md leading-relaxed"
          >
            MERN developer turning business needs into production-ready
            applications — from booking systems to custom dashboards.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-8"
          >
            <a
              href="/assets/Imran_Idris-Resume.pdf"
              download
              className="group inline-flex items-center gap-2.5 bg-zinc-900 text-zinc-100 text-sm font-medium px-6 py-3.5 rounded-full border border-zinc-800 hover:border-blue-500/60 hover:shadow-[0_0_24px_-4px_rgba(37,99,235,0.4)] hover:scale-[1.02] transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
            >
              <Download className="w-4 h-4 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
              Download Resume
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 flex flex-wrap items-center gap-4"
          >
            <a
              href="#work"
              className="group inline-flex items-center gap-2 bg-blue-600 text-white text-sm font-medium px-5 py-3 rounded-full hover:bg-blue-500 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
            >
              View my work
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a
              href="#contact"
              className="text-sm font-medium px-5 py-3 rounded-full border border-zinc-800 hover:border-zinc-600 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-500"
            >
              Start a project
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 flex flex-wrap items-center gap-3 text-xs text-zinc-600 tracking-wide"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            <span>MONGODB</span>
            <span className="text-zinc-800">/</span>
            <span>EXPRESS</span>
            <span className="text-zinc-800">/</span>
            <span>REACT</span>
            <span className="text-zinc-800">/</span>
            <span>NODE</span>
          </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
