import React from 'react';
import Image from 'next/image';

const projects = [
  {
    image: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'E-Commerce Solution',
    description: 'Progressive e-commerce solution with payment integration and real-time inventory & stock management.',
    tags: ['Bootstrap', 'jQuery', 'Laravel', 'MySQL'],
    link: 'https://zohamart.codeemit.com',
  },
  {
    image: '/cims.png',
    title: 'CIMS for Laser Medical Center',
    description: 'A Clinic management solution for conduct appointment, service, invoice, prescription & inventory.',
    tags: ['Bootstrap', 'Laravel', 'jQuery', 'MySQL', 'Yajra'],
    link: 'https://lasermedicalbd.com/',
  },
  {
    image: '/erp.png',
    title: 'ERP for Laser Medical Center',
    description: 'A ERP Solution that manages day-to-day business activities, integrating people, processes, and technologies, and managing all aspects of a business.',
    tags: ['React', 'Laravel', 'MySQL'],
    link: 'https://lasermedicalbd.com/',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen py-20 bg-gray-50 dark:bg-slate-900/50">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">
            Projects
          </h2>
          <div className="mt-4 mx-auto w-24 h-1 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <div
              key={i}
              className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-700 rounded-xl p-5
                transition-all duration-300 hover:-translate-y-2.5 hover:shadow-2xl hover:shadow-indigo-500/10"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={320}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{project.title}</h3>
              <p className="text-gray-600 dark:text-slate-400 mb-4 text-sm leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-block px-3 py-1 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-full text-xs font-semibold"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                target="_blank"
                href={project.link}
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline font-medium text-sm"
              >
                View Project →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
