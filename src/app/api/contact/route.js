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

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Formatting the email content
    const fullName = data.firstName || data.name || 'Unknown Client';
    
    const mailOptions = {
      from: `"${fullName}" <${data.email}>`,
      to: process.env.EMAIL_USER, // Send to yourself
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
    
    // Attempt to save to Sanity CMS if a write token is provided
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
        // We don't throw here so the user still gets a success response since the email was sent
      }
    } else {
      console.log("SANITY_API_TOKEN is not set. Skipping saving lead to Sanity.");
    }

    return NextResponse.json({ message: "Email sent successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
