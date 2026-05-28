'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Play, X, Star, Wrench, Clock } from 'lucide-react';
import { useFirebaseData } from '@/hooks/useFirebaseData';
import { FALLBACK_PORTFOLIO } from '@/lib/constants';
import type { PortfolioProject } from '@/lib/types';
import { use } from 'react';

export default function PortfolioProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const projects = useFirebaseData<PortfolioProject[]>('portfolio', FALLBACK_PORTFOLIO);
  const [playing, setPlaying] = useState(false);

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#050508] flex flex-col items-center justify-center text-center px-4">
        <h1 className="font-display text-5xl text-white mb-4">Project Not Found</h1>
        <p className="text-slate-400 mb-8">This project doesn&apos;t exist or may have been removed.</p>
        <Link href="/#portfolio" className="btn-primary">
          <ArrowLeft size={16} />
          Back to Portfolio
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050508]">
      {/* Back button */}
      <div className="fixed top-0 left-0 right-0 z-50 glass-strong border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center">
          <Link
            href="/#portfolio"
            className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
          >
            <ArrowLeft size={18} />
            <span className="text-sm">Back to Portfolio</span>
          </Link>
        </div>
      </div>

      <div className="pt-24 pb-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-600/15 border border-blue-500/20 text-blue-400 text-xs font-medium mb-6">
            {project.category}
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-4xl sm:text-5xl md:text-6xl text-white mb-8"
        >
          {project.title}
        </motion.h1>

        {/* Meta */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap gap-6 mb-10"
        >
          <div className="flex items-center gap-2 text-slate-400 text-sm">
            <Clock size={14} className="text-blue-400" />
            Duration: {project.duration}
          </div>
          <div className="flex items-center gap-2 text-slate-400 text-sm">
            <Wrench size={14} className="text-blue-400" />
            {project.tools.join(', ')}
          </div>
        </motion.div>

        {/* Video player */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative rounded-2xl overflow-hidden border border-white/10 mb-12"
        >
          {!playing ? (
            <div
              className="aspect-video bg-slate-900 relative cursor-pointer group"
              onClick={() => setPlaying(true)}
            >
              <Image
                src={project.thumbnail}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 960px"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-600 to-blue-400 flex items-center justify-center glow-blue"
                >
                  <Play className="text-white ml-1" size={28} fill="white" />
                </motion.div>
              </div>
            </div>
          ) : (
            <div className="relative aspect-video bg-black">
              <iframe
                src={`${project.videoUrl}?autoplay=1`}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={project.title}
              />
              <button
                onClick={() => setPlaying(false)}
                className="absolute top-3 right-3 p-2 glass rounded-full text-white hover:bg-white/20 transition-colors"
              >
                <X size={16} />
              </button>
            </div>
          )}
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-2 space-y-6"
          >
            <div>
              <h2 className="font-display text-2xl text-white mb-4">Project Overview</h2>
              <p className="text-slate-400 leading-relaxed">{project.description}</p>
            </div>
          </motion.div>

          {/* Client feedback */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="glass border border-white/8 rounded-2xl p-6">
              <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                <Star size={16} className="text-yellow-400 fill-yellow-400" />
                Client Feedback
              </h3>
              <blockquote className="text-slate-300 text-sm leading-relaxed italic">
                &ldquo;{project.clientFeedback}&rdquo;
              </blockquote>
              <div className="flex gap-1 mt-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={14} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>
            </div>

            <div className="mt-6">
              <Link
                href="/#contact"
                className="btn-primary w-full justify-center"
              >
                Start Similar Project
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
