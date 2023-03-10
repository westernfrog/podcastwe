import { Button, Input, Textarea } from "@nextui-org/react";
import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("Hey! you are doing amazing ✨");
  const [emailError, setEmailError] = useState(false);
  const [sendSuccess, setSendSuccess] = useState(false);

  const handleChange = async (e) => {
    if (e.target.name == "name") {
      setName(e.target.value);
    } else if (e.target.name == "email") {
      setEmail(e.target.value);
    } else if (e.target.name == "message") {
      setMessage(e.target.value);
    }
  };

  const handleSubmit = async () => {
    var emailRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (name.length > 0 && email.match(emailRegex)) {
      setEmailError(false);

      const data = { name, email, message };
      const res = await fetch("/api/message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const response = await res.json();
      setName("");
      setEmail("");
      setMessage("");
      setSendSuccess(true);
      console.log(response);
    } else {
      setEmailError(true);
    }
  };

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
                    name="name"
                    clearable
                    label="Your Name"
                    value={name}
                    placeholder="Enter your Name"
                    autoComplete="none"
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                <div className="mb-3 d-grid">
                  <Input
                    name="email"
                    clearable
                    type="email"
                    label="Email"
                    value={email}
                    placeholder="Enter your Email"
                    autoComplete="none"
                    onChange={(e) => handleChange(e)}
                  />
                  <div
                    className={`${
                      emailError ? "d-block" : "d-none"
                    } text-start text-dm fs-8 text-danger ms-1`}
                  >
                    Please enter a valid email address.
                  </div>
                </div>
                <div className="mb-3 d-grid">
                  <Textarea
                    name="message"
                    placeholder="Write something for us!"
                    label="Your Message"
                    value={message}
                    autoComplete="none"
                    onChange={(e) => handleChange(e)}
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer text-dm border-0">
              <Button color="error" auto flat data-bs-dismiss="modal">
                Close
              </Button>
              <Button
                color={`${sendSuccess ? "secondary" : "primary"}`}
                auto
                shadow
                onClick={handleSubmit}
              >
                {sendSuccess ? "Message Sent⚡" : "Send"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
