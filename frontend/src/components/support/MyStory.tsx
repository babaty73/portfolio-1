import { motion } from "framer-motion";

export default function MyStory() {
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
          MY STORY
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="mt-4 text-3xl md:text-4xl font-semibold leading-tight tracking-tight"
          style={{ fontFamily: "'Clash Display', sans-serif" }}
        >
          I'm Imran Endris.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-6 space-y-4 text-zinc-400 leading-relaxed"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          <p>
            I'm a 3rd-year Civil Engineering student at ASTU, while
            professionally pursuing software development as a full-stack web
            developer.
          </p>
          <p>
            Over the past several months I've built and deployed multiple
            real projects, and I've been documenting that journey publicly —
            more than 3,000 people now follow along.
          </p>
          <p>
            I've been building with what I have, and I'm trying to improve
            the tools that allow me to keep building.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
