import { motion } from "framer-motion";
import { ExternalLink, QrCode } from "lucide-react";
import CopyButton from "../ui/CopyButton";
import { localSupport, internationalSupport } from "../../data/supportDetails";

function LocalCard({
  method,
  index,
}: {
  method: (typeof localSupport)[number];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 md:p-7"
    >
      <h3
        className="text-lg font-semibold tracking-tight"
        style={{ fontFamily: "'Clash Display', sans-serif" }}
      >
        {method.name}
      </h3>
      <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
        {method.description}
      </p>

      <div className="mt-5 space-y-3">
        {method.fields.map((field) => (
          <div
            key={field.label}
            className="flex items-center justify-between gap-3 rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3"
          >
            <div className="min-w-0">
              <span
                className="text-xs text-zinc-600 tracking-wide block"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                {field.label.toUpperCase()}
              </span>
              <span className="text-sm text-zinc-200 break-all">
                {field.value}
              </span>
            </div>
            <CopyButton value={field.value} label={field.label} />
          </div>
        ))}
      </div>

      {method.hasQrCode && (
        <div className="mt-5 flex items-center gap-2 text-xs text-zinc-600">
          <QrCode className="w-4 h-4" />
          <span style={{ fontFamily: "'JetBrains Mono', monospace" }}>
            QR CODE — TO BE ADDED
          </span>
        </div>
      )}
    </motion.div>
  );
}

function InternationalCard({
  option,
  index,
}: {
  option: (typeof internationalSupport)[number];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 md:p-7 flex flex-col"
    >
      <h3
        className="text-lg font-semibold tracking-tight"
        style={{ fontFamily: "'Clash Display', sans-serif" }}
      >
        {option.name}
      </h3>
      <p className="mt-2 text-sm text-zinc-400 leading-relaxed flex-1">
        {option.description}
      </p>

      <a
        href={option.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Learn more about ${option.name} (opens in a new tab)`}
        className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 rounded self-start"
      >
        Learn More
        <ExternalLink className="w-3.5 h-3.5" />
      </a>
    </motion.div>
  );
}

export default function SupportOptions() {
  return (
    <section
      id="support-options"
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
            SUPPORT OPTIONS
          </span>
          <h2
            className="mt-4 text-3xl md:text-4xl font-semibold leading-tight tracking-tight"
            style={{ fontFamily: "'Clash Display', sans-serif" }}
          >
            Ways You Can Support
          </h2>
        </motion.div>

        {/* Ethiopia */}
        <div className="mb-16">
          <span
            className="text-xs tracking-wide text-zinc-500"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            SUPPORT FROM ETHIOPIA
          </span>
          <div className="mt-5 grid sm:grid-cols-2 gap-6">
            {localSupport.map((method, i) => (
              <LocalCard key={method.id} method={method} index={i} />
            ))}
          </div>
        </div>

        {/* International */}
        <div>
          <span
            className="text-xs tracking-wide text-zinc-500"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            INTERNATIONAL SUPPORT
          </span>
          <p className="mt-3 text-sm text-zinc-400 max-w-2xl leading-relaxed">
            If you're outside Ethiopia, you can use an international
            money-transfer service to send support to my Ethiopian account,
            depending on the services available in your country.
          </p>

          <div className="mt-5 grid sm:grid-cols-2 gap-6">
            {internationalSupport.map((option, i) => (
              <InternationalCard key={option.id} option={option} index={i} />
            ))}
          </div>

          <p className="mt-6 text-xs text-zinc-600 max-w-2xl leading-relaxed">
            Availability, fees, exchange rates, transfer limits, and
            receiving requirements may vary depending on the sender's
            country and the payment provider.
          </p>
        </div>
      </div>
    </section>
  );
}
