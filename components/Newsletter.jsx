import { useInput, Button } from "@nextui-org/react";
import { useMemo } from "react";

export default function Newsletter() {
  const { value, reset, bindings } = useInput("");

  const validateEmail = (value) => {
    return value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);
  };

  const helper = useMemo(() => {
    if (!value)
      return {
        text: "",
        color: "",
      };
    const isValid = validateEmail(value);
    return {
      text: isValid ? "Correct email" : "Enter a valid email",
      color: isValid ? "success" : "error",
    };
  }, [value]);
  return (
    <div className="container text-dm my-5 pb-5 text-light">
      <div
        className="card rounded-5 p-3 p-lg-5 border-0 shadow image"
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
                className="form-control rounded-6 shadow opacity-75"
                id="floatingInput"
                placeholder="john@doe.in"
                style={{ boxShadow: "none" }}
              />
              <label htmlFor="floatingInput" className="fs-7 text-shadow-3">
                Email address
              </label>
            </div>
            <Button
              flat
              color="secondary"
              auto
              className="rounded-5 w-100 text-shadow-3 opacity-75"
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
