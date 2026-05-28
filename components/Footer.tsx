'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';
import { NAV_LINKS, SOCIAL_LINKS } from '@/lib/constants';

const Footer = () => {
  const scrollTo = (href: string) => {
    document.getElementById(href.replace('#', ''))?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050508] relative pt-10">
      {/* Footer Wrapper - Card Style */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0a0a0f] border border-white/5 rounded-[40px] p-8 md:p-16 relative overflow-hidden">
          {/* Subtle top glow */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="grid lg:grid-cols-2 gap-16 relative z-10">
            {/* Left: Huge CTA */}
            <div>
              <h2 className="font-display text-5xl sm:text-7xl text-white leading-[0.9] tracking-wide mb-8">
                HAVE A PROJECT <br />
                <span className="text-slate-500">IN MIND?</span>
              </h2>
              <button 
                onClick={() => scrollTo('#contact')}
                className="group flex items-center gap-4 bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-500 hover:text-white transition-all"
              >
                Let&apos;s Talk
                <div className="bg-black/10 group-hover:bg-white/20 p-2 rounded-full transition-colors">
                  <ArrowRight size={20} />
                </div>
              </button>
            </div>

            {/* Right: Links & Socials */}
            <div className="grid grid-cols-2 gap-10 lg:pl-10">
              {/* Navigation */}
              <div>
                <h4 className="text-white font-semibold mb-6 uppercase tracking-widest text-sm">Explore</h4>
                <ul className="space-y-4">
                  {NAV_LINKS.map((link) => (
                    <li key={link.href}>
                      <button
                        onClick={() => scrollTo(link.href)}
                        className="text-slate-400 hover:text-white hover:translate-x-2 transition-all text-sm md:text-base text-left"
                      >
                        {link.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Socials */}
              <div>
                <h4 className="text-white font-semibold mb-6 uppercase tracking-widest text-sm">Connect</h4>
                <ul className="space-y-4">
                  {[
                    { label: 'Instagram', href: SOCIAL_LINKS.instagram },
                    { label: 'YouTube', href: SOCIAL_LINKS.youtube },
                    { label: 'LinkedIn', href: SOCIAL_LINKS.linkedin },
                    { label: 'WhatsApp', href: SOCIAL_LINKS.whatsapp },
                  ].map((social) => (
                    <li key={social.label}>
                      <a
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-blue-400 hover:translate-x-2 transition-all text-sm md:text-base flex items-center gap-2 w-max"
                      >
                        {social.label}
                        <ArrowRight size={14} className="-rotate-45 opacity-50" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-blue-400 flex items-center justify-center glow-blue-sm">
                <span className="text-white font-bold text-xl">J</span>
              </div>
              <span className="font-display text-2xl text-white tracking-wider">
                JONIX<span className="text-slate-500">CREATIVE</span>
              </span>
            </div>
            
            <p className="text-slate-500 text-sm font-medium text-center md:text-right">
              © {new Date().getFullYear()} JonixCreative.<br className="md:hidden" /> All rights reserved.
            </p>
          </div>
        </div>
      </div>
      <div className="h-10"></div> {/* Bottom padding */}
    </footer>
  );
};

export default Footer;
