'use client';

import React, { useState } from 'react';
import { motion, type Variants } from 'framer-motion';
import { Play, X, CheckCircle } from 'lucide-react';

const FEATURES = [
  { text: 'Cinematic quality on every project' },
  { text: 'Professional color grading & correction' },
  { text: 'Fast 48–72 hour delivery' },
  { text: 'Unlimited revisions until you love it' },
  { text: 'Creative storytelling that converts' },
  { text: 'All formats: 16:9, 9:16, 1:1' },
];

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.25, 0, 0, 1] },
  }),
};

const IntroVideoSection = () => {
  const [playing, setPlaying] = useState(false);

  return (
    <section id="video" className="section-padding bg-[#050508] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full text-center mb-16 flex flex-col items-center"
        >
          <div className="section-divider" />
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-white mt-4">
            Why Choose{' '}
            <span className="gradient-text">JonixCreative</span>
          </h2>
        </motion.div>

        {/* Video embed - Centered and Large */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative w-full max-w-5xl mx-auto mb-20"
        >
          {/* Glow behind video */}
          <div className="absolute inset-0 bg-blue-600/20 rounded-2xl blur-2xl" />

          {!playing ? (
            <div
              className="relative rounded-2xl overflow-hidden cursor-pointer group border border-white/10"
              onClick={() => setPlaying(true)}
            >
              {/* Thumbnail */}
              <div className="aspect-video bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center relative">
                {/* Cinematic bars */}
                <div className="absolute top-0 left-0 right-0 h-10 bg-black/60" />
                <div className="absolute bottom-0 left-0 right-0 h-10 bg-black/60" />

                {/* Background pattern */}
                <div className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage: 'radial-gradient(circle at 25% 25%, #3b82f6 0%, transparent 50%), radial-gradient(circle at 75% 75%, #6366f1 0%, transparent 50%)'
                  }}
                />

                {/* Film frame decoration */}
                <div className="absolute inset-4 border border-white/10 rounded-lg" />

                {/* Play button */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative z-10 flex flex-col items-center gap-4"
                >
                  <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-br from-blue-600 to-blue-400 flex items-center justify-center glow-blue shadow-2xl group-hover:shadow-blue-500/60 transition-shadow duration-300">
                    <Play className="text-white ml-2" size={36} fill="white" />
                  </div>
                  {/* Ripple rings */}
                  <motion.div
                    animate={{ scale: [1, 1.5, 2], opacity: [0.5, 0.2, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute w-24 h-24 sm:w-28 sm:h-28 rounded-full border border-blue-400"
                  />
                  <motion.div
                    animate={{ scale: [1, 1.8, 2.5], opacity: [0.4, 0.15, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                    className="absolute w-24 h-24 sm:w-28 sm:h-28 rounded-full border border-blue-400"
                  />
                  <p className="text-white font-medium text-lg tracking-wide mt-2">Watch Our Story</p>
                </motion.div>

                {/* Duration badge */}
                <div className="absolute bottom-14 right-6 glass px-3 py-1.5 rounded-md text-sm text-white font-medium">
                  3:45
                </div>
              </div>
            </div>
          ) : (
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-blue-500/20">
              <div className="aspect-video bg-black">
                <iframe
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="JonixCreative Introduction"
                />
              </div>
              <button
                onClick={() => setPlaying(false)}
                className="absolute top-4 right-4 p-2.5 glass rounded-full text-white hover:bg-white/20 transition-colors z-10"
              >
                <X size={20} />
              </button>
            </div>
          )}
        </motion.div>

        {/* Features list - Grid layout */}
        <div className="w-full max-w-5xl mx-auto flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full text-center mt-12 mb-16"
          >
            <h3 className="font-display text-3xl sm:text-4xl text-white">
              What Makes Us <span className="gradient-text">Different</span>
            </h3>
          </motion.div>

          <div className="w-full grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-24">
            {FEATURES.map((feature, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="flex flex-col items-center text-center gap-3 p-6 rounded-2xl glass border border-white/5 hover:border-blue-500/20 transition-all group card-hover"
              >
                <CheckCircle size={26} className="text-blue-400 shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-slate-300 text-sm md:text-base font-medium leading-relaxed">{feature.text}</span>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-center mt-12"
          >
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary px-8 py-4 text-lg inline-flex items-center justify-center min-w-[240px]"
            >
              Start Your Project Today
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default IntroVideoSection;
