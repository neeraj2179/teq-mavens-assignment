"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import LeftSidebar from "@/components/LeftSidebar";
import RightSidebar from "@/components/RightSidebar";
import Timeline from "@/components/Timeline";
import DashboardView from "@/components/views/DashboardView";
import ThankYouView from "@/components/views/ThankYouView";
import CarRouteAnimation from "@/components/animations/CarRouteAnimation";
import TruckSequence from "@/components/animations/TruckSequence";

export default function Home() {
  const [activeLap, setActiveLap] = useState(4);
  const [activeView, setActiveView] = useState("dashboard"); // "dashboard", "thankyou"

  // Animation states
  const [triggerRouteAnim, setTriggerRouteAnim] = useState(false);
  const [triggerTruckAnim, setTriggerTruckAnim] = useState(false);

  const handleLapSelect = (lapId) => {
    if (!triggerRouteAnim && !triggerTruckAnim) {
      setActiveLap(parseInt(lapId, 10));
    }
  };

  const handleExploreTimeline = () => {
    if (!triggerRouteAnim && !triggerTruckAnim && activeView === "dashboard") {
      setTriggerRouteAnim(true);
    }
  };

  const handleRouteComplete = () => {
    setTriggerRouteAnim(false); // unmount car route (truck overlay will cover it)
    setTriggerTruckAnim(true);
  };

  const handleTruckMidpoint = () => {
    setActiveView("thankyou");
  };

  const handleSequenceComplete = () => {
    setTriggerTruckAnim(false);
    setTriggerRouteAnim(false);
  };

  const isAnimating = triggerRouteAnim || triggerTruckAnim;

  return (
    <div className="bg-darkBg text-white min-h-screen w-full relative flex flex-col justify-between overflow-x-hidden select-none">
      {/* Background radial gradients */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-red-900/15 rounded-full blur-[140px]"></div>
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/[0.03] rounded-full blur-[90px]"></div>
        <div className="spotlight-beam absolute top-0 left-1/2 -translate-x-1/2 w-[480px] h-[75%] opacity-40"></div>
      </div>

      <CarRouteAnimation
        triggerSequence={triggerRouteAnim}
        onSequenceComplete={handleRouteComplete}
      />

      <TruckSequence
        triggerSequence={triggerTruckAnim}
        onMidpoint={handleTruckMidpoint}
        onSequenceComplete={handleSequenceComplete}
      />

      {/* Header & Hero */}
      <div className="flex flex-col z-20">
        <Header />
        <HeroSection />
      </div>

      {/* MAIN CENTER SECTION */}
      <main className="relative z-10 flex-1 flex items-center justify-center px-4 md:px-12 my-auto py-4 mt-6 lg:mt-12">
        <LeftSidebar />

        <AnimatePresence mode="wait">
          {activeView === "dashboard" ? (
            <DashboardView key="dashboard" activeLap={activeLap} isAnimating={isAnimating} />
          ) : (
            <ThankYouView key="thankyou" onGoHome={() => {
              setActiveView("dashboard");
              setTriggerRouteAnim(false);
              setTriggerTruckAnim(false);
            }} />
          )}
        </AnimatePresence>

        <RightSidebar onExploreClick={handleExploreTimeline} />
      </main>

      {/* Timeline — completely stationary lap indicator */}
      <Timeline
        activeLap={activeLap}
        onLapSelect={handleLapSelect}
      />
    </div>
  );
}
