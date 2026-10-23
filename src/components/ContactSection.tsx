import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowUp, ArrowUpRight, Copy, Check, Mail, Phone } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const { heading, statement, email, phone, socials, sectionTag, footerNote, name } = portfolioData.contact;

  const [istTime, setIstTime] = useState('');
  useEffect(() => {
    const tick = () => {
      const time = new Date().toLocaleTimeString('en-IN', {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      });
      setIstTime(`IST ${time}`);
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="contact"
      className="relative w-full bg-[#080808] text-[#f4f4f0] pt-28 sm:pt-36 lg:pt-48 pb-12 overflow-hidden border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 flex flex-col justify-between min-h-[75vh]">
        {/* Top Tag */}
        <div className="flex items-center space-x-3 text-xs font-mono-tag tracking-[0.25em] text-neutral-400 uppercase mb-8">
          <span className="w-6 h-[1px] bg-neutral-600" />
          <span>{sectionTag}</span>
        </div>

        {/* Center: Massive Bold 'LET'S BUILD SOMETHING TOGETHER' Headline */}
        <div className="my-auto text-center space-y-8 sm:space-y-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-display font-black uppercase tracking-tight text-[7vw] sm:text-[6.5vw] md:text-[6vw] lg:text-[5.5vw] leading-[0.92] text-white hover:text-neutral-300 transition-colors select-none max-w-6xl mx-auto" style={{ wordBreak: 'keep-all', overflowWrap: 'normal' }}>
              {heading}
            </h2>
          </motion.div>

          <p className="max-w-2xl mx-auto text-sm sm:text-base text-neutral-300 font-sans leading-relaxed tracking-wide font-light px-4">
            {statement}
          </p>

          {/* Contact Direct Actions: Email & Phone */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-2">
            <a
              href={`mailto:${email}`}
              className="inline-flex items-center space-x-3 px-6 sm:px-8 py-3.5 sm:py-4 bg-white text-black font-mono-tag text-xs sm:text-sm font-bold tracking-widest uppercase rounded-full hover:bg-neutral-200 transition-all duration-300 shadow-2xl group"
            >
              <Mail className="w-4 h-4" />
              <span>EMAIL DIRECTLY</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center space-x-2 px-5 sm:px-6 py-3.5 sm:py-4 border border-white/20 text-white font-mono-tag text-xs tracking-widest uppercase rounded-full hover:border-white hover:bg-white/5 transition-all cursor-pointer"
              title="Copy email to clipboard"
            >
              {copiedEmail ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400">EMAIL COPIED</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>{email}</span>
                </>
              )}
            </button>

            <button
              onClick={handleCopyPhone}
              className="inline-flex items-center space-x-2 px-5 sm:px-6 py-3.5 sm:py-4 border border-white/20 text-white font-mono-tag text-xs tracking-widest uppercase rounded-full hover:border-white hover:bg-white/5 transition-all cursor-pointer"
              title="Click to copy phone number"
            >
              {copiedPhone ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400">PHONE COPIED</span>
                </>
              ) : (
                <>
                  <Phone className="w-4 h-4" />
                  <span>{phone}</span>
                </>
              )}
            </button>
          </div>

          {/* Social Profiles Row */}
          <div className="pt-12 sm:pt-16 border-t border-white/10 max-w-3xl mx-auto w-full">
            <span className="block text-xs font-mono-tag text-neutral-400 tracking-widest uppercase mb-6">
              VERIFIED CHANNELS // PROFILES
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col p-5 bg-white/5 border border-white/10 hover:border-white/30 rounded-sm transition-all text-left"
                >
                  <div className="flex items-center justify-between text-xs font-mono-tag text-neutral-300 group-hover:text-white transition-colors">
                    <span className="font-bold tracking-wider">{social.name}</span>
                    <ArrowUpRight className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <span className="text-xs text-neutral-400 font-mono-tag mt-2 truncate">
                    {social.handle}
                  </span>
                  <span className="text-[11px] text-neutral-500 font-sans mt-1">
                    Opens profile in new tab →
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Colophon & Back to top */}
        <div className="mt-20 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center text-xs font-mono-tag text-neutral-400 gap-4">
          <div className="flex items-center space-x-4">
            <span className="font-semibold text-neutral-300">{portfolioData.meta.year} {name}</span>
            <span>/</span>
            <span className="hidden md:inline">{footerNote}</span>
          </div>

          <div className="flex items-center space-x-6">
            <span className="text-[11px] tracking-wider text-neutral-400 tabular-nums">{istTime}</span>
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-1.5 text-white hover:text-neutral-300 uppercase tracking-widest cursor-pointer"
            >
              <span>TOP</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
