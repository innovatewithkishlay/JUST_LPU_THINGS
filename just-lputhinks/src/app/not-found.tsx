"use client";

import { motion } from '@/lib/motion';
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-50 via-white to-white px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, type: "spring" }}
        className="flex flex-col items-center bg-white/90 border border-gray-200 rounded-2xl px-10 py-14 shadow-xl max-w-lg"
      >
        <div className="flex items-center justify-center mb-6">
          <svg className="h-14 w-14 text-blue-600" fill="none" viewBox="0 0 48 48" stroke="currentColor" strokeWidth={1.5}>
            <circle cx="24" cy="24" r="22" stroke="currentColor" strokeWidth={2.5} fill="#eff6ff" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M18 30h12M20 20h.01M28 20h.01" />
          </svg>
        </div>
        <h1 className="text-4xl font-extrabold text-gray-900 mb-2 text-center">404</h1>
        <div className="text-lg font-semibold text-gray-700 mb-3 text-center">
          Page Not Found
        </div>
        <div className="text-gray-500 text-sm text-center mb-8">
          Sorry, we couldn&apos;t find the page you&apos;re looking for.<br />
          It might have been moved or deleted.
        </div>
        <Link
          href="/"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium shadow hover:bg-blue-700 transition"
        >
          Go to Homepage
        </Link>
      </motion.div>
    </main>
  );
}
