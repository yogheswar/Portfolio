import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { PORTFOLIO_DATA } from '../data/portfolio';
import { ArrowDown, ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null);

  // Link scroll interpolation directly to the user scrolling through the Hero section
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  // Hero scroll progress: 0% -> 1.0, 25% -> 0.85, 50% -> 0.60, 75% -> 0.30, 100% -> 0
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [1, 0.85, 0.6, 0.3, 0]
  );

  // Subtle upward movement: translateY(0px) -> translateY(-75px) on desktop, -35px on mobile
  const yDesktop = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -75]
  );
  const yMobile = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -35]
  );

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative min-h-screen bg-[#050505] border-b border-white/[0.08] flex flex-col justify-between pt-20 pb-8 sm:pt-28 sm:pb-10 overflow-hidden w-full max-w-full"
    >
      {/* Subtle Ambient Red Glow Background Atmosphere */}
      <div className="absolute top-1/4 right-1/4 w-[280px] sm:w-[480px] h-[280px] sm:h-[480px] bg-[#E50914]/[0.035] rounded-full blur-[100px] sm:blur-[140px] pointer-events-none" />

      {/* Main Grid: Left Typography & Actions + Right Real Photo */}
      <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-12 w-full my-auto py-6 sm:py-10 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* LEFT SIDE: Editorial Typography, Actions & Mobile Profile Photo */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6 z-10 w-full">
            
            {/* 1. Eyebrow with Red Indicator */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-2.5"
            >
              <span className="w-2 h-2 rounded-full bg-[#E50914] shadow-[0_0_8px_#E50914] animate-pulse shrink-0" />
              <span className="text-[11px] sm:text-xs font-mono tracking-[0.2em] sm:tracking-[0.25em] text-[#E50914] font-medium uppercase block break-words">
                {PORTFOLIO_DATA.label}
              </span>
            </motion.div>

            {/* 2. Main Headline with clamp() typography */}
            <div className="space-y-3 sm:space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="text-[clamp(2.1rem,7.5vw,3.4rem)] sm:text-[clamp(3.2rem,6.8vw,4.8rem)] lg:text-[clamp(4.2rem,5.6vw,6.2rem)] font-bold tracking-tight text-[#F5F5F5] font-heading leading-[0.95] break-words"
              >
                HI, I'M <br />
                <span className="text-white hover:text-[#E50914] transition-colors duration-500 inline-block">
                  YOGHESWAR
                </span>
              </motion.h1>

              {/* 3. Supporting Editorial Statement */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="pt-1 sm:pt-2 border-l-2 border-[#E50914] pl-3.5 sm:pl-5"
              >
                <p className="text-sm sm:text-lg lg:text-xl text-[#E0E0E0] font-light leading-snug tracking-tight uppercase max-w-xl">
                  {PORTFOLIO_DATA.supportingStatement}
                </p>
              </motion.div>

              {/* 4. Factual Description */}
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
                className="text-xs sm:text-sm lg:text-base text-[#999999] font-normal leading-relaxed max-w-xl pt-0.5 sm:pt-1"
              >
                {PORTFOLIO_DATA.description}
              </motion.p>
            </div>

            {/* 5. Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="pt-1 sm:pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full max-w-md sm:max-w-none"
            >
              {/* VIEW MY WORK → */}
              <button
                type="button"
                id="hero-cta-work"
                onClick={() => handleScrollTo('projects')}
                className="group relative min-h-[48px] px-6 py-3.5 bg-[#0F0F11] border border-white/[0.12] hover:border-[#E50914] rounded-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(229,9,20,0.2)] cursor-pointer overflow-hidden flex items-center justify-center"
              >
                <div className="absolute inset-0 bg-[#E50914]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                <div className="relative z-10 flex items-center justify-center gap-3">
                  <span className="text-xs font-mono tracking-[0.2em] uppercase text-white font-medium whitespace-nowrap">
                    View My Work
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#E50914] transition-transform duration-300 group-hover:translate-x-1.5" />
                </div>
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#E50914] group-hover:w-full transition-all duration-300 ease-out" />
              </button>

              {/* LET'S TALK → */}
              <button
                type="button"
                id="hero-cta-contact"
                onClick={() => handleScrollTo('contact')}
                className="group relative min-h-[48px] px-6 py-3.5 bg-transparent border border-white/[0.08] hover:border-white/30 rounded-sm transition-all duration-300 hover:-translate-y-0.5 cursor-pointer overflow-hidden flex items-center justify-center"
              >
                <div className="relative z-10 flex items-center justify-center gap-3">
                  <span className="text-xs font-mono tracking-[0.2em] uppercase text-[#999999] group-hover:text-white transition-colors whitespace-nowrap">
                    Let's Talk
                  </span>
                  <span className="text-white/40 group-hover:text-[#E50914] transition-transform duration-300 group-hover:translate-x-1.5">
                    &rarr;
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 h-[1px] w-0 bg-white/40 group-hover:w-full transition-all duration-300" />
              </button>
            </motion.div>

            {/* 6. MOBILE PROFILE IMAGE (Displayed centered below buttons on mobile & tablet, hidden on lg desktop) */}
            <div className="block lg:hidden pt-4 pb-2 w-full flex justify-center">
              <motion.div
                style={{
                  opacity,
                  y: yMobile,
                  willChange: 'transform, opacity',
                }}
                className="relative flex items-center justify-center w-full max-w-[240px] xs:max-w-[270px] sm:max-w-[320px]"
              >
                <img
                  src="/images/profile.png"
                  alt="Yogheswar Thangapandian"
                  className="w-full h-auto aspect-[4/5] object-cover rounded-2xl border border-white/10 shadow-[0_16px_40px_rgba(0,0,0,0.7)]"
                  loading="eager"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (!target.dataset.tried) {
                      target.dataset.tried = 'true';
                      target.src = 'images/profile.png';
                    }
                  }}
                />
              </motion.div>
            </div>

            {/* 7. Authentic Stats: 3 columns, clean responsive gap */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.42, ease: [0.16, 1, 0.3, 1] }}
              className="pt-5 sm:pt-6 border-t border-white/[0.08] grid grid-cols-3 gap-2 sm:gap-6 max-w-lg w-full"
            >
              {PORTFOLIO_DATA.stats.map((stat) => (
                <div key={stat.label} className="space-y-1">
                  <span className="text-lg sm:text-2xl lg:text-3xl font-bold font-heading text-[#F5F5F5] block">
                    {stat.number}
                  </span>
                  <span className="text-[9px] xs:text-[10px] sm:text-[11px] font-mono tracking-wider text-[#999999] uppercase block leading-tight break-words">
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>

          </div>

          {/* RIGHT SIDE: Desktop Real Photo (Hidden on mobile/tablet, displayed on lg+) */}
          <div className="hidden lg:flex lg:col-span-5 items-center justify-center relative w-full pt-0">
            <motion.div
              style={{
                opacity,
                y: yDesktop,
                willChange: 'transform, opacity',
              }}
              className="relative flex items-center justify-center w-full max-w-[380px] xl:max-w-[420px]"
            >
              <img
                src="/images/profile.png"
                alt="Yogheswar Thangapandian"
                className="w-full h-auto aspect-[4/5] object-cover rounded-3xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.7)]"
                loading="eager"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (!target.dataset.tried) {
                    target.dataset.tried = 'true';
                    target.src = 'images/profile.png';
                  }
                }}
              />
            </motion.div>
          </div>

        </div>
      </div>

      {/* Bottom Bar: Centered Subtle Scroll Indicator (EST. 2026 metadata removed) */}
      <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-12 w-full flex items-center justify-center pointer-events-auto z-10 pt-2 pb-2">
        <button
          type="button"
          onClick={() => handleScrollTo('about')}
          aria-label="Scroll to About section"
          className="group flex items-center justify-center w-11 h-11 text-[#999999] hover:text-white transition-colors cursor-pointer"
        >
          <ArrowDown className="w-4 h-4 text-[#E50914] transition-transform duration-300 group-hover:translate-y-1 animate-bounce" />
        </button>
      </div>

    </section>
  );
};

export default Hero;
