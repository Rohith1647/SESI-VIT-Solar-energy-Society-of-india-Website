import { createImageUrlBuilder } from '@sanity/image-url'
import { client } from './client'

const builder = createImageUrlBuilder(client)

export function urlFor(source: any) {
  return builder.image(source)
}

export function getImageUrl(image: any) {
  if (!image) return ''
  if (typeof image === 'string') return image
  try {
    return urlFor(image).url() || ''
  } catch (e) {
    return ''
  }
}
