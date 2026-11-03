import crypto from 'node:crypto';
import { NextResponse } from 'next/server';
import { sendWhatsAppText } from '@/lib/whatsapp';

const MAX_AGE_SECONDS = 5 * 60;

function isValidSignature(header, rawBody, key) {
  const parts = Object.fromEntries((header || '').split(',').map((part) => part.split('=')));
  if (!parts.t || !parts.v1) return false;
  if (Math.abs(Date.now() / 1000 - Number(parts.t)) > MAX_AGE_SECONDS) return false;
  const expected = crypto.createHmac('sha256', key).update(`${parts.t}.${rawBody}`).digest('hex');
  const a = Buffer.from(expected);
  const b = Buffer.from(parts.v1);
  return a.length === b.length && crypto.timingSafeEqual(a, b);
}

export async function POST(req) {
  const key = process.env.CALENDLY_WEBHOOK_SIGNING_KEY;
  if (!key) {
    console.error('CALENDLY_WEBHOOK_SIGNING_KEY is not configured.');
    return NextResponse.json({ success: false, error: 'Webhook not configured' }, { status: 503 });
  }

  const rawBody = await req.text();
  if (!isValidSignature(req.headers.get('calendly-webhook-signature'), rawBody, key)) {
    return NextResponse.json({ success: false, error: 'Invalid signature' }, { status: 401 });
  }

  try {
    const { event, payload } = JSON.parse(rawBody);
    if (event !== 'invitee.created') {
      return NextResponse.json({ success: true, message: 'Event ignored' });
    }

    const clientName = payload?.name || payload?.invitee?.name || 'there';
    const clientPhone = String(payload?.text_reminder_number || payload?.invitee?.text_reminder_number || '').replace(/[^0-9]/g, '');
    const scheduledEvent = payload?.scheduled_event || payload?.event || {};
    const timeZone = payload?.timezone || payload?.invitee?.timezone || 'UTC';
    const meetLink = scheduledEvent.location?.join_url;

    const formattedDate = new Intl.DateTimeFormat('en-US', {
      timeZone,
      weekday: 'long',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      timeZoneName: 'short',
    }).format(new Date(scheduledEvent.start_time || Date.now()));

    const message = `Hi ${clientName}! Thank you for booking a Discovery Call with The Editly Foundry Co.\n\nDate & Time: ${formattedDate}\n` +
      (meetLink ? `Meeting Link: ${meetLink}\n` : '') +
      `Our Executive Producer Walid Abdullah will review your brand details before the call. See you soon!`;

    const whatsappSent = await sendWhatsAppText(clientPhone, message);
    return NextResponse.json({ success: true, whatsappSent, formattedDate });
  } catch (error) {
    console.error('Calendly Webhook Error:', error);
    return NextResponse.json({ success: false, error: 'Invalid payload' }, { status: 400 });
  }
}
