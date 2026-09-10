'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  GraduationCap, 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Heart
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

const YoutubeIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.108C19.53 3.5 12 3.5 12 3.5s-7.53 0-9.388.555A3.003 3.003 0 0 0 .502 6.163C0 8.07 0 12 0 12s0 3.93.502 5.837a3.003 3.003 0 0 0 2.11 2.108C4.47 20.5 12 20.5 12 20.5s7.53 0 9.388-.555a3.003 3.003 0 0 0 2.11-2.108C24 15.93 24 12 24 12s0-3.93-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

import Logo from '@/components/ui/Logo';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      // Mock newsletter opt-in
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <footer className="bg-zinc-550 border-t border-zinc-200/50 dark:border-zinc-800/50 bg-white dark:bg-zinc-950 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-8">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2 group">
              <Logo size={44} />
            </Link>
            <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
              Gamified learning platform for students in Classes 6–10. Empowering kids to learn dynamically, compete globally, and track progress smoothly.
            </p>
            {/* Social Icons */}
            <div className="flex space-x-3 pt-2">
              <a href="#" className="p-2 rounded-lg text-zinc-500 dark:text-zinc-400 hover:text-orange-600 dark:hover:text-orange-400 hover:bg-orange-50 dark:hover:bg-zinc-900 transition-colors">
                <TwitterIcon className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 rounded-lg text-zinc-500 dark:text-zinc-400 hover:text-orange-600 dark:hover:text-orange-400 hover:bg-orange-50 dark:hover:bg-zinc-900 transition-colors">
                <FacebookIcon className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 rounded-lg text-zinc-500 dark:text-zinc-400 hover:text-orange-600 dark:hover:text-orange-400 hover:bg-orange-50 dark:hover:bg-zinc-900 transition-colors">
                <InstagramIcon className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 rounded-lg text-zinc-500 dark:text-zinc-400 hover:text-orange-600 dark:hover:text-orange-400 hover:bg-orange-50 dark:hover:bg-zinc-900 transition-colors">
                <YoutubeIcon className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 rounded-lg text-zinc-500 dark:text-zinc-400 hover:text-orange-600 dark:hover:text-orange-400 hover:bg-orange-50 dark:hover:bg-zinc-900 transition-colors">
                <LinkedinIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-extrabold text-zinc-900 dark:text-zinc-100 uppercase tracking-wider mb-4">
              Resources
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/learning-hub" className="text-sm text-zinc-700 dark:text-zinc-300 hover:text-orange-600 dark:hover:text-orange-400 transition-colors font-medium">
                  Learning Hub
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm text-zinc-700 dark:text-zinc-300 hover:text-orange-600 dark:hover:text-orange-400 transition-colors font-medium">
                  Blog & Articles
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-sm text-zinc-700 dark:text-zinc-300 hover:text-orange-600 dark:hover:text-orange-400 transition-colors font-medium">
                  FAQs & Support
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-zinc-700 dark:text-zinc-300 hover:text-orange-600 dark:hover:text-orange-400 transition-colors font-medium">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Classes Section */}
          <div>
            <h3 className="text-sm font-extrabold text-zinc-900 dark:text-zinc-100 uppercase tracking-wider mb-4">
              Classes
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/learning-hub?class=6" className="text-sm text-zinc-700 dark:text-zinc-300 hover:text-orange-600 dark:hover:text-orange-400 transition-colors font-medium">
                  Class 6
                </Link>
              </li>
              <li>
                <Link href="/learning-hub?class=7" className="text-sm text-zinc-700 dark:text-zinc-300 hover:text-orange-600 dark:hover:text-orange-400 transition-colors font-medium">
                  Class 7
                </Link>
              </li>
              <li>
                <Link href="/learning-hub?class=8" className="text-sm text-zinc-700 dark:text-zinc-300 hover:text-orange-600 dark:hover:text-orange-400 transition-colors font-medium">
                  Class 8
                </Link>
              </li>
              <li>
                <Link href="/learning-hub?class=9" className="text-sm text-zinc-700 dark:text-zinc-300 hover:text-orange-600 dark:hover:text-orange-400 transition-colors font-medium">
                  Class 9
                </Link>
              </li>
              <li>
                <Link href="/learning-hub?class=10" className="text-sm text-zinc-700 dark:text-zinc-300 hover:text-orange-600 dark:hover:text-orange-400 transition-colors font-medium">
                  Class 10
                </Link>
              </li>
            </ul>
          </div>

          {/* Platform Features */}
          <div>
            <h3 className="text-sm font-extrabold text-zinc-900 dark:text-zinc-100 uppercase tracking-wider mb-4">
              Platform Features
            </h3>
            <ul className="space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
              <li>
                <Link href="/learning-hub/planner" className="hover:text-orange-600 dark:hover:text-orange-400 transition-colors font-medium">
                  Study Planner
                </Link>
              </li>
              <li>
                <Link href="/learning-hub/contest" className="hover:text-orange-600 dark:hover:text-orange-400 transition-colors font-medium">
                  Weekly Live Contests
                </Link>
              </li>
              <li>
                <Link href="/learning-hub/quick-bite" className="hover:text-orange-600 dark:hover:text-orange-400 transition-colors font-medium">
                  5-Min Quick Bites
                </Link>
              </li>
              <li>
                <Link href="/learning-hub/parent" className="hover:text-orange-600 dark:hover:text-orange-400 transition-colors font-medium">
                  Parent Dashboard
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-sm font-extrabold text-zinc-900 dark:text-zinc-100 uppercase tracking-wider">
              Newsletter
            </h3>
            <p className="text-xs text-zinc-700 dark:text-zinc-300">
              Subscribe for weekly contest alerts and exam preparation tips.
            </p>
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email"
                className="px-3 py-2 rounded-xl border border-zinc-300 dark:border-zinc-700 text-sm bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-orange-500 w-full font-medium"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white rounded-xl text-sm font-bold shadow-md hover:scale-105 transition-all cursor-pointer"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
            {subscribed && (
              <p className="text-xs text-emerald-600 dark:text-emerald-400 animate-pulse font-bold">
                Thank you! You have successfully subscribed.
              </p>
            )}

            {/* Micro Contact details */}
            <div className="pt-2 border-t border-zinc-200 dark:border-zinc-800 space-y-2 text-xs text-zinc-700 dark:text-zinc-300">
              <a href="mailto:admin@mytut.in" className="flex items-center space-x-2.5 hover:text-orange-600 dark:hover:text-orange-400 transition-colors group">
                <div className="p-1.5 rounded-lg bg-orange-100 dark:bg-orange-950/50 text-orange-600 dark:text-orange-400 group-hover:scale-105 transition-transform">
                  <Mail className="h-3.5 w-3.5" />
                </div>
                <span className="font-bold text-zinc-900 dark:text-zinc-100">admin@mytut.in</span>
              </a>
              <a href="tel:+917207059060" className="flex items-center space-x-2.5 hover:text-orange-600 dark:hover:text-orange-400 transition-colors group">
                <div className="p-1.5 rounded-lg bg-orange-100 dark:bg-orange-950/50 text-orange-600 dark:text-orange-400 group-hover:scale-105 transition-transform">
                  <Phone className="h-3.5 w-3.5" />
                </div>
                <span className="font-bold text-zinc-900 dark:text-zinc-100">+91 7207059060</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-zinc-200 dark:border-zinc-800 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <p className="text-xs text-zinc-600 dark:text-zinc-400 font-medium">
            &copy; {new Date().getFullYear()} mytut. All rights reserved. Made with <Heart className="h-3 w-3 inline text-orange-500 animate-pulse" /> for future leaders.
          </p>
          <div className="flex space-x-6 text-xs">
            <Link href="#" className="text-zinc-600 dark:text-zinc-400 hover:text-orange-600 dark:hover:text-orange-400 transition-colors font-medium">
              Privacy Policy
            </Link>
            <Link href="#" className="text-zinc-600 dark:text-zinc-400 hover:text-orange-600 dark:hover:text-orange-400 transition-colors font-medium">
              Terms & Conditions
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
