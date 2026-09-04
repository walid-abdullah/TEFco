import "./globals.css";
import ClientScripts from "@/components/ClientScripts";
import LayoutWrapper from "@/components/LayoutWrapper";
import PromoBanner from "@/components/PromoBanner";
import CinematicHeroCanvas from "@/components/3d/CinematicHeroCanvas";

import { client } from '@/sanity/client';

import { urlFor } from '@/sanity/client';

import { KEYWORDS, GLOBAL_META, ORGANIZATION, BREADCRUMBS } from '@/lib/seoData';

export async function generateMetadata() {
  const query = `*[_type == "globalSettings"][0]`;
  const settings = await client.fetch(query);
  const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || ORGANIZATION.url || 'https://editlyfoundry.vercel.app').replace(/\/$/, '');

  const seoTitle = settings?.seoTitle || GLOBAL_META.siteTitle;
  const seoDescription = settings?.seoDescription || GLOBAL_META.siteDescription;
  const seoKeywords = settings?.seoKeywords ? settings.seoKeywords.split(',').map(k => k.trim()) : KEYWORDS;

  const metadata = {
    metadataBase: new URL(siteUrl),
    alternates: { canonical: siteUrl },
    title: seoTitle,
    description: seoDescription,
    keywords: seoKeywords,
    openGraph: {
      title: seoTitle,
      description: seoDescription,
      type: 'website',
      siteName: ORGANIZATION.name,
      url: siteUrl,
      images: [{ url: settings?.seoImage ? urlFor(settings.seoImage).url() : GLOBAL_META.ogImage }]
    },
    twitter: {
      card: 'summary_large_image',
      title: seoTitle,
      description: seoDescription,
      images: [settings?.seoImage ? urlFor(settings.seoImage).url() : GLOBAL_META.ogImage]
    }
  };

  return metadata;
}

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default async function RootLayout({ children }) {
  const query = `*[_type == "globalSettings"][0]`;
  const settings = await client.fetch(query);
  const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || ORGANIZATION.url || 'https://editlyfoundry.vercel.app').replace(/\/$/, '');

  const bannerQuery = `*[_type == "promoBanner"][0]`;
  const bannerSettings = await client.fetch(bannerQuery);

  const defaultTheme = settings?.defaultTheme || 'dark';

  const orgLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: ORGANIZATION.name,
    url: ORGANIZATION.url,
    logo: ORGANIZATION.logo,
    email: ORGANIZATION.email,
    telephone: ORGANIZATION.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: ORGANIZATION.address.street,
      addressLocality: ORGANIZATION.address.locality,
      addressRegion: ORGANIZATION.address.region,
      postalCode: ORGANIZATION.address.postalCode,
      addressCountry: ORGANIZATION.address.country
    },
    sameAs: ORGANIZATION.sameAs
  };

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: BREADCRUMBS.map((b, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: b.name,
      item: `${ORGANIZATION.url}${b.url}`
    }))
  };

  const websiteLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: ORGANIZATION.name,
    url: ORGANIZATION.url
  };

  return (
    <html lang="en" data-theme={defaultTheme}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Geist+Mono:wght@400;500;600;700&family=Geist:wght@300;400;500;600;700;800;900&family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
        <link rel="canonical" href={siteUrl} />
        <meta name="google-site-verification" content="google397bc2b4bbbb7f90" />
        <meta name="google-site-verification" content="397bc2b4bbbb7f90" />

        {/* Organization / Breadcrumb / Website structured data */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      </head>
      <body>
        {settings?.primaryColor && (
          <style dangerouslySetInnerHTML={{__html: `
            :root {
              --primary: ${settings.primaryColor};
              --accent-blue: ${settings.primaryColor};
              --accent-orange: ${settings.accentColor || '#F2994A'};
            }
          `}} />
        )}
        <PromoBanner banner={bannerSettings} />
        <ClientScripts />
        <LayoutWrapper settings={settings}>{children}</LayoutWrapper>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
