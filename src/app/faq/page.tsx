'use client';

import React, { useState, useMemo } from 'react';
import { 
  HelpCircle, 
  Search, 
  ChevronDown, 
  ChevronUp, 
  Mail, 
  Phone,
  MessageSquare,
  Sparkles
} from 'lucide-react';

interface FAQItem {
  id: string;
  category: 'General' | 'Students' | 'Parents' | 'Contests' | 'Study Planner' | 'Account' | 'Technical Support';
  q: string;
  a: string;
}

const FAQS: FAQItem[] = [
  // General
  {
    id: 'f-1',
    category: 'General',
    q: 'What is mytut?',
    a: 'mytut is a gamified educational platform built for students in Classes 6–10. We blend core academic curricula with study planners, peer contests, and micro-learning modules to make learning interactive and reward-based.'
  },
  {
    id: 'f-2',
    category: 'General',
    q: 'How does the gamification element work?',
    a: 'Students earn Experience Points (XP) and custom profile badges for completing tasks, checking planner calendars, and scoring on weekly contests. As they gain XP, they unlock level achievements.'
  },
  // Students
  {
    id: 'f-3',
    category: 'Students',
    q: 'Can I choose my subjects?',
    a: 'Absolutely! Our planners, quizzes, and revision guides cover Mathematics, General Science (Physics, Chemistry, Biology), Social Studies, and English grammar.'
  },
  {
    id: 'f-4',
    category: 'Students',
    q: 'What classes is this platform for?',
    a: 'mytut is specifically optimized for middle school and early high school curricula, covering Classes 6, 7, 8, 9, and 10.'
  },
  // Parents
  {
    id: 'f-5',
    category: 'Parents',
    q: 'How does the Parent Dashboard help me?',
    a: 'The Parent Dashboard shows real-time metrics of your child’s studying logs, calendar completion rates, attendance, and feedback left by educators. You can also customize weekly performance reports.'
  },
  {
    id: 'f-6',
    category: 'Parents',
    q: 'Can I add multiple children to one account?',
    a: 'Yes, your dashboard features a profile toggle dropdown that lets you configure and review individual calendars and scores for multiple students.'
  },
  // Contests
  {
    id: 'f-7',
    category: 'Contests',
    q: 'When are the Weekly Contests held?',
    a: 'Contests launch every Sunday at 10:00 AM UTC and remain open for participation for half an hour. Results, leaderboard standings, and certificate assets are processed by Sunday evening.'
  },
  {
    id: 'f-8',
    category: 'Contests',
    q: 'Is there negative marking in the contests?',
    a: 'No. There is no negative marking. Scoring is based on correct answers, with bonus points for speed (finishing the test ahead of the limit).'
  },
  // Study Planner
  {
    id: 'f-9',
    category: 'Study Planner',
    q: 'Does the planner sync with school calendars?',
    a: 'You can create custom tasks matching your exact school syllabus dates. The planner displays custom due dates, subjects, and task priorities in a 35-day grid calendar.'
  },
  // Account
  {
    id: 'f-10',
    category: 'Account',
    q: 'Is my account secure?',
    a: 'Yes. All authentication is powered by secure Firebase endpoints. Your profile passwords, email logs, and study logs are fully encrypted.'
  },
  // Tech Support
  {
    id: 'f-11',
    category: 'Technical Support',
    q: 'Does the website support mobile viewports?',
    a: 'Yes, mytut is built mobile-first. Every planner card, contest scoreboard, and flashcard operates natively on smartphones and tablets.'
  }
];

const CATEGORIES = [
  'All',
  'General',
  'Students',
  'Parents',
  'Contests',
  'Study Planner',
  'Account',
  'Technical Support'
];

