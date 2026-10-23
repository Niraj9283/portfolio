import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export const ProjectShowcase: React.FC = () => {
  const projects = portfolioData.showcaseProjects;

  return (
    <section className="relative w-full bg-[#0a0a0a] text-[#f4f4f0] py-24 sm:py-32 lg:py-40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end border-b border-white/10 pb-8 mb-16 sm:mb-24 gap-4">
          <div>
            <span className="text-xs font-mono-tag tracking-[0.25em] text-neutral-400 uppercase block mb-3">
              02 // LANDING PAGES & DIGITAL SYSTEMS
            </span>
            <h2 className="font-display font-extrabold uppercase tracking-tight text-3xl sm:text-5xl lg:text-6xl text-white">
              PROJECT SHOWCASE
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-mono-tag text-neutral-400 max-w-sm tracking-wide">
            EXPLORING HORIZONTAL VIEWPORTS, BESPOKE ART DIRECTION, AND PRODUCTION-GRADE CODE ARCHITECTURE.
          </p>
        </div>

        {/* Alternating Wide Editorial Showcase Items */}
        <div className="space-y-28 sm:space-y-36 lg:space-y-48">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center ${
                  isEven ? '' : 'lg:grid-flow-dense'
                }`}
              >
                {/* Visual Preview (Wide Composition) */}
                <div
                  className={`w-full ${
                    isEven ? 'lg:col-span-8' : 'lg:col-span-8 lg:col-start-5'
                  }`}
                >
                  <div className="relative group overflow-hidden rounded-sm border border-white/15 bg-neutral-900 shadow-2xl">
                    {/* Aspect ratio container simulating browser/editorial viewport */}
                    <div className="relative aspect-16/10 overflow-hidden">
                      <img
                        src={project.image}
                        alt={`${project.title} Preview`}
                        className="w-full h-full object-cover grayscale contrast-125 brightness-95 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700 ease-out"
                        loading="lazy"
                      />

                      {/* Dark overlay with subtle editorial vignette */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:opacity-40 transition-opacity duration-500" />

                      {/* Top Bar simulating minimalist browser frame */}
                      <div className="absolute top-4 left-4 right-4 flex justify-between items-center text-[10px] font-mono-tag text-white/70 bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10">
                        <div className="flex items-center space-x-1.5">
                          <span className="w-2 h-2 rounded-full bg-white/30" />
                          <span className="w-2 h-2 rounded-full bg-white/30" />
                          <span className="w-2 h-2 rounded-full bg-white/30" />
                        </div>
                        <span className="tracking-widest uppercase truncate max-w-[180px]">
                          {project.title.toLowerCase().replace(/\s+/g, '-')}.design
                        </span>
                        <span>{project.year}</span>
                      </div>

                      {/* Hover action pill */}
                      {project.liveUrl && (
                        <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                          <span className="inline-flex items-center space-x-2 px-4 py-2 bg-white text-black font-mono-tag text-xs font-bold rounded-full shadow-xl">
                            <span>LAUNCH PREVIEW</span>
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Editorial Typography & Metadata */}
                <div
                  className={`w-full space-y-6 ${
                    isEven ? 'lg:col-span-4' : 'lg:col-span-4 lg:col-start-1'
                  }`}
                >
                  {/* Oversized Index Label */}
                  <div className="flex items-baseline justify-between border-b border-white/10 pb-4">
                    <span className="font-display font-extrabold text-5xl sm:text-6xl text-white/30 tracking-tighter">
                      {project.number}
                    </span>
                    <span className="text-xs font-mono-tag tracking-widest text-neutral-400 uppercase">
                      {project.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl uppercase tracking-tight text-white">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-neutral-400 font-sans leading-relaxed font-light">
                    {project.description}
                  </p>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-mono-tag px-2.5 py-1 bg-white/5 border border-white/10 text-neutral-300 uppercase tracking-wider"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project Note if applicable */}
                  {project.note && (
                    <p className="text-[11px] font-mono-tag text-neutral-400 bg-white/5 p-3 border border-white/10 rounded-sm leading-relaxed">
                      <span className="text-neutral-300 font-bold mr-1">NOTE:</span>
                      {project.note}
                    </p>
                  )}

                  {/* Action Links */}
                  <div className="flex items-center space-x-4 pt-4">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 text-xs font-mono-tag font-semibold text-white tracking-widest uppercase hover:underline underline-offset-8"
                      >
                        <span>VIEW DEPLOYMENT</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-1.5 text-xs font-mono-tag text-neutral-400 hover:text-white tracking-widest uppercase transition-colors"
                        aria-label={`View ${project.title} source code`}
                      >
                        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                        </svg>
                        <span>CODE</span>
                      </a>
                    )}
                    {!project.liveUrl && !project.githubUrl && (
                      <span className="text-xs font-mono-tag text-neutral-400 tracking-wider uppercase border-b border-neutral-700 pb-0.5">
                        [ ACADEMIC / INTERNAL EVALUATION SYSTEM ]
                      </span>
                    )}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
