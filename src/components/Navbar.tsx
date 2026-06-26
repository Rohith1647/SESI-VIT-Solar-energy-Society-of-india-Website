'use client';

import { useState } from 'react';
import PillNav from './PillNav';

export default function Navbar() {
  const [activeTab, setActiveTab] = useState('/');

  const items = [
    { label: 'Home', href: '/' },
    { label: 'Events', href: '/events' },
    { label: 'Blogs', href: '/blogs' },
    { label: 'Achievements', href: '/achievements' },
    { label: 'Board Members', href: '/board-members' },
    { label: 'Image Gallery', href: '/gallery' },
    { label: 'Sponsors', href: '/sponsors' }
  ];

  return (
    <div className="w-full flex justify-center fixed z-[100] top-0 pt-6 px-4 pointer-events-none">
      <div className="pointer-events-auto w-full max-w-[900px]">
        <PillNav
          items={items}
          activeHref={activeTab}
          setActiveHref={setActiveTab}
          className=""
        />
      </div>
    </div>
  );
}
