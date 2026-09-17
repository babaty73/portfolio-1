import { motion } from "framer-motion";
import { ImageOff } from "lucide-react";
import { laptop } from "../../data/supportDetails";

export default function TheMachine() {
  return (
    <section className="px-6 md:px-12 py-20 md:py-28 border-t border-zinc-900 bg-zinc-950">
      <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-10 md:gap-16 items-center">
        {/* media placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="md:col-span-6"
        >
          <div className="aspect-[4/3] w-full rounded-2xl border border-dashed border-zinc-700 bg-zinc-900 flex flex-col items-center justify-center gap-3 text-center px-6">
            <ImageOff className="w-8 h-8 text-zinc-600" />
            <p
              className="text-xs text-zinc-500 tracking-wide"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              PHOTO / VIDEO PLACEHOLDER
            </p>
            <p className="text-xs text-zinc-600 max-w-xs">
              .
            </p>
          </div>
        </motion.div>

        {/* text */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="md:col-span-6"
        >
          <span
            className="text-xs tracking-wide text-blue-400"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            THE MACHINE BEHIND THE WORK
          </span>

          <h2
            className="mt-4 text-3xl md:text-4xl font-semibold leading-tight tracking-tight"
            style={{ fontFamily: "'Clash Display', sans-serif" }}
          >
            {laptop.model}
          </h2>

          <p
            className="mt-4 text-zinc-400 leading-relaxed"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            This is the machine I've used to develop every project shown on
            this site.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            {laptop.specs.map((spec) => (
              <span
                key={spec}
                className="text-xs text-zinc-300 border border-zinc-800 rounded-full px-3 py-1.5"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                {spec}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
