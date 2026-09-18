import React, { useEffect } from 'react';
import { X, ArrowUpRight, ExternalLink, Code2, Layers } from 'lucide-react';
import { Project } from '../data/projects';

interface ProjectDetailProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-detail-title"
      className="fixed inset-0 z-50 flex justify-end"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#050505]/80 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Slide-in Panel */}
      <div className="relative w-full max-w-full sm:max-w-xl lg:max-w-2xl h-full bg-[#0B0B0C] border-l border-white/[0.08] p-5 sm:p-10 lg:p-14 overflow-y-auto flex flex-col justify-between z-10 shadow-2xl transition-transform duration-300 ease-out">
        
        {/* Top Header & Close */}
        <div>
          <div className="flex items-center justify-between pb-6 sm:pb-8 border-b border-white/[0.08]">
            <div className="flex items-center gap-3">
              <span className="font-mono text-sm tracking-widest text-[#E50914] font-bold">
                {project.number}
              </span>
              <span className="text-[11px] sm:text-xs font-mono tracking-[0.2em] uppercase text-[#999999]">
                {project.category}
              </span>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="w-11 h-11 flex items-center justify-center text-[#999999] hover:text-white transition-colors cursor-pointer rounded-full border border-white/[0.08] hover:border-white/20"
              aria-label="Close project detail"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Project Title & Narrative */}
          <div className="pt-6 sm:pt-10 space-y-4 sm:space-y-6">
            <h2
              id="project-detail-title"
              className="text-2xl sm:text-3xl lg:text-4xl font-bold font-heading text-[#F5F5F5] tracking-tight leading-tight break-words"
            >
              {project.title}
            </h2>

            <p className="text-sm sm:text-lg text-[#999999] font-light leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Technologies Stack */}
          <div className="pt-6 sm:pt-10 space-y-3 sm:space-y-4">
            <span className="text-[11px] sm:text-xs font-mono tracking-[0.2em] text-[#999999] uppercase block">
              TECH STACK &amp; TOOLS
            </span>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 text-xs font-mono text-[#F5F5F5] bg-white/[0.03] border border-white/[0.08] rounded-sm tracking-wide"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Project Architecture & Engineering Highlights */}
          <div className="pt-6 sm:pt-10 space-y-3 sm:space-y-4">
            <span className="text-xs font-mono tracking-[0.2em] text-[#999999] uppercase block">
              ENGINEERING OBJECTIVE
            </span>
            <div className="p-4 sm:p-6 bg-[#050505] border border-white/[0.06] rounded-sm space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-[#E50914] uppercase">
                <Layers className="w-3.5 h-3.5" />
                <span>Core Implementation</span>
              </div>
              <p className="text-xs sm:text-sm text-[#999999] leading-relaxed">
                {project.id === 'alumni-management' &&
                  'Engineered structured relational schemas in MySQL and responsive UI modules to streamline networking, event announcements, and secure student-alumni interactions.'}
                {project.id === 'dementia-screening' &&
                  'Applied cognitive ML scoring and audio/speech parameter processing via Flask to provide accessible, early detection indicators in clinical prototype workflows.'}
                {project.id === 'aws-webserver-backups' &&
                  'Implemented automated infrastructure automation on AWS leveraging Lambda functions and CloudWatch rules to snapshot EC2 disks and prune aged backups safely.'}
                {project.id === 'three-tier-infra' &&
                  'Configured production VPC topology with isolated public subnets, private EC2 compute tiers, and resilient RDS multi-AZ databases guarded by security group rules.'}
              </p>
            </div>
          </div>
        </div>

        {/* Action Link / GitHub */}
        <div className="pt-8 sm:pt-12 mt-8 sm:mt-12 border-t border-white/[0.08] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group min-h-[44px] inline-flex items-center justify-center sm:justify-start gap-2.5 text-xs font-mono tracking-[0.2em] uppercase text-[#F5F5F5] hover:text-white transition-colors"
          >
            <Code2 className="w-4 h-4 text-[#999999] group-hover:text-white transition-colors" />
            <span>View Source on GitHub</span>
            <ArrowUpRight className="w-4 h-4 text-[#E50914] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>

          <button
            type="button"
            onClick={onClose}
            className="min-h-[44px] inline-flex items-center justify-center text-xs font-mono tracking-wider text-[#999999] hover:text-[#F5F5F5] transition-colors"
          >
            Close &times;
          </button>
        </div>

      </div>
    </div>
  );
};

export default ProjectDetail;
