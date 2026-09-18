import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolio';
import { ArrowUp, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-12 sm:py-16 lg:py-20 bg-[#050505] text-[#999999] border-t border-white/[0.08] w-full overflow-hidden">
      <div className="container-editorial flex flex-col md:flex-row items-start md:items-center justify-between gap-8 sm:gap-10 w-full">
        
        {/* Left: Name and Title + Status badge */}
        <div className="space-y-2">
          <div className="flex items-center gap-1.5 text-sm font-semibold tracking-[0.2em] uppercase text-[#F5F5F5]">
            <span>YOGHESWAR</span>
            <span className="text-[#E50914] font-bold">.</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
            <span className="text-[11px] font-mono tracking-wider text-[#A0A0A0] uppercase">
              Available for Cloud &amp; DevOps roles
            </span>
          </div>
        </div>

        {/* Center: Authentic Links */}
        <div className="flex flex-wrap items-center gap-5 sm:gap-8 text-xs font-mono uppercase tracking-wider">
          <a
            href={PORTFOLIO_DATA.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors py-2"
          >
            GitHub
          </a>
          <a
            href={`mailto:${PORTFOLIO_DATA.contact.email}`}
            className="hover:text-white transition-colors py-2"
          >
            Email
          </a>
          <a
            href={`tel:${PORTFOLIO_DATA.contact.phone}`}
            className="hover:text-white transition-colors py-2"
          >
            Phone
          </a>
        </div>

        {/* Right: Back to Top & Copyright */}
        <div className="flex flex-col-reverse xs:flex-row items-start xs:items-center justify-between md:justify-end gap-4 sm:gap-6 w-full md:w-auto pt-4 md:pt-0 border-t border-white/[0.05] md:border-t-0">
          <span className="text-xs font-mono text-white/30">
            &copy; 2026 Yogheswar. All rights reserved.
          </span>

          <button
            type="button"
            onClick={scrollToTop}
            className="w-11 h-11 flex items-center justify-center rounded-sm bg-white/[0.02] border border-white/[0.08] hover:border-[#E50914] transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
            aria-label="Scroll back to top"
          >
            <ArrowUp className="w-4 h-4 text-[#999999] hover:text-[#E50914] transition-colors" />
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
