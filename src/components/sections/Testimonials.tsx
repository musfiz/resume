'use client';

import React from 'react';
import SectionCard from '@/components/ui/SectionCard';
import { portfolioData } from '@/data/portfolioData';
import { Quote, Star } from 'lucide-react';

export default function Testimonials() {
  const { testimonials } = portfolioData;

  return (
    <SectionCard
      id="recommendations"
      tagLabel="Recommendations"
      title="Colleague & Client Endorsements"
      subtitle="What engineering directors, clients, and technical leads say about working with me."
    >
      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((t, idx) => (
          <div
            key={idx}
            className="glass-card glass-card-hover rounded-2xl p-6 border border-slate-200/80 dark:border-slate-800/80 flex flex-col justify-between space-y-4"
          >
            <div className="space-y-3">
              {/* Stars & Quote Icon */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <Quote className="w-6 h-6 text-emerald-500/30" />
              </div>

              {/* Quote text */}
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 italic leading-relaxed">
                &ldquo;{t.content}&rdquo;
              </p>
            </div>

            {/* Author Info */}
            <div className="pt-4 border-t border-slate-200/60 dark:border-slate-800/60 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-500 flex items-center justify-center font-mono font-bold text-xs text-white">
                {t.avatarText}
              </div>
              <div>
                <h4 className="font-bold text-sm text-slate-900 dark:text-white leading-tight">
                  {t.name}
                </h4>
                <p className="text-[11px] text-emerald-600 dark:text-emerald-400 font-medium">
                  {t.role} • {t.company}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionCard>
  );
}
