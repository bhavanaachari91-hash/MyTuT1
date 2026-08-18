'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  Swords, 
  Trophy, 
  Zap, 
  Clock, 
  CheckCircle2, 
  XCircle, 
  ArrowLeft, 
  Sparkles, 
  RotateCcw, 
  ShieldCheck, 
  Award,
  Users,
  Flame,
  Search,
  BookOpen
} from 'lucide-react';

interface Question {
  id: number;
  subject: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

const BATTLE_QUESTIONS: Record<string, Question[]> = {
  Mathematics: [
    {
      id: 1,
      subject: 'Mathematics',
      question: 'What is the value of x in the equation 3x + 12 = 36?',
      options: ['6', '8', '10', '12'],
      correctIndex: 1,
      explanation: 'Subtract 12 from both sides (3x = 24), then divide by 3 (x = 8).'
    },
    {
      id: 2,
      subject: 'Mathematics',
      question: 'If a triangle has angles 50° and 60°, what is the third angle?',
      options: ['60°', '70°', '80°', '90°'],
      correctIndex: 1,
      explanation: 'The sum of angles in a triangle is 180°. 180 - (50 + 60) = 70°.'
    },
    {
      id: 3,
      subject: 'Mathematics',
      question: 'What is the square root of 225?',
      options: ['13', '14', '15', '16'],
      correctIndex: 2,
      explanation: '15 × 15 = 225.'
    },
    {
      id: 4,
      subject: 'Mathematics',
      question: 'Calculate the perimeter of a rectangle with length 12cm and width 7cm.',
      options: ['19 cm', '38 cm', '84 cm', '42 cm'],
      correctIndex: 1,
      explanation: 'Perimeter = 2 × (length + width) = 2 × (12 + 7) = 38 cm.'
    },
    {
      id: 5,
      subject: 'Mathematics',
      question: 'What is 15% of 400?',
      options: ['40', '50', '60', '70'],
      correctIndex: 2,
      explanation: '(15 / 100) × 400 = 60.'
    }
  ],
  Science: [
    {
      id: 1,
      subject: 'Science',
      question: 'Which gas is predominantly responsible for photosynthesis in plants?',
      options: ['Oxygen', 'Carbon Dioxide', 'Nitrogen', 'Hydrogen'],
      correctIndex: 1,
      explanation: 'Plants absorb Carbon Dioxide during photosynthesis to produce glucose and oxygen.'
    },
    {
      id: 2,
      subject: 'Science',
      question: 'What is the chemical symbol for Gold?',
      options: ['Ag', 'Fe', 'Au', 'Gd'],
      correctIndex: 2,
      explanation: 'Au comes from the Latin word "Aurum".'
    },
    {
      id: 3,
      subject: 'Science',
      question: 'Which organ in the human body produces insulin?',
      options: ['Liver', 'Kidney', 'Pancreas', 'Stomach'],
      correctIndex: 2,
      explanation: 'The Pancreas contains beta cells that secrete insulin to regulate blood sugar.'
    },
    {
      id: 4,
      subject: 'Science',
      question: 'What is the speed of light in a vacuum approximately?',
      options: ['3 × 10^8 m/s', '3 × 10^6 m/s', '1.5 × 10^8 m/s', '3 × 10^5 m/s'],
      correctIndex: 0,
      explanation: 'The speed of light in vacuum is approximately 300,000,000 meters per second.'
    },
    {
      id: 5,
      subject: 'Science',
      question: 'Which unit is used to measure electrical resistance?',
      options: ['Volt', 'Ampere', 'Watt', 'Ohm'],
      correctIndex: 3,
      explanation: 'Resistance is measured in Ohms (Ω), named after Georg Simon Ohm.'
    }
  ],
  'Social Studies': [
    {
      id: 1,
      subject: 'Social Studies',
      question: 'Who was the first President of Independent India?',
      options: ['Dr. B.R. Ambedkar', 'Dr. Rajendra Prasad', 'Jawaharlal Nehru', 'Sardar Patel'],
      correctIndex: 1,
      explanation: 'Dr. Rajendra Prasad served as the first President of India from 1950 to 1962.'
    },
    {
      id: 2,
      subject: 'Social Studies',
      question: 'Which is the longest river in India?',
      options: ['Yamuna', 'Godavari', 'Ganga', 'Brahmaputra'],
      correctIndex: 2,
      explanation: 'The Ganga is the longest river flowing within India at 2,525 km.'
    },
    {
      id: 3,
      subject: 'Social Studies',
      question: 'Which layer of the atmosphere contains the Ozone layer?',
      options: ['Troposphere', 'Stratosphere', 'Mesosphere', 'Thermosphere'],
      correctIndex: 1,
      explanation: 'The Stratosphere contains the Ozone layer which absorbs harmful solar UV radiation.'
    },
    {
      id: 4,
      subject: 'Social Studies',
      question: 'In which year did the Dandi March (Salt Satyagraha) take place?',
      options: ['1920', '1930', '1942', '1947'],
      correctIndex: 1,
      explanation: 'Mahatma Gandhi led the Dandi March from March 12 to April 6, 1930.'
    },
    {
      id: 5,
      subject: 'Social Studies',
      question: 'Which organ of the UN is responsible for maintaining international peace?',
      options: ['General Assembly', 'Security Council', 'Secretariat', 'ECOSOC'],
      correctIndex: 1,
      explanation: 'The UN Security Council (UNSC) has primary responsibility for international peace.'
    }
  ]
};

const OPPONENTS = [
  { name: 'Rahul Sharma', school: 'Delhi Public School', avatar: 'R', rating: 1420 },
  { name: 'Ananya Verma', school: 'Kendriya Vidyalaya', avatar: 'A', rating: 1510 },
  { name: 'Karthik Rao', school: 'State Model High School', avatar: 'K', rating: 1380 },
  { name: 'Priya Patel', school: 'National Public School', avatar: 'P', rating: 1460 }
];

export default function BattlePage() {
  const [selectedSubject, setSelectedSubject] = useState<string>('Mathematics');
  const [gameState, setGameState] = useState<'lobby' | 'matching' | 'playing' | 'result'>('lobby');
  const [opponent, setOpponent] = useState(OPPONENTS[0]);
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [userScore, setUserScore] = useState(0);
  const [opponentScore, setOpponentScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [timer, setTimer] = useState(15);
  const [userStreak, setUserStreak] = useState(0);
  const [battleXP, setBattleXP] = useState(0);

  const questions = BATTLE_QUESTIONS[selectedSubject] || BATTLE_QUESTIONS['Mathematics'];
  const currentQuestion = questions[currentQIndex];

  // Matchmaking simulation
  const startMatchmaking = () => {
    setGameState('matching');
    const randomOpp = OPPONENTS[Math.floor(Math.random() * OPPONENTS.length)];
    setOpponent(randomOpp);

    setTimeout(() => {
      setGameState('playing');
      setCurrentQIndex(0);
      setUserScore(0);
      setOpponentScore(0);
      setSelectedOption(null);
      setTimer(15);
    }, 2500);
  };

  // Question Timer Countdown
  useEffect(() => {
    if (gameState !== 'playing') return;

    if (timer <= 0) {
      handleNextQuestion(false);
      return;
    }

    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timer, gameState]);

  // Handle Option Selection
  const handleSelectOption = (idx: number) => {
    if (selectedOption !== null) return; // Prevent double clicking
    setSelectedOption(idx);

    const isCorrect = idx === currentQuestion.correctIndex;
    let earnedPoints = 0;

    if (isCorrect) {
      earnedPoints = 100 + timer * 5; // Speed bonus
      setUserScore((prev) => prev + earnedPoints);
      setUserStreak((prev) => prev + 1);
    } else {
      setUserStreak(0);
    }

    // Simulate opponent answer
    const oppIsCorrect = Math.random() > 0.3;
    if (oppIsCorrect) {
      const oppPoints = 100 + Math.floor(Math.random() * 10) * 5;
      setOpponentScore((prev) => prev + oppPoints);
    }

    setTimeout(() => {
      handleNextQuestion(isCorrect);
    }, 1500);
  };

  const handleNextQuestion = (userAnsweredCorrectly: boolean) => {
    if (currentQIndex + 1 < questions.length) {
      setCurrentQIndex((prev) => prev + 1);
      setSelectedOption(null);
      setTimer(15);
    } else {
      // Calculate final XP
      const finalXP = userScore > opponentScore ? 150 : 50;
      setBattleXP(finalXP);
      setGameState('result');
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      
      {/* Top Navigation */}
      <div className="flex justify-between items-center mb-8">
        <Link 
          href="/learning-hub"
          className="flex items-center space-x-2 text-sm font-semibold text-zinc-600 dark:text-zinc-400 hover:text-indigo-600 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Learning Hub</span>
        </Link>

        <div className="flex items-center space-x-4 text-xs font-bold">
          <span className="flex items-center space-x-1 px-3 py-1.5 bg-amber-50 dark:bg-amber-950/50 text-amber-600 dark:text-amber-400 rounded-full border border-amber-200 dark:border-amber-900">
            <Flame className="h-4 w-4 text-amber-500 fill-amber-500" />
            <span>Streak: {userStreak} Battles</span>
          </span>

          <span className="flex items-center space-x-1 px-3 py-1.5 bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 rounded-full border border-indigo-200 dark:border-indigo-900">
            <Award className="h-4 w-4" />
            <span>1,450 ELO Rating</span>
          </span>
        </div>
      </div>

      {/* LOBBY VIEW */}
      {gameState === 'lobby' && (
        <div className="space-y-8 animate-in fade-in duration-300">
          
          {/* Header Banner */}
          <div className="bg-gradient-to-r from-indigo-900 via-purple-900 to-zinc-950 text-white rounded-3xl p-8 sm:p-12 shadow-xl border border-indigo-800/40 relative overflow-hidden text-center space-y-4">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-white/10 rounded-full text-xs font-semibold text-indigo-200">
              <Swords className="h-4 w-4 text-amber-400" />
              <span>Real-Time Head-to-Head Arena</span>
            </div>
            
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              1-on-1 Academic Battle
            </h1>
            <p className="text-sm sm:text-base text-indigo-150 max-w-xl mx-auto leading-relaxed">
              Challenge fellow Class 6 to 10 students across the country in 5 rapid-fire questions. Test your speed, accuracy, and climb the leaderboard!
            </p>

            <div className="pt-4 flex justify-center items-center space-x-6 text-xs text-indigo-200">
              <span className="flex items-center space-x-1.5">
                <Users className="h-4 w-4 text-emerald-400" />
                <span>1,248 Students Online</span>
              </span>
              <span>•</span>
              <span className="flex items-center space-x-1.5">
                <Zap className="h-4 w-4 text-amber-400" />
                <span>15s Rapid Speed Rounds</span>
              </span>
            </div>
          </div>

          {/* Subject Selection */}
          <div className="space-y-4 max-w-3xl mx-auto">
            <h2 className="text-xl font-bold text-center">Choose Battle Arena Subject</h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {['Mathematics', 'Science', 'Social Studies'].map((sub) => (
                <button
                  key={sub}
                  onClick={() => setSelectedSubject(sub)}
                  className={`p-6 rounded-3xl border text-left transition-all cursor-pointer space-y-2 ${
                    selectedSubject === sub
                      ? 'bg-indigo-600 text-white border-indigo-650 shadow-md scale-[1.02]'
                      : 'bg-white dark:bg-zinc-900 border-zinc-200/80 dark:border-zinc-800 hover:border-indigo-400'
                  }`}
                >
                  <BookOpen className={`h-6 w-6 ${selectedSubject === sub ? 'text-white' : 'text-indigo-600'}`} />
                  <h3 className="font-bold text-base">{sub}</h3>
                  <p className={`text-xs ${selectedSubject === sub ? 'text-indigo-100' : 'text-zinc-500'}`}>
                    5 Rapid Questions • Class 6-10
                  </p>
                </button>
              ))}
            </div>

            {/* Launch Matchmaking Button */}
            <div className="pt-6 text-center">
              <button
                onClick={startMatchmaking}
                className="px-10 py-4 bg-gradient-to-r from-indigo-600 via-purple-650 to-indigo-700 text-white font-extrabold rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all text-base flex items-center space-x-3 mx-auto cursor-pointer"
              >
                <Swords className="h-5 w-5" />
                <span>Find Live 1-on-1 Opponent</span>
              </button>
            </div>
          </div>

        </div>
      )}

      {/* MATCHMAKING VIEW */}
      {gameState === 'matching' && (
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-12 text-center space-y-6 max-w-xl mx-auto shadow-xl animate-in zoom-in-95 duration-300">
          <div className="w-20 h-20 bg-indigo-50 dark:bg-indigo-950/60 text-indigo-650 rounded-full flex items-center justify-center mx-auto animate-spin">
            <Search className="h-8 w-8" />
          </div>
          
          <div className="space-y-2">
            <h2 className="text-2xl font-extrabold">Searching for Opponent...</h2>
            <p className="text-xs text-zinc-500">Matching you with a student in {selectedSubject}</p>
          </div>

          <div className="p-4 bg-zinc-50 dark:bg-zinc-850 rounded-2xl flex items-center justify-center space-x-4 border border-zinc-200/50">
            <div className="text-center">
              <div className="w-10 h-10 rounded-full bg-indigo-600 text-white font-bold flex items-center justify-center mx-auto text-sm">
                YOU
              </div>
              <span className="text-xs font-semibold mt-1 block">You</span>
            </div>

            <span className="text-xl font-extrabold text-indigo-600 animate-pulse">VS</span>

            <div className="text-center">
              <div className="w-10 h-10 rounded-full bg-zinc-300 dark:bg-zinc-700 text-zinc-700 dark:text-zinc-200 font-bold flex items-center justify-center mx-auto text-sm">
                {opponent.avatar}
              </div>
              <span className="text-xs font-semibold mt-1 block">{opponent.name}</span>
            </div>
          </div>
        </div>
      )}

      {/* LIVE BATTLE ARENA VIEW */}
      {gameState === 'playing' && (
        <div className="space-y-6 max-w-3xl mx-auto animate-in fade-in duration-300">
          
          {/* Battle Header Scoreboard */}
          <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-6 shadow-sm flex items-center justify-between">
            
            {/* User Info */}
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-600 text-white font-extrabold flex items-center justify-center text-sm shadow-md">
                YOU
              </div>
              <div>
                <h4 className="font-bold text-sm">You</h4>
                <p className="text-xs text-indigo-600 dark:text-indigo-400 font-extrabold text-base">{userScore} pts</p>
              </div>
            </div>

            {/* Timer & Round Status */}
            <div className="text-center">
              <div className="inline-flex items-center space-x-1.5 px-3 py-1 bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 font-bold text-xs rounded-full border border-amber-200">
                <Clock className="h-3.5 w-3.5" />
                <span>{timer}s</span>
              </div>
              <p className="text-[11px] text-zinc-450 mt-1 font-semibold">Q{currentQIndex + 1} of {questions.length}</p>
            </div>

            {/* Opponent Info */}
            <div className="flex items-center space-x-3 text-right">
              <div>
                <h4 className="font-bold text-sm">{opponent.name}</h4>
                <p className="text-xs text-purple-600 dark:text-purple-400 font-extrabold text-base">{opponentScore} pts</p>
              </div>
              <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-purple-600 to-pink-600 text-white font-extrabold flex items-center justify-center text-sm shadow-md">
                {opponent.avatar}
              </div>
            </div>

          </div>

          {/* Question Card */}
          <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
              {currentQuestion.subject} Question
            </span>

            <h3 className="text-lg sm:text-xl font-extrabold leading-snug">
              {currentQuestion.question}
            </h3>

            {/* Options List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {currentQuestion.options.map((opt, idx) => {
                const isSelected = selectedOption === idx;
                const isCorrect = idx === currentQuestion.correctIndex;
                let btnStyle = 'bg-zinc-50 dark:bg-zinc-850 border-zinc-200/80 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-800 dark:text-zinc-200';

                if (selectedOption !== null) {
                  if (isCorrect) {
                    btnStyle = 'bg-emerald-500 text-white border-emerald-600 shadow-sm';
                  } else if (isSelected) {
                    btnStyle = 'bg-rose-500 text-white border-rose-600 shadow-sm';
                  }
                }

                return (
                  <button
                    key={idx}
                    disabled={selectedOption !== null}
                    onClick={() => handleSelectOption(idx)}
                    className={`p-4 rounded-2xl border font-semibold text-sm text-left transition-all cursor-pointer flex items-center justify-between ${btnStyle}`}
                  >
                    <span>{opt}</span>
                    {selectedOption !== null && isCorrect && <CheckCircle2 className="h-5 w-5 text-white" />}
                    {selectedOption !== null && isSelected && !isCorrect && <XCircle className="h-5 w-5 text-white" />}
                  </button>
                );
              })}
            </div>
          </div>

        </div>
      )}

      {/* RESULT / WINNER VIEW */}
      {gameState === 'result' && (
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-8 sm:p-12 text-center max-w-xl mx-auto shadow-xl space-y-6 animate-in zoom-in-95 duration-300">
          
          {userScore > opponentScore ? (
            <div className="space-y-4">
              <div className="w-20 h-20 bg-amber-100 dark:bg-amber-950/60 text-amber-500 rounded-full flex items-center justify-center mx-auto shadow-inner">
                <Trophy className="h-10 w-10 animate-bounce" />
              </div>
              <h2 className="text-3xl font-extrabold text-amber-500">VICTORY!</h2>
              <p className="text-xs text-zinc-500">You outscored {opponent.name} in rapid speed & accuracy!</p>
            </div>
          ) : userScore === opponentScore ? (
            <div className="space-y-4">
              <div className="w-20 h-20 bg-indigo-100 dark:bg-indigo-950/60 text-indigo-600 rounded-full flex items-center justify-center mx-auto">
                <ShieldCheck className="h-10 w-10" />
              </div>
              <h2 className="text-3xl font-extrabold text-indigo-600">DRAW MATCH!</h2>
              <p className="text-xs text-zinc-500">Both players performed equally well!</p>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="w-20 h-20 bg-zinc-100 dark:bg-zinc-800 text-zinc-500 rounded-full flex items-center justify-center mx-auto">
                <RotateCcw className="h-10 w-10" />
              </div>
              <h2 className="text-3xl font-extrabold text-zinc-700 dark:text-zinc-300">DEFEAT</h2>
              <p className="text-xs text-zinc-500">{opponent.name} won this duel. Train more to reclaim your streak!</p>
            </div>
          )}

          {/* Score breakdown */}
          <div className="p-4 bg-zinc-50 dark:bg-zinc-850 rounded-2xl grid grid-cols-2 gap-4 border border-zinc-200/60 dark:border-zinc-800">
            <div>
              <span className="text-xs text-zinc-400 font-semibold block">Your Score</span>
              <span className="text-xl font-extrabold text-indigo-600 dark:text-indigo-400">{userScore} pts</span>
            </div>
            <div>
              <span className="text-xs text-zinc-400 font-semibold block">{opponent.name}'s Score</span>
              <span className="text-xl font-extrabold text-purple-600 dark:text-purple-400">{opponentScore} pts</span>
            </div>
          </div>

          <div className="inline-flex items-center space-x-2 text-xs font-bold px-4 py-2 bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 rounded-full">
            <Sparkles className="h-4 w-4 text-amber-500" />
            <span>+{battleXP} Battle XP Earned</span>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row gap-3">
            <button
              onClick={startMatchmaking}
              className="w-full py-3.5 bg-indigo-600 text-white font-bold text-sm rounded-2xl hover:bg-indigo-700 transition-colors shadow-sm cursor-pointer"
            >
              Play Another Battle
            </button>
            <button
              onClick={() => setGameState('lobby')}
              className="w-full py-3.5 bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-200 font-bold text-sm rounded-2xl hover:bg-zinc-200 transition-colors cursor-pointer"
            >
              Back to Battle Lobby
            </button>
          </div>

        </div>
      )}

    </div>
  );
}
