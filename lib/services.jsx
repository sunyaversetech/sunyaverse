/* Service pages: copy, SEO metadata and FAQs. Edit here to change /services/<slug>/ pages. */

export const SERVICES = [
  {
    id: "software",
    slug: "software-development-canberra",
    name: "Software & app development",
    title: "Software & App Development in Canberra | Sunyaverse",
    desc: "Custom web apps, mobile apps, booking and payment systems built in Canberra. Sunyaverse designs, builds and supports software around how your business works.",
    h1: "Software and app development in Canberra",
    lead: "Custom web apps, mobile apps and business systems, designed around the way your business actually works.",
    who: "For Canberra businesses and organisations that have outgrown spreadsheets, paper forms or off-the-shelf tools that almost fit. We build the software you need, and only that.",
    icon: <svg aria-hidden="true" viewBox="0 0 24 24">
  <polyline points="8 6 3 12 8 18"></polyline>
  <polyline points="16 6 21 12 16 18"></polyline>
</svg>,
    body: [
      "Most software projects go wrong in the first week, when someone writes a feature list before anyone understands the work. We start from zero: we sit with the people who will use the system, map how the work flows today, and agree what success looks like before we write any code.",
      "We build in short stages and show you working software every week or two, so you can change direction early and cheaply. Web applications use modern, widely supported tools such as React and Node.js. Mobile apps use React Native, so one codebase runs on both iPhone and Android.",
      "When the system goes live we train your team, hand over the code and documentation, and stay on to support and improve it. You own what we build for you.",
    ],
    items: ["Web applications and customer portals", "iOS and Android apps (React Native)", "Booking, ordering and payment systems", "Integrations between the tools you already use", "Websites that are fast, accessible and easy to update"],
    tags: ["Web", "Mobile", "Integrations"],
    faqs: [
      ["How much does a custom app cost?", "It depends on what it needs to do. After a free consultation and a short discovery stage, we give you a fixed quote and timeline in Australian dollars, so you know the cost before work starts."],
      ["Do we own the code?", "Yes. Unless we agree otherwise in writing, you own the code and data we build for you, and we hand over documentation and access at the end of the project."],
      ["Can you connect our existing tools?", "Usually. We regularly connect booking, payment, accounting, email and CRM tools so information is entered once and flows everywhere it is needed."],
    ],
  },
  {
    id: "cloud",
    slug: "cloud-it-infrastructure-canberra",
    name: "Cloud & IT infrastructure",
    title: "Cloud & IT Infrastructure Services in Canberra | Sunyaverse",
    desc: "Microsoft 365, Google Workspace, Azure and AWS set up securely for Canberra businesses. Migrations, networks, backups and new-staff device setup.",
    h1: "Cloud and IT infrastructure in Canberra",
    lead: "Microsoft 365, Google Workspace, Azure and AWS, set up securely and sized to your business.",
    who: "For small and medium organisations moving off old servers, opening a new office, or tired of IT that only one person understands.",
    icon: <svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M7 18h10a4 4 0 0 0 .5-7.97A6 6 0 0 0 6 9.5 4.25 4.25 0 0 0 7 18z"></path>
</svg>,
    body: [
      "We plan migrations so nothing is forgotten: every mailbox, shared drive, application and login is listed before anything moves. Where your contracts or sector require it, we keep data in Australian cloud regions.",
      "We set up networks, Wi-Fi and devices for new offices, and we make new-staff setup a repeatable checklist rather than a scramble. Backups are automatic, tested and documented, so you can restore files when you need to.",
      "Every environment we build is written up in plain English, so your team, or another provider, can understand it.",
    ],
    items: ["Microsoft 365 and Google Workspace setup and migration", "Azure and AWS hosting in Australian regions", "Networks, Wi-Fi and office fit-out technology", "Backup and disaster recovery", "Device setup and management for new staff"],
    tags: ["Microsoft 365", "Azure", "AWS"],
    faqs: [
      ["How long does a Microsoft 365 migration take?", "For a small business, typically one to three weeks from planning to cut-over, depending on the number of mailboxes and how much data needs to move. We confirm the timeline in your quote."],
      ["Will our email go down during the move?", "We plan the cut-over for a quiet period and keep downtime to a minimum, usually an evening or weekend window."],
      ["Can our data stay in Australia?", "Yes. Microsoft, Google and AWS all offer Australian data centres, and we choose them where your obligations require it."],
    ],
  },
  {
    id: "data",
    slug: "data-analytics-asset-management",
    name: "Data & asset analytics",
    title: "Data Analytics & Asset Management Systems | Sunyaverse",
    desc: "Asset registers, maintenance planning, Power BI dashboards and automation. We turn spreadsheets into reliable data and decisions for Canberra organisations.",
    h1: "Data analytics and asset management",
    lead: "Turn spreadsheets into dashboards and decisions, with clean data you can trust.",
    who: "For organisations that manage equipment, vehicles, facilities or stock, and for teams that spend hours each week copying numbers between spreadsheets.",
    icon: <svg aria-hidden="true" viewBox="0 0 24 24">
  <line x1="4" x2="20" y1="20" y2="20"></line>
  <rect height="7" width="3" x="6" y="11"></rect>
  <rect height="11" width="3" x="11" y="7"></rect>
  <rect height="5" width="3" x="16" y="13"></rect>
</svg>,
    body: [
      "We build asset registers that record what you own, where it is, who looks after it and when it needs servicing, and we connect them to maintenance reminders so nothing is missed.",
      "We clean and combine data from the systems you already use, then build dashboards in tools such as Power BI or Looker Studio that show the numbers that matter, refreshed automatically.",
      "Where people re-type the same information into several places, we automate it. The result is fewer errors, faster reporting and more time for the work itself.",
    ],
    items: ["Asset registers and maintenance planning", "Power BI and Looker Studio dashboards", "Data cleaning, migration and reporting", "Process automation to remove manual entry"],
    tags: ["Power BI", "Asset management", "Automation"],
    faqs: [
      ["Do we need special software for an asset register?", "Not at first. A well-structured shared spreadsheet works for a few hundred items. When you grow beyond that, we help you move to a dedicated tool with reminders and history."],
      ["Can you work with our existing spreadsheets?", "Yes. Most projects start with the spreadsheets you already have. We clean them up and build from there."],
      ["Which dashboard tools do you use?", "Usually Microsoft Power BI or Google Looker Studio, depending on what your organisation already uses."],
    ],
  },
  {
    id: "marketing",
    slug: "digital-marketing-technology",
    name: "Digital marketing technology",
    title: "Digital Marketing Technology, CRM & SEO | Sunyaverse",
    desc: "Websites, CRM, email marketing, analytics and SEO foundations that work together. Marketing technology for Canberra businesses, built by Sunyaverse.",
    h1: "Digital marketing technology",
    lead: "The systems behind your marketing: websites, CRM, email and analytics that work together.",
    who: "For businesses and community organisations that want more enquiries from their website and social channels, and want to know which marketing actually works.",
    icon: <svg aria-hidden="true" viewBox="0 0 24 24">
  <circle cx="12" cy="12" r="2"></circle>
  <path d="M7.5 7.5a6.4 6.4 0 0 0 0 9M16.5 7.5a6.4 6.4 0 0 1 0 9M4.6 4.6a10.5 10.5 0 0 0 0 14.8M19.4 4.6a10.5 10.5 0 0 1 0 14.8"></path>
</svg>,
    body: [
      "Good marketing needs good plumbing. We build fast, accessible websites with search engine foundations in place from day one: clear page titles, structured data, sitemaps and pages written for the questions your customers ask.",
      "We set up CRM systems so every enquiry is captured and followed up, email marketing with automation for welcome and follow-up messages, and analytics that show where your customers come from.",
      "We run our own events platform, Whats Happening Australia, so the social content workflows and audience growth methods we set up for clients are ones we use every week.",
    ],
    items: ["CRM setup and customer databases", "Email marketing and automation", "Analytics and conversion tracking", "Social content workflows and scheduling", "Search engine visibility (SEO) foundations"],
    tags: ["CRM", "Email", "Analytics"],
    faqs: [
      ["Do you do SEO?", "We build the technical SEO foundations into every website: page titles and descriptions, structured data, sitemaps, speed and mobile friendliness. We also help you plan content and set up Google Search Console and Google Business Profile."],
      ["Which CRM should we use?", "It depends on your size and budget. We give you an independent recommendation, set it up, and train your team to use it."],
      ["Can you manage our social media?", "We set up the workflows, templates and scheduling tools, and train your team. Ask us if you need ongoing campaign support."],
    ],
  },
  {
    id: "strategy",
    slug: "it-strategy-consulting-canberra",
    name: "IT strategy & consulting",
    title: "IT Strategy & Technology Consulting in Canberra | Sunyaverse",
    desc: "Independent IT advice for Canberra businesses: technology reviews, roadmaps, software selection and vendor quote reviews, with a budget you can act on.",
    h1: "IT strategy and technology consulting in Canberra",
    lead: "Independent advice on what to buy, build or retire, with a roadmap and budget you can act on.",
    who: "For owners and managers making a technology decision they will live with for years, and for anyone holding a vendor quote they are not sure about.",
    icon: <svg aria-hidden="true" viewBox="0 0 24 24">
  <circle cx="12" cy="12" r="9"></circle>
  <polygon points="15.5 8.5 13.5 13.5 8.5 15.5 10.5 10.5"></polygon>
</svg>,
    body: [
      "We start with a review of what you have today: systems, costs, risks and the problems your people work around. Then we write a roadmap in plain English that says what to do first, what it will cost and what to leave alone.",
      "When you are choosing software, we compare options against your real requirements, not a feature checklist, and review vendor quotes so you know what you are paying for.",
      "Because we are not tied to a vendor, our advice includes the cheaper option when it is the right one, even when that means a smaller project for us.",
    ],
    items: ["Technology reviews and roadmaps", "Software selection and vendor quote reviews", "Digital transformation planning", "Project and technical leadership"],
    tags: ["Roadmaps", "Vendor review"],
    faqs: [
      ["How is advisory work charged?", "By the hour, or as a fixed-price review for a defined scope. We agree the approach before we start."],
      ["Do you sell software?", "No. We recommend what fits your needs and budget, and we will tell you when an off-the-shelf tool is enough."],
      ["Can you lead a project for us?", "Yes. We can act as your technical lead, working with your team and other suppliers."],
    ],
  },
  {
    id: "managed",
    slug: "managed-it-cyber-security-canberra",
    name: "Managed IT & cyber security",
    title: "Managed IT Support & Cyber Security in Canberra | Sunyaverse",
    desc: "Helpdesk support, patching, monitoring and Essential Eight security uplift for Canberra businesses, for a predictable monthly fee.",
    h1: "Managed IT support and cyber security in Canberra",
    lead: "We look after your systems day to day and keep them secure against the Essential Eight.",
    who: "For organisations without a full-time IT person, or whose IT person needs backup, and for suppliers asked about their cyber security by government or larger clients.",
    icon: <svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M12 3l8 3v6c0 4.5-3.4 8.2-8 9-4.6-.8-8-4.5-8-9V6z"></path>
  <polyline points="9 12 11 14 15 10"></polyline>
</svg>,
    body: [
      "For a predictable monthly fee we provide helpdesk support for your team, keep devices and software patched, monitor for problems and look after accounts as people join and leave. Response times are written into the agreement.",
      "We uplift your security against the Australian Cyber Security Centre's Essential Eight: multi-factor authentication, patching, backups, restricted admin rights and the other controls that stop most real attacks.",
      "We also run short, practical security awareness sessions so your team can spot phishing and know what to do when something looks wrong.",
    ],
    items: ["Helpdesk support for your team", "Patching, monitoring and updates", "Essential Eight security uplift", "Multi-factor authentication and access control", "Staff security awareness training"],
    tags: ["Support", "Security", "Essential Eight"],
    faqs: [
      ["What is the Essential Eight?", "A set of eight mitigation strategies published by the Australian Cyber Security Centre. It is the baseline many Australian organisations, and their suppliers, are measured against."],
      ["Do you offer on-site support?", "Yes, across Canberra and Queanbeyan, as well as remote support."],
      ["What does managed IT cost?", "A flat monthly fee based on the number of users and devices. We quote after a short review of your environment."],
    ],
  },
];

export const serviceBySlug = (slug) => SERVICES.find((s) => s.slug === slug);
export const serviceUrl = (s) => `/services/${s.slug}/`;
