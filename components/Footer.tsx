'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Mail, Phone, MapPin } from 'lucide-react';
import { FaWhatsapp, FaInstagram, FaYoutube, FaLinkedinIn } from 'react-icons/fa';
import { NAV_LINKS, SOCIAL_LINKS, CONTACT_INFO } from '@/lib/constants';

const SOCIAL = [
  { Icon: FaWhatsapp, href: SOCIAL_LINKS.whatsapp, label: 'WhatsApp' },
  { Icon: FaInstagram, href: SOCIAL_LINKS.instagram, label: 'Instagram' },
  { Icon: FaYoutube, href: SOCIAL_LINKS.youtube, label: 'YouTube' },
  { Icon: FaLinkedinIn, href: SOCIAL_LINKS.linkedin, label: 'LinkedIn' },
];

const TRENDING = [
  'Instagram Reels Editing', 'YouTube Video Editing',
  'Corporate Video Editing', 'Montages',
];

const Footer = () => {
  const scrollTo = (href: string) => {
    document.getElementById(href.replace('#', ''))?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#04040a] overflow-hidden">
      {/* Thin top gradient line */}
      <div className="absolute top-0 inset-x-0 h-px bg-linear-to-r from-transparent via-blue-500/30 to-transparent" />

      {/* Ambient glow */}
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[35vw] h-[15vw] min-w-[18rem] aspect-video bg-blue-600/4 rounded-full blur-[80px] pointer-events-none" />

      <div className="w-full max-w-400 mx-auto" style={{ paddingLeft: '1.5rem', paddingRight: '1.5rem' }}>

        {/* ── Top section ── */}
        <div
          className="pb-10 flex flex-col md:flex-row md:items-start md:justify-start gap-16 lg:gap-32 xl:gap-40 border-b border-white/5"
          style={{ paddingTop: '42px' }}
        >

          {/* Brand block */}
          <div className="max-w-xs space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-linear-to-br from-blue-600 to-blue-400 flex items-center justify-center shadow-[0_0_18px_rgba(59,130,246,0.3)]">
                <span className="text-white font-bold text-base leading-none">J</span>
              </div>
              <span className="font-display text-lg text-white tracking-widest">
                JONIX<span className="text-blue-400">CREATIVE</span>
              </span>
            </div>
            <p className="text-slate-500 text-[13px] leading-relaxed">
              Turning vision into reality — for creators, brands & businesses.
            </p>
            {/* Social row */}
            <div className="flex gap-2 pt-1">
              {SOCIAL.map(({ Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ y: -3, scale: 1.08 }}
                  className="w-8 h-8 rounded-lg bg-white/3 border border-white/7 flex items-center justify-center text-slate-500 hover:text-blue-400 hover:border-blue-500/30 hover:bg-blue-500/8 transition-all duration-200"
                >
                  <Icon size={14} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 lg:gap-16 pt-2">

            {/* Navigation */}
            <div className="space-y-4">
              <p className="text-[10px] font-bold text-blue-400 uppercase tracking-[0.2em] pt-2">Navigation</p>
              <ul className="space-y-2.5">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <button
                      onClick={() => scrollTo(link.href)}
                      className="text-[13px] text-slate-500 hover:text-white transition-colors duration-200 hover:translate-x-0.5 inline-flex"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Trending */}
            <div className="space-y-4">
              <p className="text-[10px] font-bold text-blue-400 uppercase tracking-[0.2em] pt-2">Trending</p>
              <ul className="space-y-2.5">
                {TRENDING.map((s) => (
                  <li key={s}>
                    <button
                      onClick={() => scrollTo('#services')}
                      className="text-[13px] text-slate-500 hover:text-white transition-colors duration-200 text-left"
                    >
                      {s}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect */}
            <div className="space-y-4">
              <p className="text-[10px] font-bold text-blue-400 uppercase tracking-[0.2em] pt-2">Connect</p>
              <ul className="space-y-3">
                <li>
                  <a
                    href={`mailto:${CONTACT_INFO.email}`}
                    className="flex items-center gap-2 text-[13px] text-slate-500 hover:text-white transition-colors duration-200 group"
                  >
                    <Mail size={13} className="text-blue-400 shrink-0" />
                    <span className="break-all">{CONTACT_INFO.email}</span>
                  </a>
                </li>
                <li>
                  <a
                    href={SOCIAL_LINKS.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[13px] text-slate-500 hover:text-white transition-colors duration-200"
                  >
                    <Phone size={13} className="text-green-400 shrink-0" />
                    <span>{CONTACT_INFO.phone}</span>
                  </a>
                </li>
                <li>
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(CONTACT_INFO.location)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[13px] text-slate-500 hover:text-white transition-colors duration-200"
                  >
                    <MapPin size={13} className="text-red-400 shrink-0" />
                    <span>{CONTACT_INFO.location}</span>
                  </a>
                </li>
              </ul>
            </div>

          </div>
        </div>



        {/* ── Bottom bar ── */}
        <div className="py-5 flex flex-col sm:flex-row items-center justify-between gap-4 w-full">
          <p className="text-slate-600 text-[11px]">
            © {new Date().getFullYear()} JonixCreative. All rights reserved.
          </p>
          <p className="text-slate-600 text-[11px] flex items-center gap-1" style={{ marginRight: '80px' }}>
            Made with <Heart size={9} className="text-blue-500 fill-blue-500 mx-0.5" /> by{' '}
            <a
              href="https://portfolioan-xi.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors duration-200"
            >
              a7pixels
            </a>
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
