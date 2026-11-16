import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import BookButton from "@/components/BookButton";
import { ARTICLES, articleBySlug } from "@/lib/articles";
import { pageMetadata, pageGraph } from "@/lib/seo";
import { SITE_URL } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const a = articleBySlug(slug);
  if (!a) return {};
  return pageMetadata({ path: `/insights/${a.slug}/`, title: a.title, description: a.desc, ogType: "article" });
}

export default async function ArticlePage({ params }) {
  const { slug } = await params;
  const a = articleBySlug(slug);
  if (!a) notFound();
  const path = `/insights/${a.slug}/`;
  const crumbs = [
    ["Home", "/"],
    ["Insights", "/insights/"],
    [a.h1, path],
  ];
  const graph = pageGraph({
    path,
    title: a.title,
    description: a.desc,
    crumbs,
    extra: [
      {
        "@type": "BlogPosting",
        headline: a.h1,
        description: a.desc,
        datePublished: a.published,
        dateModified: a.published,
        author: { "@type": "Person", name: "Dibas Paudel", url: `${SITE_URL}/about/` },
        publisher: { "@id": `${SITE_URL}/#organization` },
        mainEntityOfPage: SITE_URL + path,
        image: `${SITE_URL}/assets/og-image.png`,
        inLanguage: "en-AU",
      },
    ],
  });
  const Body = a.Body;

  return (
    <>
      <JsonLd data={graph} />
      <Breadcrumbs items={crumbs} />
      <section className="page-hero">
        <div className="wrap">
          <p className="eyebrow">Insights · {a.category}</p>
          <h1>{a.h1}</h1>
          <p className="lead">{a.lead}</p>
        </div>
      </section>
      <section>
        <div className="wrap">
          <article className="article">
            <p className="meta">
              {a.meta} · By Dibas Paudel · <time dateTime={a.published}>{a.publishedLabel}</time>
            </p>
            <Body />
          </article>
        </div>
      </section>
      <section className="cta band">
        <div className="wrap">
          <h2>Want help with this?</h2>
          <BookButton className="btn btn-p" />
          <Link className="link" href="/insights/">More guides →</Link>
        </div>
      </section>
    </>
  );
}
