'use client';

import React, { useState, useMemo } from 'react';
import { 
  BookOpen, 
  Search, 
  Clock, 
  ChevronRight, 
  ArrowRight,
  User,
  Calendar,
  Sparkles,
  ArrowLeft,
  Share2,
  Bookmark
} from 'lucide-react';

interface Article {
  id: string;
  title: string;
  category: 'Study Tips' | 'Time Management' | 'Exam Preparation' | 'Parent Guidance' | 'Motivation' | 'Productivity' | 'Learning Techniques';
  summary: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  isFeatured?: boolean;
}

const ARTICLES: Article[] = [
  {
    id: 'tut-app-features-seo-blog',
    title: 'How the TuT App Makes Studying Fun, Competitive, and Organized for Class 6 to 10 Students',
    category: 'Study Tips',
    summary: 'Managing subjects, chapter revisions, and competitive tests for Class 6 to 10 can be overwhelming. Discover how the TuT App turns everyday preparation into an engaging, gamified experience.',
    author: 'A.Bhavana',
    date: 'August 14, 2026',
    readTime: '6 min read',
    isFeatured: true,
    content: `Studying for school exams doesn't have to feel like a tedious or endless chore. Whether you are following the State Board syllabus or a CBSE curriculum in Classes 6 through 10, managing multiple subjects, chapter revisions, and competitive tests can quickly become overwhelming. The TuT App makes exam preparation more fun, competitive, and organized, helping students stay on top of their studies, track their progress, revise chapters effectively, and prepare confidently for school exams and competitive tests.

Enter the TuT App—your all-in-one digital study companion engineered to turn everyday preparation into an engaging, gamified experience. From customizable study planners to head-to-head student battles, here is how TuT is revolutionizing learning for school students across the country.

---

### 1. Take Control with the Smart Personalized Study Planner
One of the biggest hurdles in exam preparation is knowing what to study and when. The TuT app features an intelligent Study Planner designed around your personal routine.
- **Customized Schedules:** Map out your study sessions based on your specific school timetable, upcoming board exams, or internal tests.
- **Topic-Level Tracking:** Break down massive chapters from Science, Mathematics, and Social Studies into manageable daily targets.
- **Zero Chaos:** Always know what you need to cover next without second-guessing your preparation.

---

### 2. Build Daily Habits with the Quick Bite Challenge & Streak Points
Consistency is the secret to academic excellence. With TuT’s Quick Bite Challenge, staying sharp takes just a few minutes every day!
- **5 Daily Questions:** Every day, receive a bite-sized set of 5 curriculum-aligned questions to test your speed and recall.
- **Earn Streak Points:** Answer correctly and keep your daily streak alive to earn rewards and points.
- **Showcase Your Streaks:** Watch your name climb the daily Leaderboard as you maintain consistency, keeping you motivated day after day.

---

### 3. Thrilling 1-on-1 Competitions: Challenge Your Peers
Why study alone when you can compete? TuT introduces a dynamic 1-on-1 Battle Feature where you can test your knowledge against fellow students in real-time.
- **Head-to-Head Matches:** Go one-on-one with classmates or peers across the country on specific syllabus topics.
- **Real-Exam Pressure:** Practice answering quickly and accurately under time constraints, building the confidence needed for real competitive exams.
- **Learn While Playing:** Reinforce difficult concepts by analyzing where you made mistakes during the duel.

> *"I love challenging my friends on TuT—it makes studying feel like a fun competition instead of boring revision!"*

---

### 4. Sunday Weekly Contests & The Leaderboard Championship
Weekends are for champions! Every Sunday, the TuT app hosts its exclusive Weekly Contest covering core concepts from the Class 6-10 syllabus.
- **District Exposure:** Compete against thousands of State Board students under unified test conditions.
- **Leaderboard Championship:** High scorers earn coveted spots on the Leaderboard Championship, gaining recognition as top-tier performers.
- **Benchmark Your Skills:** Identify your national ranking and measure your academic growth week after week.

---

### 5. Dual Dashboards: Empirical Insights for Students and Parents
Effective learning requires clear feedback. The TuT app keeps everyone in the loop with dedicated Student and Parent Dashboards.

#### The Student Dashboard
A sleek, intuitive hub where students can view their current study goals, active streaks, upcoming battles, and subject-wise mastery graphs.

#### The Parent Dashboard
Education is a team effort. The Parent Dashboard grants parents transparent, real-time insights into their child’s academic journey:
- **Track Daily Progress:** See completed study targets and daily practice consistency.
- **Analyze Performance:** Monitor accuracy rates in Quick Bites, 1-on-1 contests, and Sunday exams.
- **Support Growth:** Identify weak subject areas early without needing to constantly micromanage study sessions.

---

### Frequently Asked Questions (FAQ)

**1. What is the TuT App?**  
TuT is a digital study companion for Class 6 to Class 10 students that makes exam preparation more organized, competitive, and engaging.

**2. How does the TuT Study Planner help students?**  
The personalized Study Planner helps students create study schedules based on their routine, school timetable, upcoming exams, and daily study targets.

**3. What is the Quick Bite Challenge in TuT?**  
The Quick Bite Challenge provides 5 curriculum-aligned questions every day, helping students practice their speed, recall, and subject knowledge in just a few minutes.

**4. What are Streak Points in the TuT App?**  
Students can earn Streak Points by answering Quick Bite questions correctly and maintaining their daily learning streak. This encourages consistent study habits.

**5. What is the 1-on-1 Battle feature in TuT?**  
The 1-on-1 Battle feature allows students to compete against classmates or other students on specific syllabus topics while answering questions under time constraints.

**6. How can 1-on-1 Battles help students prepare for exams?**  
Battles encourage students to answer quickly and accurately while also helping them identify mistakes and reinforce difficult concepts.

**7. What is the TuT Sunday Weekly Contest?**  
The Sunday Weekly Contest is a weekly competition covering core concepts from the Class 6–10 syllabus. Students can test their knowledge under unified test conditions.

**8. What is the TuT Leaderboard Championship?**  
The Leaderboard Championship recognizes high-performing students and allows students to measure their performance and academic growth against other participants.

**9. Can students track their study progress on TuT?**  
Yes. The Student Dashboard allows students to view their study goals, active streaks, upcoming battles, and subject-wise mastery graphs.

**10. Can parents monitor their child's academic progress?**  
Yes. The Parent Dashboard provides insights into daily study progress, practice consistency, and performance in Quick Bites, 1-on-1 contests, and Sunday exams.

> *"The daily Quick Bite challenge only takes a few minutes, so it is easy to do even when I have a busy school day. I also like seeing my streak grow." — Class 7 Student*

### Ready to Elevate Your Academic Journey? Download TuT Today!

Whether you are preparing for Class 10 board exams or building a strong foundation in Class 6, the TuT app blends discipline, competition, and convenience into a single platform.

Stop stressing over exam prep—gamify your revision, top the leaderboards, and achieve your best results yet.

Download the TuT App now at www.mytut.in and start your winning streak today!`
  },
  {
    id: 'exam-anxiety-preparation',
    title: 'How to Overcome Exam Preparation Anxiety and Perform at Your Best with TuT',
    category: 'Exam Preparation',
    summary: 'Discover effective strategies, root causes, symptom breakdowns, and structured study tools to overcome exam stress and transform test anxiety into confident academic performance.',
    author: 'A.Bhavana',
    date: 'August 14, 2026',
    readTime: '5 min read',
    isFeatured: false,
    content: `That sudden pit in your stomach, racing heart, and sweaty palms right before you turn over a test paper—sound familiar? If you've ever felt like your brain completely wipes itself clean the moment an exam starts, you are far from alone.

Exam preparation anxiety is one of the most common challenges students face today. The good news? Experiencing test stress isn't a sign that you aren't prepared or capable. It's simply a psychological and physical response that you can learn to manage. At TuT, we empower students with the right study tools, structured routines, and targeted support to turn exam anxiety into confident performance.

---

### What Exactly is Exam Preparation Anxiety?
Exam preparation anxiety is a combination of physical tension, emotional stress, and cognitive overwhelm tied to the pressure of evaluation. It's a form of performance anxiety—similar to what an athlete feels before a major game or an actor feels before stepping onto a stage.

When you perceive a test as a major threat to your grade, future, or self-worth, your body triggers its natural "fight-or-flight" response. Your brain releases stress hormones like adrenaline and cortisol. While a small amount of adrenaline can keep you sharp, too much of it impairs the prefrontal cortex—the exact part of your brain responsible for memory retrieval, logical thinking, and focus.

---

### Common Symptoms of Exam Anxiety
Exam anxiety manifests differently for every student. Recognizing the signs early allows you to take action before it affects your study routine.

- **Physical Symptoms:** Sweaty palms, rapid heart rate, nausea, headaches, muscle tension, or lightheadedness. Structured study schedules prevent all-nighter fatigue.
- **Behavioral & Cognitive Symptoms:** Mind going blank, difficulty concentrating, overthinking simple questions, or procrastinating. Step-by-step active recall sessions help guide practice problems.
- **Emotional Symptoms:** Helplessness, fear of failure, racing thoughts, negative self-talk, or sudden panic. Targeted practice builds genuine academic self-belief.

---

### Why Does Exam Anxiety Happen?
Understanding why you feel anxious is the first step toward conquering test stress. The most common root causes include:
- **Fear of Failure:** Linking test performance directly to self-worth or future success.
- **Lack of Structured Preparation:** Cramming the night before leaves the brain stressed and exhausted.
- **High External Pressure:** Feeling overwhelming expectations from family, peers, or competitive academic environments.
- **Past Negative Experiences:** A bad grade on a previous test can condition your brain to expect another failure.

---

### Frequently Asked Questions (FAQ)

**1. What is exam preparation anxiety?**  
Exam preparation anxiety is a combination of physical tension, emotional stress, and mental overwhelm caused by the pressure of exams and evaluation.

**2. What are the common symptoms of exam anxiety?**  
Common symptoms can include sweaty palms, a rapid heartbeat, nausea, headaches, difficulty concentrating, overthinking, negative self-talk, fear of failure, and sudden panic.

**3. Why do students experience exam anxiety?**  
Exam anxiety can be caused by fear of failure, lack of structured preparation, high pressure from family or peers, competitive academic environments, and negative experiences from previous exams.

**4. Can poor study planning increase exam anxiety?**  
Yes. Unstructured preparation and last-minute cramming can leave students stressed and exhausted. A structured study routine can help students prepare more consistently.

**5. How can TuT help students manage exam preparation anxiety?**  
TuT provides structured study tools, routines, and targeted practice that can help students stay organized and prepare consistently instead of relying on last-minute studying.

**6. How does TuT help students who have difficulty concentrating?**  
TuT supports step-by-step active recall sessions and guided practice problems, helping students practice concepts in a structured way.

**7. Can TuT help students build confidence before exams?**  
Yes. Regular preparation and guided practice can help students develop stronger academic self-belief and approach exams with greater confidence.

**8. How can structured study habits reduce exam stress?**  
A structured study routine helps students avoid last-minute cramming and all-night study sessions. Consistent preparation can make the learning process more manageable.

**9. Does exam anxiety mean that a student is not prepared or capable?**  
No. Experiencing test stress does not mean a student is incapable or unprepared. Exam anxiety is a psychological and physical response that students can learn to manage.

**10. Can TuT help students turn exam anxiety into confident performance?**  
TuT encourages structured study habits, regular practice, and preparation routines. Combined with calming techniques and maintaining perspective, these habits can help students approach exams with greater focus and confidence.

> *"Before using TuT, I used to study without knowing what to do first. The Study Planner helped me organize my preparation, and the Quick Bite questions are really useful for daily revision." — Class 8 Student*

### Final Thoughts: You Are More Than Your Test Scores

An upcoming test does not define your intelligence, worth, or potential. By establishing structured study habits with TuT, practicing calming physical techniques, and maintaining perspective, you can transform exam preparation anxiety into focused, confident performance. Take a deep breath—you have the tools to succeed!`
  },
  {
    id: 'silent-exam-gap-fomo',
    title: "Is Your Classmate Already Ahead of You? The Silent Exam Gap You Can't Afford to Ignore",
    category: 'Motivation',
    summary: 'Every minute spent procrastinating is a missed opportunity. Discover why thousands of CBSE and State Board students use TuT daily to stay ahead with 1-on-1 battles, Quick Bite streaks, and Sunday contests.',
    author: 'A.Bhavana',
    date: 'August 14, 2026',
    readTime: '4 min read',
    isFeatured: false,
    content: `Picture this: Exam day arrives. You open the question paper, and a sudden wave of panic hits you. Questions that seemed simple in your textbook now feel completely unfamiliar. Meanwhile, the student sitting right next to you is writing effortlessly, finishing early with total confidence.

What do they know that you don't?

The truth is harsh: while you are waiting for exam week to start studying, thousands of CBSE and State Board students in Class 6 through 10 are secretly practicing every single day on the TuT app. Every minute you spend procrastinating, someone else is taking your spot on the leaderboard.

---

### 1. The Daily 'Quick Bite' Dilemma: Are You Losing Your Streak?
Right now, at this exact moment, students across your state are unlocking their Quick Bite Challenge on the TuT app. They are answering 5 fast-paced curriculum questions, stacking up daily streak points, and pushing their names up the real-time Leaderboard Card.

If you haven't opened the TuT app today, your streak is sitting at zero. Can you really afford to let your peers build an untouchable lead before final exams even begin?

---

### 2. Someone Might Be Challenging You to a 1-on-1 Battle Right Now
Think you know your Class 6–10 Mathematics or Science syllabus better than your friends? Prove it—or risk falling behind.

The 1-on-1 Battle Feature on the TuT app pits student against student in live, rapid-fire academic duels. While you stay comfortably inside your routine, other students are testing their speed and precision under real competitive pressure. When final exams arrive, who do you think will handle the pressure better?

---

### 3. The Sunday Weekly Contest: Where Do You Really Rank?
School marks can be deceiving. Getting top marks in a quiet classroom doesn't guarantee you will rank high when competing statewide.

Every single Sunday, the TuT app hosts the Weekly Contest—a high-stakes academic showdown for CBSE and State Board students. Those who participate get listed on the Leaderboard Championship, while those who skip it remain completely in the dark about their actual preparation level.

Do you know where you stand, or are you just guessing?

---

### 4. What Does Your Parent Dashboard Say About You?
Here is the ultimate reality check: with TuT's dual-dashboard system, your parents can view your progress in real-time.

When your parents log into the TuT Parent Dashboard, what will they see?
- **An active, disciplined student:** hitting daily study planner goals and dominating contests?
- **Or missed streaks:** incomplete syllabus topics, and zero activity?

The TuT app leaves no room for excuses. Your effort—or lack of it—is displayed with complete transparency.

---

### Don't Wait Until Report Card Day—Check Your Status Now!
The clock is ticking down to your next major exam. You can either close this tab and hope for the best, or you can take control right now.

Log into the TuT website, set up your personalized Study Planner, claim your daily Quick Bite streak, and see where you rank on the Leaderboard before it's too late.

Download the TuT App now at www.mytut.in and start your winning streak today!`
  }
];

