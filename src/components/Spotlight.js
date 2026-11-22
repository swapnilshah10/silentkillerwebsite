"use client";
import { useEffect } from "react";

// Feeds the pointer position (relative to the hovered card) into CSS variables,
// so the card's radial "spotlight" and conic border can follow the cursor.
export default function Spotlight() {
  useEffect(() => {
    const onMove = (e) => {
      const card = e.target instanceof Element ? e.target.closest(".vcard") : null;
      if (!card) return;
      const r = card.getBoundingClientRect();
      card.style.setProperty("--x", `${e.clientX - r.left}px`);
      card.style.setProperty("--y", `${e.clientY - r.top}px`);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);
  return null;
}
