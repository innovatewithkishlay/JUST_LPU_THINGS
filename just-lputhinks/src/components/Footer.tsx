"use client";

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-r from-blue-50 via-white to-blue-100 border-t border-gray-200 mt-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 py-8 gap-4">
        <div className="flex items-center gap-2">
          <span className="text-xl font-extrabold text-blue-700 tracking-tight">Just LPUThinks</span>
          <span className="hidden md:inline text-xs text-gray-400 ml-2">© {new Date().getFullYear()}</span>
        </div>
        <div className="flex gap-6 text-sm text-gray-600 font-medium">
          <a href="/resources" className="hover:text-blue-700 transition">Resources</a>
          <a href="/videos" className="hover:text-blue-700 transition">Videos</a>
          <a href="/join" className="hover:text-blue-700 transition">Join Us</a>
          <a href="/about" className="hover:text-blue-700 transition">About</a>
        </div>
        <div className="flex items-center gap-1 text-xs text-gray-400">
          <span>Made by</span>
          <a
            href="https://kishlaykumar.me"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 font-semibold hover:underline hover:text-blue-900 transition"
          >
            Kishlay Kumar
          </a>
        </div>
      </div>
    </footer>
  );
}
