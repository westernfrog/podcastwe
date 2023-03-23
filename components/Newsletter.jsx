import { Button } from "@nextui-org/react";
import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [subscribeSuccess, setSubscribeSuccess] = useState("Subscribe");
  const [subscribeSuccessColor, setSubscribeSuccessColor] =
    useState("secondary");
  const [popUp, setPopUp] = useState("");
  const [resColor, setResColor] = useState("");

  const handleSubscribe = async () => {
    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setEmail("");
        setSubscribeSuccess("Subscribed");
        setPopUp("Thank you for subscribing!");
        setResColor("text-success");
        setSubscribeSuccessColor("success");
      } else if (!email) {
        setPopUp("Please enter a valid email address");
        setResColor("text-danger");
      } else {
        setPopUp("An error occurred or you already have subscribed!");
        setResColor("text-danger");
      }
    } catch (error) {
      setPopUp(
        "There was an error subscribing to the newsletter. Hit me up podcastwe@gmail.com and I'll add you the old fashioned way :("
      );
      setResColor("text-danger");
    }
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
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
                value={email}
                onChange={handleEmailChange}
              />
              <label htmlFor="floatingInput" className="fs-7 text-muted">
                Email address
              </label>
            </div>
            <Button
              flat
              color={subscribeSuccessColor}
              auto
              className="rounded-5 w-100 text-shadow-3"
              style={{ opacity: "0.9" }}
              onPress={handleSubscribe}
            >
              {subscribeSuccess}
              <i className="fa-solid fa-paper-plane ms-2"></i>
            </Button>
            <p className={resColor}>{popUp}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
