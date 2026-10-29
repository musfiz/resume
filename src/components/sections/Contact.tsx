'use client';

import React, { useState } from 'react';
import SectionCard from '@/components/ui/SectionCard';
import { portfolioData } from '@/data/portfolioData';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Copy,
  Check,
} from 'lucide-react';

export default function Contact() {
  const { personal } = portfolioData;
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Job Opportunity',
    message: '',
  });

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        name: '',
        email: '',
        subject: 'Job Opportunity',
        message: '',
      });
    }, 4000);
  };

  return (
    <SectionCard
      id="contact"
      tagNumber="07"
      tagLabel="Get In Touch"
      title="Let's Build Something Great"
      subtitle="Whether you have an upcoming project, an engineering role, or a consulting inquiry, my inbox is always open."
    >
      <div className="grid lg:grid-cols-5 gap-8">
        {/* Left Column: Direct Info Cards (2 cols) */}
        <div className="lg:col-span-2 space-y-4">
          {/* Email card with copy button */}
          <div className="glass-card rounded-2xl p-5 border border-slate-200/80 dark:border-slate-800/80 flex items-center justify-between group">
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div className="overflow-hidden">
                <div className="text-xs font-mono text-slate-400 dark:text-slate-500">Email Address</div>
                <a
                  href={`mailto:${personal.email}`}
                  className="font-semibold text-sm text-slate-900 dark:text-white hover:text-emerald-500 truncate block"
                >
                  {personal.email}
                </a>
              </div>
            </div>

            <button
              onClick={() => copyToClipboard(personal.email, 'email')}
              className="p-2 rounded-xl text-slate-400 hover:text-emerald-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors flex-shrink-0"
              title="Copy Email"
            >
              {copiedKey === 'email' ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>

          {/* Phone card with copy button */}
          <div className="glass-card rounded-2xl p-5 border border-slate-200/80 dark:border-slate-800/80 flex items-center justify-between group">
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-teal-500/10 text-teal-600 dark:text-teal-400 flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-mono text-slate-400 dark:text-slate-500">Phone & WhatsApp</div>
                <a
                  href={`tel:${personal.phone}`}
                  className="font-semibold text-sm text-slate-900 dark:text-white hover:text-teal-500 block"
                >
                  {personal.phone}
                </a>
              </div>
            </div>

            <button
              onClick={() => copyToClipboard(personal.phone, 'phone')}
              className="p-2 rounded-xl text-slate-400 hover:text-teal-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors flex-shrink-0"
              title="Copy Phone"
            >
              {copiedKey === 'phone' ? <Check className="w-4 h-4 text-teal-500" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>

          {/* Location & Timezone */}
          <div className="glass-card rounded-2xl p-5 border border-slate-200/80 dark:border-slate-800/80 flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center flex-shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-mono text-slate-400 dark:text-slate-500">Location</div>
              <div className="font-semibold text-sm text-slate-900 dark:text-white">
                {personal.location}
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400 font-mono mt-0.5">
                UTC+06:00 (Bangladesh Standard Time)
              </div>
            </div>
          </div>

          {/* Status availability banner */}
          <div className="p-5 rounded-2xl bg-gradient-to-tr from-emerald-500/15 via-teal-500/10 to-transparent border border-emerald-500/30 space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-bold text-sm text-slate-900 dark:text-white font-mono">
                Current Availability
              </span>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              Open for full-time Senior Software Engineering roles, contract architecture consulting, and technical advisory.
            </p>
          </div>
        </div>

        {/* Right Column: Interactive Contact Form (3 cols) */}
        <div className="lg:col-span-3">
          <div className="glass-card rounded-3xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800/80 relative">
            {formSubmitted ? (
              <div className="py-12 flex flex-col items-center text-center space-y-4 animate-in fade-in zoom-in-95 duration-300">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  Message Sent Successfully!
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm max-w-md">
                  Thank you for reaching out. I usually review and reply to all inquiries within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  {/* Name Input */}
                  <div>
                    <label className="block text-xs font-mono text-slate-600 dark:text-slate-300 mb-1.5 font-semibold">
                      Your Name <span className="text-emerald-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sarah Jenkins"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors"
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label className="block text-xs font-mono text-slate-600 dark:text-slate-300 mb-1.5 font-semibold">
                      Email Address <span className="text-emerald-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. sarah@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors"
                    />
                  </div>
                </div>

                {/* Subject Selector */}
                <div>
                  <label className="block text-xs font-mono text-slate-600 dark:text-slate-300 mb-1.5 font-semibold">
                    Inquiry Topic
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors font-sans"
                  >
                    <option value="Job Opportunity">Senior Engineering Role / Employment</option>
                    <option value="Project Collaboration">Software Project & Development</option>
                    <option value="Architecture Consulting">System Architecture Consulting</option>
                    <option value="General Discussion">General Chat & Networking</option>
                  </select>
                </div>

                {/* Message Textarea */}
                <div>
                  <label className="block text-xs font-mono text-slate-600 dark:text-slate-300 mb-1.5 font-semibold">
                    Your Message <span className="text-emerald-500">*</span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell me about your project, timeline, or engineering opportunity..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-mono text-sm font-semibold text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 shadow-md hover:shadow-emerald-500/25 transition-all duration-200 active:scale-95"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Direct Message</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </SectionCard>
  );
}
