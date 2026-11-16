import Link from "next/link";
import BookButton from "@/components/BookButton";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import { pageMetadata, pageGraph } from "@/lib/seo";
import { SITE_URL } from "@/lib/site";

const PAGE = {
  path: "/services/",
  title: "IT Services in Canberra: Software, Cloud, Data | Sunyaverse",
  description: "Software and app development, cloud and IT infrastructure, data analytics, marketing technology, IT strategy and managed IT for Canberra organisations.",
};
const CRUMBS = [
  ["Home", "/"],
  ["Services", "/services/"],
];

export const metadata = pageMetadata(PAGE);

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={pageGraph({ ...PAGE, crumbs: CRUMBS, extra: [
        {
          "@type": "ItemList",
          "name": "Sunyaverse services",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "url": `${SITE_URL}/services/software-development-canberra/`,
              "name": "Software & app development"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "url": `${SITE_URL}/services/cloud-it-infrastructure-canberra/`,
              "name": "Cloud & IT infrastructure"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "url": `${SITE_URL}/services/data-analytics-asset-management/`,
              "name": "Data & asset analytics"
            },
            {
              "@type": "ListItem",
              "position": 4,
              "url": `${SITE_URL}/services/digital-marketing-technology/`,
              "name": "Digital marketing technology"
            },
            {
              "@type": "ListItem",
              "position": 5,
              "url": `${SITE_URL}/services/it-strategy-consulting-canberra/`,
              "name": "IT strategy & consulting"
            },
            {
              "@type": "ListItem",
              "position": 6,
              "url": `${SITE_URL}/services/managed-it-cyber-security-canberra/`,
              "name": "Managed IT & cyber security"
            }
          ]
        }
      ] })} />
      <Breadcrumbs items={CRUMBS} />
      <section className="page-hero">
        <div className="wrap">
          <p className="eyebrow">Services</p>
          <h1>Technology, built properly</h1>
          <p className="lead">Strategy, software, cloud, data and support. Pick one service or let us run the whole system for you.</p>
        </div>
      </section>
      <section>
        <div className="wrap" id="serviceDetail" style={{ display: "grid", gap: "var(--s16)" }}>
          <div className="split" id="software" style={{ alignItems: "start" }}>
            <div style={{ display: "grid", gap: "var(--s4)" }}>
              <div className="ico">
                <svg aria-hidden="true" viewBox="0 0 24 24">
                  <polyline points="8 6 3 12 8 18"></polyline>
                  <polyline points="16 6 21 12 16 18"></polyline>
                </svg>
              </div>
              <Link href="/services/software-development-canberra/" style={{ color: "inherit" }}>
                <h2>{"Software & app development"}</h2>
              </Link>
              <p className="lead">Custom web apps, mobile apps and business systems designed around the way you work.</p>
              <Link className="link" href="/services/software-development-canberra/">{"More about software & app development →"}</Link>
            </div>
            <div className="card">
              <p className="eyebrow">What’s included</p>
              <ul style={{ margin: "0", paddingLeft: "20px", display: "grid", gap: "10px", color: "var(--ivory)" }}>
                <li>Web applications and customer portals</li>
                <li>iOS and Android apps (React Native)</li>
                <li>Booking, ordering and payment systems</li>
                <li>Integrations between the tools you already use</li>
                <li>Websites that are fast, accessible and easy to update</li>
              </ul>
              <div className="tags">
                <span className="tag">Web</span>
                <span className="tag">Mobile</span>
                <span className="tag">Integrations</span>
              </div>
            </div>
          </div>
          <div style={{ height: "1px", background: "var(--graphite)" }}></div>
          <div className="split" id="cloud" style={{ alignItems: "start" }}>
            <div style={{ display: "grid", gap: "var(--s4)" }}>
              <div className="ico">
                <svg aria-hidden="true" viewBox="0 0 24 24">
                  <path d="M7 18h10a4 4 0 0 0 .5-7.97A6 6 0 0 0 6 9.5 4.25 4.25 0 0 0 7 18z"></path>
                </svg>
              </div>
              <Link href="/services/cloud-it-infrastructure-canberra/" style={{ color: "inherit" }}>
                <h2>{"Cloud & IT infrastructure"}</h2>
              </Link>
              <p className="lead">Microsoft 365, Google Workspace, Azure and AWS set up securely and sized to your business.</p>
              <Link className="link" href="/services/cloud-it-infrastructure-canberra/">{"More about cloud & IT infrastructure →"}</Link>
            </div>
            <div className="card">
              <p className="eyebrow">What’s included</p>
              <ul style={{ margin: "0", paddingLeft: "20px", display: "grid", gap: "10px", color: "var(--ivory)" }}>
                <li>Microsoft 365 and Google Workspace setup and migration</li>
                <li>Azure and AWS hosting in Australian regions</li>
                <li>Networks, Wi-Fi and office fit-out technology</li>
                <li>Backup and disaster recovery</li>
                <li>Device setup and management for new staff</li>
              </ul>
              <div className="tags">
                <span className="tag">Microsoft 365</span>
                <span className="tag">Azure</span>
                <span className="tag">AWS</span>
              </div>
            </div>
          </div>
          <div style={{ height: "1px", background: "var(--graphite)" }}></div>
          <div className="split" id="data" style={{ alignItems: "start" }}>
            <div style={{ display: "grid", gap: "var(--s4)" }}>
              <div className="ico">
                <svg aria-hidden="true" viewBox="0 0 24 24">
                  <line x1="4" x2="20" y1="20" y2="20"></line>
                  <rect height="7" width="3" x="6" y="11"></rect>
                  <rect height="11" width="3" x="11" y="7"></rect>
                  <rect height="5" width="3" x="16" y="13"></rect>
                </svg>
              </div>
              <Link href="/services/data-analytics-asset-management/" style={{ color: "inherit" }}>
                <h2>{"Data & asset analytics"}</h2>
              </Link>
              <p className="lead">Turn spreadsheets into dashboards and decisions, with clean data you can trust.</p>
              <Link className="link" href="/services/data-analytics-asset-management/">{"More about data & asset analytics →"}</Link>
            </div>
            <div className="card">
              <p className="eyebrow">What’s included</p>
              <ul style={{ margin: "0", paddingLeft: "20px", display: "grid", gap: "10px", color: "var(--ivory)" }}>
                <li>Asset registers and maintenance planning</li>
                <li>Power BI and Looker Studio dashboards</li>
                <li>Data cleaning, migration and reporting</li>
                <li>Process automation to remove manual entry</li>
              </ul>
              <div className="tags">
                <span className="tag">Power BI</span>
                <span className="tag">Asset management</span>
                <span className="tag">Automation</span>
              </div>
            </div>
          </div>
          <div style={{ height: "1px", background: "var(--graphite)" }}></div>
          <div className="split" id="marketing" style={{ alignItems: "start" }}>
            <div style={{ display: "grid", gap: "var(--s4)" }}>
              <div className="ico">
                <svg aria-hidden="true" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="2"></circle>
                  <path d="M7.5 7.5a6.4 6.4 0 0 0 0 9M16.5 7.5a6.4 6.4 0 0 1 0 9M4.6 4.6a10.5 10.5 0 0 0 0 14.8M19.4 4.6a10.5 10.5 0 0 1 0 14.8"></path>
                </svg>
              </div>
              <Link href="/services/digital-marketing-technology/" style={{ color: "inherit" }}>
                <h2>Digital marketing technology</h2>
              </Link>
              <p className="lead">The systems behind your marketing: websites, CRM, email and analytics that work together.</p>
              <Link className="link" href="/services/digital-marketing-technology/">More about digital marketing technology →</Link>
            </div>
            <div className="card">
              <p className="eyebrow">What’s included</p>
              <ul style={{ margin: "0", paddingLeft: "20px", display: "grid", gap: "10px", color: "var(--ivory)" }}>
                <li>CRM setup and customer databases</li>
                <li>Email marketing and automation</li>
                <li>Analytics and conversion tracking</li>
                <li>Social content workflows and scheduling</li>
                <li>Search engine visibility (SEO) foundations</li>
              </ul>
              <div className="tags">
                <span className="tag">CRM</span>
                <span className="tag">Email</span>
                <span className="tag">Analytics</span>
              </div>
            </div>
          </div>
          <div style={{ height: "1px", background: "var(--graphite)" }}></div>
          <div className="split" id="strategy" style={{ alignItems: "start" }}>
            <div style={{ display: "grid", gap: "var(--s4)" }}>
              <div className="ico">
                <svg aria-hidden="true" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="9"></circle>
                  <polygon points="15.5 8.5 13.5 13.5 8.5 15.5 10.5 10.5"></polygon>
                </svg>
              </div>
              <Link href="/services/it-strategy-consulting-canberra/" style={{ color: "inherit" }}>
                <h2>{"IT strategy & consulting"}</h2>
              </Link>
              <p className="lead">Independent advice on what to buy, build or retire, with a roadmap and budget you can act on.</p>
              <Link className="link" href="/services/it-strategy-consulting-canberra/">{"More about IT strategy & consulting →"}</Link>
            </div>
            <div className="card">
              <p className="eyebrow">What’s included</p>
              <ul style={{ margin: "0", paddingLeft: "20px", display: "grid", gap: "10px", color: "var(--ivory)" }}>
                <li>Technology reviews and roadmaps</li>
                <li>Software selection and vendor quote reviews</li>
                <li>Digital transformation planning</li>
                <li>Project and technical leadership</li>
              </ul>
              <div className="tags">
                <span className="tag">Roadmaps</span>
                <span className="tag">Vendor review</span>
              </div>
            </div>
          </div>
          <div style={{ height: "1px", background: "var(--graphite)" }}></div>
          <div className="split" id="managed" style={{ alignItems: "start" }}>
            <div style={{ display: "grid", gap: "var(--s4)" }}>
              <div className="ico">
                <svg aria-hidden="true" viewBox="0 0 24 24">
                  <path d="M12 3l8 3v6c0 4.5-3.4 8.2-8 9-4.6-.8-8-4.5-8-9V6z"></path>
                  <polyline points="9 12 11 14 15 10"></polyline>
                </svg>
              </div>
              <Link href="/services/managed-it-cyber-security-canberra/" style={{ color: "inherit" }}>
                <h2>{"Managed IT & cyber security"}</h2>
              </Link>
              <p className="lead">We look after your systems day to day and keep them secure against the Essential Eight.</p>
              <Link className="link" href="/services/managed-it-cyber-security-canberra/">{"More about managed IT & cyber security →"}</Link>
            </div>
            <div className="card">
              <p className="eyebrow">What’s included</p>
              <ul style={{ margin: "0", paddingLeft: "20px", display: "grid", gap: "10px", color: "var(--ivory)" }}>
                <li>Helpdesk support for your team</li>
                <li>Patching, monitoring and updates</li>
                <li>Essential Eight security uplift</li>
                <li>Multi-factor authentication and access control</li>
                <li>Staff security awareness training</li>
              </ul>
              <div className="tags">
                <span className="tag">Support</span>
                <span className="tag">Security</span>
                <span className="tag">Essential Eight</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="band">
        <div className="wrap">
          <div className="sec-head">
            <p className="eyebrow">Ways to engage</p>
            <h2>Three ways to work with us</h2>
          </div>
          <div className="grid g3">
            <div className="card">
              <p className="eyebrow">Fixed scope</p>
              <h3>Projects</h3>
              <p>A defined outcome, a fixed quote and a clear timeline. Best for new websites, apps, migrations and system builds.</p>
            </div>
            <div className="card">
              <p className="eyebrow">Monthly</p>
              <h3>Managed services</h3>
              <p>We look after your IT, cloud and software for a predictable monthly fee, with response times written into the agreement.</p>
            </div>
            <div className="card">
              <p className="eyebrow">By the hour</p>
              <h3>Advisory</h3>
              <p>Independent advice when you are choosing software, reviewing a vendor quote or planning a technology budget.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="cta">
        <div className="wrap">
          <h2>Not sure which service you need?</h2>
          <p className="lead">
            {"Tell us the problem. We'll tell you honestly what we would do, even if the answer is a cheaper off-the-shelf tool."}
          </p>
          <BookButton className="btn btn-p">Book a free consultation</BookButton>
        </div>
      </section>
    </>
  );
}
