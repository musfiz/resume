'use client';

import React from 'react';
import SectionCard from '@/components/ui/SectionCard';
import { portfolioData } from '@/data/portfolioData';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export default function Experience() {
  const { experiences } = portfolioData;

  return (
    <SectionCard
      id="experience"
      tagNumber="03"
      tagLabel="Career Journey"
      title="Work Experience"
      subtitle="A track record of technical impact, from junior web development to senior software engineering leadership."
    >
      <div className="relative pl-6 sm:pl-8 space-y-8 before:absolute before:left-2 sm:before:left-3 before:top-3 before:bottom-3 before:w-0.5 before:bg-gradient-to-b before:from-emerald-500 before:via-teal-500 before:to-slate-300 dark:before:to-slate-800">
        {experiences.map((exp, index) => (
          <div key={index} className="relative group">
            {/* Timeline Node Dot */}
            <div className="absolute -left-6 sm:-left-8 top-1.5 w-4 sm:w-5 h-4 sm:h-5 rounded-full border-2 border-emerald-500 bg-white dark:bg-slate-900 shadow-md group-hover:scale-125 transition-transform duration-200 flex items-center justify-center">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            </div>

            {/* Experience Card */}
            <div className="glass-card glass-card-hover rounded-2xl p-5 sm:p-7 border border-slate-200/80 dark:border-slate-800/80 space-y-4">
              {/* Header Info */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 pb-3 border-b border-slate-200/60 dark:border-slate-800/60">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <span>{exp.title}</span>
                  </h3>
                  <div className="text-emerald-600 dark:text-emerald-400 font-semibold text-sm mt-0.5 flex items-center gap-2">
                    <Briefcase className="w-4 h-4" />
                    <span>{exp.company}</span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{exp.period}</span>
                  </span>
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
                    <MapPin className="w-3 h-3 text-slate-400" />
                    <span>{exp.location}</span>
                  </span>
                </div>
              </div>

              {/* Bullet Achievements */}
              <ul className="space-y-2.5 text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                {exp.points.map((point, pIdx) => (
                  <li key={pIdx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              {/* Technologies Applied */}
              <div className="pt-2 flex flex-wrap items-center gap-1.5">
                <span className="text-[11px] font-mono text-slate-400 dark:text-slate-500 uppercase mr-1">
                  Stack:
                </span>
                {exp.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="inline-block px-2.5 py-0.5 rounded-lg font-mono text-xs font-medium bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700/80"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionCard>
  );
}
