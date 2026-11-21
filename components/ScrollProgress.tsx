"use client";

import { useEffect, useState } from "react";

// Thin accent bar at the top that fills as you scroll.
export default function ScrollProgress() {
  const [p, setP] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setP(max > 0 ? h.scrollTop / max : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="fixed left-0 top-0 z-30 h-0.5 origin-left bg-accent"
      style={{ width: "100%", transform: `scaleX(${p})` }}
    />
  );
}
