'use client'

import dynamic from 'next/dynamic'

// These two components use browser-only APIs (canvas, mouse events),
// so they must be loaded client-side only. This wrapper is a Client Component
// so that `ssr: false` is valid here.
const BlogsParticleCanvas = dynamic(() => import('./blogsParticleCanvas'), { ssr: false })
const BlogsClientEffects  = dynamic(() => import('./blogsClientEffects'),  { ssr: false })

export function BlogsClientOnlyEffects() {
  return (
    <>
      <BlogsParticleCanvas />
      <BlogsClientEffects />
    </>
  )
}
