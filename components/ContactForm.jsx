"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { CONTACT, TOPICS } from "@/lib/site";

const TOPIC_OPTIONS = [...Object.values(TOPICS), "Careers", "Something else"];
const BUDGETS = ["Not sure yet", "Under $5,000", "$5,000 – $20,000", "$20,000 – $50,000", "$50,000+"];
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ContactForm() {
  const formRef = useRef(null);
  const [error, setError] = useState("");
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState(false);

  // Pre-fill from links such as /contact/?topic=cloud or /contact/?role=Internship
  useEffect(() => {
    const f = formRef.current;
    if (!f) return;
    const q = new URLSearchParams(window.location.search);
    const topic = q.get("topic");
    const role = q.get("role");
    if (topic && TOPICS[topic]) f.elements.topic.value = TOPICS[topic];
    if (role) {
      f.elements.topic.value = "Careers";
      f.elements.message.value = `I would like to apply for the ${role} role. A little about me: `;
    }
  }, []);

  async function onSubmit(e) {
    e.preventDefault();
    const f = e.currentTarget;
    const data = Object.fromEntries(new FormData(f).entries());
    const missing = [];
    if (!String(data.name || "").trim()) missing.push("your name");
    if (!EMAIL_RE.test(String(data.email || "").trim())) missing.push("a valid email address");
    if (String(data.message || "").trim().length < 10) missing.push("a few lines about what you need");
    if (missing.length) {
      setError(`Please add ${missing.join(", ")}.`);
      return;
    }
    setError("");
    setSending(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error(String(res.status));
      f.reset();
      setDone(true);
    } catch {
      const to = data.topic === "Careers" ? CONTACT.careersEmail : CONTACT.email;
      setError(`Your enquiry could not be sent. Please email ${to} or call ${CONTACT.phone} instead.`);
    } finally {
      setSending(false);
    }
  }

  return (
    <div>
      <form ref={formRef} id="enq" name="contact" noValidate onSubmit={onSubmit} hidden={done}>
        <p hidden>
          <label htmlFor="bot-field">Leave this empty</label>
          <input id="bot-field" name="bot-field" tabIndex={-1} autoComplete="off" />
        </p>
        <div className="fr">
          <div className="fld">
            <label htmlFor="f-name">Name</label>
            <input autoComplete="name" id="f-name" name="name" required />
          </div>
          <div className="fld">
            <label htmlFor="f-org">Organisation</label>
            <input autoComplete="organization" id="f-org" name="org" />
          </div>
        </div>
        <div className="fr">
          <div className="fld">
            <label htmlFor="f-email">Email</label>
            <input autoComplete="email" id="f-email" name="email" required type="email" />
          </div>
          <div className="fld">
            <label htmlFor="f-phone">Phone</label>
            <input autoComplete="tel" id="f-phone" name="phone" type="tel" />
          </div>
        </div>
        <div className="fr">
          <div className="fld">
            <label htmlFor="f-topic">I need help with</label>
            <select id="f-topic" name="topic" defaultValue={TOPIC_OPTIONS[0]}>
              {TOPIC_OPTIONS.map((t) => (
                <option key={t}>{t}</option>
              ))}
            </select>
          </div>
          <div className="fld">
            <label htmlFor="f-budget">Budget (approx.)</label>
            <select id="f-budget" name="budget" defaultValue={BUDGETS[0]}>
              {BUDGETS.map((b) => (
                <option key={b}>{b}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="fld">
          <label htmlFor="f-msg">What are you trying to do?</label>
          <textarea
            id="f-msg"
            name="message"
            placeholder="A few lines about your business and the problem you want to solve."
            required
          />
        </div>
        <p className="err" id="f-err" role="alert" hidden={!error}>
          {error}
        </p>
        <div className="row">
          <button className="btn btn-p" type="submit" disabled={sending}>
            {sending ? "Sending…" : "Send enquiry"}
          </button>
          <span className="note">
            We use your details only to reply. See our <Link href="/privacy/">privacy policy</Link>.
          </span>
        </div>
      </form>
      <div className="done" id="f-done" hidden={!done}>
        <p className="eyebrow">Sent</p>
        <h3 id="f-done-title">Thanks, your enquiry is on its way</h3>
        <p className="note" id="f-done-text">
          We reply within one business day. If it is urgent, email {CONTACT.email} or call {CONTACT.phone}.
        </p>
        <button className="btn btn-s" id="f-again" type="button" onClick={() => setDone(false)}>
          Send another enquiry
        </button>
      </div>
    </div>
  );
}
