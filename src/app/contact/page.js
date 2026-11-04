"use client";

import DesignMonksContact from '@/components/DesignMonksContact';
import CalendlyEmbed from '@/components/CalendlyEmbed';

const channels = [
  { label: 'Email', value: 'theeditlyfoundry@gmail.com', href: 'mailto:theeditlyfoundry@gmail.com', icon: 'fa-solid fa-envelope' },
  { label: 'WhatsApp', value: '+880 1886 755 888', href: 'https://wa.me/8801886755888', icon: 'fa-brands fa-whatsapp' },
  { label: 'Messenger', value: 'editly.foundry', href: 'https://m.me/editly.foundry', icon: 'fa-brands fa-facebook-messenger' },
];

const socials = [
  { label: 'Facebook', href: 'https://www.facebook.com/editly.foundry/' },
  { label: 'Instagram', href: 'https://www.instagram.com/theeditly_foundry/' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/walid-abdullah/' },
];

const hubs = [
  { city: 'Dhaka', note: 'Production studio' },
  { city: 'Dubai', note: 'Client partnerships' },
  { city: 'New York', note: 'US clients' },
];

export default function ContactPage() {
  return (
    <main className="sg-page">
      <section className="sg-phero on-iris hero-iris">
        <div className="container">
          <span className="section-subtitle">Contact</span>
          <h1>Let&apos;s start <span className="combination-font">your project.</span></h1>
          <div className="sg-phero-foot">
            <p>Send the project brief, message us directly or book a call. Choose whatever is easiest for you.</p>
          </div>
        </div>
      </section>

      <section className="sg-band">
        <div className="container sg-cn-grid">
          <aside className="sg-cn-info on-ink">
            <h2>Talk to us directly.</h2>
            <ul className="sg-cn-channels">
              {channels.map((channel) => (
                <li key={channel.label}>
                  <a href={channel.href} target={channel.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
                    <i className={channel.icon} aria-hidden="true" />
                    <span><small>{channel.label}</small>{channel.value}</span>
                  </a>
                </li>
              ))}
            </ul>
            <div className="sg-cn-block">
              <small>Where we work</small>
              <ul className="sg-cn-hubs">
                {hubs.map((hub) => <li key={hub.city}><strong>{hub.city}</strong><span>{hub.note}</span></li>)}
              </ul>
            </div>
            <div className="sg-cn-block">
              <small>Follow the studio</small>
              <div className="sg-cn-socials">
                {socials.map((social) => <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer">{social.label}</a>)}
              </div>
            </div>
          </aside>

          <div className="sg-cn-form">
            <h2>Send a project brief.</h2>
            <p>Tell us what you need edited and we will come back with the next step.</p>
            <DesignMonksContact />
          </div>
        </div>
      </section>

      <section className="sg-band" id="book">
        <div className="container">
          <div className="sg-cn-book-head">
            <span className="section-subtitle">Prefer to talk?</span>
            <h2>Book a <span className="combination-font">call.</span></h2>
            <p>Pick a time on the calendar to speak with Walid Abdullah.</p>
          </div>
          <div className="sg-calendly-box">
            <CalendlyEmbed title="Book a call with Walid Abdullah" />
          </div>
        </div>
      </section>
    </main>
  );
}
