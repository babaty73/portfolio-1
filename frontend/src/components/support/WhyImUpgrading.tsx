import { motion } from "framer-motion";

const WORKLOAD = [
  "VS Code",
  "Browser",
  "Multiple development servers",
  "Databases",
  "API tools",
  "Build tools",
  "Modern frameworks",
  "Larger applications",
  "AI-assisted development tools",
];

export default function WhyImUpgrading() {
  return (
    <section className="px-6 md:px-12 py-20 md:py-28 border-t border-zinc-900">
      <div className="max-w-4xl mx-auto">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-xs tracking-wide text-blue-400"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          WHY I'M UPGRADING
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="mt-4 text-3xl md:text-4xl font-semibold leading-tight tracking-tight"
          style={{ fontFamily: "'Clash Display', sans-serif" }}
        >
          The tools I need are getting heavier.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-6 text-zinc-400 leading-relaxed"
        >
          Modern development increasingly means running several of these at
          once:
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-6 flex flex-wrap gap-3"
        >
          {WORKLOAD.map((item) => (
            <span
              key={item}
              className="text-xs text-zinc-300 border border-zinc-800 rounded-full px-3 py-1.5"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              {item}
            </span>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 text-zinc-400 leading-relaxed"
        >
          I've already been building with a 4GB, HDD-based machine — but its
          limitations are increasingly becoming a bottleneck as the work
          gets more demanding.
        </motion.p>
      </div>
    </section>
  );
}
