"use client";

import { useState } from "react";

export default function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
    } catch {
      // Fallback for older browsers
      const t = document.createElement("textarea");
      t.value = email;
      document.body.appendChild(t);
      t.select();
      document.execCommand("copy");
      t.remove();
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={copy}
      className="rounded-lg border border-zinc-300 px-6 py-3 font-semibold text-zinc-900 transition hover:border-accent hover:text-accent dark:border-zinc-700 dark:text-zinc-100"
    >
      {copied ? "Copied ✓" : "Copy email"}
    </button>
  );
}
