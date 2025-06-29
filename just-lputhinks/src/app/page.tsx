"use client";

import { motion } from '@/lib/motion';
import Link from 'next/link';
import { BookOpen, Video, Users } from 'lucide-react';
import Footer from '@/components/Footer';

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
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-50 via-white to-white">
      <main className="flex-1 w-full flex flex-col items-center justify-center px-6 py-16">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, type: "spring" }}
          className="w-full max-w-3xl text-center mb-20"
        >
          <motion.h1
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.7, type: "spring" }}
            className="text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight mb-4"
          >
            Just <span className="text-blue-600">LPUThinks</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="text-lg md:text-xl text-gray-600 mb-8"
          >
            The most modern, collaborative, and student-driven resource hub for LPU. Access semester-wise notes, MCQs, PPTs, and video lectures. Learn, earn, contribute, and grow.
          </motion.p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/resources"
              className="bg-blue-600 text-white rounded-lg px-8 py-3 font-medium hover:bg-blue-700 transition shadow-md text-lg"
            >
              Browse Resources
            </Link>
            <Link
              href="/join"
              className="bg-white border border-blue-600 text-blue-600 rounded-lg px-8 py-3 font-medium hover:bg-blue-50 transition shadow-md text-lg"
            >
              Join as Contributor
            </Link>
          </div>
        </motion.section>

        {/* Feature Cards */}
        <motion.section
          initial="hidden"
          animate="visible"
          className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
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
            desc="Share resources, teach, and get paid for your contribution"
            delay={0.3}
          />
        </motion.section>

        {/* Testimonial Section */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="w-full max-w-2xl mx-auto mb-20"
        >
          <div className="bg-white border border-blue-100 rounded-2xl shadow-lg px-8 py-8 flex flex-col items-center">
            <div className="text-blue-600 text-3xl mb-3">“</div>
            <div className="text-gray-800 text-base md:text-lg text-center mb-4 font-medium">
              "Just LPUThinks helped me ace my exams and find the best resources, all in one place. The community is supportive and the content is always up-to-date."
            </div>
            <div className="text-xs text-gray-500">— A 2nd Year LPU Student</div>
          </div>
        </motion.section>

        {/* Call to Action Section */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="w-full max-w-3xl mx-auto mb-12"
        >
          <div className="bg-gradient-to-r from-blue-600 to-blue-400 rounded-2xl px-8 py-8 flex flex-col items-center shadow-lg">
            <div className="text-white text-xl font-bold mb-3">Have a suggestion or need a resource?</div>
            <div className="text-blue-50 text-sm mb-6 text-center">Tell us what you want next or request a new resource. Your voice shapes Just LPUThinks.</div>
            <Link
              href="/demand"
              className="bg-white text-blue-700 rounded-lg px-6 py-3 font-semibold hover:bg-blue-50 transition text-base shadow"
            >
              Tell Us What You Want
            </Link>
          </div>
        </motion.section>
      </main>
      <Footer />
    </div>
  );
}
