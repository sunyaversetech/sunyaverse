/* Site-wide settings. Change contact details or the Cal.com link here. */

export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://sunyaverse.com.au").replace(/\/$/, "");

export const CONTACT = {
  email: "hello@sunyaverse.com.au",
  phone: "+61 451 996 409",
  phoneHref: "tel:+61451996409",
  careersEmail: "careers@sunyaverse.com.au",
  supportEmail: "support@sunyaverse.com.au",
  founderEmail: "dibas.paudel@sunyaverse.com.au",
};

/* Cal.com: set NEXT_PUBLIC_CAL_LINK to your event, e.g. "sunyaverse/free-consultation"
   (the part after cal.com/ in your booking link). */
export const CAL = {
  link: process.env.NEXT_PUBLIC_CAL_LINK || "sunyaverse/free-consultation",
  namespace: "free-consultation",
  config: { layout: "month_view", theme: "dark" },
  ui: {
    theme: "dark",
    layout: "month_view",
    hideEventTypeDetails: false,
    cssVarsPerTheme: {
      dark: { "cal-brand": "#FFFFFF" },
      light: { "cal-brand": "#000000" },
    },
  },
};

export const CAL_PAGE_URL = `https://cal.com/${CAL.link}`;

export const TOPICS = {
  software: "Software or app development",
  cloud: "Cloud and IT infrastructure",
  data: "Data and asset analytics",
  marketing: "Digital marketing technology",
  strategy: "IT strategy and advice",
  managed: "Managed IT support",
};
