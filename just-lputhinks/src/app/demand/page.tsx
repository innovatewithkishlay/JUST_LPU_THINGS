"use client";

import { useState } from "react";
import { motion, AnimatePresence } from '@/lib/motion';

export default function DemandPage() {
  const [showForm, setShowForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const isFormValid = formData.name.trim() !== '' && formData.email.trim() !== '' && formData.message.trim() !== '';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-white flex flex-col items-center px-4 py-10">
      <motion.section
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, type: "spring" }}
        className="w-full max-w-6xl"
      >
        <div className="relative flex flex-col md:flex-row items-start justify-center min-h-[500px] gap-8">
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: showForm ? -150 : 0 }}
            transition={{ duration: 0.6, type: "spring" }}
            className="w-full md:w-1/2 bg-white/90 border border-gray-200 rounded-xl p-6 shadow-lg backdrop-blur z-10"
          >
            <div className="flex flex-col items-center md:items-start">
              <div className="bg-white/80 backdrop-blur border border-blue-100 shadow-lg rounded-full px-6 py-3 flex items-center gap-2 mb-6">
                <span className="inline-block h-3 w-3 rounded-full bg-blue-500 animate-pulse"></span>
                <span className="text-blue-700 font-semibold text-sm tracking-widest uppercase">
                  Student Voice
                </span>
              </div>
              <h1 className="text-3xl font-extrabold text-gray-900 mb-3 tracking-tight text-center md:text-left">
                Tell Us What You Want
              </h1>
              <p className="text-gray-600 text-sm mb-8 text-center md:text-left">
                We want to make Just LPUThinks the best resource hub for you.<br />
                <span className="text-blue-700 font-semibold">Your ideas, doubts, and requests directly shape our next updates.</span>
              </p>
              <ul className="mb-8 bg-white/90 border border-gray-100 rounded-xl p-5 shadow flex flex-col gap-3">
                <li className="flex items-start gap-3">
                  <span className="inline-block h-2.5 w-2.5 mt-1 rounded-full bg-blue-400"></span>
                  <div>
                    <span className="font-medium text-gray-900">Request New Resources:</span>
                    <span className="text-gray-600 ml-1">Ask for notes, MCQs, PPTs, or video lectures for any subject or semester.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="inline-block h-2.5 w-2.5 mt-1 rounded-full bg-blue-400"></span>
                  <div>
                    <span className="font-medium text-gray-900">Suggest Platform Features:</span>
                    <span className="text-gray-600 ml-1">Share ideas for new tools, search filters, or collaboration options.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="inline-block h-2.5 w-2.5 mt-1 rounded-full bg-blue-400"></span>
                  <div>
                    <span className="font-medium text-gray-900">Ask Doubts or Questions:</span>
                    <span className="text-gray-600 ml-1">Submit your academic or technical doubts - our team and community will help.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="inline-block h-2.5 w-2.5 mt-1 rounded-full bg-blue-400"></span>
                  <div>
                    <span className="font-medium text-gray-900">Feedback & Improvements:</span>
                    <span className="text-gray-600 ml-1">Help us improve the platform&apos;s design, speed, or accessibility.</span>
                  </div>
                </li>
              </ul>
              <div className="text-left mb-7">
                <span className="inline-block text-xs text-gray-500">
                  Every submission is reviewed by our team. Most requested features and resources get top priority.
                </span>
              </div>
              {!showForm && !submitted && (
                <button
                  onClick={() => setShowForm(true)}
                  className="bg-blue-600 text-white rounded-lg px-8 py-3 font-semibold shadow-md hover:bg-blue-700 transition text-base"
                >
                  Share Your Feedback
                </button>
              )}
            </div>
          </motion.div>
          <AnimatePresence mode="wait">
            {showForm && !submitted && (
              <motion.form
                key="form"
                initial={{ opacity: 0, x: 150 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 150 }}
                transition={{ duration: 0.6, type: "spring" }}
                  action="https://formspree.io/f/mblyqvvv"
                method="POST"
                className="bg-white/90 border border-gray-200 rounded-xl p-8 flex flex-col gap-5 shadow-xl backdrop-blur w-full md:w-1/2"
                onSubmit={e => {
                  e.preventDefault();
                  setShowForm(false);
                  setSubmitted(true);
                }}
              >
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your Name"
                  className="w-full rounded-lg border border-gray-200 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-100 transition"
                  value={formData.name}
                  onChange={handleChange}
                />
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Your Email"
                  className="w-full rounded-lg border border-gray-200 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-100 transition"
                  value={formData.email}
                  onChange={handleChange}
                />
                <textarea
                  name="message"
                  required
                  placeholder="What do you want? (Feature, Resource, Doubt, etc.)"
                  rows={4}
                  className="w-full rounded-lg border border-gray-200 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-100 transition resize-none"
                  value={formData.message}
                  onChange={handleChange}
                />
                <button
                  type="submit"
                  disabled={!isFormValid}
                  className={`w-full rounded-lg py-2 text-sm font-semibold shadow-md transition ${isFormValid ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`}
                >
                  Submit
                </button>
              </motion.form>
            )}
          </AnimatePresence>
          {submitted && (
            <motion.div
              key="thanks"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.4, type: "spring" }}
              className="flex flex-col items-center w-full md:w-1/2 md:mx-auto mt-12"
            >
              <div className="bg-blue-50 border border-blue-100 rounded-full px-6 py-4 mb-4 shadow-sm">
                <span className="text-2xl">🎉</span>
              </div>
              <div className="text-xl font-bold text-gray-900 mb-2 text-center">
                Thanks for your response!
              </div>
              <div className="text-gray-600 text-sm text-center max-w-xs mb-2">
                We appreciate your feedback and will get back to you if needed. Your input helps us make Just LPUThinks better for everyone.
              </div>
              <div className="text-xs text-gray-400 text-center">
                Want to contribute more? <a href="/join" className="text-blue-600 underline">Join our team</a> or connect on our WhatsApp group!
              </div>
            </motion.div>
          )}
        </div>
      </motion.section>
    </main>
  );
}
