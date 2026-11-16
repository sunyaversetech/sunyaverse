import Link from "next/link";
import BookButton from "@/components/BookButton";
import JsonLd from "@/components/JsonLd";
import { pageMetadata, pageGraph } from "@/lib/seo";

const PAGE = {
  path: "/",
  title: "Sunyaverse | IT Consulting, Software & Marketing Tech, Canberra",
  description: "Sunyaverse is a Canberra technology consulting company. We design, build and run software, cloud, data and marketing technology for Australian businesses.",
};
const CRUMBS = null;

export const metadata = pageMetadata(PAGE);

export default function HomePage() {
  return (
    <>
      <JsonLd data={pageGraph({ ...PAGE, crumbs: CRUMBS, extra: [] })} />
      <section className="hero">
        <svg aria-hidden="true" className="orbits" viewBox="0 0 860 860">
          <circle className="r" cx="430" cy="430" r="140"></circle>
          <circle className="r" cx="430" cy="430" r="220"></circle>
          <circle className="r" cx="430" cy="430" r="300"></circle>
          <circle className="r" cx="430" cy="430" r="380"></circle>
          <circle className="s" cx="96" cy="180" r="1.5"></circle>
          <circle className="s" cx="300" cy="72" r="1.2"></circle>
          <circle className="s" cx="610" cy="140" r="1.6"></circle>
          <circle className="s" cx="760" cy="520" r="1.2"></circle>
          <circle className="s" cx="520" cy="780" r="1.5"></circle>
          <circle className="s" cx="140" cy="560" r="1.2"></circle>
          <circle className="s" cx="430" cy="430" r="2.5"></circle>
          <g className="spin">
            <circle className="glow" cx="218" cy="642" r="16"></circle>
            <circle className="d" cx="218" cy="642" r="6"></circle>
          </g>
        </svg>
        <div className="wrap">
          <p className="eyebrow">IT consulting · Software · Marketing technology · Canberra</p>
          <h1>
            {"From zero, "}
            <em>everything.</em>
          </h1>
          <p className="lead">
            {"Sunyaverse designs, builds and runs the software, cloud and data systems Canberra businesses depend on. We start from zero: we learn how your business actually works, then build exactly what it needs."}
          </p>
          <div className="row">
            <BookButton className="btn btn-p">Book a free consultation</BookButton>
            <Link className="btn btn-s" href="/services/">See what we do</Link>
          </div>
          <div className="facts">
            <div className="fact">
              <b>Engineers first</b>
              <span>Electronics, IT and systems background</span>
            </div>
            <div className="fact">
              <b>Local to the ACT</b>
              <span>On-site across Canberra and Queanbeyan</span>
            </div>
            <div className="fact">
              <b>We run our own products</b>
              <span>Not just advice: we operate live businesses</span>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="wrap">
          <div className="sec-head">
            <p className="eyebrow">What we do</p>
            <h2>Six ways we help you build properly</h2>
            <p className="lead">One partner for the whole system, from the first conversation to the day-to-day running of it.</p>
          </div>
          <div className="grid g3" id="homeServices">
            <Link className="card svc" href="/services/software-development-canberra/">
              <div className="ico">
                <svg aria-hidden="true" viewBox="0 0 24 24">
                  <polyline points="8 6 3 12 8 18"></polyline>
                  <polyline points="16 6 21 12 16 18"></polyline>
                </svg>
              </div>
              <h3>{"Software & app development"}</h3>
              <p>Custom web apps, mobile apps and business systems designed around the way you work.</p>
              <div className="tags">
                <span className="tag">Web</span>
                <span className="tag">Mobile</span>
                <span className="tag">Integrations</span>
              </div>
              <span className="link">Learn more →</span>
            </Link>
            <Link className="card svc" href="/services/cloud-it-infrastructure-canberra/">
              <div className="ico">
                <svg aria-hidden="true" viewBox="0 0 24 24">
                  <path d="M7 18h10a4 4 0 0 0 .5-7.97A6 6 0 0 0 6 9.5 4.25 4.25 0 0 0 7 18z"></path>
                </svg>
              </div>
              <h3>{"Cloud & IT infrastructure"}</h3>
              <p>Microsoft 365, Google Workspace, Azure and AWS set up securely and sized to your business.</p>
              <div className="tags">
                <span className="tag">Microsoft 365</span>
                <span className="tag">Azure</span>
                <span className="tag">AWS</span>
              </div>
              <span className="link">Learn more →</span>
            </Link>
            <Link className="card svc" href="/services/data-analytics-asset-management/">
              <div className="ico">
                <svg aria-hidden="true" viewBox="0 0 24 24">
                  <line x1="4" x2="20" y1="20" y2="20"></line>
                  <rect height="7" width="3" x="6" y="11"></rect>
                  <rect height="11" width="3" x="11" y="7"></rect>
                  <rect height="5" width="3" x="16" y="13"></rect>
                </svg>
              </div>
              <h3>{"Data & asset analytics"}</h3>
              <p>Turn spreadsheets into dashboards and decisions, with clean data you can trust.</p>
              <div className="tags">
                <span className="tag">Power BI</span>
                <span className="tag">Asset management</span>
                <span className="tag">Automation</span>
              </div>
              <span className="link">Learn more →</span>
            </Link>
            <Link className="card svc" href="/services/digital-marketing-technology/">
              <div className="ico">
                <svg aria-hidden="true" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="2"></circle>
                  <path d="M7.5 7.5a6.4 6.4 0 0 0 0 9M16.5 7.5a6.4 6.4 0 0 1 0 9M4.6 4.6a10.5 10.5 0 0 0 0 14.8M19.4 4.6a10.5 10.5 0 0 1 0 14.8"></path>
                </svg>
              </div>
              <h3>Digital marketing technology</h3>
              <p>The systems behind your marketing: websites, CRM, email and analytics that work together.</p>
              <div className="tags">
                <span className="tag">CRM</span>
                <span className="tag">Email</span>
                <span className="tag">Analytics</span>
              </div>
              <span className="link">Learn more →</span>
            </Link>
            <Link className="card svc" href="/services/it-strategy-consulting-canberra/">
              <div className="ico">
                <svg aria-hidden="true" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="9"></circle>
                  <polygon points="15.5 8.5 13.5 13.5 8.5 15.5 10.5 10.5"></polygon>
                </svg>
              </div>
              <h3>{"IT strategy & consulting"}</h3>
              <p>Independent advice on what to buy, build or retire, with a roadmap and budget you can act on.</p>
              <div className="tags">
                <span className="tag">Roadmaps</span>
                <span className="tag">Vendor review</span>
              </div>
              <span className="link">Learn more →</span>
            </Link>
            <Link className="card svc" href="/services/managed-it-cyber-security-canberra/">
              <div className="ico">
                <svg aria-hidden="true" viewBox="0 0 24 24">
                  <path d="M12 3l8 3v6c0 4.5-3.4 8.2-8 9-4.6-.8-8-4.5-8-9V6z"></path>
                  <polyline points="9 12 11 14 15 10"></polyline>
                </svg>
              </div>
              <h3>{"Managed IT & cyber security"}</h3>
              <p>We look after your systems day to day and keep them secure against the Essential Eight.</p>
              <div className="tags">
                <span className="tag">Support</span>
                <span className="tag">Security</span>
                <span className="tag">Essential Eight</span>
              </div>
              <span className="link">Learn more →</span>
            </Link>
          </div>
          <div className="row" style={{ marginTop: "var(--s8)" }}>
            <Link className="link" href="/services/">Explore all services →</Link>
          </div>
        </div>
      </section>
      <section className="band">
        <div className="wrap">
          <div className="sec-head">
            <p className="eyebrow">How we work</p>
            <h2>Every project starts at zero</h2>
            <p className="lead">No templates and no assumptions. Five stages, the same way every time.</p>
          </div>
          <div className="steps" id="homeSteps">
            <div className="step">
              <span className="n">0</span>
              <h3>Zero</h3>
              <p>We set aside assumptions and agree the real problem and how success will be measured.</p>
            </div>
            <div className="step">
              <span className="n">1</span>
              <h3>Discover</h3>
              <p>We map your people, processes and current systems, and talk to the people who use them.</p>
            </div>
            <div className="step">
              <span className="n">2</span>
              <h3>Design</h3>
              <p>We propose the simplest solution that works, with a fixed quote and timeline.</p>
            </div>
            <div className="step">
              <span className="n">3</span>
              <h3>Build</h3>
              <p>We build in short stages and show you working results every week or two.</p>
            </div>
            <div className="step">
              <span className="n">4</span>
              <h3>Run</h3>
              <p>We launch, train your team and stay on to support, monitor and improve.</p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="wrap split">
          <div className="sunya">
            <div className="glyph" lang="ne">शून्य</div>
            <p className="eq">
              <b>Sunya</b>
              {" zero + "}
              <b>verse</b>
              {" universe"}
            </p>
            <p className="eq">= a universe built from zero</p>
          </div>
          <div style={{ display: "grid", gap: "var(--s6)" }}>
            <p className="eyebrow">Our name</p>
            <h2>Zero is where every good system starts</h2>
            <p className="lead">
              <em>Śūnya</em>
              {" is the Sanskrit and Nepali word for zero. The idea of zero as a number took shape in South Asia, and it became the foundation of mathematics and of binary, the 0 and 1 inside every computer. We named the company after it because that is how we work: start from first principles, then build something that lasts."}
            </p>
            <Link className="link" href="/about/">Read our story →</Link>
          </div>
        </div>
      </section>
      <section className="band">
        <div className="wrap">
          <div className="sec-head">
            <p className="eyebrow">Our ventures</p>
            <h2>We build and run real businesses</h2>
            <p className="lead">
              {"Sunyaverse is also the parent company of two in-house ventures we operate every day. Running them keeps our advice practical."}
            </p>
          </div>
          <div className="grid g2">
            <div className="card">
              <span className="cat">Marketing</span>
              <h3>Whats Happening Australia</h3>
              <p>An events discovery platform and app that helps people find what's on around them, backed by our IT and marketing team.</p>
              <div className="tags">
                <span className="tag">Events</span>
                <span className="tag">Mobile app</span>
                <span className="tag">Social</span>
              </div>
            </div>
            <div className="card">
              <span className="cat">Hospitality</span>
              <h3>Pirka</h3>
              <p>A Canberra food truck, where we build and test the booking, payments and ordering systems we recommend to clients.</p>
              <div className="tags">
                <span className="tag">Food truck</span>
                <span className="tag">Operations</span>
              </div>
            </div>
          </div>
          <div className="row" style={{ marginTop: "var(--s8)" }}>
            <Link className="link" href="/ventures/">More about our ventures →</Link>
          </div>
        </div>
      </section>
      <section>
        <div className="wrap">
          <div className="sec-head">
            <p className="eyebrow">Our clients</p>
            <h2>Organisations we build for</h2>
            <p className="lead">Websites, systems, marketing technology and support we design and run for our clients.</p>
          </div>
          <div className="clients" data-clients="">
            <a className="client" href="https://365migrationhub.com.au/" rel="noopener" target="_blank">
              <div className="logo">
                <span aria-hidden="true" className="mono">365</span>
              </div>
              <div className="info">
                <span className="nm">365 Migration Hub</span>
                <span className="kind">Migration services</span>
                <span className="url">365migrationhub.com.au ↗</span>
              </div>
            </a>
            <a className="client" href="https://www.sanatansamajaustralia.org/" rel="noopener" target="_blank">
              <div className="logo">
                <span aria-hidden="true" className="mono">SSA</span>
              </div>
              <div className="info">
                <span className="nm">Sanatan Samaj Australia</span>
                <span className="kind">Community not-for-profit</span>
                <span className="url">sanatansamajaustralia.org ↗</span>
              </div>
            </a>
            <a className="client" href="https://skippyeducation.com/" rel="noopener" target="_blank">
              <div className="logo">
                <span aria-hidden="true" className="mono">SE</span>
              </div>
              <div className="info">
                <span className="nm">Skippy Education</span>
                <span className="kind">{"Education & migration"}</span>
                <span className="url">skippyeducation.com ↗</span>
              </div>
            </a>
            <a className="client" href="https://www.pirkacanberra.com/" rel="noopener" target="_blank">
              <div className="logo">
                <span aria-hidden="true" className="mono">Pirka</span>
              </div>
              <div className="info">
                <span className="nm">Pirka</span>
                <span className="kind">Hospitality</span>
                <span className="url">pirkacanberra.com ↗</span>
              </div>
            </a>
            <a className="client" href="https://whaustralia.com/" rel="noopener" target="_blank">
              <div className="logo">
                <span aria-hidden="true" className="mono">WHA</span>
              </div>
              <div className="info">
                <span className="nm">Whats Happening Australia</span>
                <span className="kind">{"Events & marketing"}</span>
                <span className="url">whaustralia.com ↗</span>
              </div>
            </a>
          </div>
        </div>
      </section>
      <section>
        <div className="wrap">
          <div className="sec-head">
            <p className="eyebrow">Who we work with</p>
            <h2>Built for Canberra organisations</h2>
          </div>
          <div className="grid g3">
            <div className="card">
              <h3>Small and medium businesses</h3>
              <p>
                {"Retail, trades, professional services and hospitality that have outgrown spreadsheets and need systems that scale with them."}
              </p>
            </div>
            <div className="card">
              <h3>Community and not-for-profit</h3>
              <p>Member systems, websites, events and donations, delivered on a sensible budget with training so your volunteers can run it.</p>
            </div>
            <div className="card">
              <h3>Government-adjacent teams</h3>
              <p>Contractors and suppliers who need secure, well-documented systems that follow ACT and Australian Government standards.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
