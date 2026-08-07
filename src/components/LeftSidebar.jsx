"use client";

import { Gauge, Home } from "lucide-react";
import { motion } from "framer-motion";

export default function LeftSidebar() {
  return (
    <nav className="hidden lg:flex flex-col items-center absolute left-8 lg:left-12 top-1/2 -translate-y-1/2 z-30 pointer-events-auto">
      {/* Dashed arc vector background */}
      <svg
        className="absolute -left-6 top-1/2 -translate-y-1/2 h-[220px] w-12 pointer-events-none"
        viewBox="0 0 40 200"
      >
        <path
          d="M 35,10 Q 5,100 35,190"
          fill="none"
          stroke="rgba(255,255,255,0.15)"
          strokeWidth="1.5"
          strokeDasharray="3,3"
        />
      </svg>
      <div className="flex flex-col gap-6 items-center">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          title="Speedometer"
          className="w-12 h-12 rounded-full glass-btn flex items-center justify-center text-gray-300 ml-10"
        >
          <Gauge className="w-5 h-5" />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.95 }}
          title="Home (Active)"
          className="w-12 h-12 rounded-full btn-active-red flex items-center justify-center text-white scale-110"
        >
          <Home className="w-5 h-5" />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          title="Steering / Mode"
          className="w-12 h-12 rounded-full glass-btn flex items-center justify-center text-gray-300 ml-10"
        >
          <span className="font-bold text-base">₹</span>
        </motion.button>
      </div>
    </nav>
  );
}
