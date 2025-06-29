"use client";

import { motion } from '@/lib/motion';
import { BookOpen, Video, Users, Bell } from 'lucide-react';
import Footer from '@/components/Footer';

function FeatureCard({ icon, title, desc, delay }: { icon: React.ReactNode, title: string, desc: string, delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5, type: 'spring' }}
      className="bg-white rounded-xl px-6 py-7 flex flex-col items-center border border-gray-100 shadow-sm hover:shadow transition-shadow"
    >
      <span className="mb-2 text-blue-600">{icon}</span>
      <div className="font-medium text-gray-900 mb-0.5 text-base tracking-tight">{title}</div>
      <div className="text-gray-500 text-xs text-center">{desc}</div>
    </motion.div>
  );
}

function ResourcePreview() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.6 }}
      className="w-full max-w-2xl mx-auto mb-12"
    >
      <div className="rounded-xl border border-gray-100 bg-gray-50 px-6 py-6 shadow flex flex-col md:flex-row items-center gap-6">
        <div className="flex-1">
          <div className="text-xs font-semibold text-blue-600 mb-1">Live Preview</div>
          <div className="text-base font-semibold text-gray-900 mb-1">Semester 1: C Programming Notes</div>
          <div className="text-xs text-gray-600 mb-2">Updated: 2 days ago</div>
          <div className="text-xs text-gray-500 mb-2">Get concise, exam-focused notes and MCQs for C Programming, trusted by 1000+ LPU students.</div>
        </div>
        <button className="px-4 py-2 rounded bg-blue-600 text-white text-xs font-semibold shadow hover:bg-blue-700 transition">
          Preview Resource
        </button>
      </div>
    </motion.div>
  );
}

function NotificationPreview() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.25, duration: 0.5 }}
      className="w-full max-w-md mx-auto mb-10"
    >
      <div className="rounded-xl border border-gray-100 bg-white px-5 py-4 flex items-center gap-3 shadow">
        <div className="flex items-center justify-center h-8 w-8 bg-blue-50 rounded-full">
          <Bell className="text-blue-600 w-5 h-5" />
        </div>
        <div className="flex-1 text-xs text-gray-700">
          <span className="font-semibold text-blue-700">New MCQs added!</span> Semester 2 Mathematics MCQs are now live. <span className="text-gray-400">2h ago</span>
        </div>
      </div>
    </motion.div>
  );
}

function HowItWorks() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.6 }}
      className="w-full max-w-3xl mx-auto mb-16"
    >
      <div className="text-sm font-bold text-gray-800 mb-3 text-center">How It Works</div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="flex flex-col items-center">
          <span className="bg-blue-100 text-blue-700 rounded-full h-9 w-9 flex items-center justify-center mb-2 font-bold">1</span>
          <div className="text-xs text-gray-700 font-semibold mb-1">All resources in one place</div>
          <div className="text-xs text-gray-500 text-center">Notes, MCQs, PPTs, and videos—organized semester-wise, no hassle.</div>
        </div>
        <div className="flex flex-col items-center">
          <span className="bg-blue-100 text-blue-700 rounded-full h-9 w-9 flex items-center justify-center mb-2 font-bold">2</span>
          <div className="text-xs text-gray-700 font-semibold mb-1">Contribute & Earn</div>
          <div className="text-xs text-gray-500 text-center">Share valid notes or lectures and get paid—opportunities in every subject.</div>
        </div>
        <div className="flex flex-col items-center">
          <span className="bg-blue-100 text-blue-700 rounded-full h-9 w-9 flex items-center justify-center mb-2 font-bold">3</span>
          <div className="text-xs text-gray-700 font-semibold mb-1">Instant Updates</div>
          <div className="text-xs text-gray-500 text-center">Get the latest updates and notifications instantly with the bell icon.</div>
        </div>
      </div>
    </motion.div>
  );
}

function FounderNote() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.35, duration: 0.5 }}
      className="w-full max-w-lg mx-auto mb-8"
    >
      <div className="border border-gray-100 bg-gray-50 rounded-xl px-6 py-5 text-center shadow-sm">
        <div className="text-base font-semibold text-gray-800 mb-1">
          “Learning together, growing together — Just LPUThings, where every student shines and smiles!”
        </div>
        <div className="text-xs text-gray-500 mt-2">
          — Bhavishya Kumar, Founder
        </div>
      </div>
    </motion.div>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <main className="flex-1 w-full flex flex-col items-center px-4 py-10">
        {/* Hero */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, type: "spring" }}
          className="w-full max-w-2xl text-center mb-10"
        >
          <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight mb-2">
            Just <span className="text-blue-600">LPUThings</span>
          </h1>
          <div className="text-gray-600 text-base mb-1">
            <span className="font-semibold text-blue-700">The next-gen resource hub for LPU students.</span>
          </div>
          <p className="text-sm text-gray-500 mb-7">
            Study notes, MCQs, video lectures, and more—organized, animated, and always up to date.
          </p>
        </motion.section>

        <ResourcePreview />
        <NotificationPreview />
        <HowItWorks />

        {/* Features */}
        <motion.section
          initial="hidden"
          animate="visible"
          className="w-full max-w-3xl grid grid-cols-1 md:grid-cols-3 gap-8 mb-14"
        >
          <FeatureCard
            icon={<BookOpen size={26} />}
            title="Semester Resources"
            desc="Notes, MCQs, PPTs—organized and easy to find."
            delay={0.1}
          />
          <FeatureCard
            icon={<Video size={26} />}
            title="Video Lectures"
            desc="Curated playlists for every subject and semester."
            delay={0.2}
          />
          <FeatureCard
            icon={<Users size={26} />}
            title="Contribute & Earn"
            desc="Share resources, teach, and get paid for your work."
            delay={0.3}
          />
        </motion.section>

        <FounderNote />
      </main>
      <Footer />
    </div>
  );
}
