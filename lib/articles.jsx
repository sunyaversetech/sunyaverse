/* Insights articles. Each Body is the article text; add a new object to publish a new guide. */
import Link from "next/link";

export const ARTICLES = [
  {
    slug: "essential-eight-small-business",
    category: "Security",
    title: "The Essential Eight Explained for Small Businesses | Sunyaverse",
    desc: "What the ACSC Essential Eight means for Australian small businesses, and the four steps to start with. A plain-English guide from Sunyaverse, Canberra.",
    h1: "The Essential Eight, explained for small businesses",
    lead: "The Australian Cyber Security Centre's Essential Eight is the baseline most Australian organisations are measured against. Here is what each control means in practice.",
    meta: "Security · 5 min read",
    published: "2026-11-05",
    publishedLabel: "5 November 2026",
    Body: () => (
      <>
      <p>
        {"The Essential Eight is a set of mitigation strategies published by the Australian Signals Directorate's Australian Cyber Security Centre. Larger organisations and government suppliers are often asked about their maturity level. Small businesses benefit from the same controls."}
      </p>
      <p>
        <strong>The eight controls:</strong>
        {" application control, patching applications, configuring Microsoft Office macro settings, user application hardening, restricting administrative privileges, patching operating systems, multi-factor authentication and regular backups."}
      </p>
      <p>
        {"Where to start: turn on multi-factor authentication for email and finance systems, set automatic updates on every device, take daily backups and test that you can restore them, and remove admin rights from everyday user accounts. Those four steps close most of the doors attackers actually use."}
      </p>
      <p>Check the current guidance at cyber.gov.au, as the ACSC updates its maturity model over time.</p>
      <p className="sm">
        {"This guide is general information, not advice for your specific situation. "}
        <Link href="/contact/">Talk to us</Link>
        {" about your business."}
      </p>
      </>
    ),
  },
  {
    slug: "cloud-migration-questions",
    category: "Cloud",
    title: "Moving to the Cloud: 5 Questions to Ask First | Sunyaverse",
    desc: "Before you migrate to Microsoft 365, Google Workspace or AWS, answer these five questions. A plain-English cloud guide for Australian businesses.",
    h1: "Moving to the cloud: five questions to ask first",
    lead: "Cloud can save money and headaches, or it can add both. Answer these before you migrate anything.",
    meta: "Cloud · 4 min read",
    published: "2026-11-05",
    publishedLabel: "5 November 2026",
    Body: () => (
      <>
      <p>
        <strong>1. What are we actually moving?</strong>
        {" List every system, file share and piece of software. Most migrations go wrong on the item nobody remembered."}
      </p>
      <p>
        <strong>2. Where must the data live?</strong>
        {" Some contracts and sectors require data to stay in Australia. Choose Australian regions where that applies."}
      </p>
      <p>
        <strong>3. What will it cost each month?</strong>
        {" Cloud swaps a big upfront cost for an ongoing one. Model at least three years."}
      </p>
      <p>
        <strong>4. Who manages accounts and access?</strong>
        {" Decide who can add and remove users before day one."}
      </p>
      <p>
        <strong>5. How do we get out?</strong>
        {" Make sure you can export your data in a usable format if you ever need to leave."}
      </p>
      <p className="sm">
        {"This guide is general information, not advice for your specific situation. "}
        <Link href="/contact/">Talk to us</Link>
        {" about your business."}
      </p>
      </>
    ),
  },
  {
    slug: "asset-register-guide",
    category: "Data",
    title: "How to Set Up an Asset Register for Your Business | Sunyaverse",
    desc: "What an asset register is, which columns it needs, and when to move from a spreadsheet to an asset management tool. A practical guide from Sunyaverse.",
    h1: "Asset registers: the spreadsheet that runs your business",
    lead: "Knowing what you own, where it is and when it needs servicing saves money every year. Here is how to set one up properly.",
    meta: "Data · 4 min read",
    published: "2026-11-05",
    publishedLabel: "5 November 2026",
    Body: () => (
      <>
      <p>
        {"An asset register records every significant item your organisation owns: laptops, vehicles, kitchen equipment, licences. For each one, capture an ID, location, owner, purchase date and cost, warranty end date and next service date."}
      </p>
      <p>
        {"Start in a shared spreadsheet with those columns and agree who updates it. Once it holds more than a few hundred items, or several people edit it, move to a proper asset management tool with reminders and a history of changes."}
      </p>
      <p>The payoff: fewer surprise failures, cleaner insurance claims, better depreciation records at tax time and a budget you can plan.</p>
      <p className="sm">
        {"This guide is general information, not advice for your specific situation. "}
        <Link href="/contact/">Talk to us</Link>
        {" about your business."}
      </p>
      </>
    ),
  },
];

export const articleBySlug = (slug) => ARTICLES.find((a) => a.slug === slug);
