import { DocumentIcon } from '@sanity/icons/Document'
import { EarthGlobeIcon } from '@sanity/icons/EarthGlobe'
import { EnvelopeIcon } from '@sanity/icons/Envelope'
import { HomeIcon } from '@sanity/icons/Home'
import { ImagesIcon } from '@sanity/icons/Images'
import { StarIcon } from '@sanity/icons/Star'
import { TokenIcon } from '@sanity/icons/Token'
import { UsersIcon } from '@sanity/icons/Users'
import { BellIcon } from '@sanity/icons/Bell'
import { CaseIcon } from '@sanity/icons/Case'
import { UserIcon } from '@sanity/icons/User'

export const structure = (S) =>
  S.list()
    .title('Editly Studio Admin')
    .items([
      // 1. INBOX & LEADS (Direct 1-Click Access)
      S.listItem()
        .title('📥 Client Leads')
        .icon(EnvelopeIcon)
        .schemaType('contactMessage')
        .child(S.documentTypeList('contactMessage').title('Client Inquiries & Briefs')),

      S.listItem()
        .title('💼 Job Applications')
        .icon(UserIcon)
        .schemaType('jobApplication')
        .child(S.documentTypeList('jobApplication').title('Editor & Motion Candidates')),

      S.divider(),

      // 2. CORE WEBSITE CONTENT
      S.listItem()
        .title('🏠 Homepage Master')
        .icon(HomeIcon)
        .id('homepage')
        .child(
          S.document()
            .schemaType('homepage')
            .documentId('homepage')
        ),

      S.listItem()
        .title('💎 Pricing Retainers')
        .icon(TokenIcon)
        .schemaType('pricing')
        .child(S.documentTypeList('pricing').title('Pricing Plans ($1,499 / $2,899)')),

      S.listItem()
        .title('🎬 Portfolio Showreels')
        .icon(ImagesIcon)
        .schemaType('portfolio')
        .child(S.documentTypeList('portfolio').title('Portfolio Projects')),

      S.listItem()
        .title('📊 Client Case Studies')
        .icon(CaseIcon)
        .schemaType('caseStudy')
        .child(S.documentTypeList('caseStudy').title('Case Studies & Results')),

      S.divider(),

      // 3. SOCIAL PROOF & TEAM
      S.listItem()
        .title('👥 Team & Founder')
        .icon(UsersIcon)
        .schemaType('team')
        .child(S.documentTypeList('team').title('Team Members')),

      S.listItem()
        .title('⭐ Client Reviews')
        .icon(StarIcon)
        .schemaType('testimonial')
        .child(S.documentTypeList('testimonial').title('Client Reviews')),

      S.listItem()
        .title('🏢 Client Logos')
        .icon(ImagesIcon)
        .schemaType('clientLogo')
        .child(S.documentTypeList('clientLogo').title('Client Logos')),

      S.listItem()
        .title('❓ FAQ Questions')
        .icon(DocumentIcon)
        .schemaType('faq')
        .child(S.documentTypeList('faq').title('FAQ Questions')),

      S.divider(),

      // 4. ANNOUNCEMENTS & SETTINGS
      S.listItem()
        .title('🔔 Top Promo Banner')
        .icon(BellIcon)
        .id('promoBanner')
        .child(
          S.document()
            .schemaType('promoBanner')
            .documentId('promoBanner')
        ),

      S.listItem()
        .title('📜 Legal Pages (Terms / Privacy)')
        .icon(DocumentIcon)
        .schemaType('legalPage')
        .child(S.documentTypeList('legalPage').title('Legal Pages')),

      S.listItem()
        .title('🌐 Global SEO & Brand')
        .icon(EarthGlobeIcon)
        .id('globalSettings')
        .child(
          S.document()
            .schemaType('globalSettings')
            .documentId('globalSettings')
        ),
    ])
