import Link from "next/link";

export default function Overview(params) {
  return (
    <>
      <div className="container my-3 my-lg-5 ">
        <div className="row display-1 text-poppins text-uppercase">
          <div className="col-md-3">listen</div>
          <div className="col-md-3"></div>
          <div className="col-md-3">new</div>
          <div className="col-md-3"></div>
          <div className="col-md-4">podcast</div>
          <div className="col-md-4"></div>
          <div className="col-md-4 text-md-end">order</div>
        </div>
        <div className="row my-4 text-dm">
          <div className="col-md-6">
            <p className="opacity-50 pe-3 fs-6">
              We are a team of writers and bloggers who are passionate about
              sharing our thoughts and ideas with the world. Our Mission Our
              mission is to provide high-quality content that informs, educates,
              and inspires our readers.
            </p>
            <div className="col-lg-4 d-grid">
              <Link href="/contact" className="d-grid">
                <button className="btn btn-outline-light btn-sm my-3 py-2 rounded">
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
