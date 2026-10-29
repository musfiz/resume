'use client';

import React from 'react';
import SectionCard from '@/components/ui/SectionCard';
import { portfolioData } from '@/data/portfolioData';
import { GraduationCap, Award, Calendar } from 'lucide-react';

export default function Education() {
  const { education } = portfolioData;

  return (
    <SectionCard
      id="education"
      tagNumber="06"
      tagLabel="Academic Background"
      title="Education & Qualifications"
      subtitle="Formal university education in computer science, software engineering principles, and systems."
    >
      <div className="grid md:grid-cols-2 gap-6">
        {education.map((edu, idx) => (
          <div
            key={idx}
            className="glass-card glass-card-hover rounded-2xl p-6 border border-slate-200/80 dark:border-slate-800/80 flex flex-col justify-between space-y-4"
          >
            <div>
              {/* Header Icon & Date Badge */}
              <div className="flex items-start justify-between gap-3 mb-3">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 dark:bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                  <GraduationCap className="w-6 h-6" />
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 font-mono text-xs border border-slate-200 dark:border-slate-700">
                  <Calendar className="w-3.5 h-3.5 text-emerald-500" />
                  <span>{edu.period}</span>
                </div>
              </div>

              {/* Degree Title & Institution */}
              <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-snug">
                {edu.degree}
              </h3>
              <p className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 mt-1">
                {edu.institution}
              </p>

              {/* Detail Text */}
              <p className="mt-3 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {edu.detail}
              </p>
            </div>

            {/* Award / Distinction Pill */}
            <div className="pt-3 border-t border-slate-200/60 dark:border-slate-800/60 flex items-center gap-2 text-xs font-mono font-semibold text-amber-600 dark:text-amber-400">
              <Award className="w-4 h-4 text-amber-500" />
              <span>{edu.award}</span>
            </div>
          </div>
        ))}
      </div>
    </SectionCard>
  );
}
