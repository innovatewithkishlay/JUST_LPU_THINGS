"use client";

import { motion } from '@/lib/motion';

export default function DemandPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-white flex flex-col items-center px-4 py-16">
      <motion.section
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, type: "spring" }}
        className="w-full max-w-lg"
      >
        <div className="relative flex flex-col items-center mb-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6, type: "spring" }}
            className="bg-white/80 backdrop-blur border border-blue-100 shadow-lg rounded-full px-6 py-3 flex items-center gap-2"
          >
            <span className="inline-block h-3 w-3 rounded-full bg-blue-500 animate-pulse"></span>
            <span className="text-blue-700 font-semibold text-sm tracking-widest uppercase">
              Student Voice
            </span>
          </motion.div>
        </div>
        <h1 className="text-3xl font-extrabold text-gray-900 mb-3 tracking-tight text-center">
          Tell Us What You Want
        </h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-gray-600 text-sm text-center mb-8"
        >
          Suggest new features, request resources, or share your doubts. Your input shapes the future of Just LPUThinks.
        </motion.p>
        <motion.form
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          action="https://formspree.io/f/demo"
          method="POST"
          className="bg-white/90 border border-gray-200 rounded-2xl p-8 flex flex-col gap-5 shadow-xl backdrop-blur"
        >
          <motion.input
            whileFocus={{ scale: 1.03, borderColor: "#2563eb" }}
            type="text"
            name="name"
            required
            placeholder="Your Name"
            className="w-full rounded-lg border border-gray-200 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-100 transition"
          />
          <motion.input
            whileFocus={{ scale: 1.03, borderColor: "#2563eb" }}
            type="email"
            name="email"
            required
            placeholder="Your Email"
            className="w-full rounded-lg border border-gray-200 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-100 transition"
          />
          <motion.textarea
            whileFocus={{ scale: 1.02, borderColor: "#2563eb" }}
            name="message"
            required
            placeholder="What do you want? (Feature, Resource, Doubt, etc.)"
            rows={4}
            className="w-full rounded-lg border border-gray-200 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-100 transition resize-none"
          />
          <motion.button
            whileHover={{ scale: 1.04, backgroundColor: "#2563eb" }}
            type="submit"
            className="w-full bg-blue-600 text-white rounded-lg py-2 text-sm font-semibold shadow-md hover:bg-blue-700 transition"
          >
            Submit
          </motion.button>
        </motion.form>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-center mt-8 text-xs text-gray-400"
        >
          Your feedback helps us make <span className="font-semibold text-blue-600">Just LPUThinks</span> better for everyone.
        </motion.div>
      </motion.section>
    </main>
  );
}
