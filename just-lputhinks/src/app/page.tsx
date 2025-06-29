"use client";

import { motion } from '@/lib/motion';
import Link from 'next/link';
import { FileStack, PlayCircle, Users } from 'lucide-react';

function FeatureCard({ icon, title, desc, delay }: { icon: React.ReactNode, title: string, desc: string, delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6, type: 'spring' }}
      className="bg-white rounded-2xl shadow-xl p-6 flex flex-col items-center group hover:shadow-2xl transition-all border border-gray-100 hover:border-blue-200"
    >
      <span className="mb-3 text-blue-600 group-hover:scale-110 transition-transform">{icon}</span>
      <div className="font-semibold text-gray-900 mb-1 text-lg">{title}</div>
      <div className="text-gray-500 text-sm">{desc}</div>
    </motion.div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex flex-col items-center justify-center px-4">
      <motion.section
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, type: 'spring' }}
        className="w-full max-w-3xl text-center"
      >
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 tracking-tight mb-4">
          Just <span className="text-blue-600">LPUThinks</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8">
          Modern resource hub for LPU students. Access semester-wise notes, MCQs, PPTs, and video lectures. Learn, contribute, and collaborate.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/resources"
            className="bg-blue-600 text-white rounded-lg px-8 py-4 font-medium hover:bg-blue-700 transition text-lg shadow-md hover:shadow-lg"
          >
            Browse Resources
          </Link>
          <Link
            href="/join"
            className="bg-white border border-blue-600 text-blue-600 rounded-lg px-8 py-4 font-medium hover:bg-blue-50 transition text-lg shadow-md hover:shadow-lg"
          >
            Join as Contributor
          </Link>
        </div>
      </motion.section>
      <motion.section
        initial="hidden"
        animate="visible"
        className="w-full max-w-4xl mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        <FeatureCard
          icon={<FileStack size={36} />}
          title="Semester Resources"
          desc="Notes, PPTs, MCQs by semester & subject"
          delay={0.1}
        />
        <FeatureCard
          icon={<PlayCircle size={36} />}
          title="Video Lectures"
          desc="Curated YouTube playlists for LPU courses"
          delay={0.2}
        />
        <FeatureCard
          icon={<Users size={36} />}
          title="Collaborate & Earn"
          desc="Contribute resources and join our team"
          delay={0.3}
        />
      </motion.section>
    </main>
  );
}
