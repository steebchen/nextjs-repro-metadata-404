import { notFound } from 'next/navigation'

export async function generateMetadata() {
  // This should return a 404, even with suspense/loading/streaming enabled
  // IT RETURNS A 200 THOUGH!
  return notFound()
}

export default async function Home() {
  return (
    <div>user</div>
  )
}
