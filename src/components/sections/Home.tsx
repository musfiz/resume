import React from 'react';
import Image from 'next/image';
import { Download as DownloadIcon } from 'lucide-react';

export default function Home() {
  return (
    <section id="home" className="min-h-screen flex items-center bg-white dark:bg-slate-950">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white">
              Hi, I&apos;m{' '}
              <span className="bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
                Mustafiz
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-600 dark:text-slate-300">
              Full Stack Developer
            </h2>
            <p className="text-lg text-gray-600 dark:text-slate-400">
              Building scalable solutions and leading development teams to deliver exceptional digital products
            </p>
            <div className="flex flex-wrap gap-4">
              {/* Primary Button */}
              <a
                href="/Mustafizur_Rahman.pdf"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-indigo-500/30"
                download
              >
                <DownloadIcon className="w-5 h-5 mr-2" />
                Download CV
              </a>
              {/* Secondary Buttons */}
              <a
                href="https://www.linkedin.com/in/musfiz/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-white dark:bg-slate-900 text-gray-900 dark:text-slate-100 border-2 border-gray-200 dark:border-slate-700 rounded-lg font-semibold transition-all duration-300 hover:border-blue-500 hover:text-blue-500 hover:-translate-y-0.5"
              >
                <i className="devicon-linkedin-plain mr-2 text-lg"></i>
                LinkedIn
              </a>
              <a
                href="https://www.github.com/musfiz"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-white dark:bg-slate-900 text-gray-900 dark:text-slate-100 border-2 border-gray-200 dark:border-slate-700 rounded-lg font-semibold transition-all duration-300 hover:border-blue-500 hover:text-blue-500 hover:-translate-y-0.5"
              >
                <i className="devicon-github-original mr-2 text-lg"></i>
                GitHub
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="relative mt-12 md:mt-0 flex justify-center items-center">
            {/* Animated blob background */}
            <div
              className="absolute w-[380px] h-[380px] md:w-[420px] md:h-[420px] bg-gradient-to-br from-indigo-500 to-purple-600 animate-morph z-0"
            />
            <Image
              src="/dev.png"
              alt="Mustafiz Profile"
              width={360}
              height={360}
              className="relative z-10 object-cover border-4 border-white dark:border-slate-950 shadow-2xl"
              style={{ borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%' }}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
