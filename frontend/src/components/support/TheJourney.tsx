import { motion } from "framer-motion";
import { journey } from "../../data/supportDetails";

export default function TheJourney() {
  return (
    <section className="px-6 md:px-12 py-20 md:py-28 border-t border-zinc-900">
      <div className="max-w-4xl mx-auto text-center">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-xs tracking-wide text-blue-400"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          {journey.startDate.toUpperCase()} — {journey.currentLabel.toUpperCase()}
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="mt-4 text-3xl md:text-4xl font-semibold leading-tight tracking-tight"
          style={{ fontFamily: "'Clash Display', sans-serif" }}
        >
          {journey.daysLabel}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-6 text-zinc-400 leading-relaxed max-w-2xl mx-auto"
        >
          I started documenting this journey with just a few people following
          along. Over the following months, I kept building, sharing,
          learning, and improving — and more than 3,000 people eventually
          joined the journey. This support page exists because of that
          community.
        </motion.p>
      </div>
    </section>
  );
}
