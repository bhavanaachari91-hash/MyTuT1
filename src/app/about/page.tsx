'use client';

import React from 'react';
import { 
  GraduationCap, 
  Target, 
  Compass, 
  Users, 
  Calendar, 
  Trophy, 
  Zap, 
  ArrowRight
} from 'lucide-react';

const TEAM = [
  { name: 'Arun Mohan M.C', role: 'CEO & Co-Founder', bio: 'EdTech visionary with 15+ years experience driving innovative digital learning platforms.', initial: 'A' },
  { name: 'A. Bhavana', role: 'Head of Learning Design', bio: 'Curriculum expert, specializing in creating active learning templates for Classes 6-10.', initial: 'A' },
];

const STEPS = [
  { num: '01', title: 'Plan Study Calendars', desc: 'Create daily schedules, map priorities, and split topics into customizable task blocks.', icon: Calendar },
  { num: '02', title: 'Learn with Quick Bites', desc: 'Read 5-minute revision flashcards and check equations before starting school tests.', icon: Zap },
  { num: '03', title: 'Compete in Battles', desc: 'Enter weekly science & math live contests, answer quickly, and climb the scoreboard.', icon: Trophy },
  { num: '04', title: 'Monitor with Parent Panel', desc: 'Access study hours analytics, attendances, and view direct teacher recommendations.', icon: Users },
];

