import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { z } from "zod";

export const runtime = "nodejs";

const schema = z.object({
  name: z.string().trim().min(2).max(120),
  email: z.email().max(254),
  phone: z.string().trim().max(35).optional().default(""),
  subject: z.string().trim().min(2).max(160),
  message: z.string().trim().min(10).max(5000),
  website: z.string().optional().default(""),
});

function escapeHtml(value: string): string {
  const replacements: Record<string, string> = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  };
  return value.replace(/[&<>"']/g, (ch) => replacements[ch]);
}

type FormData = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

function buildRow(label: string, value: string, bgCol = "#f8fafc"): string {
  return `<tr>
    <td style="padding:10px 14px;background:${bgCol};border-bottom:1px solid #e2e8f0;font-weight:700;color:#071d33;width:130px;vertical-align:top;font-size:13px;">${label}</td>
    <td style="padding:10px 14px;border-bottom:1px solid #e2e8f0;color:#334155;font-size:13px;vertical-align:top;white-space:pre-wrap;">${escapeHtml(value).replace(/\r?\n/g, "<br>")}</td>
  </tr>`;
}

function buildInternalHtml(d: FormData, year: number): string {
  return `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"></head>
<body style="margin:0;padding:0;background:#f1f5f9;font-family:'Segoe UI',Arial,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#f1f5f9;padding:40px 16px;">
<tr><td align="center">
<table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 4px 20px rgba(7,29,51,.10);">
<tr><td style="background:#071d33;padding:28px 36px;">
  <p style="margin:0;font-size:11px;font-weight:700;letter-spacing:.18em;color:#70bfff;text-transform:uppercase;">Constellation Marine</p>
  <h1 style="margin:6px 0 0;font-size:22px;color:#fff;font-weight:800;">New Website Enquiry</h1>
</td></tr>
<tr><td style="padding:30px 36px 10px;">
  <p style="margin:0 0 20px;font-size:14px;color:#475569;">A new enquiry has been submitted via the CMCS website contact form.</p>
  <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e2e8f0;border-radius:8px;overflow:hidden;">
    ${buildRow("Name", d.name)}
    ${buildRow("Email", d.email)}
    ${buildRow("Phone", d.phone || "—")}
    ${buildRow("Subject", d.subject)}
    ${buildRow("Message", d.message)}
  </table>
</td></tr>
<tr><td style="padding:24px 36px;border-top:1px solid #f1f5f9;">
  <p style="margin:0;font-size:11px;color:#94a3b8;text-align:center;">&copy; ${year} Constellation Marine Consultant Services (Pvt) Ltd</p>
</td></tr>
</table>
</td></tr></table>
</body></html>`;
}

function buildAutoReplyHtml(d: FormData, year: number): string {
  return `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"></head>
<body style="margin:0;padding:0;background:#f1f5f9;font-family:'Segoe UI',Arial,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#f1f5f9;padding:40px 16px;">
<tr><td align="center">
<table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 4px 20px rgba(7,29,51,.10);">

<tr><td style="background:linear-gradient(135deg,#071d33 0%,#0a2d52 100%);padding:32px 36px;">
  <p style="margin:0;font-size:10px;font-weight:700;letter-spacing:.2em;color:#70bfff;text-transform:uppercase;">Constellation Marine</p>
  <h1 style="margin:8px 0 4px;font-size:22px;color:#fff;font-weight:800;">We have Received Your Enquiry</h1>
  <p style="margin:0;font-size:13px;color:#cbd5e1;">Independent Marine Consultancy &amp; Surveying Services</p>
</td></tr>

<tr><td style="padding:32px 36px 20px;">
  <p style="margin:0 0 14px;font-size:15px;font-weight:700;color:#071d33;">Dear ${escapeHtml(d.name)},</p>
  <p style="margin:0 0 14px;font-size:14px;color:#475569;line-height:1.7;">
    Thank you for contacting <strong>Constellation Marine Consultant Services (Pvt) Ltd</strong>.
    We have received your enquiry and our duty marine surveyor will review it promptly.
  </p>
  <p style="margin:0;font-size:14px;color:#475569;line-height:1.7;">
    For urgent matters, please call us at
    <a href="tel:+94775894486" style="color:#0284c7;text-decoration:none;font-weight:600;">+94 77 589 4486</a>
    or <a href="tel:+94759894486" style="color:#0284c7;text-decoration:none;font-weight:600;">+94 75 989 4486</a>.
  </p>
</td></tr>

<tr><td style="padding:0 36px 28px;">
  <p style="margin:0 0 12px;font-size:12px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:#0284c7;">Your Submitted Details</p>
  <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e2e8f0;border-radius:8px;overflow:hidden;">
    ${buildRow("Name", d.name)}
    ${buildRow("Email", d.email)}
    ${buildRow("Phone", d.phone || "—")}
    ${buildRow("Subject", d.subject)}
    ${buildRow("Message", d.message)}
  </table>
</td></tr>

<tr><td style="padding:0 36px;"><hr style="border:none;border-top:1px solid #e2e8f0;margin:0;"></td></tr>

<tr><td style="padding:24px 36px;">
  <p style="margin:0 0 8px;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.14em;color:#0284c7;">Contact Us Directly</p>
  <p style="margin:0;font-size:13px;color:#475569;line-height:2.1;">
    &#128231; <a href="mailto:info@consmarine.com" style="color:#0284c7;text-decoration:none;">info@consmarine.com</a><br>
    &#128222; <a href="tel:+94775894486" style="color:#0284c7;text-decoration:none;">+94 77 589 4486</a> &nbsp;/&nbsp; <a href="tel:+94759894486" style="color:#0284c7;text-decoration:none;">+94 75 989 4486</a><br>
    &#128205; No. 1/2, Marina Drive, Colombo 15, Sri Lanka
  </p>
</td></tr>

<tr><td style="background:#071d33;padding:18px 36px;">
  <p style="margin:0;font-size:11px;color:#94a3b8;text-align:center;">
    &copy; ${year} Constellation Marine Consultant Services (Pvt) Ltd &nbsp;&middot;&nbsp; Colombo, Sri Lanka &nbsp;&middot;&nbsp;
    <a href="https://consmarinems.com" style="color:#70bfff;text-decoration:none;">consmarinems.com</a>
  </p>
  <p style="margin:8px 0 0;font-size:10px;color:#64748b;text-align:center;">This is an automated confirmation. Please do not reply to this email.</p>
</td></tr>

</table>
</td></tr></table>
</body></html>`;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = schema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: "Please check the form fields and try again." },
        { status: 400 },
      );
    }

    const data = result.data;

    if (data.website) {
      return NextResponse.json({ error: "Unable to process request." }, { status: 400 });
    }

    const host = process.env.SMTP_HOST;
    const user = process.env.SMTP_USER;
    const password = process.env.SMTP_PASSWORD;
    const from = process.env.SMTP_FROM || user;
    const to = process.env.CONTACT_TO || "info@consmarine.com";

    if (!host || !user || !password) {
      return NextResponse.json(
        { error: "The enquiry form is not yet configured. Please email info@consmarine.com directly." },
        { status: 503 },
      );
    }

    const port = Number(process.env.SMTP_PORT || 587);
    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: process.env.SMTP_SECURE === "true",
      auth: { user, pass: password },
    });

    const fd: FormData = {
      name: data.name,
      email: data.email,
      phone: data.phone,
      subject: data.subject,
      message: data.message,
    };

    const year = new Date().getFullYear();
    const safeSubject = data.subject.replace(/[\r\n]/g, " ");
    const plainText = [
      `Name:    ${data.name}`,
      `Email:   ${data.email}`,
      `Phone:   ${data.phone || "—"}`,
      `Subject: ${data.subject}`,
      `Message:\n${data.message}`,
    ].join("\n\n");

    // 1️⃣ Internal notification → CMCS team
    await transporter.sendMail({
      from: `"CMCS Website" <${from}>`,
      to,
      replyTo: data.email,
      subject: `CMCS Website Enquiry: ${safeSubject}`,
      text: plainText,
      html: buildInternalHtml(fd, year),
    });

    // 2️⃣ Auto-reply confirmation → Enquirer's email
    await transporter.sendMail({
      from: `"Constellation Marine" <${from}>`,
      to: data.email,
      subject: `Enquiry Received – ${safeSubject}`,
      text: [
        `Dear ${data.name},`,
        "",
        "Thank you for contacting Constellation Marine Consultant Services (Pvt) Ltd.",
        "We have received your enquiry and will respond promptly.",
        "",
        "— Your Submitted Details —",
        plainText,
        "",
        "For urgent matters: +94 77 589 4486 / +94 75 989 4486",
        "Email: info@consmarine.com",
        "",
        `© ${year} Constellation Marine Consultant Services (Pvt) Ltd`,
      ].join("\n"),
      html: buildAutoReplyHtml(fd, year),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact email failed:", error instanceof Error ? error.message : "Unknown error");
    return NextResponse.json(
      { error: "Message could not be sent. Please contact us by phone or email." },
      { status: 500 },
    );
  }
}
