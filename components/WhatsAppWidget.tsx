'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SOCIAL_LINKS } from '@/lib/constants';

const WhatsAppWidget = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show tooltip after a short delay once the page loads
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 pointer-events-none">
      {/* Tooltip Speech Bubble */}
      <AnimatePresence>
        {showTooltip && (
          <motion.a
            href={SOCIAL_LINKS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: 15, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 15, scale: 0.9 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="pointer-events-auto flex items-center bg-white text-slate-800 font-sans font-medium text-[13.5px] px-4 py-2.5 rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.3)] relative border border-slate-100 hover:text-blue-600 transition-colors duration-200 cursor-pointer"
          >
            {/* Tooltip text */}
            <span>Need Help?</span>
            
            {/* Speech bubble tail pointing right */}
            <div className="absolute top-1/2 -translate-y-1/2 left-full w-0 h-0 border-y-[6px] border-y-transparent border-l-[6px] border-l-white" />
            <div className="absolute top-1/2 -translate-y-1/2 left-full w-0 h-0 border-y-[6px] border-y-transparent border-l-[6px] border-l-slate-100 -z-10 translate-x-px" />
          </motion.a>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <motion.a
        href={SOCIAL_LINKS.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: 'spring', damping: 15, stiffness: 300, delay: 0.5 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        onMouseEnter={() => setShowTooltip(true)}
        className="pointer-events-auto w-14 h-14 rounded-full bg-linear-to-br from-[#1d4ed8] to-[#3b82f6] flex items-center justify-center text-white shadow-[0_8px_30px_rgba(59,130,246,0.35)] hover:shadow-[0_8px_35px_rgba(59,130,246,0.5)] transition-all duration-300 relative group cursor-pointer border border-white/10"
        aria-label="Chat on WhatsApp"
      >
        {/* Pulsing ring background */}
        <span className="absolute inset-0 rounded-full bg-[#3b82f6] opacity-25 group-hover:scale-110 transition-transform duration-300 animate-ping -z-10" />

        {/* WhatsApp SVG Icon */}
        <svg 
          viewBox="0 0 24 24" 
          width="26" 
          height="26" 
          fill="currentColor"
          className="transform group-hover:rotate-[8deg] transition-transform duration-300"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.713-1.458L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.965C16.57 2.028 14.1 1.002 11.516 1c-5.44 0-9.866 4.372-9.87 9.802 0 1.63.43 3.224 1.246 4.634L1.89 20.8l5.525-1.446L6.647 19.15zM17.13 15.36c-.28-.14-1.65-.81-1.91-.9-.26-.1-.45-.14-.64.14-.19.28-.73.9-.9 1.1-.17.19-.34.21-.62.07-1.16-.58-1.92-1.03-2.67-2.33-.2-.34.2-.32.57-1.05.06-.13.03-.24-.01-.33-.05-.09-.45-1.08-.62-1.48-.17-.41-.33-.35-.45-.35h-.39c-.14 0-.37.05-.56.26-.19.21-.73.71-.73 1.74s.75 2.02.85 2.16c.1.14 1.47 2.25 3.57 3.16.5.22.89.35 1.2.45.5.16.96.14 1.32.09.4-.06 1.65-.67 1.88-1.32.23-.66.23-1.22.16-1.34-.07-.12-.26-.19-.54-.33z"/>
        </svg>
      </motion.a>
    </div>
  );
};

export default WhatsAppWidget;
