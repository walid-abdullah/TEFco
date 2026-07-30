import { CogIcon } from '@sanity/icons/Cog'
import { DocumentIcon } from '@sanity/icons/Document'
import { EarthGlobeIcon } from '@sanity/icons/EarthGlobe'
import { EnvelopeIcon } from '@sanity/icons/Envelope'
import { HomeIcon } from '@sanity/icons/Home'
import { ImagesIcon } from '@sanity/icons/Images'
import { StarIcon } from '@sanity/icons/Star'
import { TagsIcon } from '@sanity/icons/Tags'
import { TokenIcon } from '@sanity/icons/Token'
import { UsersIcon } from '@sanity/icons/Users'

export const structure = (S) =>
  S.list()
    .title('Editly Foundry CMS')
    .items([
      // --- SETTINGS FOLDER ---
      S.listItem()
        .title('Settings & Legal')
        .icon(CogIcon)
        .child(
          S.list()
            .title('Settings & Legal')
            .items([
              S.listItem()
                .title('Global Settings & SEO')
                .icon(EarthGlobeIcon)
                .id('globalSettings')
                .child(
                  S.document()
                    .schemaType('globalSettings')
                    .documentId('globalSettings')
                ),
              S.listItem()
                .title('Legal Pages (Terms/Privacy)')
                .icon(DocumentIcon)
                .schemaType('legalPage')
                .child(S.documentTypeList('legalPage').title('Legal Pages')),
            ])
        ),

      S.divider(),

      // --- PAGES FOLDER ---
      S.listItem()
        .title('Pages')
        .icon(HomeIcon)
        .child(
          S.list()
            .title('Pages')
            .items([
              S.listItem()
                .title('Homepage Content')
                .icon(HomeIcon)
                .id('homepage')
                .child(
                  S.document()
                    .schemaType('homepage')
                    .documentId('homepage')
                ),
              S.listItem()
                .title('Promo Banner')
                .icon(DocumentIcon)
                .id('promoBanner')
                .child(
                  S.document()
                    .schemaType('promoBanner')
                    .documentId('promoBanner')
                ),
            ])
        ),

      S.divider(),

      // --- AGENCY CONTENT FOLDER ---
      S.listItem()
        .title('Agency Content')
        .icon(ImagesIcon)
        .child(
          S.list()
            .title('Agency Content')
            .items([
              S.listItem()
                .title('Service Categories')
                .icon(TagsIcon)
                .schemaType('service')
                .child(S.documentTypeList('service').title('Service Categories')),
              S.listItem()
                .title('Service Detail Pages')
                .icon(DocumentIcon)
                .schemaType('servicePage')
                .child(S.documentTypeList('servicePage').title('Service Detail Pages')),
              S.listItem()
                .title('Portfolio Projects')
                .icon(ImagesIcon)
                .schemaType('portfolio')
                .child(S.documentTypeList('portfolio').title('Portfolio Projects')),
              S.listItem()
                .title('Pricing Packages')
                .icon(TokenIcon)
                .schemaType('pricing')
                .child(S.documentTypeList('pricing').title('Pricing Packages')),
              S.listItem()
                .title('FAQ Questions')
                .icon(DocumentIcon)
                .schemaType('faq')
                .child(S.documentTypeList('faq').title('FAQ Questions')),
            ])
        ),

      S.divider(),

      // --- PEOPLE & FEEDBACK FOLDER ---
      S.listItem()
        .title('People & Feedback')
        .icon(UsersIcon)
        .child(
          S.list()
            .title('People & Feedback')
            .items([
              S.listItem()
                .title('Team Members')
                .icon(UsersIcon)
                .schemaType('team')
                .child(S.documentTypeList('team').title('Team Members')),
              S.listItem()
                .title('Testimonials')
                .icon(StarIcon)
                .schemaType('testimonial')
                .child(S.documentTypeList('testimonial').title('Client Reviews')),
              S.listItem()
                .title('Client Logos')
                .icon(ImagesIcon)
                .schemaType('clientLogo')
                .child(S.documentTypeList('clientLogo').title('Client Logos')),
            ])
        ),

      S.divider(),

      // --- INBOX & MARKETING FOLDER ---
      S.listItem()
        .title('Inbox & Marketing')
        .icon(EnvelopeIcon)
        .child(
          S.list()
            .title('Inbox & Marketing')
            .items([
              S.listItem()
                .title('Contact Leads / Messages')
                .icon(EnvelopeIcon)
                .schemaType('contactMessage')
                .child(S.documentTypeList('contactMessage').title('Contact Leads')),
              S.listItem()
                .title('Blogs / Reels')
                .icon(DocumentIcon)
                .schemaType('post')
                .child(S.documentTypeList('post').title('Blogs & Reels')),
            ])
        ),
        
      // Filter out mapped items to prevent duplicates
      ...S.documentTypeListItems().filter(
        (listItem) => !['globalSettings', 'homepage', 'promoBanner', 'service', 'servicePage', 'portfolio', 'pricing', 'team', 'testimonial', 'post', 'faq', 'clientLogo', 'legalPage', 'contactMessage'].includes(listItem.getId())
      ),
    ])
