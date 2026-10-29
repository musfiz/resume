'use client';

import React, { useState } from 'react';
import SectionCard from '@/components/ui/SectionCard';
import { portfolioData } from '@/data/portfolioData';
import { Terminal, Sparkles } from 'lucide-react';

const categories = ['All', 'Frontend', 'Backend', 'Database', 'DevOps & Cloud', 'Mobile'] as const;

export default function Technology() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const { technologies } = portfolioData;

  const filteredTechs = selectedCategory === 'All'
    ? technologies
    : technologies.filter((t) => t.category === selectedCategory);

  return (
    <SectionCard
      id="technology"
      tagNumber="02"
      tagLabel="Technical Stack"
      title="Tools & Technologies"
      subtitle="A battle-tested stack refined over 10+ years of high-concurrency production deployments."
    >
      <div className="space-y-6">
        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl glass-card border border-slate-200/80 dark:border-slate-800/80 w-fit">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-xl font-mono text-xs font-semibold transition-all duration-200 ${
                selectedCategory === cat
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Technologies Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
          {filteredTechs.map((tech) => (
            <div
              key={tech.name}
              className="glass-card glass-card-hover rounded-2xl p-4 flex flex-col items-center text-center group relative border border-slate-200/80 dark:border-slate-800/80"
            >
              {/* Subtle top indicator */}
              <div className="w-full flex justify-end">
                <span className="text-[10px] font-mono text-slate-400 dark:text-slate-500 uppercase">
                  {tech.level}
                </span>
              </div>

              {/* Icon Container */}
              <div className="w-14 h-14 my-2 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <i className={`${tech.icon} text-4xl`} />
              </div>

              {/* Tech Label */}
              <h3 className="font-bold text-sm text-slate-900 dark:text-white mt-1">
                {tech.name}
              </h3>
              <p className="text-[11px] font-mono text-slate-500 dark:text-slate-400 mt-0.5">
                {tech.category}
              </p>
            </div>
          ))}
        </div>

        {/* Technical Stack Highlights Footer */}
        <div className="p-4 sm:p-5 rounded-2xl bg-slate-100/70 dark:bg-slate-900/40 border border-slate-200/60 dark:border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs">
          <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
            <Terminal className="w-4 h-4 text-emerald-500" />
            <span>Architecture: Microservices • Clean Code • REST & GraphQL APIs • Cloud Native</span>
          </div>
          <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>18+ Production Toolsets</span>
          </div>
        </div>
      </div>
    </SectionCard>
  );
}
