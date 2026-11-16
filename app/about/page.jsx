import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import { pageMetadata, pageGraph } from "@/lib/seo";
import { SITE_URL } from "@/lib/site";

const PAGE = {
  path: "/about/",
  title: "About Sunyaverse | Canberra Technology Company",
  description: "Sunyaverse is a Canberra technology company founded by an engineer. Named after śūnya, the Sanskrit word for zero, we build every system from first principles.",
};
const CRUMBS = [
  ["Home", "/"],
  ["About", "/about/"],
];

export const metadata = pageMetadata(PAGE);

export default function AboutPage() {
  return (
    <>
      <JsonLd data={pageGraph({ ...PAGE, crumbs: CRUMBS, extra: [
        {
          "@type": "AboutPage",
          "url": `${SITE_URL}/about/`
        }
      ] })} />
      <Breadcrumbs items={CRUMBS} />
      <section className="page-hero">
        <div className="wrap">
          <p className="eyebrow">About Sunyaverse</p>
          <h1>A universe built from zero</h1>
          <p className="lead">
            {"A Canberra technology company founded by an engineer, run on first principles, and named after one of the oldest ideas in mathematics."}
          </p>
        </div>
      </section>
      <section>
        <div className="wrap split">
          <div className="prose">
            <p className="eyebrow">Our story</p>
            <h2 style={{ color: "var(--ivory)" }}>Started with nothing but the fundamentals</h2>
            <p>
              {"Sunyaverse was founded in Canberra by "}
              <strong>Dibas Paudel</strong>
              {", an engineer who trained in Electronics and Communication Engineering at Tribhuvan University in Nepal and completed a Master of IT and Systems at the University of Canberra."}
            </p>
            <p>
              {"Before Sunyaverse, Dibas worked as an associate engineer in the pharmaceutical industry and in asset management and data analysis at the Innovation Centre Canberra. Across all of it, one lesson kept repeating: "}
              <strong>systems fail when they are built on assumptions.</strong>
            </p>
            <p>
              {"So Sunyaverse starts every engagement at zero. We learn how your business actually runs before we recommend a single tool. Then we design, build and run systems that fit, and we explain every decision in plain English."}
            </p>
          </div>
          <div className="sunya">
            <svg aria-hidden="true" className="mk" height="120" width="120">
              <use href="#mark"></use>
            </svg>
            <p className="eq">
              <b>The ring</b>
              {" is zero, the void"}
            </p>
            <p className="eq">
              <b>The dot</b>
              {" is the first thing made from it"}
            </p>
          </div>
        </div>
      </section>
      <section className="band">
        <div className="wrap">
          <div className="sec-head">
            <p className="eyebrow">What we believe</p>
            <h2>Four values we hold ourselves to</h2>
          </div>
          <div className="values">
            <div className="value">
              <h3>Start from zero</h3>
              <p>
                {"We question assumptions, including our own. Every recommendation comes from understanding your business, never from a template."}
              </p>
            </div>
            <div className="value">
              <h3>Build it properly</h3>
              <p>
                {"Secure, documented, maintainable. We build systems we would be comfortable running ourselves, because for our own ventures we do."}
              </p>
            </div>
            <div className="value">
              <h3>Explain it plainly</h3>
              <p>No jargon hiding the work. You will always know what we are doing, why, and what it costs.</p>
            </div>
            <div className="value">
              <h3>Own the outcome</h3>
              <p>We measure success by whether the system works for your people a year later, not by whether the project closed on time.</p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="wrap">
          <div className="sec-head">
            <p className="eyebrow">The group</p>
            <h2>One parent, focused businesses</h2>
            <p className="lead">
              {"Sunyaverse Pty Ltd is the parent company. Our technology consulting carries the Sunyaverse name; our ventures keep their own identity."}
            </p>
          </div>
          <div className="grid g3">
            <div className="card">
              <p className="eyebrow">Parent</p>
              <h3>Sunyaverse</h3>
              <p>Technology consulting, software and managed IT for Canberra organisations.</p>
            </div>
            <div className="card">
              <p className="eyebrow">Marketing</p>
              <h3>Whats Happening Australia</h3>
              <p>Events discovery platform and app.</p>
              <Link className="link" href="/ventures/">Learn more →</Link>
            </div>
            <div className="card">
              <p className="eyebrow">Hospitality</p>
              <h3>Pirka</h3>
              <p>Canberra food truck.</p>
              <Link className="link" href="/ventures/">Learn more →</Link>
            </div>
          </div>
        </div>
      </section>
      <section className="cta band">
        <div className="wrap">
          <h2>Want to build with us?</h2>
          <div className="row">
            <Link className="btn btn-p" href="/contact/">Start a project</Link>
            <Link className="btn btn-s" href="/careers/">Join the team</Link>
          </div>
        </div>
      </section>
    </>
  );
}
