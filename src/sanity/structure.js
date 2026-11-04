import { BellIcon } from '@sanity/icons/Bell'
import { DocumentIcon } from '@sanity/icons/Document'
import { EarthGlobeIcon } from '@sanity/icons/EarthGlobe'
import { HomeIcon } from '@sanity/icons/Home'
import { ImagesIcon } from '@sanity/icons/Images'
import { StarIcon } from '@sanity/icons/Star'

const list = (S, title, schemaType, icon) =>
  S.listItem().title(title).icon(icon).schemaType(schemaType).child(S.documentTypeList(schemaType).title(title))

const single = (S, title, schemaType, icon) =>
  S.listItem().title(title).icon(icon).id(schemaType).child(S.document().schemaType(schemaType).documentId(schemaType))

// Only what the website actually reads. Other document types stay in the dataset, out of the way.
export const structure = (S) =>
  S.list()
    .title('Editly Foundry')
    .items([
      list(S, 'Work videos', 'portfolio', ImagesIcon),
      list(S, 'Client reviews', 'testimonial', StarIcon),
      list(S, 'FAQ', 'faq', DocumentIcon),
      list(S, 'Client logos', 'clientLogo', ImagesIcon),
      single(S, 'Founder video', 'homepage', HomeIcon),
      S.divider(),
      single(S, 'Top banner', 'promoBanner', BellIcon),
      list(S, 'Legal pages', 'legalPage', DocumentIcon),
      single(S, 'Site settings & SEO', 'globalSettings', EarthGlobeIcon),
    ])
