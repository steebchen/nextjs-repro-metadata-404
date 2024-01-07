import { notFound } from 'next/navigation'

export async function generateMetadata() {
  return notFound()
}

/** Add your relevant code here for the issue to reproduce */
export default function Home() {
  return null
}
