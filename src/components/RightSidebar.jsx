"use client";

import { User } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function RightSidebar({ onExploreClick }) {
  return (
    <nav className="hidden lg:flex items-center gap-4 absolute right-8 lg:right-12 top-1/2 -translate-y-1/2 z-30 pointer-events-auto">
      {/* Explore Icon Button — clicking this starts the animation */}


      {/* Dashed arc vector background */}
      <div className="relative flex flex-col items-center">
        <svg
          className="absolute -right-6 top-1/2 -translate-y-1/2 h-[220px] w-12 pointer-events-none"
          viewBox="0 0 40 200"
        >
          <path
            d="M 5,10 Q 35,100 5,190"
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
            title="Messages / Chat"
            className="w-12 h-12 rounded-full glass-btn flex items-center justify-center text-gray-300 mr-10 group"
          >
            <Image
              src="/assets/msgIcon.png"
              alt="Messages"
              width={20}
              height={20}
              className="opacity-70 group-hover:opacity-100 transition-opacity"
            />
          </motion.button>
          <motion.button
           onClick={onExploreClick}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            title="Timeline Specs"
            className="w-12 h-12 rounded-full glass-btn flex items-center justify-center text-gray-300 border-red-500/40 group"
          >
                <Image
          src="/assets/explorIcon.png"
          alt="Explore Timeline"
          width={20}
          height={20}
          className="opacity-80 group-hover:opacity-100 transition-opacity"
        />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            title="Profile Settings"
            className="w-12 h-12 rounded-full glass-btn flex items-center justify-center text-gray-300 mr-10"
          >
            <User className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </nav>
  );
}
