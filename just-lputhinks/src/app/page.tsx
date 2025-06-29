"use client";

import { motion } from '@/lib/motion';
import Link from 'next/link';
import { BookOpen, Video, Users } from 'lucide-react';

function FeatureCard({ icon, title, desc, delay }: { icon: React.ReactNode, title: string, desc: string, delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6, type: 'spring' }}
      className="bg-white rounded-2xl p-6 flex flex-col items-center border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
    >
      <span className="mb-3 text-blue-600">{icon}</span>
      <div className="font-semibold text-gray-900 mb-1 text-base tracking-tight">{title}</div>
      <div className="text-gray-600 text-xs text-center">{desc}</div>
    </motion.div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-white flex flex-col items-center justify-center px-6 py-16">
      <motion.section
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-3xl text-center mb-20"
      >
        <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight mb-3">
          Just <span className="text-blue-600">LPUThinks</span>
        </h1>
        <p className="text-sm text-gray-700 tracking-wide mb-8">
          Your modern educational resource hub for LPU students. Access semester-wise notes, MCQs, PPTs, and video lectures. Learn, contribute, and collaborate.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/resources"
            className="bg-blue-600 text-white rounded-lg px-8 py-3 font-medium hover:bg-blue-700 transition shadow-md"
          >
            Browse Resources
          </Link>
          <Link
            href="/join"
            className="bg-white border border-blue-600 text-blue-600 rounded-lg px-8 py-3 font-medium hover:bg-blue-50 transition"
          >
            Join as Contributor
          </Link>
        </div>
      </motion.section>
      <motion.section
        initial="hidden"
        animate="visible"
        className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        <FeatureCard
          icon={<BookOpen size={28} />}
          title="Semester Resources"
          desc="Notes, PPTs, MCQs organized by semester & subject"
          delay={0.1}
        />
        <FeatureCard
          icon={<Video size={28} />}
          title="Video Lectures"
          desc="Curated YouTube playlists for LPU courses"
          delay={0.2}
        />
        <FeatureCard
          icon={<Users size={28} />}
          title="Collaborate & Earn"
          desc="Contribute resources and join our team"
          delay={0.3}
        />
      </motion.section>
    </main>
  );
}
