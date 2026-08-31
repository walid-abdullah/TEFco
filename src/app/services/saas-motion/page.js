import FAQSchema from '@/components/FAQSchema';
import { SERVICE_FAQS } from '@/lib/seoData';

export const metadata = { title: 'SaaS Motion — The Editly Foundry Co.' };

export default function SaasMotionPage() {
  const faqs = SERVICE_FAQS['saas-motion'] || [];
  return (
    <>
      <FAQSchema faqs={faqs} />
      <main style={{ paddingTop: '120px', minHeight: '60vh' }}>
        <div className="container">
          <h1>SaaS Animated UI Demos & Product Launch Videos</h1>
          <p>Explain complex products quickly with polished UI demos and motion design.</p>
        </div>
      </main>
    </>
  );
}
