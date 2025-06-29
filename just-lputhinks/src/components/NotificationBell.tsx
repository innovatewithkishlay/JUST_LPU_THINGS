"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from '@/lib/motion';
import Link from "next/link";

export default function NotificationBell() {
  const [isOpen, setIsOpen] = useState(false);
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: "New MCQs Available",
      message: "2nd Semester Mathematics MCQs uploaded",
      timestamp: "2 hours ago",
      read: false,
      link: "/resources/2/maths"
    },
    {
      id: 2,
      title: "Exam Schedule Update",
      message: "EEE end-term exam dates announced",
      timestamp: "1 day ago",
      read: true,
      link: "/resources/1/electrical"
    }
  ]);

  const unreadCount = notifications.filter(n => !n.read).length;

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setNotifications(notifications.map(n => ({ ...n, read: true })));
    }
  };

  return (
    <div className="relative">
      <button 
        onClick={toggleDropdown}
        className="relative p-2 rounded-full hover:bg-gray-100 transition-colors"
        aria-label="Notifications"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
        
        {unreadCount > 0 && (
          <motion.span 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center"
          >
            {unreadCount}
          </motion.span>
        )}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 z-10 overflow-hidden"
          >
            <div className="p-4 border-b border-gray-100">
              <h3 className="font-semibold text-gray-900 text-sm">Notifications</h3>
            </div>
            
            <div className="max-h-80 overflow-y-auto">
              {notifications.length > 0 ? (
                notifications.map((notification) => (
                  <motion.div
                    key={notification.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className={`p-4 border-b border-gray-100 hover:bg-gray-50 transition-colors ${
                      !notification.read ? "bg-blue-50" : ""
                    }`}
                  >
                    <div className="flex justify-between">
                      <h4 className="font-medium text-gray-900 text-sm">{notification.title}</h4>
                      <span className="text-xs text-gray-500">{notification.timestamp}</span>
                    </div>
                    <p className="mt-1 text-xs text-gray-600">{notification.message}</p>
                    <Link 
                      href={notification.link} 
                      className="mt-2 inline-block text-xs text-blue-600 hover:underline"
                    >
                      View details
                    </Link>
                  </motion.div>
                ))
              ) : (
                <div className="p-6 text-center">
                  <p className="text-gray-500 text-sm">No notifications</p>
                </div>
              )}
            </div>
            
            <div className="p-3 bg-gray-50 text-center">
              <Link 
                href="/notifications" 
                className="text-xs text-blue-600 hover:underline"
              >
                View all notifications
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
