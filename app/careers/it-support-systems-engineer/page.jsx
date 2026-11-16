import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import { pageMetadata, pageGraph } from "@/lib/seo";
import { SITE_URL } from "@/lib/site";

const PAGE = {
  path: "/careers/it-support-systems-engineer/",
  title: "IT Support & Systems Engineer Job, Canberra | Sunyaverse",
  description: "IT Support & Systems Engineer (full-time) at Sunyaverse, Canberra. Keep client systems running and secure, on-site across Canberra and remotely.",
};
const CRUMBS = [
  ["Home", "/"],
  ["Careers", "/careers/"],
  ["IT Support & Systems Engineer", "/careers/it-support-systems-engineer/"],
];

export const metadata = pageMetadata(PAGE);

export default function JobPage() {
  return (
    <>
      <JsonLd data={pageGraph({ ...PAGE, crumbs: CRUMBS, extra: [
        {
          "@type": "JobPosting",
          "title": "IT Support & Systems Engineer",
          "description": "<p>Keep client systems running and secure, on-site across Canberra and remotely.</p><h3>What you'll do</h3><ul><li>Resolve helpdesk requests for client teams</li><li>Set up Microsoft 365, devices and networks</li><li>Apply patches and Essential Eight controls</li><li>Document environments clearly</li></ul><h3>What you'll bring</h3><ul><li>Experience in IT support or a related qualification</li><li>Microsoft 365 and Windows administration</li><li>A driver licence for site visits</li><li>Patience and a calm, helpful manner</li></ul>",
          "datePosted": "2026-11-05",
          "validThrough": "2027-02-05T23:59:59+11:00",
          "employmentType": "FULL_TIME",
          "hiringOrganization": {
            "@type": "Organization",
            "name": "Sunyaverse Pty Ltd",
            "sameAs": `${SITE_URL}/`,
            "logo": `${SITE_URL}/assets/logo-512.png`
          },
          "jobLocation": {
            "@type": "Place",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Canberra",
              "addressRegion": "ACT",
              "addressCountry": "AU"
            }
          },
          "applicantLocationRequirements": {
            "@type": "Country",
            "name": "Australia"
          },
          "directApply": true,
          "url": `${SITE_URL}/careers/it-support-systems-engineer/`
        }
      ] })} />
      <Breadcrumbs items={CRUMBS} />
      <section className="page-hero">
        <div className="wrap">
          <p className="eyebrow">Careers · Canberra · Full-time · Level 1–2</p>
          <h1>{"IT Support & Systems Engineer"}</h1>
          <p className="lead">Keep client systems running and secure, on-site across Canberra and remotely.</p>
          <div className="row">
            <Link className="btn btn-p" href="/contact/?role=IT+Support+and+Systems+Engineer">Apply for this role</Link>
            <Link className="btn btn-s" href="/careers/#roles">All roles</Link>
          </div>
        </div>
      </section>
      <section>
        <div className="wrap">
          <div className="article prose">
            <p>Keep client systems running and secure, on-site across Canberra and remotely.</p>
            <h3>What you'll do</h3>
            <ul>
              <li>Resolve helpdesk requests for client teams</li>
              <li>Set up Microsoft 365, devices and networks</li>
              <li>Apply patches and Essential Eight controls</li>
              <li>Document environments clearly</li>
            </ul>
            <h3>What you'll bring</h3>
            <ul>
              <li>Experience in IT support or a related qualification</li>
              <li>Microsoft 365 and Windows administration</li>
              <li>A driver licence for site visits</li>
              <li>Patience and a calm, helpful manner</li>
            </ul>
            <h3>How to apply</h3>
            <p>
              {"Use the apply button, or email your CV and a short note to "}
              <strong>careers@sunyaverse.com.au</strong>
              {" with the role title in the subject line. Australian work rights required. We reply to every applicant."}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
