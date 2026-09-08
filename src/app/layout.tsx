import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/layout/Providers";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://mytut.in'),
  title: {
    default: "myTuT | Gamified Learning & Study Companion (Classes 6–10)",
    template: "%s | myTuT"
  },
  description: "myTuT is India's leading gamified learning app for Class 6 to Class 10 CBSE & State Board students. Experience 1-on-1 subject battles, Quick Bite micro-learning, personalized study planners, and parent analytics.",
  keywords: [
    "myTuT",
    "TuT App",
    "Class 6 to 10 study app",
    "CBSE learning app",
    "State Board exam prep",
    "gamified education",
    "1-on-1 study battle",
    "personalized study planner",
    "Quick Bite revision",
    "parent dashboard education"
  ],
  authors: [{ name: "myTuT Team", url: "https://mytut.in" }],
  creator: "myTuT",
  publisher: "myTuT",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "myTuT | Gamified Learning & Study Companion (Classes 6–10)",
    description: "Empower Class 6 to 10 students with adaptive study planners, daily Quick Bite challenges, competitive student battles, and parent progress tracking.",
    url: 'https://mytut.in',
    siteName: 'myTuT',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "myTuT | Gamified Learning & Study Companion (Classes 6–10)",
    description: "Empower Class 6 to 10 students with adaptive study planners, daily Quick Bite challenges, competitive student battles, and parent progress tracking.",
    creator: '@myTuTApp',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalApplication",
    "name": "myTuT",
    "operatingSystem": "Android, iOS, Web",
    "applicationCategory": "EducationalApplication",
    "educationalLevel": "Class 6 to Class 10",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "INR"
    },
    "description": "Gamified learning platform for Class 6 to 10 CBSE & State Board students featuring 1-on-1 study battles, personalized study planners, daily Quick Bite micro-learning, and parent dashboards.",
    "publisher": {
      "@type": "Organization",
      "name": "myTuT",
      "url": "https://mytut.in"
    }
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50 transition-colors duration-200">
        <Providers>
          <Navbar />
          <main className="flex-grow flex flex-col">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
