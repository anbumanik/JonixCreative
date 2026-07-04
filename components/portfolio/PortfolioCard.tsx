'use client';

import React, { memo } from 'react';
import { useSharedVideoObserver } from '@/hooks/useSharedVideoObserver';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Play } from 'lucide-react';
import type { PortfolioProject } from '@/lib/types';

interface PortfolioCardProps {
  project: PortfolioProject;
  index: number;
}

// memo prevents re-render when sibling cards change (e.g. filter tabs)
const PortfolioCard = memo(({ project, index }: PortfolioCardProps) => {
  const videoRef = useSharedVideoObserver();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3, delay: index * 0.04 }}
      // 'will-change: transform' promotes card to its own compositor layer
      // 'contain: layout style paint' prevents reflows from propagating
      style={{ willChange: 'transform', contain: 'layout style paint' }}
      className="group relative rounded-2xl overflow-hidden border border-white/8 portfolio-card cursor-pointer w-full"
    >
      <Link href={`/portfolio/${project.slug}`} className="block" tabIndex={0}>
        {/* Thumbnail */}
        <div className="relative aspect-video overflow-hidden bg-slate-900">
          {project.thumbnail.match(/\.(mp4|webm)$/i) ? (
            <video
              ref={videoRef}
              src={project.thumbnail}
              muted
              loop
              playsInline
              preload="none"
              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <Image
              src={project.thumbnail}
              alt={project.title}
              fill
              loading="lazy"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            />
          )}

          {/* Hover overlay — cheap opacity transition, no blur */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-250" />

          {/* Play button */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-250">
            <div className="w-12 h-12 rounded-full bg-blue-600/90 flex items-center justify-center shadow-lg shadow-blue-600/40">
              <Play className="text-white ml-0.5" size={18} fill="white" />
            </div>
          </div>

          {/* Duration badge */}
          <div className="absolute bottom-2 right-2 bg-black/60 px-2 py-0.5 rounded text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity">
            {project.duration}
          </div>
        </div>
      </Link>
    </motion.div>
  );
});

PortfolioCard.displayName = 'PortfolioCard';

export default PortfolioCard;
