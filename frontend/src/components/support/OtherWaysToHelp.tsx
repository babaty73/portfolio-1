import { motion } from "framer-motion";

const ACTIONS = [
  "Share this page",
  "Share my LinkedIn posts",
  "Recommend me for freelance opportunities",
  "Connect me with potential clients",
  "Follow my work",
];

export default function OtherWaysToHelp() {
  return (
    <section className="px-6 md:px-12 py-16 md:py-20 border-t border-zinc-900">
      <div className="max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-sm text-zinc-500"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Financial support isn't the only way to help.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="mt-4 flex flex-wrap gap-3"
        >
          {ACTIONS.map((action) => (
            <span
              key={action}
              className="text-xs text-zinc-400 border border-zinc-800 rounded-full px-3 py-1.5"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              {action}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
