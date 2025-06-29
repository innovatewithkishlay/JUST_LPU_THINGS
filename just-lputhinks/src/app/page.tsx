import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4">
      <motion.section
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, type: 'spring' }}
        className="w-full max-w-3xl text-center"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-4">
          Just <span className="text-blue-600">LPUThinks</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8">
          Modern resource hub for LPU students. Access semester-wise notes, MCQs, PPTs, and video lectures. Learn, contribute, and collaborate.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/resources"
            className="bg-blue-600 text-white rounded-lg px-6 py-3 font-medium hover:bg-blue-700 transition"
          >
            Browse Resources
          </Link>
          <Link
            href="/join"
            className="bg-white border border-blue-600 text-blue-600 rounded-lg px-6 py-3 font-medium hover:bg-blue-50 transition"
          >
            Join as Contributor
          </Link>
        </div>
      </motion.section>
      <motion.section
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.7, type: 'spring' }}
        className="w-full max-w-4xl mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        <div className="bg-white rounded-xl shadow-sm p-6 flex flex-col items-center">
          <span className="text-blue-600 text-3xl mb-2">📚</span>
          <div className="font-semibold text-gray-900 mb-1">Semester Resources</div>
          <div className="text-gray-600 text-sm">Notes, PPTs, MCQs by semester & subject</div>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-6 flex flex-col items-center">
          <span className="text-blue-600 text-3xl mb-2">🎥</span>
          <div className="font-semibold text-gray-900 mb-1">Video Lectures</div>
          <div className="text-gray-600 text-sm">Curated YouTube playlists for LPU courses</div>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-6 flex flex-col items-center">
          <span className="text-blue-600 text-3xl mb-2">🤝</span>
          <div className="font-semibold text-gray-900 mb-1">Collaborate & Earn</div>
          <div className="text-gray-600 text-sm">Contribute resources and join our team</div>
        </div>
      </motion.section>
    </main>
  );
}
