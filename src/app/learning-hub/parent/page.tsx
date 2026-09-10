'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  Users, 
  TrendingUp, 
  BookOpen, 
  Calendar, 
  Bell, 
  CheckCircle2, 
  AlertCircle, 
  MessageSquare,
  Award,
  Clock,
  Sparkles,
  ArrowLeft
} from 'lucide-react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';

const CHART_DATA = [
  { name: 'Week 1', score: 65, average: 70 },
  { name: 'Week 2', score: 78, average: 72 },
  { name: 'Week 3', score: 82, average: 71 },
  { name: 'Week 4', score: 89, average: 73 },
  { name: 'Week 5', score: 94, average: 74 },
];

const TEACHER_FEEDBACK = [
  {
    id: 'f1',
    teacher: 'Mrs. Evelyn Stone',
    subject: 'Mathematics',
    date: 'August 03, 2026',
    comment: 'Alex has shown outstanding progress in Algebra fractions. He is answering quickly in peer matches, but should double-check sign changes.',
    sentiment: 'positive'
  },
  {
    id: 'f2',
    teacher: 'Mr. Ryan Gallagher',
    subject: 'Physics & Chemistry',
    date: 'July 28, 2026',
    comment: 'Great participation in the light refraction contest. Suggest reading the revision notes on focal length for next week.',
    sentiment: 'neutral'
  }
];

const RECENT_LOGS = [
  { id: 'l1', event: 'Registered for Science Contest #15', date: 'August 05, 12:40 PM', type: 'contest' },
  { id: 'l2', event: 'Completed daily math planner target', date: 'August 05, 11:20 AM', type: 'planner' },
  { id: 'l3', event: 'Unlocked Perfect Score badge', date: 'August 04, 04:50 PM', type: 'achievement' },
  { id: 'l4', event: 'Scored 94% in Math Ratios Contest #13', date: 'July 25, 06:12 PM', type: 'contest' },
];

import { SchemaScript } from '@/lib/seo-helper';

