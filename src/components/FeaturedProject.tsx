import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export const FeaturedProject: React.FC = () => {
  const project = portfolioData.featuredProject;

  return (
    <section
      id="work"
      className="relative w-full bg-[#0a0a0a] text-[#f4f4f0] py-24 sm:py-32 lg:py-40 border-b border-white/10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Top Header Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end border-b border-white/15 pb-6 mb-12 sm:mb-16 gap-4">
          <div className="space-y-2">
            <span className="text-xs font-mono-tag tracking-[0.25em] text-neutral-400 uppercase">
              // SELECTION {project.number}
            </span>
            <h2 className="text-sm font-mono-tag tracking-[0.2em] uppercase text-white font-bold">
              FEATURED PROJECT
            </h2>
          </div>
          <div className="text-xs font-mono-tag text-neutral-400 tracking-widest uppercase">
            <span>{project.category}</span> — <span>{project.year}</span>
          </div>
        </div>

        {/* Project Title Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-8 sm:mb-12"
        >
          <h3 className="font-display font-extrabold uppercase tracking-tight text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-white">
            {project.title}
          </h3>
        </motion.div>

        {/* Large Immersive Image Preview */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full aspect-16/9 sm:aspect-21/9 overflow-hidden rounded-sm border border-white/15 group shadow-2xl bg-neutral-900"
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover grayscale contrast-125 brightness-95 group-hover:scale-105 group-hover:contrast-150 transition-all duration-700 ease-out"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />

          {/* Floating client tag on image */}
          <div className="absolute top-6 left-6 text-xs font-mono-tag bg-black/70 backdrop-blur-md px-3 py-1.5 border border-white/20 text-white uppercase tracking-wider">
            {project.client}
          </div>

          {/* Quick interaction badge */}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-6 right-6 inline-flex items-center space-x-2 px-5 py-2.5 bg-white text-black font-mono-tag text-xs font-bold tracking-wider uppercase rounded-full hover:bg-neutral-200 transition-colors shadow-lg"
            >
              <span>EXPERIENCE LIVE</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          )}
        </motion.div>

        {/* Bottom Project Details Bar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-10 pt-8 border-t border-white/10 items-start">
          {/* Project description & key features */}
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-mono-tag text-neutral-400 uppercase tracking-widest">
              OVERVIEW // ARCHITECTURE
            </span>
            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-sans font-light">
              {project.description}
            </p>
            {project.keyFeatures && (
              <div className="pt-3 space-y-2">
                <span className="text-[11px] font-mono-tag text-neutral-400 uppercase tracking-widest block">
                  KEY CAPABILITIES & IMPLEMENTATION
                </span>
                <ul className="space-y-1.5 text-xs font-mono-tag text-neutral-300">
                  {project.keyFeatures.map((feat, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <span className="text-emerald-400 mt-0.5">›</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Technologies stack */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-xs font-mono-tag text-neutral-400 uppercase tracking-widest block">
              STACK & RUNTIMES
            </span>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-mono-tag px-2.5 py-1 bg-white/5 border border-white/10 text-neutral-300 rounded-xs uppercase tracking-wider"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Links & CTA */}
          <div className="lg:col-span-3 flex flex-col sm:flex-row lg:flex-col gap-3 justify-start lg:items-end">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between w-full sm:w-auto lg:w-full px-5 py-3 border border-white/30 text-white font-mono-tag text-xs tracking-wider uppercase hover:bg-white hover:text-black transition-all"
              >
                <span>OPEN PROJECT</span>
                <ExternalLink className="w-3.5 h-3.5 ml-2" />
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between w-full sm:w-auto lg:w-full px-5 py-3 border border-white/15 text-neutral-400 font-mono-tag text-xs tracking-wider uppercase hover:border-white/50 hover:text-white transition-all"
              >
                <span>SOURCE REPOSITORY</span>
                <svg className="w-3.5 h-3.5 ml-2 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
