import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { useToast } from "./Toast";

export default function CopyButton({
  value,
  label,
}: {
  value: string;
  label?: string;
}) {
  const { showToast } = useToast();
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      showToast("Copied to clipboard");
      window.setTimeout(() => setCopied(false), 1500);
    } catch {
      showToast("Couldn't copy — please copy manually");
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label={label ? `Copy ${label}` : "Copy to clipboard"}
      className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-300 hover:text-blue-400 border border-zinc-800 hover:border-blue-500 rounded-full px-3 py-1.5 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {copied ? (
        <>
          <Check className="w-3.5 h-3.5 text-blue-400" />
          Copied
        </>
      ) : (
        <>
          <Copy className="w-3.5 h-3.5" />
          Copy
        </>
      )}
    </button>
  );
}
