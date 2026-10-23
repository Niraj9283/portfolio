import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '../data/portfolio';

interface IntroAnimationProps {
  onComplete?: () => void;
}

export const IntroAnimation: React.FC<IntroAnimationProps> = ({ onComplete }) => {
  const [show, setShow] = useState<boolean>(() => {
    // Check if user already saw the intro in this session or prefers reduced motion
    if (typeof window !== 'undefined') {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReducedMotion) return false;
      const seen = sessionStorage.getItem('intro_completed');
      return !seen;
    }
    return true;
  });

  const [counter, setCounter] = useState(0);

  useEffect(() => {
    if (!show) {
      if (onComplete) onComplete();
      return;
    }

    // Smooth counter from 0 to 100
    const duration = 1600;
    const intervalTime = 25;
    const steps = duration / intervalTime;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = Math.min(Math.round((step / steps) * 100), 100);
      setCounter(progress);

      if (step >= steps) {
        clearInterval(timer);
        setTimeout(() => {
          setShow(false);
          sessionStorage.setItem('intro_completed', 'true');
          if (onComplete) onComplete();
        }, 500);
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [show, onComplete]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="intro-screen"
          initial={{ opacity: 1 }}
          exit={{
            y: '-100%',
            transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] },
          }}
          className="fixed inset-0 z-50 flex flex-col justify-between bg-[#080808] text-[#f4f4f0] p-8 md:p-14 select-none"
        >
          {/* Top metadata */}
          <div className="flex justify-between items-center text-xs tracking-[0.25em] text-neutral-400 font-mono-tag">
            <motion.span
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {portfolioData.intro.yearTag}
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {portfolioData.meta.version}
            </motion.span>
          </div>

          {/* Centered Wordmark with expanding tracking and reveal */}
          <div className="flex flex-col items-center justify-center text-center my-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden"
            >
              <motion.h1
                initial={{ letterSpacing: '0.1em', opacity: 0 }}
                animate={{ letterSpacing: '0.35em', opacity: 1 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold uppercase tracking-widest text-white"
              >
                {portfolioData.intro.wordmark}
              </motion.h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 0.6, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-6 text-xs sm:text-sm font-mono-tag tracking-[0.25em] text-neutral-300 uppercase max-w-md"
            >
              {portfolioData.intro.tagline}
            </motion.p>
          </div>

          {/* Bottom loading progress and status */}
          <div className="flex justify-between items-end text-xs font-mono-tag text-neutral-400">
            <div className="flex items-center space-x-3">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="tracking-[0.2em] uppercase">SYSTEM INITIALIZED</span>
            </div>
            <div className="text-right">
              <span className="text-2xl font-bold font-mono-tag text-white tracking-wider">
                {String(counter).padStart(2, '0')}%
              </span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
