import React, { useState, useEffect } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavItem {
  label: string;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  { label: 'HOME', href: '#home' },
  { label: 'ABOUT', href: '#about' },
  { label: 'PROJECTS & EXPERIENCE', href: '#projects' },
  { label: 'SKILLS & KNOWLEDGE', href: '#skills' },
  { label: 'ACHIEVEMENTS', href: '#achievements' },
  { label: 'GET IN TOUCH', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sectionIds = ['home', 'about', 'projects', 'skills', 'achievements', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
      document.body.style.overflow = '';
    }
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      if (window.history.pushState) {
        window.history.pushState(null, '', href);
      }
    }
  };

  return (
    <header
      id="main-nav"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || mobileMenuOpen
          ? 'py-3.5 sm:py-4 bg-[#050505]/95 backdrop-blur-md border-b border-white/[0.08]'
          : 'py-5 sm:py-7 bg-transparent border-b border-transparent'
      }`}
    >
      <div className="container-editorial flex items-center justify-between">
        
        {/* Brand Logo with red accent dot */}
        <a
          id="nav-logo"
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="group text-sm sm:text-base font-semibold tracking-[0.22em] sm:tracking-[0.25em] uppercase text-[#F5F5F5] hover:text-white transition-colors flex items-center gap-1 min-h-[44px]"
        >
          <span>YOGHESWAR</span>
          <span className="text-[#E50914] text-lg font-bold group-hover:scale-125 transition-transform inline-block">
            .
          </span>
        </a>

        {/* Center Desktop Navigation (Desktop & Laptops) */}
        <nav id="desktop-nav" className="hidden lg:flex items-center gap-3 xl:gap-6">
          {NAV_ITEMS.map((item) => {
            const sectionId = item.href.substring(1);
            const isActive = activeSection === sectionId;

            return (
              <a
                key={item.label}
                id={`nav-${sectionId}`}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`group relative py-1.5 text-[10.5px] xl:text-xs tracking-wider transition-colors duration-300 flex items-center gap-1.5 whitespace-nowrap ${
                  isActive ? 'text-white font-medium' : 'text-[#8E8E93] hover:text-white'
                }`}
              >
                {isActive && (
                  <span className="w-1 h-1 rounded-full bg-[#E50914] shadow-[0_0_6px_#E50914]" />
                )}
                <span>{item.label}</span>
                {/* Underline expansion */}
                <span
                  className={`absolute bottom-0 left-0 h-[1.5px] bg-[#E50914] transition-all duration-300 ease-out ${
                    isActive ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </a>
            );
          })}
        </nav>

        {/* Right Action CTA: LET'S TALK → */}
        <div className="hidden lg:flex items-center">
          <a
            id="nav-cta-talk"
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="group relative px-3.5 xl:px-4 py-2 rounded-sm border border-white/[0.1] hover:border-[#E50914] bg-white/[0.02] hover:bg-[#E50914]/10 transition-all duration-300 flex items-center gap-2 text-[11px] xl:text-xs font-mono tracking-widest uppercase text-[#F5F5F5] hover:text-white hover:-translate-y-0.5 whitespace-nowrap"
          >
            <span>Let's Talk</span>
            <ArrowRight className="w-3 h-3 text-[#E50914] transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>

        {/* Mobile / Tablet Menu Button with MENU text & 44px min touch target */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden min-h-[44px] px-2 py-1.5 flex items-center gap-2 text-[#F5F5F5] hover:text-white focus:outline-none transition-colors border border-white/[0.08] rounded-sm bg-white/[0.02]"
          aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={mobileMenuOpen}
        >
          <span className="text-[11px] font-mono tracking-[0.2em] uppercase font-medium">
            {mobileMenuOpen ? 'CLOSE' : 'MENU'}
          </span>
          {mobileMenuOpen ? (
            <X className="w-4 h-4 text-[#E50914]" />
          ) : (
            <Menu className="w-4 h-4 text-[#F5F5F5]" />
          )}
        </button>
      </div>

      {/* Mobile Animated Full Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden w-full overflow-hidden bg-[#070708] border-b border-white/[0.1] shadow-2xl"
          >
            <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col space-y-2">
              {NAV_ITEMS.map((item, idx) => {
                const sectionId = item.href.substring(1);
                const isActive = activeSection === sectionId;

                return (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.04, duration: 0.25 }}
                    className={`min-h-[48px] px-3 rounded-xs tracking-wider transition-colors flex items-center justify-between border-b border-white/[0.04] ${
                      isActive
                        ? 'text-white font-semibold bg-white/[0.03]'
                        : 'text-[#9E9EA4] hover:text-white'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      {isActive && (
                        <span className="w-1.5 h-1.5 rounded-full bg-[#E50914] shadow-[0_0_6px_#E50914]" />
                      )}
                      <span className="text-xs sm:text-sm font-mono tracking-widest uppercase">
                        {item.label}
                      </span>
                    </div>
                    <span className="text-xs text-[#E50914] font-mono">&rarr;</span>
                  </motion.a>
                );
              })}

              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.28, duration: 0.25 }}
                className="pt-4"
              >
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, '#contact')}
                  className="min-h-[48px] px-4 w-full rounded-sm bg-[#E50914]/10 border border-[#E50914]/40 hover:bg-[#E50914] hover:text-white text-[#E50914] flex items-center justify-between text-xs font-mono uppercase tracking-widest font-semibold transition-all"
                >
                  <span>LET'S TALK</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
