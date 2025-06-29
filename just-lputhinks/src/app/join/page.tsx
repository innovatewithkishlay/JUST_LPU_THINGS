"use client";

import { motion } from '@/lib/motion';
import { FaEnvelope, FaInstagram, FaWhatsapp } from 'react-icons/fa';

export default function JoinUsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-white flex flex-col items-center px-6 py-16">
      <motion.section
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, type: "spring" }}
        className="w-full max-w-3xl"
      >
        <h1 className="text-3xl font-extrabold text-gray-900 mb-3 tracking-tight text-center">
          Get Paid to Teach, Share & Help
        </h1>
        <p className="text-blue-700 text-base font-semibold text-center mb-2">
          Yes, you can earn real rewards by joining Just LPUThinks!
        </p>
        <p className="text-gray-700 text-sm text-center mb-8 max-w-xl mx-auto">
          Are you great at coding, maths, science, or any subject where students struggle? Do you have notes, MCQs, or the ability to explain concepts in a simple way? Become a paid contributor, teacher, or campus ambassador at Just LPUThinks. Share your knowledge, help others, and get rewarded for your effort—no matter your year or branch.
        </p>
        <ul className="mb-10 bg-white/90 border border-gray-100 rounded-xl p-5 shadow flex flex-col gap-3 w-full max-w-2xl mx-auto">
          <li className="flex items-start gap-3">
            <span className="inline-block h-2.5 w-2.5 mt-1 rounded-full bg-blue-400"></span>
            <div>
              <span className="font-medium text-gray-900">Earn by Sharing Resources:</span>
              <span className="text-gray-600 ml-1">Submit your original notes, MCQs, or study materials and get paid for every valid contribution.</span>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="inline-block h-2.5 w-2.5 mt-1 rounded-full bg-blue-400"></span>
            <div>
              <span className="font-medium text-gray-900">Get Paid to Teach:</span>
              <span className="text-gray-600 ml-1">Record video lectures or explain tough concepts—help students and earn for every quality lesson.</span>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="inline-block h-2.5 w-2.5 mt-1 rounded-full bg-blue-400"></span>
            <div>
              <span className="font-medium text-gray-900">Campus Ambassador Rewards:</span>
              <span className="text-gray-600 ml-1">Promote Just LPUThinks to your network and earn exclusive rewards and recognition.</span>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="inline-block h-2.5 w-2.5 mt-1 rounded-full bg-blue-400"></span>
            <div>
              <span className="font-medium text-gray-900">All Skills Welcome:</span>
              <span className="text-gray-600 ml-1">Whether you love coding, design, management, or content creation—there’s a place (and a reward) for you.</span>
            </div>
          </li>
        </ul>
        <div className="w-full max-w-2xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8 mt-8">
          <div className="flex flex-col items-center gap-3">
            <FaEnvelope className="text-blue-600 w-6 h-6" />
            <a href="mailto:contact@justlputhinks.com" className="text-blue-600 hover:underline text-sm">
              contact@justlputhinks.com
            </a>
          </div>
          <div className="flex flex-col items-center gap-3">
            <FaInstagram className="text-pink-500 w-6 h-6" />
            <a href="https://instagram.com/demo" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:underline text-sm">
              @justlputhinks
            </a>
          </div>
          <div className="flex flex-col items-center gap-3">
            <FaWhatsapp className="text-green-600 w-6 h-6" />
            <a href="https://chat.whatsapp.com/demo" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline text-sm">
              Join WhatsApp Group
            </a>
          </div>
        </div>
        <div className="mt-12 text-center text-xs text-gray-500">
          Reach out now—our team will guide you through getting started, onboarding, and how you get paid for your contributions!
        </div>
      </motion.section>
    </main>
  );
}
