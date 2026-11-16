# Sunyaverse website (Next.js)

The Sunyaverse website, **sunya-verse.com**, built with Next.js (App Router). It keeps the same design, pages, URLs and SEO as the HTML site, and adds:

- **Cal.com booking** for the free consultation. Every "Book a free consultation" button opens the Cal.com pop-up, and the contact page has the calendar built in.
- **A working contact form** that emails each enquiry to you. Job applications go to the careers inbox.
- **Updated contact details**:
  - hello@sunyaverse.com.au
  - +61 451 996 409
  - careers@sunyaverse.com.au

## Run it on your computer

You need Node.js 20.9 or newer (download it from https://nodejs.org).

```bash
npm install
cp .env.example .env.local     # then fill in the values
npm run dev                    # open http://localhost:3000
```

## Set up Cal.com (free)

1. Sign up at https://cal.com.
2. Create an event type, for example **Free consultation**, 45 minutes.
3. Copy its link. For example, `https://cal.com/sunyaverse/free-consultation`.
4. Set `NEXT_PUBLIC_CAL_LINK` to the part after `cal.com/`. In this example, that is `sunyaverse/free-consultation`.
5. In Cal.com, connect your Google or Outlook calendar so bookings don't clash. Add a Google Meet or Zoom link as the location.

## Set up the contact form email (Resend, free tier)

1. Sign up at https://resend.com and add your domain, **sunyaverse.com.au**. Resend shows the DNS records to add.
2. Create an API key and set it as `RESEND_API_KEY`.
3. Check the email addresses below. They are already set to your addresses:
   - `CONTACT_FROM_EMAIL`: who the email appears to come from. It must be on the domain you verified.
   - `CONTACT_TO_EMAIL`: where enquiries go.
   - `CAREERS_TO_EMAIL`: where job applications go.

If no key is set, the form shows visitors your email address and phone number instead, so you never lose an enquiry.

## Deploy (Vercel, free)

1. Put this folder in a GitHub repository.
2. Go to https://vercel.com, choose **New Project**, then import the repository. Vercel detects Next.js automatically.
3. Add the environment variables from `.env.example` under **Settings → Environment Variables**.
4. Add your domain, sunya-verse.com, under **Settings → Domains**, and update your DNS as Vercel shows you.

After launch, submit `https://sunya-verse.com/sitemap.xml` in Google Search Console.

## Where to edit things

| What | File |
|---|---|
| Email, phone, Cal.com settings | `lib/site.js` |
| Service pages (copy, FAQs, SEO) | `lib/services.jsx` |
| Insights articles | `lib/articles.jsx` |
| Contact page FAQs | `lib/contact-faqs.js` |
| Home, About, Ventures, Careers… | `app/<page>/page.jsx` |
| Header menu / footer | `components/SiteHeader.jsx`, `components/SiteFooter.jsx` |
| Styles | `app/globals.css` |
| Contact form sending | `app/api/contact/route.js` |
| Search engines | `app/sitemap.js`, `app/robots.js`, `lib/seo.js` |

## Pages

| URL | Page |
|---|---|
| `/` | Home |
| `/services/` | Services overview |
| `/services/<6 service pages>/` | One page per service |
| `/about/` | About |
| `/ventures/` | Ventures |
| `/insights/` | Insights index |
| `/insights/<3 guides>/` | One page per guide |
| `/careers/` | Careers and internships |
| `/careers/it-support-systems-engineer/` | IT Support & Systems Engineer job |
| `/contact/` | Contact, with booking and enquiry form |
| `/contact/thanks/` | Thank-you page |
| `/privacy/` | Privacy policy |
| `/terms/` | Terms of use |
| any other URL | 404 page |
