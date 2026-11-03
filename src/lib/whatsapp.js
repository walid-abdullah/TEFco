const API_VERSION = process.env.WHATSAPP_API_VERSION || 'v23.0';

// Returns true only when Meta accepted the message. Free-form text outside the 24h window needs an approved template.
export async function sendWhatsAppText(to, body) {
  if (!process.env.WHATSAPP_API_TOKEN || !process.env.WHATSAPP_PHONE_NUMBER_ID || !to) return false;
  try {
    const res = await fetch(`https://graph.facebook.com/${API_VERSION}/${process.env.WHATSAPP_PHONE_NUMBER_ID}/messages`, {
      method: 'POST',
      headers: { Authorization: `Bearer ${process.env.WHATSAPP_API_TOKEN}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ messaging_product: 'whatsapp', recipient_type: 'individual', to, type: 'text', text: { preview_url: false, body } }),
    });
    if (!res.ok) console.error('WhatsApp rejected message:', res.status, await res.text());
    return res.ok;
  } catch (error) {
    console.error('WhatsApp request failed:', error);
    return false;
  }
}
