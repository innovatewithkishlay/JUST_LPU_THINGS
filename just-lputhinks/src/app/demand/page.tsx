"use client";

import { motion } from '@/lib/motion';

export default function DemandPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-white flex flex-col items-center px-6 py-16">
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <h1 className="text-2xl font-extrabold text-gray-900 mb-6 tracking-tight text-center">
          Tell Us What You Want
        </h1>
        <p className="text-gray-600 text-xs text-center mb-6">
          Suggest new features, request resources, or share your doubts. We’re here to help and improve Just LPUThinks for you.
        </p>
        <form
          action="https://formspree.io/f/demo" 
          method="POST"
          className="bg-white border border-gray-200 rounded-2xl p-6 flex flex-col gap-4 shadow-sm"
        >
          <input
            type="text"
            name="name"
            required
            placeholder="Your Name"
            className="w-full rounded-md border border-gray-200 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-100 transition"
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Your Email"
            className="w-full rounded-md border border-gray-200 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-100 transition"
          />
          <textarea
            name="message"
            required
            placeholder="What do you want? (Feature, Resource, Doubt, etc.)"
            rows={4}
            className="w-full rounded-md border border-gray-200 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-100 transition resize-none"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white rounded-md py-2 text-sm font-medium hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </form>
        <div className="text-center mt-6 text-xs text-gray-400">
          Your feedback helps us make Just LPUThinks better for everyone.
        </div>
      </motion.section>
    </main>
  );
}
