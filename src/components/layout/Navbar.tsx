'use client';

import React, { useState } from 'react';
import { Menu, X, Sun, Moon, Download, Send } from 'lucide-react';
import { portfolioData } from '@/data/portfolioData';

interface NavbarProps {
  activeSection: string;
  isScrolled: boolean;
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const navItems = [
  { href: '#about', label: 'About', number: '01' },
  { href: '#technology', label: 'Skills', number: '02' },
  { href: '#experience', label: 'Experience', number: '03' },
  { href: '#projects', label: 'Projects', number: '04' },
  { href: '#services', label: 'Services', number: '05' },
  { href: '#education', label: 'Education', number: '06' },
  { href: '#contact', label: 'Contact', number: '07' },
];

export default function Navbar({
  activeSection,
  isScrolled,
  theme,
  toggleTheme,
}: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { personal } = portfolioData;

  const scrollTo = (href: string) => {
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 dark:bg-[#0b0f17]/95 backdrop-blur-md border-b border-slate-200/90 dark:border-slate-800 shadow-lg shadow-slate-900/5 dark:shadow-black/50 py-3'
          : 'bg-white/80 dark:bg-[#0b0f17]/80 backdrop-blur-md py-4 border-b border-slate-200/40 dark:border-slate-800/40'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Brand */}
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              scrollTo('#about');
            }}
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-500 flex items-center justify-center text-white font-mono font-bold text-lg shadow-md group-hover:scale-105 transition-transform">
              MR
            </div>
            <div className="hidden sm:block">
              <span className="font-bold text-slate-900 dark:text-white text-base tracking-tight block leading-tight">
                {personal.name}
              </span>
              <span className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400 block leading-tight">
                Senior Software Engineer
              </span>
            </div>
          </a>

          {/* Center Links (Desktop only, subtle & clean) */}
          <nav className="hidden xl:flex items-center gap-1 font-mono text-xs">
            {navItems.map((item) => {
              const active = activeSection === item.href.slice(1);
              return (
                <button
                  key={item.href}
                  onClick={() => scrollTo(item.href)}
                  className={`px-3 py-1.5 rounded-lg transition-colors ${
                    active
                      ? 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 font-bold'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/50'
                  }`}
                >
                  <span className="opacity-50 text-[10px] mr-1.5">{item.number}</span>
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Right Actions: Theme Toggle + Resume CTA + Mobile Menu Button */}
          <div className="flex items-center gap-2.5">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle dark/light theme"
              className="w-10 h-10 rounded-xl flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-emerald-500 dark:hover:text-emerald-400 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 transition-colors"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-amber-400 transition-transform hover:rotate-45" />
              ) : (
                <Moon className="w-5 h-5 text-slate-700 transition-transform hover:-rotate-12" />
              )}
            </button>

            {/* Quick CV Download */}
            <a
              href={personal.resumePdf}
              download
              className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold font-mono text-white bg-emerald-600 hover:bg-emerald-500 shadow-sm transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Open mobile menu"
              className="lg:hidden w-10 h-10 rounded-xl flex items-center justify-center text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 transition-colors"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {isOpen && (
          <div className="lg:hidden mt-3 pt-3 pb-4 border border-slate-200 dark:border-slate-800 rounded-2xl bg-white/95 dark:bg-[#0f172a]/95 backdrop-blur-xl px-4 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="grid grid-cols-2 gap-2 py-2 font-mono text-xs">
              {navItems.map((item) => {
                const active = activeSection === item.href.slice(1);
                return (
                  <button
                    key={item.href}
                    onClick={() => scrollTo(item.href)}
                    className={`flex items-center justify-between px-3 py-2 rounded-xl text-left transition-colors ${
                      active
                        ? 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 font-bold border border-emerald-500/30'
                        : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800/60'
                    }`}
                  >
                    <span>{item.label}</span>
                    <span className="text-[10px] opacity-50">// {item.number}</span>
                  </button>
                );
              })}
            </div>

            <div className="pt-3 mt-2 border-t border-slate-200 dark:border-slate-800 flex gap-2">
              <a
                href={personal.resumePdf}
                download
                className="flex-1 inline-flex items-center justify-center gap-2 py-2 px-3 rounded-xl font-mono text-xs font-semibold text-white bg-emerald-600"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Resume PDF</span>
              </a>
              <button
                onClick={() => scrollTo('#contact')}
                className="flex-1 inline-flex items-center justify-center gap-2 py-2 px-3 rounded-xl font-mono text-xs font-semibold text-slate-800 dark:text-slate-200 bg-slate-100 dark:bg-slate-800"
              >
                <Send className="w-3.5 h-3.5 text-emerald-500" />
                <span>Contact</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
