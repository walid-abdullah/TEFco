import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';
import { clip, escapeFields, isEmail, isRateLimited, safeUrl } from '@/lib/requestSafety';

export async function POST(request) {
  try {
    if (isRateLimited(request)) {
      return NextResponse.json({ error: 'Too many requests. Please try again shortly.' }, { status: 429 });
    }

    const body = await request.json().catch(() => null);
    if (!body || typeof body !== 'object') {
      return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
    }
    const rawEmail = clip(body?.email, 320);
    if (!isEmail(rawEmail)) {
      return NextResponse.json({ error: 'A valid email address is required.' }, { status: 400 });
    }
    const rawName = clip(body?.fullName, 200) || 'Candidate';
    const headerName = rawName.replace(/["\r\n]/g, '');
    const headerTitle = clip(body?.jobTitle, 200).replace(/[\r\n]/g, '') || 'General Application';
    const cleaned = Object.fromEntries(Object.entries(body || {}).map(([key, value]) => [
      key,
      Array.isArray(value) ? value.slice(0, 30).map((item) => clip(item, 100)) : clip(value, key === 'coverNote' ? 5000 : 500),
    ]));
    if (cleaned.portfolioUrl) cleaned.portfolioUrl = safeUrl(cleaned.portfolioUrl);
    const data = escapeFields(cleaned);

    const {
      jobTitle = 'General Application',
      fullName = 'Candidate',
      email = '',
      phone = '',
      location = '',
      education = '',
      experienceYears = '',
      currentEmployment = '',
      tools = [],
      portfolioUrl = '',
      pastChannels = '',
      salaryExpectation = '',
      availability = 'Full-Time',
      coverNote = ''
    } = data;

    // Check if email transporter can be initialized
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      const mailOptions = {
        from: `"${headerName} (Job Applicant)" <${process.env.EMAIL_USER}>`,
        to: process.env.EMAIL_USER,
        replyTo: rawEmail,
        subject: `🚀 New Job Application: ${headerTitle} - ${headerName}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 680px; margin: 0 auto; padding: 25px; border: 1px solid #E2E8F0; border-radius: 14px; background-color: #FAFAFA;">
            <div style="background: linear-gradient(135deg, #1E40AF 0%, #3B82F6 100%); padding: 20px; border-radius: 10px; color: #FFFFFF; margin-bottom: 20px;">
              <h2 style="margin: 0; font-size: 20px;">The Editly Foundry Co. — Career Application</h2>
              <p style="margin: 6px 0 0 0; opacity: 0.9; font-size: 14px;">Position: <strong>${jobTitle}</strong> (${availability})</p>
            </div>

            <table style="width: 100%; border-collapse: collapse; background: #FFFFFF; border-radius: 8px; overflow: hidden; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
              <tr>
                <td style="padding: 12px 16px; border-bottom: 1px solid #F1F5F9; font-weight: bold; width: 35%; color: #475569;">Full Name</td>
                <td style="padding: 12px 16px; border-bottom: 1px solid #F1F5F9; color: #0F172A; font-weight: bold;">${fullName}</td>
              </tr>
              <tr>
                <td style="padding: 12px 16px; border-bottom: 1px solid #F1F5F9; font-weight: bold; color: #475569;">Email Address</td>
                <td style="padding: 12px 16px; border-bottom: 1px solid #F1F5F9; color: #5B2EFF;"><a href="mailto:${email}">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 12px 16px; border-bottom: 1px solid #F1F5F9; font-weight: bold; color: #475569;">Phone / WhatsApp</td>
                <td style="padding: 12px 16px; border-bottom: 1px solid #F1F5F9; color: #0F172A;">${phone || 'N/A'}</td>
              </tr>
              <tr>
                <td style="padding: 12px 16px; border-bottom: 1px solid #F1F5F9; font-weight: bold; color: #475569;">Location</td>
                <td style="padding: 12px 16px; border-bottom: 1px solid #F1F5F9; color: #0F172A;">${location || 'N/A'}</td>
              </tr>
              <tr>
                <td style="padding: 12px 16px; border-bottom: 1px solid #F1F5F9; font-weight: bold; color: #475569;">Education Background</td>
                <td style="padding: 12px 16px; border-bottom: 1px solid #F1F5F9; color: #0F172A;">${education || 'N/A'}</td>
              </tr>
              <tr>
                <td style="padding: 12px 16px; border-bottom: 1px solid #F1F5F9; font-weight: bold; color: #475569;">Years of Experience</td>
                <td style="padding: 12px 16px; border-bottom: 1px solid #F1F5F9; color: #0F172A;">${experienceYears || 'N/A'}</td>
              </tr>
              <tr>
                <td style="padding: 12px 16px; border-bottom: 1px solid #F1F5F9; font-weight: bold; color: #475569;">Current Status</td>
                <td style="padding: 12px 16px; border-bottom: 1px solid #F1F5F9; color: #0F172A;">${currentEmployment || 'N/A'}</td>
              </tr>
              <tr>
                <td style="padding: 12px 16px; border-bottom: 1px solid #F1F5F9; font-weight: bold; color: #475569;">Primary Tools & Software</td>
                <td style="padding: 12px 16px; border-bottom: 1px solid #F1F5F9; color: #0F172A;">${Array.isArray(tools) ? tools.join(', ') : tools}</td>
              </tr>
              <tr>
                <td style="padding: 12px 16px; border-bottom: 1px solid #F1F5F9; font-weight: bold; color: #475569;">Showreel / Portfolio</td>
                <td style="padding: 12px 16px; border-bottom: 1px solid #F1F5F9; color: #5B2EFF;">
                  <a href="${portfolioUrl}" target="_blank" style="background: #5B2EFF; color: #FFF; padding: 6px 12px; border-radius: 6px; text-decoration: none; display: inline-block; font-size: 13px; font-weight: bold;">
                    🔗 View Candidate Portfolio
                  </a>
                </td>
              </tr>
              <tr>
                <td style="padding: 12px 16px; border-bottom: 1px solid #F1F5F9; font-weight: bold; color: #475569;">Past Clients / Channels</td>
                <td style="padding: 12px 16px; border-bottom: 1px solid #F1F5F9; color: #0F172A;">${pastChannels || 'N/A'}</td>
              </tr>
              <tr>
                <td style="padding: 12px 16px; border-bottom: 1px solid #F1F5F9; font-weight: bold; color: #475569;">Salary / Rate Expectation</td>
                <td style="padding: 12px 16px; border-bottom: 1px solid #F1F5F9; color: #10B981; font-weight: bold;">${salaryExpectation || 'N/A'}</td>
              </tr>
              <tr>
                <td style="padding: 12px 16px; border-bottom: 1px solid #F1F5F9; font-weight: bold; color: #475569; vertical-align: top;">Cover Letter / Intro</td>
                <td style="padding: 12px 16px; border-bottom: 1px solid #F1F5F9; color: #334155; line-height: 1.6;">${coverNote || 'N/A'}</td>
              </tr>
            </table>

            <div style="margin-top: 20px; text-align: center; font-size: 12px; color: #94A3B8;">
              Sent automatically from The Editly Foundry Co. Careers Portal
            </div>
          </div>
        `,
      };

      await transporter.sendMail(mailOptions);
    } else {
      console.error("Career application could not be delivered: email is not configured.");
      return NextResponse.json({ error: 'Applications are temporarily unavailable.' }, { status: 503 });
    }

    return NextResponse.json({
      success: true,
      message: 'Application received successfully'
    });
  } catch (error) {
    console.error('Error submitting career application:', error);
    return NextResponse.json(
      { error: 'Failed to process application' },
      { status: 500 }
    );
  }
}
