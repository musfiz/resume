import React from 'react';

const techs = [
  { icon: 'devicon-nodejs-plain colored', label: 'Node.js' },
  { icon: 'devicon-javascript-plain colored', label: 'JavaScript' },
  { icon: 'devicon-typescript-plain colored', label: 'TypeScript' },
  { icon: 'devicon-react-original colored', label: 'React' },
  { icon: 'devicon-nextjs-plain', label: 'Next.js' },
  { icon: 'devicon-angularjs-plain colored', label: 'Angular' },
  { icon: 'devicon-vuejs-plain colored', label: 'Vue' },
  { icon: 'devicon-nuxt-original', label: 'Nuxt' },
  { icon: 'devicon-laravel-original colored', label: 'Laravel' },
  { icon: 'devicon-tailwindcss-plain colored', label: 'Tailwind CSS' },
  { icon: 'devicon-amazonwebservices-plain-wordmark colored', label: 'AWS' },
  { icon: 'devicon-azure-plain colored', label: 'Azure' },
  { icon: 'devicon-mongodb-plain colored', label: 'MongoDB' },
  { icon: 'devicon-mysql-original colored', label: 'MySQL' },
  { icon: 'devicon-postgresql-plain colored', label: 'PostgreSQL' },
  { icon: 'devicon-docker-plain colored', label: 'Docker' },
  { icon: 'devicon-reactnative-original colored', label: 'React Native' },
  { icon: 'devicon-github-original', label: 'GitHub' },
];

export default function Technology() {
  return (
    <section id="technology" className="min-h-screen py-20 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">
            Technologies
          </h2>
          <div className="mt-4 mx-auto w-24 h-1 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {techs.map((tech) => (
            <div
              key={tech.label}
              className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-700 rounded-xl p-6 text-center
                cursor-pointer transition-all duration-300
                hover:-translate-y-1.5 hover:shadow-xl hover:shadow-indigo-500/10 hover:border-indigo-400 dark:hover:border-indigo-500"
            >
              <i className={`${tech.icon} text-6xl mb-4 block`}></i>
              <h3 className="font-semibold text-sm text-gray-800 dark:text-slate-200">{tech.label}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
