import { useEffect, useRef } from 'react';

// Shared, singleton IntersectionObserver for all portfolio video cards.
// This avoids creating a new observer per-card (11 observers = scroll jank).
let sharedObserver: IntersectionObserver | null = null;
const videoCallbacks = new Map<Element, (isVisible: boolean) => void>();

function getSharedObserver(): IntersectionObserver {
  if (!sharedObserver) {
    sharedObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const cb = videoCallbacks.get(entry.target);
          if (cb) cb(entry.isIntersecting);
        });
      },
      // threshold 0.05 = fires as soon as ~5% of card is visible
      // No negative rootMargin — don't delay trigger unnecessarily
      { threshold: 0.05 }
    );
  }
  return sharedObserver;
}

export const useSharedVideoObserver = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const playTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;

    const observer = getSharedObserver();

    const handleVisibility = (isVisible: boolean) => {
      if (isVisible) {
        // Play immediately — no debounce delay
        el.play().catch(() => {});
      } else {
        if (playTimeout.current) clearTimeout(playTimeout.current);
        el.pause();
      }
    };

    videoCallbacks.set(el, handleVisibility);
    observer.observe(el);

    return () => {
      if (playTimeout.current) clearTimeout(playTimeout.current);
      videoCallbacks.delete(el);
      observer.unobserve(el);
      // Clean up singleton if no more videos
      if (videoCallbacks.size === 0 && sharedObserver) {
        sharedObserver.disconnect();
        sharedObserver = null;
      }
    };
  }, []);

  return videoRef;
};
