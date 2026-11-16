import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import { pageMetadata, pageGraph } from "@/lib/seo";
import { SITE_URL } from "@/lib/site";

const PAGE = {
  path: "/insights/",
  title: "Technology Guides for Australian Businesses | Sunyaverse",
  description: "Plain-English guides on cyber security, cloud migration and asset management for Canberra and Australian business owners, from Sunyaverse.",
};
const CRUMBS = [
  ["Home", "/"],
  ["Insights", "/insights/"],
];

export const metadata = pageMetadata(PAGE);

export default function InsightsPage() {
  return (
    <>
      <JsonLd data={pageGraph({ ...PAGE, crumbs: CRUMBS, extra: [
        {
          "@type": "ItemList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "url": `${SITE_URL}/insights/essential-eight-small-business/`,
              "name": "The Essential Eight, explained for small businesses"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "url": `${SITE_URL}/insights/cloud-migration-questions/`,
              "name": "Moving to the cloud: five questions to ask first"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "url": `${SITE_URL}/insights/asset-register-guide/`,
              "name": "Asset registers: the spreadsheet that runs your business"
            }
          ]
        }
      ] })} />
      <Breadcrumbs items={CRUMBS} />
      <section className="page-hero">
        <div className="wrap">
          <p className="eyebrow">Insights</p>
          <h1>Plain-English technology advice</h1>
          <p className="lead">Short, practical guides for Canberra business owners. No jargon, no sales pitch.</p>
        </div>
      </section>
      <section>
        <div className="wrap">
          <article className="post">
            <p className="meta">Security · 5 min read</p>
            <h3>
              <Link href="/insights/essential-eight-small-business/">The Essential Eight, explained for small businesses</Link>
            </h3>
            <p className="lead">
              {"The Australian Cyber Security Centre's Essential Eight is the baseline most Australian organisations are measured against. Here is what each control means in practice."}
            </p>
            <Link className="link" href="/insights/essential-eight-small-business/">Read the guide →</Link>
          </article>
          <article className="post">
            <p className="meta">Cloud · 4 min read</p>
            <h3>
              <Link href="/insights/cloud-migration-questions/">Moving to the cloud: five questions to ask first</Link>
            </h3>
            <p className="lead">Cloud can save money and headaches, or it can add both. Answer these before you migrate anything.</p>
            <Link className="link" href="/insights/cloud-migration-questions/">Read the guide →</Link>
          </article>
          <article className="post">
            <p className="meta">Data · 4 min read</p>
            <h3>
              <Link href="/insights/asset-register-guide/">Asset registers: the spreadsheet that runs your business</Link>
            </h3>
            <p className="lead">
              {"Knowing what you own, where it is and when it needs servicing saves money every year. Here is how to set one up properly."}
            </p>
            <Link className="link" href="/insights/asset-register-guide/">Read the guide →</Link>
          </article>
        </div>
      </section>
      <section className="cta band">
        <div className="wrap">
          <h2>Have a question we haven't covered?</h2>
          <Link className="btn btn-p" href="/contact/">Ask us directly</Link>
        </div>
      </section>
    </>
  );
}
