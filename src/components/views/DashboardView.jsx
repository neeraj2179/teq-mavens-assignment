"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const lapSpecs = {
  1: { topSpeed: '325', power: '580', torque: '710', accel: '3.6 Sec', oil: '2,800 KM', range: '560 KM' },
  2: { topSpeed: '338', power: '600', torque: '740', accel: '3.4 Sec', oil: '2,600 KM', range: '540 KM' },
  3: { topSpeed: '345', power: '610', torque: '760', accel: '3.3 Sec', oil: '2,500 KM', range: '530 KM' },
  4: { topSpeed: '352', power: '620', torque: '780', accel: '3.2 Sec', oil: '2,450 KM', range: '520 KM' },
  5: { topSpeed: '348', power: '615', torque: '770', accel: '3.3 Sec', oil: '2,400 KM', range: '510 KM' }
};

export default function DashboardView({ activeLap, isAnimating }) {
  const data = lapSpecs[activeLap] || lapSpecs[4];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-11 gap-8 items-center"
    >
      {/* LEFT SPECS (3 items) */}
      <div className={`md:col-span-3 flex flex-row md:flex-col justify-around md:justify-center gap-6 md:gap-12 text-center md:text-right pointer-events-auto transition-opacity duration-700 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
        <div className="spec-card group cursor-pointer -mr-10">
          <motion.div
            key={data.topSpeed}
            initial={{ opacity: 0.3, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading font-bold text-3xl md:text-3xl text-white tracking-tight group-hover:text-ferrariRed transition-colors duration-300"
          >
            {data.topSpeed}
          </motion.div>
          <div className="text-[11px] font-sans font-normal leading-none tracking-normal text-gray-400 mt-0.5">Top Speed</div>
        </div>

        <div className="spec-card group cursor-pointer">
          <motion.div
            key={data.power}
            initial={{ opacity: 0.3, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading font-bold text-3xl md:text-3xl text-white tracking-tight group-hover:text-ferrariRed transition-colors duration-300"
          >
            {data.power}
          </motion.div>
          <div className="text-[11px] font-sans font-normal leading-none tracking-normal text-gray-400 mt-0.5">Power (HP)</div>
        </div>

        <div className="spec-card group cursor-pointer -mr-10">
          <motion.div
            key={data.torque}
            initial={{ opacity: 0.3, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading font-bold text-3xl md:text-3xl text-white tracking-tight group-hover:text-ferrariRed transition-colors duration-300"
          >
            {data.torque}
          </motion.div>
          <div className="text-[11px] font-sans font-normal leading-none tracking-normal text-gray-400 mt-0.5">Torque</div>
        </div>
      </div>

      {/* CENTER SPOTLIGHT CAR CONTAINER */}
      <div className="md:col-span-5 flex justify-center items-center relative pointer-events-auto">
        {/* Concentric Background Rings */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0">
          <div className="w-[340px] h-[340px] sm:w-[420px] sm:h-[420px] md:w-[460px] md:h-[460px] border border-white/[0.12] rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[580px] h-[580px] border border-white/[0.08] rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[820px] h-[820px] border border-white/[0.05] rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1080px] h-[1080px] border border-white/[0.03] rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1380px] h-[1380px] border border-white/[0.015] rounded-full"></div>

          {/* Central Red Aura Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] bg-red-600/15 rounded-full blur-[110px]"></div>
        </div>

        {/* Circular Outer Frame with Glow — fades out during animation */}
        <motion.div 
          initial={{ opacity: 1 }}
          animate={isAnimating ? { opacity: 0 } : { opacity: 1 }}
          transition={{ duration: 0.4 }}
          className={`relative z-10 w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] md:w-[380px] md:h-[380px] rounded-full p-2.5 bg-gradient-to-b from-white/20 via-white/5 to-transparent border border-white/20 shadow-[0_0_50px_rgba(255,255,255,0.12)] flex items-center justify-center overflow-hidden ${!isAnimating ? 'animate-float' : ''}`}
        >
          {/* Inner Spotlight Circle Image */}
          <div className="w-full h-full rounded-full overflow-hidden relative shadow-2xl bg-black border border-white/10 group">
            <Image
              src="/assets/Homecar.jpg"
              alt="Supercar Front View"
              width={400}
              height={400}
              className="w-full h-full object-cover transform scale-105 group-hover:scale-110 transition-transform duration-700 ease-out"
            />
            {/* Vignette & Lighting Overlay */}
            <div className="absolute inset-0 bg-radial-vignette mix-blend-multiply opacity-60 pointer-events-none"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none"></div>

            {/* Glass Reflective Sheen */}
            <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-gradient-to-br from-white/10 via-transparent to-transparent rotate-45 pointer-events-none"></div>
          </div>
        </motion.div>
      </div>

      {/* RIGHT SPECS (3 items) */}
      <div className={`md:col-span-3 flex flex-row md:flex-col justify-around md:justify-center gap-6 md:gap-12 text-center md:text-left pointer-events-auto transition-opacity duration-700 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
        <div className="spec-card group cursor-pointer -ml-8">
          <motion.div
            key={data.accel}
            initial={{ opacity: 0.3, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading font-bold text-3xl md:text-3xl text-white tracking-tight group-hover:text-ferrariRed transition-colors duration-300"
          >
            {data.accel}
          </motion.div>
          <div className="text-[11px] font-sans font-normal leading-none tracking-normal text-gray-400 mt-0.5">0–100 KM/H</div>
        </div>

        <div className="spec-card group cursor-pointer">
          <motion.div
            key={data.oil}
            initial={{ opacity: 0.3, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading font-bold text-3xl md:text-3xl text-white tracking-tight group-hover:text-ferrariRed transition-colors duration-300"
          >
            {data.oil}
          </motion.div>
          <div className="text-[11px] font-sans font-normal leading-none tracking-normal text-gray-400 mt-0.5">Oil Change</div>
        </div>

        <div className="spec-card group cursor-pointer -ml-8">
          <motion.div
            key={data.range}
            initial={{ opacity: 0.3, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading font-bold text-3xl md:text-3xl text-white tracking-tight group-hover:text-ferrariRed transition-colors duration-300"
          >
            {data.range}
          </motion.div>
          <div className="text-[11px] font-sans font-normal leading-none tracking-normal text-gray-400 mt-0.5">Range</div>
        </div>
      </div>
    </motion.div>
  );
}
