'use client'

import { NextStudio } from 'next-sanity/studio'
import config from '../../../../sanity.config'

// Access is enforced by Sanity's own login. Do not add client-side passwords here: they ship in the public bundle.
export default function AdminPage() {
  return <NextStudio config={config} />
}
