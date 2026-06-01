'use client';

import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import LoadingScreen from '@/components/LoadingScreen';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import IntroVideoSection from '@/components/IntroVideoSection';
import AboutSection from '@/components/AboutSection';
import PortfolioSection from '@/components/PortfolioSection';
import ServicesSection from '@/components/ServicesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import WhatsAppWidget from '@/components/WhatsAppWidget';
import FAQSection from '@/components/FAQSection';

export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <AnimatePresence>
        {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <>
          <Navbar />
          <main>
            <HeroSection />
            <IntroVideoSection />
            <AboutSection />
            <PortfolioSection />
            <ServicesSection />
            <TestimonialsSection />
            <FAQSection />
            <ContactSection />
          </main>
          <Footer />
          <WhatsAppWidget />
        </>
      )}
    </>
  );
}
