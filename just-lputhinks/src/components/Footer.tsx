"use client";

export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-200 bg-white mt-16">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 py-8 gap-2">
        <div className="text-sm text-gray-400">
          © {new Date().getFullYear()} Just LPUThinks
        </div>
        <div className="flex gap-6 text-sm text-gray-500">
          <a href="/resources" className="hover:text-blue-700 transition">Resources</a>
          <a href="/videos" className="hover:text-blue-700 transition">Videos</a>
          <a href="/join" className="hover:text-blue-700 transition">Join Us</a>
          <a href="/about" className="hover:text-blue-700 transition">About</a>
        </div>
        <div className="flex items-center gap-1 text-sm text-gray-400">
          <span>Know the developer:</span>
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
