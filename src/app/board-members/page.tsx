import { sanityFetch } from '@/sanity/lib/live'
import { BOARD_MEMBERS_QUERY } from '@/sanity/lib/queries'
import BoardMembersClient from './BoardMembersClient'

export const revalidate = 60

export default async function BoardMembersPage() {
  const { data: members } = await sanityFetch({ query: BOARD_MEMBERS_QUERY }) as { data: any[] }

  const faculty = (members || []).filter((m: any) => m.type === 'faculty')
  const student = (members || []).filter((m: any) => m.type === 'student')

  return <BoardMembersClient faculty={faculty} students={student} />
}
