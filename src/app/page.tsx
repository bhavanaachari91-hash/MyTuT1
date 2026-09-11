'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ArrowRight, 
  Sparkles, 
  Trophy, 
  Calendar, 
  Zap, 
  Users, 
  Award, 
  CheckCircle2, 
  MessageSquare, 
  ChevronRight,
  TrendingUp,
  ShieldCheck,
  Star,
  Mail,
  Phone,
  Smartphone,
  Download
} from 'lucide-react';

const STATS = [
  { value: '15,000+', label: 'Active Students', icon: Users, color: 'text-indigo-500' },
  { value: '1,200+', label: 'Contests Held', icon: Trophy, color: 'text-amber-500' },
  { value: '500,000+', label: 'Questions Solved', icon: Zap, color: 'text-emerald-500' },
  { value: '250+', label: 'Partner Schools', icon: Award, color: 'text-rose-500' },
];

const FEATURES = [
  {
    title: 'Gamified Contests',
    desc: 'Compete in weekly subject battles. Earn XP, rank up on the leaderboard, and win achievement certificates.',
    icon: Trophy,
    color: 'from-amber-400 to-orange-500',
    link: '/learning-hub/contest',
  },
  {
    title: 'Adaptive Study Planner',
    desc: 'Design personalized daily, weekly, and monthly calendars. Monitor tasks and hit learning goals easily.',
    icon: Calendar,
    color: 'from-indigo-500 to-purple-600',
    link: '/learning-hub/planner',
  },
  {
    title: 'Quick Bites (Micro-Learning)',
    desc: 'Boost revision in 5 minutes. Master core concepts with interactive flashcards, formulas, and fast quizzes.',
    icon: Zap,
    color: 'from-teal-400 to-emerald-500',
    link: '/learning-hub/quick-bite',
  },
  {
    title: 'Parent Insights',
    desc: 'Real-time child tracking, analytics charts, teacher feedback notifications, and comprehensive weekly reports.',
    icon: Users,
    color: 'from-pink-500 to-rose-500',
    link: '/learning-hub/parent',
  },
];

const STUDENT_BENEFITS = [
  'Earn XP, custom badges, and climb levels just like playing a game.',
  'Compete with peers globally or in your classroom to test your skills.',
  'Bite-sized revision content makes learning fast and stress-free.',
  'Receive beautiful downloadable certificates for winning contests.',
];

const PARENT_BENEFITS = [
  'Detailed performance charts tracking progress over time.',
  'Attendance logs and direct updates on contest participations.',
  'Constructive teacher feedback and direct messaging insights.',
  'Weekly notifications summarizing achievements and focus areas.',
];

const TESTIMONIALS = [
  {
    quote: "mytut completely transformed the way my son studies. He actually looks forward to the weekly science contests!",
    name: "Sunita Sharma",
    role: "Parent of 8th Grader",
    stars: 5,
    avatar: "S"
  },
  {
    quote: "The Study Planner helped me manage my class 9 exams. I earned the 'Planner Master' badge and got an A in math!",
    name: "Aarav Patel",
    role: "Class 9 Student",
    stars: 5,
    avatar: "A"
  },
  {
    quote: "As a teacher, I recommend this platform. The micro-learning concept ensures concepts stay sharp in just 5 minutes.",
    name: "Mr. Deepak Verma",
    role: "Science Educator",
    stars: 5,
    avatar: "D"
  }
];

const FAQS = [
  {
    q: "Is mytut aligned with the school syllabus?",
    a: "Yes! Our curriculum covers key concepts across classes 6 to 10 aligned with national standards, focusing on science, mathematics, and analytical reasoning."
  },
  {
    q: "How does the weekly contest work?",
    a: "Every Sunday, a new theme contest opens. Students have half an hour to solve questions, scoring points for speed and accuracy to top the leaderboards."
  },
  {
    q: "Can parents monitor multiple children?",
    a: "Absolutely. The Parent Dashboard supports adding multiple student accounts to track individual schedules, attendance, and contest analytics."
  }
];

import { SchemaScript } from '@/lib/seo-helper';

