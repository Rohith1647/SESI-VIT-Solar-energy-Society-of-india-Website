'use client'

import React, { useEffect, useState } from 'react';

export default function BlogsGlowingOrb() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth) - 0.5,
        y: (e.clientY / window.innerHeight) - 0.5,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      style={{
        position: 'absolute',
        right: '2%',
        top: '50%',
        transform: `translate(calc(0px + ${mousePos.x * -40}px), calc(-50% + ${mousePos.y * -40}px))`,
        width: '700px',
        height: '700px',
        pointerEvents: 'none',
        zIndex: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'transform 0.1s ease-out'
      }}
    >
      <div style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(255,100,0,0.15) 0%, rgba(255,50,0,0.05) 40%, transparent 70%)',
        filter: 'blur(50px)',
        animation: 'blogsOrbPulseGlow 8s ease-in-out infinite alternate',
      }}></div>

      <div style={{
        position: 'absolute',
        width: '80%',
        height: '80%',
        borderRadius: '50%',
        background: 'conic-gradient(from 0deg, transparent 0%, rgba(255, 150, 0, 0.4) 15%, transparent 30%, rgba(255, 200, 0, 0.3) 45%, transparent 60%, rgba(255, 100, 0, 0.5) 75%, transparent 100%)',
        filter: 'blur(20px)',
        mixBlendMode: 'screen',
        animation: 'blogsOrbSpinFlares 30s linear infinite',
      }}></div>

      <div style={{
        position: 'absolute',
        width: '45%',
        height: '45%',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(255,220,100,0.8) 0%, rgba(255,120,0,0.6) 40%, transparent 70%)',
        filter: 'blur(15px)',
        mixBlendMode: 'color-dodge',
        animation: 'blogsOrbPulseCorona 4s ease-in-out infinite alternate',
      }}></div>

      <div style={{
        position: 'absolute',
        width: '35%',
        height: '35%',
        borderRadius: '50%',
        background: 'radial-gradient(circle, #ffffff 0%, #fff0a8 10%, #ffaa00 50%, #ff4400 90%)',
        boxShadow: '0 0 80px 20px rgba(255, 150, 0, 0.5), inset 0 0 20px rgba(255, 255, 255, 0.8)',
      }}></div>

      <div style={{
        position: 'absolute',
        width: '120%',
        height: '120%',
        borderRadius: '50%',
        backgroundImage: 'radial-gradient(circle, rgba(255,200,100,0.8) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
        opacity: 0.1,
        maskImage: 'radial-gradient(circle, black 20%, transparent 60%)',
        WebkitMaskImage: 'radial-gradient(circle, black 20%, transparent 60%)',
        animation: 'blogsOrbSpinFlares 60s linear infinite reverse',
      }}></div>

      <style>{`
        @keyframes blogsOrbSpinFlares {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes blogsOrbPulseGlow {
          from { transform: scale(0.6); opacity: 0.2; }
          to { transform: scale(1.4); opacity: 1; }
        }
        @keyframes blogsOrbPulseCorona {
          from { transform: scale(0.7); opacity: 0.3; }
          to { transform: scale(1.3); opacity: 1; }
        }
      `}</style>
    </div>
  );
}
