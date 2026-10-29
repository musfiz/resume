'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Navbar from '@/components/layout/Navbar';
import Sidebar from '@/components/layout/Sidebar';
import ThemeToggle from '@/components/ThemeToggle';
import Home from '@/components/sections/Home';
import Technology from '@/components/sections/Technology';
import Experience from '@/components/sections/Experience';
import Projects from '@/components/sections/Projects';
import Services from '@/components/sections/Services';
import Education from '@/components/sections/Education';
import Testimonials from '@/components/sections/Testimonials';
import Contact from '@/components/sections/Contact';
import { ArrowUp } from 'lucide-react';
import { portfolioData } from '@/data/portfolioData';

export default function PortfolioPage() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const [isMounted, setIsMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const storedTheme = window.localStorage.getItem('theme');
    if (storedTheme === 'dark' || storedTheme === 'light') {
      setTheme(storedTheme);
    } else {
      // Default to dark theme as planned
      setTheme('dark');
    }
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted) {
      const root = window.document.documentElement;
      if (theme === 'dark') {
        root.classList.add('dark');
      } else {
        root.classList.remove('dark');
      }
      try {
        localStorage.setItem('theme', theme);
      } catch {
        // Safe fallback for strict privacy browsers
      }
    }
  }, [theme, isMounted]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 40);

    const sectionIds = ['about', 'technology', 'experience', 'projects', 'services', 'education', 'contact'];
    const scrollPos = window.scrollY + 200;

    for (let i = sectionIds.length - 1; i >= 0; i--) {
      const el = document.getElementById(sectionIds[i]);
      if (el && el.offsetTop <= scrollPos) {
        setActiveSection(sectionIds[i]);
        return;
      }
    }

    if (window.scrollY < 200) {
      setActiveSection('about');
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!isMounted) {
    return (
      <div className="min-h-screen bg-[#0b0f17] flex items-center justify-center">
        <div className="w-8 h-8 rounded-full border-2 border-emerald-500 border-t-transparent animate-spin" />
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-dot-grid">
      {/* Subtle Ambient Background Gradients */}
      <div className="fixed top-0 left-1/4 w-96 h-96 bg-emerald-500/10 dark:bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="fixed bottom-10 right-1/4 w-[30rem] h-[30rem] bg-teal-500/10 dark:bg-teal-500/10 rounded-full blur-[160px] pointer-events-none z-0" />

      {/* Top Navbar */}
      <Navbar
        activeSection={activeSection}
        isScrolled={isScrolled}
        theme={theme}
        toggleTheme={toggleTheme}
      />

      {/* Main Two-Column Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 pb-16">
        <div className="flex flex-col lg:flex-row items-start gap-8 xl:gap-12">
          {/* Left Sticky Profile Sidebar (Taqui Imam Signature Layout) */}
          <Sidebar activeSection={activeSection} />

          {/* Right Main Content Stream (Chanh Dai Glass Cards & Micro-interactions) */}
          <main className="flex-1 w-full min-w-0 space-y-4">
            <Home />
            <Technology />
            <Experience />
            <Projects />
            <Services />
            <Education />
            <Testimonials />
            <Contact />
          </main>
        </div>
      </div>

      {/* Floating Theme Toggle Switcher */}
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />

      {/* Global Footer */}
      <footer className="relative z-10 border-t border-slate-200/80 dark:border-slate-800/80 py-8 bg-slate-50/80 dark:bg-[#0b0f17]/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500 dark:text-slate-400">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} Mustafizur Rahman. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={portfolioData.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-500 transition-colors"
            >
              GitHub
            </a>
            <a
              href={portfolioData.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-500 transition-colors"
            >
              LinkedIn
            </a>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 hover:text-emerald-500 transition-colors border border-slate-200 dark:border-slate-700"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
