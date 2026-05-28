'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { useFirebaseData } from '@/hooks/useFirebaseData';
import { FALLBACK_TESTIMONIALS } from '@/lib/constants';
import type { Testimonial } from '@/lib/types';
import Image from 'next/image';

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex justify-center gap-1 mb-6">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        size={18}
        className={i < rating ? 'star-filled' : 'text-slate-600'}
        fill={i < rating ? '#fbbf24' : 'none'}
      />
    ))}
  </div>
);

const TestimonialsSection = () => {
  const testimonials = useFirebaseData<Testimonial[]>('testimonials', FALLBACK_TESTIMONIALS);
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const goNext = useCallback(() => {
    setDirection(1);
    setCurrent((c) => (c + 1) % testimonials.length);
  }, [testimonials.length]);

  const goPrev = () => {
    setDirection(-1);
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  };

  // Autoplay
  useEffect(() => {
    const timer = setInterval(goNext, 5000);
    return () => clearInterval(timer);
  }, [goNext]);

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 80 : -80, opacity: 0, scale: 0.95 }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -80 : 80, opacity: 0, scale: 0.95 }),
  };

  if (!testimonials.length) return null;
  const t = testimonials[current];

  return (
    <section id="testimonials" className="section-padding bg-[#050508] relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-blue-900/8 rounded-full blur-[100px] pointer-events-none" />

      <div className="w-full max-w-5xl mx-auto flex flex-col items-center px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full text-center mb-20 flex flex-col items-center"
        >
          <div className="section-divider" />
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-white mt-4">
            What Clients <span className="gradient-text">Say</span>
          </h2>
        </motion.div>

        {/* Testimonial card */}
        <div className="relative w-full">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              className="glass border border-white/8 rounded-3xl p-8 sm:p-12 relative overflow-hidden"
            >
              {/* Decorative quote */}
              <Quote
                size={80}
                className="absolute top-6 right-8 text-blue-600/10"
                fill="currentColor"
              />

              <div className="relative flex flex-col items-center text-center">
                <StarRating rating={t.rating} />

                <blockquote className="text-white text-lg sm:text-xl md:text-2xl font-medium leading-relaxed mb-8 max-w-4xl">
                  &ldquo;{t.review}&rdquo;
                </blockquote>

                <div className="flex flex-col items-center gap-3">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-blue-500/40 glow-blue-sm">
                    <Image
                      src={t.avatar}
                      alt={t.name}
                      fill
                      className="object-cover"
                      sizes="64px"
                    />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-lg">{t.name}</p>
                    <p className="text-blue-400 text-sm">
                      {t.role} — {t.company}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          {/* Navigation */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mt-10">
            {/* Arrows Prev */}
            <button
              id="testimonial-prev"
              onClick={goPrev}
              className="hidden sm:flex w-12 h-12 rounded-full glass border border-white/10 items-center justify-center text-slate-400 hover:text-white hover:border-blue-500/40 hover:bg-blue-500/10 transition-all"
            >
              <ChevronLeft size={20} />
            </button>

            {/* Dots */}
            <div className="flex gap-3">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                  className={`transition-all duration-300 rounded-full ${
                    i === current
                      ? 'w-10 h-2.5 bg-blue-500'
                      : 'w-2.5 h-2.5 bg-white/20 hover:bg-white/40'
                  }`}
                  aria-label={`Testimonial ${i + 1}`}
                />
              ))}
            </div>

            {/* Arrows Next */}
            <button
              id="testimonial-next"
              onClick={goNext}
              className="hidden sm:flex w-12 h-12 rounded-full glass border border-white/10 items-center justify-center text-slate-400 hover:text-white hover:border-blue-500/40 hover:bg-blue-500/10 transition-all"
            >
              <ChevronRight size={20} />
            </button>
            
            {/* Mobile Arrows (shown below dots on small screens) */}
            <div className="flex sm:hidden gap-4 mt-2">
              <button
                onClick={goPrev}
                className="w-10 h-10 rounded-full glass border border-white/10 flex items-center justify-center text-slate-400"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={goNext}
                className="w-10 h-10 rounded-full glass border border-white/10 flex items-center justify-center text-slate-400"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 flex flex-wrap justify-center items-center gap-8"
        >
          {[
            { icon: '⭐', label: '5.0 Average Rating' },
            { icon: '🏆', label: '500+ Projects Delivered' },
            { icon: '💬', label: '200+ Happy Clients' },
            { icon: '🔄', label: '98% Repeat Clients' },
          ].map((badge) => (
            <div key={badge.label} className="flex items-center gap-2 text-slate-400 text-sm">
              <span className="text-lg">{badge.icon}</span>
              {badge.label}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
