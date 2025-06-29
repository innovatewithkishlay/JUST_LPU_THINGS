"use client";

import { motion } from '@/lib/motion';
import Link from "next/link";

const semesters = [
  {
    id: 1,
    title: "Semester 1",
    description: "All notes, MCQs, PPTs, and resources for Semester 1 subjects.",
    link: "/resources/semester/1"
  },
  {
    id: 2,
    title: "Semester 2",
    description: "Complete study material and practice sets for Semester 2.",
    link: "/resources/semester/2"
  },
  {
    id: 3,
    title: "Semester 3",
    description: "Curated resources and guides for Semester 3 courses.",
    link: "/resources/semester/3"
  },
  {
    id: 4,
    title: "Semester 4",
    description: "Handpicked notes, MCQs, and more for Semester 4.",
    link: "/resources/semester/4"
  }
];

export default function ResourcesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-white flex flex-col items-center px-4 py-16">
      <motion.section
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, type: 'spring' }}
        className="w-full max-w-5xl"
      >
        <h1 className="text-3xl font-extrabold text-gray-900 mb-8 tracking-tight text-center">
          Explore Semester Resources
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {semesters.map((sem, idx) => (
            <motion.div
              key={sem.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * idx, duration: 0.5, type: "spring" }}
              className="group bg-white border border-gray-200 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all flex flex-col items-center justify-center relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400/40 via-blue-600/40 to-blue-400/40 opacity-0 group-hover:opacity-100 transition" />
              <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition">{sem.title}</h2>
              <p className="text-gray-600 text-xs text-center mb-4">{sem.description}</p>
              <Link
                href={sem.link}
                className="mt-auto bg-blue-600 text-white px-5 py-2 rounded-lg text-xs font-semibold shadow hover:bg-blue-700 transition"
              >
                View Resources
              </Link>
            </motion.div>
          ))}
        </div>
        <div className="mt-12 text-center text-xs text-gray-400">
          More semesters and resources coming soon. Want to contribute? <Link href="/join" className="text-blue-600 underline">Join us</Link>
        </div>
      </motion.section>
    </main>
  );
}
