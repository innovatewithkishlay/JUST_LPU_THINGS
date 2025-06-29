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
    <main className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-white flex flex-col items-center px-4 py-6">
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
              initial={{ opacity: 0, y: 16, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -16, scale: 0.95 }}
              transition={{ duration: 0.5, type: "spring" }}
              className="flex flex-col items-center w-full md:w-2/3 mx-auto mt-12"
            >
              <div className="flex flex-col items-center bg-white/90 border border-blue-100 rounded-2xl px-8 py-10 shadow-xl">
                <div className="mb-5">
                  <span className="inline-flex items-center justify-center rounded-full bg-blue-100 shadow h-16 w-16">
                    <svg className="h-10 w-10 text-blue-600 animate-bounce" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth={2.5} fill="none" />
                    </svg>
                  </span>
                </div>
                <div className="text-2xl font-extrabold text-gray-900 mb-3 text-center">
                  Thanks for your response!
                </div>
                <div className="text-gray-600 text-base text-center mb-6 max-w-md">
                  We appreciate your feedback and will get back to you if needed.<br />
                  Your input helps us make <span className="font-semibold text-blue-600">Just LPUThinks</span> better for everyone.
                </div>
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <a
                    href="/join"
                    className="bg-blue-600 text-white px-5 py-2 rounded-lg text-sm font-semibold shadow hover:bg-blue-700 transition"
                  >
                    Join our team
                  </a>
                  <a
                    href="https://wa.me/911234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-green-600 hover:text-green-800 text-sm font-semibold"
                  >
                    <svg className="h-5 w-5" viewBox="0 0 32 32" fill="currentColor"><path d="M16 3C9.373 3 4 8.373 4 15c0 2.617.845 5.036 2.277 7.04L4 29l7.14-2.253C12.995 27.58 14.466 28 16 28c6.627 0 12-5.373 12-13S22.627 3 16 3zm0 23c-1.335 0-2.635-.22-3.855-.637l-.273-.09-4.225 1.334 1.382-4.02-.178-.278C7.187 19.092 6.5 17.09 6.5 15c0-5.238 4.262-9.5 9.5-9.5s9.5 4.262 9.5 9.5-4.262 9.5-9.5 9.5zm5.25-7.25c-.287-.144-1.7-.84-1.962-.936-.262-.096-.453-.144-.645.144-.192.287-.74.936-.907 1.13-.168.192-.335.216-.622.072-.287-.144-1.213-.447-2.31-1.426-.854-.762-1.43-1.703-1.598-1.99-.168-.288-.018-.444.127-.588.13-.129.287-.335.43-.504.144-.168.192-.288.288-.48.096-.192.048-.36-.024-.504-.072-.144-.645-1.557-.885-2.134-.234-.562-.472-.486-.646-.495l-.549-.009c-.192 0-.504.072-.768.36-.264.288-1.008.984-1.008 2.4 0 1.416 1.032 2.784 1.176 2.976.144.192 2.032 3.104 5.07 4.23.71.244 1.263.389 1.695.497.712.181 1.36.156 1.872.095.571-.068 1.7-.693 1.94-1.363.24-.67.24-1.243.168-1.363-.072-.12-.262-.192-.549-.336z"/></svg>
                    WhatsApp Group
                  </a>
                </div>
                <div className="mt-4 text-xs text-gray-400 text-center">
                  Want to contribute more? Join our team or connect on WhatsApp!
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </motion.section>
    </main>
  );
}
