import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { ACHIEVEMENTS, Achievement } from '../data/achievements';
import { Award, Trophy, Rocket, Sparkles } from 'lucide-react';

export const Achievements: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [lineProgress, setLineProgress] = useState(0);
  const [activeItems, setActiveItems] = useState<{ [id: string]: boolean }>({});
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate how far through the timeline container the user has scrolled
      const start = windowHeight * 0.75;
      const total = rect.height;
      const current = start - rect.top;
      
      const progress = Math.min(100, Math.max(0, (current / total) * 100));
      setLineProgress(progress);

      // Check which items are active based on their relative position in the viewport
      const items = container.querySelectorAll<HTMLElement>('[data-milestone-id]');
      const newActive: { [id: string]: boolean } = {};

      items.forEach((item) => {
        const itemRect = item.getBoundingClientRect();
        const id = item.getAttribute('data-milestone-id');
        if (id && itemRect.top < windowHeight * 0.72) {
          newActive[id] = true;
        }
      });

      setActiveItems((prev) => ({ ...prev, ...newActive }));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getMilestoneIcon = (id: string) => {
    if (id.includes('winner') || id.includes('1st')) return <Trophy className="w-3.5 h-3.5 text-[#E50914]" />;
    if (id.includes('incubation') || id.includes('startup')) return <Rocket className="w-3.5 h-3.5 text-[#E50914]" />;
    return <Award className="w-3.5 h-3.5 text-[#E50914]" />;
  };

  return (
    <section
      id="achievements"
      className="relative py-[clamp(4.5rem,7.5vw,9.5rem)] border-b border-white/[0.08] overflow-clip bg-[#050505] w-full"
    >
      {/* Background Subtle Ambience */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[320px] sm:w-[600px] h-[320px] sm:h-[600px] bg-[#E50914]/[0.02] rounded-full blur-3xl pointer-events-none" />

      <div className="container-editorial relative z-10">
        
        {/* Section Heading with Staggered Visual Rhythm */}
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
              04 / ACHIEVEMENTS
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold font-heading text-[#F5F5F5] tracking-tight">
            Milestones<span className="text-[#E50914]">.</span>
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-[#999999] font-light max-w-lg leading-relaxed">
            Key competitive hackathons, innovative pitching events, and campus incubation milestones marking continuous growth.
          </p>
        </motion.div>

        {/* Real Visual Timeline Container */}
        <div
          ref={containerRef}
          className="relative pt-4 pb-12 w-full"
          onMouseLeave={() => setHoveredId(null)}
        >
          {/* Background Dim Track Line */}
          <div className="absolute left-4 sm:left-28 md:left-36 top-6 bottom-12 w-[1px] bg-white/[0.1] -translate-x-1/2 pointer-events-none" />

          {/* Foreground Active RED Progressively Drawing Line */}
          <div
            className="absolute left-4 sm:left-28 md:left-36 top-6 w-[2px] bg-gradient-to-b from-[#E50914] via-[#FF2535] to-[#E50914] -translate-x-1/2 pointer-events-none transition-[height] duration-300 ease-out shadow-[0_0_12px_rgba(229,9,20,0.85)]"
            style={{ height: `${lineProgress}%`, maxHeight: 'calc(100% - 48px)' }}
          >
            {/* Glowing active tracer dot at the line tip */}
            {lineProgress > 2 && lineProgress < 99 && (
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 rounded-full bg-[#FF2535] shadow-[0_0_10px_#E50914]" />
            )}
          </div>

          {/* Milestones List */}
          <div className="space-y-10 sm:space-y-16 lg:space-y-20 w-full">
            {ACHIEVEMENTS.map((achievement: Achievement, index: number) => {
              const isActive = !!activeItems[achievement.id];
              const isHovered = hoveredId === achievement.id;

              return (
                <motion.div
                  key={achievement.id}
                  data-milestone-id={achievement.id}
                  id={`milestone-${achievement.id}`}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.75,
                    delay: (index % 4) * 0.08,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                  onMouseEnter={() => setHoveredId(achievement.id)}
                  className="group relative flex items-start w-full"
                >
                  
                  {/* Left Column: Year (Desktop) */}
                  <div className="hidden sm:block w-24 md:w-32 pr-6 text-right shrink-0 pt-0.5">
                    <span
                      className={`font-mono text-lg sm:text-2xl font-bold tracking-tight transition-all duration-500 block ${
                        isActive
                          ? isHovered
                            ? 'text-white scale-105'
                            : 'text-[#E50914]'
                          : 'text-[#666666]'
                      }`}
                    >
                      {achievement.year}
                    </span>
                    <span className="text-[10px] font-mono tracking-widest text-[#666666] uppercase">
                      YEAR
                    </span>
                  </div>

                  {/* Center Column: Red Timeline Dot Node */}
                  <div className="relative flex items-center justify-center shrink-0 w-8 sm:w-8 pt-1.5">
                    {/* Outer Ambient Glow Ring when active */}
                    {isActive && (
                      <div className="absolute w-6 sm:w-7 h-6 sm:h-7 rounded-full bg-[#E50914]/20 animate-pulse pointer-events-none" />
                    )}

                    {/* Timeline Dot Core */}
                    <div
                      className={`relative z-10 w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full border-2 transition-all duration-500 flex items-center justify-center ${
                        isActive
                          ? 'border-[#E50914] bg-[#E50914] shadow-[0_0_14px_rgba(229,9,20,0.9)] scale-110'
                          : 'border-white/30 bg-[#050505] scale-90'
                      } ${isHovered ? 'scale-125 ring-4 ring-[#E50914]/30' : ''}`}
                    >
                      {/* Inner pinhead highlight */}
                      <span
                        className={`w-1 h-1 rounded-full transition-colors ${
                          isActive ? 'bg-white' : 'bg-transparent'
                        }`}
                      />
                    </div>
                  </div>

                  {/* Right Column: Milestone Card Content */}
                  <div className="pl-4 sm:pl-8 flex-1 min-w-0">
                    {/* Mobile Year Badge */}
                    <div className="sm:hidden mb-1.5">
                      <span className="inline-block font-mono text-xs text-[#E50914] font-semibold tracking-wider">
                        {achievement.year}
                      </span>
                    </div>

                    <div
                      className={`relative p-4 sm:p-6 lg:p-8 rounded-sm border transition-all duration-300 ${
                        isHovered
                          ? 'bg-[#0B0B0C] border-white/[0.18] lg:translate-x-1.5'
                          : isActive
                          ? 'bg-white/[0.015] border-white/[0.08]'
                          : 'bg-transparent border-white/[0.04]'
                      }`}
                    >
                      {/* Left accent marker on hover */}
                      <div
                        className={`absolute top-0 left-0 w-[2px] bg-[#E50914] transition-all duration-300 ${
                          isHovered ? 'h-full opacity-100' : 'h-0 opacity-0'
                        }`}
                      />

                      {/* Header with tag and icon */}
                      <div className="flex items-center justify-between gap-3 mb-2.5">
                        <div className="flex items-center gap-2">
                          <div className="p-1 rounded bg-[#E50914]/10 border border-[#E50914]/20 shrink-0">
                            {getMilestoneIcon(achievement.id)}
                          </div>
                          <span className="text-[10px] font-mono tracking-[0.16em] sm:tracking-[0.2em] uppercase text-[#999999] truncate">
                            {achievement.id.includes('hackathon') ? 'HACKATHON' : 'COMPETITIVE MILESTONE'}
                          </span>
                        </div>

                        {isActive && (
                          <span className="hidden sm:inline-flex items-center gap-1 text-[10px] font-mono tracking-widest text-[#E50914] uppercase shrink-0">
                            <span>VERIFIED</span>
                          </span>
                        )}
                      </div>

                      {/* Title */}
                      <h3
                        className={`text-lg sm:text-xl lg:text-2xl font-bold font-heading tracking-tight transition-colors duration-300 break-words leading-snug ${
                          isHovered ? 'text-white' : 'text-[#F5F5F5]'
                        }`}
                      >
                        {achievement.title}
                      </h3>

                      {/* Description */}
                      <p className="mt-2.5 text-xs sm:text-sm lg:text-base text-[#999999] font-light leading-relaxed">
                        {achievement.description}
                      </p>
                    </div>
                  </div>

                </motion.div>
              );
            })}
          </div>

          {/* Timeline Terminal Accent */}
          <div className="relative flex items-center mt-12 sm:mt-16 pl-1 sm:pl-24 md:pl-32">
            <div className="w-6 h-6 flex items-center justify-center shrink-0">
              <span className="w-2 h-2 rounded-full bg-white/20" />
            </div>
            <span className="pl-3 text-[11px] sm:text-xs font-mono tracking-[0.2em] sm:tracking-[0.25em] text-[#666666] uppercase">
              JOURNEY CONTINUES IN 2026+
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Achievements;
