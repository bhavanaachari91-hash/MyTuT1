'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  Trophy, 
  Clock, 
  Users, 
  Award, 
  HelpCircle, 
  CheckCircle, 
  Lock, 
  ChevronRight,
  TrendingUp,
  Download,
  AlertCircle,
  ArrowLeft
} from 'lucide-react';

interface LeaderboardEntry {
  rank: number;
  name: string;
  points: number;
  school: string;
  board: 'AP State Board' | 'CBSE Board';
  badge: string;
  avatar: string;
}

const LEADERBOARD: LeaderboardEntry[] = [
  { rank: 1, name: 'Aarav Sharma', points: 980, school: 'DPS Vijayawada', board: 'AP State Board', badge: 'Einstein', avatar: 'A' },
  { rank: 2, name: 'Priya Patel', points: 940, school: 'Oakridge Visakhapatnam', board: 'CBSE Board', badge: 'Newton', avatar: 'P' },
  { rank: 3, name: 'Rohan Verma', points: 920, school: 'KV Tirupati', board: 'AP State Board', badge: 'Curie', avatar: 'R' },
  { rank: 4, name: 'Kavya Reddy', points: 890, school: 'Sri Chaitanya Guntur', board: 'CBSE Board', badge: 'Tesla', avatar: 'K' },
  { rank: 5, name: 'Sai Kumar', points: 855, school: 'Narayana Kakinada', board: 'AP State Board', badge: 'Galileo', avatar: 'S' },
  { rank: 6, name: 'Ananya Rao', points: 840, school: 'St. Joseph Nellore', board: 'CBSE Board', badge: 'Copernicus', avatar: 'A' },
];

const PREVIOUS_CONTESTS = [
  { id: '1', title: 'Math Fractions & Ratios', date: 'July 25, 2026', participants: 420, winner: 'Aarav Sharma (AP State Board)', avgScore: '78%' },
  { id: '2', title: 'Physics Light & Shadows', date: 'July 18, 2026', participants: 395, winner: 'Priya Patel (CBSE Board)', avgScore: '81%' },
  { id: '3', title: 'English Grammar Master', date: 'July 11, 2026', participants: 512, winner: 'Kavya Reddy (CBSE Board)', avgScore: '72%' },
];

const BADGES = [
  { id: 'b1', name: 'Speed Demon', desc: 'Solved 10 questions in under 2 minutes', icon: '⚡', unlocked: true },
  { id: 'b2', name: 'Math Wizard', desc: 'Scored 100% in a Geometry Contest', icon: '🔮', unlocked: true },
  { id: 'b3', name: 'Streak Legend', desc: 'Participated in 5 consecutive contests', icon: '🔥', unlocked: false },
  { id: 'b4', name: 'Perfect Score', desc: 'Answered all questions correctly', icon: '🎯', unlocked: true },
];

import { SchemaScript } from '@/lib/seo-helper';

