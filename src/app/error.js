'use client'

import { useEffect } from 'react'
import Link from 'next/link'

export default function Error({ error, unstable_retry }) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <main className="status-page">
      <h1>Something <span className="combination-font">cut out.</span></h1>
      <p>This page hit an unexpected error. Please try again.</p>
      <div className="status-page-actions">
        <button type="button" className="btn btn-primary" onClick={() => unstable_retry()}>Try again</button>
        <Link href="/" className="about-text-link">Back home</Link>
      </div>
    </main>
  )
}
