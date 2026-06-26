import { sanityFetch } from '@/sanity/lib/live'
import { FAQS_QUERY, INDUSTRIAL_VISITS_QUERY, ACHIEVEMENTS_QUERY, SPONSOR_PAGE_QUERY } from '@/sanity/lib/queries'
import SponsorsClient from './SponsorsClient'

export const revalidate = 60

export default async function SponsorsPage() {
  const [{ data: ivSlides }, { data: faqs }, { data: achievements }, { data: sponsorPageData }] = await Promise.all([
    sanityFetch({ query: INDUSTRIAL_VISITS_QUERY }),
    sanityFetch({ query: FAQS_QUERY }),
    sanityFetch({ query: ACHIEVEMENTS_QUERY }),
    sanityFetch({ query: SPONSOR_PAGE_QUERY }),
  ]) as [any, any, any, any]

  // Only pass achievements that have certificate images
  const certAchievements = (achievements || []).filter((a: any) => a.imageSrc)

  return (
    <SponsorsClient
      ivSlides={ivSlides || []}
      faqs={faqs || []}
      achievements={certAchievements}
      sponsorPageData={sponsorPageData || null}
    />
  )
}
