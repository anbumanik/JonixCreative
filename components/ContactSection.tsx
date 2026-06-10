'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  MapPin,
  Clock,
  CheckCircle,
  Loader2,
} from 'lucide-react';
import { submitContactForm } from '@/firebase/database';
import type { ContactFormData } from '@/lib/types';

const PROJECT_TYPES = [
  'Instagram Reels Editing',
  'YouTube Video Editing',
  'Corporate Video Editing',
  'Montages',
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
    const { name, value } = e.target;

    // Validate Name: Allow only letters and spaces by stripping other characters
    if (name === 'name') {
      const sanitized = value.replace(/[^a-zA-Z\s]/g, '');
      setForm((prev) => ({ ...prev, name: sanitized }));
      return;
    }

    // Validate Phone: Allow only numbers, plus sign, spaces, dashes, and parentheses by stripping others
    if (name === 'phone') {
      const sanitized = value.replace(/[^0-9+\s\-()]/g, '');
      setForm((prev) => ({ ...prev, phone: sanitized }));
      return;
    }

    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setError('');

    // Confirm @ is in the email address
    if (!form.email.includes('@')) {
      setStatus('error');
      setError('Please enter a valid email address containing @.');
      return;
    }

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
    <section id="contact" className="pt-20 sm:pt-28 pb-10 sm:pb-14 px-6 sm:px-12 bg-[#050508] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 left-[10%] -translate-x-1/2 w-[35vw] h-[35vw] min-w-[18rem] aspect-square bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="w-full max-w-400 mx-auto overflow-hidden">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
          style={{ marginBottom: '64px' }}
        >
          <div className="section-divider" />
          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl text-white mt-4 uppercase">
            Start Your <span className="gradient-text">Project</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-12 gap-12 md:gap-16 lg:gap-20 items-center">
          
          {/* Left Column: Let's Talk Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="md:col-span-5 lg:col-span-4 md:col-start-2 lg:col-start-3 space-y-8 flex flex-col items-center md:items-start text-center md:text-left w-full overflow-hidden"
            style={{ marginTop: '-40px' }}
          >
            <div className="space-y-4 w-full">
              <p className="text-[13px] font-bold text-blue-500 uppercase tracking-[0.25em]">
                Let&apos;s Talk
              </p>
              <p className="text-slate-400 text-sm sm:text-lg leading-relaxed">
                Ready to elevate your brand with cinematic visuals? Whether it&apos;s a high-impact commercial or an engaging YouTube video, we&apos;re here to bring your vision to life. Let&apos;s discuss your next big project.
              </p>
            </div>

            {/* Simple Contact List */}
            <div className="space-y-6 pt-4 flex flex-col items-center md:items-start w-full">
              {[
                { Icon: Mail, value: 'jonixcreative@gmail.com', href: 'mailto:jonixcreative@gmail.com' },
                { Icon: MapPin, value: 'Kodairoad, Dindigul, Tamilnadu', href: 'https://maps.google.com/?q=Kodairoad,+Dindigul,+Tamilnadu' },
                { Icon: Clock, value: 'Responds within 24h', href: null },
              ].map(({ Icon, value, href }) => {
                const content = (
                  <div className="flex items-center gap-4 group overflow-hidden">
                    <div className="w-12 h-12 shrink-0 rounded-full bg-[#101015] border border-white/6 flex items-center justify-center text-blue-500 group-hover:bg-blue-600/10 group-hover:border-blue-500/20 transition-all duration-300">
                      <Icon size={22} />
                    </div>
                    <span className="text-slate-300 font-medium text-sm sm:text-base group-hover:text-white transition-colors break-all">
                      {value}
                    </span>
                  </div>
                );

                if (href) {
                  return (
                    <a key={value} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noopener noreferrer' : undefined} className="block">
                      {content}
                    </a>
                  );
                }

                return <div key={value}>{content}</div>;
              })}
            </div>
          </motion.div>

          {/* Right Column: Contact Form Box */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="md:col-span-6 md:col-start-7 flex justify-center lg:justify-start lg:pl-8"
          >
            {status === 'success' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-full max-w-[440px] flex flex-col items-center justify-center text-center p-10 bg-[#101016] border border-blue-500/10 rounded-[28px] shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
              >
                <CheckCircle size={64} className="text-blue-500 mb-6" />
                <h3 className="font-sans font-bold text-3xl text-white mb-3">Message Sent!</h3>
                <p className="text-slate-400 mb-8 max-w-sm text-sm">
                  Thank you for reaching out! We&apos;ve received your message and will get back to you within 24 hours with your custom quote.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="px-8 py-3.5 rounded-full border border-white/10 text-white font-medium hover:bg-white/5 hover:border-white/20 transition-all cursor-pointer"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="w-full max-w-[440px] bg-[#101016] border border-white/15 rounded-[28px] flex flex-col gap-5 shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                style={{ padding: '28px' }}
              >
                {/* Name */}
                <div className="flex flex-col gap-3">
                  <label htmlFor="contact-name" className="block text-[11px] font-bold text-[#8a8a93] uppercase tracking-[0.2em]">
                    Your Name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Enter the Name"
                    pattern="^[a-zA-Z\s]*$"
                    title="Only letters and spaces are allowed"
                    className="w-full px-5 py-4.5 rounded-[10px] bg-[#08080b] border border-white/8 text-white placeholder:text-[#55555c] focus:outline-none focus:border-blue-500/50 focus:bg-black/40 transition-all duration-300 text-[15px]"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-3">
                  <label htmlFor="contact-email" className="block text-[11px] font-bold text-[#8a8a93] uppercase tracking-[0.2em]">
                    Email Address
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Enter the Email"
                    className="w-full px-5 py-4.5 rounded-[10px] bg-[#08080b] border border-white/8 text-white placeholder:text-[#55555c] focus:outline-none focus:border-blue-500/50 focus:bg-black/40 transition-all duration-300 text-[15px]"
                  />
                </div>

                {/* Phone */}
                <div className="flex flex-col gap-3">
                  <label htmlFor="contact-phone" className="block text-[11px] font-bold text-[#8a8a93] uppercase tracking-[0.2em]">
                    Phone Number
                  </label>
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="Enter the Phone Number"
                    pattern="^[0-9+\s\-()]*$"
                    title="Only numbers and formatting symbols are allowed"
                    className="w-full px-5 py-4.5 rounded-[10px] bg-[#08080b] border border-white/8 text-white placeholder:text-[#55555c] focus:outline-none focus:border-blue-500/50 focus:bg-black/40 transition-all duration-300 text-[15px]"
                  />
                </div>

                {/* Project Type */}
                <div className="flex flex-col gap-3">
                  <label htmlFor="contact-project" className="block text-[11px] font-bold text-[#8a8a93] uppercase tracking-[0.2em]">
                    Project Type
                  </label>
                  <div className="relative">
                    <select
                      id="contact-project"
                      name="projectType"
                      required
                      value={form.projectType}
                      onChange={handleChange}
                      className="w-full px-5 py-4.5 rounded-[10px] bg-[#08080b] border border-white/8 text-white focus:outline-none focus:border-blue-500/50 focus:bg-black/40 transition-all duration-300 text-[15px] appearance-none cursor-pointer pr-10"
                    >
                      <option value="" disabled className="bg-[#101016] text-[#55555c]">Select project type...</option>
                      {PROJECT_TYPES.map((t) => (
                        <option key={t} value={t} className="bg-[#101016] text-white">{t}</option>
                      ))}
                    </select>
                    <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-[#55555c]">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-3">
                  <label htmlFor="contact-message" className="block text-[11px] font-bold text-[#8a8a93] uppercase tracking-[0.2em]">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    className="w-full px-5 py-4.5 rounded-[10px] bg-[#08080b] border border-white/8 text-white placeholder:text-[#55555c] focus:outline-none focus:border-blue-500/50 focus:bg-black/40 transition-all duration-300 text-[15px] resize-none leading-relaxed"
                  />
                </div>

                {error && (
                  <p className="text-red-400 text-sm bg-red-500/10 border border-red-500/20 rounded-xl p-3">
                    {error}
                  </p>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  id="contact-submit"
                  disabled={status === 'loading'}
                  className="w-full py-4 px-8 rounded-full bg-linear-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white font-bold tracking-wide shadow-[0_8px_30px_rgba(59,130,246,0.3)] hover:shadow-[0_8px_35px_rgba(59,130,246,0.45)] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed hover:-translate-y-0.5 active:scale-[0.98] mt-2"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <span className="text-[18px] font-light ml-0.5">→</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
        
        {/* Spacer to guarantee vertical spacing before footer */}
        <div className="h-8 sm:h-12" />
      </div>
    </section>
  );
};

export default ContactSection;
