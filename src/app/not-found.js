import Link from 'next/link'

export const metadata = { title: 'Page Not Found | The Editly Foundry Co.' }

export default function NotFound() {
  return (
    <main className="status-page">
      <h1>This scene <span className="combination-font">didn&apos;t make the cut.</span></h1>
      <p>The page you are looking for does not exist or has moved.</p>
      <div className="status-page-actions">
        <Link href="/" className="btn btn-primary">Back home</Link>
        <Link href="/work" className="about-text-link">See the work</Link>
      </div>
    </main>
  )
}
