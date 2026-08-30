import { client } from '@/sanity/client';
import { notFound } from 'next/navigation';
import { PortableText } from '@portabletext/react';
import { urlFor } from '@/sanity/image';

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const query = `*[_type == "legalPage" && slug.current == $slug][0]`;
  const page = await client.fetch(query, { slug });

  if (!page) {
    return { title: 'Page Not Found' };
  }

  return {
    title: `${page.title} | The Editly Foundry Co.`,
  };
}

// Custom components for rendering PortableText
const portableTextComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) {
        return null;
      }
      return (
        <img
          src={urlFor(value).url()}
          alt={value.alt || ' '}
          loading="lazy"
          style={{ maxWidth: '100%', height: 'auto', borderRadius: '10px', margin: '2rem 0' }}
        />
      );
    },
  },
  block: {
    h1: ({ children }) => <h1 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>{children}</h1>,
    h2: ({ children }) => <h2 style={{ fontSize: '2rem', marginTop: '2.5rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>{children}</h2>,
    h3: ({ children }) => <h3 style={{ fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>{children}</h3>,
    normal: ({ children }) => <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>{children}</p>,
  },
  list: {
    bullet: ({ children }) => <ul style={{ marginLeft: '1.5rem', marginBottom: '1.5rem', color: 'var(--text-secondary)', lineHeight: '1.8' }}>{children}</ul>,
    number: ({ children }) => <ol style={{ marginLeft: '1.5rem', marginBottom: '1.5rem', color: 'var(--text-secondary)', lineHeight: '1.8' }}>{children}</ol>,
  },
  listItem: {
    bullet: ({ children }) => <li style={{ marginBottom: '0.5rem' }}>{children}</li>,
    number: ({ children }) => <li style={{ marginBottom: '0.5rem' }}>{children}</li>,
  },
  marks: {
    link: ({ children, value }) => {
      const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined;
      return (
        <a href={value.href} rel={rel} style={{ color: 'var(--accent-blue)', textDecoration: 'underline' }}>
          {children}
        </a>
      );
    },
    strong: ({ children }) => <strong style={{ color: 'var(--text-primary)', fontWeight: '600' }}>{children}</strong>,
  },
};

export default async function LegalPage({ params }) {
  const { slug } = await params;
  
  let page = null;
  try {
    const query = `*[_type == "legalPage" && slug.current == $slug][0]`;
    page = await client.fetch(query, { slug });
  } catch (e) {
    console.error("Legal fetch error:", e);
  }

  // Built-in standard legal document fallbacks
  if (!page) {
    if (slug === 'privacy-policy') {
      page = {
        title: 'Privacy Policy',
        isDefault: true,
        defaultContent: `The Editly Foundry Co. respects your privacy. We strictly hold all client raw video footage, branding assets, and project files under professional Non-Disclosure Agreements (NDAs). We never sell or share your contact or media data with any third parties. All lead details submitted via our website are strictly used for project communication and meeting scheduling.`
      };
    } else if (slug === 'terms-of-service' || slug === 'terms') {
      page = {
        title: 'Terms of Service',
        isDefault: true,
        defaultContent: `Welcome to The Editly Foundry Co. By subscribing to our video editing retainers or submitting a project brief, you agree that you own or possess legal rights to all raw media provided. Upon full payment of retainers or project milestones, 100% of the intellectual property (IP) and commercial rights of all final edited assets transfer entirely to you.`
      };
    } else {
      notFound();
    }
  }

  return (
    <>
      {/* Hero Section */}
      <section className="legal-hero" style={{ paddingTop: '150px', paddingBottom: '60px', background: 'var(--bg-secondary)', textAlign: 'center' }}>
        <div className="container">
          <h1 style={{ fontSize: '3rem', marginBottom: '15px', color: 'var(--text-primary)' }}>{page.title}</h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="legal-content section-padding" style={{ background: 'var(--bg-primary)' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto', color: 'var(--text-secondary)', lineHeight: '1.8' }}>
          {page.isDefault ? (
            <p style={{ fontSize: '1.1rem' }}>{page.defaultContent}</p>
          ) : (
            <PortableText value={page.content} components={portableTextComponents} />
          )}
        </div>
      </section>
    </>
  );
}
