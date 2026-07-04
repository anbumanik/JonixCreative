import { useEffect, useRef } from 'react';

export const useVideoAutoplay = (threshold: number = 0.1, delay: number = 100) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    let playTimeout: NodeJS.Timeout;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            playTimeout = setTimeout(() => {
              if (videoRef.current) {
                videoRef.current.play().catch(() => {
                  // Ignore play errors
                });
              }
            }, delay);
          } else {
            clearTimeout(playTimeout);
            if (videoRef.current) {
              videoRef.current.pause();
            }
          }
        });
      },
      { threshold }
    );

    const currentRef = videoRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      clearTimeout(playTimeout);
      if (currentRef) {
        observer.unobserve(currentRef);
      }
      observer.disconnect();
    };
  }, [threshold]);

  return videoRef;
};
