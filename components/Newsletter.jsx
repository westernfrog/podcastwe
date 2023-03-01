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
      <div class="card rounded-5 p-4 pic1" style={{ backgroundColor: "#111" }}>
        <div class="card-body">
          <h5 class="card-title">
            You will be updated with new episodes every day!
          </h5>
          <h6 class="card-subtitle mb-2 text-muted fs-7 fw-light text-dm">
            podcastwe.com
          </h6>

          <div className="col-lg-4 col-sm-6 mt-4">
            <p class="card-text fs-4 mb-0 text-poppins">
              Subscribe to our NewsLetter
            </p>
            <div class="input-group">
              <input
                type="email"
                className="form-control rounded-5 shadow"
                placeholder="Your Email"
              />
              <Button flat color="secondary" auto>
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
