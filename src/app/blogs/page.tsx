import { sanityFetch } from '@/sanity/lib/live'
import { BLOGS_QUERY } from '@/sanity/lib/queries'
import BlogsClientPage from './BlogsClientPage'

export const revalidate = 60

export default async function BlogsPage() {
  const { data: posts } = await sanityFetch({ query: BLOGS_QUERY }) as { data: any[] }

  return <BlogsClientPage posts={posts || []} />
}
