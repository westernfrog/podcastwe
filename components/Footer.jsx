import Link from "next/link";

export default function Footer(params) {
  return (
    <>
      <div class="container">
        <footer class="row py-5">
          <div class="col-md-4">
            <Link
              href="/"
              class="d-flex align-items-center mb-3 link-light text-decoration-none"
            >
              <h6>PodcastWe</h6>
            </Link>
            <p class="text-muted">
              We are a team of passionate writers dedicated to creating
              informative and engaging content. Our mission is to provide
              high-quality content that informs, educates, and inspires. We are
              committed to creating a welcoming and inclusive community. Welcome
              to our blog!
            </p>
          </div>

          <div className="col d-lg-block d-none"></div>
          <div className="col d-lg-block d-none"></div>

          <div class="col my-5 my-lg-0">
            <h6>Navigation</h6>
            <ul class="nav flex-column">
              <li class="nav-item mb-2">
                <Link href="/" class="nav-link p-0 text-muted mx-0">
                  Home
                </Link>
              </li>
              <li class="nav-item mb-2">
                <Link href="/genre" class="nav-link p-0 text-muted mx-0">
                  Genre
                </Link>
              </li>
              <li class="nav-item mb-2">
                <Link href="/news" class="nav-link p-0 text-muted mx-0">
                  News
                </Link>
              </li>
              <li class="nav-item mb-2">
                <Link href="/trending" class="nav-link p-0 text-muted mx-0">
                  Trending
                </Link>
              </li>
            </ul>
          </div>

          <div class="col my-5 my-lg-0">
            <h6>Company</h6>
            <ul class="nav flex-column">
              <li class="nav-item mb-2">
                <Link href="about" class="nav-link p-0 text-muted mx-0">
                  About us
                </Link>
              </li>
              <li class="nav-item mb-2">
                <Link href="/contact" class="nav-link p-0 text-muted mx-0">
                  Contact
                </Link>
              </li>
              <li class="nav-item mb-2">
                <Link
                  href="/privacy-policy"
                  class="nav-link p-0 text-muted mx-0"
                >
                  Privacy Policy
                </Link>
              </li>
              <li class="nav-item mb-2">
                <Link
                  href="/terms-conditions"
                  class="nav-link p-0 text-muted mx-0"
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
