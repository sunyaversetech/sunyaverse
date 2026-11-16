import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import { pageMetadata, pageGraph } from "@/lib/seo";

const PAGE = {
  path: "/careers/",
  title: "Careers & Internships at Sunyaverse | Canberra Tech Jobs",
  description: "Join Sunyaverse in Canberra: IT Support & Systems Engineer role, plus internships in software, IT, data and digital marketing for students and graduates.",
};
const CRUMBS = [
  ["Home", "/"],
  ["Careers", "/careers/"],
];

export const metadata = pageMetadata(PAGE);

export default function CareersPage() {
  return (
    <>
      <JsonLd data={pageGraph({ ...PAGE, crumbs: CRUMBS, extra: [] })} />
      <Breadcrumbs items={CRUMBS} />
      <section className="page-hero">
        <div className="wrap">
          <p className="eyebrow">Careers</p>
          <h1>Build real things from zero</h1>
          <p className="lead">
            {"We are a small Canberra team growing into a new studio. You will design systems from first principles, see them go live for real clients, and work on our own products too."}
          </p>
          <div className="row">
            <Link className="btn btn-p" href="/careers/#roles">See open roles</Link>
            <a className="btn btn-s" href="#internships">Internships</a>
          </div>
        </div>
      </section>
      <section>
        <div className="wrap">
          <div className="sec-head">
            <p className="eyebrow">Why Sunyaverse</p>
            <h2>What you get here</h2>
          </div>
          <div className="perks">
            <div className="perk">
              <h3>Real ownership</h3>
              <p>You will own whole pieces of work, not tickets in a queue.</p>
            </div>
            <div className="perk">
              <h3>Mentoring</h3>
              <p>Weekly time with senior engineers and a learning budget for courses and certifications.</p>
            </div>
            <div className="perk">
              <h3>Products and clients</h3>
              <p>Split your time between client projects and our own ventures.</p>
            </div>
            <div className="perk">
              <h3>A calm studio</h3>
              <p>A new Canberra office built for focused work, with flexible hours and hybrid days.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="band" id="roles">
        <div className="wrap" style={{ display: "grid", gap: "var(--s4)" }}>
          <div className="sec-head">
            <p className="eyebrow">Open roles</p>
            <h2>Join the team</h2>
            <p className="lead">All roles are based in Canberra. Australian work rights required.</p>
          </div>
          <div id="jobs" style={{ display: "grid", gap: "var(--s4)" }}>
            <details className="job">
              <summary>
                <div style={{ display: "grid", gap: "var(--s2)" }}>
                  <h3>{"IT Support & Systems Engineer"}</h3>
                  <div className="meta">
                    <span className="tag">Canberra</span>
                    <span className="tag">Full-time</span>
                    <span className="tag">Level 1–2</span>
                  </div>
                </div>
                <span className="chev">+</span>
              </summary>
              <div className="body">
                <p>Keep client systems running and secure, on-site across Canberra and remotely.</p>
                <h4>What you’ll do</h4>
                <ul>
                  <li>Resolve helpdesk requests for client teams</li>
                  <li>Set up Microsoft 365, devices and networks</li>
                  <li>Apply patches and Essential Eight controls</li>
                  <li>Document environments clearly</li>
                </ul>
                <h4>What you’ll bring</h4>
                <ul>
                  <li>Experience in IT support or a related qualification</li>
                  <li>Microsoft 365 and Windows administration</li>
                  <li>A driver licence for site visits</li>
                  <li>Patience and a calm, helpful manner</li>
                </ul>
                <p>
                  {"To apply, email your CV and a short note to "}
                  <strong style={{ color: "var(--ivory)" }}>careers@sunyaverse.com.au</strong>
                  {" with the role title in the subject line."}
                </p>
                <div className="row">
                  <Link className="btn btn-p" href="/careers/it-support-systems-engineer/">View job and apply</Link>
                </div>
              </div>
            </details>
          </div>
        </div>
      </section>
      <section id="internships">
        <div className="wrap">
          <div className="sec-head">
            <p className="eyebrow">Internships</p>
            <h2>Start your career from zero</h2>
            <p className="lead">
              {"For university and TAFE students, and recent graduates, who want real experience on live client projects and our own products in Canberra."}
            </p>
          </div>
          <div className="grid g4">
            <div className="card">
              <p className="eyebrow">Track</p>
              <h3>Software development</h3>
              <p>Build features for web and mobile apps with our developers, from first design to release.</p>
              <div className="tags">
                <span className="tag">React</span>
                <span className="tag">Node.js</span>
              </div>
            </div>
            <div className="card">
              <p className="eyebrow">Track</p>
              <h3>{"IT support & systems"}</h3>
              <p>Set up Microsoft 365, devices and networks for clients, and learn how real IT environments are run and secured.</p>
              <div className="tags">
                <span className="tag">Microsoft 365</span>
                <span className="tag">Security</span>
              </div>
            </div>
            <div className="card">
              <p className="eyebrow">Track</p>
              <h3>{"Data & analytics"}</h3>
              <p>Clean data, build dashboards and automate manual work for asset management and reporting projects.</p>
              <div className="tags">
                <span className="tag">Power BI</span>
                <span className="tag">Excel</span>
              </div>
            </div>
            <div className="card">
              <p className="eyebrow">Track</p>
              <h3>Digital marketing</h3>
              <p>Plan content, run social and email campaigns, and report on results for clients and Whats Happening Australia.</p>
              <div className="tags">
                <span className="tag">Social</span>
                <span className="tag">Analytics</span>
              </div>
            </div>
          </div>
          <div className="values" style={{ marginTop: "var(--s12)" }}>
            <div className="value">
              <h3>Who can apply</h3>
              <p>
                {"Students studying IT, computer science, engineering, data or marketing at a university or TAFE, and graduates who finished in the last two years. Australian work rights, or a student visa that allows work, required."}
              </p>
            </div>
            <div className="value">
              <h3>How it works</h3>
              <p>
                {"Around 10 to 12 weeks, two to three days a week, arranged around your study timetable. Internships run either as a course work placement through your university or TAFE, or as a paid internship."}
              </p>
            </div>
            <div className="value">
              <h3>What you get</h3>
              <p>
                {"A mentor who works with you every week, a real project you can show employers, and a reference at the end. Strong interns are first in line for graduate roles."}
              </p>
            </div>
            <div className="value">
              <h3>How to apply</h3>
              <p>Send your CV, the track you are interested in, your course and when you are available. Applications are open all year.</p>
            </div>
          </div>
          <div className="row" style={{ marginTop: "var(--s8)" }}>
            <Link className="btn btn-p" href="/contact/?role=Internship">Apply for an internship</Link>
          </div>
        </div>
      </section>
      <section>
        <div className="wrap">
          <div className="sec-head">
            <p className="eyebrow">Hiring process</p>
            <h2>Four steps, about two weeks</h2>
          </div>
          <div className="steps">
            <div className="step">
              <span className="n">1</span>
              <h3>Apply</h3>
              <p>Send your CV and a few lines on something you've built.</p>
            </div>
            <div className="step">
              <span className="n">2</span>
              <h3>Chat</h3>
              <p>A 30-minute call to get to know each other.</p>
            </div>
            <div className="step">
              <span className="n">3</span>
              <h3>Work sample</h3>
              <p>A small, paid practical task, or a walk-through of your past work.</p>
            </div>
            <div className="step">
              <span className="n">4</span>
              <h3>Meet the team</h3>
              <p>Visit the studio, meet everyone, then a decision within a week.</p>
            </div>
          </div>
          <p className="note" style={{ marginTop: "var(--s8)" }}>
            {"Don't see your role? Send an expression of interest through the contact page. If you like starting from zero, you'll fit right in."}
          </p>
        </div>
      </section>
    </>
  );
}