export default function FAQ() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [expandedId, setExpandedId] = useState<string | null>('f-1');

  // Filtered FAQ
  const filteredFAQs = useMemo(() => {
    return FAQS.filter(faq => {
      const matchesSearch = 
        faq.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.a.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = 
        selectedCategory === 'All' || faq.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const toggleAccordion = (id: string) => {
    setExpandedId(prev => prev === id ? null : id);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-4 mb-12">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Frequently Asked Questions</h1>
        <p className="text-sm text-zinc-550 dark:text-zinc-400">
          Search categories to find quick guidelines about your study planners, registers, and dashboard analytics.
        </p>

        {/* Search */}
        <div className="relative max-w-md mx-auto pt-2">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search FAQs (e.g. contest, XP, planner)..."
            className="w-full pl-11 pr-4 py-3 rounded-2xl border border-zinc-250 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none shadow-sm"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Category list (left column) */}
        <div className="lg:col-span-4 bg-white dark:bg-zinc-900 border border-zinc-200/50 dark:border-zinc-800/50 rounded-3xl p-6 shadow-sm space-y-2">
          <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-3 px-3">Filter by Category</h3>
          <div className="flex flex-col space-y-1">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`w-full text-left px-3 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-indigo-50 dark:bg-indigo-950/40 text-indigo-650 dark:text-indigo-400'
                    : 'text-zinc-650 hover:bg-zinc-50 dark:hover:bg-zinc-850/50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* FAQs List (right column) */}
        <div className="lg:col-span-8 space-y-4">
          
          {filteredFAQs.length === 0 ? (
            <div className="bg-white dark:bg-zinc-900 border border-zinc-200/50 dark:border-zinc-800/50 rounded-3xl p-12 text-center text-zinc-400">
              <HelpCircle className="h-10 w-10 text-zinc-300 mx-auto mb-3" />
              <p className="text-sm font-semibold">No questions found matching your search.</p>
              <p className="text-xs mt-1">Try another keyword or select a different category filter.</p>
            </div>
          ) : (
            <div className="space-y-3.5">
              {filteredFAQs.map((faq) => {
                const isExpanded = expandedId === faq.id;
                return (
                  <div 
                    key={faq.id}
                    className="bg-white dark:bg-zinc-900 border border-zinc-200/50 dark:border-zinc-800/50 rounded-2xl overflow-hidden shadow-sm transition-all"
                  >
                    <button
                      onClick={() => toggleAccordion(faq.id)}
                      className="w-full flex justify-between items-center p-5 text-left font-bold text-sm sm:text-base cursor-pointer"
                    >
                      <span className="pr-4">{faq.q}</span>
                      {isExpanded ? (
                        <ChevronUp className="h-5 w-5 text-indigo-500 shrink-0" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-zinc-400 shrink-0" />
                      )}
                    </button>

                    {isExpanded && (
                      <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-zinc-650 dark:text-zinc-400 border-t border-zinc-100 dark:border-zinc-850 leading-relaxed font-medium">
                        <p>{faq.a}</p>
                        <div className="mt-3 flex justify-end">
                          <span className="text-[10px] font-bold text-indigo-650 dark:text-indigo-400 uppercase tracking-widest px-2 py-0.5 rounded bg-indigo-50 dark:bg-indigo-950/50">
                            {faq.category}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}

          {/* Need support details */}
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/20 dark:to-purple-950/20 border border-indigo-100/50 dark:border-indigo-950/30 rounded-3xl p-6 flex flex-col sm:flex-row justify-between items-center gap-6 mt-8">
            <div className="space-y-1 text-center sm:text-left">
              <h4 className="font-bold text-base flex items-center justify-center sm:justify-start space-x-1.5">
                <Sparkles className="h-5 w-5 text-amber-500" />
                <span>Still have queries?</span>
              </h4>
              <p className="text-xs text-zinc-550 dark:text-zinc-400">Our customer support division is available 24/7 to assist you.</p>
            </div>
            
            <div className="flex gap-4 text-xs font-semibold">
              <a 
                href="/contact" 
                className="px-4 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl shadow-sm transition-colors"
              >
                Contact Support
              </a>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
