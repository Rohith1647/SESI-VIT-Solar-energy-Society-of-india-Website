"use client";

import React, { useMemo, ReactNode } from 'react';
import './ImagegalleryStarryBackground.css';

const generateStars = (count: number) => {
  let shadows = [];
  for (let i = 0; i < count; i++) {
    const x = Math.floor(Math.random() * 2000);
    const y = Math.floor(Math.random() * 2000);
    shadows.push(`${x}px ${y}px #fca311`);
  }
  return shadows.join(', ');
};

interface StarryBackgroundProps {
  children?: ReactNode;
}

export default function ImagegalleryStarryBackground({ children }: StarryBackgroundProps) {
  const stars1 = useMemo(() => generateStars(700), []);
  const stars2 = useMemo(() => generateStars(200), []);
  const stars3 = useMemo(() => generateStars(100), []);

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-black">
      <div className="absolute inset-0 w-full h-full star-layer-1" style={{ boxShadow: stars1 }}>
        <div className="absolute top-[2000px] w-px h-px bg-transparent" style={{ boxShadow: stars1 }} />
      </div>
      <div className="absolute inset-0 w-full h-full star-layer-2" style={{ boxShadow: stars2 }}>
        <div className="absolute top-[2000px] w-[2px] h-[2px] bg-transparent" style={{ boxShadow: stars2 }} />
      </div>
      <div className="absolute inset-0 w-full h-full star-layer-3" style={{ boxShadow: stars3 }}>
        <div className="absolute top-[2000px] w-[3px] h-[3px] bg-transparent" style={{ boxShadow: stars3 }} />
      </div>
      
      {/* Content wrapper */}
      <div className="relative z-10 w-full h-full flex flex-col">
        {children}
      </div>
    </div>
  );
}
