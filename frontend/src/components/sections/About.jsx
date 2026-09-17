import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";


const FACTS = [
  { label: "Based in", value: "Addis Ababa, Ethiopia" },
  { label: "Timezone", value: "EAT — UTC+3" },
  { label: "Languages", value: "English, Amharic" },
  { label: "Available for", value: "Remote contracts worldwide" },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="bg-zinc-950 text-zinc-100 px-6 md:px-12 py-24 md:py-36"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >

      <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-12 md:gap-16 items-start">

        {/* left — heading + cta */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="md:col-span-4"
        >
          <span
            className="text-xs tracking-wide text-blue-400"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            ABOUT
          </span>
          <h2
            className="mt-4 text-3xl md:text-4xl font-semibold leading-tight tracking-tight"
            style={{ fontFamily: "'Clash Display', sans-serif" }}
          >
            The person behind the code.
          </h2>

          <a
            href="#contact"
            className="group mt-8 inline-flex items-center gap-2 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
          >
            Start a conversation
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </a>

          {/* quick facts */}
          <div className="mt-10 space-y-3">
            {FACTS.map((f) => (
              <div key={f.label} className="flex flex-col">
                <span
                  className="text-xs text-zinc-600 tracking-wide"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  {f.label.toUpperCase()}
                </span>
                <span className="mt-0.5 text-sm text-zinc-300">{f.value}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* right — copy */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.12 }}
          className="md:col-span-8 space-y-5 text-zinc-400 leading-relaxed"
        >
          <p>
            I'm a full-stack developer based in Addis Ababa, building
            production-ready web applications for clients remotely. My
            background is in civil engineering — which sounds unrelated, but
            it's where I learned to think in systems, plan before building, and
            care about what happens when things fail.
          </p>
          <p>
            I got into software because I wanted to build things that actually
            reach people — not physical structures that take years to complete,
            but products that can go live in weeks and keep improving. I've
            spent the last two years building that foundation: full-stack MERN
            applications, TypeScript, competitive programming on Codeforces and
            LeetCode, and shipping real projects with real architecture decisions
            behind them.
          </p>
          <p>
            I work well remotely and take communication seriously — clear
            updates, documented decisions, no guesswork on your end. If you're
            building something and need a developer who treats your project like
            an engineering problem (not a template to fill in), we're probably
            a good fit.
          </p>

          <div className="pt-4 flex flex-wrap gap-2">
            {[
              "System thinker",
              "Remote-ready",
              "Competitive programmer",
              "Obsessive about quality",
            ].map((tag) => (
              <span
                key={tag}
                className="text-xs px-3 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
