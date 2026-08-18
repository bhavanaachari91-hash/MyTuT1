'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Menu, 
  X, 
  Download
} from 'lucide-react';

import Logo from '@/components/ui/Logo';

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/learning-hub', label: 'Learning Hub' },
  { href: '/blog', label: 'Blog' },
  { href: '/faq', label: 'FAQ' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [prevPathname, setPrevPathname] = useState(pathname);

  // Monitor scroll for shadow effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on path changes using render state tracking
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setIsOpen(false);
  }

  // If in auth pages, render a simplified/minimal navbar or hide it
  const isAuthPage = pathname?.startsWith('/auth');

  return (
    <header 
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md shadow-sm border-b border-zinc-200/50 dark:border-zinc-800/50' 
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <Logo size={52} />
          </Link>

          {/* Desktop Navigation */}
          {!isAuthPage && (
            <nav className="hidden md:flex space-x-1 lg:space-x-2">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href || (link.href !== '/' && pathname?.startsWith(link.href));
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-3.5 py-2 rounded-xl text-sm font-bold transition-all relative ${
                      isActive 
                        ? 'text-indigo-700 dark:text-indigo-300 bg-white/80 dark:bg-indigo-950/60 shadow-xs border border-indigo-200 dark:border-indigo-800' 
                        : 'text-zinc-800 dark:text-zinc-200 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-white/50 dark:hover:bg-zinc-900/80'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>
          )}

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {!isAuthPage && (
              <a
                href="#download-app"
                onClick={(e) => {
                  const el = document.getElementById('download-app');
                  if (el) {
                    e.preventDefault();
                    el.scrollIntoView({ behavior: 'smooth' });
                  } else {
                    e.preventDefault();
                    alert('Redirecting to download the TuT App...');
                  }
                }}
                className="px-5 py-2.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 shadow-md hover:shadow-lg transition-all flex items-center space-x-2 hover:scale-105 active:scale-95 cursor-pointer"
              >
                <Download className="h-4 w-4" />
                <span>Download App</span>
              </a>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden space-x-3">
            {/* Mobile Menu Button */}
            {!isAuthPage && (
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            )}
          </div>

        </div>
      </div>

      {/* Mobile Drawer (Transitions on state) */}
      {isOpen && !isAuthPage && (
        <div className="md:hidden border-b border-zinc-200 dark:border-zinc-800 bg-white/95 dark:bg-zinc-950/95 backdrop-blur-md">
          <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href || (link.href !== '/' && pathname?.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block px-3 py-2 rounded-lg text-base font-medium transition-colors ${
                    isActive 
                      ? 'text-indigo-600 dark:text-indigo-400 bg-indigo-50/50 dark:bg-indigo-950/30' 
                      : 'text-zinc-600 dark:text-zinc-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-zinc-50 dark:hover:bg-zinc-900/50'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            <div className="pt-4 pb-2 border-t border-zinc-100 dark:border-zinc-800 mt-2 px-3">
              <a
                href="#download-app"
                onClick={(e) => {
                  setIsOpen(false);
                  const el = document.getElementById('download-app');
                  if (el) {
                    e.preventDefault();
                    el.scrollIntoView({ behavior: 'smooth' });
                  } else {
                    e.preventDefault();
                    alert('Redirecting to download the TuT App...');
                  }
                }}
                className="w-full text-center py-2.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 shadow-md flex items-center justify-center space-x-2 cursor-pointer"
              >
                <Download className="h-4 w-4" />
                <span>Download App</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
