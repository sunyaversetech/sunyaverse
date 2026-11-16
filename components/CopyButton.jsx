"use client";

import { useState } from "react";

export default function CopyButton({ text }) {
  const [label, setLabel] = useState("Copy");

  async function copy() {
    try {
      await navigator.clipboard.writeText(text);
      setLabel("Copied");
    } catch {
      // Older browsers: fall back to a hidden textarea.
      const t = document.createElement("textarea");
      t.value = text;
      t.setAttribute("readonly", "");
      t.style.position = "absolute";
      t.style.left = "-9999px";
      document.body.appendChild(t);
      t.select();
      const ok = document.execCommand && document.execCommand("copy");
      document.body.removeChild(t);
      setLabel(ok ? "Copied" : "Press Ctrl+C");
    }
    setTimeout(() => setLabel("Copy"), 1800);
  }

  return (
    <button className="copy" type="button" onClick={copy} aria-label={`Copy ${text}`}>
      {label}
    </button>
  );
}
