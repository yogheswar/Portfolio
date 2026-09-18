import React from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Project } from '../data/projects';

interface ProjectRowProps {
  project: Project;
  isHovered: boolean;
  isMuted: boolean;
  onHover: (id: string | null) => void;
  onSelect: (project: Project) => void;
}

export const ProjectRow: React.FC<ProjectRowProps> = ({
  project,
  isHovered,
  isMuted,
  onHover,
  onSelect,
}) => {
  return (
    <div
      id={`project-row-${project.id}`}
      onMouseEnter={() => onHover(project.id)}
      onClick={() => onSelect(project)}
      className={`group relative border-b border-white/[0.08] py-8 sm:py-12 lg:py-16 transition-all duration-300 cursor-pointer w-full ${
        isHovered
          ? 'bg-white/[0.02] lg:-mx-4 lg:px-4'
          : ''
      } ${isMuted ? 'opacity-30' : 'opacity-100'}`}
    >
      {/* Expanding Red Accent Line at Bottom */}
      <div
        className={`absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-[#E50914] via-[#FF2535] to-[#E50914] shadow-[0_0_10px_#E50914] transition-all duration-300 ease-out ${
          isHovered ? 'w-full opacity-100' : 'w-0 opacity-0'
        }`}
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-5 lg:gap-8 items-start w-full">
        
        {/* Number & Category */}
        <div className="lg:col-span-2 flex flex-row lg:flex-col items-baseline lg:items-start justify-between lg:justify-start gap-2">
          <span
            className={`font-mono text-base sm:text-lg lg:text-xl tracking-widest transition-all duration-300 block ${
              isHovered
                ? 'text-[#E50914] font-bold lg:translate-x-1'
                : 'text-[#E50914] lg:text-[#666666]'
            }`}
          >
            {project.number}
          </span>
          {/* Desktop Category */}
          <span className="hidden lg:block text-[10px] sm:text-[11px] font-mono tracking-[0.2em] text-[#999999] uppercase">
            {project.category}
          </span>
        </div>

        {/* Title, Mobile Category & Description */}
        <div className="lg:col-span-6 space-y-2 sm:space-y-3">
          <h3
            className={`text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold font-heading transition-all duration-300 break-words leading-tight ${
              isHovered
                ? 'lg:translate-x-3 text-white'
                : 'text-[#F0F0F0]'
            }`}
          >
            {project.title}
          </h3>

          {/* Mobile Category */}
          <span className="block lg:hidden text-[10px] sm:text-[11px] font-mono tracking-[0.2em] text-[#E50914] uppercase font-medium">
            {project.category}
          </span>

          <p className="text-xs sm:text-sm lg:text-base text-[#999999] font-light leading-relaxed max-w-xl">
            {project.description}
          </p>
        </div>

        {/* Technologies & Actions */}
        <div className="lg:col-span-4 flex flex-col justify-between h-full space-y-3.5 sm:space-y-5 lg:items-end pt-1 lg:pt-0">
          <div className="flex flex-wrap gap-1.5 sm:gap-2 lg:justify-end">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className={`font-mono text-[11px] sm:text-xs px-2.5 py-1 rounded-sm tracking-wide transition-colors duration-300 ${
                  isHovered
                    ? 'text-white bg-white/[0.06] border border-white/[0.15]'
                    : 'text-[#888888] bg-white/[0.02] border border-white/[0.05]'
                }`}
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-6 pt-1 sm:pt-2">
            <span className="min-h-[44px] flex items-center text-xs font-mono tracking-[0.2em] uppercase text-[#999999] group-hover:text-white transition-colors gap-1.5">
              <span>EXPLORE</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#E50914] transition-transform duration-300 group-hover:translate-x-1" />
            </span>

            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="min-h-[44px] inline-flex items-center gap-1.5 text-xs font-mono tracking-[0.2em] uppercase text-[#999999] hover:text-white transition-colors"
            >
              <span>GITHUB</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#E50914] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProjectRow;
