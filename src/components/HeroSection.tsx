import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, ArrowUpRight, FileText, Check } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export const HeroSection: React.FC = () => {
  const { scrollY } = useScroll();
  const yImage = useTransform(scrollY, [0, 600], [0, 80]);
  const yText = useTransform(scrollY, [0, 600], [0, -40]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0.4]);
  const [resumeNotice, setResumeNotice] = useState(false);

  const handleResumeClick = () => {
    // If a local resume file exists in /resume.pdf it will open, otherwise notifies user
    setResumeNotice(true);
    setTimeout(() => setResumeNotice(false), 3000);
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full bg-[#f4f4f0] text-[#0a0a0a] flex flex-col justify-between overflow-hidden pt-28 pb-12 px-6 sm:px-10 lg:px-16"
    >
      {/* Subtle background editorial grid lines */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="max-w-7xl mx-auto h-full border-x border-neutral-300" />
      </div>

      {/* Top Editorial Sub-bar */}
      <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col sm:flex-row justify-between items-start sm:items-center text-xs font-mono-tag tracking-widest text-neutral-600 border-b border-neutral-300/70 pb-4 gap-2">
        <div className="flex items-center space-x-3">
          <span className="font-bold text-black">[ {portfolioData.meta.year} ]</span>
          <span className="hidden md:inline text-neutral-400">/</span>
          <span className="uppercase font-semibold text-neutral-900">{portfolioData.hero.roleTitle}</span>
        </div>
        <div className="flex items-center space-x-4 text-[11px]">
          <span className="hidden lg:inline text-neutral-500">{portfolioData.hero.coordinates}</span>
          <span className="px-2 py-0.5 bg-black/5 rounded text-neutral-800 uppercase font-semibold">
            {portfolioData.hero.location}
          </span>
        </div>
      </div>

      {/* Center Composition: Enormous Headline + Monochrome Portrait Overlap */}
      <div className="relative z-10 max-w-7xl mx-auto w-full my-auto py-8 lg:py-12 flex flex-col items-center justify-center">
        {/* Layer 1: First Line of Giant Headline (Behind Image) */}
        <motion.div
          style={{ y: yText, opacity }}
          className="w-full text-center select-none"
        >
          <h1 className="font-display font-extrabold uppercase tracking-tight text-[12vw] sm:text-[11vw] md:text-[10vw] leading-[0.82] text-black">
            {portfolioData.hero.headlineParts[0] || 'FULL STACK'}
          </h1>
        </motion.div>

        {/* Layer 2: Central Monochrome Cutout Portrait with Controlled Overlap */}
        <div className="relative w-full max-w-md sm:max-w-lg md:max-w-xl -my-10 sm:-my-16 md:-my-24 z-20 flex justify-center pointer-events-none">
          <motion.div
            style={{ y: yImage }}
            className="relative w-64 sm:w-80 md:w-96 flex justify-center"
          >
            {/* Cutout portrait blending seamlessly without box boundaries */}
            <img
              src={portfolioData.hero.portraitImage}
              alt={portfolioData.meta.name}
              className="w-full h-auto max-h-[460px] object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.16)] select-none"
              loading="eager"
            />
            {/* Soft subtle bottom gradient fade to seamlessly ground the shoulders into the off-white background */}
            <div className="absolute inset-x-0 bottom-0 h-16 sm:h-20 bg-gradient-to-t from-[#f4f4f0] via-[#f4f4f0]/80 to-transparent" />
          </motion.div>
        </div>

        {/* Layer 3: Second Line of Giant Headline (Partially Overlapping Image) */}
        <motion.div
          style={{ y: yText, opacity }}
          className="relative z-30 w-full text-center select-none -mt-4 sm:-mt-8"
        >
          <h2 className="font-display font-extrabold uppercase tracking-tight text-[10vw] sm:text-[9vw] md:text-[8vw] leading-[0.82] text-black drop-shadow-sm">
            {portfolioData.hero.headlineParts[1] || 'DEVELOPER'}
          </h2>
        </motion.div>

        {/* Supporting Headline Banner */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative z-30 mt-6 sm:mt-8 px-4 py-1.5 bg-black/5 rounded-full border border-black/10 text-center"
        >
          <span className="text-xs sm:text-sm font-mono-tag tracking-wider text-black font-semibold uppercase">
            {portfolioData.hero.supportingHeadline}
          </span>
        </motion.div>

        {/* Hero Narrative Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative z-30 mt-4 max-w-2xl text-center text-xs sm:text-sm md:text-base text-neutral-700 leading-relaxed font-sans font-normal px-4"
        >
          {portfolioData.hero.statement}
        </motion.p>

        {/* Hero Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative z-30 mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4"
        >
          {portfolioData.hero.buttons.map((btn) => (
            <a
              key={btn.label}
              href={btn.href}
              className={`inline-flex items-center space-x-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-xs font-mono-tag tracking-widest uppercase transition-all duration-300 ${
                btn.primary
                  ? 'bg-black text-white hover:bg-neutral-800 shadow-lg'
                  : 'border border-black/30 text-black hover:border-black hover:bg-black/5'
              }`}
            >
              <span>{btn.label}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          ))}

          {/* Download Resume Button (Prepared for resume asset) */}
          <button
            onClick={handleResumeClick}
            className="inline-flex items-center space-x-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full border border-black/30 text-black text-xs font-mono-tag tracking-widest uppercase hover:border-black hover:bg-black/5 transition-all cursor-pointer"
            title="Download Niraj Kumar Pandey's Resume"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>{resumeNotice ? 'RESUME PREPARED' : 'DOWNLOAD RESUME'}</span>
          </button>
        </motion.div>

        {resumeNotice && (
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative z-30 mt-3 text-xs font-mono-tag text-neutral-600 flex items-center space-x-2"
          >
            <Check className="w-3.5 h-3.5 text-emerald-600" />
            <span>Resume link configured — ready to connect directly to your resume PDF.</span>
          </motion.div>
        )}
      </div>

      {/* Bottom Row: Minimalist Scroll Prompter & Metadata */}
      <div className="relative z-10 max-w-7xl mx-auto w-full flex justify-between items-end text-xs font-mono-tag text-neutral-500 pt-6 border-t border-neutral-300/70">
        <div className="hidden sm:block">
          <span className="tracking-widest uppercase">{portfolioData.hero.specialization}</span>
        </div>

        <a
          href="#about"
          className="group mx-auto sm:mx-0 flex items-center space-x-2 text-neutral-900 hover:text-black transition-colors"
          aria-label="Scroll down to About section"
        >
          <span className="tracking-[0.25em] uppercase text-[11px] font-semibold">
            {portfolioData.hero.scrollHint}
          </span>
          <div className="w-7 h-7 rounded-full border border-black/20 flex items-center justify-center group-hover:border-black transition-colors">
            <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
          </div>
        </a>

        <div className="hidden sm:block text-right">
          <span className="tracking-widest uppercase">01 — 05 SECTIONS</span>
        </div>
      </div>
    </section>
  );
};