export default function Home() {
  const [activeTab, setActiveTab] = useState<'student' | 'parent'>('student');

  return (
    <div className="flex flex-col min-h-screen">
      <SchemaScript pageKey="home" />

      {/* TOP CONTAINER WITH RESPONSIVE ORDERING */}
      <div className="flex flex-col">
        {/* HERO SECTION - Order 1 on mobile, Order 2 on desktop */}
        <section className="order-1 sm:order-2 relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-32 bg-gradient-to-b from-orange-100/30 via-white to-transparent dark:from-orange-950/20 dark:via-zinc-950 dark:to-transparent">
        {/* Student Background Image & ambient glow shapes */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-15 dark:opacity-10 pointer-events-none"
          style={{ backgroundImage: "url('/students-hero-bg.png')" }}
        />
        {/* Soft overlay gradient to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/85 to-white/95 dark:from-zinc-950/80 dark:via-zinc-950/90 dark:to-zinc-950 pointer-events-none" />
        
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-orange-300/30 to-amber-300/20 blur-3xl pointer-events-none rounded-full" />
        <div className="absolute top-1/3 right-10 w-72 h-72 bg-orange-200/30 blur-2xl pointer-events-none rounded-full" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Hero Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
                <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-pink-200/90 dark:bg-pink-950/70 max-sm:dark:bg-[#007979] border border-pink-300 dark:border-pink-800 max-sm:dark:border-[#005C5C] text-pink-900 dark:text-pink-200 max-sm:dark:text-white text-xs font-bold shadow-xs">
                  <Sparkles className="h-4 w-4 text-pink-600 dark:text-pink-400 max-sm:dark:text-emerald-200 animate-bounce" />
                  <span>Next-Gen Gamified Learning</span>
                </div>
                <a href="#download-app" className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-xs font-bold shadow-md hover:scale-105 transition-transform cursor-pointer">
                  <Smartphone className="h-3.5 w-3.5" />
                  <span>📱 Mobile App Is Live!</span>
                </a>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-normal text-zinc-900 dark:text-white max-sm:dark:text-white">
                {/* Mobile View: Learn. Win. Compete. Grow. */}
                <span className="block sm:hidden max-sm:dark:text-white">
                  Learn. Win. Compete. <span className="inline-block bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent pr-2 pb-1">Grow.</span>
                </span>
                {/* Desktop/Web View: Learn. Compete. Grow. */}
                <span className="hidden sm:block">
                  Learn. Compete. <span className="inline-block bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent pr-3 pb-1">Grow.</span>
                </span>
              </h1>
              <p className="text-lg text-zinc-800 dark:text-zinc-200 max-sm:dark:text-white font-medium max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Unlock your potential with gamified study planners, weekly live contests, 5-minute quick bites, and insightful performance dashboards for classes 6–10.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <Link
                  href="/auth/signup"
                  className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-2xl shadow-lg shadow-indigo-500/25 hover:shadow-xl transition-all font-bold flex items-center justify-center space-x-2 group cursor-pointer"
                >
                  <span>Get Started Free</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/learning-hub"
                  className="w-full sm:w-auto px-8 py-4 border-2 border-pink-300 dark:border-zinc-700 text-zinc-900 dark:text-zinc-100 rounded-2xl hover:bg-white/60 dark:hover:bg-zinc-900 transition-colors font-bold flex items-center justify-center"
                >
                  Explore Learning Hub
                </Link>
              </div>
            </div>

            {/* Live Leaderboard Overlay Card on Right */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="w-full max-w-md p-6 sm:p-7 rounded-3xl bg-white/95 dark:bg-zinc-900/95 backdrop-blur-md border border-pink-200 dark:border-zinc-800 shadow-xl space-y-5 relative">
                {/* Decorative badge */}
                <div className="absolute -top-3 right-6 px-3 py-1 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-[10px] font-extrabold uppercase tracking-wider shadow-md">
                  Top Weekly Champions
                </div>

                <div className="flex items-center justify-between pb-3 border-b border-zinc-200 dark:border-zinc-800">
                  <div className="flex items-center space-x-3">
                    <div className="p-2.5 rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-600 text-white shadow-md">
                      <Trophy className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-extrabold text-zinc-900 dark:text-white text-base">Live Leaderboard</h4>
                      <p className="text-xs text-zinc-600 dark:text-zinc-400 font-medium">Weekly Student Rankings</p>
                    </div>
                  </div>
                  <span className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 text-xs font-extrabold border border-emerald-300 dark:border-emerald-800">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping mr-1" />
                    Live
                  </span>
                </div>

                {/* Top 3 Leaderboard Rankings */}
                <div className="space-y-2.5">
                  <div className="p-2.5 rounded-xl bg-orange-50 dark:bg-orange-950/30 border border-orange-200 dark:border-orange-900/40 flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <span className="w-6 h-6 rounded-full bg-amber-500 text-white flex items-center justify-center font-extrabold text-xs shadow-sm">1</span>
                      <div>
                        <p className="text-xs sm:text-sm font-extrabold text-zinc-900 dark:text-zinc-100">Aarav Sharma</p>
                        <p className="text-[10px] text-zinc-600 dark:text-zinc-400 font-medium">Class 10 • AP State Board (Vijayawada)</p>
                      </div>
                    </div>
                    <span className="text-xs font-extrabold text-orange-600 dark:text-orange-400 bg-orange-100 dark:bg-orange-900/50 px-2 py-1 rounded-lg">2,450 XP</span>
                  </div>

                  <div className="p-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-850 border border-zinc-100 dark:border-zinc-800 flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <span className="w-6 h-6 rounded-full bg-slate-400 text-white flex items-center justify-center font-extrabold text-xs shadow-sm">2</span>
                      <div>
                        <p className="text-xs sm:text-sm font-extrabold text-zinc-900 dark:text-zinc-100">Priya Patel</p>
                        <p className="text-[10px] text-zinc-600 dark:text-zinc-400 font-medium">Class 9 • CBSE Board (Visakhapatnam)</p>
                      </div>
                    </div>
                    <span className="text-xs font-extrabold text-amber-600 dark:text-amber-400 bg-amber-100 dark:bg-amber-900/40 px-2 py-1 rounded-lg">2,180 XP</span>
                  </div>

                  <div className="p-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-850 border border-zinc-200 dark:border-zinc-800 flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <span className="w-6 h-6 rounded-full bg-amber-700 text-white flex items-center justify-center font-extrabold text-xs shadow-sm">3</span>
                      <div>
                        <p className="text-xs sm:text-sm font-extrabold text-zinc-900 dark:text-zinc-100">Rohan Verma</p>
                        <p className="text-[10px] text-zinc-600 dark:text-zinc-400 font-medium">Class 10 • AP State Board (Tirupati)</p>
                      </div>
                    </div>
                    <span className="text-xs font-extrabold text-orange-600 dark:text-orange-400 bg-orange-100 dark:bg-orange-900/40 px-2 py-1 rounded-lg">1,950 XP</span>
                  </div>
                </div>

                {/* Footer link to contest leaderboard */}
                <Link 
                  href="/learning-hub/contest"
                  className="flex items-center justify-between pt-2 text-xs font-extrabold text-orange-600 dark:text-orange-400 hover:text-orange-700 transition-colors group cursor-pointer"
                >
                  <span className="flex items-center">
                    <Trophy className="h-3.5 w-3.5 mr-1.5" /> View Full Leaderboard
                  </span>
                  <span className="flex items-center group-hover:translate-x-1 transition-transform">
                    Compete Now <ChevronRight className="h-4 w-4 ml-0.5" />
                  </span>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* PROMINENT TOP APP PROMOTION BANNER - Order 2 on mobile, Order 1 on desktop */}
      <section id="download-app" className="order-2 sm:order-1 relative overflow-hidden py-10 bg-[#81A6C6] text-white border-b border-[#698EA9] shadow-xl">
        {/* Background glow effects */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-black/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Promotion Content */}
            <div className="lg:col-span-7 space-y-5 text-center lg:text-left">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-pink-200 text-xs font-extrabold tracking-wide uppercase">
                <Sparkles className="h-3.5 w-3.5 text-amber-400 animate-pulse" />
                <span>TuT Mobile App</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-white">
                Take TuT Learning With You
              </h2>

              <p className="text-zinc-200 text-base sm:text-lg font-medium leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Plan your studies, join weekly contests, revise with Quick Bites, and track your progress — all from the TuT App.
              </p>

              {/* Download Buttons & CTA */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <a
                  href="#download-app"
                  onClick={(e) => { e.preventDefault(); alert('Redirecting to download the TuT Android App...'); }}
                  className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600 text-zinc-950 font-black rounded-2xl shadow-lg shadow-amber-500/25 hover:scale-105 transition-all flex items-center justify-center space-x-2 group cursor-pointer"
                >
                  <Download className="h-5 w-5 group-hover:translate-y-0.5 transition-transform" />
                  <span>Download the TuT App</span>
                </a>

                <div className="flex items-center gap-3">
                  {/* Google Play Store (Android) */}
                  <a
                    href="#"
                    onClick={(e) => { e.preventDefault(); alert('Redirecting to Google Play Store...'); }}
                    className="px-4 py-2.5 bg-black/40 hover:bg-black/60 backdrop-blur-md border border-white/20 text-white rounded-xl transition-all flex items-center space-x-2.5 cursor-pointer group"
                  >
                    <Smartphone className="h-5 w-5 text-emerald-400 group-hover:scale-110 transition-transform" />
                    <div className="text-left">
                      <p className="text-[9px] text-zinc-300 uppercase font-bold leading-tight">GET IT ON</p>
                      <p className="text-xs font-bold leading-tight">Google Play</p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Extras: App Rating & QR Code Placeholder */}
              <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-zinc-300">
                <div className="flex items-center space-x-1.5 font-semibold">
                  <Star className="h-4 w-4 text-amber-400 fill-amber-400" />
                  <span>4.9 / 5.0 Rating</span>
                </div>
                <div className="flex items-center space-x-1.5 font-semibold">
                  <ShieldCheck className="h-4 w-4 text-emerald-400" />
                  <span>100% Free Download</span>
                </div>
                
                {/* QR Code Scan Section */}
                <div className="flex items-center space-x-3 bg-white/10 px-3.5 py-2 rounded-xl border border-white/20 backdrop-blur-md">
                  <div className="w-12 h-12 bg-white p-1 rounded-lg flex items-center justify-center shrink-0 shadow-md">
                    <Image 
                      src="/qr-code.png" 
                      alt="Scan QR Code to download TuT Mobile App" 
                      width={44} 
                      height={44} 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="text-left">
                    <p className="text-xs font-bold text-white leading-tight">Scan QR Code</p>
                    <p className="text-[10px] text-zinc-300">Scan to Install Mobile App</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Smartphone App Mockup */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-72 sm:w-80 bg-zinc-950 rounded-[44px] p-3 border-4 border-indigo-400/30 shadow-2xl shadow-purple-950/50 group hover:scale-[1.02] transition-transform duration-300">
                {/* Phone Notch / Dynamic Island */}
                <div className="w-28 h-4 bg-zinc-900 mx-auto rounded-b-2xl z-20 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-zinc-950/80 mr-2" />
                  <div className="w-2 h-2 rounded-full bg-indigo-500/50" />
                </div>
                
                {/* Phone Screen Visual showing TuT App interface features */}
                <div className="bg-gradient-to-b from-zinc-900 via-indigo-950/80 to-zinc-950 rounded-[34px] p-4 flex flex-col justify-between space-y-3 border border-white/10 text-white my-1 overflow-hidden">
                  
                  {/* Header */}
                  <div className="flex items-center justify-between pt-1 px-1">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-indigo-500 to-purple-600 flex items-center justify-center font-black text-sm shadow-md">
                        T
                      </div>
                      <div>
                        <p className="text-xs font-extrabold text-white leading-tight">TuT App</p>
                        <p className="text-[9px] text-indigo-300 font-medium leading-tight">Mobile Edition</p>
                      </div>
                    </div>
                    <span className="px-2 py-0.5 rounded-full bg-amber-400/20 border border-amber-400/40 text-amber-300 text-[10px] font-extrabold">
                      XP: 2,450
                    </span>
                  </div>

                  {/* Feature Highlight Cards inside Phone UI */}
                  <div className="space-y-2 text-left">
                    
                    {/* Feature 1: Study Planner */}
                    <div className="p-2.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 space-y-1">
                      <div className="flex items-center justify-between text-[11px] font-extrabold">
                        <span className="flex items-center text-indigo-300">
                          <Calendar className="h-3.5 w-3.5 mr-1 text-indigo-400" /> Study Planner
                        </span>
                        <span className="text-[9px] text-emerald-400 bg-emerald-950/60 px-1.5 py-0.5 rounded">3 Tasks Today</span>
                      </div>
                      <p className="text-[10px] text-zinc-300 line-clamp-1">Math Algebra Revision • 4:00 PM</p>
                    </div>

                    {/* Feature 2: Weekly Contest */}
                    <div className="p-2.5 rounded-xl bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/30 space-y-1">
                      <div className="flex items-center justify-between text-[11px] font-extrabold">
                        <span className="flex items-center text-amber-300">
                          <Trophy className="h-3.5 w-3.5 mr-1 text-amber-400" /> Weekly Contest
                        </span>
                        <span className="text-[9px] text-amber-300 bg-amber-950/60 px-1.5 py-0.5 rounded animate-pulse">Live Now</span>
                      </div>
                      <p className="text-[10px] text-amber-100 font-medium">Rank #1 Leaderboard Battle</p>
                    </div>

                    {/* Feature 3: Quick Bite */}
                    <div className="p-2.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 space-y-1">
                      <div className="flex items-center justify-between text-[11px] font-extrabold">
                        <span className="flex items-center text-teal-300">
                          <Zap className="h-3.5 w-3.5 mr-1 text-teal-400" /> Quick Bite
                        </span>
                        <span className="text-[9px] text-zinc-300">5-Min Quiz</span>
                      </div>
                      <p className="text-[10px] text-zinc-300 line-clamp-1">Science: Light & Optics Flashcards</p>
                    </div>

                    {/* Feature 4: Progress Tracking */}
                    <div className="p-2.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 space-y-1.5">
                      <div className="flex justify-between items-center text-[10px] font-bold">
                        <span className="text-pink-300 flex items-center">
                          <TrendingUp className="h-3 w-3 mr-1 text-pink-400" /> Progress Tracking
                        </span>
                        <span className="text-emerald-400 font-extrabold">88% Mastered</span>
                      </div>
                      <div className="w-full bg-zinc-800 rounded-full h-1.5 overflow-hidden">
                        <div className="bg-gradient-to-r from-pink-500 to-purple-500 h-1.5 rounded-full w-[88%]" />
                      </div>
                    </div>

                  </div>

                  {/* Phone Bottom Button */}
                  <div className="pt-1">
                    <div className="w-full py-2 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-extrabold text-[11px] text-center shadow-md">
                      Open TuT Mobile App
                    </div>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      </div>

      {/* STATISTICS */}
      <section className="py-12 bg-white dark:bg-zinc-900 border-y border-zinc-200/50 dark:border-zinc-800/50 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {STATS.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div key={i} className="p-4 flex flex-col items-center space-y-2">
                  <div className={`p-3 bg-zinc-50 dark:bg-zinc-850 rounded-2xl ${stat.color}`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-3xl font-extrabold tracking-tight">{stat.value}</h3>
                  <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* STUDENT SHOWCASE FEATURE BANNER */}
      <section className="py-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden shadow-xl border border-pink-300/60 dark:border-zinc-800">
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-30"
              style={{ backgroundImage: "url('/students-feature-bg.png')" }}
            />
            {/* Soft Light Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-pink-200/90 via-purple-100/85 to-indigo-100/90 dark:from-zinc-950/95 dark:via-zinc-950/90 dark:to-indigo-950/70" />

            <div className="relative z-10 p-8 sm:p-12 lg:p-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-zinc-900 dark:text-white">
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/80 dark:bg-pink-950/60 border border-pink-300 dark:border-pink-800 text-pink-950 dark:text-pink-200 text-xs font-extrabold shadow-xs">
                  <Sparkles className="h-3.5 w-3.5 text-indigo-600 dark:text-indigo-400" />
                  <span>Empowering 15,000+ Students Daily</span>
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
                  Learning Built for the <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">Digital Generation</span>
                </h2>
                <p className="text-zinc-800 dark:text-zinc-200 text-base sm:text-lg font-medium leading-relaxed max-w-xl">
                  Interactive quizzes, real-time leaderboard battles, and personalized study planners designed to make every lesson engaging, memorable, and fun.
                </p>
                <div className="pt-2 flex flex-wrap gap-4">
                  <Link
                    href="/auth/signup"
                    className="px-6 py-3.5 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold rounded-2xl shadow-lg shadow-indigo-500/25 transition-all flex items-center space-x-2"
                  >
                    <span>Join Student Community</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5 flex justify-center">
                <div className="bg-white/95 dark:bg-zinc-900/95 backdrop-blur-xl border border-pink-200 dark:border-zinc-800 p-6 rounded-3xl space-y-4 max-w-sm w-full shadow-xl">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-extrabold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">Live Activity</span>
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  </div>
                  <div className="space-y-3 text-xs">
                    <div className="p-3 rounded-xl bg-pink-50/80 dark:bg-zinc-800 border border-pink-200/60 dark:border-zinc-700 flex items-center justify-between font-bold">
                      <span className="text-zinc-900 dark:text-zinc-100">🔥 Science Quiz Battle</span>
                      <span className="font-extrabold text-indigo-600 dark:text-indigo-400">1,240 Participants</span>
                    </div>
                    <div className="p-3 rounded-xl bg-pink-50/80 dark:bg-zinc-800 border border-pink-200/60 dark:border-zinc-700 flex items-center justify-between font-bold">
                      <span className="text-zinc-900 dark:text-zinc-100">⚡ Daily Micro-Bite</span>
                      <span className="font-extrabold text-emerald-600 dark:text-emerald-400">98% Success Rate</span>
                    </div>
                    <div className="p-3 rounded-xl bg-pink-50/80 dark:bg-zinc-800 border border-pink-200/60 dark:border-zinc-700 flex items-center justify-between font-bold">
                      <span className="text-zinc-900 dark:text-zinc-100">🏆 Leaderboard Rank #1</span>
                      <span className="font-extrabold text-purple-600 dark:text-purple-400">Aarav (2,450 XP)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES GRID */}
      <section className="py-20 bg-zinc-50 dark:bg-zinc-950 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              One Workspace. Endless Growth.
            </h2>
            <p className="text-zinc-650 dark:text-zinc-400">
              Discover a suite of tools custom-built to make secondary school learning effective, competitive, and enjoyable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {FEATURES.map((feat, i) => {
              const Icon = feat.icon;
              return (
                <div 
                  key={i} 
                  className="group relative bg-white dark:bg-zinc-900 rounded-3xl p-8 border border-zinc-200/50 dark:border-zinc-800/50 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
                >
                  <div className="space-y-4">
                    <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-tr ${feat.color} text-white shadow-md`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold">{feat.title}</h3>
                    <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">{feat.desc}</p>
                  </div>
                  <div className="pt-6">
                    <Link
                      href={feat.link}
                      className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-350 inline-flex items-center space-x-1 group/btn"
                    >
                      <span>Explore feature</span>
                      <ChevronRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* PARENTS & STUDENTS TABS */}
      <section className="py-20 bg-white dark:bg-zinc-900 border-t border-zinc-100 dark:border-zinc-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
            <h2 className="text-3xl font-extrabold tracking-tight">Tailored for Student & Parent Needs</h2>
            <p className="text-zinc-650 dark:text-zinc-450">
              See why students thrive with our gamified platform, while parents stay aligned with detailed performance tracking.
            </p>
            
            {/* Tab Toggles */}
            <div className="inline-flex p-1.5 rounded-2xl bg-zinc-100 dark:bg-zinc-800 mt-4 border border-zinc-200/20">
              <button
                onClick={() => setActiveTab('student')}
                className={`px-6 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                  activeTab === 'student'
                    ? 'bg-white dark:bg-zinc-700 text-indigo-650 dark:text-white shadow-sm'
                    : 'text-zinc-550 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200'
                }`}
              >
                For Students
              </button>
              <button
                onClick={() => setActiveTab('parent')}
                className={`px-6 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                  activeTab === 'parent'
                    ? 'bg-white dark:bg-zinc-700 text-indigo-650 dark:text-white shadow-sm'
                    : 'text-zinc-550 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200'
                }`}
              >
                For Parents
              </button>
            </div>
          </div>

          <div className="max-w-4xl mx-auto bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/20 dark:to-purple-950/20 rounded-3xl p-8 sm:p-12 border border-indigo-100/50 dark:border-indigo-950/30">
            {activeTab === 'student' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold flex items-center space-x-2">
                    <TrendingUp className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                    <span>Become a Study Champion</span>
                  </h3>
                  <p className="text-zinc-650 dark:text-zinc-450 leading-relaxed text-sm">
                    Make studying feel like playing your favorite video game. Beat quizzes, rank up, and grow with classmates.
                  </p>
                  <ul className="space-y-3">
                    {STUDENT_BENEFITS.map((b, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-sm text-zinc-700 dark:text-zinc-350">
                        <CheckCircle2 className="h-5 w-5 text-indigo-550 dark:text-indigo-400 shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white dark:bg-zinc-900 rounded-2xl p-6 border border-indigo-100 dark:border-zinc-800 shadow-md space-y-4">
                  <h4 className="font-bold text-sm text-zinc-400 uppercase tracking-wider">Alex's Weekly Challenge</h4>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold">Science Battle #14</span>
                    <span className="text-xs font-bold text-amber-500 bg-amber-50 dark:bg-amber-950/30 px-2 py-0.5 rounded-full">Active</span>
                  </div>
                  <div className="w-full bg-zinc-100 dark:bg-zinc-850 h-3.5 rounded-full overflow-hidden">
                    <div className="bg-indigo-600 h-full rounded-full w-2/3" />
                  </div>
                  <div className="flex justify-between text-xs text-zinc-550">
                    <span>Quiz Progress: 67%</span>
                    <span className="font-bold text-indigo-600">+150 XP pending</span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold flex items-center space-x-2">
                    <ShieldCheck className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                    <span>Complete Peace of Mind</span>
                  </h3>
                  <p className="text-zinc-650 dark:text-zinc-450 leading-relaxed text-sm">
                    Track your child's milestones. Receive automatic alerts on weekly performance, strength points, and areas of support.
                  </p>
                  <ul className="space-y-3">
                    {PARENT_BENEFITS.map((b, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-sm text-zinc-700 dark:text-zinc-350">
                        <CheckCircle2 className="h-5 w-5 text-emerald-550 dark:text-emerald-450 shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white dark:bg-zinc-900 rounded-2xl p-6 border border-indigo-100 dark:border-zinc-800 shadow-md space-y-4">
                  <h4 className="font-bold text-sm text-zinc-450 uppercase tracking-wider">Weekly Report</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-semibold">
                      <span>Concept Mastery</span>
                      <span className="text-emerald-600">89% (High)</span>
                    </div>
                    <div className="flex justify-between text-xs font-semibold">
                      <span>Time Spent Studying</span>
                      <span>4.5 Hours</span>
                    </div>
                    <div className="flex justify-between text-xs font-semibold">
                      <span>Contest Rank</span>
                      <span className="text-amber-500">Top 5%</span>
                    </div>
                  </div>
                  <div className="border-t border-zinc-100 dark:border-zinc-800 pt-3">
                    <p className="text-xs italic text-zinc-550">
                      "Robert, Alex showed strong performance in Math Fractions this week. Review notes are available."
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 bg-zinc-50 dark:bg-zinc-950 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl font-extrabold tracking-tight">Loved by Students & Trusted by Parents</h2>
            <p className="text-zinc-650 dark:text-zinc-400">
              Read how our community uses mytut to foster collaborative and interactive educational growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((test, i) => (
              <div 
                key={i} 
                className="bg-white dark:bg-zinc-900 rounded-3xl p-8 border border-zinc-200/50 dark:border-zinc-800/50 shadow-sm flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex space-x-1 text-amber-500">
                    {[...Array(test.stars)].map((_, idx) => (
                      <Star key={idx} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-zinc-650 dark:text-zinc-350 italic text-sm leading-relaxed">
                    "{test.quote}"
                  </p>
                </div>
                
                <div className="flex items-center space-x-3 pt-6 border-t border-zinc-100 dark:border-zinc-800 mt-6">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm shadow">
                    {test.avatar}
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">{test.name}</h4>
                    <p className="text-xs text-zinc-550 dark:text-zinc-400">{test.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* FAQS TEASER & BLOG TEASER */}
      <section className="py-20 bg-white dark:bg-zinc-900 border-t border-zinc-100 dark:border-zinc-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* FAQs Column */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-2">
                <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">Got Questions?</h2>
                <p className="text-sm text-zinc-550 dark:text-zinc-400">
                  Quick answers to some commonly asked queries.
                </p>
              </div>

              <div className="space-y-4">
                {FAQS.map((faq, i) => (
                  <div 
                    key={i} 
                    className="p-5 rounded-2xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200/50 dark:border-zinc-800/50 space-y-2"
                  >
                    <h4 className="font-semibold text-sm sm:text-base text-zinc-900 dark:text-zinc-150">{faq.q}</h4>
                    <p className="text-xs sm:text-sm text-zinc-650 dark:text-zinc-400 leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <Link
                  href="/faq"
                  className="inline-flex items-center space-x-2 text-sm font-bold text-indigo-600 dark:text-indigo-400 hover:underline"
                >
                  <span>View all FAQ categories</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Latest Blogs Column */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-2">
                <h2 className="text-[16px] sm:text-3xl font-extrabold tracking-tight">From the Blog</h2>
                <p className="text-[16px] sm:text-sm text-zinc-550 dark:text-zinc-400">
                  Read our latest study guides, parental tips, and educational articles.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-6">
                
                {/* Blog Card 1 */}
                <div className="group bg-zinc-50 dark:bg-zinc-950 border border-zinc-200/50 dark:border-zinc-800/50 rounded-2xl p-5 hover:shadow-md transition-shadow">
                  <span className="text-[16px] sm:text-xs font-bold text-indigo-650 dark:text-indigo-400 uppercase tracking-widest">Study Tips</span>
                  <h3 className="font-bold text-[16px] sm:text-base mt-2 group-hover:text-indigo-650 dark:group-hover:text-indigo-400 transition-colors">
                    5 Revision Techniques to Ace Class 10 Math Exams
                  </h3>
                  <p className="text-[16px] sm:text-xs text-zinc-550 dark:text-zinc-455 mt-1">
                    Master active recall, space repetition, and customizable formulas to excel in board examinations.
                  </p>
                  <Link href="/blog" className="inline-flex items-center space-x-1 text-[16px] sm:text-xs text-zinc-700 dark:text-zinc-350 font-bold mt-4">
                    <span>Read article</span>
                    <ChevronRight className="h-4 w-4 sm:h-3 sm:w-3" />
                  </Link>
                </div>

                {/* Blog Card 2 */}
                <div className="group bg-zinc-50 dark:bg-zinc-950 border border-zinc-200/50 dark:border-zinc-800/50 rounded-2xl p-5 hover:shadow-md transition-shadow">
                  <span className="text-[16px] sm:text-xs font-bold text-emerald-650 dark:text-emerald-400 uppercase tracking-widest">Parent Guidance</span>
                  <h3 className="font-bold text-[16px] sm:text-base mt-2 group-hover:text-indigo-650 dark:group-hover:text-indigo-400 transition-colors">
                    Fostering a Growth Mindset in Middle-Schoolers
                  </h3>
                  <p className="text-[16px] sm:text-xs text-zinc-550 dark:text-zinc-455 mt-1">
                    How constructive feedback on effort, rather than intelligence, helps teenagers overcome learning anxiety.
                  </p>
                  <Link href="/blog" className="inline-flex items-center space-x-1 text-[16px] sm:text-xs text-zinc-700 dark:text-zinc-350 font-bold mt-4">
                    <span>Read article</span>
                    <ChevronRight className="h-4 w-4 sm:h-3 sm:w-3" />
                  </Link>
                </div>

              </div>

              <div className="pt-2">
                <Link
                  href="/blog"
                  className="inline-flex items-center space-x-2 text-[16px] sm:text-sm font-bold text-indigo-600 dark:text-indigo-400 hover:underline"
                >
                  <span>Explore more blog posts</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 bg-gradient-to-br from-orange-600 via-amber-600 to-orange-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.2),transparent)] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6 relative z-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Ready to gamify your school path?
          </h2>
          <p className="text-lg text-orange-100 max-w-xl mx-auto font-medium">
            Join thousands of active students and parents today. Start checking off your planner and top the weekly scoreboard.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/auth/signup"
              className="w-full sm:w-auto px-8 py-4 bg-white text-orange-600 hover:bg-orange-50 rounded-2xl shadow-xl transition-all font-extrabold cursor-pointer"
            >
              Sign Up Now (Free)
            </Link>
            <Link
              href="/about"
              className="w-full sm:w-auto px-8 py-4 bg-black/20 text-white border-2 border-white/30 rounded-2xl hover:bg-black/30 transition-colors font-bold"
            >
              Learn How It Works
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
