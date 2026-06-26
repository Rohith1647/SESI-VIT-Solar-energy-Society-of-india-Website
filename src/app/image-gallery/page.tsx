import { client } from '@/sanity/lib/client'
import { GALLERY_QUERY } from '@/sanity/lib/queries'
import ImageGalleryClient from './ImageGalleryClient'

export const revalidate = 60

export default async function ImageGalleryPage() {
  const images = await client.fetch(
    GALLERY_QUERY,
    {},
    {
      next: { revalidate: 60 }
    }
  ) as any[]

  return <ImageGalleryClient images={images || []} />
}
