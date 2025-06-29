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
          <Link href="/demand" className="relative flex items-center group">
            <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 font-semibold text-xs flex items-center gap-1 shadow-sm group-hover:bg-blue-100 transition">
              Your Demand
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
              </span>
            </span>
            <span className="absolute -top-3 right-0 bg-gradient-to-r from-blue-500 to-blue-700 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-lg animate-bounce pointer-events-none">
              NEW
            </span>
          </Link>
        </nav>
        <div className="flex items-center">
          <NotificationBell />
        </div>
      </div>
    </header>
  );
}
