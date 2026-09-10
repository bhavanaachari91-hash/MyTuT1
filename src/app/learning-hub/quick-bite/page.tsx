'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Zap, 
  BookOpen, 
  HelpCircle, 
  ChevronRight, 
  RotateCw, 
  Check, 
  X, 
  Star, 
  Sparkles,
  Bookmark,
  Award,
  ArrowLeft
} from 'lucide-react';

interface Flashcard {
  id: string;
  front: string;
  back: string;
  subject: string;
}

const FLASHCARDS: Flashcard[] = [
  { id: '1', subject: 'Mathematics', front: 'What is the formula for the Area of a Circle?', back: 'A = πr², where r is the radius of the circle.' },
  { id: '2', subject: 'Science', front: 'What are the three main types of subatomic particles?', back: 'Protons (positive charge), Neutrons (neutral charge), and Electrons (negative charge).' },
  { id: '3', subject: 'Social Studies', front: 'What triggered the start of World War I?', back: 'The assassination of Archduke Franz Ferdinand of Austria in June 1914.' },
  { id: '4', subject: 'Science', front: 'State Newton’s Second Law of Motion.', back: 'Force is equal to mass times acceleration (F = ma).' },
];

const FORMULAS = [
  { topic: 'Quadratic Formula', expr: 'x = [-b ± √(b² - 4ac)] / 2a', desc: 'Finds roots of ax² + bx + c = 0' },
  { topic: 'Pythagorean Theorem', expr: 'a² + b² = c²', desc: 'Relation in right-angled triangles' },
  { topic: 'Speed Formula', expr: 'Speed = Distance / Time', desc: 'Basic motion velocity measure' },
  { topic: 'Photosynthesis', expr: '6CO₂ + 6H₂O + light → C₆H₁₂O₆ + 6O₂', desc: 'Plant chemical process equation' },
];

interface QuizQuestion {
  id: string;
  q: string;
  options: string[];
  answer: number; // Index of correct option
  explanation: string;
}

const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 'q1',
    q: 'Which of the following is the value of Pi (π) rounded to four decimal places?',
    options: ['3.1412', '3.1416', '3.1420', '3.1408'],
    answer: 1,
    explanation: 'Pi is approximately 3.14159265... which rounds to 3.1416 at the 4th decimal place.'
  },
  {
    id: 'q2',
    q: 'What cell organelle is commonly referred to as the powerhouse of the cell?',
    options: ['Nucleus', 'Ribosome', 'Mitochondria', 'Golgi apparatus'],
    answer: 2,
    explanation: 'Mitochondria produce ATP (energy currency) for the cell, earning them the powerhouse title.'
  },
  {
    id: 'q3',
    q: 'Which treaty officially ended the American Revolutionary War?',
    options: ['Treaty of Versailles', 'Treaty of Paris (1783)', 'Treaty of Ghent', 'Treaty of Utrecht'],
    answer: 1,
    explanation: 'The Treaty of Paris, signed in 1783, recognized American independence from Great Britain.'
  }
];

import { SchemaScript } from '@/lib/seo-helper';

