export function getGoogleAnalyticsId() {
  return process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || process.env.GA_MEASUREMENT_ID || '';
}

export function initAnalytics() {
  if (typeof window === 'undefined') return;

  const measurementId = getGoogleAnalyticsId();
  if (!measurementId) return;

  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function gtag(){ window.dataLayer.push(arguments); };

  if (!document.getElementById('gtag-script')) {
    const script = document.createElement('script');
    script.id = 'gtag-script';
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    document.head.appendChild(script);
  }

  window.gtag('js', new Date());
  window.gtag('config', measurementId, {
    page_path: window.location.pathname,
    anonymize_ip: true,
  });
}

export function trackEvent(eventName, params = {}) {
  if (typeof window === 'undefined') return;

  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, params);
    return;
  }

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: eventName, ...params });
}

export function trackPageView(pathname = '/', title = 'Page view') {
  if (typeof window === 'undefined') return;

  trackEvent('page_view', {
    page_path: pathname,
    page_title: title,
  });
}

export function trackCtaClick({ label, location, value }) {
  trackEvent('cta_click', {
    cta_label: label,
    cta_location: location,
    value: value || 0,
  });
}
