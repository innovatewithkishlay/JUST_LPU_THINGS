"use client";
import Link from "next/link";
import NotificationBell from "./NotificationBell";

export default function Header() {
  return (
    <header className="sticky top-0 z-30 bg-white/80 backdrop-blur border-b border-gray-100">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center space-x-2">
          <span className="inline-block w-8 h-8 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center text-lg shadow-sm">
            J
          </span>
          <span className="text-xl font-semibold tracking-tight text-gray-900">
            Just <span className="text-blue-600">LPUThinks</span>
          </span>
        </Link>
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/resources" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Resources</Link>
          <Link href="/videos" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Videos</Link>
          <Link href="/join" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Join Us</Link>
          <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">About</Link>
        </nav>
        <div className="flex items-center space-x-2">
          <NotificationBell />
        </div>
      </div>
    </header>
  );
}
