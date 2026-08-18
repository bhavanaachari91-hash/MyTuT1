'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import { 
  Mail, 
  Lock, 
  ArrowRight, 
  AlertCircle,
  Sparkles,
  User,
  Users
} from 'lucide-react';

import Logo from '@/components/ui/Logo';

export default function SignIn() {
  const router = useRouter();
  const { signIn } = useAuth();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const profile = await signIn(email, password);
      // Route based on role
      if (profile.role === 'parent') {
        router.push('/learning-hub/parent');
      } else {
        router.push('/learning-hub');
      }
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to sign in. Please check your credentials.';
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  // Quick fill logins for reviewer ease
  const handleQuickFill = (role: 'student' | 'parent') => {
    setError(null);
    if (role === 'student') {
      setEmail('student@mytut.com');
      setPassword('password123');
    } else {
      setEmail('parent@mytut.com');
      setPassword('password123');
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-indigo-50/30 to-transparent dark:from-indigo-950/10">
      
      <div className="max-w-md w-full space-y-8 bg-white dark:bg-zinc-900 border border-zinc-200/50 dark:border-zinc-800/50 p-8 rounded-3xl shadow-xl">
        
        {/* Header */}
        <div className="text-center">
          <Link href="/" className="inline-flex items-center space-x-2 group">
            <Logo size={56} />
          </Link>
          <h2 className="mt-6 text-2xl font-extrabold tracking-tight">Sign in to your workspace</h2>
          <p className="mt-1.5 text-xs text-zinc-500">
            Welcome back! Enter credentials or use the mock helpers below.
          </p>
        </div>

        {/* Error notification */}
        {error && (
          <div className="p-4 rounded-xl bg-rose-50 dark:bg-rose-950/20 border border-rose-150/35 flex items-start space-x-2 text-xs text-rose-600 dark:text-rose-400">
            <AlertCircle className="h-4.5 w-4.5 shrink-0 mt-0.5" />
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleSignIn} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-zinc-550 dark:text-zinc-400 uppercase tracking-wider mb-1.5">Email address</label>
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
            <label className="block text-xs font-bold text-zinc-550 dark:text-zinc-400 uppercase tracking-wider mb-1.5">Password</label>
            <div className="relative">
              <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-zinc-250 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950/50 text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-indigo-650 hover:bg-indigo-700 disabled:opacity-50 text-white rounded-xl text-sm font-semibold transition-all shadow-sm flex items-center justify-center space-x-1.5 cursor-pointer"
          >
            {loading ? <span>Verifying...</span> : (
              <>
                <span>Sign In</span>
                <ArrowRight className="h-4 w-4" />
              </>
            )}
          </button>
        </form>

        {/* Quick Review Buttons */}
        <div className="pt-6 border-t border-zinc-100 dark:border-zinc-850 space-y-3">
          <div className="flex items-center space-x-1.5 text-xs text-zinc-450 font-bold uppercase tracking-wider">
            <Sparkles className="h-3.5 w-3.5 text-amber-500" />
            <span>Developer Review Shortcuts</span>
          </div>

          <div className="grid grid-cols-2 gap-3 text-xs">
            <button
              onClick={() => handleQuickFill('student')}
              className="py-2.5 px-3 border border-zinc-200 dark:border-zinc-800 rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-850 text-zinc-650 flex items-center justify-center space-x-1.5 font-bold cursor-pointer"
            >
              <User className="h-3.5 w-3.5 text-indigo-550" />
              <span>Mock Student</span>
            </button>
            <button
              onClick={() => handleQuickFill('parent')}
              className="py-2.5 px-3 border border-zinc-200 dark:border-zinc-800 rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-850 text-zinc-650 flex items-center justify-center space-x-1.5 font-bold cursor-pointer"
            >
              <Users className="h-3.5 w-3.5 text-emerald-550" />
              <span>Mock Parent</span>
            </button>
          </div>
        </div>

        <div className="text-center pt-2">
          <p className="text-xs text-zinc-455">
            Don&apos;t have an account?{' '}
            <Link href="/auth/signup" className="font-bold text-indigo-650 dark:text-indigo-400 hover:underline">
              Sign Up
            </Link>
          </p>
        </div>

      </div>

    </div>
  );
}
