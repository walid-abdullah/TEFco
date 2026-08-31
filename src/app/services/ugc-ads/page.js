import FAQSchema from '@/components/FAQSchema';
import { SERVICE_FAQS } from '@/lib/seoData';

export const metadata = { title: 'UGC Ads — The Editly Foundry Co.' };

export default function UgcAdsPage() {
  const faqs = SERVICE_FAQS['ugc-ads'] || [];
  return (
    <>
      <FAQSchema faqs={faqs} />
      <main style={{ paddingTop: '120px', minHeight: '60vh' }}>
        <div className="container">
          <h1>UGC & Direct Response Video Ads</h1>
          <p>High-converting ad creative with multiple testable variations for Meta & TikTok.</p>
        </div>
      </main>
    </>
  );
}
