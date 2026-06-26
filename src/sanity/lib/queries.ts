import { defineQuery } from 'groq'

export const EVENTS_QUERY = defineQuery(`
  *[_type == "event"] | order(date desc) {
    title,
    category,
    image,
    description,
    details,
    date,
    venue
  }
`)

export const BLOGS_QUERY = defineQuery(`
  *[_type == "blogPost"] | order(date desc) {
    _id,
    title,
    category,
    date,
    readTime,
    img,
    externalLink,
    content,
    author-> {
      name,
      role,
      avatar,
      bio
    },
    inlineImages[] {
      _key,
      src,
      caption
    }
  }
`)

export const SINGLE_BLOG_QUERY = defineQuery(`
  *[_type == "blogPost" && _id == $id][0] {
    _id,
    title,
    category,
    date,
    readTime,
    img,
    externalLink,
    content,
    author-> {
      name,
      role,
      avatar,
      bio
    },
    inlineImages[] {
      _key,
      src,
      caption
    }
  }
`)

export const ACHIEVEMENTS_QUERY = defineQuery(`
  *[_type == "achievement"] {
    title,
    tag,
    description,
    imageSrc
  }
`)

export const BOARD_MEMBERS_QUERY = defineQuery(`
  *[_type == "boardMember"] | order(order asc) {
    name,
    role,
    type,
    avatar,
    department,
    link,
    order
  }
`)

export const GALLERY_QUERY = defineQuery(`
  *[_type == "galleryImage"] {
    title,
    subtitle,
    image
  }
`)

export const INDUSTRIAL_VISITS_QUERY = defineQuery(`
  *[_type == "industrialVisit"] | order(order asc) {
    name,
    image,
    order
  }
`)

export const FAQS_QUERY = defineQuery(`
  *[_type == "sponsorFaq"] | order(order asc) {
    question,
    answer,
    order
  }
`)
