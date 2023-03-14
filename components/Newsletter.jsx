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
            <div className="input-group">
              <input
                type="email"
                className="form-control rounded-5 shadow border border-2"
                placeholder="Your Email"
                style={{ boxShadow: "none" }}
              />
              <Button flat color="secondary" auto className="rounded-5">
                <i className="fa-solid fa-paper-plane"></i>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
