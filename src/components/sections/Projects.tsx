'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import SectionCard from '@/components/ui/SectionCard';
import { portfolioData } from '@/data/portfolioData';
import { ExternalLink, Sparkles } from 'lucide-react';

const categories = ['All', 'Enterprise', 'Full Stack', 'E-Commerce', 'Cloud'] as const;

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const { projects } = portfolioData;

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === selectedCategory);

  return (
    <SectionCard
      id="projects"
      tagNumber="04"
      tagLabel="Portfolio Works"
      title="Featured Projects"
      subtitle="Selected enterprise applications, healthcare management suites, and distributed web platforms."
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

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, idx) => (
            <div
              key={idx}
              className="glass-card glass-card-hover rounded-2xl overflow-hidden flex flex-col justify-between border border-slate-200/80 dark:border-slate-800/80 group"
            >
              {/* Image Container */}
              <div className="relative w-full h-48 overflow-hidden bg-slate-100 dark:bg-slate-800">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={320}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                {/* Category & Status Badge */}
                <div className="absolute top-3 left-3 flex gap-2">
                  <span className="px-2.5 py-1 rounded-lg bg-slate-900/80 backdrop-blur-md text-emerald-400 font-mono text-[11px] font-semibold border border-emerald-500/30">
                    {project.category}
                  </span>
                  {project.featured && (
                    <span className="px-2.5 py-1 rounded-lg bg-emerald-500/90 text-white font-mono text-[11px] font-semibold flex items-center gap-1 shadow-sm">
                      <Sparkles className="w-3 h-3" />
                      Featured
                    </span>
                  )}
                </div>
              </div>

              {/* Content Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div>
                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded-md font-mono text-[11px] bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links Bar */}
                  <div className="pt-3 border-t border-slate-200/70 dark:border-slate-800/70 flex items-center justify-between">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:text-emerald-500 transition-colors"
                    >
                      <span>Explore Project</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>

                    <a
                      href={portfolioData.personal.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                      title="View GitHub profile"
                    >
                      <i className="devicon-github-original text-base" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionCard>
  );
}
