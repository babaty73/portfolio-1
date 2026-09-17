import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function FinalCta() {
  return (
    <section className="px-6 md:px-12 py-20 md:py-28 border-t border-zinc-900">
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto text-center"
      >
        <h2
          className="text-3xl md:text-4xl font-semibold leading-tight tracking-tight"
          style={{ fontFamily: "'Clash Display', sans-serif" }}
        >
          I Just Want the Tools to Keep Building.
        </h2>
        <p className="mt-5 text-zinc-400 leading-relaxed">
          I've spent the last several months creating with what I have. I'm
          not expecting the journey to be easy. I just want better tools to
          continue building.
        </p>
        <a
          href="#support-options"
          className="mt-8 inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium px-5 py-3 rounded-full transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
        >
          Support My Journey
          <ArrowRight className="w-4 h-4" />
        </a>
      </motion.div>
    </section>
  );
}
