'use client';

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  useEffect(() => {
    const timer = setTimeout(onComplete, 2500);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-9999 flex flex-col items-center justify-center bg-[#050508]"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 rounded-full bg-blue-600/10 blur-[100px]" />
      </div>

      {/* Logo animation */}
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="relative z-10 text-center mb-12"
      >
        {/* Animated ring */}
        <div className="relative mx-auto mb-6 w-20 h-20">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-0 rounded-full border-2 border-transparent border-t-blue-500 border-r-blue-500"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-2 rounded-full border-2 border-transparent border-b-blue-400 border-l-blue-400"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-2xl">🎬</span>
          </div>
        </div>

        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="font-display text-4xl text-white tracking-widest"
        >
          JONIX<span className="text-blue-400">CREATIVE</span>
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-slate-400 text-sm mt-2 tracking-[0.3em] uppercase"
        >
          Cinematic Video Editing
        </motion.p>
      </motion.div>

      {/* Progress bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="relative z-10 w-48"
      >
        <div className="h-0.5 bg-white/10 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 2, ease: 'easeInOut' }}
            className="h-full bg-linear-to-r from-blue-600 to-blue-400 rounded-full"
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default LoadingScreen;
