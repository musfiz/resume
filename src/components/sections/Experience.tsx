import React from 'react';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    title: 'Sr. Software Engineer',
    company: 'Bangladesh Japan Information Technology (BJIT)',
    period: '2021 - Present',
    gradient: 'from-teal-500 to-blue-600',
    points: [
      'Architected scalable software solutions for complex business problems',
      'Led cross-functional teams in agile development methodologies',
      'Enhanced system performance and reliability through code optimization',
    ],
  },
  {
    title: 'Software Engineer',
    company: 'Bangladesh Japan Information Technology (BJIT)',
    period: '2020 - 2021',
    gradient: 'from-indigo-500 to-violet-600',
    points: [
      'Developed RESTful APIs and microservices architecture',
      'Built responsive web applications using React and Node.js',
      'Optimized database queries improving performance by 40%',
    ],
  },
  {
    title: 'Web Developer',
    company: 'Nano Information Technology (Nanosoft)',
    period: '2017 - 2020',
    gradient: 'from-violet-500 to-pink-600',
    points: [
      'Collaborated on back-end development projects',
      'Participated in agile development processes',
      'Written complex business logic to web application',
    ],
  },
  {
    title: 'Jr. Web Developer',
    company: 'Dynamic Software Ltd',
    period: '2015 - 2017',
    gradient: 'from-red-500 to-rose-600',
    points: [
      'Supported development of responsive user interfaces and maintained existing web applications',
      'Collaborated with senior developers to implement features',
      'Fixed bugs, and improved code quality while gaining experience with modern web technologies and version control workflows.',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="min-h-screen py-20 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">
            Experience
          </h2>
          <div className="mt-4 mx-auto w-24 h-1 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600" />
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-lime-500 via-teal-500 to-pink-500" />

            <div className="space-y-12">
              {experiences.map((exp, i) => (
                <div key={i} className="relative pl-20">
                  {/* Icon */}
                  <div className={`absolute left-0 top-0 w-16 h-16 bg-gradient-to-br ${exp.gradient} rounded-full flex items-center justify-center shadow-lg`}>
                    <Briefcase className="w-8 h-8 text-white" />
                  </div>

                  {/* Card */}
                  <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-700 rounded-xl p-8
                    transition-all duration-300 hover:translate-x-1.5 hover:shadow-xl hover:shadow-slate-200/50 dark:hover:shadow-slate-900/50">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{exp.title}</h3>
                        <p className="text-blue-500 font-semibold">{exp.company}</p>
                      </div>
                      <span className="text-gray-500 dark:text-slate-400 mt-2 md:mt-0 font-semibold text-sm">
                        {exp.period}
                      </span>
                    </div>
                    <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-slate-400">
                      {exp.points.map((pt, j) => <li key={j}>{pt}</li>)}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
