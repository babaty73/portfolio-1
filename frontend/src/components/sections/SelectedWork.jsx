import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ArrowRight,
  ExternalLink,
  Link2,
  Backpack,
  Watch,
  KeyRound,
  BookOpen,
} from "lucide-react";

const fontStyles = `
  @import url('https://api.fontshare.com/v2/css?f[]=clash-display@600,700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');
`;

const PROJECTS = [
  {
    id: "booking",
    index: "01",
    variant: "calendar",
    image: "/assets/apointment.png",
    title: "Appointment Booking App",
    tagline: "Production-grade scheduling system for service businesses.",
    role: "Solo developer — full stack",
    type: "Full-stack web app",
    stack: "MongoDB · Express · React · Node",
    liveUrl: "https://your-live-demo-url.com",
    githubUrl: "https://github.com/your-username/appointment-booking-app",
    problem: {
      lead: "Manual scheduling doesn't scale.",
      points: [
        "Phone-based booking creates double-bookings with no audit trail.",
        "Spreadsheets break down past a handful of concurrent clients.",
      ],
    },
    approach: {
      lead: "Built in layers, validated at each step.",
      points: [
        "Auth and role separation shipped before any booking logic.",
        "Scheduling conflicts resolved server-side, never trusted to the client.",
      ],
    },
    solution: {
      lead: "A full MERN system with real access control.",
      points: [
        "Role-based dashboards for admins vs. clients.",
        "Slot availability computed and locked at the database layer.",
      ],
    },
    result: {
      lead: "A system that enforces its own rules at the data layer.",
      points: [
        "Slot conflicts are rejected via a uniqueness constraint in the schema, not just disabled in the UI — race conditions can't create double-bookings.",
        "Full lifecycle handled end to end: auth, role-based access, slot locking, confirmation, and admin management.",
      ],
    },
  },
  {
    id: "bloomcare",
    index: "02",
    variant: "comparison",
    image: "/assets/bloom-care-screenshot.png",
    title: "Bloom-care",
    tagline: "Real-time medicine availability and price comparison.",
    role: "Solo developer — frontend",
    type: "Search & comparison tool",
    stack: "React · TypeScript · Tailwind",
    liveUrl: "https://your-live-demo-url.com",
    githubUrl: "https://github.com/your-username/bloom-care",
    problem: {
      lead: "Medicine availability is invisible until you're at the counter.",
      points: [
        "No way to compare stock or price across nearby pharmacies first.",
        "Existing directories list pharmacies, not what they actually have.",
      ],
    },
    approach: {
      lead: "Optimized for one decision: where do I go?",
      points: [
        "Results ranked by availability and price, not just distance.",
        "Strict typing on pharmacy and medicine data models.",
      ],
    },
    solution: {
      lead: "A comparison-first search interface.",
      points: [
        "React + TypeScript frontend with type-safe data contracts.",
        "Tailwind UI optimized for fast scanning on mobile.",
      ],
    },
    result: {
      lead: "A tool that answers the actual question, end to end.",
      points: [
        "Strict TypeScript interfaces on pharmacy and medicine models caught data-shape mismatches at compile time, before they reached production.",
        "The comparison view collapses what used to be multiple phone calls into a single ranked result set.",
      ],
    },
  },
  {
    id: "lostfound",
    index: "03",
    variant: "listing",
    image: "/assets/lost-and-found.jpg",
    title: "Lost and Found System",
    tagline: "Digitizing a manual lost-and-found process for campus life.",
    role: "Solo developer — frontend",
    type: "Campus utility app",
    stack: "React · Tailwind",
    liveUrl: "https://your-live-demo-url.com",
    githubUrl: "https://github.com/your-username/lost-and-found-system",
    problem: {
      lead: "Manual lost-and-found loses items, not just records.",
      points: [
        "Paper logs and word-of-mouth mean reports go untracked.",
        "No searchable record once an item is logged.",
      ],
    },
    approach: {
      lead: "Designed for low-effort reporting.",
      points: [
        "Posting a found item takes under a minute, by design.",
        "Search built around plain-language queries, not rigid categories.",
      ],
    },
    solution: {
      lead: "A structured, searchable reporting platform.",
      points: [
        "React + Tailwind app for posting and browsing listings.",
        "Responsive layout for on-the-go reporting from a phone.",
      ],
    },
    result: {
      lead: "A structured system replacing an ad-hoc process.",
      points: [
        "Every report is timestamped and indexed, making historical search possible — something a paper log never supported.",
        "Consistent data shape across submissions means search and filtering work reliably, not just most of the time.",
      ],
    },
  },
];

