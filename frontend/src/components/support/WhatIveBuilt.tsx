import { motion } from "framer-motion";
import { ExternalLink, Link2 } from "lucide-react";
import { supportProjects } from "../../data/supportProjects";

export default function WhatIveBuilt() {
  return (
    <section
      id="what-ive-built"
      className="px-6 md:px-12 py-20 md:py-28 border-t border-zinc-900"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="max-w-xl mb-12 md:mb-16"
        >
          <span
            className="text-xs tracking-wide text-blue-400"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            WHAT I'VE BUILT
          </span>
          <h2
            className="mt-4 text-3xl md:text-4xl font-semibold leading-tight tracking-tight"
            style={{ fontFamily: "'Clash Display', sans-serif" }}
          >
            Built on this exact machine.
          </h2>
          <p className="mt-4 text-zinc-400 leading-relaxed">
            A few of the real, deployed projects made possible with the
            hardware I currently have.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {supportProjects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-2xl border border-zinc-800 bg-zinc-900 overflow-hidden flex flex-col"
            >
              <div className="aspect-video w-full overflow-hidden bg-zinc-950">
                <img
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              <div className="p-5 flex flex-col flex-1">
                <h3
                  className="text-lg font-semibold tracking-tight"
                  style={{ fontFamily: "'Clash Display', sans-serif" }}
                >
                  {project.title}
                </h3>
                <p className="mt-2 text-sm text-zinc-400 leading-relaxed flex-1">
                  {project.tagline}
                </p>
                <span
                  className="mt-4 text-xs text-zinc-600 tracking-wide"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  {project.stack}
                </span>

                <div className="mt-4 flex flex-wrap gap-3">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-blue-400 hover:text-blue-300 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 rounded"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    Live Demo
                  </a>
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-400 hover:text-zinc-200 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-500 rounded"
                    >
                      <Link2 className="w-3.5 h-3.5" />
                      View Code
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
