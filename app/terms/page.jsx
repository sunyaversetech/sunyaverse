import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import { pageMetadata, pageGraph } from "@/lib/seo";

const PAGE = {
  path: "/terms/",
  title: "Website Terms of Use | Sunyaverse",
  description: "The terms that apply to using the Sunyaverse website, sunyaverse.com.au, operated by Sunyaverse Pty Ltd, Canberra.",
};
const CRUMBS = [
  ["Home", "/"],
  ["Terms of use", "/terms/"],
];

export const metadata = pageMetadata(PAGE);

export default function TermsPage() {
  return (
    <>
      <JsonLd data={pageGraph({ ...PAGE, crumbs: CRUMBS, extra: [] })} />
      <Breadcrumbs items={CRUMBS} />
      <section className="page-hero">
        <div className="wrap">
          <p className="eyebrow">Legal</p>
          <h1>Website terms of use</h1>
          <p className="note">Last updated 1 November 2026</p>
        </div>
      </section>
      <section>
        <div className="wrap prose lgl">
          <p>
            {"These terms apply to your use of this website, operated by Sunyaverse Pty Ltd (ABN [to be added]). By using the site you agree to them."}
          </p>
          <h2>Information on this site</h2>
          <p>
            {"Content on this site, including our Insights articles, is general information only. It is not professional advice for your specific situation. Contact us for advice tailored to your organisation."}
          </p>
          <h2>Intellectual property</h2>
          <p>
            {"The Sunyaverse name, logo and website content belong to Sunyaverse Pty Ltd. You may share links to our pages, but please do not copy or reuse our content or brand without written permission."}
          </p>
          <h2>Services</h2>
          <p>Any services we provide are governed by a separate written proposal or agreement, which takes priority over these terms.</p>
          <h2>Liability</h2>
          <p>
            {"To the extent permitted by law, including the Australian Consumer Law, we are not liable for loss arising from your use of this website. Nothing in these terms excludes rights you have under the Australian Consumer Law."}
          </p>
          <h2>External links</h2>
          <p>Links to other websites are provided for convenience. We are not responsible for their content.</p>
          <h2>Governing law</h2>
          <p>These terms are governed by the laws of the Australian Capital Territory.</p>
        </div>
      </section>
    </>
  );
}
