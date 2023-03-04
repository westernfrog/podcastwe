import { Button, useInput, Input } from "@nextui-org/react";
import { useMemo } from "react";

export default function Contact(params) {
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
    <>
      <div
        class="modal fade text-black
         rounded"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div class="modal-content rounded-5">
            <div class="modal-header mx-auto">
              <h4 class="modal-title" id="exampleModalLabel">
                Contact us
              </h4>
            </div>
            <div class="modal-body">
              <form>
                <div class="mb-3 d-grid">
                  <Input
                    clearable
                    initialValue="John Doe"
                    label="Your Name"
                    placeholder="Enter your name"
                  />
                </div>
                <div class="mb-3 d-grid">
                  <Input
                    {...bindings}
                    clearable
                    shadow={false}
                    onClearClick={reset}
                    status={helper.color}
                    color={helper.color}
                    helperColor={helper.color}
                    helperText={helper.text}
                    type="email"
                    label="Email"
                    placeholder="With regex validation"
                  />
                </div>
                <div class="mb-3 d-grid">
                  <Input
                    clearable
                    initialValue="John Doe"
                    label="Your Name"
                    placeholder="Enter your name"
                  />
                </div>
                <div class="mb-3">
                  <label for="message-text" class="col-form-label">
                    Message:
                  </label>
                  <textarea class="form-control" id="message-text"></textarea>
                </div>
              </form>
            </div>
            <div class="modal-footer text-dm">
              <Button color="error" auto ghost data-bs-dismiss="modal">
                Close
              </Button>
              <Button shadow color="primary" auto>
                Send
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
