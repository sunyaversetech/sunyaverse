import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import { pageMetadata, pageGraph } from "@/lib/seo";

const PAGE = {
  path: "/ventures/",
  title: "Our Ventures: Whats Happening Australia & Pirka | Sunyaverse",
  description: "Sunyaverse builds and runs its own businesses: Whats Happening Australia, an events platform, and Pirka, a Canberra food truck. See our clients too.",
};
const CRUMBS = [
  ["Home", "/"],
  ["Ventures", "/ventures/"],
];

export const metadata = pageMetadata(PAGE);

export default function VenturesPage() {
  return (
    <>
      <JsonLd data={pageGraph({ ...PAGE, crumbs: CRUMBS, extra: [] })} />
      <Breadcrumbs items={CRUMBS} />
      <section className="page-hero">
        <div className="wrap">
          <p className="eyebrow">Ventures</p>
          <h1>Businesses we build and run</h1>
          <p className="lead">
            {"Most consultants advise. We also operate. Our two in-house ventures, in marketing and hospitality, are where we prove the systems we recommend to clients."}
          </p>
        </div>
      </section>
      <section>
        <div className="wrap" style={{ display: "grid", gap: "var(--s8)" }}>
          <article className="venture">
            <div style={{ display: "grid", gap: "var(--s4)", alignContent: "start" }}>
              <span className="cat">Marketing</span>
              <h2 className="v-name">Whats Happening Australia</h2>
              <p className="lead">
                {"An events discovery platform helping people find what's on around them, from community festivals to live music and markets."}
              </p>
              <div className="row">
                <a className="btn btn-s" href="https://whaustralia.com" rel="noopener" target="_blank">Visit whaustralia.com ↗</a>
              </div>
            </div>
            <div style={{ display: "grid", gap: "var(--s6)" }}>
              <dl>
                <dt>What it is</dt>
                <dd>Website, social channels and a mobile app in development</dd>
                <dt>Built with</dt>
                <dd>Web platform, React Native (Expo) app, social content workflow</dd>
                <dt>Our role</dt>
                <dd>Product, engineering, design and marketing, end to end</dd>
                <dt>Find it</dt>
                <dd>@whatshappeningaustralia on Instagram</dd>
              </dl>
              <p className="note">
                {"What we bring to clients from it: mobile app delivery, content systems, social marketing and audience growth."}
              </p>
            </div>
          </article>
          <article className="venture">
            <div style={{ display: "grid", gap: "var(--s4)", alignContent: "start" }}>
              <span className="cat">Hospitality</span>
              <h2 className="v-name">Pirka</h2>
              <p className="lead">A Canberra food truck serving events, worksites and community spaces across the ACT.</p>
              <div className="row">
                <a className="btn btn-s" href="https://pirkacanberra.com" rel="noopener" target="_blank">Visit pirkacanberra.com ↗</a>
              </div>
            </div>
            <div style={{ display: "grid", gap: "var(--s6)" }}>
              <dl>
                <dt>What it is</dt>
                <dd>Mobile food business trading at events and sites around Canberra</dd>
                <dt>Systems</dt>
                <dd>Online presence, bookings, card payments, ordering and stock</dd>
                <dt>Our role</dt>
                <dd>Owner and operator</dd>
              </dl>
              <p className="note">
                {"What we bring to clients from it: practical point-of-sale, bookings and operations systems for hospitality and small retail."}
              </p>
            </div>
          </article>
        </div>
      </section>
      <section className="band">
        <div className="wrap">
          <div className="sec-head">
            <p className="eyebrow">Our clients</p>
            <h2>Organisations we build for</h2>
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
      <section className="cta band">
        <div className="wrap">
          <p className="eyebrow">Have an idea?</p>
          <h2>We help founders take products from zero to launch</h2>
          <p className="lead">Discovery, prototype, build and launch, with the lessons from running our own.</p>
          <Link className="btn btn-p" href="/contact/">Talk to us about your idea</Link>
        </div>
      </section>
    </>
  );
}