export default function WeeklyContest() {
  const [registered, setRegistered] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ hours: 14, minutes: 32, seconds: 40 });
  const [showCertificate, setShowCertificate] = useState(false);
  const [certName, setCertName] = useState('Aarav Sharma');
  const [selectedBoard, setSelectedBoard] = useState<'All' | 'AP State Board' | 'CBSE Board'>('All');

  // Countdown timer simulation
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return { hours: 0, minutes: 0, seconds: 0 };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleRegister = () => {
    setRegistered(true);
    localStorage.setItem('mytut-contest-registered', 'true');
  };

  useEffect(() => {
    const isReg = localStorage.getItem('mytut-contest-registered');
    if (isReg === 'true') {
      setRegistered(true);
    }
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <SchemaScript pageKey="contest" />
      
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
      <div className="mb-8">
        <h1 className="text-3xl font-extrabold tracking-tight">Weekly Subject Contest</h1>
        <p className="text-sm text-zinc-550 dark:text-zinc-400 mt-1">
          Compete in live peer challenges, earn custom achievements, and top the global ranks.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* LEFT COLUMN: Live contest detail & rules & badges */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Main Contest Card */}
          <div className="bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-950 text-white rounded-3xl p-8 border border-indigo-950/20 relative overflow-hidden shadow-lg">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.05),transparent)] pointer-events-none" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl -mr-12 -mt-12" />
            
            <div className="relative z-10 space-y-6">
              
              <div className="flex justify-between items-start">
                <span className="inline-flex items-center px-3 py-1 bg-amber-500/20 text-amber-300 border border-amber-500/30 rounded-full text-xs font-bold uppercase tracking-wider">
                  Live Contest #15
                </span>
                <div className="flex items-center space-x-1.5 text-xs text-indigo-200">
                  <Users className="h-4 w-4" />
                  <span>1,420 registered</span>
                </div>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-bold">Science Trivia & Analytical Reasoning</h3>
                <p className="text-indigo-150 text-sm mt-2 leading-relaxed">
                  Focus Areas: Forces, Energy Conversions, Cell structures, and Grade 6-10 Logical deduction.
                </p>
              </div>

              {/* Timer Widget */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex justify-between items-center max-w-sm">
                <div className="flex items-center space-x-2 text-xs font-semibold text-indigo-200 uppercase tracking-widest">
                  <Clock className="h-4 w-4 text-amber-400 animate-pulse" />
                  <span>Starts in:</span>
                </div>
                <div className="flex space-x-3 text-center">
                  <div>
                    <span className="block text-xl font-bold text-amber-400">{timeLeft.hours.toString().padStart(2, '0')}</span>
                    <span className="text-[10px] text-zinc-400 uppercase">Hours</span>
                  </div>
                  <span className="text-xl font-bold text-zinc-500">:</span>
                  <div>
                    <span className="block text-xl font-bold text-amber-400">{timeLeft.minutes.toString().padStart(2, '0')}</span>
                    <span className="text-[10px] text-zinc-400 uppercase">Min</span>
                  </div>
                  <span className="text-xl font-bold text-zinc-500">:</span>
                  <div>
                    <span className="block text-xl font-bold text-amber-400">{timeLeft.seconds.toString().padStart(2, '0')}</span>
                    <span className="text-[10px] text-zinc-400 uppercase">Sec</span>
                  </div>
                </div>
              </div>

              {/* CTA Action */}
              <div className="pt-2">
                {registered ? (
                  <div className="inline-flex items-center space-x-2 bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-6 py-3.5 rounded-2xl text-sm font-semibold">
                    <CheckCircle className="h-5 w-5" />
                    <span>Registered! We'll notify you when it starts.</span>
                  </div>
                ) : (
                  <button
                    onClick={handleRegister}
                    className="px-8 py-4 bg-gradient-to-r from-amber-400 to-orange-500 text-zinc-950 font-bold rounded-2xl hover:opacity-95 shadow-md shadow-orange-550/20 flex items-center space-x-2 transition-all cursor-pointer"
                  >
                    <Trophy className="h-5 w-5 text-zinc-950" />
                    <span>Register for Weekly Battle</span>
                  </button>
                )}
              </div>

            </div>
          </div>

          {/* Rules Accordion */}
          <div className="bg-white dark:bg-zinc-900 rounded-3xl p-6 border border-zinc-200/50 dark:border-zinc-800/50 shadow-sm space-y-4">
            <h3 className="text-lg font-bold flex items-center space-x-2">
              <HelpCircle className="h-5 w-5 text-indigo-500" />
              <span>Contest Rules & Score Grading</span>
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200/20 space-y-1">
                <h4 className="font-bold text-zinc-800 dark:text-zinc-200">1. Time Allocation</h4>
                <p className="text-zinc-500 leading-relaxed">Each battle has 20 multiple choice questions to solve in 15 minutes.</p>
              </div>
              <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200/20 space-y-1">
                <h4 className="font-bold text-zinc-800 dark:text-zinc-200">2. Scoring Method</h4>
                <p className="text-zinc-500 leading-relaxed">Get 10 XP for correct answers + bonus speed marks for finishing under time.</p>
              </div>
              <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200/20 space-y-1">
                <h4 className="font-bold text-zinc-800 dark:text-zinc-200">3. Honesty Policy</h4>
                <p className="text-zinc-500 leading-relaxed">No tabs switching or external lookups. Screen lock is simulated during live runs.</p>
              </div>
              <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200/20 space-y-1">
                <h4 className="font-bold text-zinc-800 dark:text-zinc-200">4. Rank Certificates</h4>
                <p className="text-zinc-500 leading-relaxed">Score above 85% to receive printable achievement credentials.</p>
              </div>
            </div>
          </div>

          {/* Achievements / Unlocked Badges */}
          <div className="bg-white dark:bg-zinc-900 rounded-3xl p-6 border border-zinc-200/50 dark:border-zinc-800/50 shadow-sm">
            <h3 className="text-lg font-bold mb-4 flex items-center space-x-2">
              <Award className="h-5 w-5 text-indigo-500" />
              <span>Contest Achievement Badges</span>
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {BADGES.map((b) => (
                <div 
                  key={b.id}
                  className={`p-4 rounded-2xl border text-center relative overflow-hidden transition-all ${
                    b.unlocked 
                      ? 'bg-zinc-50/50 dark:bg-zinc-950/20 border-zinc-200 dark:border-zinc-800' 
                      : 'bg-zinc-100/50 dark:bg-zinc-950/10 border-zinc-200/30 dark:border-zinc-900/30 opacity-60'
                  }`}
                >
                  {!b.unlocked && (
                    <div className="absolute top-2 right-2 text-zinc-400">
                      <Lock className="h-3.5 w-3.5" />
                    </div>
                  )}
                  <div className="text-3xl mb-2">{b.icon}</div>
                  <h4 className="font-bold text-xs truncate">{b.name}</h4>
                  <p className="text-[10px] text-zinc-550 leading-tight mt-1">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN: Podium Leaderboard & Previous contests */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Podium Scoreboard */}
          <div className="bg-white dark:bg-zinc-900 rounded-3xl p-6 border border-zinc-200/50 dark:border-zinc-800/50 shadow-sm space-y-5">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-bold flex items-center space-x-2">
                <Trophy className="h-5 w-5 text-amber-500" />
                <span>Live Leaderboard</span>
              </h3>
              <span className="flex items-center space-x-1 text-xs text-indigo-600 dark:text-indigo-400 font-bold bg-indigo-50 dark:bg-indigo-950/50 px-2 py-0.5 rounded-full">
                <TrendingUp className="h-3.5 w-3.5" />
                <span>Sync active</span>
              </span>
            </div>

            {/* Board Filter Tabs */}
            <div className="flex items-center space-x-1 bg-zinc-100 dark:bg-zinc-800/60 p-1 rounded-xl text-xs font-semibold">
              {(['All', 'AP State Board', 'CBSE Board'] as const).map((b) => (
                <button
                  key={b}
                  onClick={() => setSelectedBoard(b)}
                  className={`flex-1 py-1.5 px-2 rounded-lg transition-all text-[11px] cursor-pointer ${
                    selectedBoard === b 
                      ? 'bg-white dark:bg-zinc-900 text-indigo-600 dark:text-indigo-400 shadow-sm font-extrabold'
                      : 'text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200'
                  }`}
                >
                  {b === 'All' ? 'All Boards' : b}
                </button>
              ))}
            </div>

            {/* Dynamic Filtered List */}
            {(() => {
              const list = LEADERBOARD.filter(l => selectedBoard === 'All' || l.board === selectedBoard);
              const rank1 = list[0] || LEADERBOARD[0];
              const rank2 = list[1] || LEADERBOARD[1];
              const rank3 = list[2] || LEADERBOARD[2];

              return (
                <>
                  {/* Podium Visual (Ranks 2, 1, 3) */}
                  <div className="flex items-end justify-center pt-4 pb-2 border-b border-zinc-100 dark:border-zinc-850">
                    
                    {/* Rank 2 - Silver */}
                    {rank2 && (
                      <div className="flex flex-col items-center mx-2 sm:mx-3">
                        <div className="w-10 h-10 rounded-full bg-zinc-200 flex items-center justify-center text-zinc-700 font-bold text-sm border-2 border-zinc-300 relative shadow-sm">
                          {rank2.avatar}
                          <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-zinc-400 text-[10px] text-white flex items-center justify-center font-bold">2</span>
                        </div>
                        <span className="text-xs font-bold pt-1.5 truncate max-w-[75px]">{rank2.name.split(' ')[0]}</span>
                        <span className="text-[9px] font-medium text-indigo-600 dark:text-indigo-400">{rank2.board === 'AP State Board' ? 'AP Board' : 'CBSE'}</span>
                        <span className="text-[10px] text-zinc-400 font-bold">{rank2.points} XP</span>
                        <div className="w-16 bg-gradient-to-t from-zinc-200 to-zinc-100 dark:from-zinc-800 dark:to-zinc-850 h-14 rounded-t-lg mt-2 shadow-inner" />
                      </div>
                    )}

                    {/* Rank 1 - Gold */}
                    {rank1 && (
                      <div className="flex flex-col items-center mx-2 sm:mx-3">
                        <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center text-amber-700 font-bold text-base border-2 border-amber-300 relative shadow-md">
                          {rank1.avatar}
                          <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-amber-500 text-xs text-white flex items-center justify-center font-bold animate-bounce">1</span>
                        </div>
                        <span className="text-xs font-extrabold pt-1.5 truncate max-w-[85px]">{rank1.name.split(' ')[0]}</span>
                        <span className="text-[9px] font-semibold text-indigo-600 dark:text-indigo-400">{rank1.board === 'AP State Board' ? 'AP Board' : 'CBSE'}</span>
                        <span className="text-[10px] text-amber-500 font-bold">{rank1.points} XP</span>
                        <div className="w-20 bg-gradient-to-t from-amber-400 to-amber-200 dark:from-amber-950/60 dark:to-amber-900/60 h-20 rounded-t-lg mt-2 shadow-inner" />
                      </div>
                    )}

                    {/* Rank 3 - Bronze */}
                    {rank3 && (
                      <div className="flex flex-col items-center mx-2 sm:mx-3">
                        <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-700 font-bold text-sm border-2 border-orange-200 relative shadow-sm">
                          {rank3.avatar}
                          <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-orange-500 text-[10px] text-white flex items-center justify-center font-bold">3</span>
                        </div>
                        <span className="text-xs font-bold pt-1.5 truncate max-w-[75px]">{rank3.name.split(' ')[0]}</span>
                        <span className="text-[9px] font-medium text-indigo-600 dark:text-indigo-400">{rank3.board === 'AP State Board' ? 'AP Board' : 'CBSE'}</span>
                        <span className="text-[10px] text-zinc-400 font-bold">{rank3.points} XP</span>
                        <div className="w-16 bg-gradient-to-t from-orange-200 to-orange-100 dark:from-zinc-800 dark:to-zinc-850 h-10 rounded-t-lg mt-2 shadow-inner" />
                      </div>
                    )}

                  </div>

                  {/* Rest of the board list */}
                  <div className="space-y-2.5">
                    {list.slice(3).map((lead, idx) => (
                      <div 
                        key={lead.name}
                        className="flex items-center justify-between p-3 rounded-xl bg-zinc-50 dark:bg-zinc-950/60 border border-zinc-100 dark:border-zinc-850 text-xs"
                      >
                        <div className="flex items-center space-x-3">
                          <span className="w-5 font-bold text-zinc-400 text-center">{idx + 4}</span>
                          <div className="w-7 h-7 rounded-full bg-indigo-50 dark:bg-indigo-950 flex items-center justify-center text-indigo-700 dark:text-indigo-400 font-bold">
                            {lead.avatar}
                          </div>
                          <div>
                            <h4 className="font-bold flex items-center space-x-1.5">
                              <span>{lead.name}</span>
                              <span className="text-[9px] px-1.5 py-0.2 rounded bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 font-semibold">{lead.board}</span>
                            </h4>
                            <p className="text-[10px] text-zinc-400">{lead.school}</p>
                          </div>
                        </div>
                        <span className="font-bold text-zinc-650 dark:text-zinc-300">{lead.points} XP</span>
                      </div>
                    ))}
                  </div>
                </>
              );
            })()}

          </div>

          {/* Certificate Download Panel */}
          <div className="bg-white dark:bg-zinc-900 rounded-3xl p-6 border border-zinc-200/50 dark:border-zinc-800/50 shadow-sm space-y-4">
            <h3 className="text-lg font-bold flex items-center space-x-2">
              <Award className="h-5 w-5 text-indigo-500" />
              <span>Contest Certificates</span>
            </h3>
            <p className="text-xs text-zinc-550 dark:text-zinc-400">
              Download high-fidelity official merit certificates for scoring top percentiles.
            </p>
            
            <div className="p-4 rounded-2xl bg-indigo-50/50 dark:bg-indigo-950/20 border border-indigo-150/40 flex items-center justify-between">
              <div>
                <h4 className="font-bold text-xs">Math Ratios Contest #13</h4>
                <p className="text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold mt-0.5">Scored 94% (High Honor)</p>
              </div>
              <button 
                onClick={() => setShowCertificate(true)}
                className="p-2.5 bg-white dark:bg-zinc-800 rounded-xl border border-zinc-250 dark:border-zinc-700 hover:text-indigo-650 transition-colors shadow-sm flex items-center justify-center cursor-pointer"
              >
                <Download className="h-4.5 w-4.5" />
              </button>
            </div>

            {/* Certificate Modal Mock */}
            {showCertificate && (
              <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
                <div className="bg-white text-zinc-900 max-w-2xl w-full rounded-2xl p-8 border-8 border-double border-indigo-700 space-y-6 shadow-2xl relative">
                  
                  <div className="absolute top-4 right-4">
                    <button 
                      onClick={() => setShowCertificate(false)}
                      className="p-1 rounded bg-zinc-100 hover:bg-zinc-200 text-zinc-650 text-xs font-bold"
                    >
                      Close
                    </button>
                  </div>

                  <div className="text-center space-y-3">
                    <Trophy className="h-10 w-10 text-amber-500 mx-auto" />
                    <h2 className="text-2xl font-serif font-extrabold tracking-wide uppercase text-indigo-900">Certificate of Merit</h2>
                    <p className="text-xs italic text-zinc-500">This credential certifies that</p>
                    <h3 className="text-3xl font-bold underline decoration-indigo-500 decoration-2 underline-offset-4">{certName}</h3>
                    <p className="text-xs max-w-md mx-auto text-zinc-650 leading-relaxed pt-2">
                      has successfully placed in the <span className="font-bold">Top 5% Gold Tier</span> in the weekly <span className="font-semibold text-indigo-850">Math Fractions & Ratios Challenge #13</span>, scoring 94 out of 100 on the global leaderboard.
                    </p>
                  </div>

                  <div className="flex justify-between items-end pt-8 text-[10px] text-zinc-500">
                    <div className="text-center">
                      <p className="font-bold text-zinc-800 font-serif">Mytut Review Board</p>
                      <p className="border-t border-zinc-200 pt-1 mt-1">Authorized signature</p>
                    </div>
                    <div className="text-center">
                      <p className="font-bold text-zinc-800">August 05, 2026</p>
                      <p className="border-t border-zinc-200 pt-1 mt-1">Date of issue</p>
                    </div>
                  </div>

                  <div className="text-center pt-2">
                    <button 
                      onClick={() => {
                        window.print();
                      }}
                      className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-semibold shadow flex items-center space-x-1.5 mx-auto"
                    >
                      <Download className="h-3.5 w-3.5" />
                      <span>Print Certificate</span>
                    </button>
                  </div>

                </div>
              </div>
            )}
          </div>

          {/* Previous Contest Log */}
          <div className="bg-white dark:bg-zinc-900 rounded-3xl p-6 border border-zinc-200/50 dark:border-zinc-800/50 shadow-sm space-y-4">
            <h3 className="text-lg font-bold">Previous Contest History</h3>

            <div className="space-y-3">
              {PREVIOUS_CONTESTS.map((pc) => (
                <div 
                  key={pc.id}
                  className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-950/65 border border-zinc-200/40 dark:border-zinc-850/50 flex justify-between items-center text-xs"
                >
                  <div className="space-y-1">
                    <h4 className="font-bold">{pc.title}</h4>
                    <p className="text-[10px] text-zinc-450">{pc.date} • {pc.participants} participants</p>
                  </div>
                  <div className="text-right space-y-0.5">
                    <p className="font-bold text-indigo-650 dark:text-indigo-400">Winner: {pc.winner}</p>
                    <p className="text-[10px] text-zinc-500">Average: {pc.avgScore}</p>
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
