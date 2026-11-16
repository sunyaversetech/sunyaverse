import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <p className="eyebrow">Error 404</p>
          <h1>Back to zero</h1>
          <p className="lead">That page doesn't exist. Let's start again from the beginning.</p>
          <div className="row">
            <Link className="btn btn-p" href="/">Go to the homepage</Link>
          </div>
        </div>
      </section>
    </>
  );
}
