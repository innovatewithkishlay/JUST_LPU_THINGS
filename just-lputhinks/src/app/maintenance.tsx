"use client";

import { motion } from '@/lib/motion';

export default function MaintenancePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-50 via-white to-white px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, type: "spring" }}
        className="flex flex-col items-center bg-white/90 border border-blue-200 rounded-2xl px-10 py-14 shadow-xl max-w-lg"
      >
        <div className="flex items-center justify-center mb-6">
          <svg className="h-14 w-14 text-blue-600" fill="none" viewBox="0 0 48 48" stroke="currentColor" strokeWidth={1.5}>
            <circle cx="24" cy="24" r="22" stroke="currentColor" strokeWidth={2.5} fill="#eff6ff" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M16 32h16M24 16v10" />
          </svg>
        </div>
        <h1 className="text-2xl font-extrabold text-gray-900 mb-3 text-center">
          We&apos;ll be back soon!
        </h1>
        <div className="text-gray-700 text-base mb-4 text-center">
          Just LPUThinks is undergoing scheduled maintenance to serve you better.
        </div>
        <div className="text-gray-500 text-sm text-center mb-8">
          Our team is working hard to improve your experience.<br />
          Please check back in a little while.<br />
          <span className="inline-block mt-3 text-blue-600 font-semibold">Thank you for your patience!</span>
        </div>
        <div className="flex flex-col items-center gap-2 w-full">
          <a
            href="/"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium shadow hover:bg-blue-700 transition text-center w-full"
          >
            Go to Homepage
          </a>
          <a
            href="https://status.justlputhinks.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-blue-600 underline hover:text-blue-800 transition"
          >
            Check status updates
          </a>
          <a
            href="mailto:support@justlputhinks.com"
            className="text-xs text-gray-500 underline hover:text-gray-700 transition"
          >
            Contact Support
          </a>
        </div>
        <div className="mt-8 text-xs text-gray-400 text-center">
          For updates, follow us on <a href="https://instagram.com/demo" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Instagram</a> or <a href="https://youtube.com/demo" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">YouTube</a>.
        </div>
      </motion.div>
    </main>
  );
}
