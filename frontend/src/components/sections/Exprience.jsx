import { motion } from "framer-motion";
import {
  BriefcaseBusiness,
  Code2,
  GraduationCap,
  ArrowUpRight,
} from "lucide-react";

const EXPERIENCES = [
  {
    id: "freelance",
    period: "2026 — Present",
    role: "Freelance Web Developer",
    company: "Independent",
    icon: BriefcaseBusiness,
    description:
      "Building production-ready websites and web applications for businesses and real-world use cases.",
    highlights: [
      "Built and deployed full-stack applications using React, Node.js, Express, and MongoDB.",
      "Delivered Kemer Market, an e-commerce platform built around a real business workflow.",
      "Turned business requirements into responsive, functional web experiences.",
    ],
    stack: "React · TypeScript · Node.js · Express · MongoDB",
  },

  {
    id: "astumsj",
    period: "2026",
    role: "Full-Stack Developer",
    company: "ASTU MSJ Bootcamp",
    icon: Code2,
    description:
      "Collaborating on a Bootcamp management system designed to manage an entire bootcamp workflow.",
    highlights: [
      "Worked across authentication, attendance, assignments, submissions, grading, dashboards, and notifications.",
      "Implemented role-based workflows for administrators, mentors, and students.",
      "Worked with interconnected backend APIs, database models, validation, and access control.",
    ],
    stack: "React · Node.js · Express · MongoDB · JWT",
  },

  {
    id: "figma",
    period: "2026",
    role: "Frontend Developer",
    company: "Role-Based Management System",
    icon: Code2,
    description:
      "Converted a Figma design into a responsive, functional web application.",
    highlights: [
      "Translated visual designs into reusable React components.",
      "Focused on responsive layouts, consistent spacing, typography, and interactions.",
      "Bridged the gap between static design and a working product.",
    ],
    stack: "React · TypeScript · Tailwind CSS",
  },

  {
  id: "teaching",
  period: "2026",
  role: "Front-End Teacher",
  company: "Elevate Skill PLC",
  icon: GraduationCap,
  description:
    "Teaching practical frontend development and helping students build a strong foundation for real-world web development.",
  highlights: [
    "Taught HTML, CSS, JavaScript, React, and Tailwind CSS through practical lessons and projects.",
    "Reviewed student work and provided technical feedback to improve code and implementation.",
    "Guided students from frontend fundamentals to building complete, responsive web interfaces.",
  ],
  stack: "HTML · CSS · JavaScript · React · Tailwind CSS",
},
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="bg-zinc-950 text-zinc-100 px-6 md:px-12 py-24 md:py-36"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="max-w-xl mb-16 md:mb-20"
        >
          <span
            className="text-xs tracking-wide text-blue-400"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            EXPERIENCE
          </span>

          <h2
            className="mt-4 text-3xl md:text-4xl font-semibold leading-tight tracking-tight"
            style={{ fontFamily: "'Clash Display', sans-serif" }}
          >
            Building, learning, and shipping.
          </h2>

          <p className="mt-4 text-zinc-400 leading-relaxed">
            A growing body of experience across client work, collaborative
            products, frontend development, and teaching.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-zinc-800 md:left-[11px]" />

          <div className="space-y-12 md:space-y-16">
            {EXPERIENCES.map((experience, index) => {
              const Icon = experience.icon;

              return (
                <motion.article
                  key={experience.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.05,
                  }}
                  className="relative pl-8 md:pl-12"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-zinc-950 border border-zinc-700 flex items-center justify-center md:w-6 md:h-6">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                  </div>

                  <div className="grid md:grid-cols-12 gap-6 md:gap-10">
                    {/* Date */}
                    <div className="md:col-span-3">
                      <span
                        className="text-xs text-zinc-500 tracking-wide"
                        style={{
                          fontFamily: "'JetBrains Mono', monospace",
                        }}
                      >
                        {experience.period}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="md:col-span-9">
                      <div className="flex items-start gap-3">
                        <div className="mt-0.5 w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-4 h-4 text-blue-400" />
                        </div>

                        <div>
                          <h3
                            className="text-xl md:text-2xl font-semibold tracking-tight"
                            style={{
                              fontFamily: "'Clash Display', sans-serif",
                            }}
                          >
                            {experience.role}
                          </h3>

                          <p className="mt-1 text-sm text-zinc-500">
                            {experience.company}
                          </p>
                        </div>
                      </div>

                      <p className="mt-5 text-sm md:text-base text-zinc-400 leading-relaxed max-w-2xl">
                        {experience.description}
                      </p>

                      <ul className="mt-5 space-y-2.5">
                        {experience.highlights.map((highlight, i) => (
                          <li
                            key={i}
                            className="flex gap-3 text-sm text-zinc-400 leading-relaxed"
                          >
                            <span className="mt-2 w-1 h-1 rounded-full bg-zinc-600 flex-shrink-0" />
                            {highlight}
                          </li>
                        ))}
                      </ul>

                      <div className="mt-5 flex flex-wrap gap-2">
                        {experience.stack.split(" · ").map((tech) => (
                          <span
                            key={tech}
                            className="text-xs text-zinc-500 border border-zinc-800 bg-zinc-900/50 px-2.5 py-1.5 rounded-full"
                            style={{
                              fontFamily: "'JetBrains Mono', monospace",
                            }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
