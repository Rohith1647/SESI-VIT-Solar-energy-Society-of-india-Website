import { sanityFetch } from '@/sanity/lib/live'
import { ACHIEVEMENTS_QUERY } from '@/sanity/lib/queries'
import AchievementsClient from './AchievementsClient'

export const revalidate = 60

export default async function AchievementsPage() {
  const { data: achievements } = await sanityFetch({ query: ACHIEVEMENTS_QUERY }) as { data: any[] }

  return <AchievementsClient achievements={achievements || []} />
}
