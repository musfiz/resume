import React from 'react';

interface SectionCardProps {
  id: string;
  tagNumber?: string;
  tagLabel?: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}

export default function SectionCard({
  id,
  tagNumber,
  tagLabel,
  title,
  subtitle,
  children,
  className = '',
}: SectionCardProps) {
  return (
    <section id={id} className={`scroll-mt-24 py-12 md:py-16 ${className}`}>
      {/* Section Header */}
      <div className="mb-8 md:mb-12">
        {(tagNumber || tagLabel) && (
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-3 rounded-full bg-emerald-500/10 dark:bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 font-mono text-xs font-semibold tracking-wider uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            {tagNumber && <span>{tagNumber}</span>}
            {tagLabel && <span>{tagLabel}</span>}
          </div>
        )}

        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white flex items-center gap-3">
          {title}
        </h2>

        {subtitle && (
          <p className="mt-3 text-base md:text-lg text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>

      {/* Card Content Body */}
      {children}
    </section>
  );
}
