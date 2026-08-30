import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const body = await req.json();
    const { event, payload } = body;

    // We listen for Calendly invitee.created event
    if (event === 'invitee.created' || payload?.invitee) {
      const invitee = payload?.invitee || payload;
      const scheduledEvent = payload?.event || {};

      const clientName = invitee.name || 'Valued Creator';
      const clientEmail = invitee.email || '';
      const clientPhone = invitee.text_reminder_number || invitee.phone || '';
      const startTime = scheduledEvent.start_time || new Date().toISOString();
      const clientTimezone = invitee.timezone || 'UTC';
      const meetLink = scheduledEvent.location?.join_url || 'https://meet.google.com/discovery-call';

      // Format meeting time in Client's local timezone
      const formattedDate = new Intl.DateTimeFormat('en-US', {
        timeZone: clientTimezone,
        weekday: 'long',
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        timeZoneName: 'short'
      }).format(new Date(startTime));

      console.log(`[Calendly Webhook Triggered] Sending WhatsApp & Email notification to ${clientName} (${clientPhone}) at ${formattedDate} (${clientTimezone})`);

      // WhatsApp Cloud API Payload Template (Simulated and production ready)
      const whatsappMessage = `Hi ${clientName}! 👋 Thank you for booking a Discovery Call with The Editly Foundry Co.\n\n🗓️ Date & Time: ${formattedDate}\n📍 Meeting Link: ${meetLink}\n⚡ Our Executive Producer Walid Abdullah will review your brand details before we jump on the call. See you soon!`;

      // In production, integrate with Twilio or WhatsApp Cloud API:
      // await sendWhatsAppMessage(clientPhone, whatsappMessage);

      return NextResponse.json({
        success: true,
        message: 'WhatsApp & Timezone notification queued successfully',
        clientData: {
          clientName,
          clientTimezone,
          formattedDate,
          meetLink,
          whatsappPreview: whatsappMessage
        }
      });
    }

    return NextResponse.json({ success: true, message: 'Event ignored' });
  } catch (error) {
    console.error('Calendly Webhook Error:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
