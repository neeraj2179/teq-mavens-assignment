'use client';

import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import LeftSidebar from '@/components/LeftSidebar';
import RightSidebar from '@/components/RightSidebar';
import TopRightActions from '@/components/TopRightActions';
import BackgroundRings from '@/components/BackgroundRings';
import Spotlight from '@/components/Spotlight';
import Timeline from '@/components/Timeline';
import DashboardView from '@/components/views/DashboardView';
import HomeView from '@/components/views/HomeView';
import ThankYouView from '@/components/views/ThankYouView';
import TruckSequence from '@/components/animations/TruckSequence';
import type { ViewType } from '@/types';

export default function Home() {
  const [activeView, setActiveView] = useState<ViewType>('dashboard');
  const [activeRightItem, setActiveRightItem] = useState('documents');
  const [activeLap, setActiveLap] = useState(3);
  const [pendingLap, setPendingLap] = useState<number | null>(null);
  const [triggerTruckAnim, setTriggerTruckAnim] = useState(false);

  const handleNavigate = (view: ViewType) => {
    setActiveView(view);
  };

  const handleLapSelect = (lapId: number) => {
    if (lapId === activeLap || triggerTruckAnim) return;

    // Instead of instantly switching, we start the cinematic sequence
    setPendingLap(lapId);
    setTriggerTruckAnim(true);
  };

  const handleSequenceComplete = () => {
    setTriggerTruckAnim(false);
    if (pendingLap !== null) {
      setActiveLap(pendingLap);
      setPendingLap(null);
    }
  };

  const renderView = () => {
    switch (activeView) {
      case 'dashboard':
        return <DashboardView key="dashboard" />;
      case 'home':
        return <HomeView key="home" />;
      case 'finance':
        return <ThankYouView key="thankyou" onGoHome={() => setActiveView('home')} />;
      default:
        return <DashboardView key="dashboard" />;
    }
  };

  return (
    <div className="app-shell relative w-screen h-screen bg-bg flex flex-col noise-overlay vignette">
      {/* Background Layers */}
      <Spotlight />
      <BackgroundRings />

      {/* GSAP Cinematic Sequence Layer */}
      <TruckSequence
        triggerSequence={triggerTruckAnim}
        onSequenceComplete={handleSequenceComplete}
      />

      {/* Header */}
      <Header />

      {/* Hero Section */}
      <HeroSection />

      {/* Main Content Area */}
      <div className="main-stage flex-1 flex items-center justify-center relative px-24 z-10">
        <AnimatePresence mode="wait">
          {renderView()}
        </AnimatePresence>
      </div>

      {/* Navigation */}
      <LeftSidebar activeView={activeView} onNavigate={handleNavigate} />
      <RightSidebar activeItem={activeRightItem} onItemClick={setActiveRightItem} />
      <TopRightActions />

      {/* Timeline */}
      <Timeline activeLap={activeLap} onLapSelect={handleLapSelect} />
    </div>
  );
}
