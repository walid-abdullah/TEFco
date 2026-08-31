import FAQSchema from '@/components/FAQSchema';
import { SERVICE_FAQS } from '@/lib/seoData';

export const metadata = { title: 'Talking Head — The Editly Foundry Co.' };

export default function TalkingHeadPage() {
  const faqs = SERVICE_FAQS['talking-head'] || [];
  return (
    <>
      <FAQSchema faqs={faqs} />
      <main style={{ paddingTop: '120px', minHeight: '60vh' }}>
        <div className="container">
          <h1>YouTube Long-Form & Talking Head Authority</h1>
          <p>Cinematic editing that increases watch-time and positions you as an authority.</p>
        </div>
      </main>
    </>
  );
}
