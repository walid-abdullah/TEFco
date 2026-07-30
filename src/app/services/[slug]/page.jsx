import { client, urlFor } from '../../../sanity/client'
import { PortableText } from '@portabletext/react'
import Image from 'next/image'
import Link from 'next/link'

export const revalidate = 60 // Revalidate every 60 seconds

export async function generateStaticParams() {
  const query = `*[_type == "service"]{ slug }`
  const services = await client.fetch(query)
  return services.map((s) => ({ slug: s.slug.current }))
}

export default async function ServiceDetails({ params }) {
  const { slug } = await params
  
  const query = `*[_type == "service" && slug.current == $slug][0]`
  const service = await client.fetch(query, { slug })

  if (!service) {
    return (
      <div style={{ padding: '150px 20px', textAlign: 'center' }}>
        <h1 style={{ color: 'var(--text-primary)' }}>Service not found</h1>
        <Link href="/" style={{ color: '#1976D2', marginTop: '20px', display: 'inline-block' }}>Go Back Home</Link>
      </div>
    )
  }

  return (
    <div style={{ minHeight: '100vh', padding: '120px 20px', maxWidth: '1000px', margin: '0 auto' }}>
      <Link href="/" style={{ display: 'inline-block', marginBottom: '40px', color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.3s ease' }}>
        <i className="fa-solid fa-arrow-left" style={{ marginRight: '8px' }}></i> Back to Home
      </Link>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
        {/* Header Section */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '30px', flexWrap: 'wrap' }}>
          {service.mainImage && (
            <div style={{ position: 'relative', width: '120px', height: '120px', borderRadius: '20px', overflow: 'hidden', flexShrink: 0, boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}>
              <Image src={urlFor(service.mainImage).url()} alt={service.title} fill style={{ objectFit: 'cover' }} />
            </div>
          )}
          <div>
            <h1 className="gradient-text" style={{ fontSize: '3rem', marginBottom: '15px' }}>{service.title}</h1>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '600px', lineHeight: '1.6' }}>{service.shortDescription}</p>
          </div>
        </div>

        <div style={{ width: '100%', height: '1px', background: 'linear-gradient(90deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%)' }}></div>

        {/* Content Section */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
          <div style={{ background: 'var(--bg-secondary)', padding: '40px', borderRadius: '20px', border: '1px solid var(--glass-border)' }}>
            <h3 style={{ color: 'var(--text-primary)', marginBottom: '20px', fontSize: '1.5rem' }}>Detailed Overview</h3>
            <div style={{ color: 'var(--text-secondary)', lineHeight: '1.8', fontSize: '1.1rem' }}>
              <PortableText value={service.body} />
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
            {service.features && service.features.length > 0 && (
              <div style={{ background: 'var(--bg-secondary)', padding: '40px', borderRadius: '20px', border: '1px solid var(--glass-border)' }}>
                <h3 style={{ color: 'var(--text-primary)', marginBottom: '20px', fontSize: '1.5rem' }}>Key Features</h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {service.features.map((feature, idx) => (
                    <li key={idx} style={{ color: 'var(--text-secondary)', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '15px', fontSize: '1.1rem' }}>
                      <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'rgba(25, 118, 210, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#1976D2', flexShrink: 0 }}>
                        <i className="fa-solid fa-check" style={{ fontSize: '0.8rem' }}></i>
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            <Link href="/book-a-call" className="btn btn-primary pulse-anim" style={{ padding: '20px', display: 'flex', justifyContent: 'center', fontSize: '1.1rem', background: 'linear-gradient(135deg, #1976D2 0%, #0d47a1 100%)', border: 'none' }}>
              <span>Book a Consultation</span>
              <i className="fa-solid fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
