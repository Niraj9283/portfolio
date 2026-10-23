import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Briefcase, Globe } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export const AdditionalWork: React.FC = () => {
  const { experience, education, certifications, languages } = portfolioData;

  return (
    <section
      id="experience"
      className="relative w-full bg-[#f4f4f0] text-[#0a0a0a] py-24 sm:py-32 lg:py-40 border-t border-neutral-300"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end border-b border-neutral-300 pb-8 mb-16 sm:mb-24 gap-6">
          <div className="space-y-3">
            <span className="text-xs font-mono-tag tracking-[0.25em] text-neutral-500 uppercase block">
              {experience.sectionTag}
            </span>
            <h2 className="font-display font-extrabold uppercase tracking-tight text-3xl sm:text-5xl lg:text-6xl text-black">
              {experience.heading}
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-sans text-neutral-600 max-w-md leading-relaxed">
            {experience.subheading}
          </p>
        </div>

        {/* 1. Job Simulations List */}
        <div className="space-y-16 mb-24">
          <div className="flex items-center space-x-3 text-xs font-mono-tag tracking-widest text-neutral-500 uppercase pb-4 border-b border-neutral-300">
            <Briefcase className="w-4 h-4 text-neutral-700" />
            <span>INDUSTRY JOB SIMULATIONS (FORAGE)</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {experience.simulations.map((sim, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="p-8 bg-neutral-100/70 border border-neutral-300 rounded-sm space-y-5"
              >
                <div className="flex justify-between items-start">
                  <span className="px-2.5 py-1 bg-black text-white text-[10px] font-mono-tag uppercase tracking-widest rounded-xs">
                    {sim.type}
                  </span>
                  <span className="text-xs font-mono-tag text-neutral-500">0{idx + 1}</span>
                </div>

                <div className="space-y-1">
                  <h3 className="font-display font-bold text-xl sm:text-2xl uppercase tracking-tight text-black">
                    {sim.role}
                  </h3>
                  <p className="text-xs font-mono-tag text-neutral-600 uppercase tracking-wider font-semibold">
                    {sim.organization}
                  </p>
                </div>

                <p className="text-sm text-neutral-600 font-sans leading-relaxed">
                  {sim.description}
                </p>

                <div className="pt-2 border-t border-neutral-200">
                  <span className="text-[11px] font-mono-tag text-neutral-500 uppercase tracking-widest block mb-2">
                    KEY RESPONSIBILITIES & OUTCOMES
                  </span>
                  <ul className="space-y-2 text-xs font-sans text-neutral-700">
                    {sim.responsibilities.map((resp, rIdx) => (
                      <li key={rIdx} className="flex items-start space-x-2">
                        <span className="font-bold text-black mt-0.5">›</span>
                        <span className="leading-relaxed">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 2. Education & Coursework */}
        <div className="border-t border-neutral-300 pt-16 mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-4 space-y-4">
              <div className="flex items-center space-x-2 text-xs font-mono-tag text-neutral-500 uppercase tracking-widest">
                <GraduationCap className="w-4 h-4 text-black" />
                <span>ACADEMIC FOUNDATION</span>
              </div>
              <h3 className="font-display font-bold text-3xl uppercase tracking-tight text-black">
                EDUCATION
              </h3>
              <p className="text-sm text-neutral-600 font-sans leading-relaxed">
                Undergraduate studies emphasizing rigorous computational theory, algorithms, and practical software engineering.
              </p>
            </div>

            <div className="lg:col-span-8 p-8 bg-neutral-100/70 border border-neutral-300 rounded-sm space-y-6">
              <div className="flex flex-col sm:flex-row justify-between sm:items-baseline gap-2 border-b border-neutral-200 pb-4">
                <div>
                  <h4 className="font-display font-bold text-xl text-black uppercase">
                    {education.degree}
                  </h4>
                  <span className="text-xs font-mono-tag text-neutral-600 uppercase tracking-wider">
                    {education.specialization}
                  </span>
                </div>
                <div className="text-left sm:text-right">
                  <span className="text-xs font-mono-tag font-bold text-black block">
                    {education.duration}
                  </span>
                  <span className="inline-block px-2 py-0.5 bg-black/5 border border-black/10 text-neutral-800 text-xs font-mono-tag font-semibold rounded mt-1">
                    CGPA: {education.cgpa}
                  </span>
                </div>
              </div>

              <div className="space-y-1">
                <span className="text-[11px] font-mono-tag text-neutral-500 uppercase tracking-widest block">
                  INSTITUTION
                </span>
                <p className="text-sm font-sans font-medium text-black">
                  {education.institution}
                </p>
              </div>

              <div className="space-y-2 pt-2 border-t border-neutral-200">
                <span className="text-[11px] font-mono-tag text-neutral-500 uppercase tracking-widest block">
                  RELEVANT COURSEWORK
                </span>
                <div className="flex flex-wrap gap-2">
                  {education.coursework.map((course) => (
                    <span
                      key={course}
                      className="text-xs font-mono-tag px-3 py-1 bg-white border border-neutral-300 text-neutral-800 rounded-xs uppercase tracking-wider font-medium"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Certifications & Languages Grid */}
        <div className="border-t border-neutral-300 pt-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Certifications (Col 8) */}
            <div className="lg:col-span-8 space-y-6">
              <div className="flex items-center space-x-2 text-xs font-mono-tag text-neutral-500 uppercase tracking-widest">
                <Award className="w-4 h-4 text-black" />
                <span>TECHNICAL CREDENTIALS</span>
              </div>
              <h3 className="font-display font-bold text-2xl sm:text-3xl uppercase tracking-tight text-black">
                {certifications.heading}
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {certifications.items.map((cert, idx) => (
                  <div
                    key={idx}
                    className="p-6 bg-white border border-neutral-300 rounded-sm space-y-3"
                  >
                    <span className="text-xs font-mono-tag font-bold text-black/50">
                      0{idx + 1}
                    </span>
                    <h4 className="font-display font-bold text-base uppercase text-black">
                      {cert.name}
                    </h4>
                    <div className="space-y-1 pt-2 border-t border-neutral-100">
                      <span className="text-[10px] font-mono-tag text-neutral-500 uppercase tracking-widest block mb-1">
                        KEY TOPICS
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {cert.topics.map((topic) => (
                          <span
                            key={topic}
                            className="text-[11px] font-mono-tag px-2 py-0.5 bg-neutral-100 text-neutral-700 rounded-xs uppercase"
                          >
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Languages (Col 4) */}
            <div className="lg:col-span-4 space-y-6">
              <div className="flex items-center space-x-2 text-xs font-mono-tag text-neutral-500 uppercase tracking-widest">
                <Globe className="w-4 h-4 text-black" />
                <span>COMMUNICATION</span>
              </div>
              <h3 className="font-display font-bold text-2xl sm:text-3xl uppercase tracking-tight text-black">
                LANGUAGES
              </h3>

              <div className="space-y-3">
                {languages.map((lang) => (
                  <div
                    key={lang.language}
                    className="p-4 bg-white border border-neutral-300 rounded-sm flex items-center justify-between"
                  >
                    <span className="font-display font-bold text-base uppercase text-black">
                      {lang.language}
                    </span>
                    <span className="text-xs font-mono-tag px-2.5 py-1 bg-black/5 rounded text-neutral-800 uppercase tracking-wider font-semibold">
                      {lang.proficiency}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
