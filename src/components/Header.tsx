'use client';

import React from 'react';
import Navbar from './layout/Navbar';

interface HeaderProps {
  activeSection: string;
  isScrolled: boolean;
  theme?: 'light' | 'dark';
  toggleTheme?: () => void;
}

export default function Header({
  activeSection,
  isScrolled,
  theme = 'dark',
  toggleTheme = () => {},
}: HeaderProps) {
  return (
    <Navbar
      activeSection={activeSection}
      isScrolled={isScrolled}
      theme={theme}
      toggleTheme={toggleTheme}
    />
  );
}
