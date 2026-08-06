'use client';

import React from 'react';

export default function Spotlight() {
  // Uses the existing globals.css classes (background rings, spotlight-beam, etc.)
  // and tailwind utilities to position a circular center viewer. Replace the image
  // URL in the <img> with your optimized asset in /public when available.
  const imgUrl = 'https://images.unsplash.com/photo-1549924231-f129b911e442?auto=format&fit=crop&w=800&q=80';

  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Top spotlight beam - cone of light from above (defined in globals.css) */}
      <div className="spotlight-beam absolute left-1/2 -top-[200px]" />

      {/* Center radial glow - soft red tint (globals.css) */}
      <div className="spotlight-center-glow absolute top-1/2 left-1/2" />

      {/* Center viewer + concentric rings */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 flex items-center justify-center">
        <div className="relative flex items-center justify-center">
          {/* Outer animated rings (use globals.css classes) */}
          <div className="background-ring-outer rounded-full absolute -inset-[220px]" aria-hidden />
          <div className="background-ring-1 rounded-full absolute -inset-[200px]" aria-hidden />
          <div className="background-ring-2 rounded-full absolute -inset-[170px]" aria-hidden />
          <div className="background-ring-3 rounded-full absolute -inset-[120px]" aria-hidden />
          <div className="background-ring-4 rounded-full absolute -inset-[80px]" aria-hidden />

          {/* Circular image container */}
          <div className="w-[360px] h-[360px] rounded-full overflow-hidden relative shadow-[0_30px_80px_rgba(0,0,0,0.9)]">
            <img
              src={imgUrl}
              alt="car"
              className="w-full h-full object-cover block transform translate-y-[-6%]"
            />

            {/* soft inner halo */}
            <div className="absolute inset-0 rounded-full pointer-events-none"
              style={{
                boxShadow: 'inset 0 40px 120px rgba(0,0,0,0.9), 0 40px 80px rgba(0,0,0,0.6)',
              }}
            />
          </div>
        </div>
      </div>

      {/* Top-center soft red glow */}
      <div className="spotlight-top-glow absolute top-0 left-1/2" />

      {/* Bottom-right red gradient wash */}
      <div className="spotlight-bottom-wash absolute bottom-0 right-0" />

      {/* Bottom edge red line glow */}
      <div className="spotlight-bottom-edge absolute bottom-0 left-0 w-full" />
    </div>
  );
}
