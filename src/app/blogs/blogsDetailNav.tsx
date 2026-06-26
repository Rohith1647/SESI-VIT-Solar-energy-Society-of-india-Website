'use client'

import PillNav from '@/components/PillNav'
import { useState } from 'react'

const NAV_ITEMS = [
  { label: 'HOME',          href: '/' },
  { label: 'EVENTS',        href: '/events' },
  { label: 'BLOGS',         href: '/blogs' },
  { label: 'ACHIEVEMENTS',  href: '/achievements' },
  { label: 'BOARD MEMBERS', href: '/board-members' },
  { label: 'IMAGE GALLERY', href: '/image-gallery' },
  { label: 'SPONSORS',      href: '/sponsors' },
]

export function BlogsDetailNav() {
  const [activeHref, setActiveHref] = useState('/blogs')
  return (
    <PillNav
      items={NAV_ITEMS}
      activeHref={activeHref}
      setActiveHref={setActiveHref}
    />
  )
}
