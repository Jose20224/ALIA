"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

type RevealElement = HTMLElement & {
  dataset: DOMStringMap;
};

export default function RevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    let cancelled = false;
    let observer: IntersectionObserver | null = null;

    const animateElement = (
      element: RevealElement,
      delay = 0,
      direction: "up" | "left" | "right" = "up"
    ) => {
      if (cancelled) return;

      // Evitamos animarlo más de una vez.
      if (element.dataset.revealed === "true") return;

      element.dataset.revealed = "true";

      let fromTransform = "translate3d(0, 24px, 0)";

      if (direction === "left") {
        fromTransform = "translate3d(-28px, 0, 0)";
      }

      if (direction === "right") {
        fromTransform = "translate3d(28px, 0, 0)";
      }

      element.animate(
        [
          {
            opacity: 0,
            transform: fromTransform,
          },
          {
            opacity: 1,
            transform: "translate3d(0, 0, 0)",
          },
        ],
        {
          duration: 700,
          delay,
          easing: "cubic-bezier(0.22, 1, 0.36, 1)",
          fill: "both",
        }
      );
    };

    const initializePage = () => {
      if (cancelled) return;

      const elements = Array.from(
        document.querySelectorAll<RevealElement>(".reveal")
      );

      if (!elements.length) return;

      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      /*
       * Limpiamos el estado de la ruta anterior.
       */
      elements.forEach((element) => {
        delete element.dataset.revealed;
      });

      if (reduceMotion) {
        elements.forEach((element) => {
          element.dataset.revealed = "true";
          element.style.opacity = "1";
          element.style.transform = "none";
        });

        return;
      }

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;

            const element = entry.target as RevealElement;

            const index = elements.indexOf(element);
            const delay = Math.min(Math.max(index, 0) * 70, 420);

            let direction: "up" | "left" | "right" = "up";

            if (element.classList.contains("reveal-left")) {
              direction = "left";
            }

            if (element.classList.contains("reveal-right")) {
              direction = "right";
            }

            animateElement(element, delay, direction);
            observer?.unobserve(element);
          });
        },
        {
          threshold: 0.08,
          rootMargin: "0px 0px -40px 0px",
        }
      );

      /*
       * Observamos todos los elementos.
       */
      elements.forEach((element) => observer?.observe(element));

      /*
       * Los elementos que ya están visibles al entrar en la página
       * se animan inmediatamente.
       */
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          if (cancelled) return;

          elements.forEach((element, index) => {
            if (element.dataset.revealed === "true") return;

            const rect = element.getBoundingClientRect();

            const visible =
              rect.top < window.innerHeight &&
              rect.bottom > 0;

            if (!visible) return;

            let direction: "up" | "left" | "right" = "up";

            if (element.classList.contains("reveal-left")) {
              direction = "left";
            }

            if (element.classList.contains("reveal-right")) {
              direction = "right";
            }

            animateElement(
              element,
              Math.min(index * 70, 420),
              direction
            );

            observer?.unobserve(element);
          });
        });
      });
    };

    /*
     * Damos tiempo a Next.js para montar la nueva página.
     */
    const timer = window.setTimeout(initializePage, 40);

    return () => {
      cancelled = true;
      window.clearTimeout(timer);
      observer?.disconnect();
    };
  }, [pathname]);

  return null;
}