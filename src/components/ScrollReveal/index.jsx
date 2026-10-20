import { useEffect } from "react";

const revealSelector = ".notBanner, .blog, .bg, .faqItems > div";

export function ScrollReveal() {
  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const targets = new WeakSet();
    let observer;

    const observeTargets = (root) => {
      if (reducedMotion) return;
      const elements = [];
      if (root instanceof Element && root.matches(revealSelector)) elements.push(root);
      if (root.querySelectorAll) elements.push(...root.querySelectorAll(revealSelector));
      elements.forEach((element) => {
        if (targets.has(element)) return;
        targets.add(element);
        observer.observe(element);
      });
    };

    if (!reducedMotion && "IntersectionObserver" in window) {
      const appRoot = document.getElementById("root");
      appRoot.classList.add("reveal-ready");
      observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.08, rootMargin: "0px 0px -32px 0px" });

      observeTargets(document);
      const mutations = new MutationObserver((records) => {
        records.forEach(({ addedNodes }) => {
          addedNodes.forEach((node) => {
            if (node instanceof Element) observeTargets(node);
          });
        });
      });
      mutations.observe(document.getElementById("root"), { childList: true, subtree: true });

      return () => {
        mutations.disconnect();
        observer.disconnect();
      };
    }
  }, []);

  return null;
}
