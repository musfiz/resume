import React from 'react';
import { GraduationCap, Award } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="min-h-screen py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-6">
        <h2 className="section-title">Education</h2>
        <div className="max-w-4xl mx-auto">
          {/* Timeline container */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-500 via-teal-500 to-blue-500"></div>

            {/* Timeline items */}
            <div className="space-y-12">
              {/* Education 1 */}
              <div className="relative pl-20">
                {/* Icon */}
                <div className="absolute left-0 top-0 w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-full flex items-center justify-center shadow-lg">
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <div className="education-card">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold">Master's in Computer Science & Engineering</h3>
                      <p className="text-blue-500 font-semibold">National University(NU)</p>
                    </div>
                    <span className="text-gray-500 dark:text-gray-400 mt-2 md:mt-0 font-semibold">2015 - 2017 </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">Specialized in Software Engineering(SE)</p>
                  <div className="mt-3 flex items-center gap-2 text-yellow-600 dark:text-yellow-400">
                    <Award className="w-5 h-5" />
                    <span className="font-semibold">Post Graduate</span>
                  </div>
                </div>
              </div>

              {/* Education 2 */}
              <div className="relative pl-20">
                {/* Icon */}
                <div className="absolute left-0 top-0 w-16 h-16 bg-gradient-to-br from-teal-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <div className="education-card">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold">Bachelor's of Computer Science & Engineering(BSE)</h3>
                      <p className="text-blue-500 font-semibold">National University(NU)</p>
                    </div>
                    <span className="text-gray-500 dark:text-gray-400 mt-2 md:mt-0 font-semibold">2008 - 2014 </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">Foundation in Computer Science, Data Structures, and Algorithms</p>
                  <div className="mt-3 flex items-center gap-2 text-yellow-600 dark:text-yellow-400">
                    <Award className="w-5 h-5" />
                    <span className="font-semibold">CGPA: 3.00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
