import Link from 'next/link';

export const metadata = {
  title: 'Our 48-Hour Workflow | The Editly Foundry Co.',
  description: 'Explore the systematic 5-step video editing and post-production pipeline that delivers studio-grade videos within 48 hours.'
};

export default function WorkflowPage() {
  const steps = [
    {
      num: '01',
      title: 'Footage Drop & Automated Cloud Ingest',
      time: 'Hour 0 – 4',
      icon: 'fa-solid fa-cloud-arrow-up',
      color: '#38BDF8',
      desc: 'Simply drag and drop your raw camera files, Loom recordings, or audio stems into your private Google Drive, Dropbox, or Frame.io folder. Our automated asset ingestion kicks in immediately.'
    },
    {
      num: '02',
      title: 'Script Doctor & Retention Hook Engineering',
      time: 'Hour 4 – 12',
      icon: 'fa-solid fa-bolt',
      color: '#F59E0B',
      desc: 'Our Creative Director and Lead Editor dissect the narrative. We isolate the most impactful 3-second hook to prevent drop-off and plan kinetic visual accents before cutting a single frame.'
    },
    {
      num: '03',
      title: 'A-Roll & B-Roll Precision Assembly (NLE Cut)',
      time: 'Hour 12 – 24',
      icon: 'fa-solid fa-scissors',
      color: '#8B5CF6',
      desc: 'Using Adobe Premiere Pro and DaVinci Resolve, we eliminate filler words, breaths, and pauses. Dynamic jump-cuts, multi-angle punches, and visual B-roll are placed to sustain narrative rhythm.'
    },
    {
      num: '04',
      title: 'Sound Design, Color Grading & 3D Motion FX',
      time: 'Hour 24 – 38',
      icon: 'fa-solid fa-palette',
      color: '#10B981',
      desc: 'We add animated subtitles with custom brand typography, custom audio sound effects (whooshes, risers, clicks), 3D icon pop-ins in After Effects, and apply our Hollywood film LUT color grades.'
    },
    {
      num: '05',
      title: '48h Delivery & Real-Time Frame.io Review',
      time: 'Hour 38 – 48',
      icon: 'fa-solid fa-circle-check',
      color: '#2563EB',
      desc: 'Your finished 4K master is uploaded to Frame.io. Click directly on any video frame to leave timecoded feedback or approve for instant cross-platform posting on TikTok, YouTube, and LinkedIn.'
    }
  ];

  return (
    <div className="workflow-page" style={{ minHeight: '100vh', padding: '140px 0 100px', position: 'relative' }}>
      <div className="container" style={{ maxWidth: '1280px', margin: '0 auto' }}>
        
        {/* Header */}
        <div className="text-center reveal-on-scroll" style={{ marginBottom: '70px' }}>
          <h1 className="section-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 3.8rem)', fontWeight: '800', marginBottom: '20px' }}>
            From Raw Footage to <span className="combination-font">Viral Asset in 48h</span>
          </h1>
          <p className="section-description" style={{ maxWidth: '750px', margin: '0 auto', fontSize: '1.15rem', color: 'var(--text-secondary)' }}>
            No freelancer delays. No endless back-and-forth. Discover our battle-tested 5-step post-production pipeline engineered for high-growth brands.
          </p>
        </div>

        {/* 5-Step Visual Timeline */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', maxWidth: '1000px', margin: '0 auto 80px' }}>
          {steps.map((step, idx) => (
            <div
              key={step.num}
              className="glass-card pop-hover reveal-on-scroll"
              style={{
                padding: '36px 40px',
                borderRadius: '24px',
                display: 'grid',
                gridTemplateColumns: '80px 1fr 140px',
                gap: '30px',
                alignItems: 'center',
                border: '1px solid var(--glass-border)',
                position: 'relative'
              }}
            >
              {/* Step Number Circle */}
              <div style={{
                width: '70px',
                height: '70px',
                borderRadius: '20px',
                background: `linear-gradient(135deg, ${step.color}22, ${step.color}44)`,
                border: `1.5px solid ${step.color}`,
                color: step.color,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.6rem',
                fontWeight: '900'
              }}>
                {step.num}
              </div>

              {/* Step Content */}
              <div>
                <h3 style={{ fontSize: '1.4rem', fontWeight: '800', marginBottom: '8px', color: 'var(--text-primary)' }}>
                  {step.title}
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6', margin: 0 }}>
                  {step.desc}
                </p>
              </div>

              {/* Time Window Badge */}
              <div style={{ textAlign: 'right' }}>
                <span style={{
                  padding: '8px 16px',
                  borderRadius: '50px',
                  background: 'var(--input-bg)',
                  border: '1px solid var(--glass-border)',
                  color: 'var(--text-primary)',
                  fontWeight: '800',
                  fontSize: '0.82rem',
                  display: 'inline-block',
                  whiteSpace: 'nowrap'
                }}>
                  ⏱️ {step.time}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Card */}
        <div 
          className="glass-card text-center reveal-on-scroll"
          style={{
            padding: '60px 40px',
            borderRadius: '32px',
            background: 'linear-gradient(135deg, rgba(37, 99, 235, 0.25) 0%, rgba(2, 132, 199, 0.15) 100%)',
            border: '1px solid rgba(56, 189, 248, 0.4)',
            maxWidth: '1000px',
            margin: '0 auto'
          }}
        >
          <h2 style={{ fontSize: '2.6rem', fontWeight: '800', marginBottom: '14px' }}>
            Experience 48-Hour Turnaround On Your Next Video
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto 30px' }}>
            Book a 15-minute intro call with Executive Producer Walid Abdullah to get your dedicated editing pod onboarded today.
          </p>
          <Link href="/book-a-call" className="btn btn-primary btn-lg pop-btn">
            <span>Book Founder Call ➔</span>
          </Link>
        </div>

      </div>
    </div>
  );
}
