'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Play, ExternalLink } from 'lucide-react';
import { useFirebaseData } from '@/hooks/useFirebaseData';
import { FALLBACK_PORTFOLIO } from '@/lib/constants';
import type { PortfolioProject } from '@/lib/types';

const CATEGORIES = ['All', 'Reels', 'YouTube', 'Corporate', 'Commercial Ads', 'Podcast Editing'];

const PortfolioCard = ({ project }: { project: PortfolioProject }) => (
  <motion.div
    layout
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.9 }}
    transition={{ duration: 0.4 }}
    className="group relative rounded-2xl overflow-hidden border border-white/8 glass card-hover cursor-pointer"
  >
    <Link href={`/portfolio/${project.slug}`} className="block">
      {/* Thumbnail */}
      <div className="relative aspect-video overflow-hidden bg-slate-900">
        <Image
          src={project.thumbnail}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Play button on hover */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="w-14 h-14 rounded-full bg-blue-600/90 flex items-center justify-center glow-blue"
          >
            <Play className="text-white ml-0.5" size={20} fill="white" />
          </motion.div>
        </div>

        {/* Category badge */}
        <div className="absolute top-3 left-3">
          <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-blue-600/90 text-white backdrop-blur-sm">
            {project.category}
          </span>
        </div>

        {/* Duration */}
        <div className="absolute bottom-3 right-3 glass px-2 py-0.5 rounded text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity">
          {project.duration}
        </div>
      </div>

      {/* Card body */}
      <div className="p-5">
        <h3 className="text-white font-semibold mb-2 group-hover:text-blue-400 transition-colors line-clamp-1">
          {project.title}
        </h3>
        <p className="text-slate-500 text-sm line-clamp-2 mb-4">{project.description}</p>

        <div className="flex items-center justify-between">
          <div className="flex flex-wrap gap-1.5">
            {project.tools.slice(0, 2).map((tool) => (
              <span key={tool} className="px-2 py-0.5 rounded text-xs bg-white/5 text-slate-400 border border-white/5">
                {tool}
              </span>
            ))}
          </div>
          <span className="text-blue-400 flex items-center gap-1 text-xs font-medium">
            View <ExternalLink size={12} />
          </span>
        </div>
      </div>
    </Link>
  </motion.div>
);

const PortfolioSection = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const projects = useFirebaseData<PortfolioProject[]>('portfolio', FALLBACK_PORTFOLIO);

  const filtered =
    activeCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="portfolio" className="section-padding bg-[#050508] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-[30vw] h-[30vw] min-w-[15rem] aspect-square bg-blue-900/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="w-full max-w-400 mx-auto">
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
            Featured <span className="gradient-text">Portfolio</span>
          </h2>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3"
          style={{ marginBottom: '48px' }}
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`filter-tab ${activeCategory === cat ? 'active' : ''}`}
              id={`portfolio-filter-${cat.toLowerCase().replace(/\s+/g, '-')}`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-6 justify-items-center w-full"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <PortfolioCard key={project.slug} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-14"
        >
          <p className="text-slate-400 mb-4">Have a project in mind?</p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary"
          >
            Start Your Project
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;
