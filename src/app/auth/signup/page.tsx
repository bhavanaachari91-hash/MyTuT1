'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import { 
  Mail, 
  Lock, 
  User, 
  ArrowRight, 
  AlertCircle
} from 'lucide-react';

import Logo from '@/components/ui/Logo';

const CLASSES = ['Class 6', 'Class 7', 'Class 8', 'Class 9', 'Class 10'];
const BOARDS = ['AP State Board', 'CBSE Board'];

export default function SignUp() {
  const router = useRouter();
  const { signUp } = useAuth();

  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState<'student' | 'parent'>('student');
  const [board, setBoard] = useState('AP State Board');
  const [extraInfo, setExtraInfo] = useState('Class 8'); // Hold child name or class levels
  
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const profile = await signUp(email, password, displayName, role, extraInfo, board);
      if (profile.role === 'parent') {
        router.push('/learning-hub/parent');
      } else {
        router.push('/learning-hub');
      }
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : 'An error occurred during registration.';
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[85vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-indigo-50/30 to-transparent dark:from-indigo-950/10">
      
      <div className="max-w-md w-full space-y-8 bg-white dark:bg-zinc-900 border border-zinc-200/50 dark:border-zinc-800/50 p-8 rounded-3xl shadow-xl animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="text-center">
          <Link href="/" className="inline-flex items-center space-x-2 group">
            <Logo size={56} />
          </Link>
          <h2 className="mt-6 text-2xl font-extrabold tracking-tight">Create your learning account</h2>
          <p className="mt-1.5 text-xs text-zinc-550">
            Sign up to unlock planners, bite-sized revision notes, and leaderboard XP.
          </p>
        </div>

        {/* Error info */}
        {error && (
          <div className="p-4 rounded-xl bg-rose-50 dark:bg-rose-950/20 border border-rose-150/35 flex items-start space-x-2 text-xs text-rose-600 dark:text-rose-400">
            <AlertCircle className="h-4.5 w-4.5 shrink-0 mt-0.5" />
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleSignUp} className="space-y-4">
          
          <div>
            <label className="block text-xs font-bold text-zinc-550 dark:text-zinc-400 uppercase tracking-wider mb-1.5 font-semibold">Display name</label>
            <div className="relative">
              <User className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400" />
              <input
                type="text"
                required
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                placeholder="e.g. Alex Carter"
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-zinc-250 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950/50 text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-zinc-550 dark:text-zinc-400 uppercase tracking-wider mb-1.5 font-semibold">Email address</label>
            <div className="relative">
              <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@email.com"
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-zinc-250 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950/50 text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-zinc-550 dark:text-zinc-400 uppercase tracking-wider mb-1.5 font-semibold">Password</label>
            <div className="relative">
              <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Minimum 6 characters"
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-zinc-250 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950/50 text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
            </div>
          </div>

          {/* Education Board selection */}
          <div>
            <label className="block text-xs font-bold text-zinc-550 dark:text-zinc-400 uppercase tracking-wider mb-1.5 font-semibold">Education Board</label>
            <select
              value={board}
              onChange={(e) => setBoard(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-250 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950/50 text-sm focus:outline-none font-medium"
            >
              {BOARDS.map((b, i) => (
                <option key={i} value={b}>{b}</option>
              ))}
            </select>
          </div>

          {/* Role select */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-zinc-550 dark:text-zinc-400 uppercase tracking-wider mb-1.5 font-semibold font-semibold">Account Role</label>
              <select
                value={role}
                onChange={(e) => {
                  const selectedRole = e.target.value as 'student' | 'parent';
                  setRole(selectedRole);
                  setExtraInfo(selectedRole === 'student' ? 'Class 8' : '');
                }}
                className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-250 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950/50 text-sm focus:outline-none font-medium"
              >
                <option value="student">Student</option>
                <option value="parent">Parent</option>
              </select>
            </div>

            {/* Dynamic Class level vs Child name */}
            <div>
              {role === 'student' ? (
                <>
                  <label className="block text-xs font-bold text-zinc-550 dark:text-zinc-400 uppercase tracking-wider mb-1.5 font-semibold font-semibold">Class Level</label>
                  <select
                    value={extraInfo}
                    onChange={(e) => setExtraInfo(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-250 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950/50 text-sm focus:outline-none font-medium"
                  >
                    {CLASSES.map((cls, i) => (
                      <option key={i} value={cls}>{cls}</option>
                    ))}
                  </select>
                </>
              ) : (
                <>
                  <label className="block text-xs font-bold text-zinc-550 dark:text-zinc-400 uppercase tracking-wider mb-1.5 font-semibold font-semibold">Child Name</label>
                  <input
                    type="text"
                    required
                    value={extraInfo}
                    onChange={(e) => setExtraInfo(e.target.value)}
                    placeholder="Alex Carter"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-250 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950/50 text-sm focus:outline-none font-semibold"
                  />
                </>
              )}
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-indigo-650 hover:bg-indigo-700 disabled:opacity-50 text-white rounded-xl text-sm font-semibold transition-all shadow flex items-center justify-center space-x-1.5 cursor-pointer"
          >
            {loading ? <span>Creating account...</span> : (
              <>
                <span>Sign Up</span>
                <ArrowRight className="h-4 w-4" />
              </>
            )}
          </button>
        </form>

        <div className="text-center pt-2 border-t border-zinc-100 dark:border-zinc-850">
          <p className="text-xs text-zinc-455">
            Already have an account?{' '}
            <Link href="/auth/signin" className="font-bold text-indigo-650 dark:text-indigo-400 hover:underline">
              Sign In
            </Link>
          </p>
        </div>

      </div>

    </div>
  );
}
