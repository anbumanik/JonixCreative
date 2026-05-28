'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { FaWhatsapp, FaInstagram, FaYoutube, FaLinkedinIn } from 'react-icons/fa';
import { NAV_LINKS, SOCIAL_LINKS } from '@/lib/constants';

const Footer = () => {
  const scrollTo = (href: string) => {
    document.getElementById(href.replace('#', ''))?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050508] relative overflow-hidden pt-24 pb-8 border-t border-white/5">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center">
        {/* Brand */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center mb-10"
        >
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-400 flex items-center justify-center glow-blue shadow-lg mb-6">
            <span className="text-white font-bold text-2xl">J</span>
          </div>
          <h3 className="font-display text-4xl sm:text-5xl text-white tracking-widest mb-4">
            JONIX<span className="text-blue-500">CREATIVE</span>
          </h3>
          <p className="text-slate-400 text-sm md:text-base max-w-md leading-relaxed">
            Transforming raw footage into cinematic stories. Professional video editing for
            creators, brands, and businesses worldwide.
          </p>
        </motion.div>

        {/* Social Icons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="flex items-center gap-4 sm:gap-6 mb-14"
        >
          {[
            { Icon: FaWhatsapp, href: SOCIAL_LINKS.whatsapp, label: 'WhatsApp' },
            { Icon: FaInstagram, href: SOCIAL_LINKS.instagram, label: 'Instagram' },
            { Icon: FaYoutube, href: SOCIAL_LINKS.youtube, label: 'YouTube' },
            { Icon: FaLinkedinIn, href: SOCIAL_LINKS.linkedin, label: 'LinkedIn' },
          ].map(({ Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              whileHover={{ scale: 1.15, y: -4 }}
              whileTap={{ scale: 0.95 }}
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-full glass border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-blue-500/50 hover:bg-blue-500/10 transition-all shadow-xl"
            >
              <Icon size={22} />
            </motion.a>
          ))}
        </motion.div>

        {/* Navigation Pills */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-20"
        >
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="px-6 py-2.5 rounded-full glass border border-white/5 text-slate-400 text-sm sm:text-base hover:text-white hover:border-blue-500/30 hover:bg-blue-500/10 transition-all font-medium"
            >
              {link.label}
            </button>
          ))}
        </motion.div>

        {/* Bottom bar */}
        <div className="w-full border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-xs sm:text-sm font-medium">
            © {new Date().getFullYear()} JonixCreative. All rights reserved.
          </p>
          <p className="text-slate-500 text-xs sm:text-sm font-medium flex items-center gap-1.5">
            Made with <Heart size={14} className="text-blue-500 fill-blue-500" /> by JonixCreative
          </p>
        </div>
      </div>

      {/* Huge Background Text */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden pointer-events-none select-none flex justify-center translate-y-1/3 opacity-[0.03]">
        <h1 className="font-display text-[15vw] leading-none text-white whitespace-nowrap">
          JONIX CREATIVE
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
