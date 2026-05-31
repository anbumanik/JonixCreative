'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { STATS } from '@/lib/constants';

const useCountUp = (target: number, inView: boolean, duration = 2000) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [target, inView, duration]);

  return count;
};

const StatCard = ({
  stat,
  inView,
}: {
  stat: { value: number; label: string; suffix: string };
  inView: boolean;
}) => {
  const count = useCountUp(stat.value, inView);

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="text-center p-6 rounded-2xl glass border border-white/5 hover:border-blue-500/20 transition-all glow-blue-sm card-hover"
    >
      <p className="font-display text-5xl text-white mb-1">
        {count}
        <span className="text-blue-400">{stat.suffix}</span>
      </p>
      <p className="text-slate-400 text-sm uppercase tracking-wider">{stat.label}</p>
    </motion.div>
  );
};

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="section-padding relative overflow-hidden bg-[#07070f]" ref={sectionRef}>
      {/* Background decoration */}
      <div className="absolute bottom-0 right-0 w-[35vw] h-[35vw] min-w-[18rem] aspect-square bg-blue-900/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="w-full max-w-400 mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
          style={{ marginBottom: '60px' }}
        >
          <div className="section-divider" />
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-white mt-4">
            About <span className="gradient-text">JonixCreative</span>
          </h2>
        </motion.div>

        {/* Main grid */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center mb-16">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full flex justify-center"
          >
            <div className="relative w-full max-w-md lg:max-w-[480px]">
              <div className="relative rounded-2xl overflow-hidden border border-white/10 aspect-4/5 w-full">
                <Image
                  src="/images/founder.png"
                  alt="JonixCreative Founder"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-[#050508] via-transparent to-transparent" />

                {/* Founder badge */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="glass rounded-xl p-4 border border-white/10">
                    <p className="text-white font-semibold">Jonix Kumar</p>
                    <p className="text-blue-400 text-sm">Founder & Creative Director</p>
                  </div>
                </div>
              </div>

              {/* Experience badge floating */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-8 -right-4 sm:-right-8 bg-[#0a0a1a]/90 backdrop-blur-xl rounded-2xl p-5 border border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.8)] z-10 flex flex-col items-center justify-center min-w-[110px] overflow-hidden group"
              >
                {/* Subtle inner gradient */}
                <div className="absolute inset-0 bg-linear-to-br from-blue-500/10 via-transparent to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
                
                <p className="font-display text-4xl text-transparent bg-clip-text bg-linear-to-b from-white to-blue-400 leading-none mb-1">
                  5+
                </p>
                <p className="text-white text-xs font-medium tracking-widest uppercase">Years</p>
                <p className="text-blue-500/80 text-[9px] font-bold tracking-widest uppercase mt-1">Experience</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div>
              <h3 className="font-display text-3xl sm:text-4xl text-white" style={{ marginBottom: '24px' }}>
                Our <span className="gradient-text">Story</span>
              </h3>
              <p className="text-slate-400 leading-relaxed" style={{ marginBottom: '24px' }}>
                JonixCreative was founded with a single mission: to bring cinematic storytelling
                to creators, brands, and businesses of all sizes. What started as a passion
                project in a small home studio has grown into a full-scale creative production house.
              </p>
              <p className="text-slate-400 leading-relaxed">
                We&apos;ve worked with hundreds of clients — from solo content creators growing their
                audience to Fortune 500 companies launching global campaigns. Every project gets
                the same level of dedication, creativity, and technical excellence.
              </p>
            </div>

            {/* Mission & Vision */}
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  label: 'Mission',
                  text: 'To transform raw footage into compelling stories that connect, inspire, and convert.',
                  icon: '🎯',
                },
                {
                  label: 'Vision',
                  text: 'To be the world\'s most trusted creative video studio, known for cinematic quality at every budget.',
                  icon: '🚀',
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="p-5 rounded-xl glass border border-white/5 hover:border-blue-500/20 transition-all card-hover"
                >
                  <span className="text-2xl mb-3 block">{item.icon}</span>
                  <h4 className="text-white font-semibold mb-2">{item.label}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>

            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary"
            >
              Work With Us
            </button>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6"
        >
          {STATS.map((stat) => (
            <StatCard key={stat.label} stat={stat} inView={inView} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
