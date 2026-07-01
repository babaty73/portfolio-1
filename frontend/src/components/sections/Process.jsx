import { motion } from "framer-motion";

const fontStyles = `
  @import url('https://api.fontshare.com/v2/css?f[]=clash-display@600,700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');
`;

const STEPS = [
  {
    number: "1",
    title: "Discovery",
    description:
      "A call to understand the problem you're actually solving, not just the feature list. Scope and timeline get mapped before any code gets written.",
    duration: "1–2 days",
  },
  {
    number: "2",
    title: "Build",
    description:
      "Development happens in stages, with working checkpoints you can see and test along the way — never weeks of silence before the first preview.",
    duration: "bulk of the timeline",
  },
  {
    number: "3",
    title: "Launch",
    description:
      "Deployed to production, tested across devices, and handed off with documentation — not a zip file and a goodbye.",
    duration: "1–3 days",
  },
  {
    number: "4",
    title: "Support",
    description:
      "A fixed window of post-launch support to fix what real usage reveals, with the option to keep working together as things evolve.",
    duration: "2 weeks included",
  },
];

export default function ProcessSection() {
  return (
    <section
      id="process"
      className="bg-zinc-950 text-zinc-100 px-6 md:px-12 py-24 md:py-36"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <style>{fontStyles}</style>

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="max-w-xl mb-16 md:mb-24"
        >
          <span
            className="text-xs tracking-wide text-blue-400"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            PROCESS
          </span>
          <h2
            className="mt-4 text-3xl md:text-4xl font-semibold leading-tight tracking-tight"
            style={{ fontFamily: "'Clash Display', sans-serif" }}
          >
            How we'd work together.
          </h2>
          <p className="mt-4 text-zinc-400 leading-relaxed">
            A structure built to remove guesswork — especially if this is
            your first time hiring a freelance developer.
          </p>
        </motion.div>

        <div className="relative flex flex-col md:flex-row md:justify-between gap-10 md:gap-6">
          <div className="absolute bg-zinc-800 left-6 top-0 bottom-0 w-px md:left-0 md:right-0 md:top-6 md:bottom-auto md:w-auto md:h-px" />

          {STEPS.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative flex flex-row md:flex-col items-start md:items-center gap-4 md:gap-0 md:text-center md:flex-1"
            >
              <div
                className="relative z-10 w-12 h-12 rounded-full bg-zinc-950 border-2 border-zinc-800 flex items-center justify-center flex-shrink-0 md:mb-5"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                <span className="text-sm text-blue-400">{step.number}</span>
              </div>

              <div className="flex-1 md:flex-none md:px-2">
                <h3
                  className="text-base font-semibold"
                  style={{ fontFamily: "'Clash Display', sans-serif" }}
                >
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                  {step.description}
                </p>
                <span
                  className="mt-3 inline-block text-xs text-zinc-600 tracking-wide"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  {step.duration}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
