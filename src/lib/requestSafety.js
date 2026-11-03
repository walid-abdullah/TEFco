const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS = 5;
const hits = new Map();

// Best-effort per-instance limiter. Use a shared store (e.g. Upstash) for a hard limit across serverless instances.
export function isRateLimited(request) {
  const ip = (request.headers.get('x-forwarded-for') || 'unknown').split(',')[0].trim();
  const now = Date.now();
  for (const [key, entry] of hits) if (entry.reset < now) hits.delete(key);
  const entry = hits.get(ip);
  if (!entry) {
    hits.set(ip, { count: 1, reset: now + WINDOW_MS });
    return false;
  }
  entry.count += 1;
  return entry.count > MAX_REQUESTS;
}

export const clip = (value, max = 2000) => String(value ?? '').trim().slice(0, max);

export const isEmail = (value) => /^[^\s@<>"',;]+@[^\s@<>"',;]+\.[^\s@<>"',;]{2,}$/.test(value);

export const escapeHtml = (value) =>
  String(value ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

export function safeUrl(value) {
  try {
    const url = new URL(/^https?:\/\//i.test(value) ? value : `https://${value}`);
    return url.protocol === 'https:' || url.protocol === 'http:' ? url.href : '';
  } catch {
    return '';
  }
}

export function escapeFields(source) {
  return Object.fromEntries(
    Object.entries(source).map(([key, value]) => [
      key,
      Array.isArray(value) ? value.map(escapeHtml) : escapeHtml(value),
    ])
  );
}
