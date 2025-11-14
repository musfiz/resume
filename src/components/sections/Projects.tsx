import React from 'react';
import Image from 'next/image';

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen py-20">
      <div className="container mx-auto px-6">
        <h2 className="section-title">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="project-card">
            <Image src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="E-Commerce Solution"
              width={600} height={320}
              className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-xl font-bold mb-2">E-Commerce Solution</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Progressive e-commerce solution with payment integration and real-time inventory & stock management.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="tech-badge">Bootstrap</span>
              <span className="tech-badge">JQuery</span>
              <span className="tech-badge">Laravel</span>
              <span className="tech-badge">MySQL</span>
            </div>
            <a target='_blank' href="https://zohamart.codeemit.com" className="text-blue-500 hover:underline">View Project →</a>
          </div>
          <div className="project-card">
            <Image src="/cims.png"
              alt="Task Management App"
              width={600} height={320}
              className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-xl font-bold mb-2">CIMS for Laser Medical Center</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              A Clinic management solution for conduct appointment, service, invoice, prescription & inventory.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="tech-badge">Bootstrap</span>
              <span className="tech-badge">Laravel</span>
              <span className="tech-badge">JQuery</span>
              <span className="tech-badge">MySQL</span>
              <span className="tech-badge">Yajra</span>
            </div>
            <a href="https://lasermedicalbd.com/" target='_blank' className="text-blue-500 hover:underline">View Project →</a>
          </div>
          <div className="project-card">
            <Image src="/erp.png"
              alt="Analytics Dashboard"
              width={600} height={320}
              className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-xl font-bold mb-2">ERP for Laser Medical Center</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              A ERP Solution that manages day-to-day business activities, integrating people, processes, and technologies, and managing all aspects of a business.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="tech-badge">React</span>
              <span className="tech-badge">Laravel</span>
              <span className="tech-badge">MySQL</span>
            </div>
            <a href="https://lasermedicalbd.com/" target='_blank' className="text-blue-500 hover:underline">View Project →</a>
          </div>
        </div>
      </div>
    </section>
  );
}
