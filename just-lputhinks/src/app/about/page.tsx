"use client";

import { motion } from '@/lib/motion';
import { FaYoutube, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import Link from "next/link";

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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-8"
        >
          <p className="text-gray-700 text-sm leading-relaxed mb-4 text-center">
            Just LPUThinks is a modern educational resource hub for Lovely Professional University students. Our mission is to provide clean, organized, and easily accessible semester-wise study materials—notes, PPTs, MCQs, PDFs, and video lectures—to help students build a solid foundation in their first two years.
          </p>
          <p className="text-gray-700 text-sm leading-relaxed mb-4 text-center">
            We believe in collaboration and community-driven learning. Students and teachers can contribute resources and become part of the Just LPUThinks team, earning while helping others.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="bg-white border border-gray-200 rounded-2xl p-6 mb-8 flex flex-col items-center shadow-sm"
        >
          <div className="text-base font-semibold text-gray-900 mb-1">Meet the Founder</div>
          <div className="text-gray-700 text-sm mb-2 text-center">
            <span className="font-medium">Bhavishya Kumar</span> is the founder and owner of Just LPUThinks. He is a third-year BTech CSE student at Lovely Professional University, passionate about building modern, clean, and user-friendly educational platforms to empower students and foster collaborative learning.
          </div>
          <div className="flex justify-center space-x-6 mt-2">
            <a href="https://youtube.com/demo" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 transition text-2xl">
              <FaYoutube />
            </a>
            <a href="https://instagram.com/demo" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-700 transition text-2xl">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com/in/demo" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900 transition text-2xl">
              <FaLinkedin />
            </a>
            <a href="https://chat.whatsapp.com/demo" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-800 transition text-2xl">
              <FaWhatsapp />
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-center"
        >
          <p className="text-gray-500 text-xs mb-2">
            Want to connect or collaborate? Follow Bhavishya on social media, join the WhatsApp group, or reach out directly.
          </p>
          <Link
            href="/join"
            className="text-blue-600 underline text-sm font-medium hover:text-blue-800 transition"
          >
            Reach out by Join Us page
          </Link>
        </motion.div>
      </motion.section>
    </main>
  );
}
