import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const recipient = process.env.PAY_NOTES_TO;

export async function POST(request: Request) {
  if (!process.env.RESEND_API_KEY || !recipient) {
    return NextResponse.json(
      { error: 'Missing RESEND_API_KEY or PAY_NOTES_TO environment variables.' },
      { status: 500 },
    );
  }

  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Name, email, and message are required.' }, { status: 400 });
    }

    const emailBody = [
      `New payment note`,
      '',
      `Name: ${name}`,
      `Email: ${email}`,
      '',
      message,
    ].join('\n');

    await resend.emails.send({
      from: 'Tyler Payments <payments@tylertreadwell.dev>',
      to: recipient,
      replyTo: email,
      subject: `Payment note from ${name}`,
      text: emailBody,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Failed to send payment note', error);
    return NextResponse.json({ error: 'Unable to send note right now.' }, { status: 500 });
  }
}
