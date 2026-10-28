import React from 'react';
import { GraduationCap, Award } from 'lucide-react';

const educations = [
  {
    degree: "Master's in Computer Science & Engineering",
    institution: 'National University (NU)',
    period: '2015 - 2017',
    detail: 'Specialized in Software Engineering (SE)',
    award: 'Post Graduate',
    gradient: 'from-green-500 to-teal-600',
  },
  {
    degree: "Bachelor's of Computer Science & Engineering (BSE)",
    institution: 'National University (NU)',
    period: '2008 - 2014',
    detail: 'Foundation in Computer Science, Data Structures, and Algorithms',
    award: 'CGPA: 3.00',
    gradient: 'from-teal-500 to-blue-600',
  },
];

export default function Education() {
  return (
    <section id="education" className="min-h-screen py-20 bg-gray-50 dark:bg-slate-900/50">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">
            Education
          </h2>
          <div className="mt-4 mx-auto w-24 h-1 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600" />
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-500 via-teal-500 to-blue-500" />

            <div className="space-y-12">
              {educations.map((edu, i) => (
                <div key={i} className="relative pl-20">
                  {/* Icon */}
                  <div className={`absolute left-0 top-0 w-16 h-16 bg-gradient-to-br ${edu.gradient} rounded-full flex items-center justify-center shadow-lg`}>
                    <GraduationCap className="w-8 h-8 text-white" />
                  </div>

                  {/* Card */}
                  <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-700 rounded-xl p-8
                    transition-all duration-300 hover:translate-x-1.5 hover:shadow-xl">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{edu.degree}</h3>
                        <p className="text-blue-500 font-semibold">{edu.institution}</p>
                      </div>
                      <span className="text-gray-500 dark:text-slate-400 mt-2 md:mt-0 font-semibold text-sm">
                        {edu.period}
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-slate-400">{edu.detail}</p>
                    <div className="mt-3 flex items-center gap-2 text-yellow-600 dark:text-yellow-400">
                      <Award className="w-5 h-5" />
                      <span className="font-semibold">{edu.award}</span>
                    </div>
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
