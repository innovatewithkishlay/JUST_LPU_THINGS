"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Footer() {
  const [showPopup, setShowPopup] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target as Node)
      ) {
        setShowPopup(false);
      }
    }
    if (showPopup) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showPopup]);

  return (
    <footer className="w-full border-t border-gray-200 bg-white py-6 relative font-light">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 gap-2 text-xs text-gray-500">
        <div>
          © {new Date().getFullYear()} Just LPUThinks
        </div>
        <div className="relative flex items-center">
          <span>Know the developer </span>
          <button
            onClick={() => setShowPopup((v) => !v)}
            className="ml-1 text-blue-600 font-semibold hover:underline focus:outline-none"
            style={{ fontWeight: 400, letterSpacing: "0.02em" }}
          >
            Kishlay
          </button>
          <AnimatePresence>
            {showPopup && (
              <motion.div
                ref={popupRef}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.22 }}
                tabIndex={0}
                className="absolute bottom-10 right-0 bg-white border border-gray-200 rounded-lg shadow-lg p-4 w-64 text-xs text-gray-700 font-light z-50"
                style={{ fontFamily: "inherit", fontWeight: 300, letterSpacing: "0.01em" }}
              >
                <div className="mb-2 font-semibold text-gray-800">
                  Want to say thanks or contact the developer?
                </div>
                <div className="mb-2 text-gray-500">
                  Here are the ways:
                </div>
                <ul className="space-y-1">
                  <li>
                    <a
                      href="https://github.com/innovatewithkishlay"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      GitHub
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/kishlaykumar1/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      LinkedIn
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://x.com/kishlay_012"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a
                      href="mailto:kishlay141@gmail.com"
                      className="text-blue-600 hover:underline"
                    >
                      Email
                    </a>
                  </li>
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <div className="hidden md:block">
          <span className="text-gray-300 mx-2">|</span>
          <span>
            {["Resources", "Videos", "Join Us", "About"].map((txt, i) => (
              <a
                key={txt}
                href={`/${txt.toLowerCase().replace(/\s/g, "")}`}
                className="text-gray-500 hover:text-blue-700 transition mx-1"
              >
                {txt}
              </a>
            ))}
          </span>
        </div>
      </div>
    </footer>
  );
}
