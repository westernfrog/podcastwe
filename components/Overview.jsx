import Link from "next/link";

export default function Overview(params) {
  return (
    <>
      <div className="container my-3 my-lg-5">
        <div className="row display-1 text-poppins text-uppercase">
          <div className="col-sm text-start">listen</div>
          <div className="col-sm-4 d-lg-block d-none pic1 rounded-pill my-3 shadow image"></div>
          <div className="col-sm">new</div>
          <div className="col-sm-2 d-lg-block d-none pic3 rounded-pill my-3 shadow image"></div>
          <div className="col-sm text-start">podcast</div>
          <div className="col-sm-3 d-lg-block d-none pic2 rounded-pill my-3 shadow image"></div>
          <div className="col-sm">order</div>
        </div>

        <div className="row my-2 my-lg-5 text-dm">
          <div className="col-md-6">
            <p className="opacity-50 pe-3 fs-6">
              We are a team of writers and bloggers who are passionate about
              sharing our thoughts and ideas with the world. Our mission is to
              provide high-quality content that informs, educates, and inspires
              our readers.
            </p>
            <div className="col-lg-4 d-grid">
              <Link href="/contact" className="d-grid">
                <button className="btn btn-outline-light btn-sm btn-shrink my-3 py-2 rounded shadow-sm">
                  Get Started
                  <i
                    class="fa-solid fa-arrow-up-long ms-2"
                    style={{ transform: "rotate(45deg)" }}
                  ></i>
                </button>
              </Link>
            </div>
          </div>
          <div className="col-md-6 my-5 my-lg-0">
            <h1 className="fs-5">Top Podcast of the week</h1>
          </div>
        </div>
      </div>
    </>
  );
}
