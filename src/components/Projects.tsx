import React, { useState } from 'react';
import { motion } from 'motion/react';
import { PROJECTS, Project } from '../data/projects';
import { ProjectRow } from './ProjectRow';
import { ProjectDetail } from './ProjectDetail';

export const Projects: React.FC = () => {
  const [hoveredProjectId, setHoveredProjectId] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section
      id="projects"
      className="relative py-20 sm:py-32 lg:py-44 border-b border-white/[0.08] overflow-hidden bg-[#050505] w-full max-w-full"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-12 w-full">
        
        {/* Section Heading & Tag */}
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
              02 / PROJECTS &amp; EXPERIENCE
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold font-heading text-[#F5F5F5] tracking-tight">
            Things I've Built<span className="text-[#E50914]">.</span>
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-[#999999] font-light max-w-lg leading-relaxed">
            Real production implementations, automated cloud systems, and algorithmic applications built for resilience.
          </p>
        </motion.div>

        {/* Large Editorial Project Rows */}
        <div
          id="projects-editorial-list"
          className="border-t border-white/[0.08] w-full"
          onMouseLeave={() => setHoveredProjectId(null)}
        >
          {PROJECTS.map((project: Project, index: number) => {
            const isHovered = hoveredProjectId === project.id;
            const isAnyHovered = hoveredProjectId !== null;
            const isMuted = isAnyHovered && !isHovered;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.75,
                  delay: index * 0.12,
                  ease: [0.16, 1, 0.3, 1]
                }}
              >
                <ProjectRow
                  project={project}
                  isHovered={isHovered}
                  isMuted={isMuted}
                  onHover={setHoveredProjectId}
                  onSelect={setSelectedProject}
                />
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Slide-in Project Detail Experience */}
      <ProjectDetail
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

export default Projects;
