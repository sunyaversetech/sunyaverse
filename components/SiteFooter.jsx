import Link from "next/link";
import Year from "@/components/Year";

export default function SiteFooter() {
  return (
    <footer className="ftr">
      <div className="wrap">
        <div className="fgrid">
          <div className="fbrand">
            <Link href="/" aria-label="Sunyaverse home">
              <svg className="flogo" viewBox="0 0 600 150" role="img" aria-label="Sunyaverse logo">
                <g transform="translate(0 10)">
                  <path d="M98.64 49.65A40 40 0 1 1 70.35 21.36" fill="none" strokeWidth="13"></path>
                  <circle cx="88.28" cy="31.72" r="8.5"></circle>
                </g>
                <text className="w" x="150" y="86" fontSize="44" letterSpacing="16">SUNYAVERSE</text>
                <text className="t" x="152" y="126" fontSize="14" letterSpacing="6">FROM ZERO, EVERYTHING</text>
              </svg>
            </Link>
            <p>Technology consulting from Canberra, ACT.</p>
          </div>
          <div>
            <h4>Services</h4>
            <ul>
              <li>
                <Link href="/services/software-development-canberra/">{"Software & apps"}</Link>
              </li>
              <li>
                <Link href="/services/cloud-it-infrastructure-canberra/">{"Cloud & infrastructure"}</Link>
              </li>
              <li>
                <Link href="/services/data-analytics-asset-management/">{"Data & analytics"}</Link>
              </li>
              <li>
                <Link href="/services/digital-marketing-technology/">Marketing technology</Link>
              </li>
              <li>
                <Link href="/services/managed-it-cyber-security-canberra/">{"Managed IT & security"}</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4>Company</h4>
            <ul>
              <li>
                <Link href="/about/">About</Link>
              </li>
              <li>
                <Link href="/ventures/">Ventures</Link>
              </li>
              <li>
                <Link href="/insights/">Insights</Link>
              </li>
              <li>
                <Link href="/careers/">Careers</Link>
              </li>
              <li>
                <Link href="/contact/">Contact</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4>Ventures</h4>
            <ul>
              <li>
                <a href="https://whaustralia.com" target="_blank" rel="noopener">Whats Happening Australia ↗</a>
              </li>
              <li>
                <a href="https://www.pirkacanberra.com" target="_blank" rel="noopener">Pirka ↗</a>
              </li>
            </ul>
          </div>
        </div>
        <p className="ack">
          {"Sunyaverse acknowledges the Ngunnawal people as the Traditional Custodians of the land on which we work, and pays respect to Elders past and present."}
        </p>
        <div className="legal">
          <span>
            {"© "}
            <Year />
            {" Sunyaverse Pty Ltd · ABN [to be added] · Canberra, ACT"}
          </span>
          <span>
            <Link href="/privacy/">Privacy</Link>
            {" · "}
            <Link href="/terms/">Terms</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
