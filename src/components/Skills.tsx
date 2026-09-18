import React, { useState } from 'react';
import { motion } from 'motion/react';

interface SkillGroup {
  category: string;
  technologies: string[];
}

const SKILL_GROUPS: SkillGroup[] = [
  {
    category: 'FRONTEND',
    technologies: ['React.js', 'HTML5 & CSS3', 'Tailwind CSS']
  },
  {
    category: 'BACKEND & DATABASE',
    technologies: ['Python (Django)', 'PHP', 'MySQL', 'MongoDB']
  },
  {
    category: 'CLOUD & DEVOPS',
    technologies: ['Amazon Web Services', 'CloudFormation', 'Docker', 'Linux']
  },
  {
    category: 'TOOLS & FRAMEWORKS',
    technologies: ['Git & GitHub', 'AWS EC2', 'AI Assisted Development']
  }
];

export const Skills: React.FC = () => {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  return (
    <section
      id="skills"
      className="relative py-20 sm:py-32 lg:py-44 border-b border-white/[0.08] overflow-hidden bg-[#050505] w-full max-w-full"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-12 w-full">
        
        {/* Section Heading with Accent Tag */}
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
              03 / SKILLS &amp; KNOWLEDGE
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold font-heading text-[#F5F5F5] tracking-tight">
            What I Work With<span className="text-[#E50914]">.</span>
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-[#999999] font-light max-w-lg leading-relaxed">
            Core foundations across cloud systems, containerization, full-stack development, and automated workflows.
          </p>
        </motion.div>

        {/* Typography-Based Editorial Skill Groups */}
        <div
          id="skills-list"
          className="border-t border-white/[0.08] w-full"
          onMouseLeave={() => setHoveredTech(null)}
        >
          {SKILL_GROUPS.map((group, groupIdx) => {
            return (
              <motion.div
                key={group.category}
                id={`skill-row-${group.category.toLowerCase().replace(/[\s&]+/g, '-')}`}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.7,
                  delay: groupIdx * 0.1,
                  ease: [0.16, 1, 0.3, 1]
                }}
                className="group relative border-b border-white/[0.08] py-8 sm:py-10 lg:py-14 transition-all duration-300 w-full"
              >
                {/* Thin background indicator on row */}
                <div className="absolute top-0 left-0 w-[2px] h-full bg-[#E50914] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-6 lg:gap-12 items-baseline w-full">
                  
                  {/* Category Name & Index (Mobile: Top title, Desktop: 4 cols) */}
                  <div className="lg:col-span-4 space-y-1">
                    <div className="flex items-center gap-2.5 sm:gap-3">
                      <span className="font-mono text-xs text-[#E50914] font-semibold">
                        0{groupIdx + 1}
                      </span>
                      <h3 className="text-base sm:text-lg lg:text-xl font-bold font-heading text-[#F5F5F5] tracking-wider uppercase">
                        {group.category}
                      </h3>
                    </div>
                  </div>

                  {/* Individual Technologies with Micro-interactions (8 cols) */}
                  <div className="lg:col-span-8 pt-1 lg:pt-0">
                    <div className="flex flex-wrap items-center gap-x-4 sm:gap-x-6 gap-y-2.5 sm:gap-y-4">
                      {group.technologies.map((tech) => {
                        const isThisHovered = hoveredTech === tech;
                        const isAnyHovered = hoveredTech !== null;
                        const isMuted = isAnyHovered && !isThisHovered;

                        return (
                          <div
                            key={tech}
                            onMouseEnter={() => setHoveredTech(tech)}
                            onClick={() => setHoveredTech(hoveredTech === tech ? null : tech)}
                            className={`relative inline-block cursor-pointer transition-all duration-300 transform ${
                              isThisHovered
                                ? '-translate-y-0.5 sm:-translate-y-1 scale-105 z-10'
                                : isMuted
                                ? 'opacity-35 scale-95'
                                : 'opacity-100 scale-100'
                            }`}
                          >
                            <span
                              className={`text-base sm:text-xl lg:text-2xl xl:text-3xl font-light tracking-tight transition-colors duration-300 ${
                                isThisHovered
                                  ? 'text-white font-medium'
                                  : 'text-[#B0B0B0]'
                              }`}
                            >
                              {tech}
                            </span>

                            {/* Animated Red Underline appearing on hover/active */}
                            <div
                              className={`h-[2px] bg-[#E50914] shadow-[0_0_8px_#E50914] transition-all duration-300 ease-out mt-1 ${
                                isThisHovered ? 'w-full opacity-100' : 'w-0 opacity-0'
                              }`}
                            />
                          </div>
                        );
                      })}
                    </div>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Skills;
