import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';

export const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="relative w-full bg-[#0a0a0a] text-[#f4f4f0] py-24 sm:py-32 lg:py-40 overflow-hidden"
    >
      {/* Background Monochrome Texture / Atmospheric Image */}
      <div className="absolute inset-0 z-0 opacity-15 mix-blend-luminosity pointer-events-none">
        <img
          src={portfolioData.about.backgroundImage}
          alt="Abstract Architectural Environment"
          className="w-full h-full object-cover grayscale contrast-150"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-transparent to-[#0a0a0a]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Section Tag */}
        <div className="flex items-center space-x-3 text-xs font-mono-tag tracking-[0.25em] text-neutral-400 mb-8 uppercase">
          <span className="w-6 h-[1px] bg-neutral-600" />
          <span>{portfolioData.about.sectionTag}</span>
        </div>

        {/* Oversized Cinematic 'ABOUT ME' Heading */}
        <div className="overflow-hidden mb-12 sm:mb-16">
          <motion.h2
            initial={{ y: 80, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-extrabold uppercase tracking-tight text-[12vw] sm:text-[11vw] md:text-[10vw] leading-[0.8] text-white/90 select-none"
          >
            {portfolioData.about.heading}
          </motion.h2>
        </div>

        {/* Grid: Left Professional Narrative / Right Layered Portrait & Credentials */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Narrative */}
          <div className="lg:col-span-7 space-y-8">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-xl sm:text-2xl lg:text-3xl font-display font-semibold text-neutral-100 leading-snug tracking-tight"
            >
              {portfolioData.about.leadParagraph}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-sm sm:text-base text-neutral-300 leading-relaxed font-sans font-light"
            >
              {portfolioData.about.secondaryParagraph}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="text-sm sm:text-base text-neutral-400 leading-relaxed font-sans font-light"
            >
              {portfolioData.about.tertiaryParagraph}
            </motion.p>

            {/* Current Technical Focus Points */}
            <div className="space-y-4 pt-4 border-t border-white/10">
              <span className="block text-xs font-mono-tag tracking-widest text-neutral-400 uppercase">
                ACTIVE DOMAINS // CORE INTERESTS
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {portfolioData.about.currentFocus.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center space-x-3 p-3 bg-white/5 border border-white/5 rounded-sm"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span className="text-xs font-mono-tag tracking-wide text-neutral-300 uppercase">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Layered Monochrome Portrait & Education Summary */}
          <div className="lg:col-span-5 space-y-10">
            {/* Layered Image Frame */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative w-full aspect-4/5 overflow-hidden rounded-sm border border-white/10 group shadow-2xl bg-neutral-900"
            >
              <img
                src={portfolioData.about.portraitSecondary}
                alt={portfolioData.meta.name}
                className="w-full h-full object-cover grayscale contrast-125 brightness-95 group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end text-xs font-mono-tag text-white">
                <div>
                  <span className="block text-neutral-400 text-[10px] tracking-widest uppercase">IDENTITY</span>
                  <span className="font-semibold tracking-wider">{portfolioData.meta.name}</span>
                </div>
                <div className="text-right">
                  <span className="block text-neutral-400 text-[10px] tracking-widest uppercase">SPECIALIZATION</span>
                  <span className="font-semibold tracking-wider">FULL STACK & AI/ML</span>
                </div>
              </div>
            </motion.div>

            {/* Academic Credentials Brief */}
            <div className="grid grid-cols-2 gap-4 border-t border-white/10 pt-8">
              {portfolioData.about.educationBrief.map((item, idx) => (
                <div key={idx} className="space-y-1">
                  <span className="block text-[10px] font-mono-tag text-neutral-400 tracking-widest uppercase">
                    {item.label}
                  </span>
                  <span className="text-base sm:text-lg font-display font-bold text-white tracking-tight">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
