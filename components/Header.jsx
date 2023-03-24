import Link from "next/link";
import Contact from "./Contact";

export default function Header() {
  return (
    <>
      <div className="sticky-top bg-nav header-shadow">
        <nav className="container navbar navbar-expand-lg navbar-dark">
          <div className="container-fluid py-1 px-0">
            <Link
              className="navbar-brand text-uppercase text-poppins text-shadow-3 mb-0"
              href="/"
            >
              Podcastwe
            </Link>
            <button
              className="navbar-toggler border-0 px-0"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasExample"
              aria-controls="offcanvasExample"
              style={{ boxShadow: "none" }}
            >
              <i className="fa-solid fa-bars"></i>
            </button>

            <div
              className="offcanvas offcanvas-start bg-grey d-lg-none py-1"
              tabIndex="-1"
              id="offcanvasExample"
              aria-labelledby="offcanvasExampleLabel"
              style={{
                maxWidth: "270px",
              }}
            >
              <div className="offcanvas-header">
                <h5
                  className="offcanvas-title text-light"
                  id="offcanvasExampleLabel"
                >
                  PODCASTWE
                </h5>
                <button
                  className="navbar-toggler border-0 px-0"
                  type="button"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                  style={{ boxShadow: "none" }}
                >
                  <i className="fa-solid fa-xmark text-light"></i>
                </button>
              </div>
              <div className="offcanvas-body bg-grey">
                <ul className="navbar-nav mb-2 mb-lg-0 ms-auto">
                  {[
                    { href: "/", label: "Home" },
                    { href: "/latest", label: "Latest" },
                    { href: "#news", label: "News" },
                    { href: "#trending", label: "Trending" },
                    { href: "/about", label: "About Us" },
                  ].map(({ href, label }, index) => (
                    <li className="nav-item" key={index}>
                      <Link
                        className="nav-link fs-5 fw-bold my-2 text-shadow-3"
                        href={href}
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                  <li className="nav-item">
                    <p
                      className="nav-link fs-5 fw-bold my-2"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                      Contact
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mb-2 mb-lg-0 ms-auto">
                {[
                  { href: "/", label: "Home" },
                  { href: "/latest", label: "Latest" },
                  { href: "/#news", label: "News" },
                  { href: "/#trending", label: "Trending" },
                  { href: "/about", label: "About Us" },
                ].map(({ href, label }, index) => (
                  <li className="nav-item" key={index}>
                    <Link className="nav-link text-shadow-4" href={href}>
                      {label}
                    </Link>
                  </li>
                ))}
                <li className="nav-item">
                  <p
                    className="nav-link fs-7 text-shadow-4"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    Contact
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <Contact />
    </>
  );
}
