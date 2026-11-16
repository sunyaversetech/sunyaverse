import Link from "next/link";

/* items: [[label, href], ...]; the last item is the current page. */
export default function Breadcrumbs({ items }) {
  return (
    <nav className="crumbs" aria-label="Breadcrumb">
      <ol>
        {items.map(([label, href], i) =>
          i < items.length - 1 ? (
            <li key={href}>
              <Link href={href}>{label}</Link>
            </li>
          ) : (
            <li key={href} aria-current="page">
              {label}
            </li>
          )
        )}
      </ol>
    </nav>
  );
}
