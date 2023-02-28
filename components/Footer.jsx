import Link from "next/link";

export default function Footer(params) {
  return (
    <>
      <div className="container border-top">
        <footer className="row py-5">
          <div className="col-md-4">
            <Link
              href="/"
              className="d-flex align-items-center mb-3 link-light text-decoration-none"
            >
              <h6>PODCASTWE</h6>
            </Link>
            <p className="text-muted">
              We are a team of passionate writers dedicated to creating
              informative and engaging content. Our mission is to provide
              high-quality content that informs, educates, and inspires. We are
              committed to creating a welcoming and inclusive community. Welcome
              to our blog!
            </p>
          </div>

          <div className="col d-lg-block d-none"></div>
          <div className="col d-lg-block d-none"></div>

          <div className="col my-5 my-lg-0">
            <h6>Navigation</h6>
            <ul className="nav flex-column mx-0">
              <li className="nav-item mb-2">
                <Link href="/" className="nav-link p-0 text-muted mx-0">
                  Home
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link href="/genre" className="nav-link p-0 text-muted mx-0">
                  Genre
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link href="/news" className="nav-link p-0 text-muted mx-0">
                  News
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link href="/trending" className="nav-link p-0 text-muted mx-0">
                  Trending
                </Link>
              </li>
            </ul>
          </div>

          <div className="col my-5 my-lg-0">
            <h6>Company</h6>
            <ul className="nav flex-column mx-0">
              <li className="nav-item mb-2">
                <Link href="about" className="nav-link p-0 text-muted mx-0">
                  About us
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link href="/contact" className="nav-link p-0 text-muted mx-0">
                  Contact
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link
                  href="/privacy-policy"
                  className="nav-link p-0 text-muted mx-0"
                >
                  Privacy Policy
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link
                  href="/terms-conditions"
                  className="nav-link p-0 text-muted mx-0"
                >
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </>
  );
}
