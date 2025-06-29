"use client";

import Link from "next/link";
import NotificationBell from "./NotificationBell";

export default function Header() {
  return (
    <header className="sticky top-0 z-30 bg-white/90 backdrop-blur border-b border-gray-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-lg font-extrabold tracking-tight text-gray-900">
            Just <span className="text-blue-600">LPUThinks</span>
          </span>
        </Link>
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/resources" className="text-sm text-gray-700 tracking-wide hover:text-blue-600 transition-colors">Resources</Link>
          <Link href="/videos" className="text-sm text-gray-700 tracking-wide hover:text-blue-600 transition-colors">Videos</Link>
          <Link href="/join" className="text-sm text-gray-700 tracking-wide hover:text-blue-600 transition-colors">Join Us</Link>
          <Link href="/about" className="text-sm text-gray-700 tracking-wide hover:text-blue-600 transition-colors">About</Link>
          <Link href="/demand" className="text-sm text-blue-600 font-semibold underline underline-offset-2 hover:text-blue-800 transition-colors">Your Demand</Link>
        </nav>
        <div className="flex items-center">
          <NotificationBell />
        </div>
      </div>
    </header>
  );
}
