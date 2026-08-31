import FAQSchema from '@/components/FAQSchema';
import { SERVICE_FAQS } from '@/lib/seoData';

export const metadata = {
  title: 'Reels & Shorts — The Editly Foundry Co.'
};

export default function ReelsShortsPage() {
  const faqs = SERVICE_FAQS['reels-shorts'] || [];
  return (
    <>
      <FAQSchema faqs={faqs} />
      <main style={{ paddingTop: '120px', minHeight: '60vh' }}>
        <div className="container">
          <h1>Reels & Shorts — Viral Retention Editing</h1>
          <p>Short-form editing that converts: hooks, captions, and optimized cutdowns for Reels, TikTok, and Shorts.</p>
        </div>
      </main>
    </>
  );
}
