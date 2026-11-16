import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { pageMetadata, pageGraph } from "@/lib/seo";

const PAGE = {
  path: "/contact/thanks/",
  title: "Thank You | Sunyaverse",
  description: "Your enquiry has been sent to Sunyaverse.",
  noindex: true,
};
const CRUMBS = null;

export const metadata = pageMetadata(PAGE);

export default function ThanksPage() {
  return (
    <>
      <JsonLd data={pageGraph({ ...PAGE, crumbs: CRUMBS, extra: [] })} />
      <section className="page-hero">
        <div className="wrap">
          <p className="eyebrow">Sent</p>
          <h1>Thanks, we have your enquiry</h1>
          <p className="lead">We reply within one business day.</p>
          <div className="row">
            <Link className="btn btn-p" href="/">Back to the homepage</Link>
          </div>
        </div>
      </section>
    </>
  );
}
