import { SITE_URL } from "@/lib/site";
import { SERVICES, serviceUrl } from "@/lib/services";
import { ARTICLES } from "@/lib/articles";

const UPDATED = "2026-11-16";

export default function sitemap() {
  const pages = [
    ["/", 1.0],
    ["/services/", 0.9],
    ...SERVICES.map((s) => [serviceUrl(s), 0.8]),
    ["/about/", 0.9],
    ["/ventures/", 0.9],
    ["/insights/", 0.9],
    ...ARTICLES.map((a) => [`/insights/${a.slug}/`, 0.7]),
    ["/careers/", 0.9],
    ["/careers/it-support-systems-engineer/", 0.7],
    ["/contact/", 0.9],
    ["/privacy/", 0.3],
    ["/terms/", 0.3],
  ];
  return pages.map(([path, priority]) => ({ url: SITE_URL + path, lastModified: UPDATED, priority }));
}
