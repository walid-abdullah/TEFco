import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { BLOGS_DATA, ORGANIZATION } from '@/lib/seoData';

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const article = BLOGS_DATA.find((a) => a.slug === slug);

  if (!article) {
    return { title: 'Article Not Found | The Editly Foundry Co.' };
  }

  return {
    title: `${article.title} | The Editly Foundry Co.`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: [{ url: article.thumbnail }]
    }
  };
}

export default async function BlogDetailPage({ params }) {
  const { slug } = await params;
  const article = BLOGS_DATA.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = BLOGS_DATA.filter((a) => a.slug !== slug).slice(0, 2);

  return (
    <article className="blog-detail-page" style={{ paddingTop: '130px', paddingBottom: '100px', minHeight: '100vh', position: 'relative' }}>
      {/* Background ambient orbs */}
      <div className="bg-glow-orb glow-blue" style={{ top: '8%', left: '5%' }}></div>
      <div className="bg-glow-orb glow-purple" style={{ top: '35%', right: '5%' }}></div>

      <div className="container" style={{ maxWidth: '900px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        
        {/* Back Link */}
        <div style={{ marginBottom: '24px' }}>
          <Link 
            href="/blogs" 
            style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '8px', 
              color: 'var(--accent-blue-light)', 
              fontSize: '0.9rem', 
              fontWeight: '700' 
            }}
          >
            <i className="fa-solid fa-arrow-left"></i>
            <span>Back to All Articles</span>
          </Link>
        </div>

        {/* Category & Read Time Pill */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '18px', flexWrap: 'wrap' }}>
          <span style={{
            background: 'rgba(56, 189, 248, 0.12)',
            color: '#38BDF8',
            border: '1px solid rgba(56, 189, 248, 0.3)',
            padding: '4px 14px',
            borderRadius: '30px',
            fontSize: '0.8rem',
            fontWeight: '800'
          }}>
            {article.category}
          </span>
          <span style={{ color: 'var(--text-muted)', fontSize: '0.84rem' }}>
            {article.readTime} • Published on {article.publishedAt}
          </span>
        </div>

        {/* Title */}
        <h1 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.2rem)', fontWeight: '800', lineHeight: '1.2', marginBottom: '24px', color: 'var(--text-primary)' }}>
          {article.title}
        </h1>

        {/* Author Card */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '14px',
          padding: '16px 20px',
          borderRadius: '16px',
          background: 'var(--card-bg)',
          border: '1px solid var(--glass-border)',
          marginBottom: '35px'
        }}>
          <img 
            src={article.authorAvatar} 
            alt={article.author} 
            style={{ width: '48px', height: '48px', borderRadius: '50%', objectFit: 'cover', border: '2px solid #38BDF8' }} 
          />
          <div>
            <h4 style={{ margin: '0 0 2px', fontSize: '1rem', fontWeight: '800', color: 'var(--text-primary)' }}>
              {article.author}
            </h4>
            <span style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
              {article.authorRole} • The Editly Foundry Co.
            </span>
          </div>
        </div>

        {/* Hero Image */}
        <div style={{
          width: '100%',
          height: '420px',
          borderRadius: '24px',
          overflow: 'hidden',
          marginBottom: '45px',
          border: '1px solid var(--glass-border)',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.3)'
        }}>
          <img 
            src={article.thumbnail} 
            alt={article.title} 
            style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
          />
        </div>

        {/* Main Article Body */}
        <div className="glass-card" style={{
          padding: '40px 36px',
          borderRadius: '24px',
          background: 'var(--card-bg)',
          border: '1px solid var(--glass-border)',
          marginBottom: '50px',
          fontSize: '1.08rem',
          lineHeight: '1.85',
          color: 'var(--text-primary)'
        }}>
          <p style={{ fontSize: '1.2rem', fontWeight: '600', color: 'var(--accent-blue-light)', marginBottom: '30px', lineHeight: '1.6' }}>
            {article.excerpt}
          </p>

          <div style={{ display: 'grid', gap: '24px' }}>
            {article.content.map((paragraph, pIdx) => (
              <p key={pIdx} style={{ margin: 0, color: 'var(--text-secondary)' }}>
                {paragraph}
              </p>
            ))}
          </div>

          {/* CTA Box inside Article */}
          <div style={{
            marginTop: '45px',
            padding: '30px',
            borderRadius: '18px',
            background: 'linear-gradient(135deg, rgba(37, 99, 235, 0.15) 0%, rgba(56, 189, 248, 0.1) 100%)',
            border: '1px solid rgba(56, 189, 248, 0.35)',
            textAlign: 'center'
          }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '10px', color: '#FFFFFF' }}>
              Want Viral Retention for Your Brand?
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', maxWidth: '550px', margin: '0 auto 20px' }}>
              Partner with our dedicated video editing pods. Guaranteed 48-hour turnarounds, custom Frame.io workflows, and measurable audience ROI.
            </p>
            <Link href="/book-a-call" className="btn btn-primary" style={{ padding: '12px 28px', borderRadius: '12px', fontWeight: '800' }}>
              Book a 15-Min Growth Audit →
            </Link>
          </div>
        </div>

        {/* Related Articles */}
        <div style={{ marginTop: '60px' }}>
          <h3 style={{ fontSize: '1.6rem', fontWeight: '800', marginBottom: '24px', color: 'var(--text-primary)' }}>
            More Recommended Reads
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
            {relatedArticles.map((rel, rIdx) => (
              <Link 
                key={rIdx} 
                href={`/blogs/${rel.slug}`}
                className="glass-card pop-hover"
                style={{
                  padding: '20px',
                  borderRadius: '18px',
                  display: 'flex',
                  flexDirection: 'column',
                  textDecoration: 'none'
                }}
              >
                <span style={{ fontSize: '0.75rem', color: '#38BDF8', fontWeight: '800', marginBottom: '6px' }}>
                  {rel.category}
                </span>
                <h4 style={{ margin: '0 0 8px', fontSize: '1.05rem', fontWeight: '800', color: 'var(--text-primary)' }}>
                  {rel.title}
                </h4>
                <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-secondary)', flex: 1 }}>
                  {rel.excerpt.slice(0, 110)}...
                </p>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </article>
  );
}