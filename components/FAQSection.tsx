'use client';

import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { FAQ_ITEMS } from '@/lib/constants';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  // Toggle on click/touch (mobile)
  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  // Open on hover (desktop) — mouseenter doesn't fire on touch screens
  const handleMouseEnter = useCallback((i: number) => {
    setOpenIndex(i);
  }, []);

  return (
    <section id="faq" className="bg-[#050508] relative overflow-hidden py-16 px-4 sm:px-8 lg:px-16">
      {/* Background decoration */}
      <div className="absolute top-1/3 left-0 w-[30vw] h-[30vw] min-w-[15rem] aspect-square bg-blue-900/8 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[25vw] h-[25vw] min-w-[12rem] aspect-square bg-indigo-900/8 rounded-full blur-[100px] pointer-events-none" />

      <div className="w-full flex flex-col items-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center w-full"
          style={{ marginBottom: '60px' }}
        >
          <div className="section-divider" />
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-white mt-4">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="w-full max-w-4xl mx-auto space-y-5">
          {FAQ_ITEMS.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
              >
                <div
                  onMouseEnter={() => handleMouseEnter(i)}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? 'glass border-blue-500/30 shadow-[0_0_30px_rgba(59,130,246,0.08)]'
                      : 'glass border-white/8 hover:border-blue-500/20'
                  }`}
                >
                  {/* Question row — click/touch toggles */}
                  <button
                    id={`faq-q-${item.id}`}
                    onClick={() => toggle(i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-a-${item.id}`}
                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left cursor-pointer group"
                  >
                    <span
                      className={`font-semibold text-base leading-snug transition-colors duration-200 ${
                        isOpen ? 'text-blue-300' : 'text-white group-hover:text-blue-200'
                      }`}
                    >
                      {item.question}
                    </span>
                    <span
                      className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                        isOpen
                          ? 'bg-blue-600/30 text-blue-400'
                          : 'bg-white/5 text-slate-400 group-hover:bg-blue-600/15 group-hover:text-blue-400'
                      }`}
                      style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }}
                    >
                      <ChevronDown size={16} />
                    </span>
                  </button>

                  {/* Answer */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-a-${item.id}`}
                        role="region"
                        aria-labelledby={`faq-q-${item.id}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.25, 0, 0, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="px-6 pb-5 text-slate-400 text-sm leading-relaxed border-t border-white/5 pt-4">
                          {item.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>


      </div>
    </section>
  );
};

export default FAQSection;
