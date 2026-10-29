'use client';

import React from 'react';
import SectionCard from '@/components/ui/SectionCard';
import { portfolioData } from '@/data/portfolioData';
import {
  Code,
  Server,
  Database,
  Cloud,
  Smartphone,
  Layers,
  Wrench,
  Rocket,
  Check,
} from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Code,
  Server,
  Database,
  Cloud,
  Smartphone,
  Layers,
  Wrench,
  Rocket,
};

export default function Services() {
  const { services } = portfolioData;

  return (
    <SectionCard
      id="services"
      tagNumber="05"
      tagLabel="Capabilities"
      title="Services & Solutions"
      subtitle="Full-spectrum engineering services to build, scale, and optimize high-performance software systems."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        {services.map((service, index) => {
          const Icon = iconMap[service.iconName] || Code;
          return (
            <div
              key={index}
              className="glass-card glass-card-hover rounded-2xl p-5 border border-slate-200/80 dark:border-slate-800/80 flex flex-col justify-between group"
            >
              <div>
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 dark:bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>

                {/* Title & Desc */}
                <h3 className="font-bold text-base text-slate-900 dark:text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                  {service.description}
                </p>
              </div>

              {/* Deliverables List */}
              <div className="pt-3 border-t border-slate-200/60 dark:border-slate-800/60 space-y-1.5 font-mono text-[11px] text-slate-500 dark:text-slate-400">
                {service.deliverables.map((item, dIdx) => (
                  <div key={dIdx} className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </SectionCard>
  );
}
