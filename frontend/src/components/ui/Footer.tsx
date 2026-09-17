import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="max-w-6xl mx-auto px-6 md:px-12 mt-4 pt-8 pb-16 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4"
    >
      <span
        className="text-xs text-zinc-700"
        style={{ fontFamily: "'JetBrains Mono', monospace" }}
      >
        © {new Date().getFullYear()} Imran. Built with React + Tailwind.
      </span>

      <div className="flex items-center gap-5">
        <Link
          to="/support"
          className="text-xs text-zinc-700 hover:text-blue-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-500 rounded"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          SUPPORT
        </Link>
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="text-xs text-zinc-700 hover:text-zinc-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-500 rounded"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          BACK TO TOP ↑
        </a>
      </div>
    </motion.div>
  );
}
