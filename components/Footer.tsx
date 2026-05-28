'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { SOCIAL_LINKS } from '@/lib/constants';

const Footer = () => {
  return (
    <footer className="bg-[#050508] relative pt-20 pb-8 border-t border-white/5">
      {/* Subtle bottom glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-10 mb-16">
          {/* Left: Brand typography */}
          <div className="text-center md:text-left">
            <h2 className="font-display text-7xl md:text-8xl lg:text-[10rem] leading-none text-white tracking-tighter">
              JONIX<span className="text-blue-500">.</span>
            </h2>
          </div>

          {/* Right: Only WhatsApp & Instagram */}
          <div className="flex items-center gap-4">
            <p className="text-slate-500 uppercase tracking-widest text-sm font-semibold mr-2 hidden sm:block">
              Let&apos;s Connect
            </p>
            {[
              { Icon: FaWhatsapp, href: SOCIAL_LINKS.whatsapp, label: 'WhatsApp', color: 'hover:text-green-400 hover:border-green-400/50 hover:bg-green-400/10' },
              { Icon: FaInstagram, href: SOCIAL_LINKS.instagram, label: 'Instagram', color: 'hover:text-pink-400 hover:border-pink-400/50 hover:bg-pink-400/10' },
            ].map(({ Icon, href, label, color }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                whileHover={{ scale: 1.1, y: -4 }}
                whileTap={{ scale: 0.95 }}
                className={`w-14 h-14 md:w-16 md:h-16 rounded-full glass border border-white/10 flex items-center justify-center text-white transition-all shadow-xl ${color}`}
              >
                <Icon size={26} />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="w-full border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm font-medium text-center md:text-left">
            © {new Date().getFullYear()} JonixCreative. All rights reserved.
          </p>
          <div className="flex items-center">
            <p className="text-slate-500 text-sm font-medium flex items-center gap-1.5">
              Made with <Heart size={14} className="text-blue-500 fill-blue-500" /> by JonixCreative
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
