'use client';

import React from 'react';
import SectionCard from '@/components/ui/SectionCard';
import { portfolioData } from '@/data/portfolioData';
import {
  Code2,
  Server,
  Cpu,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  ArrowRight,
} from 'lucide-react';

const pillars = [
  {
    icon: Server,
    title: 'Distributed Systems & Architecture',
    desc: 'Designing modular microservices, resilient APIs, and high-throughput backend services using Node.js, Laravel, and Docker.',
  },
  {
    icon: Code2,
    title: 'Modern Frontend Craftsmanship',
    desc: 'Engineering intuitive, responsive user interfaces with Next.js, React, TypeScript, and clean component-driven systems.',
  },
  {
    icon: Cpu,
    title: 'Data & Cloud Optimization',
    desc: 'Fine-tuning relational and NoSQL databases (PostgreSQL, MySQL, MongoDB), query caching, and cloud deployments on AWS & Azure.',
  },
  {
    icon: ShieldCheck,
    title: 'Engineering Leadership & Agile',
    desc: 'Leading cross-functional engineering squads, code reviews, automated CI/CD pipelines, and driving customer-first business outcomes.',
  },
];

export default function Home() {
  const { personal } = portfolioData;

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <SectionCard
      id="about"
      tagNumber="01"
      tagLabel="About & Overview"
      title="Engineering Resilient Digital Products"
      subtitle="A senior engineer blending system design, developer craftsmanship, and agile leadership."
    >
      <div className="space-y-8">
        {/* Hero Narrative Glass Box */}
        <div className="glass-card rounded-3xl p-6 md:p-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 dark:bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative space-y-4 text-slate-700 dark:text-slate-300 text-base md:text-lg leading-relaxed">
            <p>
              Hello! I&apos;m{' '}
              <strong className="text-slate-900 dark:text-white font-bold">
                {personal.name}
              </strong>
              , a Senior Software Engineer at{' '}
              <span className="text-emerald-600 dark:text-emerald-400 font-semibold">
                Bangladesh Japan Information Technology (BJIT)
              </span>
              . Over the past decade, I have architected and deployed mission-critical software solutions ranging from high-traffic e-commerce systems to healthcare clinic management platforms and enterprise ERPs.
            </p>
            <p>
              My core philosophy centers around <span className="text-slate-900 dark:text-white font-medium">clarity over complexity</span>, writing clean, well-tested code that scales seamlessly under load while maintaining supreme developer velocity. Whether architecting microservices or fine-tuning frontend experiences, I strive for rock-solid reliability and exceptional UX.
            </p>
          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-6 border-t border-slate-200/80 dark:border-slate-800/80">
            {personal.metrics.map((m, idx) => (
              <div key={idx} className="p-3 rounded-2xl bg-slate-100/60 dark:bg-slate-800/40 border border-slate-200/50 dark:border-slate-800">
                <div className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white font-mono">
                  {m.value}
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-1 font-medium">
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pillars / Key Capabilities */}
        <div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-emerald-500" />
            <span>Core Engineering Focus</span>
          </h3>

          <div className="grid sm:grid-cols-2 gap-4">
            {pillars.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="glass-card glass-card-hover rounded-2xl p-5 border border-slate-200/80 dark:border-slate-800/80 relative group"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 dark:bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-base mb-1.5">
                    {item.title}
                  </h4>
                  <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Callout Card */}
        <div className="p-6 rounded-2xl bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-transparent border border-emerald-500/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span>Looking for senior technical leadership or full-stack architectural expertise?</span>
            </div>
            <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400">
              Open to senior roles, architectural consulting, and high-impact digital ventures.
            </p>
          </div>

          <button
            onClick={scrollToContact}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-mono text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 dark:bg-emerald-600 dark:hover:bg-emerald-500 shadow transition-colors flex-shrink-0"
          >
            <span>Let&apos;s Connect</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </SectionCard>
  );
}
