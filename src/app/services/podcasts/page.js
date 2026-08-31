import FAQSchema from '@/components/FAQSchema';
import { SERVICE_FAQS } from '@/lib/seoData';

export const metadata = { title: 'Podcasts — The Editly Foundry Co.' };

export default function PodcastsPage() {
  const faqs = SERVICE_FAQS['podcasts'] || [];
  return (
    <>
      <FAQSchema faqs={faqs} />
      <main style={{ paddingTop: '120px', minHeight: '60vh' }}>
        <div className="container">
          <h1>Podcast Production & Clip Repurposing</h1>
          <p>Full-service podcast editing, mastering, and repurposing into short promotional clips.</p>
        </div>
      </main>
    </>
  );
}
