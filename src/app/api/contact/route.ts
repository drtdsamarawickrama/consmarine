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

  return value.replace(/[&<>"']/g, (character) => replacements[character]);
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

    // Honeypot field: reject obvious automated submissions.
    if (data.website) {
      return NextResponse.json(
        { error: "Unable to process request." },
        { status: 400 },
      );
    }

    const host = process.env.SMTP_HOST;
    const user = process.env.SMTP_USER;
    const password = process.env.SMTP_PASSWORD;
    const from = process.env.SMTP_FROM || user;
    const to = process.env.CONTACT_TO || "info@consmarine.com";

    if (!host || !user || !password) {
      return NextResponse.json(
        {
          error:
            "The enquiry form is not yet configured. Please email info@consmarine.com directly.",
        },
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

    const fields = [
      ["Name", data.name],
      ["Email", data.email],
      ["Phone", data.phone],
      ["Subject", data.subject],
      ["Message", data.message],
    ] as const;

    const text = fields
      .map(([label, value]) => `${label}: ${value}`)
      .join("\n\n");

    const html = `
      <h2>New Website Enquiry</h2>
      ${fields
        .map(
          ([label, value]) =>
            `<p><strong>${label}:</strong> ${escapeHtml(value).replace(/\r?\n/g, "<br />")}</p>`,
        )
        .join("")}
    `;

    await transporter.sendMail({
      from,
      to,
      replyTo: data.email,
      subject: `CMCS Website Enquiry: ${data.subject.replace(/[\r\n]/g, " ")}`,
      text,
      html,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(
      "Contact email failed:",
      error instanceof Error ? error.message : "Unknown error",
    );

    return NextResponse.json(
      {
        error:
          "Message could not be sent. Please contact us by phone or email.",
      },
      { status: 500 },
    );
  }
}
