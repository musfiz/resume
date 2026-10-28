import React from 'react';
import { Moon as MoonIcon, Sun as SunIcon } from 'lucide-react';

interface ThemeToggleProps {
    theme: 'light' | 'dark';
    toggleTheme: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ theme, toggleTheme }) => {
    return (
        <button
            id="theme-toggle"
            onClick={toggleTheme}
            className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110
                ${theme === 'light'
                    ? 'bg-gradient-to-br from-indigo-500 to-purple-600 text-white'
                    : 'bg-gradient-to-br from-yellow-400 to-orange-400 text-white'
                }`}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
            {theme === 'light' ? <MoonIcon className="w-7 h-7" /> : <SunIcon className="w-7 h-7" />}
        </button>
    );
};

export default ThemeToggle;
