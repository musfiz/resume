import React from 'react';
import { Send as PaperPlaneIcon, Mail as EnvelopeIcon, Phone as PhoneIcon, MapPin as MapPinIcon, Globe as GlobeAltIcon } from 'lucide-react';

export default function Contact() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('Thank you for your message! This is a demo form.');
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="min-h-screen py-20">
      <div className="container mx-auto px-6">
        <h2 className="section-title">Contact Me</h2>
        <div className="max-w-2xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="contact-info-card">
              <EnvelopeIcon className="w-8 h-8 text-blue-500 mb-4" />
              <h3 className="font-bold text-lg mb-2">Email</h3>
              <p className="text-gray-600 dark:text-gray-400">mustafiz.info13@gmail.com</p>
            </div>
            <div className="contact-info-card">
              <PhoneIcon className="w-8 h-8 text-blue-500 mb-4" />
              <h3 className="font-bold text-lg mb-2">Phone</h3>
              <p className="text-gray-600 dark:text-gray-400">+8801556984227</p>
            </div>
            <div className="contact-info-card">
              <MapPinIcon className="w-8 h-8 text-blue-500 mb-4" />
              <h3 className="font-bold text-lg mb-2">Location</h3>
              <p className="text-gray-600 dark:text-gray-400">Dhaka, Bangladesh</p>
            </div>
            <div className="contact-info-card">
              <GlobeAltIcon className="w-8 h-8 text-blue-500 mb-4" />
              <h3 className="font-bold text-lg mb-2">Website</h3>
              <p className="text-gray-600 dark:text-gray-400">www.musfiz.com</p>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="name" className="block mb-2 font-semibold">Name</label>
              <input id="name" type="text" className="form-input" placeholder="Your Name" required />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block mb-2 font-semibold">Email</label>
              <input id="email" type="email" className="form-input" placeholder="your.email@example.com" required />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block mb-2 font-semibold">Message</label>
              <textarea id="message" rows={5} className="form-input" placeholder="Your message..." required></textarea>
            </div>
            <button type="submit" className="btn-primary w-full">
              <PaperPlaneIcon className="w-5 h-5 mr-2" />Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
