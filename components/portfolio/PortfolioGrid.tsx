'use client';

import React, { useState, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useFirebaseData } from '@/hooks/useFirebaseData';
import { FALLBACK_PORTFOLIO } from '@/lib/constants';
import type { PortfolioProject } from '@/lib/types';
import PortfolioCard from './PortfolioCard';

const CATEGORIES = ['All', 'Montages', 'Short-Form Videos', 'Long-Form Videos'] as const;

const PortfolioGrid = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const projects = useFirebaseData<PortfolioProject[]>('portfolio', FALLBACK_PORTFOLIO);

  const filtered = useMemo(
    () => activeCategory === 'All' ? projects : projects.filter((p) => p.category === activeCategory),
    [activeCategory, projects]
  );

  const handleCategory = useCallback((cat: string) => {
    setActiveCategory(cat);
  }, []);

  return (
    <section id="portfolio" className="section-padding bg-[#050508] relative overflow-hidden">
      {/* Decorative background blob — pointer-events none, no scroll impact */}
      <div
        aria-hidden
        className="absolute top-1/2 left-0 w-[30vw] h-[30vw] min-w-[15rem] aspect-square bg-blue-900/10 rounded-full blur-[100px] pointer-events-none"
      />

      <div className="w-full max-w-400 mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
          style={{ marginBottom: '48px' }}
        >
          <div className="section-divider" />
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-white mt-4">
            Recent <span className="gradient-text">Works</span>
          </h2>
        </motion.div>

        {/* Filter tabs */}
        <div className="flex justify-center gap-2 flex-wrap" style={{ marginBottom: '3rem' }}>
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategory(cat)}
              className={`filter-tab${activeCategory === cat ? ' active' : ''}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-5 w-full">
          <AnimatePresence mode="popLayout" initial={false}>
            {filtered.map((project, index) => (
              <PortfolioCard key={project.slug} project={project} index={index} />
            ))}
          </AnimatePresence>
        </div>
      </div>

    </section>
  );
};

export default PortfolioGrid;
