import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import BookButton from "@/components/BookButton";
import { SERVICES, serviceBySlug, serviceUrl } from "@/lib/services";
import { pageMetadata, pageGraph } from "@/lib/seo";
import { SITE_URL } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const s = serviceBySlug(slug);
  if (!s) return {};
  return pageMetadata({ path: serviceUrl(s), title: s.title, description: s.desc });
}

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const s = serviceBySlug(slug);
  if (!s) notFound();
  const path = serviceUrl(s);
  const crumbs = [
    ["Home", "/"],
    ["Services", "/services/"],
    [s.name, path],
  ];
  const graph = pageGraph({
    path,
    title: s.title,
    description: s.desc,
    crumbs,
    extra: [
      {
        "@type": "Service",
        "@id": `${SITE_URL}${path}#service`,
        name: s.name,
        serviceType: s.name,
        description: s.desc,
        provider: { "@id": `${SITE_URL}/#organization` },
        areaServed: [
          { "@type": "City", name: "Canberra" },
          { "@type": "Country", name: "Australia" },
        ],
        url: SITE_URL + path,
      },
      {
        "@type": "FAQPage",
        mainEntity: s.faqs.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
      },
    ],
  });

  return (
    <>
      <JsonLd data={graph} />
      <Breadcrumbs items={crumbs} />
      <section className="page-hero">
        <div className="wrap">
          <p className="eyebrow">Services · Canberra</p>
          <h1>{s.h1}</h1>
          <p className="lead">{s.lead}</p>
          <div className="row">
            <BookButton className="btn btn-p" topic={s.id} />
            <Link className="btn btn-s" href="/services/">All services</Link>
          </div>
        </div>
      </section>
      <section>
        <div className="wrap svc-body">
          <div className="prose">
            <h2>Who it's for</h2>
            <p>{s.who}</p>
            <h2>How we work</h2>
            {s.body.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
          <div className="card">
            <p className="eyebrow">What's included</p>
            <ul className="checklist">
              {s.items.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
            <div className="tags">
              {s.tags.map((t) => (
                <span className="tag" key={t}>{t}</span>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="band">
        <div className="wrap">
          <div className="sec-head">
            <p className="eyebrow">Questions</p>
            <h2>Common questions</h2>
          </div>
          <div className="faq">
            {s.faqs.map(([q, a]) => (
              <details key={q}>
                <summary>{q}</summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
      <section>
        <div className="wrap">
          <div className="sec-head">
            <p className="eyebrow">Related</p>
            <h2>Other services</h2>
          </div>
          <div className="related">
            {SERVICES.filter((o) => o.id !== s.id).map((o) => (
              <Link className="card svc" href={serviceUrl(o)} key={o.id}>
                <div className="ico">{o.icon}</div>
                <h3>{o.name}</h3>
                <span className="link">Learn more →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="cta band">
        <div className="wrap">
          <h2>Start from zero with us</h2>
          <p className="lead">Tell us what you are trying to do. The first consultation is free.</p>
          <BookButton className="btn btn-p" topic={s.id} />
        </div>
      </section>
    </>
  );
}
