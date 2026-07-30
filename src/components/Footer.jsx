import Link from 'next/link';

export default function Footer({ menu }) {
  return (
    <footer className="footer" style={{ padding: '60px 0 30px', borderTop: '1px solid var(--glass-border)', background: 'var(--bg-primary)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px', marginBottom: '40px', textAlign: 'left' }}>
          
          {/* Col 1 */}
          <div>
            <Link href="/" style={{ fontSize: '1.8rem', fontWeight: 700, color: 'var(--text-primary)', textDecoration: 'none', fontFamily: '"Playfair Display", serif', display: 'inline-block', marginBottom: '20px' }}>
              Editly<span style={{ color: 'var(--accent-blue)' }}>Foundry</span>
            </Link>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '20px', maxWidth: '300px' }}>
              Premium video editing agency engineering viral hooks and high-retention content for creators and brands.
            </p>
            <div style={{ display: 'flex', gap: '15px' }}>
              <a href="https://www.facebook.com/editly.foundry/" target="_blank" className="social-icon"><i className="fa-brands fa-facebook-f"></i></a>
              <a href="https://www.instagram.com/theeditly_foundry/" target="_blank" className="social-icon"><i className="fa-brands fa-instagram"></i></a>
              <a href="https://www.linkedin.com/in/walid-abdullah/" target="_blank" className="social-icon"><i className="fa-brands fa-linkedin-in"></i></a>
            </div>
          </div>
          
          {/* Col 2 */}
          <div>
            <h4 style={{ fontSize: '1.2rem', marginBottom: '20px', fontWeight: 600 }}>Quick Links</h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {menu && menu.length > 0 ? (
                menu.map((item, idx) => (
                  <li key={idx}>
                    <Link href={item.link || '#'} className="footer-link">{item.label}</Link>
                  </li>
                ))
              ) : (
                <>
                  <li><Link href="/#about" className="footer-link">About Us</Link></li>
                  <li><Link href="/#services" className="footer-link">Services</Link></li>
                  <li><Link href="/#portfolio" className="footer-link">Portfolio</Link></li>
                  <li><Link href="/#pricing" className="footer-link">Pricing</Link></li>
                  <li><Link href="/#team" className="footer-link">Team</Link></li>
                  <li><Link href="/#blogs" className="footer-link">Blogs</Link></li>
                </>
              )}
            </ul>
          </div>
          
          {/* Col 3 */}
          <div>
            <h4 style={{ fontSize: '1.2rem', marginBottom: '20px', fontWeight: 600 }}>Contact & Legal</h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}><i className="fa-solid fa-envelope" style={{ marginRight: '10px', width: '16px' }}></i> <a href="mailto:theeditlyfoundry@gmail.com" style={{ color: 'inherit', textDecoration: 'none' }}>theeditlyfoundry@gmail.com</a></li>
              <li style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}><i className="fa-brands fa-whatsapp" style={{ marginRight: '10px', width: '16px' }}></i> <a href="https://wa.me/8801886755888" target="_blank" style={{ color: 'inherit', textDecoration: 'none' }}>01886 755 888</a></li>
              <li style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginTop: '10px' }}><Link href="/privacy" style={{ color: 'inherit', textDecoration: 'none' }}>Privacy Policy</Link></li>
              <li style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}><Link href="/terms" style={{ color: 'inherit', textDecoration: 'none' }}>Terms of Service</Link></li>
            </ul>
          </div>
          
        </div>
        
        <div style={{ textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '20px' }}>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', margin: 0 }}>&copy; {new Date().getFullYear()} The Editly Foundry Co. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
