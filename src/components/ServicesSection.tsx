import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export const ServicesSection: React.FC = () => {
  const [expandedIdx, setExpandedIdx] = useState<number | null>(0); // First category expanded by default
  const { heading, subheading, categories, sectionTag } = portfolioData.skills;

  const toggleExpand = (idx: number) => {
    setExpandedIdx(expandedIdx === idx ? null : idx);
  };

  return (
    <section
      id="skills"
      className="relative w-full bg-[#f4f4f0] text-[#0a0a0a] py-24 sm:py-32 lg:py-40 border-t border-neutral-300"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-24 space-y-4">
          <span className="text-xs font-mono-tag tracking-[0.25em] text-neutral-500 uppercase block">
            {sectionTag}
          </span>
          <h2 className="font-display font-extrabold uppercase tracking-tight text-3xl sm:text-5xl lg:text-6xl text-black">
            {heading}
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 font-sans leading-relaxed pt-2">
            {subheading}
          </p>
        </div>

        {/* Minimalist Skills Accordion List with Thin Dividers */}
        <div className="border-t border-neutral-300 divide-y divide-neutral-300">
          {categories.map((cat, index) => {
            const isExpanded = expandedIdx === index;

            return (
              <div
                key={cat.number}
                className="group py-8 sm:py-12 transition-colors duration-300 hover:bg-neutral-100/60 px-4 -mx-4 cursor-pointer"
                onClick={() => toggleExpand(index)}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  {/* Left: Number & Skill Category Title */}
                  <div className="flex items-baseline space-x-6 sm:space-x-10">
                    <span className="font-mono-tag text-xs sm:text-sm font-bold text-neutral-400 group-hover:text-black transition-colors">
                      {cat.number}
                    </span>
                    <h3 className="font-display font-bold uppercase text-2xl sm:text-3xl lg:text-4xl text-black tracking-tight group-hover:translate-x-2 transition-transform duration-300">
                      {cat.title}
                    </h3>
                  </div>

                  {/* Right: Expand Toggle Indicator */}
                  <div className="flex items-center space-x-4 pl-14 md:pl-0">
                    <span className="hidden sm:inline-block text-xs font-mono-tag tracking-widest text-neutral-400 uppercase">
                      {isExpanded ? 'COLLAPSE' : 'EXPAND CATEGORY'}
                    </span>
                    <div className="w-8 h-8 rounded-full border border-neutral-400 flex items-center justify-center group-hover:border-black transition-colors">
                      {isExpanded ? (
                        <Minus className="w-3.5 h-3.5 text-black" />
                      ) : (
                        <Plus className="w-3.5 h-3.5 text-black" />
                      )}
                    </div>
                  </div>
                </div>

                {/* Collapsible Details: Skills Badges & Description */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pt-8 pl-0 md:pl-16 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                        <div className="lg:col-span-5">
                          <p className="text-sm sm:text-base text-neutral-600 font-sans leading-relaxed max-w-xl">
                            {cat.description}
                          </p>
                        </div>
                        <div className="lg:col-span-7">
                          <span className="text-[11px] font-mono-tag text-neutral-400 tracking-widest uppercase block mb-3">
                            TECHNOLOGIES & COMPETENCIES
                          </span>
                          <div className="flex flex-wrap gap-2">
                            {cat.skills.map((skill) => (
                              <span
                                key={skill}
                                className="text-xs font-mono-tag px-3 py-1.5 bg-black/5 border border-black/10 rounded-sm text-neutral-800 uppercase tracking-wider font-medium"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
