'use client';

import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle, 
  Sparkles
} from 'lucide-react';

const TwitterIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" />
  </svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim() && email.trim() && message.trim()) {
      // Mock submit
      setSubmitted(true);
      
      const inquiry = {
        name,
        email,
        subject,
        message,
        date: new Date().toISOString()
      };
      
      // Cache query logs
      const current = JSON.parse(localStorage.getItem('mytut-contact-inquiries') || '[]');
      localStorage.setItem('mytut-contact-inquiries', JSON.stringify([inquiry, ...current]));

      // Clear input fields
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Get in Touch</h1>
        <p className="text-sm text-zinc-550 dark:text-zinc-400">
          Have queries about parent analytics, contest registrations, or school collaborations? Write to our support desks.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
        
        {/* LEFT COLUMN: Support details & SVG Map */}
        <div className="lg:col-span-5 space-y-6">
          
          <div className="bg-white dark:bg-zinc-900 border border-zinc-200/50 dark:border-zinc-800/50 rounded-3xl p-6 shadow-sm space-y-6">
            <h3 className="text-lg font-bold">Contact Information</h3>
            
            <div className="space-y-4 text-xs sm:text-sm">
              <div className="flex items-start space-x-3.5">
                <div className="p-2.5 bg-indigo-50 dark:bg-indigo-950/50 text-indigo-650 dark:text-indigo-400 rounded-xl shrink-0">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold text-zinc-700 dark:text-zinc-300">Official Email Support</h4>
                  <a href="mailto:admin@mytut.in" className="text-pink-600 hover:text-pink-700 dark:text-pink-400 font-semibold mt-0.5 block hover:underline transition-all">
                    admin@mytut.in
                  </a>
                  <p className="text-xs text-zinc-400 mt-0.5">Primary Administration Desk</p>
                </div>
              </div>

              <div className="flex items-start space-x-3.5">
                <div className="p-2.5 bg-emerald-50 dark:bg-emerald-950/50 text-emerald-650 dark:text-emerald-450 rounded-xl shrink-0">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold text-zinc-700 dark:text-zinc-300">Phone & WhatsApp Support</h4>
                  <a href="tel:+917207059060" className="text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 font-semibold mt-0.5 block hover:underline transition-all">
                    +91 7207059060
                  </a>
                  <p className="text-xs text-zinc-400 mt-0.5">Mon-Sat, 9:00 AM - 7:00 PM IST</p>
                </div>
              </div>


              <div className="flex items-start space-x-3.5">
                <div className="p-2.5 bg-amber-50 dark:bg-amber-950/50 text-amber-550 rounded-xl shrink-0">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold text-zinc-700 dark:text-zinc-300">Operating Hours</h4>
                  <p className="text-zinc-500 mt-0.5">Online Learning Hub: 24/7</p>
                  <p className="text-zinc-500">Admin Support: 9:00 AM - 6:00 PM EST</p>
                </div>
              </div>
            </div>

            {/* Social handles */}
            <div className="pt-6 border-t border-zinc-100 dark:border-zinc-850">
              <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-3">Connect on Socials</h4>
              <div className="flex space-x-3">
                <a href="#" className="p-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 text-zinc-450 hover:text-indigo-650 transition-colors">
                  <TwitterIcon className="h-4 w-4" />
                </a>
                <a href="#" className="p-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 text-zinc-455 hover:text-indigo-650 transition-colors">
                  <FacebookIcon className="h-4 w-4" />
                </a>
                <a href="#" className="p-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 text-zinc-455 hover:text-indigo-650 transition-colors">
                  <InstagramIcon className="h-4 w-4" />
                </a>
                <a href="#" className="p-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 text-zinc-455 hover:text-indigo-650 transition-colors">
                  <LinkedinIcon className="h-4 w-4" />
                </a>
              </div>
            </div>

          </div>

          {/* High Fidelity SVG Map Placeholder */}
          <div className="bg-white dark:bg-zinc-900 border border-zinc-200/50 dark:border-zinc-800/50 rounded-3xl p-5 shadow-sm space-y-4">
            <div className="flex justify-between items-center text-xs">
              <span className="font-bold text-zinc-400">Office Location Map</span>
              <span className="text-indigo-650 dark:text-indigo-400 font-semibold flex items-center space-x-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping mr-1" />
                <span>37.7749° N, 122.4194° W</span>
              </span>
            </div>
            
            {/* SVG Visual Map layout */}
            <svg 
              viewBox="0 0 400 220" 
              className="w-full rounded-2xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200/30 dark:border-zinc-850/50"
            >
              {/* grid lines */}
              <line x1="50" y1="0" x2="50" y2="220" stroke="#EEF2F6" className="dark:stroke-zinc-900" strokeWidth="1" />
              <line x1="100" y1="0" x2="100" y2="220" stroke="#EEF2F6" className="dark:stroke-zinc-900" strokeWidth="1" />
              <line x1="150" y1="0" x2="150" y2="220" stroke="#EEF2F6" className="dark:stroke-zinc-900" strokeWidth="1" />
              <line x1="200" y1="0" x2="200" y2="220" stroke="#EEF2F6" className="dark:stroke-zinc-900" strokeWidth="1" />
              <line x1="250" y1="0" x2="250" y2="220" stroke="#EEF2F6" className="dark:stroke-zinc-900" strokeWidth="1" />
              <line x1="300" y1="0" x2="300" y2="220" stroke="#EEF2F6" className="dark:stroke-zinc-900" strokeWidth="1" />
              <line x1="350" y1="0" x2="350" y2="220" stroke="#EEF2F6" className="dark:stroke-zinc-900" strokeWidth="1" />

              <line x1="0" y1="40" x2="400" y2="40" stroke="#EEF2F6" className="dark:stroke-zinc-900" strokeWidth="1" />
              <line x1="0" y1="80" x2="400" y2="80" stroke="#EEF2F6" className="dark:stroke-zinc-900" strokeWidth="1" />
              <line x1="0" y1="120" x2="400" y2="120" stroke="#EEF2F6" className="dark:stroke-zinc-900" strokeWidth="1" />
              <line x1="0" y1="160" x2="400" y2="160" stroke="#EEF2F6" className="dark:stroke-zinc-900" strokeWidth="1" />
              <line x1="0" y1="200" x2="400" y2="200" stroke="#EEF2F6" className="dark:stroke-zinc-900" strokeWidth="1" />

              {/* Styled Road lines */}
              <path d="M 0,90 Q 150,110 400,100" fill="none" stroke="#E2E8F0" className="dark:stroke-zinc-800" strokeWidth="12" strokeLinecap="round" />
              <path d="M 170,0 C 180,100 160,180 180,220" fill="none" stroke="#E2E8F0" className="dark:stroke-zinc-800" strokeWidth="12" strokeLinecap="round" />
              
              {/* HQ Marker */}
              <circle cx="175" cy="103" r="16" fill="rgba(99, 102, 241, 0.2)" className="animate-ping duration-2000" />
              <circle cx="175" cy="103" r="8" fill="#6366F1" stroke="white" strokeWidth="2" />
              <path d="M175 75 L175 92" fill="none" stroke="#6366F1" strokeWidth="2" strokeDasharray="3 3" />
              <rect x="135" y="55" width="80" height="20" rx="4" fill="#6366F1" />
              <text x="175" y="68" fill="white" className="font-bold text-[8px]" textAnchor="middle">mytut HQ</text>
            </svg>
          </div>

        </div>

        {/* RIGHT COLUMN: Contact Form */}
        <div className="lg:col-span-7 bg-white dark:bg-zinc-900 border border-zinc-200/50 dark:border-zinc-800/50 rounded-3xl p-6 sm:p-8 shadow-sm">
          
          {submitted ? (
            <div className="py-12 text-center space-y-6 max-w-md mx-auto">
              <div className="w-14 h-14 bg-emerald-50 dark:bg-emerald-950/20 text-emerald-600 dark:text-emerald-450 rounded-2xl flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle className="h-8 w-8" />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-150">Inquiry submitted</h3>
                <p className="text-sm text-zinc-550 leading-relaxed">
                  Thank you for reaching out to mytut. Our support administrators will review your query and reply within 12–24 business hours.
                </p>
              </div>
              <button 
                onClick={() => setSubmitted(false)}
                className="px-6 py-3 bg-zinc-50 hover:bg-zinc-100 dark:bg-zinc-850 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-200 text-xs sm:text-sm font-semibold rounded-xl border border-zinc-200/50 dark:border-zinc-850 transition-colors cursor-pointer"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="flex items-center space-x-2 text-xs font-bold text-indigo-650 dark:text-indigo-400 uppercase tracking-widest">
                <Sparkles className="h-4 w-4 text-amber-500" />
                <span>Customer relations form</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight">Send a secure inquiry</h3>
              
              <form onSubmit={handleSubmit} className="space-y-4 pt-2">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-zinc-550 dark:text-zinc-400 uppercase tracking-wider mb-1.5">Name</label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your full name"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-250 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950/50 text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-zinc-550 dark:text-zinc-400 uppercase tracking-wider mb-1.5">Email</label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="parent@email.com / student@email.com"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-250 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950/50 text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-zinc-550 dark:text-zinc-400 uppercase tracking-wider mb-1.5">Subject</label>
                  <input
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="Topic of inquiry"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-250 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950/50 text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-zinc-550 dark:text-zinc-400 uppercase tracking-wider mb-1.5">Message</label>
                  <textarea
                    required
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Details of your request..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-250 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950/50 text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-semibold text-sm transition-all shadow-sm hover:shadow flex items-center justify-center space-x-1.5 cursor-pointer"
                >
                  <Send className="h-4.5 w-4.5" />
                  <span>Submit Inquiry</span>
                </button>

              </form>
            </div>
          )}

        </div>

      </div>

    </div>
  );
}
