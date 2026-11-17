import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import CopyButton from "@/components/CopyButton";
import ContactForm from "@/components/ContactForm";
import CalBooking from "@/components/CalBooking";
import { pageMetadata, pageGraph } from "@/lib/seo";
import { SITE_URL, CONTACT } from "@/lib/site";
import { CONTACT_FAQS } from "@/lib/contact-faqs";

const PAGE = {
  path: "/contact/",
  title: "Contact Sunyaverse | Free IT Consultation, Canberra",
  description:
    "Book a free consultation with Sunyaverse, Canberra's technology consulting studio. Tell us what you need and we reply within one business day.",
};
const CRUMBS = [
  ["Home", "/"],
  ["Contact", "/contact/"],
];

export const metadata = pageMetadata(PAGE);

export default function ContactPage() {
  const graph = pageGraph({
    ...PAGE,
    crumbs: CRUMBS,
    extra: [
      { "@type": "ContactPage", url: `${SITE_URL}/contact/` },
      {
        "@type": "FAQPage",
        mainEntity: CONTACT_FAQS.map(([q, a]) => ({
          "@type": "Question",
          name: q,
          acceptedAnswer: { "@type": "Answer", text: a },
        })),
      },
    ],
  });

  return (
    <>
      <JsonLd data={graph} />
      <Breadcrumbs items={CRUMBS} />
      <section className="page-hero">
        <div className="wrap">
          <p className="eyebrow">Contact</p>
          <h1>Let's start at zero</h1>
          <p className="lead">
            Tell us what you are trying to do. We reply within one business day, and the first consultation is free.
          </p>
          <div className="row">
            <a className="btn btn-p" href="#book">Book a free consultation</a>
            <a className="btn btn-s" href="#enquiry">Send an enquiry</a>
          </div>
        </div>
      </section>

      <section id="book" className="band">
        <div className="wrap book">
          <div className="sec-head">
            <p className="eyebrow">Free consultation</p>
            <h2>Book a 45-minute call</h2>
            <p className="lead">
              Pick a time that suits you. We meet in person in Canberra or by video, to understand your problem and give
              you an honest view of the options. No obligation.
            </p>
          </div>
          <CalBooking />
        </div>
      </section>

      <section id="enquiry">
        <div className="wrap contact">
          <div className="cinfo">
            <div className="cline">
              <span className="eyebrow">Email</span>
              <span className="val">
                <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
              </span>
              <CopyButton text={CONTACT.email} />
            </div>
            <div className="cline">
              <span className="eyebrow">Phone</span>
              <span className="val">
                <a href={CONTACT.phoneHref}>{CONTACT.phone}</a>
              </span>
              <CopyButton text={CONTACT.phone} />
            </div>
            <div className="cline">
              <span className="eyebrow">Studio</span>
              <span className="val">Canberra, ACT · visits by appointment</span>
            </div>
            <div className="cline">
              <span className="eyebrow">Hours</span>
              <span className="val">Monday to Friday, 9am to 5pm AEST</span>
            </div>
            <div className="cline">
              <span className="eyebrow">IT support</span>
              <span className="val">
                <a href={`mailto:${CONTACT.supportEmail}`}>{CONTACT.supportEmail}</a>
              </span>
              <CopyButton text={CONTACT.supportEmail} />
            </div>
            <div className="cline">
              <span className="eyebrow">Careers</span>
              <span className="val">
                <a href={`mailto:${CONTACT.careersEmail}`}>{CONTACT.careersEmail}</a>
              </span>
              <CopyButton text={CONTACT.careersEmail} />
            </div>
          </div>
          <ContactForm />
        </div>
      </section>

      <section className="band">
        <div className="wrap">
          <div className="sec-head">
            <p className="eyebrow">Common questions</p>
            <h2>Before you get in touch</h2>
          </div>
          <div className="faq">
            {CONTACT_FAQS.map(([q, a]) => (
              <details key={q}>
                <summary>{q}</summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
