'use client';

import React, { useState, useEffect, useCallback } from 'react';
import dynamic from 'next/dynamic';
import Header from '@/components/Header';
import ThemeToggle from '@/components/ThemeToggle';

// Lazy load sections with loading fallback
const Home = dynamic(() => import('@/components/sections/Home'), {
    loading: () => <div className="min-h-screen flex items-center justify-center">Loading...</div>,
    ssr: true
});

const Technology = dynamic(() => import('@/components/sections/Technology'), {
    loading: () => <div className="min-h-[400px] flex items-center justify-center">Loading...</div>,
    ssr: false
});

const Experience = dynamic(() => import('@/components/sections/Experience'), {
    loading: () => <div className="min-h-[400px] flex items-center justify-center">Loading...</div>,
    ssr: false
});

const Education = dynamic(() => import('@/components/sections/Education'), {
    loading: () => <div className="min-h-[400px] flex items-center justify-center">Loading...</div>,
    ssr: false
});

const Services = dynamic(() => import('@/components/sections/Services'), {
    loading: () => <div className="min-h-[400px] flex items-center justify-center">Loading...</div>,
    ssr: false
});

const Projects = dynamic(() => import('@/components/sections/Projects'), {
    loading: () => <div className="min-h-[400px] flex items-center justify-center">Loading...</div>,
    ssr: false
});

const Contact = dynamic(() => import('@/components/sections/Contact'), {
    loading: () => <div className="min-h-[400px] flex items-center justify-center">Loading...</div>,
    ssr: false
});

export default function PortfolioPage() {
    const [theme, setTheme] = useState<'light' | 'dark'>('light');
    const [isMounted, setIsMounted] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const storedTheme = window.localStorage.getItem('theme');
        if (storedTheme === 'dark' || storedTheme === 'light') {
            setTheme(storedTheme);
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
            localStorage.setItem('theme', theme);
        }
    }, [theme, isMounted]);

    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    const handleScroll = useCallback(() => {
        // Header scroll effect
        setIsScrolled(window.scrollY > 50);

        // Active section highlighting
        const sections = document.querySelectorAll('section');
        const headerHeight = document.getElementById('header')?.offsetHeight || 0;
        let currentSection = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop - headerHeight - 100;
            if (window.scrollY >= sectionTop) {
                currentSection = section.id;
            }
        });

        setActiveSection(currentSection || 'home');
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Set initial state on mount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [handleScroll]);

    // Prevent rendering until theme is determined to avoid flash of wrong theme
    if (!isMounted) {
        return null;
    }

    return (
        <>
            <Header activeSection={activeSection} isScrolled={isScrolled} />
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />

            <main className="pt-20">
                <Home />
                <Technology />
                <Experience />
                <Education />
                <Services />
                <Projects />
                <Contact />
            </main>

            <footer className="py-8 text-center border-t">
                <p className="text-gray-600 dark:text-gray-400">
                    © 2025 Mustafizur Rahman. All rights reserved.
                </p>
            </footer>
        </>
    );
}