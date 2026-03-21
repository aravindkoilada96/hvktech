import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

function hasSmtpConfig() {
  return Boolean(
    process.env.SMTP_HOST &&
      process.env.SMTP_PORT &&
      process.env.SMTP_USER &&
      process.env.SMTP_PASS &&
      process.env.CONTACT_TO_EMAIL,
  );
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as {
      name?: string;
      email?: string;
      message?: string;
    };

    const name = body.name?.trim();
    const email = body.email?.trim();
    const message = body.message?.trim();

    if (!name || !email || !message) {
      return NextResponse.json({ message: "All fields are required." }, { status: 400 });
    }

    if (!hasSmtpConfig()) {
      return NextResponse.json(
        {
          message:
            "Email service is not configured. Set SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, and CONTACT_TO_EMAIL.",
        },
        { status: 500 },
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.SMTP_FROM_EMAIL || process.env.SMTP_USER,
      to: process.env.CONTACT_TO_EMAIL,
      replyTo: email,
      subject: `New contact form submission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong><br/>${message.replace(/\n/g, "<br/>")}</p>`,
    });

    return NextResponse.json({ message: "Message sent." }, { status: 200 });
  } catch {
    return NextResponse.json({ message: "Unable to send message at the moment." }, { status: 500 });
  }
}
