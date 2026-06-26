import { sanityFetch } from '@/sanity/lib/live'
import { GALLERY_QUERY } from '@/sanity/lib/queries'
import ImageGalleryClient from './ImageGalleryClient'

export const revalidate = 60

export default async function ImageGalleryPage() {
  const { data: images } = await sanityFetch({ query: GALLERY_QUERY }) as { data: any[] }

  return <ImageGalleryClient images={images || []} />
}