const ROADMAP = [
  { year: 'Q4 2026', title: 'AI Study Assistant', desc: 'Integrate real-time LLM tutor support to help students solve complex science/math equations step-by-step.' },
  { year: 'Q1 2027', title: 'School & Teacher Dashboards', desc: 'Empower schools to register whole classrooms, track student contests, and distribute assignments directly.' },
  { year: 'Q2 2027', title: 'Gamified Avatar Shop', desc: 'Launch XP-redeemable virtual avatars, badges, custom banners, and peer battle leagues.' },
  {year: 'Q3 2027', title: 'Multi-Language Support', desc: 'Introduce regional language options and audio-assisted quick bites for broader accessibility.' },
];

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-20">
      
      {/* Intro Hero */}
      <section className="text-center max-w-3xl mx-auto space-y-6">
        <div className="inline-flex p-3 bg-indigo-50 dark:bg-indigo-950/50 rounded-2xl text-indigo-600 dark:text-indigo-400">
          <GraduationCap className="h-8 w-8" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">Our Mission: Redefine Learning</h1>
        <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed font-medium">
          mytut was born out of a simple belief: secondary school studying shouldn&apos;t feel like a chore. By integrating micro-learning with healthy competition and organization, we make education addictive.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200/50 dark:border-zinc-800/50 rounded-3xl p-8 space-y-4 shadow-sm">
          <div className="p-3 bg-rose-50 dark:bg-rose-950/30 text-rose-650 dark:text-rose-400 rounded-xl inline-block">
            <Target className="h-6 w-6" />
          </div>
          <h3 className="text-xl font-bold">Our Mission</h3>
          <p className="text-zinc-550 dark:text-zinc-400 text-sm leading-relaxed">
            To provide every student in classes 6 to 10 with a personalized, gamified study workspace that makes learning active, measures progress, and rewards academic growth.
          </p>
        </div>

        <div className="bg-white dark:bg-zinc-900 border border-zinc-200/50 dark:border-zinc-800/50 rounded-3xl p-8 space-y-4 shadow-sm">
          <div className="p-3 bg-indigo-50 dark:bg-indigo-950/30 text-indigo-650 dark:text-indigo-400 rounded-xl inline-block">
            <Compass className="h-6 w-6" />
          </div>
          <h3 className="text-xl font-bold">Our Vision</h3>
          <p className="text-zinc-550 dark:text-zinc-400 text-sm leading-relaxed">
            A world where students look forward to academic challenges, build planning habits naturally, and parents stay supportive using clear, positive analytics.
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-3xl font-extrabold tracking-tight">How mytut Works</h2>
          <p className="text-sm text-zinc-550">Four simple milestones towards complete syllabus mastery.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div 
                key={idx} 
                className="bg-white dark:bg-zinc-900 border border-zinc-200/50 dark:border-zinc-800/50 rounded-3xl p-6 shadow-sm relative flex flex-col justify-between"
              >
                <div>
                  <span className="text-4xl font-extrabold bg-gradient-to-tr from-indigo-500 to-purple-650 bg-clip-text text-transparent opacity-30 select-none block mb-4">
                    {s.num}
                  </span>
                  <h3 className="font-bold text-sm sm:text-base mb-2">{s.title}</h3>
                  <p className="text-zinc-500 text-xs leading-relaxed">{s.desc}</p>
                </div>
                <div className="pt-6 flex justify-end">
                  <div className="p-2.5 bg-zinc-50 dark:bg-zinc-950 rounded-xl text-indigo-600 dark:text-indigo-400">
                    <Icon className="h-4.5 w-4.5" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Meet the Team */}
      <section className="space-y-12 bg-zinc-50 dark:bg-zinc-950 py-12 rounded-3xl p-6 sm:p-12 border border-zinc-200/10 transition-colors">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-3xl font-extrabold tracking-tight">Meet our team</h2>
          <p className="text-sm text-zinc-550">Educators, engineers, and designers dedicated to creating next-gen study tools.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {TEAM.map((t, idx) => (
            <div 
              key={idx}
              className="bg-white dark:bg-zinc-900 border border-zinc-200/50 dark:border-zinc-800/50 rounded-3xl p-6 text-center space-y-4 shadow-sm"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-650 flex items-center justify-center text-white font-bold text-xl mx-auto shadow-md">
                {t.initial}
              </div>
              <div>
                <h3 className="font-bold text-sm sm:text-base">{t.name}</h3>
                <p className="text-xs font-semibold text-indigo-650 dark:text-indigo-400">{t.role}</p>
              </div>
              <p className="text-zinc-550 dark:text-zinc-400 text-xs leading-relaxed">
                {t.bio}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Roadmap timeline */}
      <section className="space-y-12 max-w-4xl mx-auto">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-extrabold tracking-tight">Future Roadmap</h2>
          <p className="text-sm text-zinc-550">Our strategic vision and timeline for upcoming system upgrades.</p>
        </div>

        <div className="relative border-l border-indigo-100 dark:border-zinc-800 pl-6 sm:pl-8 space-y-8">
          {ROADMAP.map((r, idx) => (
            <div key={idx} className="relative">
              {/* timeline dot */}
              <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-indigo-600 ring-4 ring-white dark:ring-zinc-950 border border-white" />
              
              <div className="bg-white dark:bg-zinc-900 border border-zinc-200/50 dark:border-zinc-800/50 rounded-2xl p-5 shadow-sm space-y-1.5">
                <span className="text-xs font-bold text-indigo-650 dark:text-indigo-400 uppercase tracking-widest">{r.year}</span>
                <h3 className="font-bold text-sm sm:text-base">{r.title}</h3>
                <p className="text-zinc-550 dark:text-zinc-400 text-xs sm:text-sm leading-relaxed">{r.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA bottom block */}
      <section className="bg-gradient-to-br from-indigo-500 to-purple-650 text-white rounded-3xl p-8 sm:p-12 border border-indigo-650/20 text-center space-y-4 max-w-4xl mx-auto">
        <h3 className="text-2xl font-bold">Empower your school year</h3>
        <p className="text-xs sm:text-sm text-indigo-150 max-w-md mx-auto">
          Start planning subjects, taking 5-minute quiz cards, and register for active weekly leaderboards.
        </p>
        <div className="pt-2">
          <a 
            href="/auth/signup"
            className="inline-flex items-center space-x-1.5 px-6 py-3.5 bg-white text-indigo-650 font-bold rounded-xl shadow hover:bg-zinc-50 transition-all text-xs sm:text-sm cursor-pointer"
          >
            <span>Create Free Account</span>
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

    </div>
  );
}
