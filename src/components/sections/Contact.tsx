import React from 'react';
import {
  Send as PaperPlaneIcon,
  Mail as EnvelopeIcon,
  Phone as PhoneIcon,
  MapPin as MapPinIcon,
  Globe as GlobeAltIcon,
} from 'lucide-react';

const contactInfo = [
  { icon: <EnvelopeIcon className="w-8 h-8 text-blue-500 mb-4" />, label: 'Email', value: 'mustafiz.info13@gmail.com' },
  { icon: <PhoneIcon className="w-8 h-8 text-blue-500 mb-4" />, label: 'Phone', value: '+8801556984227' },
  { icon: <MapPinIcon className="w-8 h-8 text-blue-500 mb-4" />, label: 'Location', value: 'Dhaka, Bangladesh' },
  { icon: <GlobeAltIcon className="w-8 h-8 text-blue-500 mb-4" />, label: 'Website', value: 'www.musfiz.com' },
];

export default function Contact() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('Thank you for your message! This is a demo form.');
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="min-h-screen py-20 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">
            Contact Me
          </h2>
          <div className="mt-4 mx-auto w-24 h-1 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600" />
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Contact Info Cards */}
          <div className="grid grid-cols-2 gap-6 mb-12">
            {contactInfo.map((item) => (
              <div
                key={item.label}
                className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-700 rounded-xl p-6 text-center
                  transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-indigo-500/10"
              >
                {item.icon}
                <h3 className="font-bold text-lg mb-1 text-gray-900 dark:text-white">{item.label}</h3>
                <p className="text-gray-600 dark:text-slate-400 text-sm">{item.value}</p>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <form
            className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-700 rounded-xl p-8"
            onSubmit={handleSubmit}
          >
            <div className="mb-6">
              <label htmlFor="name" className="block mb-2 font-semibold text-gray-800 dark:text-slate-200">
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Your Name"
                required
                className="w-full px-4 py-3 bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-lg
                  text-gray-900 dark:text-slate-100 placeholder-gray-400 dark:placeholder-slate-500 text-base
                  transition-all duration-300 outline-none
                  focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block mb-2 font-semibold text-gray-800 dark:text-slate-200">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="your.email@example.com"
                required
                className="w-full px-4 py-3 bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-lg
                  text-gray-900 dark:text-slate-100 placeholder-gray-400 dark:placeholder-slate-500 text-base
                  transition-all duration-300 outline-none
                  focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block mb-2 font-semibold text-gray-800 dark:text-slate-200">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                placeholder="Your message..."
                required
                className="w-full px-4 py-3 bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-lg
                  text-gray-900 dark:text-slate-100 placeholder-gray-400 dark:placeholder-slate-500 text-base
                  transition-all duration-300 outline-none resize-none
                  focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
              />
            </div>
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center px-6 py-3
                bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg font-semibold
                transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-indigo-500/30"
            >
              <PaperPlaneIcon className="w-5 h-5 mr-2" />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
