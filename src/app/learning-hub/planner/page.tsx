'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  Calendar as CalendarIcon, 
  Plus, 
  Check, 
  Trash2, 
  Clock, 
  AlertCircle, 
  BookOpen, 
  Sparkles,
  ChevronLeft,
  ChevronRight,
  ArrowLeft
} from 'lucide-react';

interface Task {
  id: string;
  title: string;
  subject: string;
  priority: 'high' | 'medium' | 'low';
  completed: boolean;
  date: string; // YYYY-MM-DD
}

const DEFAULT_TASKS: Task[] = [
  { id: '1', title: 'Complete Chapter 4 Algebra exercises', subject: 'Mathematics', priority: 'high', completed: false, date: '2026-08-05' },
  { id: '2', title: 'Read Chemistry Lesson 2 on Elements', subject: 'Science', priority: 'medium', completed: true, date: '2026-08-05' },
  { id: '3', title: 'Write summary on French Revolution causes', subject: 'Social Studies', priority: 'low', completed: false, date: '2026-08-06' },
  { id: '4', title: 'Revise English spelling definitions', subject: 'English', priority: 'medium', completed: false, date: '2026-08-07' },
  { id: '5', title: 'Solve science sample paper logic', subject: 'Science', priority: 'high', completed: false, date: '2026-08-08' },
];

const SUBJECTS = ['Mathematics', 'Science', 'Social Studies', 'English', 'Languages', 'Other'];

import { SchemaScript } from '@/lib/seo-helper';

