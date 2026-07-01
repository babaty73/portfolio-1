import { useState, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

const fontStyles = `
  @import url('https://api.fontshare.com/v2/css?f[]=clash-display@600,700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');
`;

const DAYS = ["MON", "TUE", "WED", "THU", "FRI"];
const SLOTS = ["9:00", "10:30", "12:00", "1:30", "3:00", "4:30"];
const ACTIVE_DAY = 2;
const ACTIVE_SLOT = 2;

export default function PortfolioHero() {
  const reduceMotion = useReducedMotion();
  const [selectedSlot, setSelectedSlot] = useState(reduceMotion ? ACTIVE_SLOT : null);
  const [confirmed, setConfirmed] = useState(reduceMotion);

  useEffect(() => {
    if (reduceMotion) return;
    const t1 = setTimeout(() => setSelectedSlot(ACTIVE_SLOT), 1400);
    const t2 = setTimeout(() => setConfirmed(true), 2200);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [reduceMotion]);

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
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-18 md:pt-32 pb-24 grid md:grid-cols-12 gap-12 items-center">
        {/* left column */}
        <div className="md:col-span-7">
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
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-9 flex flex-wrap items-center gap-4"
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

        {/* right column — signature widget */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="md:col-span-5 relative"
        >
          <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full rounded-2xl border border-zinc-800" />

          <div className="relative bg-zinc-900 border border-zinc-800 rounded-2xl p-6 shadow-2xl">
            <div className="flex items-center justify-between mb-5">
              <span
                className="text-xs text-zinc-400 tracking-wide"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                BOOK A SESSION
              </span>
              <div className="flex gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-zinc-700" />
                <span className="w-1.5 h-1.5 rounded-full bg-zinc-700" />
                <span className="w-1.5 h-1.5 rounded-full bg-zinc-700" />
              </div>
            </div>

            <div className="flex gap-2 mb-5">
              {DAYS.map((d, i) => (
                <div
                  key={d}
                  className={`flex-1 text-center py-2 rounded-lg text-xs ${
                    i === ACTIVE_DAY
                      ? "bg-blue-600 text-white"
                      : "bg-zinc-800 text-zinc-400"
                  }`}
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  {d}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-2">
              {SLOTS.map((t, i) => (
                <motion.div
                  key={t}
                  animate={selectedSlot === i ? { scale: [1, 1.04, 1] } : {}}
                  transition={{ duration: 0.4 }}
                  className={`text-center py-2.5 rounded-lg text-sm border ${
                    selectedSlot === i
                      ? "border-blue-500 bg-blue-950 text-blue-400"
                      : "border-zinc-800 text-zinc-400"
                  }`}
                >
                  {t}
                </motion.div>
              ))}
            </div>

            {confirmed && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-5 flex items-center gap-2 bg-lime-950 border border-lime-800 rounded-lg px-3 py-2.5"
              >
                <Check className="w-4 h-4 text-lime-400" />
                <span className="text-xs text-lime-400 font-medium">
                  Appointment confirmed
                </span>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
