"use client";
import { useEffect } from "react";

/** Fades sections in as they scroll into view. */
export default function RevealObserver() {
  useEffect(() => {
    const els = document.querySelectorAll(".fade");
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("in")),
      { threshold: 0.15 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  return null;
}
