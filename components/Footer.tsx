'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Heart } from 'lucide-react';
import { FaWhatsapp, FaInstagram, FaYoutube, FaLinkedinIn } from 'react-icons/fa';
import { NAV_LINKS, SOCIAL_LINKS } from '@/lib/constants';

const Footer = () => {
  const scrollTo = (href: string) => {
    document.getElementById(href.replace('#', ''))?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#040407] border-t border-white/5 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-blue-900/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-600 to-blue-400 flex items-center justify-center">
                <span className="text-white font-bold text-base">J</span>
              </div>
              <span className="font-display text-xl text-white tracking-wider">
                JONIX<span className="text-blue-400">CREATIVE</span>
              </span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed max-w-sm mb-6">
              Transforming raw footage into cinematic stories. Professional video editing for
              creators, brands, and businesses worldwide.
            </p>
            <div className="flex gap-3">
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
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-9 h-9 rounded-lg glass border border-white/8 flex items-center justify-center text-slate-500 hover:text-blue-400 hover:border-blue-500/30 transition-all"
                >
                  <Icon size={16} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">Navigation</h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="flex items-center gap-2 text-slate-500 text-sm hover:text-blue-400 transition-colors group"
                  >
                    <ChevronRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">Services</h4>
            <ul className="space-y-3">
              {['Reels Editing', 'YouTube Editing', 'Corporate Videos', 'Podcast Editing', 'Motion Graphics', 'Color Grading'].map((s) => (
                <li key={s}>
                  <button
                    onClick={() => scrollTo('#services')}
                    className="flex items-center gap-2 text-slate-500 text-sm hover:text-blue-400 transition-colors group"
                  >
                    <ChevronRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-600 text-xs">
            © {new Date().getFullYear()} JonixCreative. All rights reserved.
          </p>
          <p className="text-slate-600 text-xs flex items-center gap-1">
            Made with <Heart size={10} className="text-blue-500 fill-blue-500 mx-0.5" /> by JonixCreative
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
