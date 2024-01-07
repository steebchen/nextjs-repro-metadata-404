import { notFound } from 'next/navigation'

export async function generateMetadata() {
  return notFound()
}

export default async function Home() {
  return (
    <div>user</div>
  )
}
