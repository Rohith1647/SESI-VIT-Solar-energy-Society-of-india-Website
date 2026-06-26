"use client";

import { useState } from 'react'
import PillNav from '@/components/PillNav'
import BlogsHero from './blogsHero'
import BlogsSolarInNumbersSection from './blogsSolarInNumbersSection'
import BlogsLatestBlogs from './blogsLatestBlogs'
import BlogsMythbustersGrid from './blogsMythbustersGrid'
import BlogsQuoteBanner from './blogsQuoteBanner'
import BlogsFooter from './blogsFooter'
import { BlogsClientOnlyEffects } from './blogsClientWrappers'
import './blogs.css'

const NAV_ITEMS = [
  { label: 'HOME',          href: '/' },
  { label: 'EVENTS',        href: '/events' },
  { label: 'BLOGS',         href: '/blogs' },
  { label: 'ACHIEVEMENTS',  href: '/achievements' },
  { label: 'BOARD MEMBERS', href: '/board-members' },
  { label: 'IMAGE GALLERY', href: '/image-gallery' },
  { label: 'SPONSORS',      href: '/sponsors' },
]

export default function BlogsClientPage({ posts }: { posts: any[] }) {
  const [activeTab, setActiveTab] = useState("/blogs");

  return (
    <div style={{ background: '#0A0A0A', color: '#fff', minHeight: '100vh', fontFamily: "'Outfit', sans-serif" }}>
      <BlogsClientOnlyEffects />

      <PillNav
        items={NAV_ITEMS}
        activeHref={activeTab}
        setActiveHref={setActiveTab}
      />

      <BlogsHero />
      <BlogsSolarInNumbersSection />

      <div className="beam-divider" />

      {/* Latest blogs — full width */}
      <div className="blogs-full-section">
        <BlogsLatestBlogs posts={posts} />
      </div>

      <div className="beam-divider" style={{ marginTop: 0 }} />

      {/* Mythbusters grid — full width */}
      <BlogsMythbustersGrid />

      <BlogsQuoteBanner />

      <BlogsFooter />
    </div>
  )
}
