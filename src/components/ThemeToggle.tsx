'use client';

import React from 'react';
import { Moon, Sun } from 'lucide-react';

interface ThemeToggleProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

export default function ThemeToggle({ theme, toggleTheme }: ThemeToggleProps) {
  return (
    <button
      id="theme-toggle"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-2xl shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 glass-card border border-slate-200/80 dark:border-slate-700/80 group"
    >
      {theme === 'light' ? (
        <Moon className="w-5 h-5 text-slate-800 group-hover:text-emerald-600 transition-colors" />
      ) : (
        <Sun className="w-5 h-5 text-amber-400 group-hover:text-amber-300 transition-colors" />
      )}
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
