'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageSquare, Clock } from 'lucide-react';
import { SiteSettings } from '@/types/sanity';

interface ContactSectionProps {
  settings: SiteSettings;
}

export default function ContactSection({ settings }: ContactSectionProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    category: 'Grades 8-10 Student',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const email = settings?.contactInfo?.email || 'bpunnamaraju@yahoo.com';
  const phone = settings?.contactInfo?.phone || '+91 9949162220';

  return (
    <section id="contact-us" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 text-amber-900 text-xs sm:text-sm font-bold uppercase tracking-wider mb-4">
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Schedule Your Personalized Mentoring Session
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Have questions about stream selection, Mentoria plans, or executive career transitions? Send a message and let&apos;s build your roadmap.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct Contact Info & Perks */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200/80 shadow-xs space-y-6">
              <h3 className="text-xl font-bold text-slate-900">
                Direct Contact Information
              </h3>
              
              <div className="space-y-4">
                <a
                  href={`mailto:${email}`}
                  className="flex items-start gap-4 p-3 rounded-2xl hover:bg-white transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-900 text-amber-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Email Us</p>
                    <p className="text-base font-semibold text-slate-900 group-hover:text-blue-900 transition-colors">
                      {email}
                    </p>
                  </div>
                </a>

                <a
                  href={`tel:${phone}`}
                  className="flex items-start gap-4 p-3 rounded-2xl hover:bg-white transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-900 text-amber-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Call Directly</p>
                    <p className="text-base font-semibold text-slate-900 group-hover:text-blue-900 transition-colors">
                      {phone}
                    </p>
                  </div>
                </a>

                <a
                  href={`https://wa.me/${phone.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-3 rounded-2xl hover:bg-white transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-green-600 text-white flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">WhatsApp Available</p>
                    <p className="text-base font-semibold text-slate-900 group-hover:text-green-700 transition-colors">
                      Chat on WhatsApp
                    </p>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-3 rounded-2xl">
                  <div className="w-12 h-12 rounded-xl bg-slate-200 text-slate-700 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Location / Mode</p>
                    <p className="text-base font-semibold text-slate-900">
                      Hybrid • Pan-India Online Video Sessions
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Response Notice */}
            <div className="p-6 rounded-2xl bg-amber-50/80 border border-amber-200 text-amber-950 flex items-start gap-3">
              <Clock className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <p className="text-xs sm:text-sm leading-relaxed">
                <span className="font-bold">Prompt Consultation:</span> All enquiries are acknowledged within 24 hours to schedule an introductory alignment conversation.
              </p>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/90 shadow-xl">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Message Received!</h3>
                <p className="text-slate-600 max-w-md mx-auto text-sm sm:text-base">
                  Thank you for reaching out. Bhanumurthy Punnamaraju will review your query and connect with you shortly.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2.5 rounded-full bg-blue-900 text-white font-semibold text-sm hover:bg-blue-800 transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-1">Send a Message</h3>
                  <p className="text-slate-500 text-sm">Fill out the form below to enquire or book a consultation.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Ramesh Kumar"
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-blue-900 focus:border-transparent text-sm"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-blue-900 focus:border-transparent text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="ramesh@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-blue-900 focus:border-transparent text-sm"
                    />
                  </div>

                  <div>
                    <label htmlFor="category" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      I am a / Enquiring for
                    </label>
                    <select
                      id="category"
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-blue-900 focus:border-transparent text-sm bg-white"
                    >
                      <option value="Grades 8-9 Student">Grades 8-9 Student</option>
                      <option value="Grades 10-12 Student">Grades 10-12 Student</option>
                      <option value="College Undergraduate">College Undergraduate</option>
                      <option value="Working Professional">Working Professional</option>
                      <option value="Parent Enquiring">Parent Enquiring</option>
                      <option value="Institution / School">Institution / School</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Your Requirements / Career Questions *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Briefly describe what career decisions or guidance you need help with..."
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-blue-900 focus:border-transparent text-sm"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 px-6 rounded-full bg-gradient-to-r from-blue-900 to-indigo-900 hover:from-blue-800 hover:to-indigo-800 text-white font-bold text-sm shadow-md hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Submit Consultation Request</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
