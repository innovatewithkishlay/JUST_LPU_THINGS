"use client";

import { motion } from '@/lib/motion';
import Link from "next/link";

const notifications = [
  {
    id: 1,
    title: "New MCQs Available",
    message: "2nd Semester Mathematics MCQs uploaded.",
    timestamp: "2 hours ago",
    link: "/resources/2/maths"
  },
  {
    id: 2,
    title: "Exam Schedule Update",
    message: "EEE end-term exam dates announced.",
    timestamp: "1 day ago",
    link: "/resources/1/electrical"
  }
];

export default function NotificationsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-white flex flex-col items-center justify-center px-4 py-16">
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <h1 className="text-2xl font-extrabold text-gray-900 mb-8 tracking-tight text-center">
          Notifications
        </h1>
        <div className="flex flex-col gap-5">
          {notifications.length === 0 ? (
            <div className="bg-white border border-gray-200 rounded-xl p-8 text-center text-gray-500 text-sm">
              No notifications
            </div>
          ) : (
            notifications.map((n, i) => (
              <motion.div
                key={n.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i, duration: 0.4, type: "spring" }}
                className="bg-white border border-gray-200 rounded-xl px-6 py-5 flex flex-col gap-1 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between">
                  <div className="font-medium text-gray-900 text-sm">{n.title}</div>
                  <span className="text-xs text-gray-400">{n.timestamp}</span>
                </div>
                <div className="text-gray-600 text-xs mt-1">{n.message}</div>
                <div className="mt-2">
                  <Link
                    href={n.link}
                    className="text-xs font-medium text-blue-600 hover:underline"
                  >
                    View details
                  </Link>
                </div>
              </motion.div>
            ))
          )}
        </div>
      </motion.section>
    </main>
  );
}
