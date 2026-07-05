'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Film,
  PlaySquare,
  Briefcase,
  Mic,
  Sparkles,
  Palette,
  Zap,
  Tv,
  ArrowRight,
} from 'lucide-react';
import { SERVICES } from '@/lib/constants';

const ICON_MAP: Record<string, React.ElementType> = {
  Film,
  Youtube: PlaySquare,
  Briefcase,
  Mic,
  Sparkles,
  Palette,
  Zap,
  Tv,
};

const ServiceCard = ({
  service,
  index,
}: {
  service: { id: string; title: string; description: string; icon: string };
  index: number;
}) => {
  const Icon = ICON_MAP[service.icon] || Film;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -8 }}
      className="group relative pr-7 rounded-2xl glass border border-white/8 hover:border-blue-500/30 transition-all duration-300"
      style={{ paddingLeft: '2.25rem', paddingTop: '2.5rem', paddingBottom: '3rem' }}
    >
      {/* Hover glow background */}
      <div className="absolute inset-0 bg-linear-to-br from-blue-600/0 to-blue-600/0 group-hover:from-blue-600/5 group-hover:to-blue-400/5 transition-all duration-500 rounded-2xl overflow-hidden" />

      {/* Glow dot */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden" />

      {/* Icon */}
      <div className="relative mb-5">
        <div className="w-12 h-12 rounded-xl bg-blue-600/15 border border-blue-500/20 flex items-center justify-center group-hover:bg-blue-600/25 group-hover:border-blue-500/40 transition-all duration-300">
          <Icon size={22} className="text-blue-400 group-hover:scale-110 transition-transform duration-300" />
        </div>
      </div>

      {/* Content */}
      <h3 className="text-white font-semibold mb-2 group-hover:text-blue-100 transition-colors">
        {service.title}
      </h3>
      <p className="text-slate-500 text-sm leading-relaxed mb-5">
        {service.description}
      </p>

      {/* Learn more */}
      <button
        id={`service-learn-${service.id}`}
        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
        className="flex items-center gap-2 text-blue-400 text-sm font-medium hover:gap-3 transition-all duration-200 group/btn"
      >
        Learn More
        <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform duration-200" />
      </button>
    </motion.div>
  );
};

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-[#07070f] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 right-0 w-[30vw] h-[30vw] min-w-[15rem] aspect-square bg-indigo-900/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="w-full max-w-400 mx-auto px-6">
        {/* Header */}
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
            Our <span className="gradient-text">Services</span>
          </h2>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;
