import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const data = await request.json();

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
        from: `"${fullName} (Job Applicant)" <${email || process.env.EMAIL_USER}>`,
        to: process.env.EMAIL_USER || 'theeditlyfoundry@gmail.com',
        replyTo: email,
        subject: `🚀 New Job Application: ${jobTitle} - ${fullName}`,
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
                <td style="padding: 12px 16px; border-bottom: 1px solid #F1F5F9; color: #2563EB;"><a href="mailto:${email}">${email}</a></td>
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
                <td style="padding: 12px 16px; border-bottom: 1px solid #F1F5F9; color: #2563EB;">
                  <a href="${portfolioUrl}" target="_blank" style="background: #2563EB; color: #FFF; padding: 6px 12px; border-radius: 6px; text-decoration: none; display: inline-block; font-size: 13px; font-weight: bold;">
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
      console.log("Career application received (EMAIL_USER not configured in env):", data);
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
