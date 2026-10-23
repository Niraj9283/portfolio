import React, { useEffect } from 'react';
import Lenis from 'lenis';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { CustomCursor } from './components/CustomCursor';
import { IntroAnimation } from './components/IntroAnimation';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { IdentitySection } from './components/IdentitySection';
import { FeaturedProject } from './components/FeaturedProject';
import { ProjectShowcase } from './components/ProjectShowcase';
import { AdditionalWork } from './components/AdditionalWork';
import { ServicesSection } from './components/ServicesSection';
import { ContactSection } from './components/ContactSection';

export const App: React.FC = () => {
  useEffect(() => {
    // Initialize Lenis luxury smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 2,
    });

    let animationFrameId: number;
    function raf(time: number) {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }
    animationFrameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-[#0a0a0a] text-[#f4f4f0] selection:bg-white selection:text-black overflow-x-hidden">
      {/* Editorial Grain Overlay */}
      <div className="fixed inset-0 pointer-events-none z-30 editorial-grain" />

      {/* Luxury Magnetic Custom Cursor */}
      <CustomCursor />

      {/* Opening Intro Sequence */}
      <IntroAnimation />

      {/* Minimalist Floating Navigation */}
      <Navigation />

      {/* Main Content Assembly */}
      <main>
        {/* 1. Light Hero Section */}
        <HeroSection />

        {/* 2. Cinematic Dark About Section */}
        <AboutSection />

        {/* 3. Kinetic Typographic Identity Section */}
        <IdentitySection />

        {/* 4. Full-width Featured Project Section */}
        <FeaturedProject />

        {/* 5. Horizontal / Alternating Landing Pages Showcase */}
        <ProjectShowcase />

        {/* 6. Light Editorial Additional Work Section */}
        <AdditionalWork />

        {/* 7. Minimalist Services Section */}
        <ServicesSection />

        {/* 8. Bold Dark Contact Section */}
        <ContactSection />
      </main>

      {/* Vercel Speed Insights */}
      <SpeedInsights />
    </div>
  );
};

export default App;
