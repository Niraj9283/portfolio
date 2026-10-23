import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (href: string) => {
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'py-4 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/5 text-white'
            : 'py-6 md:py-8 bg-transparent text-black'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10 flex items-center justify-between">
          {/* Brand Wordmark */}
          <a
            href="#"
            className="group flex items-center space-x-3 text-current no-underline"
            aria-label="Home"
          >
            <span className="font-display text-xl sm:text-2xl font-black tracking-tight group-hover:opacity-70 transition-opacity">
              {portfolioData.navigation.wordmark}
            </span>
            <span className="hidden sm:inline-block text-[10px] font-mono-tag tracking-widest px-2 py-0.5 border border-current/30 rounded-full opacity-60">
              {portfolioData.meta.version}
            </span>
          </a>

          {/* Center availability pill */}
          <div className="hidden lg:flex items-center space-x-2.5 px-3 py-1.5 rounded-full border border-current/20 bg-current/5 text-current text-xs font-mono-tag tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="opacity-80 uppercase text-[11px]">{portfolioData.navigation.statusText}</span>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8 text-xs font-mono-tag tracking-[0.2em]">
            {portfolioData.navigation.navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleLinkClick(link.href)}
                className="group relative py-1 text-current hover:opacity-100 transition-opacity uppercase cursor-pointer"
              >
                <span className="opacity-70 group-hover:opacity-100 transition-opacity">
                  {link.label}
                </span>
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-current transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
            <a
              href={`mailto:${portfolioData.contact.email}`}
              className="inline-flex items-center space-x-1.5 px-4 py-2 border border-current text-current rounded-full text-xs font-mono-tag tracking-wider hover:bg-white hover:text-black hover:border-white transition-all duration-300"
            >
              <span>CONNECT</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </nav>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-current focus:outline-none cursor-pointer"
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Fullscreen Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-30 bg-[#0a0a0a] text-white flex flex-col justify-between p-8 pt-28 md:hidden"
          >
            <div className="flex flex-col space-y-6">
              <span className="text-xs font-mono-tag text-neutral-400 tracking-widest">
                DIRECTORY // MENU
              </span>
              <nav className="flex flex-col space-y-4">
                {portfolioData.navigation.navLinks.map((link, idx) => (
                  <button
                    key={link.label}
                    onClick={() => handleLinkClick(link.href)}
                    className="flex items-center justify-between py-2 text-left text-3xl font-display font-bold uppercase tracking-wider border-b border-white/10 hover:text-neutral-300"
                  >
                    <span>{link.label}</span>
                    <span className="text-xs font-mono-tag text-neutral-400">0{idx + 1}</span>
                  </button>
                ))}
              </nav>
            </div>

            <div className="pt-6 border-t border-white/10 space-y-4 text-xs font-mono-tag text-neutral-400">
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-white">{portfolioData.navigation.statusText}</span>
              </div>
              <p className="text-neutral-400">{portfolioData.hero.location}</p>
              <a
                href={`mailto:${portfolioData.contact.email}`}
                className="block text-white font-medium underline underline-offset-4"
              >
                {portfolioData.contact.email}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
