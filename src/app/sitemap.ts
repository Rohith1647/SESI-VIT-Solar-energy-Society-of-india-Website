import { MetadataRoute } from 'next'
import { POSTS } from './blogs/blogsPosts'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://sesivit.org.in'

  const staticPages = [
    { url: baseUrl, lastModified: new Date() },
    { url: `${baseUrl}/events`, lastModified: new Date() },
    { url: `${baseUrl}/blogs`, lastModified: new Date() },
    { url: `${baseUrl}/achievements`, lastModified: new Date() },
    { url: `${baseUrl}/board-members`, lastModified: new Date() },
    { url: `${baseUrl}/image-gallery`, lastModified: new Date() },
    { url: `${baseUrl}/sponsors`, lastModified: new Date() },
  ]

  const blogPages = POSTS.map((post) => ({
    url: `${baseUrl}/blogs/${post.id}`,
    lastModified: new Date(),
  }))

  return [...staticPages, ...blogPages]
}
