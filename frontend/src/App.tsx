import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

// Section components
import Hero from "./components/sections/Hero";
import WhatIDo from "./components/sections/WhatIDo";
import SelectedWork from "./components/sections/SelectedWork";
import Process from "./components/sections/Process";
import TechStack from "./components/sections/TechStack";
import About from "./components/sections/About";
import Contact from "./components/sections/Contact";

const fontStyles = `
  @import url('https://api.fontshare.com/v2/css?f[]=clash-display@600,700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');
`;

const NAV_LINKS = [
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const SECTION_IDS = ["work", "process", "about", "contact"];

function useActiveSection() {
  const [active, setActive] = useState("");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        { rootMargin: "-40% 0px -55% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return active;
}

function useScrolled(threshold = 24) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > threshold);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, [threshold]);
  return scrolled;
}

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const active = useActiveSection();
  const scrolled = useScrolled();

  function handleNavClick(href: string) {
    setMobileOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-zinc-950/90 backdrop-blur-md border-b border-zinc-900"
            : "bg-transparent"
        }`}
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16">
          {/* logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-lg font-semibold tracking-tight focus-visible:outline focus-visible:outline-2 focus-visible:outline-violet-500 rounded"
            style={{ fontFamily: "'Clash Display', sans-serif" }}
          >
            Imran<span className="text-violet-400">.</span>
          </button>

          {/* desktop nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm">
            {NAV_LINKS.map(({ label, href }) => {
              const id = href.replace("#", "");
              return (
                <button
                  key={href}
                  onClick={() => handleNavClick(href)}
                  className={`transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-violet-500 rounded ${
                    active === id
                      ? "text-zinc-100"
                      : "text-zinc-500 hover:text-zinc-300"
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </nav>

          {/* desktop cta */}
          <button
            onClick={() => handleNavClick("#contact")}
            className="hidden md:inline-flex text-sm font-medium px-4 py-2 rounded-full border border-zinc-800 hover:border-violet-500 hover:text-violet-400 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-violet-500"
          >
            Get in touch
          </button>

          {/* mobile hamburger */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            className="md:hidden w-9 h-9 flex items-center justify-center rounded-full border border-zinc-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-violet-500"
          >
            {mobileOpen ? (
              <X className="w-4 h-4" />
            ) : (
              <Menu className="w-4 h-4" />
            )}
          </button>
        </div>
      </header>

      {/* mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 z-30 bg-zinc-950 border-b border-zinc-900 px-6 py-6 flex flex-col gap-5 md:hidden"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {NAV_LINKS.map(({ label, href }) => (
              <button
                key={href}
                onClick={() => handleNavClick(href)}
                className="text-left text-base text-zinc-300 hover:text-violet-400 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-violet-500 rounded"
              >
                {label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick("#contact")}
              className="mt-2 w-full text-center text-sm font-medium px-4 py-3 rounded-full bg-violet-600 hover:bg-violet-500 text-white transition-colors"
            >
              Get in touch
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default function App() {
  return (
    <div className="bg-zinc-950 min-h-screen text-zinc-100 antialiased">
      <style>{fontStyles}</style>
      <Navbar />
      <main>
        <Hero />
        <WhatIDo />
        <SelectedWork />
        <Process />
        <TechStack />
        <About />
        <Contact />
      </main>
    </div>
  );
}
