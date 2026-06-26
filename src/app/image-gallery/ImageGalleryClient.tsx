"use client";

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import PillNav from '@/components/PillNav';
import ImagegalleryFooter from './ImagegalleryFooter';

const GalleryLoader = () => (
  <div className="w-full h-full flex flex-col items-center justify-center bg-black/40 backdrop-blur-sm rounded-3xl border border-white/5 relative overflow-hidden select-none">
    <div className="relative w-16 h-16 flex items-center justify-center">
      {/* Glow Ring */}
      <div className="absolute inset-0 rounded-full border-4 border-yellow-500/20 border-t-yellow-500 animate-spin" />
      {/* Inner Pulsing Dot */}
      <div className="w-3.5 h-3.5 rounded-full bg-yellow-500 animate-ping" />
    </div>
    <p className="mt-5 text-[11px] font-bold tracking-[0.2em] text-yellow-500/80 uppercase animate-pulse">
      Initializing Photon Gallery...
    </p>
  </div>
);

const ImagegalleryDomeGallery = dynamic(() => import('./ImagegalleryDomeGallery'), { 
  ssr: false,
  loading: () => <GalleryLoader />
});
const ImagegalleryStarryBackground = dynamic(() => import('./ImagegalleryStarryBackground'), { ssr: false });

const navItems = [
  { label: "HOME", href: "/" },
  { label: "EVENTS", href: "/events" },
  { label: "BLOGS", href: "/blogs" },
  { label: "ACHIEVEMENTS", href: "/achievements" },
  { label: "BOARD MEMBERS", href: "/board-members" },
  { label: "IMAGE GALLERY", href: "/image-gallery" },
  { label: "SPONSORS", href: "/sponsors" },
];

export default function ImageGalleryClient({ images }: { images: any[] }) {
  const [activeTab, setActiveTab] = useState("/image-gallery");

  const defaultImages = [
    {
      title: "Solar Panel Installation",
      subtitle: "Hands-on training session on campus",
      image: "/sponsar-images/who-workshop.jpg"
    },
    {
      title: "SESI Tech Talk",
      subtitle: "Guest lecture from renewable energy industry experts",
      image: "/sponsar-images/who-event.jpg"
    },
    {
      title: "VIT Solar Chapter Team",
      subtitle: "Core committee and members of SESI chapter",
      image: "/sponsar-images/who-team.jpg"
    },
    {
      title: "Industry Training Program",
      subtitle: "Hands-on solar installation workshop",
      image: "/sponsar-images/who-industry.jpg"
    }
  ];

  const galleryImages = images && images.length > 0 ? images : defaultImages;

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden overflow-y-auto bg-black antialiased flex flex-col justify-start">
      {/* Absolute 3D Starry Background Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <ImagegalleryStarryBackground />
      </div>

      {/* Top Navbar Fixed */}
      <PillNav items={navItems} activeHref={activeTab} setActiveHref={setActiveTab} />

      {/* Topic / Heading Fixed */}
      <div className="absolute top-[100px] left-0 w-full flex justify-center pointer-events-none z-40">
        <h1 className="font-outfit uppercase tracking-widest text-4xl md:text-5xl bg-[#ffcc00] bg-clip-text text-transparent font-extrabold drop-shadow-[0_4px_20px_rgba(255,204,0,0.4)] pointer-events-auto">
          THE PHOTON GALLERY
        </h1>
      </div>

      {/* The 3D Dome Gallery (Shifted down below the header) */}
      <div className="w-full h-[70vh] min-h-[500px] md:h-[80vh] relative z-10 mt-[180px]">
        <ImagegalleryDomeGallery images={galleryImages} />
      </div>

      {/* Gallery Page Footer */}
      <ImagegalleryFooter />
    </div>
  );
}
