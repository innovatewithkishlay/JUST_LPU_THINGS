"use client";

import { motion } from '@/lib/motion';
import Link from "next/link";

const playlists = [
  {
    id: 1,
    title: "Just LpuThings- BTech Semester 1",
    description: "Handpicked YouTube playlists for LPU Semester 1—Maths, Physics, Programming and more.",
    url: "https://www.youtube.com/playlist?list=PL8dPuuaLjXtMczXZUmjb5FcZb8RkB5JgF"
  },
  {
    id: 2,
    title: "Just LpuThings- BTech Semester 2",
    description: "Essential video lectures for Semester 2: Data Structures, Chemistry, and core subjects.",
    url: "https://www.youtube.com/playlist?list=PL8dPuuaLjXtNpp0dKp9Fqj6gKZb1n9l9O"
  },
  {
    id: 3,
    title: "Just LpuThings- BTech Semester 3",
    description: "Advanced concepts, coding, and branch-specific playlists for Semester 3.",
    url: "https://www.youtube.com/playlist?list=PL8dPuuaLjXtOeEc9ME62zTfqc0hT6Y3aH"
  },
  {
    id: 4,
    title: "Just LpuThings- BTech Semester 4",
    description: "Subject-wise playlists for Semester 4, including electives and specializations.",
    url: "https://www.youtube.com/playlist?list=PL8dPuuaLjXtM9g6qkE6zqkJ1JpN96CB2F"
  }
];

export default function VideosPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-white flex flex-col items-center px-4 py-16">
      <motion.section
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, type: 'spring' }}
        className="w-full max-w-5xl"
      >
        <h1 className="text-3xl font-extrabold text-gray-900 mb-4 tracking-tight text-center">
          Curated Video Playlists
        </h1>
        <p className="text-gray-600 text-sm text-center mb-10 max-w-2xl mx-auto">
          Explore the best YouTube playlists for each semester—handpicked for LPU students. All videos are from the <span className="text-blue-700 font-semibold">Just LpuThings</span> channel. Watch, revise, and master every subject visually.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {playlists.map((playlist, idx) => (
            <motion.a
              key={playlist.id}
              href={playlist.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * idx, duration: 0.5, type: "spring" }}
              className="group bg-white border border-gray-200 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all flex flex-col items-center justify-center relative overflow-hidden hover:-translate-y-2"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400/40 via-blue-600/40 to-blue-400/40 opacity-0 group-hover:opacity-100 transition" />
              <div className="w-16 h-16 rounded-xl bg-blue-50 flex items-center justify-center mb-4 shadow group-hover:scale-105 transition">
                <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <h2 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition text-center">{playlist.title}</h2>
              <p className="text-gray-600 text-xs text-center mb-4">{playlist.description}</p>
              <span className="mt-auto bg-blue-600 text-white px-5 py-2 rounded-lg text-xs font-semibold shadow hover:bg-blue-700 transition">
                Watch Playlist
              </span>
            </motion.a>
          ))}
        </div>
        <div className="mt-12 text-center text-xs text-gray-400">
          Want to see your playlist here? <Link href="/demand" className="text-blue-600 underline">Request a playlist</Link>
        </div>
        <div className="mt-8 flex flex-col items-center">
          <a
            href="https://www.youtube.com/@LegendsofPW/playlists"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 font-semibold underline hover:text-blue-900 text-sm"
          >
            Visit the Channel
          </a>
        </div>
      </motion.section>
    </main>
  );
}
