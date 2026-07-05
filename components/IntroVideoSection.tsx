'use client';

import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { ArrowUpRight, CheckCircle } from 'lucide-react';

const FEATURES = [
  { text: 'A dedicated team of professional editors' },
  { text: 'Creative story telling that converts' },
  { text: 'Expertise in platform-optimized content for Reels & YouTube' },
  { text: 'Professional color grading & correction' },
  { text: 'Consistent quality' },
  { text: 'Ontime delivery' },
];

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.25, 0, 0, 1] },
  }),
};

const INTRO_VIDEO_URL = 'https://ik.imagekit.io/d5lm3vdk3/New%20Folder/Sequence%2001%2019%201%20Prob4.mp4';

const IntroVideoSection = () => {
  return (
    <section id="video" className="section-padding bg-[#050508] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[40vw] h-[40vw] min-w-[20rem] aspect-square bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="w-full max-w-400 mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full text-center flex flex-col items-center"
          style={{ marginBottom: '60px' }}
        >
          <div className="section-divider" />
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-white mt-4">
            Why Choose{' '}
            <span className="gradient-text">JonixCreative</span>
          </h2>
        </motion.div>

        {/* Embedded Video Player */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative w-full max-w-4xl mx-auto mb-20"
        >
          {/* Glow behind video */}
          <div className="absolute inset-0 bg-blue-600/20 rounded-2xl blur-2xl pointer-events-none" />
          <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-blue-500/20">
            <video
              src={INTRO_VIDEO_URL}
              controls
              autoPlay
              loop
              playsInline
              style={{ width: '100%', display: 'block', maxHeight: '520px', objectFit: 'cover', background: '#000' }}
            />
          </div>
        </motion.div>


        {/* Features list - Grid layout */}
        <div className="w-full max-w-400 mx-auto flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full text-center"
            style={{ marginBottom: '60px', marginTop: '100px' }}
          >
            <h3 className="font-display text-3xl sm:text-4xl text-white">
              What Makes Us <span className="gradient-text">Different</span>
            </h3>
          </motion.div>

          <div className="w-full grid sm:grid-cols-2 md:grid-cols-3 gap-4" style={{ marginBottom: '20px' }}>
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

        </div>
      </div>
    </section>
  );
};

export default IntroVideoSection;
