import { SITE_URL, CONTACT } from "./site";
import { SERVICES, serviceUrl } from "./services";

const OG_IMAGE = "/assets/og-image.png";

/* Page metadata: title, description, canonical, Open Graph and Twitter cards. */
export function pageMetadata({ path, title, description, noindex = false, ogType = "website" }) {
  const url = SITE_URL + path;
  return {
    title: { absolute: title },
    description,
    alternates: noindex ? undefined : { canonical: url, languages: { "en-AU": url } },
    robots: noindex
      ? { index: false, follow: true }
      : { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
    openGraph: {
      type: ogType,
      siteName: "Sunyaverse",
      locale: "en_AU",
      url,
      title,
      description,
      images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Sunyaverse logo on black with orbit rings. From zero, everything." }],
    },
    twitter: { card: "summary_large_image", title, description, images: [OG_IMAGE] },
  };
}

const ORG_ID = `${SITE_URL}/#organization`;

export const ORGANIZATION = {
  "@type": ["Organization", "ProfessionalService"],
  "@id": ORG_ID,
  name: "Sunyaverse",
  legalName: "Sunyaverse Pty Ltd",
  alternateName: "Sunya Verse",
  url: `${SITE_URL}/`,
  logo: { "@type": "ImageObject", url: `${SITE_URL}/assets/logo-512.png`, width: 512, height: 512 },
  image: `${SITE_URL}${OG_IMAGE}`,
  email: CONTACT.email,
  telephone: CONTACT.phone,
  slogan: "From zero, everything.",
  description:
    "Canberra technology consulting company: software and app development, cloud and IT infrastructure, data analytics, digital marketing technology, IT strategy and managed IT.",
  address: { "@type": "PostalAddress", addressLocality: "Canberra", addressRegion: "ACT", addressCountry: "AU" },
  areaServed: [
    { "@type": "City", name: "Canberra" },
    { "@type": "State", name: "Australian Capital Territory" },
    { "@type": "City", name: "Queanbeyan" },
    { "@type": "Country", name: "Australia" },
  ],
  founder: { "@type": "Person", name: "Dibas Paudel", jobTitle: "Founder & Director" },
  contactPoint: [
    { "@type": "ContactPoint", contactType: "sales", email: CONTACT.email, telephone: CONTACT.phone, areaServed: "AU", availableLanguage: ["English"] },
    { "@type": "ContactPoint", contactType: "careers", email: CONTACT.careersEmail },
  ],
  knowsAbout: [
    "IT consulting", "Software development", "Mobile app development", "Cloud computing", "Microsoft 365",
    "Cyber security", "Essential Eight", "Data analytics", "Asset management", "Digital marketing", "SEO", "CRM",
  ],
  subOrganization: [
    { "@type": "Organization", name: "Whats Happening Australia", url: "https://whaustralia.com/" },
    { "@type": "Organization", name: "Pirka", url: "https://www.pirkacanberra.com/" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Technology services",
    itemListElement: SERVICES.map((s) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: s.name, url: SITE_URL + serviceUrl(s) },
    })),
  },
};

const WEBSITE = {
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: `${SITE_URL}/`,
  name: "Sunyaverse",
  publisher: { "@id": ORG_ID },
  inLanguage: "en-AU",
};

/* Structured data graph for a page: organisation, website, web page, breadcrumbs, plus page extras. */
export function pageGraph({ path, title, description, crumbs = null, extra = [] }) {
  const url = SITE_URL + path;
  const graph = [
    ORGANIZATION,
    WEBSITE,
    {
      "@type": "WebPage",
      "@id": `${url}#webpage`,
      url,
      name: title,
      description,
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": ORG_ID },
      inLanguage: "en-AU",
    },
  ];
  if (crumbs) {
    graph.push({
      "@type": "BreadcrumbList",
      itemListElement: crumbs.map(([name, href], i) => ({
        "@type": "ListItem",
        position: i + 1,
        name,
        item: SITE_URL + href,
      })),
    });
  }
  return { "@context": "https://schema.org", "@graph": [...graph, ...extra] };
}
