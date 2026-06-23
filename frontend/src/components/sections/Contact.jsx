import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Github, Linkedin, Mail } from "lucide-react";

const fontStyles = `
  @import url('https://api.fontshare.com/v2/css?f[]=clash-display@600,700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');
`;

const SOCIALS = [
  { label: "GitHub", icon: Github, href: "https://github.com/your-username" },
  { label: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/in/your-username" },
  { label: "Email", icon: Mail, href: "mailto:your@email.com" },
];

const FIELD_BASE =
  "w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-violet-600 transition-colors";

function Field({ label, error, children }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        className="text-xs text-zinc-500 tracking-wide"
        style={{ fontFamily: "'JetBrains Mono', monospace" }}
      >
        {label.toUpperCase()}
      </label>
      {children}
      {error && (
        <span className="text-xs text-red-400">{error}</span>
      )}
    </div>
  );
}

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  function validate() {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required.";
    if (!form.email.trim()) e.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Enter a valid email address.";
    if (!form.message.trim()) e.message = "Message is required.";
    else if (form.message.trim().length < 20)
      e.message = "Please write at least 20 characters.";
    return e;
  }

  async function handleSubmit() {
    const e = validate();
    if (Object.keys(e).length) { setErrors(e); return; }
    setErrors({});
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
    if (status !== "idle") setStatus("idle");
  }

  return (
    <section
      id="contact"
      className="bg-zinc-950 text-zinc-100 px-6 md:px-12 py-24 md:py-36"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <style>{fontStyles}</style>

      <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-12 md:gap-16 items-start">

        {/* left — heading + direct contact */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="md:col-span-5"
        >
          <span
            className="text-xs tracking-wide text-violet-400"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            CONTACT
          </span>
          <h2
            className="mt-4 text-3xl md:text-4xl font-semibold leading-tight tracking-tight"
            style={{ fontFamily: "'Clash Display', sans-serif" }}
          >
            Let's build something worth shipping.
          </h2>
          <p className="mt-4 text-zinc-400 leading-relaxed">
            Have a project in mind or want to talk scope? Fill in the form
            or reach out directly — I respond within 24 hours.
          </p>

          <div className="mt-10 space-y-4">
            <div>
              <span
                className="text-xs text-zinc-600 tracking-wide"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                DIRECT EMAIL
              </span>
              <a
                href="mailto:your@email.com"
                className="mt-1 block text-sm text-zinc-300 hover:text-violet-400 transition-colors"
              >
                your@email.com
              </a>
            </div>

            <div>
              <span
                className="text-xs text-zinc-600 tracking-wide"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                ELSEWHERE
              </span>
              <div className="mt-2 flex gap-3">
                {SOCIALS.map(({ label, icon: Icon, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-9 h-9 rounded-full bg-zinc-900 border border-zinc-800 hover:border-violet-600 hover:text-violet-400 flex items-center justify-center transition-colors"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* right — form */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.12 }}
          className="md:col-span-7"
        >
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-7 md:p-8 space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Name" error={errors.name}>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className={FIELD_BASE}
                />
              </Field>
              <Field label="Email" error={errors.email}>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className={FIELD_BASE}
                />
              </Field>
            </div>

            <Field label="Message" error={errors.message}>
              <textarea
                name="message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about your project — what it is, what problem it solves, and where you're at."
                className={`${FIELD_BASE} resize-none`}
              />
            </Field>

            <button
              onClick={handleSubmit}
              disabled={status === "sending" || status === "success"}
              className="w-full flex items-center justify-center gap-2 bg-violet-600 hover:bg-violet-500 disabled:opacity-50 disabled:cursor-not-allowed text-white text-sm font-medium px-5 py-3.5 rounded-xl transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-500"
            >
              {status === "sending" ? (
                <span className="animate-pulse">Sending…</span>
              ) : status === "success" ? (
                "Message sent — I'll be in touch."
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Send message
                </>
              )}
            </button>

            {status === "error" && (
              <p className="text-xs text-red-400 text-center">
                Something went wrong. Email me directly at{" "}
                <a
                  href="mailto:your@email.com"
                  className="underline hover:text-red-300"
                >
                  your@email.com
                </a>
              </p>
            )}
          </div>
        </motion.div>
      </div>

      {/* footer strip */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="max-w-6xl mx-auto mt-20 pt-8 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4"
      >
        <span
          className="text-xs text-zinc-700"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          © {new Date().getFullYear()} Imran. Built with React + Tailwind.
        </span>
        <a
          href="#"
          className="text-xs text-zinc-700 hover:text-zinc-400 transition-colors"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          BACK TO TOP ↑
        </a>
      </motion.div>
    </section>
  );
}
