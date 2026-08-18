'use client';

import React from 'react';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';
import { 
  Calendar, 
  Trophy, 
  Zap, 
  Users, 
  ArrowRight,
  Sparkles,
  CheckSquare,
  Clock,
  BookOpen,
  Swords
} from 'lucide-react';

const MODULES = [
  {
    title: 'Study Planner',
    desc: 'Plan daily, weekly, and monthly subjects. Break down lessons, monitor progress, and tick off tasks as you complete them.',
    icon: Calendar,
    color: 'from-blue-500 to-indigo-650',
    hoverBorder: 'hover:border-blue-400 dark:hover:border-blue-900',
    link: '/learning-hub/planner',
    badge: 'Organize',
    stats: '5 active tasks',
  },
  {
    title: '1-on-1 Battle',
    desc: 'Challenge fellow Class 6-10 students in real-time rapid duels. Test your speed & accuracy, gain ELO rating, and top the leaderboard.',
    icon: Swords,
    color: 'from-purple-600 to-indigo-650',
    hoverBorder: 'hover:border-purple-400 dark:hover:border-purple-900',
    link: '/learning-hub/battle',
    badge: 'Real-Time Duel',
    stats: '1,248 Players Live',
  },
  {
    title: 'Weekly Contest',
    desc: 'Register for upcoming subject battles, test your accuracy on speed challenges, check leaders, and earn performance certificates.',
    icon: Trophy,
    color: 'from-amber-405 via-amber-500 to-orange-550',
    hoverBorder: 'hover:border-amber-400 dark:hover:border-amber-900',
    link: '/learning-hub/contest',
    badge: 'Compete',
    stats: 'Next Battle Sun 10 AM',
  },
  {
    title: 'Quick Bite',
    desc: 'Master tough concepts in 5 minutes. Learn with flashcards, quick formula sheets, revision cards, and the Daily mini-quiz.',
    icon: Zap,
    color: 'from-emerald-400 to-teal-600',
    hoverBorder: 'hover:border-emerald-400 dark:hover:border-emerald-900',
    link: '/learning-hub/quick-bite',
    badge: 'Micro-Learn',
    stats: 'Daily quiz is live',
  },
  {
    title: 'Parent Dashboard',
    desc: 'Monitor attendance, study hours, analytics charts, teacher feedback messages, and access weekly performance reports.',
    icon: Users,
    color: 'from-pink-500 to-rose-600',
    hoverBorder: 'hover:border-pink-400 dark:hover:border-pink-900',
    link: '/learning-hub/parent',
    badge: 'Monitor',
    stats: 'Reports ready',
  },
];

export default function LearningHub() {
  const { user } = useAuth();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      
      {/* Welcome Banner */}
      <div className="relative overflow-hidden bg-gradient-to-r from-indigo-950 via-purple-900 to-zinc-950 text-white rounded-3xl p-8 sm:p-12 mb-12 shadow-xl border border-indigo-900/30">
        {/* Educational Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-25 mix-blend-overlay pointer-events-none"
          style={{ backgroundImage: "url('/edu-bg.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/80 via-purple-950/70 to-indigo-950/80 pointer-events-none" />

        <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none" />
        <div className="relative z-10 max-w-2xl space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-white/10 rounded-full text-xs font-semibold text-indigo-200">
            <Sparkles className="h-4 w-4 text-amber-400" />
            <span>Welcome to your learning workstation</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Hello, {user ? user.displayName : 'Learner'}!
          </h1>
          <p className="text-indigo-150 leading-relaxed text-sm sm:text-base">
            {user?.role === 'parent' 
              ? "Access parental monitoring tools below, see analytics charts, and keep up with your child's weekly performance logs."
              : "What is your mission today? Create a daily calendar planner, practice flashcards, or see details on the upcoming weekly contest."}
          </p>
          
          {user && (
            <div className="pt-2 flex flex-wrap gap-3 text-xs">
              <span className="inline-flex items-center px-3 py-1 bg-white/10 rounded-full font-semibold">
                Board: {user.board || 'AP State Board'}
              </span>
              <span className="inline-flex items-center px-3 py-1 bg-white/10 rounded-full font-semibold">
                Class: {user.classLevel || 'Class 10'}
              </span>
              <span className="inline-flex items-center px-3 py-1 bg-white/10 rounded-full font-semibold capitalize">
                Role: {user.role}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Overview stats header */}
      <div className="mb-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Explore Educational Modules</h2>
          <p className="text-zinc-550 dark:text-zinc-400 text-sm">Select a learning segment below to begin.</p>
        </div>
        
        {/* Quick status list */}
        <div className="flex flex-wrap gap-4 text-xs font-medium text-zinc-500 dark:text-zinc-400">
          <div className="flex items-center space-x-1.5 bg-white dark:bg-zinc-900 border border-zinc-200/50 dark:border-zinc-800/50 px-3.5 py-2 rounded-xl">
            <Swords className="h-4 w-4 text-purple-500" />
            <span>1,248 Battles live</span>
          </div>
          <div className="flex items-center space-x-1.5 bg-white dark:bg-zinc-900 border border-zinc-200/50 dark:border-zinc-800/50 px-3.5 py-2 rounded-xl">
            <CheckSquare className="h-4 w-4 text-indigo-500" />
            <span>5 Planner goals open</span>
          </div>
          <div className="flex items-center space-x-1.5 bg-white dark:bg-zinc-900 border border-zinc-200/50 dark:border-zinc-800/50 px-3.5 py-2 rounded-xl">
            <Clock className="h-4 w-4 text-amber-500" />
            <span>Contest countdown active</span>
          </div>
        </div>
      </div>

      {/* Grid Menu Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {MODULES.map((mod, idx) => {
          const Icon = mod.icon;
          return (
            <div
              key={idx}
              className={`group bg-blue-50/90 dark:bg-zinc-900 border border-blue-200/80 dark:border-zinc-800 rounded-3xl p-8 hover:shadow-lg transition-all duration-300 flex flex-col justify-between ${mod.hoverBorder}`}
            >
              <div className="space-y-4">
                {/* Icon header line */}
                <div className="flex justify-between items-center">
                  <div className={`p-4 bg-gradient-to-tr ${mod.color} text-white rounded-2xl shadow-md`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-zinc-400 bg-zinc-50 dark:bg-zinc-850 px-3 py-1 rounded-full border border-zinc-200/10">
                    {mod.badge}
                  </span>
                </div>

                <h3 className="text-2xl font-bold tracking-tight pt-2">{mod.title}</h3>
                <p className="text-zinc-650 dark:text-zinc-450 text-sm leading-relaxed">{mod.desc}</p>
              </div>

              {/* Action and quick metrics footer */}
              <div className="pt-8 border-t border-zinc-100 dark:border-zinc-800/50 mt-8 flex justify-between items-center">
                <span className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 flex items-center space-x-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping mr-1" />
                  <span>{mod.stats}</span>
                </span>
                
                <Link
                  href={mod.link}
                  className="px-5 py-2.5 bg-zinc-50 dark:bg-zinc-850 group-hover:bg-indigo-600 group-hover:text-white dark:group-hover:bg-indigo-650 text-zinc-700 dark:text-zinc-200 text-sm font-semibold rounded-2xl flex items-center space-x-2 transition-all shadow-sm"
                >
                  <span>Open</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
}
