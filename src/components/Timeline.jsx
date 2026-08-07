"use client";

import { motion } from "framer-motion";

const timelineData = [
  { id: 1, label: "LAP 01", desc: "Speed Zone", translateY: 67 },
  { id: 2, label: "LAP 02", desc: "Acceleration Zone", translateY: 67 },
  { id: 3, label: "LAP 03", desc: "Technical Section", translateY: 53 },
  { id: 4, label: "LAP 04", desc: "High Speed Zone", translateY: 37 },
  { id: 5, label: "LAP 05", desc: "Final Corner", translateY: 29 },
];

export default function Timeline({ activeLap = 4, onLapSelect }) {
  return (
    <footer className="relative z-20 w-full pt-4 pb-8 flex flex-col justify-end pointer-events-none">
      {/* SVG CURVED TIMELINE PATH */}
      <div className="relative w-full h-[100px] overflow-visible">
        <svg
          className="w-full h-full overflow-visible"
          viewBox="0 0 1200 100"
          preserveAspectRatio="none"
        >
          <path
            id="timeline-path"
            d="M 0,95 Q 300,110 600,85 T 1200,60"
            fill="none"
            stroke="#E10600"
            strokeWidth="1.8"
            strokeDasharray="5,5"
            opacity="0.85"
          />
        </svg>

        {/* TIMELINE CHECKPOINT NODES */}
        <div
          id="timeline-nodes-container"
          className="absolute inset-0 max-w-6xl mx-auto flex justify-between items-center px-8 md:px-16 pointer-events-auto"
        >
          {timelineData.map((lap) => {
            const isActive = activeLap === lap.id;
            return (
              <div
                key={lap.id}
                onClick={() => onLapSelect(lap.id)}
                className={`timeline-node w-24 sm:w-28 group flex flex-col items-center relative ${
                  isActive ? "active-node" : ""
                }`}
                style={{ transform: `translateY(${lap.translateY}px)` }}
              >
                {isActive ? (
                  <div className="node-circle w-7 h-7 rounded-full bg-ferrariRed border-2 border-white/80 shadow-[0_0_20px_#E10600] flex items-center justify-center animate-pulse-glow">
                    <div className="w-2.5 h-2.5 rounded-full bg-white"></div>
                  </div>
                ) : (
                  <div className="node-circle w-5 h-5 rounded-full bg-[#181820] border-2 border-gray-400 group-hover:border-ferrariRed transition-all flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-400 group-hover:bg-ferrariRed"></div>
                  </div>
                )}
                {/* Vertical Dashed Guide Line */}
                <div
                  className={`w-[1px] ${
                    isActive ? "h-8 bg-gradient-to-b from-ferrariRed to-transparent border-ferrariRed" : "h-6 bg-gradient-to-b from-gray-500/40 to-transparent border-gray-500/40"
                  } border-l border-dashed mt-1 transition-all`}
                ></div>
              </div>
            );
          })}
        </div>
      </div>

      {/* TIMELINE LABELS */}
      <div className="w-full max-w-6xl mx-auto flex justify-between items-center px-8 md:px-16 text-center mt-16 z-20 pointer-events-auto">
        {timelineData.map((lap) => {
          const isActive = activeLap === lap.id;
          return (
            <div
              key={lap.id}
              onClick={() => onLapSelect(lap.id)}
              className={`lap-label w-24 sm:w-28 cursor-pointer transition-colors flex flex-col items-center text-center ${
                isActive ? "text-white font-bold" : "text-gray-400 hover:text-white"
              }`}
            >
              <div
                className={`font-heading font-bold text-xs sm:text-sm tracking-wider uppercase ${
                  isActive ? "text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.6)]" : ""
                }`}
              >
                {lap.label}
              </div>
              <div
                className={`text-[11px] font-medium whitespace-nowrap ${
                  isActive ? "text-gray-300" : "text-gray-400"
                }`}
              >
                {lap.desc}
              </div>
            </div>
          );
        })}
      </div>
    </footer>
  );
}
