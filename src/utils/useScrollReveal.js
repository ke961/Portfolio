import { useEffect, useRef } from 'react';

/**
 * Custom hook for scroll-triggered reveal animations.
 * Returns a ref to attach to the element you want to animate.
 * 
 * @param {Object} options
 * @param {number} options.threshold - Visibility threshold (0-1)
 * @param {string} options.rootMargin - IntersectionObserver root margin
 * @param {boolean} options.once - Only animate once (don't re-hide)
 */
export function useScrollReveal({ threshold = 0.15, rootMargin = '0px 0px -60px 0px', once = true } = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('revealed');
          if (once) observer.unobserve(el);
        } else if (!once) {
          el.classList.remove('revealed');
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return ref;
}

/**
 * Hook that observes multiple children within a container
 * and staggers their reveal animations.
 */
export function useStaggerReveal({ threshold = 0.1, rootMargin = '0px 0px -40px 0px', staggerDelay = 100 } = {}) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const children = container.querySelectorAll('.stagger-item');
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Array.from(children).indexOf(entry.target);
            entry.target.style.transitionDelay = `${index * staggerDelay}ms`;
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin }
    );

    children.forEach((child) => observer.observe(child));
    return () => observer.disconnect();
  }, [threshold, rootMargin, staggerDelay]);

  return containerRef;
}
