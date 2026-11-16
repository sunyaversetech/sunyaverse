import { Inter, Noto_Sans_Devanagari } from "next/font/google";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const devanagari = Noto_Sans_Devanagari({
  subsets: ["devanagari"],
  weight: ["300"],
  variable: "--font-deva",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Sunyaverse",
  applicationName: "Sunyaverse",
  authors: [{ name: "Sunyaverse Pty Ltd" }],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  other: { "geo.region": "AU-ACT", "geo.placename": "Canberra" },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#000000",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-AU" className={`${inter.variable} ${devanagari.variable}`}>
      <body>
        <a className="skip" href="#main">Skip to content</a>
        <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true">
          <defs>
            <symbol id="mark" viewBox="0 0 120 120">
              <path d="M98.64 49.65A40 40 0 1 1 70.35 21.36" fill="none" stroke="currentColor" strokeWidth="13" />
              <circle cx="88.28" cy="31.72" r="8.5" fill="currentColor" />
            </symbol>
          </defs>
        </svg>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
