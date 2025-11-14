import React from 'react';
import Image from 'next/image';
import { Download as DownloadIcon } from 'lucide-react';

export default function Home() {
  return (
    <section id="home" className="min-h-screen flex items-center">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold">
              Hi, I&apos;m <span className="text-gradient">Mustafiz</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-600 dark:text-gray-300">
              Full Stack Developer
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Building scalable solutions and leading development teams to deliver exceptional digital products
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="/Mustafizur_Rahman.pdf" className="btn-primary" download>
                <DownloadIcon className="w-5 h-5 mr-2" />Download CV
              </a>
              <a href="https://www.linkedin.com/in/musfiz/" target="_blank" rel="noopener noreferrer" className="btn-secondary">
                <i className="devicon-linkedin-plain w-5 h-5 mr-2"></i>LinkedIn
              </a>
              <a href="https://www.github.com/musfiz" target="_blank" rel="noopener noreferrer" className="btn-secondary">
                <i className="devicon-github-original w-5 h-5 mr-2"></i>GitHub
              </a>
            </div>
          </div>

          <div className="relative mt-12 md:mt-0">
            <div className="profile-image-container">
              <div className="profile-bg-shape"></div>
              <Image
                src="/dev.png"
                alt="Mustafiz Profile"
                width={300}
                height={300}
                className="profile-image"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
