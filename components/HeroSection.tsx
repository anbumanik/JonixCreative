'use client';

import React, { useEffect, useRef } from 'react';
import { motion, type Variants } from 'framer-motion';
import { ChevronDown, Play } from 'lucide-react';
import { SOCIAL_LINKS } from '@/lib/constants';

const PARTICLES = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 3 + 1,
  delay: Math.random() * 4,
  duration: Math.random() * 6 + 6,
}));

const HeroSection = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Particle canvas effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const particles: Array<{ x: number; y: number; vx: number; vy: number; size: number; alpha: number }> = [];
    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 2 + 0.5,
        alpha: Math.random() * 0.5 + 0.1,
      });
    }

    let animId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(59, 130, 246, ${p.alpha})`;
        ctx.fill();
      });

      // Draw connections
      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach((p2) => {
          const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(59, 130, 246, ${0.08 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      animId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const textVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15 + 0.5, duration: 0.7, ease: [0.25, 0, 0, 1] },
    }),
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[#050508]">
        {/* Animated gradient blobs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-700 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 30, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
          className="absolute top-1/2 right-1/3 w-64 h-64 bg-blue-500 rounded-full blur-[130px] opacity-10"
        />
      </div>

      {/* Particle canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-[1]"
        style={{ opacity: 0.6 }}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050508]/20 to-[#050508] z-[2]" />

      {/* Hero content */}
      <div className="relative z-[3] text-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main heading */}
        <motion.h1
          custom={0}
          initial="hidden"
          animate="visible"
          variants={textVariants}
          className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-[6.5rem] text-white leading-[0.95] mb-10"
        >
          Transforming Raw
          <br />
          <span className="gradient-text">Footage Into</span>
          <br />
          Cinematic Stories
        </motion.h1>

        {/* CTA Buttons */}
        <motion.div
          custom={1}
          initial="hidden"
          animate="visible"
          variants={textVariants}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <button
            id="hero-quote-btn"
            onClick={() => scrollToSection('contact')}
            className="btn-primary text-base px-8 py-4"
          >
            Get a Quote
          </button>
          <button
            id="hero-portfolio-btn"
            onClick={() => scrollToSection('portfolio')}
            className="btn-outline flex items-center gap-2 text-base px-8 py-4"
          >
            <Play size={16} className="text-blue-400" />
            View Portfolio
          </button>
        </motion.div>

        {/* Floating stats */}
        <motion.div
          custom={2}
          initial="hidden"
          animate="visible"
          variants={textVariants}
          className="mt-16 flex flex-wrap justify-center gap-10 sm:gap-16"
        >
          {[
            { val: '500+', label: 'Projects' },
            { val: '200+', label: 'Clients' },
            { val: '5+', label: 'Years' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-3xl sm:text-4xl text-blue-400 text-glow">{stat.val}</p>
              <p className="text-slate-500 text-sm mt-1 uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator — icon only, no text */}
      <motion.button
        onClick={() => scrollToSection('video')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { delay: 2, duration: 0.5 },
          y: { duration: 1.5, repeat: Infinity, ease: 'easeInOut', delay: 2 },
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-[3] flex flex-col items-center text-slate-500 hover:text-blue-400 transition-colors"
      >
        <ChevronDown size={22} />
      </motion.button>
    </section>
  );
};

export default HeroSection;
