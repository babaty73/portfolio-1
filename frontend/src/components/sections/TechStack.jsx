import { motion } from "framer-motion";

const fontStyles = `
  @import url('https://api.fontshare.com/v2/css?f[]=clash-display@600,700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');
`;

const GROUPS = [
  {
    layer: "Frontend",
    tools: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Vite"],
  },
  {
    layer: "Backend",
    tools: ["Node.js", "Express", "REST API", "JWT Auth", "Nodemailer"],
  },
  {
    layer: "Database",
    tools: ["MongoDB", "Mongoose"],
  },
  {
    layer: "Tooling",
    tools: ["Git", "GitHub", "Postman", "VS Code"],
  },
  {
    layer: "Deployment",
    tools: ["Vercel", "Render", "Railway"],
  },
];

export default function TechStackSection() {
  return (
    <section
      className="bg-zinc-950 text-zinc-100 px-6 md:px-12 py-24 md:py-32"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <style>{fontStyles}</style>

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14"
        >
          <div className="max-w-md">
            <span
              className="text-xs tracking-wide text-blue-400"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              TECH STACK
            </span>
            <h2
              className="mt-4 text-3xl md:text-4xl font-semibold leading-tight tracking-tight"
              style={{ fontFamily: "'Clash Display', sans-serif" }}
            >
              Tools I ship with.
            </h2>
          </div>
          <p className="text-sm text-zinc-500 max-w-xs leading-relaxed md:text-right">
            Organized by layer — the way they actually relate to each
            other in a production system.
          </p>
        </motion.div>

        <div className="space-y-0 divide-y divide-zinc-900">
          {GROUPS.map((group, i) => (
            <motion.div
              key={group.layer}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="flex flex-col md:flex-row md:items-center gap-4 py-5"
            >
              <span
                className="w-28 flex-shrink-0 text-xs text-zinc-600 tracking-wide"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                {group.layer.toUpperCase()}
              </span>

              <div className="flex flex-wrap gap-2">
                {group.tools.map((tool) => (
                  <span
                    key={tool}
                    className="text-sm text-zinc-300 px-3 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 hover:border-blue-800 hover:text-zinc-100 transition-colors"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