export default function StudyPlanner() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [activeTab, setActiveTab] = useState<'daily' | 'weekly' | 'monthly'>('daily');
  const [selectedDate, setSelectedDate] = useState<string>('2026-08-05'); // Local mock anchor date
  
  // New task inputs
  const [newTitle, setNewTitle] = useState('');
  const [newSubject, setNewSubject] = useState('Mathematics');
  const [newPriority, setNewPriority] = useState<'high' | 'medium' | 'low'>('medium');
  const [newDate, setNewDate] = useState('2026-08-05');

  // Load from LocalStorage or seed defaults
  useEffect(() => {
    const stored = localStorage.getItem('mytut-planner-tasks');
    if (stored) {
      setTasks(JSON.parse(stored));
    } else {
      setTasks(DEFAULT_TASKS);
      localStorage.setItem('mytut-planner-tasks', JSON.stringify(DEFAULT_TASKS));
    }
  }, []);

  const saveTasks = (updated: Task[]) => {
    setTasks(updated);
    localStorage.setItem('mytut-planner-tasks', JSON.stringify(updated));
  };

  const handleToggleTask = (id: string) => {
    const updated = tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t);
    saveTasks(updated);
  };

  const handleDeleteTask = (id: string) => {
    const updated = tasks.filter(t => t.id !== id);
    saveTasks(updated);
  };

  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim()) return;

    const newTask: Task = {
      id: `task-${Date.now()}`,
      title: newTitle,
      subject: newSubject,
      priority: newPriority,
      completed: false,
      date: newDate,
    };

    const updated = [newTask, ...tasks];
    saveTasks(updated);
    setNewTitle('');
  };

  // Filter tasks based on views
  const filteredTasks = tasks.filter(t => {
    if (activeTab === 'daily') {
      return t.date === selectedDate;
    }
    if (activeTab === 'weekly') {
      // Show tasks scheduled for a 7-day range starting from selectedDate
      const start = new Date(selectedDate);
      const end = new Date(selectedDate);
      end.setDate(end.getDate() + 6);
      const tDate = new Date(t.date);
      return tDate >= start && tDate <= end;
    }
    // Monthly view shows all tasks for this month (August 2026)
    return t.date.startsWith(selectedDate.substring(0, 7));
  });

  const completionPercentage = filteredTasks.length > 0 
    ? Math.round((filteredTasks.filter(t => t.completed).length / filteredTasks.length) * 105) 
    : 0;

  // Calendar dates helpers (Mock August 2026)
  const daysInMonth = Array.from({ length: 31 }, (_, i) => {
    const dayNum = i + 1;
    const dateStr = `2026-08-${dayNum.toString().padStart(2, '0')}`;
    const dayTasks = tasks.filter(t => t.date === dateStr);
    return {
      day: dayNum,
      dateString: dateStr,
      taskCount: dayTasks.length,
      completedCount: dayTasks.filter(t => t.completed).length,
    };
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <SchemaScript pageKey="studyPlanner" />
      
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
          <h1 className="text-3xl font-extrabold tracking-tight">Adaptive Study Planner</h1>
          <p className="text-sm text-zinc-550 dark:text-zinc-400 mt-1">
            Organize your subjects, complete daily calendars, and keep your analytics sharp.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex bg-zinc-150 dark:bg-zinc-850 p-1 rounded-2xl border border-zinc-200/10">
          {(['daily', 'weekly', 'monthly'] as const).map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl capitalize transition-all cursor-pointer ${
                activeTab === tab 
                  ? 'bg-white dark:bg-zinc-700 text-indigo-650 dark:text-white shadow-sm'
                  : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-800'
              }`}
            >
              {tab} view
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* LEFT COLUMN: Add Task & Progress tracker */}
        <div className="lg:col-span-4 space-y-6">
          
          {/* Progress Tracker Card */}
          <div className="bg-gradient-to-br from-indigo-500 to-purple-650 text-white rounded-3xl p-6 shadow-md border border-indigo-650/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full blur-2xl -mr-6 -mt-6" />
            <div className="relative z-10 space-y-4">
              <div className="flex items-center space-x-1 text-indigo-200">
                <Sparkles className="h-4 w-4 text-amber-300" />
                <span className="text-xs font-bold uppercase tracking-wider">Completion Score</span>
              </div>
              <div className="flex justify-between items-end">
                <div>
                  <h3 className="text-4xl font-extrabold">{completionPercentage > 100 ? 100 : completionPercentage}%</h3>
                  <p className="text-xs text-indigo-150 pt-1">
                    {filteredTasks.filter(t => t.completed).length} of {filteredTasks.length} tasks cleared
                  </p>
                </div>
                
                {/* Circular Mini-Progress bar */}
                <div className="w-16 h-16 relative flex items-center justify-center">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle cx="32" cy="32" r="28" fill="transparent" stroke="rgba(255,255,255,0.2)" strokeWidth="4" />
                    <circle cx="32" cy="32" r="28" fill="transparent" stroke="white" strokeWidth="4" 
                      strokeDasharray={2 * Math.PI * 28}
                      strokeDashoffset={2 * Math.PI * 28 * (1 - (completionPercentage > 100 ? 100 : completionPercentage) / 100)}
                      className="transition-all duration-500"
                    />
                  </svg>
                  <Check className="absolute h-5 w-5 text-white" />
                </div>
              </div>
            </div>
          </div>

          {/* Quick Add Task Form */}
          <div className="bg-white dark:bg-zinc-900 rounded-3xl p-6 border border-zinc-200/50 dark:border-zinc-800/50 shadow-sm">
            <h3 className="text-lg font-bold mb-4 flex items-center space-x-2">
              <Plus className="h-5 w-5 text-indigo-500" />
              <span>Create Planning Goal</span>
            </h3>
            
            <form onSubmit={handleAddTask} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-zinc-550 dark:text-zinc-400 uppercase tracking-wider mb-1.5">Task title</label>
                <input
                  type="text"
                  required
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  placeholder="e.g. Solve Science exercises"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-250 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950/50 text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-zinc-550 dark:text-zinc-400 uppercase tracking-wider mb-1.5">Subject</label>
                  <select
                    value={newSubject}
                    onChange={(e) => setNewSubject(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-250 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950/50 text-sm focus:outline-none"
                  >
                    {SUBJECTS.map((sub, i) => (
                      <option key={i} value={sub}>{sub}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-zinc-550 dark:text-zinc-400 uppercase tracking-wider mb-1.5">Priority</label>
                  <select
                    value={newPriority}
                    onChange={(e) => setNewPriority(e.target.value as any)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-250 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950/50 text-sm focus:outline-none"
                  >
                    <option value="high">High</option>
                    <option value="medium">Medium</option>
                    <option value="low">Low</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-zinc-550 dark:text-zinc-400 uppercase tracking-wider mb-1.5">Due Date</label>
                <input
                  type="date"
                  value={newDate}
                  onChange={(e) => setNewDate(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-250 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950/50 text-sm focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-sm font-semibold transition-all shadow-sm hover:shadow cursor-pointer"
              >
                Add to Planner
              </button>
            </form>
          </div>

        </div>

        {/* RIGHT COLUMN: Tasks List & Calendar View */}
        <div className="lg:col-span-8 space-y-6">
          
          {/* Calendar Grid View (Show only on Daily / Weekly) */}
          <div className="bg-white dark:bg-zinc-900 rounded-3xl p-6 border border-zinc-200/50 dark:border-zinc-800/50 shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-base font-bold flex items-center space-x-2">
                <CalendarIcon className="h-5 w-5 text-indigo-500" />
                <span>August 2026 Calendar Grid</span>
              </h3>
              
              <div className="flex items-center space-x-1.5 text-xs text-zinc-500">
                <ChevronLeft className="h-4 w-4 cursor-pointer" />
                <span className="font-bold">August 2026</span>
                <ChevronRight className="h-4 w-4 cursor-pointer" />
              </div>
            </div>

            {/* Weekday headers */}
            <div className="grid grid-cols-7 gap-1 text-center text-xs font-bold text-zinc-400 mb-2">
              <span>Sun</span><span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span>
            </div>

            {/* Date Grid */}
            <div className="grid grid-cols-7 gap-1">
              {/* August 2026 starts on Saturday, so insert 6 empty slots */}
              {Array.from({ length: 6 }).map((_, idx) => (
                <div key={`empty-${idx}`} className="h-10 sm:h-12 bg-zinc-50/20 dark:bg-zinc-950/10 rounded-lg" />
              ))}
              
              {daysInMonth.map((dayData) => {
                const isSelected = dayData.dateString === selectedDate;
                return (
                  <button
                    key={dayData.day}
                    onClick={() => {
                      setSelectedDate(dayData.dateString);
                      setNewDate(dayData.dateString);
                    }}
                    className={`h-10 sm:h-12 rounded-lg flex flex-col justify-between items-center p-1 transition-all ${
                      isSelected 
                        ? 'bg-indigo-600 text-white font-bold' 
                        : 'bg-zinc-50 dark:bg-zinc-950/40 hover:bg-zinc-100 dark:hover:bg-zinc-850/60'
                    }`}
                  >
                    <span className="text-xs sm:text-sm">{dayData.day}</span>
                    {dayData.taskCount > 0 && (
                      <span className="flex space-x-0.5">
                        {Array.from({ length: Math.min(dayData.taskCount, 3) }).map((_, dotIdx) => (
                          <span 
                            key={dotIdx} 
                            className={`w-1 h-1 rounded-full ${
                              isSelected 
                                ? 'bg-white' 
                                : dayData.completedCount === dayData.taskCount 
                                  ? 'bg-emerald-500' 
                                  : 'bg-indigo-500'
                            }`} 
                          />
                        ))}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Dynamic Tasks list */}
          <div className="bg-white dark:bg-zinc-900 rounded-3xl p-6 border border-zinc-200/50 dark:border-zinc-800/50 shadow-sm space-y-4">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-lg font-bold">Planned Tasks</h3>
                <p className="text-xs text-zinc-500 mt-0.5">
                  Showing targets for: <span className="font-semibold text-indigo-600 capitalize">{activeTab === 'daily' ? selectedDate : activeTab === 'weekly' ? 'Selected Week' : 'Entire Month'}</span>
                </p>
              </div>
              <span className="px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/50 text-indigo-650 dark:text-indigo-400 text-xs font-bold">
                {filteredTasks.length} active
              </span>
            </div>

            {filteredTasks.length === 0 ? (
              <div className="py-12 text-center text-zinc-400 flex flex-col items-center justify-center space-y-3">
                <AlertCircle className="h-8 w-8 text-zinc-300" />
                <p className="text-sm font-medium">No tasks found for this selection.</p>
                <p className="text-xs">Add a planning goal in the left sidebar to populate this calendar.</p>
              </div>
            ) : (
              <div className="space-y-3">
                {filteredTasks.map((task) => {
                  let priorityColor = 'bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300';
                  if (task.priority === 'high') priorityColor = 'bg-rose-50 text-rose-600 dark:bg-rose-950/30 dark:text-rose-400';
                  if (task.priority === 'medium') priorityColor = 'bg-amber-50 text-amber-600 dark:bg-amber-950/30 dark:text-amber-450';

                  return (
                    <div
                      key={task.id}
                      className={`flex items-center justify-between p-4 rounded-2xl border transition-all duration-200 ${
                        task.completed 
                          ? 'bg-zinc-50/50 dark:bg-zinc-950/20 border-zinc-200/30 dark:border-zinc-800/20 opacity-70' 
                          : 'bg-white dark:bg-zinc-900 border-zinc-200/60 dark:border-zinc-800/80 hover:border-zinc-300/80 dark:hover:border-zinc-700/80 shadow-sm'
                      }`}
                    >
                      <div className="flex items-center space-x-3.5 flex-1 min-w-0">
                        {/* Checkbox */}
                        <button
                          onClick={() => handleToggleTask(task.id)}
                          className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center shrink-0 transition-colors cursor-pointer ${
                            task.completed 
                              ? 'bg-indigo-600 border-indigo-650 text-white' 
                              : 'border-zinc-300 dark:border-zinc-700 hover:border-indigo-500'
                          }`}
                        >
                          {task.completed && <Check className="h-4 w-4 stroke-[3]" />}
                        </button>

                        <div className="min-w-0">
                          <p className={`text-sm font-semibold truncate ${task.completed ? 'line-through text-zinc-400' : ''}`}>
                            {task.title}
                          </p>
                          <div className="flex flex-wrap gap-2 items-center mt-1.5 text-xs text-zinc-400">
                            <span className="flex items-center space-x-1 font-semibold text-indigo-600 dark:text-indigo-400">
                              <BookOpen className="h-3.5 w-3.5" />
                              <span>{task.subject}</span>
                            </span>
                            <span>•</span>
                            <span className="flex items-center space-x-1">
                              <Clock className="h-3.5 w-3.5" />
                              <span>{task.date}</span>
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Right actions */}
                      <div className="flex items-center space-x-3 ml-4">
                        <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider capitalize ${priorityColor}`}>
                          {task.priority}
                        </span>
                        
                        <button
                          onClick={() => handleDeleteTask(task.id)}
                          className="p-1.5 rounded-lg text-zinc-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-950/20 transition-all cursor-pointer"
                        >
                          <Trash2 className="h-4.5 w-4.5" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

        </div>

      </div>

    </div>
  );
}
