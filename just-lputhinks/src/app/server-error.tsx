"use client";

import { motion } from '@/lib/motion';
import Link from "next/link";

export default function ServerError() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-50 via-white to-white px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, type: "spring" }}
        className="flex flex-col items-center bg-white/90 border border-red-200 rounded-2xl px-10 py-14 shadow-xl max-w-lg"
      >
        <div className="flex items-center justify-center mb-6">
          <svg className="h-14 w-14 text-red-600" fill="none" viewBox="0 0 48 48" stroke="currentColor" strokeWidth={1.5}>
            <circle cx="24" cy="24" r="22" stroke="currentColor" strokeWidth={2.5} fill="#fee2e2" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M24 16v10M24 32h.01" />
          </svg>
        </div>
        <h1 className="text-3xl font-extrabold text-gray-900 mb-2 text-center">500</h1>
        <div className="text-lg font-semibold text-gray-700 mb-3 text-center">
          Server Error
        </div>
        <div className="text-gray-500 text-sm text-center mb-8">
          Oops! Something went wrong on our end.<br />
          Please try again later or contact support if the problem persists.
        </div>
        <div className="flex flex-col sm:flex-row gap-3 w-full justify-center">
          <Link
            href="/"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium shadow hover:bg-blue-700 transition text-center"
          >
            Go to Homepage
          </Link>
          <a
            href="mailto:support@justJust LPUThings.com"
            className="bg-gray-100 text-gray-700 px-6 py-2 rounded-lg font-medium shadow hover:bg-gray-200 transition text-center"
          >
            Contact Support
          </a>
        </div>
      </motion.div>
    </main>
  );
}
