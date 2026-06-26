"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import React, { Suspense, useRef, useState, useEffect } from "react";
import * as THREE from "three";

const createGlowTexture = () => {
  if (typeof window === "undefined") return null;
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 512;
  const context = canvas.getContext('2d');
  if (!context) return null;

  const center = 256;

  // Create rays
  context.translate(center, center);
  const numRays = 60;
  for (let i = 0; i < numRays; i++) {
    const angle = (i / numRays) * Math.PI * 2;
    context.rotate(angle);
    context.beginPath();
    context.moveTo(0, 0);
    const rayLength = 150 + Math.random() * 100;

    // Draw tapered ray
    context.lineTo(4, rayLength * 0.5);
    context.lineTo(0, rayLength);
    context.lineTo(-4, rayLength * 0.5);
    context.closePath();

    // Ray gradient
    const rayGrad = context.createLinearGradient(0, 0, 0, rayLength);
    rayGrad.addColorStop(0, 'rgba(255, 255, 100, 0.3)'); // Pure light yellow
    rayGrad.addColorStop(1, 'rgba(255, 220, 0, 0)'); // Fades to pure yellow
    context.fillStyle = rayGrad;
    context.fill();
    context.rotate(-angle);
  }
  context.translate(-center, -center);

  // Add soft central glow on top
  const gradient = context.createRadialGradient(center, center, 0, center, center, center);
  gradient.addColorStop(0, 'rgba(255, 255, 255, 1)'); // White core
  gradient.addColorStop(0.2, 'rgba(255, 255, 50, 0.8)'); // Bright yellow
  gradient.addColorStop(0.5, 'rgba(255, 200, 0, 0.4)'); // Golden yellow
  gradient.addColorStop(1, 'rgba(255, 150, 0, 0)'); // Fades out

  context.fillStyle = gradient;
  context.fillRect(0, 0, 512, 512);

  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
};

const Sun = () => {
  const sunRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.MeshStandardMaterial>(null);
  const lightRef = useRef<THREE.PointLight>(null);
  const spriteRef = useRef<THREE.Sprite>(null);

  const [texture, setTexture] = useState<THREE.Texture | null>(null);
  const [glowTexture, setGlowTexture] = useState<THREE.Texture | null>(null);

  useEffect(() => {
    // Generate glow texture
    setGlowTexture(createGlowTexture());

    const loader = new THREE.TextureLoader();
    loader.load(
      '/Board-sun.jpg', // Loaded locally from public/Board-sun.jpg to avoid CORS issues
      (tex) => {
        setTexture(tex);
      },
      undefined,
      (err) => {
        console.error("Failed to load local sun texture:", err);
      }
    );
  }, []);

  useFrame((state, delta) => {
    if (sunRef.current) {
      sunRef.current.rotation.y += delta * 0.15; // Rotate the sun smoothly
      sunRef.current.rotation.x += delta * 0.05; // Slight tilt
    }

    // Create a pulsing effect based on time
    const pulse = Math.sin(state.clock.elapsedTime * 2); // oscillates between -1 and 1

    // Apply pulsing glow to the sun material
    if (materialRef.current) {
      materialRef.current.emissiveIntensity = 1.2 + pulse * 0.6; // oscillates between 0.6 and 1.8
    }

    // Apply pulsing to the surrounding light
    if (lightRef.current) {
      lightRef.current.intensity = 150 + pulse * 50; // oscillates between 100 and 200
    }

    // Pulse and slowly rotate the light rays
    if (spriteRef.current) {
      spriteRef.current.scale.setScalar(5.5 + pulse * 0.5); // Grows and shrinks
      spriteRef.current.material.opacity = 0.8 + pulse * 0.2;
      spriteRef.current.material.rotation -= delta * 0.05; // Slowly spin rays
    }
  });

  return (
    <group>
      {/* Central Sun */}
      <mesh ref={sunRef}>
        <sphereGeometry args={[1.5, 64, 64]} />
        {texture ? (
          <meshStandardMaterial
            ref={materialRef}
            map={texture}
            emissive={new THREE.Color(0xffcc00)}
            emissiveMap={texture}
            emissiveIntensity={1.5}
            roughness={0.8}
            metalness={0}
          />
        ) : (
          <meshBasicMaterial color="#ffcc00" />
        )}
      </mesh>

      {/* Pulsing Light */}
      <pointLight ref={lightRef} color="#ffcc00" intensity={150} distance={30} />

      {/* Light Rays & Glow Corona */}
      {glowTexture && (
        <sprite ref={spriteRef}>
          <spriteMaterial
            map={glowTexture}
            color="#ffffff"
            transparent={true}
            blending={THREE.AdditiveBlending}
            depthWrite={false}
          />
        </sprite>
      )}

    </group>
  );
};

export default function BoardSunCanvas() {
  return (
    <Canvas camera={{ position: [0, 0, 10], fov: 60 }} gl={{ alpha: true }}>
      <ambientLight intensity={0.5} />
      <Suspense fallback={null}>
        <Sun />
      </Suspense>
    </Canvas>
  );
}
