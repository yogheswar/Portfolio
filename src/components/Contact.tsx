import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, ArrowRight, Check, Copy } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolio';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 6000);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.contact.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section
      id="contact"
      className="relative py-20 sm:py-32 lg:py-44 border-b border-white/[0.08] overflow-hidden bg-[#050505] w-full max-w-full"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-12 w-full">
        
        {/* Section Heading & Large Editorial Headline */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14 sm:mb-20 lg:mb-24"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/[0.03] border border-white/[0.08] rounded-full mb-4 sm:mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E50914] animate-pulse shrink-0" />
            <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.2em] sm:tracking-[0.25em] text-[#999999] uppercase">
              05 / GET IN TOUCH
            </span>
          </div>

          <div className="text-[clamp(2.4rem,8.5vw,4.5rem)] sm:text-7xl md:text-8xl lg:text-9xl font-bold font-heading text-[#F5F5F5] tracking-tight leading-[0.94] break-words">
            LET'S BUILD <br />
            <span className="text-white hover:text-[#E50914] transition-colors duration-500 inline-block">
              SOMETHING<span className="text-[#E50914]">.</span>
            </span>
          </div>
          <p className="mt-5 sm:mt-8 text-base sm:text-lg lg:text-xl text-[#999999] font-light max-w-xl leading-relaxed">
            Have an engineering role, collaborative project, or cloud infrastructure challenge? Let's connect.
          </p>
        </motion.div>

        {/* Content: Real Contact Information + Clean Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start w-full">
          
          {/* Direct Authentic Channels (Left, 5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-8 sm:space-y-10 w-full"
          >
            <span className="text-xs font-mono tracking-[0.2em] text-[#E50914] uppercase block font-semibold">
              DIRECT REACH
            </span>

            <div className="space-y-5 sm:space-y-6 w-full">
              
              {/* Email */}
              <div className="py-3.5 border-b border-white/[0.08] flex flex-col xs:flex-row xs:items-center justify-between gap-2 group">
                <span className="text-xs font-mono text-[#999999] uppercase shrink-0">Email</span>
                <div className="flex items-center gap-2.5">
                  <a
                    href={`mailto:${PORTFOLIO_DATA.contact.email}`}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-[#F5F5F5] hover:text-white transition-colors break-all"
                  >
                    <span>{PORTFOLIO_DATA.contact.email}</span>
                  </a>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="w-8 h-8 flex items-center justify-center text-[#999999] hover:text-white transition-colors cursor-pointer shrink-0 rounded-xs hover:bg-white/[0.05]"
                    title="Copy email address"
                    aria-label="Copy email address"
                  >
                    {copiedEmail ? (
                      <Check className="w-3.5 h-3.5 text-[#E50914]" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Phone */}
              <div className="py-3.5 border-b border-white/[0.08] flex items-center justify-between gap-2">
                <span className="text-xs font-mono text-[#999999] uppercase">Phone</span>
                <a
                  href={`tel:${PORTFOLIO_DATA.contact.phone}`}
                  className="group inline-flex items-center gap-1.5 text-xs sm:text-sm text-[#F5F5F5] hover:text-white transition-colors"
                >
                  <span>{PORTFOLIO_DATA.contact.phone}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#E50914] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>

              {/* Location */}
              <div className="py-3.5 border-b border-white/[0.08] flex items-center justify-between gap-2">
                <span className="text-xs font-mono text-[#999999] uppercase">Location</span>
                <span className="text-xs sm:text-sm text-[#F5F5F5] text-right">
                  {PORTFOLIO_DATA.contact.location}
                </span>
              </div>

              {/* GitHub */}
              <div className="py-3.5 border-b border-white/[0.08] flex items-center justify-between gap-2">
                <span className="text-xs font-mono text-[#999999] uppercase">GitHub</span>
                <a
                  href={PORTFOLIO_DATA.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1.5 text-xs sm:text-sm text-[#F5F5F5] hover:text-white transition-colors"
                >
                  <span>github.com/yogheswar</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#E50914] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>

            </div>

            {/* Quick Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-5 w-full">
              <a
                href={`mailto:${PORTFOLIO_DATA.contact.email}`}
                className="group relative min-h-[44px] px-5 py-3 bg-white/[0.03] border border-white/[0.1] hover:border-[#E50914] rounded-sm transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center"
              >
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono tracking-[0.2em] uppercase text-white font-medium">
                    Send Email
                  </span>
                  <ArrowRight className="w-3 h-3 text-[#E50914] transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </a>

              <a
                href={PORTFOLIO_DATA.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative min-h-[44px] px-5 py-3 bg-transparent border border-white/[0.06] hover:border-white/30 rounded-sm transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center"
              >
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono tracking-[0.2em] uppercase text-[#999999] group-hover:text-white transition-colors">
                    GitHub Profile
                  </span>
                  <ArrowUpRight className="w-3 h-3 text-white/40 group-hover:text-[#E50914] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </a>
            </div>
          </motion.div>

          {/* Minimal Contact Form (Right, 7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 w-full pt-4 lg:pt-0"
          >
            <span className="text-xs font-mono tracking-[0.2em] text-[#999999] uppercase block mb-6 sm:mb-8">
              SEND A MESSAGE
            </span>

            {submitted ? (
              <div className="p-6 sm:p-8 bg-white/[0.02] border border-white/[0.08] rounded-sm space-y-3">
                <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#E50914] uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E50914] animate-ping" />
                  <span>MESSAGE DISPATCHED</span>
                </div>
                <h4 className="text-xl sm:text-2xl font-bold font-heading text-[#F5F5F5]">
                  Thank you for reaching out.
                </h4>
                <p className="text-sm text-[#999999] leading-relaxed">
                  I will review your message promptly. You can also write directly to{' '}
                  <a href={`mailto:${PORTFOLIO_DATA.contact.email}`} className="text-[#E50914] underline">
                    {PORTFOLIO_DATA.contact.email}
                  </a>.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8 w-full">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-xs font-mono tracking-wider text-[#999999] uppercase block">
                      Name *
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your name"
                      className="w-full min-h-[44px] bg-transparent border-b border-white/[0.15] focus:border-[#E50914] py-2.5 text-sm sm:text-base text-[#F5F5F5] placeholder:text-zinc-600 focus:outline-none transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-xs font-mono tracking-wider text-[#999999] uppercase block">
                      Email *
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="example@gmail.com"
                      className="w-full min-h-[44px] bg-transparent border-b border-white/[0.15] focus:border-[#E50914] py-2.5 text-sm sm:text-base text-[#F5F5F5] placeholder:text-zinc-600 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-xs font-mono tracking-wider text-[#999999] uppercase block">
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Cloud role, internship, or project discussion"
                    className="w-full min-h-[44px] bg-transparent border-b border-white/[0.15] focus:border-[#E50914] py-2.5 text-sm sm:text-base text-[#F5F5F5] placeholder:text-zinc-600 focus:outline-none transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs font-mono tracking-wider text-[#999999] uppercase block">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your project, team, or cloud infrastructure requirements..."
                    className="w-full min-h-[100px] bg-transparent border-b border-white/[0.15] focus:border-[#E50914] py-2.5 text-sm sm:text-base text-[#F5F5F5] placeholder:text-zinc-600 focus:outline-none transition-colors resize-none"
                  />
                </div>

                {/* Submit button with red accent hover animation */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="group relative min-h-[48px] w-full sm:w-auto px-7 py-3.5 bg-[#0F0F11] border border-white/[0.12] hover:border-[#E50914] rounded-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(229,9,20,0.25)] cursor-pointer overflow-hidden flex items-center justify-center"
                  >
                    {/* Background red fill expanding on hover */}
                    <div className="absolute inset-0 bg-[#E50914]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                    <div className="relative z-10 flex items-center gap-3">
                      <span className="text-xs font-mono tracking-[0.2em] uppercase text-white font-medium">
                        Send Message
                      </span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#E50914] transition-transform duration-300 group-hover:translate-x-1.5" />
                    </div>

                    {/* Animated bottom red line */}
                    <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#E50914] group-hover:w-full transition-all duration-300 ease-out" />
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

export default Contact;
