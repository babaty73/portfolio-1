import { motion } from "framer-motion";
import {
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiVite,
  SiNodedotjs,
  SiExpress,
  SiJsonwebtokens,
  SiMongodb,
  SiMongoose,
  SiGit,
  SiGithub,
  SiPostman,
  SiVercel,
  SiRender,
  SiRailway,
} from "react-icons/si";
import { IoMailOutline, IoGlobeOutline, IoRocketOutline } from "react-icons/io5";
import { FiDatabase, FiTerminal } from "react-icons/fi";
import { VscCode } from "react-icons/vsc";

const TOOL_META = {
  React: { icon: SiReact, label: "React", color: "#61dafb" },
  TypeScript: { icon: SiTypescript, label: "TypeScript", color: "#3178c6" },
  "Tailwind CSS": { icon: SiTailwindcss, label: "Tailwind CSS", color: "#38b2ac" },
  Vite: { icon: SiVite, label: "Vite", color: "#646cff" },
  "Node.js": { icon: SiNodedotjs, label: "Node.js", color: "#339933" },
  Express: { icon: SiExpress, label: "Express", color: "#ffffff" },
  "REST API": { icon: FiTerminal, label: "REST API", color: "#61dafb" },
  "JWT Auth": { icon: SiJsonwebtokens, label: "JWT Auth", color: "#ffffff" },
  MongoDB: { icon: SiMongodb, label: "MongoDB", color: "#47a248" },
  Mongoose: { icon: FiDatabase, label: "Mongoose", color: "#e22e30" },
  Git: { icon: SiGit, label: "Git", color: "#f05032" },
  GitHub: { icon: SiGithub, label: "GitHub", color: "#ffffff" },
  Postman: { icon: SiPostman, label: "Postman", color: "#ff6c37" },
  "VS Code": { icon: VscCode, label: "VS Code", color: "#007acc" },
  Vercel: { icon: SiVercel, label: "Vercel", color: "#ffffff" },
  Render: { icon: SiRender, label: "Render", color: "#46e3b7" },
};

const GROUPS = [
  {
    layer: "Frontend",
    tools: ["React", "TypeScript", "Tailwind CSS", "Vite"],
  },
  {
    layer: "Backend",
    tools: ["Node.js", "Express", "REST API", "JWT Auth"],
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
    tools: ["Vercel", "Render"],
  },
];

export default function TechStackSection() {
  return (
    <section
      className="bg-zinc-950 text-zinc-100 px-6 md:px-12 py-24 md:py-32"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >

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
                {group.tools.map((tool) => {
                  const meta = TOOL_META[tool];
                  const Icon = meta?.icon || IoRocketOutline;
                  return (
                    <span
                      key={tool}
                      style={{ "--brand-color": meta?.color || "#3b82f6" }}
                      className="group inline-flex items-center gap-2 text-sm text-zinc-300 px-3 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 hover:border-[var(--brand-color)] hover:text-zinc-100 transition-all duration-300"
                    >
                      <Icon className="w-4 h-4 transition-colors duration-300 group-hover:text-[var(--brand-color)]" />
                      <span>{meta?.label || tool}</span>
                    </span>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
