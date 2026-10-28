import React from 'react';
import { Code, Database, Server, Smartphone, Cloud, Wrench, Layers, Rocket } from 'lucide-react';

const services = [
  {
    icon: <Code className="w-8 h-8" />,
    title: 'Frontend Development',
    description: 'Building responsive, interactive user interfaces with React, Next.js, Angular, Vue, and modern CSS frameworks like Tailwind CSS.',
    gradient: 'from-blue-500 to-cyan-500',
    glow: 'hover:shadow-blue-500/20',
  },
  {
    icon: <Server className="w-8 h-8" />,
    title: 'Backend Development',
    description: 'Creating robust server-side applications with Laravel, Node.js, Express and RESTful API development.',
    gradient: 'from-purple-500 to-pink-500',
    glow: 'hover:shadow-purple-500/20',
  },
  {
    icon: <Database className="w-8 h-8" />,
    title: 'Database Design',
    description: 'Designing and optimizing databases using PostgreSQL, MongoDB, MySQL, and implementing efficient data models.',
    gradient: 'from-green-500 to-teal-500',
    glow: 'hover:shadow-green-500/20',
  },
  {
    icon: <Cloud className="w-8 h-8" />,
    title: 'Cloud Services',
    description: 'Deploying and managing applications on AWS, Azure and implementing serverless architectures.',
    gradient: 'from-orange-500 to-red-500',
    glow: 'hover:shadow-orange-500/20',
  },
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: 'Mobile Development',
    description: 'Building cross-platform mobile applications using React Native and Progressive Web Apps (PWA).',
    gradient: 'from-indigo-500 to-purple-500',
    glow: 'hover:shadow-indigo-500/20',
  },
  {
    icon: <Layers className="w-8 h-8" />,
    title: 'Microservices Architecture',
    description: 'Designing and implementing scalable microservices architecture with Docker, Kubernetes, and service mesh.',
    gradient: 'from-pink-500 to-rose-500',
    glow: 'hover:shadow-pink-500/20',
  },
  {
    icon: <Wrench className="w-8 h-8" />,
    title: 'DevOps & CI/CD',
    description: 'Setting up automated deployment pipelines, monitoring, and infrastructure as code using GitHub Actions, Jenkins, and Terraform.',
    gradient: 'from-yellow-500 to-orange-500',
    glow: 'hover:shadow-yellow-500/20',
  },
  {
    icon: <Rocket className="w-8 h-8" />,
    title: 'Performance Optimization',
    description: 'Optimizing application performance, implementing caching strategies, and improving load times and user experience.',
    gradient: 'from-cyan-500 to-blue-500',
    glow: 'hover:shadow-cyan-500/20',
  },
];

export default function Services() {
  return (
    <section id="services" className="min-h-screen py-20 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-6">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">
            Services
          </h2>
          <div className="mt-4 mx-auto w-24 h-1 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600" />
        </div>
        <p className="text-center text-gray-600 dark:text-slate-400 max-w-2xl mx-auto mb-16">
          Comprehensive full-stack development services to bring your ideas to life with cutting-edge technologies and best practices.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-slate-700
                transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${service.glow}`}
            >
              {/* Icon */}
              <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center mb-4 shadow-lg
                transition-transform duration-300 group-hover:scale-110`}>
                <div className="text-white">{service.icon}</div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 dark:text-slate-400 text-sm leading-relaxed">
                {service.description}
              </p>

              {/* Hover gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300 pointer-events-none`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
