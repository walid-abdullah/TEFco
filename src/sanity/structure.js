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
import { BellIcon } from '@sanity/icons/Bell'
import { CaseIcon } from '@sanity/icons/Case'
import { UserIcon } from '@sanity/icons/User'

export const structure = (S) =>
  S.list()
    .title('The Editly Foundry Co. — Command Center')
    .items([
      // --- 1. CLIENT LEADS & JOB CANDIDATES (TOP PRIORITY) ---
      S.listItem()
        .title('🚀 Leads & Applications')
        .icon(EnvelopeIcon)
        .child(
          S.list()
            .title('Leads & Candidates')
            .items([
              S.listItem()
                .title('📥 Client Leads & Briefs')
                .icon(EnvelopeIcon)
                .schemaType('contactMessage')
                .child(S.documentTypeList('contactMessage').title('Client Inquiries')),
              S.listItem()
                .title('💼 Job Applications & CVs')
                .icon(UserIcon)
                .schemaType('jobApplication')
                .child(S.documentTypeList('jobApplication').title('Editor & Motion Candidates')),
            ])
        ),

      S.divider(),

      // --- 2. PAGES & ANNOUNCEMENT ---
      S.listItem()
        .title('📱 Pages & Banners')
        .icon(HomeIcon)
        .child(
          S.list()
            .title('Pages & Banners')
            .items([
              S.listItem()
                .title('🏠 Homepage Content')
                .icon(HomeIcon)
                .id('homepage')
                .child(
                  S.document()
                    .schemaType('homepage')
                    .documentId('homepage')
                ),
              S.listItem()
                .title('🔔 Announcement / Promo Banner')
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
            ])
        ),

      S.divider(),

      // --- 3. CREATIVE PRODUCTION & PORTFOLIO ---
      S.listItem()
        .title('🎬 Creative Production & Retainers')
        .icon(ImagesIcon)
        .child(
          S.list()
            .title('Creative Production')
            .items([
              S.listItem()
                .title('💎 Pricing Retainer Plans')
                .icon(TokenIcon)
                .schemaType('pricing')
                .child(S.documentTypeList('pricing').title('Retainer Plans')),
              S.listItem()
                .title('🎬 Portfolio Showreels')
                .icon(ImagesIcon)
                .schemaType('portfolio')
                .child(S.documentTypeList('portfolio').title('Portfolio Projects')),
              S.listItem()
                .title('📊 Client Case Studies & ROI')
                .icon(CaseIcon)
                .schemaType('caseStudy')
                .child(S.documentTypeList('caseStudy').title('Case Studies')),
              S.listItem()
                .title('✨ Service Detail Pages')
                .icon(TagsIcon)
                .schemaType('servicePage')
                .child(S.documentTypeList('servicePage').title('Service Pages')),
              S.listItem()
                .title('❓ FAQ Accordions')
                .icon(DocumentIcon)
                .schemaType('faq')
                .child(S.documentTypeList('faq').title('FAQ Questions')),
            ])
        ),

      S.divider(),

      // --- 4. BRAND TRUST & TEAM ---
      S.listItem()
        .title('👑 Leadership & Social Proof')
        .icon(UsersIcon)
        .child(
          S.list()
            .title('Leadership & Proof')
            .items([
              S.listItem()
                .title('👥 Team & Leadership')
                .icon(UsersIcon)
                .schemaType('team')
                .child(S.documentTypeList('team').title('Team Members')),
              S.listItem()
                .title('⭐ Client Testimonials & Reviews')
                .icon(StarIcon)
                .schemaType('testimonial')
                .child(S.documentTypeList('testimonial').title('Client Reviews')),
              S.listItem()
                .title('🏢 Client Logos & Press')
                .icon(ImagesIcon)
                .schemaType('clientLogo')
                .child(S.documentTypeList('clientLogo').title('Client Logos')),
              S.listItem()
                .title('📝 Agency Blogs & Insights')
                .icon(DocumentIcon)
                .schemaType('post')
                .child(S.documentTypeList('post').title('Articles')),
            ])
        ),

      S.divider(),

      // --- 5. GLOBAL SETTINGS ---
      S.listItem()
        .title('🌐 Global SEO & Settings')
        .icon(EarthGlobeIcon)
        .id('globalSettings')
        .child(
          S.document()
            .schemaType('globalSettings')
            .documentId('globalSettings')
        ),
    ])
