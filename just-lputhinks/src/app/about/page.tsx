"use client";

import { motion } from '@/lib/motion';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-white flex flex-col items-center px-6 py-16">
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-3xl"
      >
        <h1 className="text-3xl font-extrabold text-gray-900 mb-6 tracking-tight text-center">
          What is Just LPUThinks?
        </h1>
        <p className="text-gray-700 text-sm leading-relaxed mb-4">
          Just LPUThinks is a modern educational resource hub designed exclusively for Lovely Professional University students. Our mission is to provide clean, organized, and easily accessible semester-wise study materials including notes, PPTs, MCQs, PDFs, and video lectures to help students build a solid foundation in their first two years.
        </p>
        <p className="text-gray-700 text-sm leading-relaxed mb-4">
          We believe in collaboration and community-driven learning. Students and teachers can contribute resources and become part of the Just LPUThinks team, earning while helping others.
        </p>
        <p className="text-gray-700 text-sm leading-relaxed mb-4">
          The platform is founded and owned by Bhavishya Kumar, a third-year BTech CSE student, who is also the lead developer of Just LPUThinks.
        </p>
        <p className="text-gray-700 text-sm leading-relaxed">
          Bhavishya is passionate about building modern, clean, and user-friendly educational platforms to empower students and foster collaborative learning.
        </p>
      </motion.section>
    </main>
  );
}
