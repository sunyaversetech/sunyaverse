import { NextResponse } from "next/server";
import { CONTACT } from "@/lib/site";

/* Contact form handler. Sends each enquiry by email through Resend (https://resend.com, free tier).
   1. The enquiry goes to our inbox (CONTACT_TO_EMAIL, or CAREERS_TO_EMAIL for careers).
   2. A "thanks, we got your message" confirmation goes to the person who filled in the form.
   Set RESEND_API_KEY in your environment. The domain in CONTACT_FROM_EMAIL must be verified in Resend,
   otherwise Resend will only deliver to your own account address. */

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const esc = (s) =>
  String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);

async function sendEmail(key, payload) {
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (!res.ok) {
    console.error("[contact] Resend error", res.status, await res.text().catch(() => ""));
  }
  return res.ok;
}

function confirmationEmail({ name, message, replyTo }) {
  const firstName = name.split(/\s+/)[0];
  const text = [
    `Hi ${firstName},`,
    "",
    "Thank you for getting in touch with Sunyaverse. We have received your message and will contact you as soon as possible, usually within one business day.",
    "",
    "For reference, here is what you sent us:",
    "",
    message,
    "",
    `If it is urgent, reply to this email or call us on ${CONTACT.phone}.`,
    "",
    "Kind regards,",
    "The Sunyaverse team",
  ].join("\n");

  const html = `<!doctype html>
<html><body style="margin:0;padding:24px;background:#f5f5f7;font-family:Arial,Helvetica,sans-serif;color:#1a1a1a">
  <div style="max-width:560px;margin:0 auto;background:#ffffff;border-radius:8px;padding:32px">
    <p style="margin:0 0 16px">Hi ${esc(firstName)},</p>
    <p style="margin:0 0 16px;line-height:1.5">Thank you for getting in touch with Sunyaverse. We have received your message and will contact you as soon as possible, usually within one business day.</p>
    <p style="margin:0 0 8px;color:#555">For reference, here is what you sent us:</p>
    <blockquote style="margin:0 0 16px;padding:12px 16px;background:#f5f5f7;border-left:3px solid #999;white-space:pre-wrap;line-height:1.5">${esc(message)}</blockquote>
    <p style="margin:0 0 16px;line-height:1.5">If it is urgent, reply to this email or call us on <a href="${CONTACT.phoneHref}">${esc(CONTACT.phone)}</a>.</p>
    <p style="margin:0">Kind regards,<br>The Sunyaverse team</p>
  </div>
</body></html>`;

  return { subject: "Thanks, we received your message", text, html, reply_to: replyTo };
}

export async function POST(request) {
  let data;
  try {
    data = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request" }, { status: 400 });
  }
  const field = (k, max = 200) => String(data?.[k] ?? "").trim().slice(0, max);

  // Honeypot: real people never fill this in.
  if (field("bot-field")) return NextResponse.json({ ok: true });

  const name = field("name");
  const email = field("email");
  const org = field("org");
  const phone = field("phone", 40);
  const topic = field("topic");
  const budget = field("budget");
  const message = field("message", 5000);

  if (!name || !EMAIL_RE.test(email) || message.length < 10) {
    return NextResponse.json({ ok: false, error: "Please add your name, a valid email and a short message." }, { status: 422 });
  }

  const careers = topic === "Careers";
  const to = careers
    ? process.env.CAREERS_TO_EMAIL || CONTACT.careersEmail
    : process.env.CONTACT_TO_EMAIL || CONTACT.email;
  const from = process.env.CONTACT_FROM_EMAIL || "Sunyaverse website <website@sunyaverse.com.au>";
  const key = process.env.RESEND_API_KEY;

  if (!key) {
    console.warn("[contact] RESEND_API_KEY is not set; enquiry not sent:", { name, email, topic });
    return NextResponse.json({ ok: false, error: "Email is not configured" }, { status: 503 });
  }

  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Organisation: ${org || "-"}`,
    `Phone: ${phone || "-"}`,
    `Topic: ${topic || "-"}`,
    `Budget: ${budget || "-"}`,
    "",
    message,
  ].join("\n");

  // 1. Enquiry to our inbox. Replying to it goes straight to the person who wrote in.
  const sent = await sendEmail(key, {
    from,
    to: [to],
    reply_to: email,
    subject: `${careers ? "Job application" : "New enquiry"}: ${name}${org ? ` (${org})` : ""}`,
    text,
  });
  if (!sent) return NextResponse.json({ ok: false, error: "Could not send" }, { status: 502 });

  // 2. Confirmation to the sender. If this one fails we still report success,
  //    because the enquiry itself reached us.
  await sendEmail(key, { from, to: [email], ...confirmationEmail({ name, message, replyTo: to }) });

  return NextResponse.json({ ok: true });
}
