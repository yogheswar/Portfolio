import React, { useRef } from 'react';
import { motion } from 'motion/react';
import { Building2, GraduationCap, Calendar, Target, MapPin, ArrowLeft } from 'lucide-react';

interface InfoCard {
  id: string;
  icon: React.ReactNode;
  title: string;
  value: string;
}

const INFO_CARDS: InfoCard[] = [
  {
    id: 'institution',
    icon: <Building2 className="w-5 h-5 text-[#E50914]" />,
    title: 'Institution',
    value: 'KGiSL Institute of Technology'
  },
  {
    id: 'degree',
    icon: <GraduationCap className="w-5 h-5 text-[#E50914]" />,
    title: 'Degree',
    value: 'Bachelor of Information Technology'
  },
  {
    id: 'graduation',
    icon: <Calendar className="w-5 h-5 text-[#E50914]" />,
    title: 'Graduation',
    value: 'Expected 2028'
  },
  {
    id: 'focus',
    icon: <Target className="w-5 h-5 text-[#E50914]" />,
    title: 'Focus',
    value: 'Cloud & DevOps Engineering'
  },
  {
    id: 'location',
    icon: <MapPin className="w-5 h-5 text-[#E50914]" />,
    title: 'Location',
    value: 'Coimbatore, India'
  }
];

export const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  // Exactly two identical sets of cards for the -50% translateX seamless infinite loop
  const cardsGroup = [...INFO_CARDS, ...INFO_CARDS];
  const duplicatedCards = [...cardsGroup, ...cardsGroup];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-20 sm:py-32 lg:py-44 border-b border-white/[0.08] overflow-hidden bg-[#050505] w-full max-w-full"
    >
      {/* Background ambient red glow */}
      <div className="absolute top-1/2 left-0 w-[280px] sm:w-[420px] h-[280px] sm:h-[420px] bg-[#E50914]/[0.02] rounded-full blur-[100px] sm:blur-[140px] pointer-events-none -translate-y-1/2" />

      <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-12 w-full">
        
        {/* TOP EDITORIAL SECTION: Left (ABOUT + bar), Center (Headline), Right (Bio) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-14 items-start mb-16 sm:mb-24 lg:mb-28">
          
          {/* LEFT: Section Badge + ABOUT + Vertical Red Line */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-3 flex flex-col space-y-3 sm:space-y-4"
          >
            {/* Red dot + ABOUT */}
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#E50914] shadow-[0_0_8px_#E50914] animate-pulse shrink-0" />
              <span className="text-xs font-mono tracking-[0.25em] text-white/90 uppercase font-medium">
                ABOUT
              </span>
            </div>

            {/* Large Typography Editorial Marker: ABOUT */}
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white/15 tracking-tight select-none leading-none"
              aria-hidden="true"
            >
              ABOUT
            </motion.div>

            {/* Vertical Red Accent Line */}
            <div className="w-[2px] h-10 sm:h-16 lg:h-20 bg-[#E50914] shadow-[0_0_8px_rgba(229,9,20,0.4)]" />
          </motion.div>

          {/* CENTER: Engineering Philosophy & Statement */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-3 sm:space-y-4"
          >
            <span className="text-[11px] sm:text-xs font-mono tracking-[0.2em] sm:tracking-[0.25em] text-[#E50914] uppercase block font-semibold">
              ENGINEERING PHILOSOPHY
            </span>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold font-heading text-[#F5F5F5] tracking-tight leading-[1.15]">
              Bridging software logic with resilient cloud systems
              <span className="text-[#E50914]">.</span>
            </h2>
          </motion.div>

          {/* RIGHT: Authentic Full Bio */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4 lg:pt-5"
          >
            <p className="text-sm sm:text-base text-[#9E9EA4] font-normal leading-relaxed text-left">
              I am Yogheswar, an Information Technology undergraduate at KGISL Institute of Technology with a strong interest in building scalable software solutions and cloud-native applications. I enjoy developing full-stack web applications while exploring cloud computing, DevOps, containerization, and system design to create reliable and efficient systems.
            </p>
          </motion.div>

        </div>

      </div>

      {/* CONTINUOUS RIGHT-TO-LEFT MOVING CARDS TRACK (Full Width with overflow hidden) */}
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.85, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-full overflow-hidden py-4 hover-pause group select-none"
      >
        
        {/* Subtle left & right gradient masks to blend smoothly into background */}
        <div className="absolute top-0 left-0 bottom-0 w-10 sm:w-24 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 bottom-0 w-10 sm:w-24 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none" />

        {/* Sliding Flex Container */}
        <div className="animate-cards-rtl flex gap-3.5 sm:gap-6 px-4 sm:px-6 cursor-grab active:cursor-grabbing">
          {duplicatedCards.map((card, idx) => (
            <div
              key={`${card.id}-${idx}`}
              className="group/card relative w-[200px] xs:w-[230px] sm:w-[260px] lg:w-[280px] shrink-0 p-4 sm:p-6 bg-[#0B0B0D] border border-white/[0.08] hover:border-[#E50914]/60 rounded-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(229,9,20,0.15)] select-none flex flex-col justify-between h-[125px] sm:h-[145px]"
            >
              {/* Top Row: Icon + subtle top-right accent */}
              <div className="flex items-center justify-between">
                <div className="p-1 sm:p-2 rounded-xs bg-white/[0.03] border border-white/[0.06] group-hover/card:border-[#E50914]/40 transition-colors">
                  {card.icon}
                </div>
                <span className="w-1 h-1 rounded-full bg-white/20 group-hover/card:bg-[#E50914] transition-colors" />
              </div>

              {/* Text Info */}
              <div className="space-y-0.5 sm:space-y-1 mt-1.5 sm:mt-2">
                <span className="text-[9px] xs:text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.16em] sm:tracking-[0.18em] text-[#888888] block">
                  {card.title}
                </span>
                <p className="text-[11px] xs:text-xs sm:text-sm lg:text-base font-semibold text-[#F5F5F5] tracking-tight leading-snug group-hover/card:text-white transition-colors line-clamp-2">
                  {card.value}
                </p>
              </div>

              {/* Bottom line with red hover animation */}
              <div className="absolute bottom-0 left-0 h-[1.5px] w-0 bg-[#E50914] group-hover/card:w-full transition-all duration-300 ease-out" />
            </div>
          ))}
        </div>

      </motion.div>
    </section>
  );
};

export default About;
