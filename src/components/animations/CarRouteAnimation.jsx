"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import Image from "next/image";

const popups = [
  {
    id: 1,
    title: "Registration",
    desc: "Fill form for submission",
    left: "15%",
  },
  {
    id: 2,
    title: "Consultation",
    desc: "Planning and pricing",
    left: "40%",
  },
  {
    id: 3,
    title: "Artist assign",
    desc: "according to task",
    left: "65%",
  },
  {
    id: 4,
    title: "Vehicle Pickup",
    desc: "Payment & dropoff",
    left: "90%",
  },
];

export default function CarRouteAnimation({
  onSequenceComplete,
  triggerSequence,
}) {
  const containerRef = useRef(null);
  const carRef = useRef(null);
  const trailRef = useRef(null);
  const isPlayingRef = useRef(false);
  const activePopupsRef = useRef([]);
  const [activePopups, setActivePopups] = useState([]);

  useEffect(() => {
    if (!triggerSequence || isPlayingRef.current) return;

    isPlayingRef.current = true;
    activePopupsRef.current = [];
    setActivePopups([]);

    const tl = gsap.timeline({
      onComplete: () => {
        isPlayingRef.current = false;
        setTimeout(onSequenceComplete, 500);
      },
      onUpdate: function () {
        if (trailRef.current && carRef.current) {
          trailRef.current.style.width = carRef.current.style.left;
        }
      }
    });

    tl.to(carRef.current, { duration: 1.2, left: "15%", ease: "power1.inOut" })
      .call(() => {
        if (!activePopupsRef.current.includes(1)) {
          activePopupsRef.current.push(1);
          setActivePopups((p) => [...p, 1]);
        }
      })
      .to({}, { duration: 0.6 }) // Pause
      .to(carRef.current, { duration: 1.2, left: "40%", ease: "power1.inOut" })
      .call(() => {
        if (!activePopupsRef.current.includes(2)) {
          activePopupsRef.current.push(2);
          setActivePopups((p) => [...p, 2]);
        }
      })
      .to({}, { duration: 0.6 }) // Pause
      .to(carRef.current, { duration: 1.2, left: "65%", ease: "power1.inOut" })
      .call(() => {
        if (!activePopupsRef.current.includes(3)) {
          activePopupsRef.current.push(3);
          setActivePopups((p) => [...p, 3]);
        }
      })
      .to({}, { duration: 0.6 }) // Pause
      .to(carRef.current, { duration: 1.2, left: "90%", ease: "power1.inOut" })
      .call(() => {
        if (!activePopupsRef.current.includes(4)) {
          activePopupsRef.current.push(4);
          setActivePopups((p) => [...p, 4]);
        }
      })
      .to({}, { duration: 0.6 }) // Pause
      .to(carRef.current, { duration: 0.8, left: "100%", ease: "power1.in" });

    return () => {
      tl.kill();
      isPlayingRef.current = false;
    };
  }, [triggerSequence, onSequenceComplete]);

  if (!triggerSequence) return null;

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none z-40 flex items-center justify-center overflow-hidden"
    >
      {/* Main Slider Area */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="relative w-[60%] max-w-4xl h-[100px] ml-24"
      >
        {/* Base Dashed Line */}
        <div className="absolute top-1/2 left-0 w-full h-[1px] -translate-y-1/2 border-t-2 border-dashed border-red-600/50"></div>
        
        {/* Glowing Red Trail that follows the car */}
        <div 
          ref={trailRef}
          className="absolute top-1/2 left-0 w-0 h-[2px] -translate-y-1/2 bg-red-600 shadow-[0_0_10px_#E10600]"
        ></div>

        {/* Checkpoint Nodes on the straight line */}
        {popups.map((popup) => (
          <div
            key={popup.id}
            className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-red-600"
            style={{ left: popup.left }}
          >
            {/* Pop-up Info Card */}
            <AnimatePresence>
              {activePopups.includes(popup.id) && (
                <motion.div
                  initial={{ opacity: 0, y: 20, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="absolute bottom-6 -translate-x-1/2 left-1/2 min-w-[200px]"
                >
                  {/* Styling matches the parallelogram card from the screenshots */}
                  <div className="bg-gradient-to-r from-gray-800/90 to-gray-700/80 border border-gray-600/50 backdrop-blur-md px-6 py-4 skew-x-[-15deg] shadow-xl text-center">
                    <div className="skew-x-[15deg]">
                      <h4 className="text-white font-bold text-sm uppercase tracking-wide">
                        {popup.title}
                      </h4>
                      <p className="text-gray-300 text-[11px] mt-1">
                        {popup.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}

        {/* Car Sprite */}
        <div
          ref={carRef}
          className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-[130px] h-[130px] z-10 flex items-center justify-center"
        >
          {/* Thick dark grey border matching the screenshot */}
          <div className="absolute inset-0 rounded-full border-[8px] border-[#36363e] shadow-[0_0_20px_rgba(0,0,0,0.8)] z-20"></div>
          
          <div className="relative w-full h-full rounded-full overflow-hidden z-10 border-2 border-black/50">
            <Image
              src="/assets/car-profile.png"
              alt="Car Profile"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
