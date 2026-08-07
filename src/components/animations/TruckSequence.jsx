"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Image from "next/image";

export default function TruckSequence({ onMidpoint, onSequenceComplete, triggerSequence }) {
  const truckRef = useRef(null);
  const logoRef = useRef(null);
  const miniCarRef = useRef(null);
  const isPlayingRef = useRef(false);
  const [showMiniCar, setShowMiniCar] = useState(false);

  const onMidpointRef = useRef(onMidpoint);
  const onSequenceCompleteRef = useRef(onSequenceComplete);

  useEffect(() => { onMidpointRef.current = onMidpoint; }, [onMidpoint]);
  useEffect(() => { onSequenceCompleteRef.current = onSequenceComplete; }, [onSequenceComplete]);

  useEffect(() => {
    if (!triggerSequence || isPlayingRef.current) return;

    isPlayingRef.current = true;
    setShowMiniCar(false);

    gsap.set(logoRef.current, { xPercent: -50, yPercent: -50, scaleX: 1 });

    const tl = gsap.timeline({
      onComplete: () => {
        isPlayingRef.current = false;
        onSequenceCompleteRef.current();
      },
    });

    tl
      .fromTo(
        truckRef.current,
        { x: 1800, scaleX: 1 },
        { x: "-20vw", scaleX: 1, duration: 3, ease: "power2.out" }
      )
      .to({}, { duration: 0.5 })
      // Flip the truck and the logo at the same time so the text stays readable
      .to(truckRef.current, {
        scaleX: -1,
        duration: 0.6,
        ease: "power2.inOut",
      }, "flip")
      .to(logoRef.current, {
        scaleX: -1,
        duration: 0.6,
        ease: "power2.inOut",
      }, "flip")
      .call(() => { setShowMiniCar(true); })
      .to({}, { duration: 1.8 })
      .call(() => { if (onMidpointRef.current) onMidpointRef.current(); })
      .to({}, { duration: 0.4 })
      .to(truckRef.current, {
        x: 2200,
        duration: 2.5,
        ease: "power2.in",
      });

    return () => { };
  }, [triggerSequence]);

  useEffect(() => {
    if (showMiniCar && miniCarRef.current) {
      gsap.fromTo(
        miniCarRef.current,
        { x: 0, opacity: 1 },
        { x: 400, opacity: 0, duration: 1.5, ease: "power2.in" }
      );
    }
  }, [showMiniCar]);

  if (!triggerSequence) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      <div
        ref={truckRef}
        className="absolute"
        style={{
          top: "50%",
          left: "50%",
          width: "1000px",
          height: "380px",
          marginLeft: "-450px",
          marginTop: "-170px",
          willChange: "transform",
        }}
      >
        <Image
          src="/assets/9e5c2218a49a03b4c5e08c5822cc3c94f95103a1.png"
          alt="White Truck Trailer"
          fill
          className="object-contain"
          style={{ filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.95))" }}
        />
        <div
          ref={logoRef}
          className="absolute"
          style={{
            top: "45%",
            left: "52%",
            width: "235px",
            height: "130px",
          }}
        >
          <Image
            src="/assets/Group 1321316327.png"
            alt="Vehicle Delivery Logo"
            fill
            className="object-contain"
          />
        </div>
      </div>

      {showMiniCar && (
        <div
          ref={miniCarRef}
          className="absolute flex items-center justify-center"
          style={{
            top: "50%",
            left: "0px",
            marginTop: "-65px",
            width: "130px",
            height: "130px",
          }}
        >
          {/* Thick dark grey border matching the route animation */}
          <div className="absolute inset-0 rounded-full border-[8px] border-[#36363e] shadow-[0_0_20px_rgba(0,0,0,0.8)] z-20"></div>

          <div className="relative w-full h-full rounded-full overflow-hidden z-10 border-2 border-black/50">
            <Image
              src="/assets/car-profile.png"
              alt="Mini Car"
              fill
              className="object-cover"
            />
          </div>
        </div>
      )}
    </div>
  );
}
