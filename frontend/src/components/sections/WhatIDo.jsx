import { motion } from "framer-motion";
import { Layers, LayoutDashboard, Plug } from "lucide-react";

const fontStyles = `
  @import url('https://api.fontshare.com/v2/css?f[]=clash-display@600,700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');
`;

const PILLARS = [
  {
    icon: Layers,
    title: "Full-Stack Applications",
    description:
      "Complete products, designed and built end to end. I own the data model, the server logic, and the interface — so nothing gets lost in translation between layers.",
    tags: "DATA MODELING · STATE ARCHITECTURE · SERVER LOGIC",
  },
  {
    icon: LayoutDashboard,
    title: "Internal Tools & Dashboards",
    description:
      "Most businesses run on spreadsheets long after they've outgrown them. I build the tool that replaces that spreadsheet, structured around how the team actually works.",
    tags: "INFORMATION HIERARCHY · ACCESS CONTROL · WORKFLOW DESIGN",
  },
  {
    icon: Plug,
    title: "APIs & Integrations",
    description:
      "Apps rarely live in isolation. Authentication, payments, third-party services — I build the connective layer that ties a product to the outside world, and handles it gracefully when something fails.",
    tags: "AUTH FLOWS · SERVICE BOUNDARIES · FAILURE HANDLING",
  },
];

export default function WhatIDoSection() {
  return (
    <section
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
            WHAT I DO
          </span>
          <h2
            className="mt-4 text-3xl md:text-4xl font-semibold leading-tight tracking-tight"
            style={{ fontFamily: "'Clash Display', sans-serif" }}
          >
            Three ways I turn problems into shipped software.
          </h2>
          <p className="mt-4 text-zinc-400 leading-relaxed">
            Every project starts with understanding the problem — the tech
            comes second.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {PILLARS.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="group bg-zinc-900 border border-zinc-800 rounded-2xl p-7 hover:border-blue-500 transition-colors duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-950 border border-blue-800 flex items-center justify-center mb-6 group-hover:bg-blue-900 transition-colors">
                  <Icon className="w-5 h-5 text-blue-400" />
                </div>

                <h3
                  className="text-lg font-semibold mb-3"
                  style={{ fontFamily: "'Clash Display', sans-serif" }}
                >
                  {pillar.title}
                </h3>

                <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                  {pillar.description}
                </p>

                <span
                  className="text-xs text-zinc-600 tracking-wide"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  {pillar.tags}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
