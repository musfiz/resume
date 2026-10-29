'use client';

import React from 'react';
import Image from 'next/image';
import {
  Download,
  Mail,
  Phone,
  MapPin,
  Send,
  User,
  Cpu,
  Briefcase,
  FolderGit2,
  Layers,
  GraduationCap,
  MessageSquare,
} from 'lucide-react';
import { portfolioData } from '@/data/portfolioData';

interface SidebarProps {
  activeSection: string;
}

const navLinks = [
  { id: 'about', label: 'About', number: '01', icon: User },
  { id: 'technology', label: 'Technologies', number: '02', icon: Cpu },
  { id: 'experience', label: 'Experience', number: '03', icon: Briefcase },
  { id: 'projects', label: 'Projects', number: '04', icon: FolderGit2 },
  { id: 'services', label: 'Services', number: '05', icon: Layers },
  { id: 'education', label: 'Education', number: '06', icon: GraduationCap },
  { id: 'contact', label: 'Contact', number: '07', icon: MessageSquare },
];

export default function Sidebar({ activeSection }: SidebarProps) {
  const { personal } = portfolioData;

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <aside className="w-full lg:w-80 xl:w-96 flex-shrink-0">
      <div className="lg:sticky lg:top-24 space-y-6">
        {/* Main Profile Card */}
        <div className="glass-card rounded-3xl p-6 md:p-8 relative overflow-hidden shadow-xl dark:shadow-slate-950/50">
          {/* Subtle ambient accent glow */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-emerald-500/10 dark:bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-teal-500/10 dark:bg-teal-500/15 rounded-full blur-3xl pointer-events-none" />

          {/* Profile Header */}
          <div className="relative flex flex-col items-center text-center">
            {/* Avatar with Status Ring */}
            <div className="relative mb-5 group">
              <div className="relative w-28 h-28 md:w-32 md:h-32 rounded-2xl overflow-hidden p-1 border-2 border-emerald-500/30 dark:border-emerald-500/40 bg-gradient-to-tr from-emerald-500/20 via-transparent to-teal-500/20 shadow-lg">
                <Image
                  src={personal.avatar}
                  alt={personal.name}
                  width={140}
                  height={140}
                  className="w-full h-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
                  priority
                />
              </div>

              {/* Status Indicator */}
              <div
                className="absolute -bottom-2 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-slate-900/90 text-white text-[11px] font-mono border border-emerald-500/40 shadow-md whitespace-nowrap"
                title={personal.status.label}
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Available</span>
              </div>
            </div>

            {/* Name & Title */}
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 dark:text-white mt-2">
              {personal.name}
            </h1>
            <p className="text-sm md:text-base font-semibold text-emerald-600 dark:text-emerald-400 mt-1">
              {personal.role}
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-0.5">
              Bangladesh Japan Info Tech (BJIT)
            </p>

            {/* Location Pill */}
            <div className="inline-flex items-center gap-1.5 text-xs text-slate-600 dark:text-slate-400 mt-3 font-mono">
              <MapPin className="w-3.5 h-3.5 text-emerald-500" />
              <span>{personal.location}</span>
            </div>

            {/* Metric Counters Strip */}
            <div className="w-full grid grid-cols-2 gap-2 mt-6 p-3 rounded-2xl bg-slate-100/80 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-800 font-mono text-center">
              <div>
                <div className="text-xl font-bold text-slate-900 dark:text-white">10+</div>
                <div className="text-[10px] text-slate-500 uppercase tracking-wider">Years Exp</div>
              </div>
              <div>
                <div className="text-xl font-bold text-emerald-600 dark:text-emerald-400">30+</div>
                <div className="text-[10px] text-slate-500 uppercase tracking-wider">Projects</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="w-full flex flex-col gap-2.5 mt-5">
              <a
                href={personal.resumePdf}
                download
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 shadow-md hover:shadow-emerald-500/25 transition-all duration-200 active:scale-95"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </a>

              <button
                onClick={() => scrollTo('contact')}
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl font-semibold text-sm text-slate-700 dark:text-slate-200 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800/80 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 transition-all duration-200 active:scale-95"
              >
                <Send className="w-4 h-4 text-emerald-500" />
                <span>Contact Me</span>
              </button>
            </div>

            {/* Social Icons Bar */}
            <div className="flex items-center justify-center gap-3 mt-6 pt-5 border-t border-slate-200/80 dark:border-slate-800/80 w-full">
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-emerald-500 dark:hover:text-emerald-400 hover:bg-emerald-500/10 border border-slate-200 dark:border-slate-800 transition-colors"
                title="GitHub"
              >
                <i className="devicon-github-original text-lg" />
              </a>

              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-emerald-500 dark:hover:text-emerald-400 hover:bg-emerald-500/10 border border-slate-200 dark:border-slate-800 transition-colors"
                title="LinkedIn"
              >
                <i className="devicon-linkedin-plain text-lg" />
              </a>

              <a
                href={`mailto:${personal.email}`}
                className="w-10 h-10 rounded-xl flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-emerald-500 dark:hover:text-emerald-400 hover:bg-emerald-500/10 border border-slate-200 dark:border-slate-800 transition-colors"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>

              <a
                href={`tel:${personal.phone}`}
                className="w-10 h-10 rounded-xl flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-emerald-500 dark:hover:text-emerald-400 hover:bg-emerald-500/10 border border-slate-200 dark:border-slate-800 transition-colors"
                title="Phone"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Vertical Navigation (Desktop) */}
        <nav className="hidden lg:block glass-card rounded-3xl p-4 shadow-lg">
          <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500 px-3 py-2 font-semibold">
            Navigation
          </div>
          <ul className="space-y-1 mt-1 font-mono text-xs">
            {navLinks.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <li key={item.id}>
                  <button
                    onClick={() => scrollTo(item.id)}
                    className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl transition-all duration-200 text-left ${
                      isActive
                        ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold border border-emerald-500/30 shadow-sm'
                        : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <Icon className={`w-4 h-4 ${isActive ? 'text-emerald-500' : 'text-slate-400'}`} />
                      <span>{item.label}</span>
                    </div>
                    <span className="text-[10px] opacity-60">// {item.number}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </aside>
  );
}
