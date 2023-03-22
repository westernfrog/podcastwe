import { Button } from "@nextui-org/react";

export default function Newsletter() {
  return (
    <div className="container text-dm my-5 pb-5 text-light">
      <div
        className="card rounded-6 p-3 p-lg-5 border-0 bg-shadow image"
        style={{ backgroundColor: "#111" }}
      >
        <div className="card-body">
          <h5 className="card-title fs-4 text-shadow-3">
            You will be updated with new episodes every day!
          </h5>
          <h6 className="card-subtitle mb-2 text-muted fs-7 fw-light text-dm">
            podcastwe.com
          </h6>

          <div className="col-lg-4 col-sm-6 mt-4">
            <p className="card-text fs-5 mb-0 text-poppins text-shadow-3">
              Subscribe to our NewsLetter
            </p>
            <div className="form-floating mb-2 text-black">
              <input
                type="email"
                className="form-control rounded-6 shadow"
                id="floatingInput"
                placeholder="john@doe.in"
                style={{ boxShadow: "none", opacity: "0.9" }}
              />
              <label htmlFor="floatingInput" className="fs-7 text-muted">
                Email address
              </label>
            </div>
            <Button
              flat
              color="secondary"
              auto
              className="rounded-5 w-100 text-shadow-3"
              style={{ opacity: "0.9" }}
            >
              Subscribe
              <i className="fa-solid fa-paper-plane ms-2"></i>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
