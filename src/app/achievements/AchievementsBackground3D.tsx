"use client";

import dynamic from "next/dynamic";

const AntiGravity = dynamic(() => import("./AchievementsAntiGravity"), { ssr: false });

export default function Background3D() {
  return (
    <div className="fixed inset-0 z-[-1] bg-black">
      <AntiGravity 
        color="#94a3b8" 
        particleShape="sphere" 
        waveAmplitude={4.1} 
        magnetRadius={10} 
        lerpSpeed={0.04} 
        fieldStrength={18.7} 
        waveSpeed={3.1} 
        particleSize={0.6}
      />
    </div>
  );
}
