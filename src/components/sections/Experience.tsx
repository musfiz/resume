import React from 'react';
import { Briefcase } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="min-h-screen py-20">
      <div className="container mx-auto px-6">
        <h2 className="section-title">Experience</h2>
        <div className="max-w-4xl mx-auto">
          {/* Timeline container */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-lime-500 via-teal-500 to-pink-500"></div>

            {/* Timeline items */}
            <div className="space-y-12">
              {/* Experience 1 */}
              <div className="relative pl-20">
                {/* Icon */}
                <div className="absolute left-0 top-0 w-16 h-16 bg-gradient-to-br from-teal-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                  <Briefcase className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <div className="experience-card">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold">Sr. Software Engineer</h3>
                      <p className="text-blue-500 font-semibold">Bangaldesh Japan Information Technology(BJIT)</p>
                    </div>
                    <span className="text-gray-500 dark:text-gray-400 mt-2 md:mt-0 font-semibold">2021 - Present</span>
                  </div>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
                    <li>Architected scalable software solutions for complex business problems</li>
                    <li>Lead cross-functional teams in agile development methodologies</li>
                    <li>Enhanced system performance and reliability through code optimization</li>
                  </ul>
                </div>
              </div>

              {/* Experience 2 */}
              <div className="relative pl-20">
                {/* Icon */}
                <div className="absolute left-0 top-0 w-16 h-16 bg-gradient-to-br from-indigo-500 to-violet-600 rounded-full flex items-center justify-center shadow-lg">
                  <Briefcase className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <div className="experience-card">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold">Software Engineer</h3>
                      <p className="text-blue-500 font-semibold">Bangaldesh Japan Information Technology(BJIT)</p>
                    </div>
                    <span className="text-gray-500 dark:text-gray-400 mt-2 md:mt-0 font-semibold">2020 - 2021</span>
                  </div>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
                    <li>Developed RESTful APIs and microservices architecture</li>
                    <li>Built responsive web applications using React and Node.js</li>
                    <li>Optimized database queries improving performance by 40%</li>
                  </ul>
                </div>
              </div>

              {/* Experience 3 */}
              <div className="relative pl-20">
                {/* Icon */}
                <div className="absolute left-0 top-0 w-16 h-16 bg-gradient-to-br from-violet-500 to-pink-600 rounded-full flex items-center justify-center shadow-lg">
                  <Briefcase className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <div className="experience-card">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold">Web Developer</h3>
                      <p className="text-blue-500 font-semibold">Nano Information Technology(Nanosoft)</p>
                    </div>
                    <span className="text-gray-500 dark:text-gray-400 mt-2 md:mt-0 font-semibold">2019 - 2020</span>
                  </div>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
                    <li>Collaborated on back-end development projects</li>
                    <li>Participated in agile development processes</li>
                    <li>Written complex business logic to web application</li>
                  </ul>
                </div>
              </div>

              {/* Experience 4 */}
              {/* <div className="relative pl-20">
                <div className="absolute left-0 top-0 w-16 h-16 bg-gradient-to-br from-red-500 to-rose-600 rounded-full flex items-center justify-center shadow-lg">
                  <Briefcase className="w-8 h-8 text-white" />
                </div>
                <div className="experience-card">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold">Jr. Web Developer</h3>
                      <p className="text-blue-500 font-semibold">Dynamic Software Ltd</p>
                    </div>
                    <span className="text-gray-500 dark:text-gray-400 mt-2 md:mt-0 font-semibold">2015 - 2017</span>
                  </div>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
                    <li>Supported development of responsive user interfaces and maintained existing web applications</li>
                    <li>Collaborated with senior developers to implement features</li>
                    <li>Fix bugs, and improve code quality while gaining experience with modern web technologies and version control workflows.</li>
                  </ul>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}