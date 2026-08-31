import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';
import { createClient } from 'next-sanity';

export async function POST(request) {
  try {
    const data = await request.json();

    // Check if credentials exist
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error("Missing EMAIL_USER or EMAIL_PASS environment variables.");
      return NextResponse.json({ error: "Server configuration error" }, { status: 500 });
    }

    // Formatting the lead content
    const fullName = data.firstName || data.name || 'Unknown Client';
    const cleanPhone = String(data.whatsapp || data.phone || '').replace(/[^0-9]/g, '');
    const formattedPhone = (cleanPhone.startsWith('01') && cleanPhone.length === 11) ? ('88' + cleanPhone) : cleanPhone;

    // 1. INSTANT DUAL WHATSAPP DISPATCH (Founder Alert + Client Confirmation)
    if (process.env.WHATSAPP_API_TOKEN && process.env.WHATSAPP_PHONE_NUMBER_ID) {
      const founderAlertPhone = '8801886755888';
      const founderLeadMsg = `*NEW PROJECT INQUIRY — THE EDITLY FOUNDRY CO.*\n\n` +
        `Client Name: ${fullName}\n` +
        `Email: ${data.email || 'N/A'}\n` +
        `WhatsApp: ${data.whatsapp || data.phone || 'N/A'}\n` +
        `Budget: ${data.budget || 'N/A'}\n` +
        `Service: ${data.service || data.needs || 'N/A'}\n` +
        `Channel / Brand: ${data.channelLink || 'N/A'}\n` +
        (data.message ? `Details: ${data.message}\n\n` : '\n') +
        `Direct WhatsApp Client Link:\nhttps://wa.me/${formattedPhone}`;

      // A. Send Full Lead Alert to Founder
      try {
        await fetch(`https://graph.facebook.com/v18.0/${process.env.WHATSAPP_PHONE_NUMBER_ID}/messages`, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${process.env.WHATSAPP_API_TOKEN}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            messaging_product: 'whatsapp',
            recipient_type: 'individual',
            to: founderAlertPhone,
            type: 'text',
            text: { preview_url: false, body: founderLeadMsg }
          })
        });
      } catch (fErr) {
        console.error('Founder WhatsApp notification error:', fErr);
      }

      // B. Send Client Instant Confirmation Message
      if (formattedPhone) {
        const actualCalendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL || 'https://calendly.com/w-abdullah5588/30min';
        const walidDirectWhatsApp = 'https://wa.me/8801886755888';

        const clientWhatsAppMsg = `Hi ${fullName},\n\n` +
          `Thank you for submitting your project brief with *The Editly Foundry Co.* We have successfully logged your inquiry regarding *"${data.service || data.needs || 'Video Post-Production'}"*.\n\n` +
          `Our Executive Producer *Walid Abdullah* is currently reviewing your content and requirements.\n\n` +
          `1. Direct WhatsApp Chat with Walid:\n` +
          `${walidDirectWhatsApp}\n\n` +
          `2. Or Book a 15-Min Video Strategy Call:\n` +
          `${actualCalendlyUrl}\n\n` +
          `We look forward to working with you.\n\n` +
          `_The Editly Foundry Co. Production Desk_\n` +
          `📍 United States • Dubai • Dhaka`;

        try {
          // Deliver confirmation to client
          await fetch(`https://graph.facebook.com/v18.0/${process.env.WHATSAPP_PHONE_NUMBER_ID}/messages`, {
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${process.env.WHATSAPP_API_TOKEN}`,
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              messaging_product: 'whatsapp',
              recipient_type: 'individual',
              to: formattedPhone,
              type: 'text',
              text: { preview_url: false, body: clientWhatsAppMsg }
            })
          });
        } catch (cErr) {
          console.error('Client WhatsApp notification error:', cErr);
        }
      }
    }

    // 2. Setup Email Transporter
    let transporter = null;
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });
    }

    if (transporter) {
      try {
        const mailOptions = {
          from: `"${fullName}" <${data.email}>`,
          to: process.env.EMAIL_USER,
          replyTo: data.email,
          subject: `New Request: ${fullName}`,
          html: `
            <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
              <h2 style="color: #2563EB;">New ${data.message ? 'Message' : 'Booking Request'}</h2>
              <p>You have received a new request from your website.</p>
              
              <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
                <tr>
                  <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; width: 35%;">Name</td>
                  <td style="padding: 10px; border-bottom: 1px solid #eee;">${fullName}</td>
                </tr>
                <tr>
                  <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Email</td>
                  <td style="padding: 10px; border-bottom: 1px solid #eee;">${data.email}</td>
                </tr>
                ${data.whatsapp ? `
                <tr>
                  <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">WhatsApp</td>
                  <td style="padding: 10px; border-bottom: 1px solid #eee;">${data.whatsapp}</td>
                </tr>` : ''}
                ${data.service ? `
                <tr>
                  <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Interested In</td>
                  <td style="padding: 10px; border-bottom: 1px solid #eee;">${data.service}</td>
                </tr>` : ''}
                ${data.channelLink ? `
                <tr>
                  <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Channel / Brand</td>
                  <td style="padding: 10px; border-bottom: 1px solid #eee;"><a href="${data.channelLink}">${data.channelLink}</a></td>
                </tr>` : ''}
                ${data.needs || data.bottleneck ? `
                <tr>
                  <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; vertical-align: top;">Bottleneck</td>
                  <td style="padding: 10px; border-bottom: 1px solid #eee; line-height: 1.6;">${data.needs || data.bottleneck}</td>
                </tr>` : ''}
                ${data.message ? `
                <tr>
                  <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; vertical-align: top;">Message</td>
                  <td style="padding: 10px; border-bottom: 1px solid #eee; line-height: 1.6;">${data.message}</td>
                </tr>` : ''}
              </table>
              
              <p style="margin-top: 30px; font-size: 0.9em; color: #888;">This email was sent automatically from your Editly Foundry website.</p>
            </div>
          `,
        };

        await transporter.sendMail(mailOptions);
      } catch (mailErr) {
        console.error('Founder Email notification error:', mailErr);
      }
    }

    // 2. Send Instant Branded Auto-Responder & Calendly Link to the Client Email
    if (data.email) {
      try {
        const clientAutoReply = {
          from: `"The Editly Foundry Co." <${process.env.EMAIL_USER}>`,
          to: data.email,
          replyTo: process.env.EMAIL_USER,
          subject: `Your Project Brief with The Editly Foundry Co.`,
          text: `Hi ${fullName},\n\nThank you for reaching out to The Editly Foundry Co. We have received your project brief.\n\nOur Executive Producer Walid Abdullah is currently reviewing your content.\n\nTo lock in your 48-hour turnaround, you can book a quick 15-minute slot on Walid's calendar here:\nhttps://calendly.com/w-abdullah5588/30min\n\nLooking forward to speaking with you!\n\nWalid Abdullah\nFounder & CEO, The Editly Foundry Co.\nWhatsApp: +880 1886 755 888`,
          html: `
            <!DOCTYPE html>
            <html>
            <head><meta charset="utf-8"/></head>
            <body style="margin: 0; padding: 20px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f8fafc; color: #1e293b;">
              <div style="max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 16px; overflow: hidden; border: 1px solid #e2e8f0; box-shadow: 0 4px 20px rgba(0,0,0,0.05);">
                
                <!-- Header Brand Bar -->
                <div style="background: #090e1a; padding: 28px; text-align: center;">
                  <div style="font-size: 22px; font-weight: 800; color: #ffffff; letter-spacing: -0.5px;">
                    The Editly Foundry <span style="color: #38bdf8;">Co.</span>
                  </div>
                  <div style="font-size: 11px; color: #94a3b8; letter-spacing: 2px; text-transform: uppercase; margin-top: 4px;">
                    High-Retention Video Post-Production
                  </div>
                </div>

                <!-- Body Content -->
                <div style="padding: 35px 30px;">
                  <h2 style="font-size: 20px; font-weight: 700; color: #0f172a; margin-top: 0; margin-bottom: 16px;">
                    Hi ${fullName},
                  </h2>

                  <p style="font-size: 15px; line-height: 1.7; color: #334155; margin-bottom: 20px;">
                    Thank you for reaching out to <strong>The Editly Foundry Co.</strong> We received your project inquiry regarding <em>"${data.service || data.needs || 'Video Post-Production'}"</em>.
                  </p>

                  <p style="font-size: 15px; line-height: 1.7; color: #334155; margin-bottom: 28px;">
                    Our Executive Producer Walid Abdullah is currently reviewing your channel and brand details. To skip the email back-and-forth and lock in your 48-hour production turnaround, you can grab a quick 15-minute slot directly on Walid's calendar:
                  </p>

                  <!-- Sleek & Classy Action Buttons -->
                  <div style="text-align: center; margin: 30px 0;">
                    <!-- Primary Blue Calendly Button -->
                    <a href="${process.env.NEXT_PUBLIC_CALENDLY_URL || 'https://calendly.com/w-abdullah5588/30min'}" 
                       style="display: inline-block; padding: 13px 28px; background: #2563eb; color: #ffffff; font-size: 14px; font-weight: 700; text-decoration: none; border-radius: 8px; box-shadow: 0 4px 12px rgba(37, 99, 235, 0.25);">
                      Book 15-Min Strategy Call &rarr;
                    </a>
                    
                    <!-- Sleek WhatsApp Sub-Link / Button -->
                    <div style="margin-top: 14px;">
                      <a href="https://wa.me/8801886755888" 
                         style="display: inline-block; padding: 7px 18px; background: #ecfdf5; border: 1px solid #a7f3d0; color: #059669; font-size: 13px; font-weight: 700; text-decoration: none; border-radius: 20px;">
                        <span style="font-size: 14px; margin-right: 4px;">💬</span> Chat Directly on WhatsApp &rarr;
                      </a>
                    </div>
                  </div>

                  <!-- 3 Step Next Box -->
                  <div style="background: #f1f5f9; border-radius: 12px; padding: 20px; margin-bottom: 25px;">
                    <div style="font-size: 12px; font-weight: 700; color: #0284c7; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 10px;">
                      What Happens Next?
                    </div>
                    <ul style="margin: 0; padding-left: 18px; font-size: 14px; color: #475569; line-height: 1.6;">
                      <li>We review your raw footage & audit retention drop-offs</li>
                      <li>We assign your dedicated Senior Video Editor & Motion Lead</li>
                      <li>First 4K draft delivered within 48 hours on Frame.io</li>
                    </ul>
                  </div>

                  <p style="font-size: 14px; line-height: 1.6; color: #64748b; margin-bottom: 0;">
                    Need urgent assistance? Feel free to reply directly to this email or reach Walid on WhatsApp at <strong>+880 1886 755 888</strong>.
                  </p>
                </div>

                <!-- Footer -->
                <div style="background: #f8fafc; border-top: 1px solid #e2e8f0; padding: 18px; text-align: center; font-size: 12px; color: #94a3b8;">
                  &copy; 2026 The Editly Foundry Co. &bull; United States &bull; Dubai &bull; Dhaka
                </div>

              </div>
            </body>
            </html>
          `
        };

        await transporter.sendMail(clientAutoReply);
        console.log(`[Auto-Responder Sent] Successfully delivered confirmation & Calendly invite to ${data.email}`);
      } catch (clientMailError) {
        console.error("Failed to send auto-reply to client:", clientMailError);
      }
    }

    // 4. Attempt to save to Sanity CMS if a write token is provided
    if (process.env.SANITY_API_TOKEN) {
      try {
        const sanityClient = createClient({
          projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
          dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
          apiVersion: '2024-01-01',
          useCdn: false,
          token: process.env.SANITY_API_TOKEN
        });
        
        let messageText = '';
        if (data.needs || data.bottleneck) {
          messageText = `Channel: ${data.channelLink || 'N/A'}\nBottleneck: ${data.needs || data.bottleneck}`;
        } else if (data.message) {
          messageText = data.message;
        }

        await sanityClient.create({
          _type: 'contactMessage',
          name: fullName,
          email: data.email,
          type: (data.needs || data.bottleneck) ? 'booking' : 'general',
          message: messageText,
          status: 'unread',
          submittedAt: new Date().toISOString()
        });
        console.log("Successfully saved lead to Sanity.");
      } catch (sanityError) {
        console.error("Failed to save lead to Sanity:", sanityError);
      }
    } else {
      console.log("SANITY_API_TOKEN is not set. Skipping saving lead to Sanity.");
    }

    return NextResponse.json({ message: "Inquiry processed successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error processing lead inquiry:", error);
    return NextResponse.json({ error: "Failed to process inquiry" }, { status: 500 });
  }
}
