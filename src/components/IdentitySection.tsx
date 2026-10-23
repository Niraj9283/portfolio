import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { portfolioData } from '../data/portfolio';

export const IdentitySection: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const xOffsetLeft = useTransform(scrollYProgress, [0.2, 0.6], [0, -150]);
  const xOffsetRight = useTransform(scrollYProgress, [0.2, 0.6], [-150, 0]);

  return (
    <section className="relative w-full bg-[#080808] text-[#f4f4f0] py-20 sm:py-28 lg:py-36 overflow-hidden border-y border-white/5 select-none">
      {/* Top Editorial Ticker Bar (Forward) */}
      <div className="w-full overflow-hidden whitespace-nowrap opacity-40 hover:opacity-80 transition-opacity mb-8 sm:mb-12">
        <div className="animate-marquee flex items-center space-x-8 text-xs sm:text-sm font-mono-tag tracking-[0.3em] uppercase">
          {[...portfolioData.identity.tickerItems, ...portfolioData.identity.tickerItems, ...portfolioData.identity.tickerItems].map(
            (item, idx) => (
              <span key={idx} className="inline-block">
                {item}
              </span>
            )
          )}
        </div>
      </div>

      {/* Main Kinetic Typography Moving Poster Composition */}
      <div className="max-w-full mx-auto px-4 sm:px-8 space-y-2 sm:space-y-4">
        {/* Layer 1: Primary Dominant Heading with horizontal parallax */}
        <motion.div
          style={{ x: xOffsetLeft }}
          className="whitespace-nowrap"
        >
          <h2 className="font-display font-extrabold uppercase tracking-tighter text-[10vw] sm:text-[9vw] md:text-[8vw] leading-[0.82] text-white">
            {portfolioData.identity.primaryText}
          </h2>
        </motion.div>

        {/* Layer 2: Secondary Offset Heading in contrasting outline or accent styling */}
        <motion.div
          style={{ x: xOffsetRight }}
          className="whitespace-nowrap flex items-center space-x-6 sm:space-x-12"
        >
          <span className="font-display font-bold uppercase tracking-tight text-[7vw] sm:text-[6.5vw] md:text-[6vw] leading-[0.85] text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.4)]">
            {portfolioData.identity.secondaryText}
          </span>
          <span className="hidden md:inline-block w-24 h-[2px] bg-white/40" />
          <span className="hidden lg:inline-block font-mono-tag text-xs tracking-widest text-neutral-400">
            [ ARCHIVAL CODE 2026 ]
          </span>
        </motion.div>
      </div>

      {/* Supporting Editorial Statement & Bottom Info */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 mt-12 sm:mt-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 text-xs font-mono-tag text-neutral-400">
        <p className="max-w-xl text-neutral-300 tracking-wider leading-relaxed uppercase">
          {portfolioData.identity.editorialNotes}
        </p>
        <div className="flex items-center space-x-4 tracking-widest">
          <span className="w-2 h-2 rounded-full bg-white animate-ping" />
          <span>REAL-TIME SCROLL SYNCHRONIZATION</span>
        </div>
      </div>

      {/* Bottom Reverse Ticker Bar */}
      <div className="w-full overflow-hidden whitespace-nowrap opacity-25 hover:opacity-80 transition-opacity mt-10 sm:mt-14">
        <div className="animate-marquee-reverse flex items-center space-x-8 text-xs sm:text-sm font-mono-tag tracking-[0.3em] uppercase">
          {[...portfolioData.identity.tickerItems, ...portfolioData.identity.tickerItems, ...portfolioData.identity.tickerItems].map(
            (item, idx) => (
              <span key={idx} className="inline-block">
                {item}
              </span>
            )
          )}
        </div>
      </div>
    </section>
  );
};
