'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';
import { NAV_LINKS } from '@/lib/constants';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const sections = NAV_LINKS.map((l) => l.href.replace('#', ''));
      for (const section of [...sections].reverse()) {
        const el = document.getElementById(section);
        if (el && window.scrollY >= el.offsetTop - 200) {
          setActiveSection(section);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    document.getElementById(href.replace('#', ''))?.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  };

  return (
    <>
      {/* ── Top Bar ── */}
      <div
        className={`fixed top-0 left-0 right-0 z-51 transition-all duration-500 ${
          isScrolled ? 'opacity-0 -translate-y-full pointer-events-none' : 'opacity-100 translate-y-0'
        }`}
        style={{ height: '32px' }}
      >
        <div className="h-full bg-[#0a0a14]/90 border-b border-white/4 overflow-hidden">
          <div 
            className="h-full flex items-center whitespace-nowrap w-max"
            style={{ animation: 'marquee 30s linear infinite' }}
          >
            {Array.from({ length: 12 }).map((_, i) => (
              <span key={i} className="text-[11px] tracking-[0.3em] uppercase mx-10">
                <span className="text-slate-600">JONIX</span>
                <span className="text-blue-500/60">CREATIVE</span>
                <span className="text-slate-700 mx-4">✦</span>
                <span className="text-slate-600">Video Editing</span>
                <span className="text-slate-700 mx-4">✦</span>
                <span className="text-slate-600">Motion Graphics</span>
                <span className="text-slate-700 mx-4">✦</span>
                <span className="text-slate-600">Color Grading</span>
                <span className="text-slate-700 mx-4">✦</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.25, 0, 0, 1] }}
        className={`fixed left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'top-0 bg-[#06060e]/92 backdrop-blur-2xl border-b border-white/6 shadow-[0_2px_50px_rgba(0,0,0,0.7)]'
            : 'bg-transparent'
        }`}
        style={{ top: isScrolled ? '0px' : '32px' }}
      >
        <div className="w-full max-w-400 mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="flex items-center justify-between h-17 md:h-19.5 relative">

            {/* ── Logo (Left) ── */}
            <motion.a
              href="#home"
              onClick={(e) => { e.preventDefault(); scrollTo('#home'); }}
              whileHover={{ scale: 1.02 }}
              className="flex items-center gap-3 shrink-0 group"
            >
              {/* Glowing icon */}
              <div className="relative w-9 h-9">
                <div className="absolute inset-0 rounded-xl bg-linear-to-br from-blue-500 to-blue-700 group-hover:from-blue-400 group-hover:to-blue-600 transition-all duration-300" />
                <div className="absolute inset-0 rounded-xl bg-blue-500 blur-md opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
                <div className="relative flex items-center justify-center w-full h-full">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <polygon points="5.5,4.5 12,8 5.5,11.5" fill="white" />
                  </svg>
                </div>
              </div>
              {/* Brand text */}
              <span className="font-display text-[1.2rem] md:text-[1.3rem] tracking-widest leading-none">
                <span className="text-white">JONIX</span>
                <span className="text-blue-400">CREATIVE</span>
              </span>
            </motion.a>

            {/* ── Center Nav Links (Desktop) ── */}
            <div className="hidden lg:flex items-center gap-5 xl:gap-8 absolute left-1/2 -translate-x-1/2">
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.href.replace('#', '');
                return (
                  <button
                    key={link.href}
                    onClick={() => scrollTo(link.href)}
                    className="relative group flex flex-col items-center gap-1 py-1"
                  >
                    <span
                      className={`text-sm font-medium tracking-wide transition-all duration-200 ${
                        isActive
                          ? 'text-white'
                          : 'text-slate-400 group-hover:text-white'
                      }`}
                    >
                      {link.label}
                    </span>
                    {/* Animated underline */}
                    <span
                      className={`block h-0.5 rounded-full bg-linear-to-r from-blue-500 to-blue-300 transition-all duration-300 ${
                        isActive ? 'w-full opacity-100' : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-60'
                      }`}
                    />
                  </button>
                );
              })}
            </div>

            {/* ── Right Side: CTA Button + Hamburger ── */}
            <div className="flex items-center gap-3">
              {/* CTA Button (Desktop) */}
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => scrollTo('#contact')}
                className="hidden lg:flex items-center gap-1.5 text-[11px] md:text-xs font-semibold text-white relative overflow-hidden group"
                style={{
                  background: 'linear-gradient(135deg, #1d4ed8, #3b82f6)',
                  boxShadow: '0 0 18px rgba(59,130,246,0.35)',
                  border: '1.5px solid rgba(255, 255, 255, 0.6)',
                  borderRadius: '9999px',
                  padding: '9px 20px',
                }}
              >
                {/* Shimmer effect */}
                <span className="absolute inset-0 w-full h-full bg-linear-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
                <span className="relative">Start Your Project</span>
                <ArrowRight size={13} className="relative group-hover:translate-x-0.5 transition-transform duration-200" />
              </motion.button>

              {/* Hamburger (Mobile) */}
              <button
                id="mobile-menu-toggle"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle menu"
                className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl border border-white/10 bg-white/6 hover:bg-white/10 text-slate-300 hover:text-white transition-all duration-200 shrink-0"
              >
                <AnimatePresence mode="wait" initial={false}>
                  {mobileOpen ? (
                    <motion.span
                      key="x"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.18 }}
                    >
                      <X size={18} />
                    </motion.span>
                  ) : (
                    <motion.span
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.18 }}
                    >
                      <Menu size={18} />
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom glow accent when scrolled */}
        {isScrolled && (
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/5 h-px bg-linear-to-r from-transparent via-blue-500/30 to-transparent pointer-events-none" />
        )}
      </motion.nav>

      {/* ── Mobile Drawer ── */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 z-40 bg-black/65 backdrop-blur-md lg:hidden"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 220 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-70 flex flex-col lg:hidden"
              style={{
                background: 'rgba(6,6,18,0.98)',
                backdropFilter: 'blur(30px)',
                borderLeft: '1px solid rgba(255,255,255,0.06)',
              }}
            >
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-white/6">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-linear-to-br from-blue-500 to-blue-700 flex items-center justify-center">
                    <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                      <polygon points="5.5,4.5 12,8 5.5,11.5" fill="white" />
                    </svg>
                  </div>
                  <span className="font-display text-sm tracking-widest text-white">
                    JONIX<span className="text-blue-400">CREATIVE</span>
                  </span>
                </div>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="w-8 h-8 flex items-center justify-center rounded-lg text-slate-500 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <X size={16} />
                </button>
              </div>

              {/* Nav links */}
              <nav className="flex-1 flex flex-col gap-1 px-4 py-6">
                {NAV_LINKS.map((link, i) => {
                  const isActive = activeSection === link.href.replace('#', '');
                  return (
                    <motion.button
                      key={link.href}
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: i * 0.055 }}
                      onClick={() => scrollTo(link.href)}
                      className={`flex items-center gap-3 w-full text-left px-4 py-3.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                        isActive
                          ? 'text-white bg-blue-600/15 border border-blue-500/20'
                          : 'text-slate-400 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      <span className={`w-1.5 h-1.5 rounded-full shrink-0 transition-colors ${isActive ? 'bg-blue-400' : 'bg-white/15'}`} />
                      {link.label}
                    </motion.button>
                  );
                })}
              </nav>

              {/* CTA in drawer */}
              <div className="px-4 pb-8 pt-2">
                <button
                  onClick={() => scrollTo('#contact')}
                  className="w-full flex items-center justify-center gap-2 text-sm font-semibold text-white"
                  style={{
                    background: 'linear-gradient(135deg, #1d4ed8, #3b82f6)',
                    boxShadow: '0 4px 20px rgba(59,130,246,0.3)',
                    padding: '13px 24px',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: '12px',
                  }}
                >
                  Start Your Project
                  <ArrowRight size={15} />
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