function CalendarVisual() {
  const cols = ["M", "T", "W", "T", "F"];
  return (
    <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-4 w-48">
      <div className="flex gap-1.5 mb-3">
        {cols.map((d, i) => (
          <div
            key={i}
            className={`flex-1 text-center text-xs py-1.5 rounded ${
              i === 2 ? "bg-blue-600 text-white" : "bg-zinc-800 text-zinc-500"
            }`}
          >
            {d}
          </div>
        ))}
      </div>
      <div className="space-y-1.5">
        {[0, 1, 2].map((row) => (
          <div
            key={row}
            className={`h-5 rounded ${
              row === 1
                ? "bg-blue-950 border border-blue-700"
                : "bg-zinc-800"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

function ComparisonVisual() {
  const rows = [
    { level: "high", label: "In stock" },
    { level: "low", label: "Low stock" },
    { level: "high", label: "In stock" },
  ];
  return (
    <div className="w-56 space-y-2">
      {rows.map((r, i) => (
        <div
          key={i}
          className="flex items-center justify-between bg-zinc-950 border border-zinc-800 rounded-lg px-3 py-2.5"
        >
          <div className="h-2 w-20 bg-zinc-700 rounded-full" />
          <span
            className={`text-xs px-2 py-1 rounded-full ${
              r.level === "high"
                ? "bg-lime-950 text-lime-400"
                : "bg-zinc-800 text-zinc-500"
            }`}
          >
            {r.label}
          </span>
        </div>
      ))}
    </div>
  );
}

function ListingVisual() {
  const items = [
    { icon: Backpack, tag: "FOUND" },
    { icon: Watch, tag: "LOST" },
    { icon: KeyRound, tag: "FOUND" },
    { icon: BookOpen, tag: "LOST" },
  ];
  return (
    <div className="grid grid-cols-2 gap-2 w-56">
      {items.map((item, i) => {
        const Icon = item.icon;
        return (
          <div
            key={i}
            className="bg-zinc-950 border border-zinc-800 rounded-lg p-3 flex flex-col items-start gap-2"
          >
            <Icon className="w-4 h-4 text-zinc-500" />
            <span
              className={`text-xs tracking-wide ${
                item.tag === "FOUND" ? "text-lime-400" : "text-zinc-500"
              }`}
            >
              {item.tag}
            </span>
          </div>
        );
      })}
    </div>
  );
}

const VISUALS = {
  calendar: CalendarVisual,
  comparison: ComparisonVisual,
  listing: ListingVisual,
};

function ProjectVisual({ variant, image }) {
  const Visual = VISUALS[variant];
  return (
    <div className="relative w-full h-56 md:h-72 rounded-2xl bg-zinc-900 border border-zinc-800 overflow-hidden flex items-center justify-center">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(124,92,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(124,92,255,0.4) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      <div className="relative w-full h-full p-4 flex items-center justify-center">
        {image ? (
          <img
            src={image}
            alt=""
            className="w-full h-full object-cover object-top rounded-xl border border-zinc-800"
            loading="lazy"
          />
        ) : (
          <Visual />
        )}
      </div>
    </div>
  );
}

function ModalSection({ label, data, accent }) {
  return (
    <div className={`border-l-2 ${accent} pl-4`}>
      <span
        className="text-xs text-zinc-500 tracking-wide"
        style={{ fontFamily: "'JetBrains Mono', monospace" }}
      >
        {label.toUpperCase()}
      </span>
      <p className="mt-1.5 text-sm font-semibold text-zinc-50">{data.lead}</p>
      <ul className="mt-2 space-y-1.5">
        {data.points.map((point, i) => (
          <li key={i} className="flex gap-2 text-sm text-zinc-400 leading-relaxed">
            <span className="mt-2 w-1 h-1 rounded-full bg-zinc-600 flex-shrink-0" />
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm px-4 py-8"
    >
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 10, scale: 0.98 }}
        transition={{ duration: 0.25 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl max-h-full overflow-y-auto bg-zinc-900 border border-zinc-800 rounded-2xl p-7 md:p-10"
      >
        <button
          onClick={onClose}
          aria-label="Close case study"
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-zinc-800 hover:bg-zinc-700 flex items-center justify-center transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-500"
        >
          <X className="w-4 h-4 text-zinc-300" />
        </button>

        <span
          className="text-xs text-blue-400 tracking-wide"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          CASE STUDY — {project.index}
        </span>

        <h3
          className="mt-3 text-2xl md:text-3xl font-semibold tracking-tight"
          style={{ fontFamily: "'Clash Display', sans-serif" }}
        >
          {project.title}
        </h3>

        <p className="mt-2 text-zinc-400">{project.tagline}</p>

        <div className="mt-5 flex flex-wrap gap-3">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium px-4 py-2.5 rounded-full transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
          >
            <ExternalLink className="w-4 h-4" />
            Live Demo
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-zinc-800 hover:border-zinc-600 text-zinc-200 text-sm font-medium px-4 py-2.5 rounded-full transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-500"
          >
            <Link2 className="w-4 h-4" />
            View Code
          </a>
        </div>

        <div className="mt-6 grid grid-cols-3 gap-4 border-t border-b border-zinc-800 py-4">
          {[
            { label: "ROLE", value: project.role },
            { label: "TYPE", value: project.type },
            { label: "STACK", value: project.stack },
          ].map((meta) => (
            <div key={meta.label}>
              <span
                className="text-xs text-zinc-600 tracking-wide"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                {meta.label}
              </span>
              <p className="mt-1 text-xs text-zinc-300 leading-snug">
                {meta.value}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 space-y-8">
          <ModalSection label="Problem" data={project.problem} accent="border-zinc-700" />
          <ModalSection label="Approach" data={project.approach} accent="border-blue-800" />
          <ModalSection label="Solution" data={project.solution} accent="border-blue-600" />
          <ModalSection label="Result" data={project.result} accent="border-lime-700" />
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function SelectedWorkSection() {
  const [activeId, setActiveId] = useState(null);
  const activeProject = PROJECTS.find((p) => p.id === activeId) || null;

  return (
    <section
      id="work"
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
            SELECTED WORK
          </span>
          <h2
            className="mt-4 text-3xl md:text-4xl font-semibold leading-tight tracking-tight"
            style={{ fontFamily: "'Clash Display', sans-serif" }}
          >
            A few problems I've solved.
          </h2>
          <p className="mt-4 text-zinc-400 leading-relaxed">
            Each one started as a real workflow problem, not a tutorial.
            Open any case study for the full breakdown.
          </p>
        </motion.div>

        <div className="space-y-16 md:space-y-24">
          {PROJECTS.map((project, i) => {
            const reversed = i % 2 === 1;

            const visual = (
              <div className="md:col-span-7">
                <div className="transition-transform duration-300 group-hover:scale-[1.02]">
                  <ProjectVisual variant={project.variant} image={project.image} />
                </div>
              </div>
            );

            const text = (
              <div className="md:col-span-5">
                <span
                  className="text-xs text-zinc-600 tracking-wide"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  CASE STUDY — {project.index}
                </span>
                <h3
                  className="mt-3 text-2xl font-semibold tracking-tight group-hover:text-blue-400 transition-colors"
                  style={{ fontFamily: "'Clash Display', sans-serif" }}
                >
                  {project.title}
                </h3>
                <p className="mt-3 text-zinc-400 leading-relaxed">
                  {project.tagline}
                </p>
                <span
                  className="mt-5 inline-block text-xs text-zinc-600 tracking-wide"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  {project.stack}
                </span>
                <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-blue-400">
                  View case study
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            );

            return (
              <motion.button
                key={project.id}
                onClick={() => setActiveId(project.id)}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
                className="w-full grid md:grid-cols-12 gap-8 items-center text-left group focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-500 rounded-2xl"
              >
                {reversed ? (
                  <>
                    {text}
                    {visual}
                  </>
                ) : (
                  <>
                    {visual}
                    {text}
                  </>
                )}
              </motion.button>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {activeProject && (
          <ProjectModal
            project={activeProject}
            onClose={() => setActiveId(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
