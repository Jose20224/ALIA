"use client";

import { useEffect } from "react";

export default function RevealAnimations() {
  useEffect(() => {
    const items = Array.from(
      document.querySelectorAll<HTMLElement>(".reveal")
    );

    if (!items.length) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      items.forEach((item) => item.classList.add("is-visible"));
      return;
    }

    const groups = new Map<Element | null, HTMLElement[]>();

    items.forEach((item) => {
      const parent = item.parentElement;
      const group = groups.get(parent) ?? [];
      group.push(item);
      groups.set(parent, group);
    });

    groups.forEach((group) => {
      group.forEach((item, index) => {
        item.style.setProperty(
          "--reveal-delay",
          `${Math.min(index, 5) * 70}ms`
        );
      });
    });

    const observer = new IntersectionObserver(
      (entries, currentObserver) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          entry.target.classList.add("is-visible");
          currentObserver.unobserve(entry.target);
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return null;
}