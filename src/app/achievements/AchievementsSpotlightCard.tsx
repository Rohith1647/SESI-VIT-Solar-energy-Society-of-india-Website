"use client";

import React, { useRef, MouseEvent } from "react";

interface SpotlightProps {
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string;
  spotlightRadius?: number;
}

export function SpotlightContainer({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const cards = containerRef.current.querySelectorAll(".spotlight-card");
    cards.forEach((card) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      (card as HTMLElement).style.setProperty("--mouse-x", `${x}px`);
      (card as HTMLElement).style.setProperty("--mouse-y", `${y}px`);
    });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className={`group/spotlight-container ${className}`}
    >
      {children}
    </div>
  );
}

export default function SpotlightCard({
  children,
  className = "",
  spotlightColor = "rgba(255, 240, 0, 1)", // Extremely bright, intense yellow
  spotlightRadius = 450,
}: SpotlightProps) {
  return (
    <div
      className={`spotlight-card relative overflow-hidden rounded-3xl bg-white/10 p-[4px] shadow-lg ${className}`}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 ease-in-out group-hover/spotlight-container:opacity-100"
        style={{
          background: `radial-gradient(${spotlightRadius}px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), ${spotlightColor} 0%, rgba(255, 180, 0, 0.8) 25%, transparent 100%)`,
        }}
      />
      <div className="relative z-10 w-full h-full flex flex-col bg-zinc-950 rounded-[20px]">
        {children}
      </div>
    </div>
  );
}
