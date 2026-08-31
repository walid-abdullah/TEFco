import Link from 'next/link';
import { BLOGS_DATA } from '@/lib/seoData';

export const metadata = {
  title: "Insights & Video Strategy Articles | The Editly Foundry Co.",
  description: "Deep dives into short-form retention engineering, podcast repurposing, SaaS motion graphics, and cinematic video post-production.",
};

export default function BlogsPage() {
  return (
    <div className="blogs-page" style={{ paddingTop: '120px', paddingBottom: '100px', minHeight: '100vh', position: 'relative' }}>
      
      {/* Background ambient orbs */}
      <div className="bg-glow-orb glow-blue" style={{ top: '10%', left: '5%' }}></div>
      <div className="bg-glow-orb glow-purple" style={{ top: '40%', right: '5%' }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '1280px' }}>
        
        {/* Page Header */}
        <div className="text-center" style={{ maxWidth: '850px', margin: '0 auto 60px' }}>
          <span className="section-subtitle">Insights & Playbooks</span>
          <h1 className="section-title" style={{ fontSize: '3.2rem', marginBottom: '16px' }}>
            Mastering <span className="combination-font">Content & Video ROI</span>
          </h1>
          <p className="section-description" style={{ color: 'var(--text-secondary)', fontSize: '1.15rem' }}>
            Data-driven video editing strategies, algorithmic retention hacks, and scaling frameworks for high-growth creators and brands.
          </p>
        </div>

        {/* 3-Column Luxury Blog Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))',
          gap: '30px'
        }}>
          {BLOGS_DATA.map((article, idx) => (
            <article 
              key={article.slug || idx} 
              className="glass-card pop-hover"
              style={{
                borderRadius: '24px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                background: 'var(--card-bg)',
                border: '1px solid var(--glass-border)',
                boxShadow: '0 20px 50px rgba(0, 0, 0, 0.15)'
              }}
            >
              {/* Thumbnail Image with Category Badge */}
              <div style={{ width: '100%', height: '230px', position: 'relative', overflow: 'hidden' }}>
                <img 
                  src={article.thumbnail} 
                  alt={article.title} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} 
                />
                <div style={{
                  position: 'absolute',
                  top: '16px',
                  left: '16px',
                  background: 'rgba(7, 13, 24, 0.8)',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  color: '#38BDF8',
                  padding: '4px 12px',
                  borderRadius: '30px',
                  fontSize: '0.75rem',
                  fontWeight: '800',
                  border: '1px solid rgba(56, 189, 248, 0.3)'
                }}>
                  {article.category}
                </div>
                <div style={{
                  position: 'absolute',
                  bottom: '16px',
                  right: '16px',
                  background: 'rgba(0, 0, 0, 0.65)',
                  backdropFilter: 'blur(8px)',
                  color: '#FFFFFF',
                  padding: '3px 10px',
                  borderRadius: '20px',
                  fontSize: '0.72rem',
                  fontWeight: '600'
                }}>
                  {article.readTime}
                </div>
              </div>

              {/* Content Box */}
              <div style={{ padding: '24px', flex: '1', display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '8px' }}>
                  {article.publishedAt}
                </span>

                <h3 style={{ fontSize: '1.25rem', fontWeight: '800', lineHeight: '1.4', marginBottom: '12px', color: 'var(--text-primary)' }}>
                  {article.title}
                </h3>

                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.6', flex: '1', marginBottom: '20px' }}>
                  {article.excerpt}
                </p>

                {/* Author & Read More Link */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '16px', borderTop: '1px solid var(--glass-border)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <img 
                      src={article.authorAvatar} 
                      alt={article.author} 
                      style={{ width: '32px', height: '32px', borderRadius: '50%', objectFit: 'cover' }} 
                    />
                    <span style={{ fontSize: '0.82rem', fontWeight: '700', color: 'var(--text-primary)' }}>
                      {article.author}
                    </span>
                  </div>

                  <Link 
                    href={`/blogs/${article.slug}`} 
                    className="btn btn-outline"
                    style={{
                      padding: '6px 14px',
                      borderRadius: '20px',
                      fontSize: '0.82rem',
                      fontWeight: '700',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px'
                    }}
                  >
                    <span>Read Full Article</span>
                    <i className="fa-solid fa-arrow-right" style={{ fontSize: '0.75rem' }}></i>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </div>
  );
}
