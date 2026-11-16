"use client";

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import { CAL, CAL_PAGE_URL } from "@/lib/site";

/* Inline Cal.com calendar for booking the free consultation. */
export default function CalBooking() {
  useEffect(() => {
    let cancelled = false;
    (async () => {
      const cal = await getCalApi({ namespace: CAL.namespace });
      if (!cancelled) cal("ui", CAL.ui);
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <>
      <div className="cal-embed">
        <Cal
          namespace={CAL.namespace}
          calLink={CAL.link}
          config={CAL.config}
          style={{ width: "100%", height: "100%", overflow: "scroll" }}
        />
      </div>
      <p className="cal-fallback">
        Calendar not loading?{" "}
        <a href={CAL_PAGE_URL} target="_blank" rel="noopener">
          Open the booking page ↗
        </a>
      </p>
    </>
  );
}
