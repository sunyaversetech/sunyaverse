import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import { pageMetadata, pageGraph } from "@/lib/seo";

const PAGE = {
  path: "/privacy/",
  title: "Privacy Policy | Sunyaverse",
  description: "How Sunyaverse Pty Ltd collects, uses and protects personal information under the Privacy Act 1988 (Cth) and the Australian Privacy Principles.",
};
const CRUMBS = [
  ["Home", "/"],
  ["Privacy policy", "/privacy/"],
];

export const metadata = pageMetadata(PAGE);

export default function PrivacyPage() {
  return (
    <>
      <JsonLd data={pageGraph({ ...PAGE, crumbs: CRUMBS, extra: [] })} />
      <Breadcrumbs items={CRUMBS} />
      <section className="page-hero">
        <div className="wrap">
          <p className="eyebrow">Legal</p>
          <h1>Privacy policy</h1>
          <p className="note">Last updated 1 November 2026</p>
        </div>
      </section>
      <section>
        <div className="wrap prose lgl">
          <p>
            {"Sunyaverse Pty Ltd (ABN [to be added]) (\"Sunyaverse\", \"we\", \"us\") respects your privacy. This policy explains how we handle personal information in line with the "}
            <strong>Privacy Act 1988 (Cth)</strong>
            {" and the Australian Privacy Principles."}
          </p>
          <h2>What we collect</h2>
          <ul>
            <li>Contact details you give us: name, organisation, email address and phone number.</li>
            <li>Information in your enquiries, project briefs and job applications.</li>
            <li>Basic website usage data, such as pages visited and device type, if analytics are enabled.</li>
          </ul>
          <h2>How we use it</h2>
          <ul>
            <li>To reply to enquiries and deliver our services.</li>
            <li>To assess job applications.</li>
            <li>To send invoices and meet our legal and tax obligations.</li>
            <li>To improve our website and services.</li>
          </ul>
          <p>
            {"We do not sell your personal information. We send marketing only if you have agreed to receive it, and you can unsubscribe at any time."}
          </p>
          <h2>Who we share it with</h2>
          <p>
            {"Trusted service providers who help us run the business, such as email, hosting, accounting and payment providers, under confidentiality obligations. Some providers may store data outside Australia; where they do, we take reasonable steps to ensure it is protected."}
          </p>
          <h2>Client data in our systems</h2>
          <p>
            {"When we build or manage systems for clients, we handle their data only on their instructions and under the terms of our agreement with them."}
          </p>
          <h2>Security and retention</h2>
          <p>
            {"We use reasonable technical and organisational measures, including access controls and multi-factor authentication, to protect information. We keep it only as long as needed for the purposes above or as required by law."}
          </p>
          <h2>Access, correction and complaints</h2>
          <p>
            {"You can ask to access or correct your personal information, or make a complaint, by emailing "}
            <strong>privacy@sunyaverse.com.au</strong>
            {". We will respond within 30 days. If you are not satisfied, you can contact the Office of the Australian Information Commissioner (oaic.gov.au)."}
          </p>
        </div>
      </section>
    </>
  );
}