export default function ParentDashboard() {
  const [mounted, setMounted] = useState(false);
  const [childName, setChildName] = useState('Aarav Sharma');
  const [notifEmail, setNotifEmail] = useState(true);
  const [notifSMS, setNotifSMS] = useState(false);
  const [notifWeekly, setNotifWeekly] = useState(true);

  // Avoid hydration warnings for recharts on SSR
  useEffect(() => {
    setMounted(true);
    const savedChild = localStorage.getItem('mytut-parent-child-name');
    if (savedChild) {
      setChildName(savedChild);
    }
  }, []);

  const getBoard = (name: string) => {
    if (name.includes('Priya')) return 'CBSE Board';
    return 'AP State Board';
  };

  const getClass = (name: string) => {
    if (name.includes('Priya')) return 'Class 9';
    if (name.includes('Rohan')) return 'Class 8';
    return 'Class 10';
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <SchemaScript pageKey="parent" />
      
      {/* Back Navigation Bar */}
      <div className="mb-6">
        <Link 
          href="/learning-hub"
          className="inline-flex items-center space-x-2 text-sm font-semibold text-zinc-600 dark:text-zinc-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors py-1 cursor-pointer"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Learning Hub</span>
        </Link>
      </div>

      {/* Header */}
      <div className="mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight">Parent Dashboard</h1>
          <p className="text-sm text-zinc-550 dark:text-zinc-400 mt-1 flex items-center space-x-2">
            <span>Monitoring profile for student:</span>
            <span className="font-semibold text-indigo-650 dark:text-indigo-400">{childName}</span>
            <span className="px-2 py-0.5 rounded-md bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 text-xs font-bold">{getBoard(childName)} • {getClass(childName)}</span>
          </p>
        </div>

        {/* Quick select child simulation */}
        <div className="flex items-center space-x-2 text-xs font-semibold">
          <span className="text-zinc-500">Student Profile:</span>
          <select 
            value={childName}
            onChange={(e) => {
              setChildName(e.target.value);
              localStorage.setItem('mytut-parent-child-name', e.target.value);
            }}
            className="px-3 py-1.5 rounded-xl border border-zinc-250 dark:border-zinc-800 bg-white dark:bg-zinc-900 focus:outline-none"
          >
            <option value="Aarav Sharma">Aarav Sharma (AP State Board - Class 10)</option>
            <option value="Priya Patel">Priya Patel (CBSE Board - Class 9)</option>
            <option value="Rohan Verma">Rohan Verma (AP State Board - Class 8)</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* LEFT COLUMN: Overview statistics & Performance chart */}
        <div className="lg:col-span-8 space-y-6">
          
          {/* Quick Metrics Row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            
            {/* Metric 1 */}
            <div className="bg-white dark:bg-zinc-900 rounded-3xl p-5 border border-zinc-200/50 dark:border-zinc-800/50 shadow-sm flex items-center space-x-4">
              <div className="p-3 bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 rounded-2xl">
                <Clock className="h-6 w-6" />
              </div>
              <div>
                <span className="block text-2xl font-bold">4.8 Hrs</span>
                <span className="text-xs text-zinc-450 font-medium">Study time this week</span>
              </div>
            </div>

            {/* Metric 2 */}
            <div className="bg-white dark:bg-zinc-900 rounded-3xl p-5 border border-zinc-200/50 dark:border-zinc-800/50 shadow-sm flex items-center space-x-4">
              <div className="p-3 bg-emerald-50 dark:bg-emerald-950/50 text-emerald-650 rounded-2xl">
                <CheckCircle2 className="h-6 w-6" />
              </div>
              <div>
                <span className="block text-2xl font-bold">92%</span>
                <span className="text-xs text-zinc-450 font-medium">Goal Completion rate</span>
              </div>
            </div>

            {/* Metric 3 */}
            <div className="bg-white dark:bg-zinc-900 rounded-3xl p-5 border border-zinc-200/50 dark:border-zinc-800/50 shadow-sm flex items-center space-x-4">
              <div className="p-3 bg-amber-50 dark:bg-amber-950/50 text-amber-550 rounded-2xl">
                <Award className="h-6 w-6" />
              </div>
              <div>
                <span className="block text-2xl font-bold">4 Badges</span>
                <span className="text-xs text-zinc-455 font-medium">Unlocked achievements</span>
              </div>
            </div>

          </div>

          {/* Recharts Analytics Plot */}
          <div className="bg-white dark:bg-zinc-900 rounded-3xl p-6 border border-zinc-200/50 dark:border-zinc-800/50 shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h3 className="text-lg font-bold">Weekly Performance Trend</h3>
                <p className="text-xs text-zinc-500 mt-0.5">Average mock test scores compared to global peer base.</p>
              </div>
              
              <div className="flex items-center space-x-4 text-xs font-semibold">
                <span className="flex items-center space-x-1.5">
                  <span className="w-3 h-3 rounded-full bg-indigo-500" />
                  <span>{childName}</span>
                </span>
                <span className="flex items-center space-x-1.5">
                  <span className="w-3 h-3 rounded-full bg-zinc-350" />
                  <span>Average Learner</span>
                </span>
              </div>
            </div>

            {/* Chart Area */}
            <div className="h-[280px] w-full">
              {mounted ? (
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={CHART_DATA} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                    <defs>
                      <linearGradient id="colorScore" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#6366F1" stopOpacity={0.2}/>
                        <stop offset="95%" stopColor="#6366F1" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" className="dark:stroke-zinc-850" />
                    <XAxis dataKey="name" stroke="#94A3B8" fontSize={11} tickLine={false} />
                    <YAxis stroke="#94A3B8" fontSize={11} tickLine={false} domain={[50, 100]} />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'var(--background)', 
                        borderColor: '#E2E8F0', 
                        borderRadius: '12px',
                        fontSize: '12px' 
                      }} 
                    />
                    <Area type="monotone" dataKey="score" stroke="#6366F1" strokeWidth={3} fillOpacity={1} fill="url(#colorScore)" />
                    <Area type="monotone" dataKey="average" stroke="#94A3B8" strokeWidth={1.5} strokeDasharray="5 5" fill="none" />
                  </AreaChart>
                </ResponsiveContainer>
              ) : (
                <div className="h-full w-full flex items-center justify-center text-xs text-zinc-400">Loading performance data...</div>
              )}
            </div>
          </div>

          {/* Teacher Feedback list */}
          <div className="bg-white dark:bg-zinc-900 rounded-3xl p-6 border border-zinc-200/50 dark:border-zinc-800/50 shadow-sm space-y-4">
            <h3 className="text-lg font-bold flex items-center space-x-2">
              <MessageSquare className="h-5 w-5 text-indigo-500" />
              <span>Direct Teacher Feedback Logs</span>
            </h3>

            <div className="space-y-4">
              {TEACHER_FEEDBACK.map((feed) => (
                <div 
                  key={feed.id}
                  className="p-5 rounded-2xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200/40 dark:border-zinc-850 space-y-2.5"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-bold text-sm text-zinc-800 dark:text-zinc-250">{feed.teacher}</h4>
                      <p className="text-[10px] text-zinc-450">{feed.subject} • {feed.date}</p>
                    </div>
                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                      feed.sentiment === 'positive'
                        ? 'bg-emerald-50 text-emerald-600 dark:bg-emerald-950/20'
                        : 'bg-indigo-50 text-indigo-650 dark:bg-indigo-950/20'
                    }`}>
                      {feed.sentiment}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-650 dark:text-zinc-400 leading-relaxed italic">
                    "{feed.comment}"
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN: Activities log & Notification settings */}
        <div className="lg:col-span-4 space-y-6">
          
          {/* Notification toggles */}
          <div className="bg-white dark:bg-zinc-900 rounded-3xl p-6 border border-zinc-200/50 dark:border-zinc-800/50 shadow-sm space-y-4">
            <h3 className="text-base font-bold flex items-center space-x-2">
              <Bell className="h-5 w-5 text-indigo-500" />
              <span>Parent Reports & Alerts</span>
            </h3>

            <div className="space-y-3 pt-2 text-xs">
              
              <label className="flex items-center justify-between cursor-pointer p-1">
                <span className="text-zinc-600 dark:text-zinc-400 font-semibold">Weekly Email Performance report</span>
                <input
                  type="checkbox"
                  checked={notifEmail}
                  onChange={(e) => setNotifEmail(e.target.checked)}
                  className="rounded border-zinc-300 text-indigo-650 focus:ring-indigo-500 h-4 w-4"
                />
              </label>

              <label className="flex items-center justify-between cursor-pointer p-1">
                <span className="text-zinc-600 dark:text-zinc-400 font-semibold">SMS instant alerts on contest entry</span>
                <input
                  type="checkbox"
                  checked={notifSMS}
                  onChange={(e) => setNotifSMS(e.target.checked)}
                  className="rounded border-zinc-300 text-indigo-650 focus:ring-indigo-500 h-4 w-4"
                />
              </label>

              <label className="flex items-center justify-between cursor-pointer p-1">
                <span className="text-zinc-600 dark:text-zinc-400 font-semibold">Notifications on teacher reviews</span>
                <input
                  type="checkbox"
                  checked={notifWeekly}
                  onChange={(e) => setNotifWeekly(e.target.checked)}
                  className="rounded border-zinc-300 text-indigo-650 focus:ring-indigo-500 h-4 w-4"
                />
              </label>

            </div>
          </div>

          {/* Child real-time logs */}
          <div className="bg-white dark:bg-zinc-900 rounded-3xl p-6 border border-zinc-200/50 dark:border-zinc-800/50 shadow-sm space-y-4">
            <h3 className="text-base font-bold flex items-center space-x-2">
              <Sparkles className="h-5 w-5 text-amber-500" />
              <span>Recent Activity Logs</span>
            </h3>

            <div className="relative border-l border-zinc-200 dark:border-zinc-800 pl-4 space-y-6 text-xs">
              {RECENT_LOGS.map((log) => (
                <div key={log.id} className="relative">
                  {/* Timeline dot */}
                  <span className="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-indigo-550 dark:bg-indigo-400 ring-4 ring-white dark:ring-zinc-900" />
                  
                  <div className="space-y-0.5">
                    <p className="font-semibold text-zinc-900 dark:text-zinc-200">{log.event}</p>
                    <p className="text-[10px] text-zinc-450">{log.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
