import Link from "next/link";

export default function Header(params) {
  return (
    <>
      <div className="sticky-top bg-grey shadow-sm">
        <nav className="container navbar navbar-expand-lg navbar-dark">
          <div class="container-fluid py-2">
            <Link class="navbar-brand text-poppins text-uppercase" href="/">
              PodcastWe
            </Link>
            <button
              class="navbar-toggler border-0 px-0"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasExample"
              aria-controls="offcanvasExample"
            >
              <i class="fa-solid fa-bars"></i>
            </button>

            <div
              class="offcanvas offcanvas-start p-2 bg-grey d-lg-none"
              tabindex="-1"
              id="offcanvasExample"
              aria-labelledby="offcanvasExampleLabel"
            >
              <div class="offcanvas-header">
                <h5
                  class="offcanvas-title text-light"
                  id="offcanvasExampleLabel"
                >
                  PODCASTWE
                </h5>
                <i
                  class="fa-solid fa-xmark fa-lg text-light"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></i>
              </div>
              <div className="offcanvas-body">
                <ul className="navbar-nav mb-2 mb-lg-0 ms-auto">
                  {[
                    { href: "/", label: "Home" },
                    { href: "/genre", label: "Genre" },
                    { href: "/news", label: "News" },
                    { href: "/trending", label: "Trending" },
                    { href: "/events", label: "Events" },
                    { href: "/about", label: "About Us" },
                  ].map(({ href, label }, index) => (
                    <li className="nav-item" key={index}>
                      <Link className="nav-link fs-5 fw-bold my-2" href={href}>
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mb-2 mb-lg-0 ms-auto">
                {[
                  { href: "/", label: "Home" },
                  { href: "/genre", label: "Genre" },
                  { href: "/news", label: "News" },
                  { href: "/trending", label: "Trending" },
                  { href: "/events", label: "Events" },
                  { href: "/about", label: "About Us" },
                ].map(({ href, label }, index) => (
                  <li className="nav-item" key={index}>
                    <Link className="nav-link" href={href}>
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
