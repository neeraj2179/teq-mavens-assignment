"use client";

import { useState } from "react";
import { Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Header() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = (newTheme) => {
    setTheme(newTheme);
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative z-50 w-full px-4 lg:px-8 py-1 flex items-center justify-between pointer-events-auto"
    >
      {/* Top Left: Logo & Subtitle */}
      <div className="flex items-center gap-6">
        <div className="flex flex-col">
          <div className="flex items-center select-none -ml-[21px]">
            <Image
              src="/assets/logo.png"
              alt="NEXTCAR Logo"
              width={130}
              height={59}
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>

      {/* Top Right: Actions & Theme Toggle */}
      <div className="flex items-center gap-3">
        {/* Dark/Light Theme Toggle Pill */}
        <div className="glass-panel rounded-full p-1 flex items-center gap-1">
          <button
            onClick={() => toggleTheme("light")}
            title="Light Mode"
            className={`p-1.5 rounded-full transition-colors ${theme === "light"
                ? "bg-white/20 text-white shadow-sm"
                : "text-gray-400 hover:text-white"
              }`}
          >
            <Sun className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={() => toggleTheme("dark")}
            title="Dark Mode"
            className={`p-1.5 rounded-full transition-colors ${theme === "dark"
                ? "bg-white/10 text-white shadow-sm"
                : "text-gray-400 hover:text-white"
              }`}
          >
            <Moon className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </motion.header>
  );
}
