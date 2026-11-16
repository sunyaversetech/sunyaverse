"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const NAV = [
  ["/", "Home"],
  ["/services/", "Services"],
  ["/about/", "About"],
  ["/ventures/", "Ventures"],
  ["/insights/", "Insights"],
  ["/careers/", "Careers"],
];

export default function SiteHeader() {
  const raw = usePathname() || "/";
  const pathname = raw.endsWith("/") ? raw : `${raw}/`;
  const [open, setOpen] = useState(false);

  // Close the mobile menu on navigation.
  useEffect(() => setOpen(false), [pathname]);

  // Close on Escape or a click outside the menu.
  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    const onClick = (e) => {
      if (!e.target.closest("#nav") && !e.target.closest("#menuBtn")) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("click", onClick);
    };
  }, [open]);

  const current = (href) => (href === "/" ? pathname === "/" : pathname.startsWith(href)) ? "page" : undefined;

  return (
    <header className="hdr">
      <div className="wrap">
        <Link className="brand" href="/" aria-label="Sunyaverse home">
          <svg className="mk">
            <use href="#mark" />
          </svg>
          <span>SUNYAVERSE</span>
        </Link>
        <button
          className="menu-btn"
          id="menuBtn"
          type="button"
          aria-expanded={open}
          aria-controls="nav"
          onClick={() => setOpen((o) => !o)}
        >
          MENU
        </button>
        <nav className={open ? "nav open" : "nav"} id="nav" aria-label="Main">
          {NAV.map(([href, label]) => (
            <Link key={href} href={href} aria-current={current(href)} onClick={() => setOpen(false)}>
              {label}
            </Link>
          ))}
          <Link className="btn btn-p" href="/contact/" aria-current={current("/contact/")} onClick={() => setOpen(false)}>
            Start a project
          </Link>
        </nav>
      </div>
    </header>
  );
}