export default function QuickBite() {
  const [activeTab, setActiveTab] = useState<'flashcards' | 'quiz' | 'formulas'>('flashcards');
  const [selectedBoard, setSelectedBoard] = useState<'AP State Board' | 'CBSE Board'>('AP State Board');
  
  // Flashcards state
  const [flippedCardId, setFlippedCardId] = useState<string | null>(null);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  // Quiz state
  const [quizState, setQuizState] = useState<'start' | 'question' | 'completed'>('start');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const handleNextCard = () => {
    setFlippedCardId(null);
    setCurrentCardIndex((prev) => (prev + 1) % FLASHCARDS.length);
  };

  const handlePrevCard = () => {
    setFlippedCardId(null);
    setCurrentCardIndex((prev) => (prev - 1 + FLASHCARDS.length) % FLASHCARDS.length);
  };

  // Quiz flows
  const handleStartQuiz = () => {
    setQuizState('question');
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setIsAnswerSubmitted(false);
    setScore(0);
  };

  const handleOptionSelect = (idx: number) => {
    if (isAnswerSubmitted) return;
    setSelectedOption(idx);
  };

  const handleSubmitAnswer = () => {
    if (selectedOption === null || isAnswerSubmitted) return;
    setIsAnswerSubmitted(true);
    if (selectedOption === QUIZ_QUESTIONS[currentQuestionIndex].answer) {
      setScore(prev => prev + 1);
    }
  };

  const handleNextQuestion = () => {
    setSelectedOption(null);
    setIsAnswerSubmitted(false);
    if (currentQuestionIndex < QUIZ_QUESTIONS.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      setQuizState('completed');
      // Save completion to local logs
      const completedCount = Number(localStorage.getItem('mytut-bites-completed') || '0');
      localStorage.setItem('mytut-bites-completed', String(completedCount + 1));
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <SchemaScript pageKey="quickBite" />
      
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
      <div className="mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <div className="flex items-center space-x-2 mb-1">
            <h1 className="text-3xl font-extrabold tracking-tight">Quick Bite Learning</h1>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800">
              {selectedBoard}
            </span>
          </div>
          <p className="text-sm text-zinc-550 dark:text-zinc-400">
            Master complicated topics and revise core syllabi in 5-minute segments.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          {/* Board Selector */}
          <div className="flex bg-zinc-150 dark:bg-zinc-850 p-1 rounded-2xl border border-zinc-200/10">
            {(['AP State Board', 'CBSE Board'] as const).map((b) => (
              <button
                key={b}
                onClick={() => setSelectedBoard(b)}
                className={`px-3 py-1.5 text-xs font-bold rounded-xl transition-all cursor-pointer ${
                  selectedBoard === b 
                    ? 'bg-indigo-650 text-white shadow-sm'
                    : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-850'
                }`}
              >
                {b}
              </button>
            ))}
          </div>

          {/* Tab Selection */}
          <div className="flex bg-zinc-150 dark:bg-zinc-850 p-1 rounded-2xl border border-zinc-200/10">
            {(['flashcards', 'quiz', 'formulas'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-1.5 text-xs sm:text-sm font-semibold rounded-xl capitalize transition-all cursor-pointer ${
                  activeTab === tab 
                    ? 'bg-white dark:bg-zinc-700 text-indigo-650 dark:text-white shadow-sm'
                    : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-850'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* LEFT COLUMN: Main Feature Panel */}
        <div className="lg:col-span-8">
          
          {/* FLASHCARDS TAB */}
          {activeTab === 'flashcards' && (
            <div className="space-y-6">
              
              <div className="bg-white dark:bg-zinc-900 rounded-3xl p-6 border border-zinc-200/50 dark:border-zinc-800/50 shadow-sm">
                <div className="flex justify-between items-center mb-6">
                  <span className="px-3 py-1 bg-indigo-50 dark:bg-indigo-950/50 text-indigo-650 dark:text-indigo-400 text-xs font-bold rounded-full">
                    {FLASHCARDS[currentCardIndex].subject}
                  </span>
                  <span className="text-xs text-zinc-450 font-bold">
                    Card {currentCardIndex + 1} of {FLASHCARDS.length}
                  </span>
                </div>

                {/* Flip Card Container */}
                <div className="flex justify-center items-center py-6">
                  <div 
                    onClick={() => setFlippedCardId(flippedCardId === FLASHCARDS[currentCardIndex].id ? null : FLASHCARDS[currentCardIndex].id)}
                    className="flip-card w-full max-w-[500px] h-[280px] cursor-pointer"
                  >
                    <div className={`flip-card-inner rounded-3xl border border-zinc-200/60 dark:border-zinc-800/80 shadow-md ${
                      flippedCardId === FLASHCARDS[currentCardIndex].id ? 'flip-card-flipped' : ''
                    }`}>
                      
                      {/* Front Card */}
                      <div className="flip-card-front bg-gradient-to-br from-white to-zinc-50 dark:from-zinc-900 dark:to-zinc-950 p-8">
                        <Bookmark className="h-6 w-6 text-indigo-500 mb-4" />
                        <p className="text-base sm:text-lg font-bold text-center">
                          {FLASHCARDS[currentCardIndex].front}
                        </p>
                        <span className="mt-8 text-xs font-semibold text-zinc-450 flex items-center space-x-1.5 hover:text-indigo-600 transition-colors">
                          <RotateCw className="h-4 w-4 animate-spin-slow" />
                          <span>Tap to flip and check answer</span>
                        </span>
                      </div>

                      {/* Back Card */}
                      <div className="flip-card-back bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/20 dark:to-purple-950/20 p-8">
                        <Sparkles className="h-6 w-6 text-amber-500 mb-4 animate-pulse" />
                        <p className="text-sm sm:text-base font-medium text-center leading-relaxed text-indigo-900 dark:text-indigo-200">
                          {FLASHCARDS[currentCardIndex].back}
                        </p>
                        <span className="mt-8 text-xs font-semibold text-zinc-455">
                          Tap again to return
                        </span>
                      </div>

                    </div>
                  </div>
                </div>

                {/* Controls */}
                <div className="flex justify-between items-center mt-6 pt-4 border-t border-zinc-100 dark:border-zinc-850">
                  <button 
                    onClick={handlePrevCard}
                    className="px-5 py-2.5 bg-zinc-50 dark:bg-zinc-855 hover:bg-zinc-100 text-zinc-700 dark:text-zinc-200 text-sm font-semibold rounded-xl border border-zinc-200/50 dark:border-zinc-800 transition-colors cursor-pointer"
                  >
                    Previous
                  </button>
                  <button 
                    onClick={handleNextCard}
                    className="px-5 py-2.5 bg-indigo-650 hover:bg-indigo-700 text-white text-sm font-semibold rounded-xl transition-colors cursor-pointer"
                  >
                    Next Card
                  </button>
                </div>

              </div>

            </div>
          )}

          {/* QUIZ TAB */}
          {activeTab === 'quiz' && (
            <div className="bg-white dark:bg-zinc-900 rounded-3xl p-8 border border-zinc-200/50 dark:border-zinc-800/50 shadow-sm min-h-[380px] flex flex-col justify-between">
              
              {quizState === 'start' && (
                <div className="text-center py-10 space-y-6 max-w-md mx-auto my-auto">
                  <div className="w-16 h-16 bg-gradient-to-tr from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center text-white mx-auto shadow-md">
                    <HelpCircle className="h-8 w-8 text-zinc-950" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold">Daily Mini Quiz</h3>
                    <p className="text-zinc-500 text-sm leading-relaxed">
                      Test your intelligence with today’s quick 3-question MCQ stack. Earn +50 XP for a perfect score!
                    </p>
                  </div>
                  <button
                    onClick={handleStartQuiz}
                    className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-bold transition-all shadow cursor-pointer"
                  >
                    Start Daily Quiz
                  </button>
                </div>
              )}

              {quizState === 'question' && (
                <div className="space-y-6 flex-1 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center text-xs font-semibold text-zinc-400">
                      <span>Subject: General Science & Logic</span>
                      <span>Question {currentQuestionIndex + 1} of {QUIZ_QUESTIONS.length}</span>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold">
                      {QUIZ_QUESTIONS[currentQuestionIndex].q}
                    </h3>
                    
                    {/* MCQ Options */}
                    <div className="space-y-3 pt-2">
                      {QUIZ_QUESTIONS[currentQuestionIndex].options.map((opt, oIdx) => {
                        const isSelected = selectedOption === oIdx;
                        const isCorrect = QUIZ_QUESTIONS[currentQuestionIndex].answer === oIdx;
                        
                        let optStyle = 'border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-850 bg-white dark:bg-zinc-900';
                        if (isSelected) optStyle = 'border-indigo-600 bg-indigo-50/20 dark:bg-indigo-950/20 dark:border-indigo-500';
                        if (isAnswerSubmitted) {
                          if (isCorrect) {
                            optStyle = 'border-emerald-500 bg-emerald-50/25 dark:bg-emerald-950/20 dark:border-emerald-600 text-emerald-700 dark:text-emerald-400';
                          } else if (isSelected) {
                            optStyle = 'border-rose-500 bg-rose-50/25 dark:bg-rose-950/20 dark:border-rose-600 text-rose-700 dark:text-rose-450';
                          } else {
                            optStyle = 'border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 opacity-50';
                          }
                        }

                        return (
                          <button
                            key={oIdx}
                            onClick={() => handleOptionSelect(oIdx)}
                            disabled={isAnswerSubmitted}
                            className={`w-full p-4 rounded-2xl border text-left text-sm font-semibold transition-all flex items-center justify-between cursor-pointer ${optStyle}`}
                          >
                            <span>{opt}</span>
                            {isAnswerSubmitted && isCorrect && <Check className="h-4.5 w-4.5 text-emerald-600 shrink-0 ml-2" />}
                            {isAnswerSubmitted && isSelected && !isCorrect && <X className="h-4.5 w-4.5 text-rose-600 shrink-0 ml-2" />}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Submission and Explanations */}
                  <div className="pt-6 border-t border-zinc-100 dark:border-zinc-850 mt-6 space-y-4">
                    {isAnswerSubmitted && (
                      <p className="text-xs text-zinc-500 bg-zinc-50 dark:bg-zinc-950 p-4 rounded-xl leading-relaxed border border-zinc-200/10">
                        <span className="font-bold text-indigo-650 dark:text-indigo-400 uppercase tracking-widest block mb-1">Explanation</span>
                        {QUIZ_QUESTIONS[currentQuestionIndex].explanation}
                      </p>
                    )}

                    <div className="flex justify-end">
                      {!isAnswerSubmitted ? (
                        <button
                          onClick={handleSubmitAnswer}
                          disabled={selectedOption === null}
                          className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white rounded-xl text-sm font-semibold shadow transition-all cursor-pointer"
                        >
                          Submit Answer
                        </button>
                      ) : (
                        <button
                          onClick={handleNextQuestion}
                          className="px-6 py-3 bg-indigo-650 hover:bg-indigo-700 text-white rounded-xl text-sm font-semibold shadow transition-all flex items-center space-x-1.5 cursor-pointer"
                        >
                          <span>{currentQuestionIndex === QUIZ_QUESTIONS.length - 1 ? 'Finish Quiz' : 'Next Question'}</span>
                          <ChevronRight className="h-4.5 w-4.5" />
                        </button>
                      )}
                    </div>
                  </div>

                </div>
              )}

              {quizState === 'completed' && (
                <div className="text-center py-10 space-y-6 max-w-md mx-auto my-auto">
                  <div className="w-16 h-16 bg-gradient-to-tr from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center text-white mx-auto shadow-md">
                    <Award className="h-8 w-8" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold">Daily Quiz Cleared!</h3>
                    <p className="text-zinc-500 text-sm leading-relaxed">
                      You scored <span className="font-bold text-indigo-650 dark:text-indigo-400">{score} out of {QUIZ_QUESTIONS.length}</span> correct answers. 
                      {score === QUIZ_QUESTIONS.length ? ' Incredible! Perfect XP streak unlocked (+50 XP).' : ' Good effort! Practice makes perfect.'}
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <button
                      onClick={handleStartQuiz}
                      className="w-1/2 py-3 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-350 rounded-xl text-sm font-semibold transition-colors"
                    >
                      Retry Quiz
                    </button>
                    <button
                      onClick={() => setActiveTab('flashcards')}
                      className="w-1/2 py-3 bg-indigo-650 hover:bg-indigo-700 text-white rounded-xl text-sm font-semibold transition-colors cursor-pointer"
                    >
                      Study Flashcards
                    </button>
                  </div>
                </div>
              )}

            </div>
          )}

          {/* FORMULAS TAB */}
          {activeTab === 'formulas' && (
            <div className="bg-white dark:bg-zinc-900 rounded-3xl p-6 border border-zinc-200/50 dark:border-zinc-800/50 shadow-sm space-y-6">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-bold">Essential Formula Cards</h3>
                <span className="text-xs text-zinc-400">Class 6–10 Mathematics & Physics</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {FORMULAS.map((f, i) => (
                  <div 
                    key={i} 
                    className="p-5 rounded-2xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200/60 dark:border-zinc-850/80 space-y-3 flex flex-col justify-between"
                  >
                    <div>
                      <h4 className="font-bold text-xs text-indigo-650 dark:text-indigo-400 uppercase tracking-widest">{f.topic}</h4>
                      <p className="text-sm font-medium text-zinc-650 mt-1.5">{f.desc}</p>
                    </div>
                    <div className="bg-white dark:bg-zinc-900 p-3 rounded-xl border border-zinc-150/40 text-center font-mono text-xs font-bold text-zinc-900 dark:text-indigo-300">
                      {f.expr}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* RIGHT COLUMN: Daily Study Tip & Quick Stats */}
        <div className="lg:col-span-4 space-y-6">
          
          {/* Daily Tip Widget */}
          <div className="bg-gradient-to-br from-indigo-600 to-purple-650 text-white rounded-3xl p-6 border border-indigo-650/20 shadow-md relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full blur-2xl -mr-6 -mt-6" />
            <div className="relative z-10 space-y-4">
              <div className="flex items-center space-x-1 text-indigo-200 font-semibold text-xs uppercase tracking-wider">
                <Zap className="h-4 w-4 text-amber-300" />
                <span>Tip of the day</span>
              </div>
              <h4 className="font-bold text-sm">Use the Pomodoro Technique</h4>
              <p className="text-xs text-indigo-150 leading-relaxed">
                Study with complete focus for 25 minutes, then take a short 5-minute break. Repeat this cycle 4 times, then take a longer 20-minute break. This keeps mental fatigue low!
              </p>
            </div>
          </div>

          {/* Quick Bites stats summary */}
          <div className="bg-white dark:bg-zinc-900 rounded-3xl p-6 border border-zinc-200/50 dark:border-zinc-800/50 shadow-sm space-y-4">
            <h3 className="text-base font-bold">Your Micro-Learning Metrics</h3>
            
            <div className="space-y-3.5 text-xs">
              <div className="flex justify-between items-center p-3 rounded-xl bg-zinc-50 dark:bg-zinc-950/65 border border-zinc-200/30">
                <span className="text-zinc-550">Quizzes Completed</span>
                <span className="font-bold text-indigo-650 dark:text-indigo-400">2 Active</span>
              </div>
              <div className="flex justify-between items-center p-3 rounded-xl bg-zinc-50 dark:bg-zinc-950/65 border border-zinc-200/30">
                <span className="text-zinc-550">Flashcard Flips</span>
                <span className="font-bold text-emerald-600 dark:text-emerald-400">12 Reviewed</span>
              </div>
              <div className="flex justify-between items-center p-3 rounded-xl bg-zinc-50 dark:bg-zinc-950/65 border border-zinc-200/30">
                <span className="text-zinc-550">Formula Cards Read</span>
                <span className="font-bold text-amber-500">6 Saved</span>
              </div>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
