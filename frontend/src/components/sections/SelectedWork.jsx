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

const PROJECTS = [
  {
    id: "kemer",
    index: "01",
    variant: "listing",
    image: "/assets/kemer-shopping.png",
    title: "Kemer Market",
    tagline: "A production e-commerce platform built for a real business.",
    role: "Solo developer — full stack",
    type: "E-commerce platform",
    stack: "React · TypeScript · Node · Express · MongoDB",
    liveUrl: "https://kemer-shopping.vercel.app",
    githubUrl: "https://github.com/babaty73/Qemer-shopping",
    problem: {
      lead: "A local business needed a better way to present and sell its products online.",
      points: [
        "Customers needed a simple mobile-first way to browse products.",
        "The business needed product management without requiring a developer.",
      ],
    },
    approach: {
      lead: "Built the storefront and management system as one connected application.",
      points: [
        "Designed the customer experience around fast product discovery.",
        "Built the backend API, database, authentication, and admin workflow.",
      ],
    },
    solution: {
      lead: "A full-stack e-commerce catalog with a dedicated admin dashboard.",
      points: [
        "Product management, image uploads, search, categories, and cart functionality.",
        "Orders connect customers directly to the business through WhatsApp and Telegram.",
      ],
    },
    result: {
      lead: "A real business platform deployed and ready for customers.",
      points: [
        "Frontend deployed on Vercel with a production backend and MongoDB database.",
        "Built with a scalable structure that can support future e-commerce features.",
      ],
    },
  },

  {
    id: "astumsj",
    index: "02",
    variant: "calendar",
    image: "/assets/astu-bootcamp.png",
    title: "ASTU MSJ Bootcamp Management System",
    tagline: "A role-based platform for managing an entire bootcamp workflow.",
    role: "Collaborative development — full stack",
    type: "Management system",
    stack: "React · Node · Express · MongoDB · JWT",
    liveUrl: "https://astumsj-bootcamp-management-system.vercel.app",
    githubUrl: "https://github.com/babaty73/ASTUMSJ-Bootcamp-dev",
    problem: {
      lead: "Managing a bootcamp across disconnected processes creates unnecessary work.",
      points: [
        "Students, mentors, and administrators need different access and workflows.",
        "Attendance, assignments, grading, announcements, and progress need to work together.",
      ],
    },
    approach: {
      lead: "Built the application around role-based workflows and connected modules.",
      points: [
        "Separated permissions and experiences for admins, mentors, and students.",
        "Integrated modules so actions in one area can affect related workflows.",
      ],
    },
    solution: {
      lead: "A centralized management system covering the bootcamp lifecycle.",
      points: [
        "Authentication, attendance, assignments, submissions, grading, and leaderboards.",
        "Announcements, notifications, calendar events, dashboards, reports, and resources.",
      ],
    },
    result: {
      lead: "A large collaborative system replacing fragmented bootcamp management.",
      points: [
        "Multiple roles can work inside the same application with controlled access.",
        "Built with real-world workflows, validation, and interconnected data.",
      ],
    },
  },

  {
    id: "role-management",
    index: "03",
    variant: "listing",
    image: "/assets/role-management-system.png",
    title: "Role-Based Management System",
    tagline: "Turning a Figma design into a fully working web application.",
    role: "Frontend developer",
    type: "Figma-to-code implementation",
    stack: "React · TypeScript · Tailwind CSS",
    liveUrl: "https://role-managements-system.vercel.app",
    githubUrl:
      "https://github.com/babaty73/ASTUMSJ-Bootcamp-dev/tree/main/role-management-system",
    problem: {
      lead: "A polished design is only the starting point of a real product.",
      points: [
        "Static Figma screens needed to become functional user interfaces.",
        "The implementation had to preserve the intended visual design across screen sizes.",
      ],
    },
    approach: {
      lead: "Translated the design system into reusable React components.",
      points: [
        "Recreated layouts, spacing, typography, and interactions from the Figma design.",
        "Built responsive components instead of treating each screen as a separate page.",
      ],
    },
    solution: {
      lead: "A functional management interface based directly on the provided design.",
      points: [
        "Implemented navigation, layouts, reusable UI components, and interactive states.",
        "Optimized the interface for desktop and responsive screen sizes.",
      ],
    },
    result: {
      lead: "A real working application from a static design.",
      points: [
        "Demonstrates the ability to move from Figma concepts to production-ready interfaces.",
        "Focuses on both visual accuracy and functional user experience.",
      ],
    },
  },

  {
    id: "bloomcare",
    index: "04",
    variant: "comparison",
    image: "/assets/bloom-care-screenshot.png",
    title: "Bloom-Care",
    tagline: "Helping people find medicines available at nearby pharmacies.",
    role: "Solo developer — full stack",
    type: "Healthcare discovery platform",
    stack: "React · TypeScript · Node · Express · MongoDB",
    liveUrl: "https://bloom-cares.vercel.app",
    githubUrl: "https://github.com/babaty73/bloom-care",
    problem: {
      lead: "Finding a medicine shouldn't require visiting multiple pharmacies.",
      points: [
        "People often don't know which nearby pharmacy has a medicine in stock.",
        "Comparing availability and prices manually is slow and inconvenient.",
      ],
    },
    approach: {
      lead: "Designed the experience around one question: where can I find it?",
      points: [
        "Focused the interface on medicine search and pharmacy comparison.",
        "Structured information around availability, price, and location.",
      ],
    },
    solution: {
      lead: "A comparison-first medicine discovery platform.",
      points: [
        "Search medicines and compare pharmacy availability and pricing.",
        "Location-aware pharmacy discovery helps users find relevant nearby options.",
      ],
    },
    result: {
      lead: "A product concept focused on solving a real local problem.",
      points: [
        "Built with a type-safe React and TypeScript frontend.",
        "Designed to make pharmacy discovery faster and more informed.",
      ],
    },
  },

  {
    id: "booking",
    index: "05",
    variant: "calendar",
    image: "/assets/apointment.png",
    title: "Appointment Booking App",
    tagline: "A full-stack scheduling system for managing appointments.",
    role: "Solo developer — full stack",
    type: "Scheduling platform",
    stack: "MongoDB · Express · React · Node",
    liveUrl: "https://appointment-booking-app11.vercel.app",
    githubUrl: "https://github.com/babaty73/appointment-booking-app",
    problem: {
      lead: "Manual scheduling makes conflicts and poor organization almost inevitable.",
      points: [
        "Phone-based booking provides no reliable scheduling workflow.",
        "Clients and administrators need different capabilities.",
      ],
    },
    approach: {
      lead: "Built the scheduling rules into the application itself.",
      points: [
        "Authentication and role separation were established before booking logic.",
        "Availability and conflicts are validated server-side.",
      ],
    },
    solution: {
      lead: "A complete MERN appointment management system.",
      points: [
        "Role-based dashboards for administrators and clients.",
        "Booking, availability, confirmation, and management workflows.",
      ],
    },
    result: {
      lead: "A system that enforces scheduling rules instead of relying on the UI.",
      points: [
        "Server-side validation prevents conflicting appointments.",
        "The complete booking lifecycle is handled inside one application.",
      ],
    },
  },

  {
    id: "lostfound",
    index: "06",
    variant: "listing",
    image: "/assets/lost-and-found.jpg",
    title: "Lost and Found System",
    tagline: "Digitizing a manual lost-and-found process for campus life.",
    role: "Solo developer — full stack",
    type: "Campus utility app",
    stack: "React · Tailwind · Node · Express · MongoDB",
    liveUrl: "https://lost-and-found-six-theta.vercel.app",
    githubUrl: "https://github.com/babaty73/lost-and-found",
    problem: {
      lead: "Paper-based lost-and-found processes are difficult to search and maintain.",
      points: [
        "Reports can become scattered across messages and physical records.",
        "Students need a simple way to discover matching lost or found items.",
      ],
    },
    approach: {
      lead: "Designed the experience around quick reporting and discovery.",
      points: [
        "Made reporting simple enough to complete from a phone.",
        "Structured listings so users can search and filter relevant items.",
      ],
    },
    solution: {
      lead: "A centralized platform for reporting and finding lost items.",
      points: [
        "Users can create, browse, search, and manage listings.",
        "Responsive interface designed for everyday campus use.",
      ],
    },
    result: {
      lead: "A structured digital alternative to an informal process.",
      points: [
        "Reports are stored in a searchable database instead of scattered records.",
        "The platform makes it easier to connect lost items with their owners.",
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
              i === 2
                ? "bg-blue-600 text-white"
                : "bg-zinc-800 text-zinc-500"
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
                item.tag === "FOUND"
                  ? "text-lime-400"
                  : "text-zinc-500"
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

function ProjectVisual({ variant, image, title }) {
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
            alt={`${title} project screenshot`}
            className="w-full h-full object-cover object-top rounded-xl border border-zinc-800"
            loading="lazy"
          />
        ) : Visual ? (
          <Visual />
        ) : null}
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

      <p className="mt-1.5 text-sm font-semibold text-zinc-50">
        {data.lead}
      </p>

      <ul className="mt-2 space-y-1.5">
        {data.points.map((point, i) => (
          <li
            key={i}
            className="flex gap-2 text-sm text-zinc-400 leading-relaxed"
          >
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
    const onKey = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

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

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-zinc-800 hover:border-zinc-600 text-zinc-200 text-sm font-medium px-4 py-2.5 rounded-full transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-500"
            >
              <Link2 className="w-4 h-4" />
              View Code
            </a>
          )}
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
          <ModalSection
            label="Problem"
            data={project.problem}
            accent="border-zinc-700"
          />

          <ModalSection
            label="Approach"
            data={project.approach}
            accent="border-blue-800"
          />

          <ModalSection
            label="Solution"
            data={project.solution}
            accent="border-blue-600"
          />

          <ModalSection
            label="Result"
            data={project.result}
            accent="border-lime-700"
          />
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function SelectedWorkSection() {
  const [activeId, setActiveId] = useState(null);

  const activeProject =
    PROJECTS.find((project) => project.id === activeId) || null;

  return (
    <section
      id="work"
      className="bg-zinc-950 text-zinc-100 px-6 md:px-12 py-24 md:py-36"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
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
                  <ProjectVisual
                    variant={project.variant}
                    image={project.image}
                    title={project.title}
                  />
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
