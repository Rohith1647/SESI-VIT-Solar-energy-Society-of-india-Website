'use client'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { getImageUrl } from '@/sanity/lib/image'

function BlogCard({ post, delay }: { post: any; delay: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current; if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect() } },
      { threshold: 0.08 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  const imageUrl = getImageUrl(post.img)
  const titleLower = (post.title || '').toLowerCase()
  const isGraphic = titleLower.includes('harnessing the power') || 
                    titleLower.includes('introduction to renewable') || 
                    titleLower.includes('from crisis to clean power')
  
  let bgColor = '#1a1a1a';
  if (titleLower.includes('harnessing the power') || titleLower.includes('introduction to renewable')) {
    bgColor = '#ffffff';
  } else if (titleLower.includes('from crisis to clean power')) {
    bgColor = '#000000';
  }

  const catClass = post.catClass || `cat-${post.category.toLowerCase()}`

  return (
    <div
      ref={ref}
      className={`blog-card ${visible ? 'visible' : ''}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      <div className="card-thumb" style={{ backgroundColor: bgColor }}>
        <Image 
          src={imageUrl} 
          alt={post.title} 
          width={400} 
          height={180} 
          style={{ 
            objectFit: isGraphic ? 'contain' : 'cover', 
            width: '100%', 
            height: '100%' 
          }} 
          unoptimized 
        />
      </div>
      <div className="card-body">
        <span className={`card-cat ${catClass}`}>{post.category}</span>
        <div className="card-title">{post.title}</div>
        <div className="card-excerpt">{post.excerpt}</div>
        <Link href={`/blogs/${post._id}`} className="btn-read-card">
          Read More →
        </Link>
      </div>
    </div>
  )
}

export default function BlogsLatestBlogs({ posts }: { posts: any[] }) {
  return (
    <div id="blogs-section">
      <div className="latest-head">
        <h2>Latest Blogs</h2>
      </div>
      <div className="latest-grid">
        {posts.map((post, i) => (
          <BlogCard key={post._id} post={post} delay={i * 0.08 + 0.05} />
        ))}
      </div>
    </div>
  )
}
