'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { STATS } from '@/lib/constants';

type Tool = {
  label: string;
  logo: string;
  bg?: string;
};

const TOOLS: Tool[] = [
  {
    label: 'Premiere Pro',
    logo: 'https://img.icons8.com/color/512/adobe-premiere-pro--v1.png',
  },
  {
    label: 'After Effects',
    logo: 'https://img.icons8.com/color/512/adobe-after-effects--v1.png',
  },
  {
    label: 'DaVinci Resolve',
    logo: 'https://img.icons8.com/color/512/davinci-resolve.png',
  },
  {
    label: 'Adobe Audition',
    logo: 'https://img.icons8.com/color/512/adobe-audition--v1.png',
  },
  {
    label: 'Photoshop',
    logo: 'https://img.icons8.com/color/512/adobe-photoshop--v1.png',
  },
  {
    label: 'ChatGPT',
    logo: 'https://img.icons8.com/color/512/chatgpt.png',
  },
  {
    label: 'Gemini',
    logo: '/images/gemini.png',
  },
  {
    label: 'Google Flow',
    logo: 'https://img.icons8.com/color/512/google-logo.png',
  },
  {
    label: 'Pinterest',
    logo: 'https://img.icons8.com/color/512/pinterest--v1.png',
  },
];


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
            About <span className="gradient-text">Jonix Creative</span>
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
                  alt="D. Joan Paul Kirubai — Founder and Creative Director of Jonix Creative, a professional video editing studio"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 400px"
                  priority
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-[#050508] via-transparent to-transparent" />

                {/* Founder badge */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="glass rounded-xl p-4 border border-white/10">
                    <p className="text-white font-semibold">D. Joan Paul Kirubai</p>
                    <p className="text-blue-400 text-sm">Founder &amp; Creative Director</p>
                  </div>
                </div>
              </div>

              {/* Experience badge floating */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-8 -right-4 sm:-right-8 bg-[#0a0a1a]/90 backdrop-blur-xl rounded-2xl p-5 border border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.8)] z-10 flex flex-col items-center justify-center min-w-[110px] overflow-hidden group"
              >
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
              <p className="text-slate-300 text-lg sm:text-xl leading-relaxed">
                <span className="text-white font-semibold">Jonix Creative</span> is a professional video editing studio founded by <span className="text-blue-400 font-semibold">D. Joan Paul Kirubai</span> — built on one unwavering belief:
              </p>
              
              <div className="relative border-l-4 border-blue-500 pl-6 my-6 italic text-xl sm:text-2xl font-display text-white bg-blue-500/5 py-4 rounded-r-xl glow-blue-sm">
                &ldquo;Turning Vision Into Reality.&rdquo;
              </div>

              <div className="relative text-slate-400 leading-relaxed text-sm sm:text-base p-6 rounded-2xl border border-white/5 bg-white/[0.02] shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] backdrop-blur-sm transition-all duration-300 hover:bg-white/[0.04]">
                <p className="text-justify">
                  With <span className="text-white font-medium drop-shadow-md">5+ years of industry experience</span> and a dedicated team of skilled editors, Jonix Creative delivers high-impact video content that captivates audiences, strengthens brands, and drives real results. We specialize in <span className="text-white font-medium drop-shadow-md">Reels and YouTube content</span> — the most powerful formats in today&apos;s digital landscape. From the first frame to the final cut, every project we touch is handled with precision, creativity, and purpose. Our team works with industry-leading tools — <span className="text-white font-medium drop-shadow-md">Adobe Premiere Pro, After Effects, and DaVinci Resolve</span> — to ensure every deliverable meets the highest professional standard. We have worked with brands, content creators, and business owners across industries — helping them cut through the noise, grow their audience, and build a visual identity that is impossible to ignore. No matter the scale of the project, we bring the same energy, dedication, and standard of excellence to every single frame.
                </p>
              </div>
            </div>

            {/* Mission Callout */}
            <div className="p-5 rounded-xl glass border border-blue-500/20 bg-blue-950/10 hover:border-blue-500/30 transition-all card-hover mt-6">
              <div className="flex items-start gap-4">
                <span className="text-2xl shrink-0 mt-1">🎯</span>
                <div>
                  <h4 className="text-white font-semibold mb-1 text-base sm:text-lg">Our Mission</h4>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                    At Jonix Creative, your vision is not just our brief — <span className="text-blue-400 font-medium">it is our mission</span>.
                  </p>
                </div>
              </div>
            </div>

          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto"
        >
          {STATS.map((stat) => (
            <StatCard key={stat.label} stat={stat} inView={inView} />
          ))}
        </motion.div>

        {/* ── Tools We Use marquee ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{ marginTop: '40px' }}
        >
          <p 
            className="text-center text-[10px] font-bold text-blue-400 uppercase tracking-[0.25em]"
            style={{ marginBottom: '20px' }}
          >
            Tools We Use
          </p>

          <div className="relative overflow-hidden">
            {/* Fade left edge */}
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-linear-to-r from-[#07070f] to-transparent z-10 pointer-events-none" />
            {/* Fade right edge */}
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-linear-to-l from-[#07070f] to-transparent z-10 pointer-events-none" />

            <div className="flex animate-marquee gap-4 w-max">
              {[...TOOLS, ...TOOLS].map(({ logo, label, bg }, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 px-5 py-3 rounded-xl glass border border-white/6 hover:border-white/20 transition-all duration-300 group cursor-default shrink-0"
                >
                  <div 
                    className="shrink-0 group-hover:scale-110 transition-transform duration-300 w-7 h-7 flex items-center justify-center rounded-md overflow-hidden"
                    style={bg ? { backgroundColor: bg, padding: '4px' } : {}}
                  >
                    <img src={logo} alt={label} className="w-full h-full object-contain" loading="lazy" />
                  </div>
                  <span className="text-slate-400 text-sm font-medium group-hover:text-white transition-colors duration-300 whitespace-nowrap">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default AboutSection;
