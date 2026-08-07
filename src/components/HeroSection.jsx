"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Download, Share2, Check } from "lucide-react";

export default function HeroSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      className="relative z-20 w-full flex flex-col items-center"
    >
      <div className="w-full px-4 md:px-12 flex items-center justify-between pointer-events-auto">
        {/* Rounded Back Button */}
        <button
          aria-label="Go Back"
          className="w-9 h-9 rounded-full glass-btn flex items-center justify-center text-gray-300 hover:text-white"
        >
          <ArrowLeft className="w-4 h-4" />
        </button>
        <div className="text-center flex flex-col items-center pointer-events-auto">
          <h1 className="font-shrikhand italic font-normal text-[60px] leading-[39px] tracking-[0.01em] uppercase text-white drop-shadow-md">
            ENGINEERED FOR{" "}
            <span className="font-shrikhand italic font-normal text-[60px] leading-[39px] tracking-[0.01em] uppercase text-ferrariRed drop-shadow-[0_0_20px_rgba(225,6,0,0.8)]">
              PASSION
            </span>
          </h1>
          <p className="text-xs sm:text-sm font-medium text-gray-300 tracking-widest mt-4">
            Precision. Power. Performance
          </p>
          {/* Small Red Pill Line */}
          <div className="w-8 h-[3px] bg-ferrariRed rounded-full mt-2 shadow-[0_0_10px_#E10600]"></div>
        </div>
        {/* Top Right: Actions */}
        <div className="flex items-center gap-3">
          {/* Action Buttons Row */}
          <button
            title="Download Specs"
            className="w-9 h-9 rounded-full glass-btn flex items-center justify-center text-gray-300 hover:text-white"
          >
            <Download className="w-4 h-4" />
          </button>
          <button
            title="Share"
            className="w-9 h-9 rounded-full glass-btn flex items-center justify-center text-gray-300 hover:text-white"
          >
            <Share2 className="w-4 h-4" />
          </button>
          <button
            title="Active Settings"
            className="w-9 h-9 rounded-full btn-active-red flex items-center justify-center text-white"
          >
            <Check className="w-4 h-4 stroke-[3]" />
          </button>
        </div>
      </div>


    </motion.div>
  );
}
