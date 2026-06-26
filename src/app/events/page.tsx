import { sanityFetch } from '@/sanity/lib/live'
import { EVENTS_QUERY } from '@/sanity/lib/queries'
import EventsClient from './EventsClient'

export const revalidate = 60

export default async function EventsPage() {
  const { data: events } = await sanityFetch({ query: EVENTS_QUERY }) as { data: any[] }

  return <EventsClient initialEvents={events || []} />
}
