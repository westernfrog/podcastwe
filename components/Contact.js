import { Button, useInput, Input, Textarea } from "@nextui-org/react";
import { useMemo } from "react";

export default function Contact() {
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
      text: isValid ? "" : "Enter a valid email",
      color: isValid ? "secondary" : "error",
    };
  }, [value]);
  return (
    <>
      <div
        className="modal fade text-black
         rounded"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content rounded-5">
            <div className="modal-header mx-auto">
              <h4 className="modal-title" id="exampleModalLabel">
                Contact us
              </h4>
            </div>
            <div className="modal-body text-dm">
              <form>
                <div className="mb-3 d-grid">
                  <Input
                    clearable
                    initialValue="John Doe"
                    label="Your Name"
                    placeholder="Enter your Name"
                  />
                </div>
                <div className="mb-3 d-grid">
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
                    placeholder="Enter your E-mail"
                  />
                </div>
                <div className="mb-3 d-grid">
                  <Textarea
                    initialValue="Hey! you are doing amazing ✨"
                    placeholder="Write something for us!"
                    label="Your Message"
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer text-dm">
              <Button color="error" auto flat data-bs-dismiss="modal">
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