const CATEGORIES = [
  'All',
  'Study Tips',
  'Time Management',
  'Exam Preparation',
  'Parent Guidance',
  'Motivation',
  'Productivity',
  'Learning Techniques'
];

function renderTextWithLinks(text: string) {
  const urlRegex = /(https?:\/\/www\.mytut\.in|www\.mytut\.in|http:\/\/[^\s]+|https:\/\/[^\s]+)/g;
  const parts = text.split(urlRegex);

  return parts.map((part, index) => {
    if (part.match(urlRegex)) {
      const href = part.startsWith('http') ? part : `https://${part}`;
      return (
        <a
          key={index}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 mx-1 px-2.5 py-1 rounded-lg bg-indigo-100 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-300 font-bold text-xs border border-indigo-300/60 dark:border-indigo-700/60 hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-500 transition-all shadow-xs underline decoration-indigo-400"
        >
          <span>{part}</span>
        </a>
      );
    }
    return part;
  });
}

function renderFormattedContent(content: string) {
  const paragraphs = content.split('\n\n');

  return (
    <div className="space-y-4 text-zinc-700 dark:text-zinc-300 font-normal leading-relaxed text-xs">
      {paragraphs.map((p, i) => {
        const trimmed = p.trim();
        if (!trimmed) return null;

        if (trimmed === '---') {
          return <hr key={i} className="my-4 border-zinc-200 dark:border-zinc-800" />;
        }

        if (trimmed.startsWith('### ')) {
          const headingText = trimmed.replace('### ', '');
          const isCTAHeader = headingText.includes('Ready to Elevate');
          return (
            <h3 
              key={i} 
              className={isCTAHeader 
                ? "text-sm sm:text-base font-extrabold text-indigo-700 dark:text-indigo-300 pt-4 pb-2 border-b-2 border-indigo-500/40 flex items-center gap-2 mt-6" 
                : "text-sm font-bold text-zinc-900 dark:text-white pt-2 pb-0.5 border-b border-zinc-100 dark:border-zinc-800/60 flex items-center gap-1.5"
              }
            >
              <span className="w-1.5 h-3.5 bg-indigo-600 rounded-full inline-block"></span>
              {renderTextWithLinks(headingText)}
            </h3>
          );
        }

        if (trimmed.startsWith('#### ')) {
          return (
            <h4 key={i} className="text-xs font-bold text-indigo-600 dark:text-indigo-400 pt-1.5">
              {renderTextWithLinks(trimmed.replace('#### ', ''))}
            </h4>
          );
        }

        if (trimmed.startsWith('> ')) {
          const quoteText = trimmed.replace(/^>\s*/, '').replace(/^"|"$/g, '');
          return (
            <blockquote key={i} className="p-3 my-2 bg-indigo-50/70 dark:bg-indigo-950/30 border-l-3 border-indigo-600 rounded-r-lg italic text-indigo-950 dark:text-indigo-200 font-medium text-xs shadow-sm">
              "{renderTextWithLinks(quoteText)}"
            </blockquote>
          );
        }

        if (trimmed.includes('\n- ') || trimmed.startsWith('- ')) {
          const lines = trimmed.split('\n').filter(l => l.trim().startsWith('- '));
          const intro = trimmed.split('\n- ')[0].startsWith('- ') ? null : trimmed.split('\n')[0];
          return (
            <div key={i} className="space-y-1.5 my-1.5">
              {intro && <p className="font-medium text-zinc-800 dark:text-zinc-200 text-xs">{renderTextWithLinks(intro)}</p>}
              <ul className="space-y-1.5 pl-1">
                {lines.map((line, idx) => {
                  const cleanLine = line.replace(/^- /, '');
                  const parts = cleanLine.split('**');
                  if (parts.length >= 3) {
                    return (
                      <li key={idx} className="flex items-start gap-2 text-xs">
                        <span className="h-1.5 w-1.5 rounded-full bg-indigo-500 mt-1 shrink-0"></span>
                        <span>
                          <strong className="font-semibold text-zinc-900 dark:text-white">{parts[1]}</strong>
                          {renderTextWithLinks(parts.slice(2).join(''))}
                        </span>
                      </li>
                    );
                  }
                  return (
                    <li key={idx} className="flex items-start gap-2 text-xs">
                      <span className="h-1.5 w-1.5 rounded-full bg-indigo-500 mt-1 shrink-0"></span>
                      <span>{renderTextWithLinks(cleanLine)}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        }

        if (trimmed.startsWith('**') && trimmed.includes('**') && trimmed.match(/^\*\*\d+\./)) {
          const parts = trimmed.split('**');
          if (parts.length >= 3) {
            return (
              <div key={i} className="bg-zinc-50 dark:bg-zinc-850/60 p-3 rounded-xl border border-zinc-200/60 dark:border-zinc-800 space-y-1">
                <p className="font-bold text-zinc-900 dark:text-white text-xs">
                  {renderTextWithLinks(parts[1])}
                </p>
                <p className="text-xs text-zinc-600 dark:text-zinc-350">
                  {renderTextWithLinks(parts.slice(2).join('').replace(/^\s*<br\s*\/?>\s*/, '').trim())}
                </p>
              </div>
            );
          }
        }

        if (trimmed.startsWith('Download the TuT App now')) {
          return (
            <div key={i} className="my-3 p-3.5 rounded-2xl bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/50 dark:to-purple-950/50 border border-indigo-200/80 dark:border-indigo-800/60 shadow-xs">
              <p className="font-semibold text-zinc-900 dark:text-white text-xs leading-relaxed">
                {renderTextWithLinks(trimmed)}
              </p>
            </div>
          );
        }

        const parts = trimmed.split('**');
        return (
          <p key={i} className="leading-relaxed text-xs">
            {parts.map((part, pIdx) => 
              pIdx % 2 === 1 ? (
                <strong key={pIdx} className="font-semibold text-zinc-900 dark:text-white">{renderTextWithLinks(part)}</strong>
              ) : (
                renderTextWithLinks(part)
              )
            )}
          </p>
        );
      })}
    </div>
  );
}

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeArticle, setActiveArticle] = useState<Article | null>(null);

  // Filtered articles list
  const filteredArticles = useMemo(() => {
    return ARTICLES.filter((art) => {
      const matchesSearch = 
        art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        art.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        art.content.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = 
        selectedCategory === 'All' || art.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const featuredArticle = useMemo(() => {
    return ARTICLES.find(a => a.isFeatured);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      
      {/* Blog Detail Overlay view */}
      {activeArticle ? (
        <div className="space-y-6 animate-in fade-in slide-in-from-left-2 duration-300">
          
          <button 
            onClick={() => setActiveArticle(null)}
            className="flex items-center space-x-1.5 text-sm font-semibold text-zinc-550 hover:text-indigo-650 transition-colors py-2 cursor-pointer"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to articles</span>
          </button>

          <article className="bg-white dark:bg-zinc-900 rounded-3xl p-6 sm:p-10 border border-zinc-200/50 dark:border-zinc-800/50 shadow-sm max-w-4xl mx-auto space-y-6">
            
            {/* Header info */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-3 py-1 bg-indigo-50 dark:bg-indigo-950/50 text-indigo-650 dark:text-indigo-400 text-xs font-bold rounded-full">
                {activeArticle.category}
              </span>
              <span className="flex items-center space-x-1 text-xs text-zinc-450">
                <Calendar className="h-3.5 w-3.5" />
                <span>{activeArticle.date}</span>
              </span>
              <span className="flex items-center space-x-1 text-xs text-zinc-450">
                <Clock className="h-3.5 w-3.5" />
                <span>{activeArticle.readTime}</span>
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight leading-tight">
              {activeArticle.title}
            </h1>

            <div className="flex items-center space-x-3 pb-6 border-b border-zinc-100 dark:border-zinc-850">
              <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-650 flex items-center justify-center text-white font-bold text-xs">
                {activeArticle.author[0]}
              </div>
              <span className="text-xs font-semibold text-zinc-500">By {activeArticle.author}</span>
            </div>

            {/* Content paragraph renderer */}
            <div className="pt-2">
              {renderFormattedContent(activeArticle.content)}
            </div>

            {/* Share controls mock */}
            <div className="flex justify-between items-center pt-8 border-t border-zinc-100 dark:border-zinc-850 mt-8 text-xs text-zinc-450">
              <button 
                onClick={() => alert('Article saved to your bookmarks')}
                className="flex items-center space-x-1.5 hover:text-indigo-650 transition-colors"
              >
                <Bookmark className="h-4 w-4" />
                <span>Bookmark</span>
              </button>
              <button 
                onClick={() => {
                  navigator.clipboard.writeText(window.location.href);
                  alert('Link copied to clipboard!');
                }}
                className="flex items-center space-x-1.5 hover:text-indigo-650 transition-colors"
              >
                <Share2 className="h-4 w-4" />
                <span>Share</span>
              </button>
            </div>

          </article>
        </div>
      ) : (
        // Main Blog listing View
        <div className="space-y-10">
          
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Academic Resource Center</h1>
            <p className="text-sm text-zinc-550 dark:text-zinc-400">
              Stay ahead with scientific study strategies, planning rules, and educational guides.
            </p>
            
            {/* Search Bar Container */}
            <div className="relative max-w-md mx-auto pt-2">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search resources, tips, topics..."
                className="w-full pl-11 pr-4 py-3 rounded-2xl border border-zinc-250 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none shadow-sm"
              />
            </div>
          </div>

          {/* Categories Horizontal scrolling lists */}
          <div className="flex overflow-x-auto pb-3 gap-2 scrollbar-none max-w-5xl mx-auto">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2.5 rounded-full text-xs font-bold whitespace-nowrap transition-all border cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-indigo-600 border-indigo-650 text-white shadow-sm'
                    : 'bg-white dark:bg-zinc-900 border-zinc-200/60 dark:border-zinc-800/80 text-zinc-650 hover:bg-zinc-50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Featured article Banner (Show only when no filters are set) */}
          {selectedCategory === 'All' && !searchQuery && featuredArticle && (
            <div 
              onClick={() => setActiveArticle(featuredArticle)}
              className="bg-white dark:bg-zinc-900 border border-zinc-200/50 dark:border-zinc-800/50 rounded-3xl p-6 sm:p-8 hover:shadow-md transition-all cursor-pointer grid grid-cols-1 lg:grid-cols-12 gap-8 items-center hover:-translate-y-0.5 duration-200"
            >
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center space-x-2 text-xs font-bold text-indigo-650 dark:text-indigo-400 uppercase tracking-widest">
                  <Sparkles className="h-4 w-4 text-amber-500" />
                  <span>Featured Article</span>
                </div>

                <h3 className="text-xl sm:text-3xl font-extrabold leading-tight">
                  {featuredArticle.title}
                </h3>
                
                <p className="text-sm text-zinc-550 dark:text-zinc-400 leading-relaxed">
                  {featuredArticle.summary}
                </p>

                <div className="flex items-center space-x-4 text-xs text-zinc-450 pt-2">
                  <span>{featuredArticle.author}</span>
                  <span>•</span>
                  <span>{featuredArticle.date}</span>
                  <span>•</span>
                  <span>{featuredArticle.readTime}</span>
                </div>
              </div>

              <div className="lg:col-span-5 h-[200px] w-full rounded-2xl bg-gradient-to-tr from-indigo-500 to-purple-650 flex items-center justify-center text-white text-lg font-bold shadow-inner relative overflow-hidden">
                <BookOpen className="h-16 w-16 opacity-30 animate-pulse" />
                <span className="absolute bottom-4 right-4 bg-white/20 px-3 py-1 rounded-xl text-xs font-bold">5 min read</span>
              </div>
            </div>
          )}

          {/* Articles Grid layout */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold border-b border-zinc-150/40 pb-2">Recent Publications</h2>

            {filteredArticles.length === 0 ? (
              <div className="text-center py-16 text-zinc-400">
                <p className="text-sm font-semibold">No articles match your search or filter.</p>
                <p className="text-xs mt-1">Try resetting the tags or queries.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredArticles.map((art) => (
                  <div
                    key={art.id}
                    onClick={() => setActiveArticle(art)}
                    className="group bg-white dark:bg-zinc-900 border border-zinc-200/50 dark:border-zinc-800/50 rounded-3xl p-6 hover:shadow-md transition-all cursor-pointer flex flex-col justify-between hover:-translate-y-0.5"
                  >
                    <div className="space-y-3">
                      <span className="text-[10px] font-bold text-indigo-650 dark:text-indigo-400 uppercase tracking-widest block">
                        {art.category}
                      </span>
                      <h3 className="font-bold text-base leading-snug group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                        {art.title}
                      </h3>
                      <p className="text-xs text-zinc-550 dark:text-zinc-450 line-clamp-3 leading-relaxed">
                        {art.summary}
                      </p>
                    </div>

                    <div className="pt-6 border-t border-zinc-100 dark:border-zinc-850 mt-6 flex justify-between items-center text-[10px] text-zinc-450">
                      <span>{art.date}</span>
                      <span className="font-bold text-indigo-600 dark:text-indigo-400 flex items-center space-x-1 group/btn">
                        <span>Read</span>
                        <ChevronRight className="h-3 w-3 group-hover/btn:translate-x-0.5 transition-transform" />
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Newsletter Box (Blog context) */}
          <div className="bg-gradient-to-br from-indigo-600 via-purple-650 to-indigo-700 text-white rounded-3xl p-8 sm:p-12 border border-indigo-950/20 text-center space-y-6 max-w-4xl mx-auto shadow-md">
            <h3 className="text-2xl sm:text-3xl font-extrabold">Never miss an academic update</h3>
            <p className="text-sm text-indigo-100 max-w-md mx-auto leading-relaxed">
              Join 5,000+ parents and educators. Subscribe to receive monthly worksheets, revisions sheets, and contest notification logs.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto pt-2">
              <input
                type="email"
                placeholder="Enter parent email address"
                className="px-4 py-3 rounded-2xl bg-white text-zinc-900 placeholder-zinc-455 focus:outline-none w-full text-sm font-medium"
              />
              <button 
                onClick={() => alert('Subscription saved!')}
                className="px-6 py-3 bg-zinc-950 text-white rounded-2xl text-sm font-semibold hover:opacity-90 transition-opacity cursor-pointer shrink-0"
              >
                Join Newsletter
              </button>
            </div>
          </div>

        </div>
      )}

    </div>
  );
}
