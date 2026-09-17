import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function SupportHero() {
  return (
    <div className="relative overflow-hidden pt-28 md:pt-40 pb-20 md:pb-28 px-6 md:px-12">
      <div className="pointer-events-none absolute -top-32 right-0 w-96 h-96 rounded-full bg-blue-600 opacity-10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 -left-40 w-96 h-96 rounded-full bg-blue-600 opacity-5 blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-block text-xs tracking-wide text-blue-400"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          SUPPORT
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-4 font-semibold text-4xl sm:text-5xl md:text-6xl leading-tight tracking-tight"
          style={{ fontFamily: "'Clash Display', sans-serif" }}
        >
          Support My Development Journey
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-zinc-400 leading-relaxed max-w-2xl mx-auto"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          I've spent the last several months building real projects with the
          tools I have. Now I'm trying to upgrade the machine behind the work
          so I can keep building without the same limitations.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#support-options"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium px-5 py-3 rounded-full transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
          >
            Support My Journey
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#what-ive-built"
            className="inline-flex items-center gap-2 border border-zinc-800 hover:border-zinc-600 text-zinc-200 text-sm font-medium px-5 py-3 rounded-full transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-500"
          >
            See What I've Built
          </a>
        </motion.div>
      </div>
    </div>
  );
}
