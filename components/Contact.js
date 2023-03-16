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
          <div className="modal-content rounded-6">
            <div className="modal-header mx-auto">
              <h4 className="modal-title" id="exampleModalLabel">
                Contact us
              </h4>
            </div>
            <div className="modal-body text-dm">
              <form>
                <div className="mb-3 d-grid">
                  <div className="form-floating">
                    <input
                      type="text"
                      name="name"
                      className="form-control rounded-6 shadow-sm"
                      id="floatingInput"
                      value={name}
                      onChange={handleChange}
                    />
                    <label htmlFor="floatingInput">Your Name</label>
                  </div>
                </div>
                <div className="mb-3 d-grid">
                  <div className="form-floating">
                    <input
                      type="email"
                      name="email"
                      className="form-control rounded-6 shadow-sm"
                      id="floatingInput"
                      value={email}
                      onChange={handleChange}
                    />
                    <label htmlFor="floatingInput">Email address</label>
                  </div>
                  <div
                    className={`${
                      emailError ? "d-block" : "d-none"
                    } text-start text-dm fs-8 text-danger ms-1`}
                  >
                    Please enter a valid email address.
                  </div>
                </div>
                <div className="mb-3 d-grid">
                  <div className="form-floating">
                    <textarea
                      type="text"
                      name="message"
                      className="form-control rounded-6 shadow-sm"
                      id="floatingInput"
                      value={message}
                      onChange={handleChange}
                      style={{ height: "100px", resize: "none" }}
                    />
                    <label htmlFor="floatingInput">Your Message</label>
                  </div>
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
