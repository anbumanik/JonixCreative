'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Send,
  Phone,
  Mail,
  MapPin,
  CheckCircle,
  Loader2,
} from 'lucide-react';
import { FaWhatsapp, FaInstagram, FaYoutube, FaLinkedinIn } from 'react-icons/fa';
import { submitContactForm } from '@/firebase/database';
import { SOCIAL_LINKS, CONTACT_INFO } from '@/lib/constants';
import type { ContactFormData } from '@/lib/types';

const PROJECT_TYPES = [
  'Instagram Reels Editing',
  'YouTube Video Editing',
  'Corporate Video',
  'Podcast Editing',
  'Motion Graphics',
  'Color Grading',
  'Shorts Editing',
  'Commercial Ads',
  'Other',
];

const initialForm: ContactFormData = {
  name: '',
  email: '',
  phone: '',
  projectType: '',
  message: '',
};

const ContactSection = () => {
  const [form, setForm] = useState<ContactFormData>(initialForm);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [error, setError] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setError('');

    try {
      await submitContactForm(form);
      setStatus('success');
      setForm(initialForm);
    } catch (err) {
      console.error('Form error:', err);
      setStatus('error');
      setError('Something went wrong. Please try again or contact us directly.');
    }
  };

  return (
    <section id="contact" className="section-padding bg-[#07070f] relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-blue-900/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="section-divider" />
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-white mt-4">
            Start Your <span className="gradient-text">Project</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2 space-y-8"
          >
            {/* Info cards */}
            <div className="space-y-4">
              {[
                { Icon: Phone, label: 'Phone', value: CONTACT_INFO.phone, href: `tel:${CONTACT_INFO.phone}` },
                { Icon: Mail, label: 'Email', value: CONTACT_INFO.email, href: `mailto:${CONTACT_INFO.email}` },
                { Icon: MapPin, label: 'Location', value: CONTACT_INFO.location, href: '#' },
              ].map(({ Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  className="flex items-center gap-4 p-5 rounded-2xl glass border border-white/5 hover:border-blue-500/20 transition-all group card-hover"
                >
                  <div className="w-11 h-11 rounded-xl bg-blue-600/15 border border-blue-500/20 flex items-center justify-center group-hover:bg-blue-600/25 transition-colors shrink-0">
                    <Icon size={18} className="text-blue-400" />
                  </div>
                  <div>
                    <p className="text-slate-500 text-xs uppercase tracking-wider">{label}</p>
                    <p className="text-white text-sm font-medium">{value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social links */}
            <div>
              <p className="text-slate-500 text-xs uppercase tracking-wider mb-4">Follow Us</p>
              <div className="flex gap-3">
                {[
                  { Icon: FaWhatsapp, href: SOCIAL_LINKS.whatsapp, label: 'WhatsApp', color: 'hover:bg-green-500/20 hover:border-green-500/30' },
                  { Icon: FaInstagram, href: SOCIAL_LINKS.instagram, label: 'Instagram', color: 'hover:bg-pink-500/20 hover:border-pink-500/30' },
                  { Icon: FaYoutube, href: SOCIAL_LINKS.youtube, label: 'YouTube', color: 'hover:bg-red-500/20 hover:border-red-500/30' },
                  { Icon: FaLinkedinIn, href: SOCIAL_LINKS.linkedin, label: 'LinkedIn', color: 'hover:bg-blue-500/20 hover:border-blue-500/30' },
                ].map(({ Icon, href, label, color }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-11 h-11 rounded-xl glass border border-white/10 flex items-center justify-center text-slate-400 hover:text-white transition-all ${color}`}
                  >
                    <Icon size={18} />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href={SOCIAL_LINKS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-5 rounded-2xl bg-green-600/10 border border-green-500/20 hover:bg-green-600/15 hover:border-green-500/30 transition-all group"
            >
              <FaWhatsapp size={22} className="text-green-400" />
              <div>
                <p className="text-white font-medium text-sm">Chat on WhatsApp</p>
                <p className="text-slate-500 text-xs">Usually replies within an hour</p>
              </div>
            </a>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-3"
          >
            {status === 'success' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center p-12 glass rounded-3xl border border-green-500/20"
              >
                <CheckCircle size={64} className="text-green-400 mb-6" />
                <h3 className="font-display text-3xl text-white mb-3">Message Sent!</h3>
                <p className="text-slate-400 mb-8 max-w-md">
                  Thank you for reaching out! We&apos;ve received your message and will get back to
                  you within 24 hours with your custom quote.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="btn-outline"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="glass border border-white/8 rounded-3xl p-8 sm:p-10 space-y-6"
              >
                <div className="grid sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="contact-name" className="block text-slate-400 text-xs uppercase tracking-wider mb-2">
                      Full Name *
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-blue-500/50 focus:bg-white/8 transition-all text-sm"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="contact-email" className="block text-slate-400 text-xs uppercase tracking-wider mb-2">
                      Email Address *
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-blue-500/50 focus:bg-white/8 transition-all text-sm"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  {/* Phone */}
                  <div>
                    <label htmlFor="contact-phone" className="block text-slate-400 text-xs uppercase tracking-wider mb-2">
                      Phone Number
                    </label>
                    <input
                      id="contact-phone"
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+1 234 567 8900"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-blue-500/50 focus:bg-white/8 transition-all text-sm"
                    />
                  </div>

                  {/* Project Type */}
                  <div>
                    <label htmlFor="contact-project" className="block text-slate-400 text-xs uppercase tracking-wider mb-2">
                      Project Type *
                    </label>
                    <select
                      id="contact-project"
                      name="projectType"
                      required
                      value={form.projectType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-blue-500/50 transition-all text-sm appearance-none"
                    >
                      <option value="" disabled className="bg-slate-900">Select type...</option>
                      {PROJECT_TYPES.map((t) => (
                        <option key={t} value={t} className="bg-slate-900">{t}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="contact-message" className="block text-slate-400 text-xs uppercase tracking-wider mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project, timeline, and any specific requirements..."
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-blue-500/50 focus:bg-white/8 transition-all text-sm resize-none"
                  />
                </div>

                {error && (
                  <p className="text-red-400 text-sm bg-red-500/10 border border-red-500/20 rounded-xl p-3">
                    {error}
                  </p>
                )}

                {/* Buttons */}
                <div className="flex flex-wrap gap-4">
                  <button
                    type="submit"
                    id="contact-submit"
                    disabled={status === 'loading'}
                    className="btn-primary flex-1 sm:flex-none justify-center min-w-[180px]"
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 size={16} className="animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Get a Quote
                      </>
                    )}
                  </button>
                  <button
                    type="button"
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="btn-outline"
                  >
                    Contact Us
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
