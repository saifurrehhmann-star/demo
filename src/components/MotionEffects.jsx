import { useEffect } from 'react';

const MOTION_CARDS = '[class*="rounded-3xl"][class*="border"], [class*="rounded-2xl"][class*="border"], [data-motion-card], .card-clean';
const MOTION_TARGETS = `main section, ${MOTION_CARDS}`;

export default function MotionEffects() {
  useEffect(() => {
    const targets = new Set();
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(({ isIntersecting, target }) => {
        if (!isIntersecting) return;
        target.classList.add('motion-visible');
        observer.unobserve(target);
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

    const observeElements = (root) => {
      if (root.nodeType !== Node.ELEMENT_NODE && root.nodeType !== Node.DOCUMENT_NODE) return;
      if (root.matches?.(MOTION_TARGETS)) targets.add(root);
      root.querySelectorAll?.(MOTION_TARGETS).forEach((element) => targets.add(element));
      targets.forEach((element) => {
        if (element.isConnected && !element.classList.contains('motion-visible')) {
          element.classList.add('motion-target');
          if (element.matches(MOTION_CARDS)) {
            element.classList.add('motion-hover-card');
            element.querySelectorAll('img').forEach((image) => image.classList.add('motion-image'));
          }
          observer.observe(element);
        }
        else targets.delete(element);
      });
    };

    observeElements(document);
    const mutations = new MutationObserver((records) => {
      records.forEach((record) => record.addedNodes.forEach(observeElements));
    });
    mutations.observe(document.getElementById('root') ?? document.body, { childList: true, subtree: true });

    return () => {
      mutations.disconnect();
      observer.disconnect();
    };
  }, []);

  return null;
}
