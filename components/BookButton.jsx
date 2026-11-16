"use client";

import { getCalApi } from "@calcom/embed-react";
import { CAL } from "@/lib/site";

/* "Book a free consultation": opens the Cal.com booking pop-up.
   Without JavaScript, or if Cal.com can't load, it goes to the booking calendar on the contact page. */
export default function BookButton({
  className = "btn btn-p",
  topic,
  children = "Book a free consultation",
}) {
  const href = `/contact/${topic ? `?topic=${topic}` : ""}#book`;

  async function onClick(e) {
    if (
      e.defaultPrevented ||
      e.button !== 0 ||
      e.metaKey ||
      e.ctrlKey ||
      e.shiftKey ||
      e.altKey
    )
      return;
    e.preventDefault();
    try {
      const cal = await getCalApi({ namespace: CAL.namespace });
      cal("ui", CAL.ui);
      cal("modal", { calLink: CAL.link, config: CAL.config });
    } catch {
      window.location.href = href;
    }
  }

  return (
    <a className={className} href={href} onClick={onClick}>
      {children}
    </a>
  );
}
