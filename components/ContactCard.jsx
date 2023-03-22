import { Card } from "@nextui-org/react";
import { useState, useEffect } from "react";

export default function ContactCard(params) {
  const [className, setClassName] = useState("");

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 768) {
        setClassName("rounded-md-bottom");
      } else {
        setClassName("rounded-lg-bottom");
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
      <div className="container mb-5 pb-5 pic3">
        <Card variant="flat" className={`bg-contact bg-shadow ${className}`}>
          <Card.Body className="my-5 py-5">
            <div className="col-md-8 mx-auto">
              <h1 className="text-uppercase display-1 text-center text-white text-shadow-2">
                start a podcast today!
              </h1>
              <div className="col-md-4 mx-auto">
                <button
                  className="btn btn-outline-light btn-sm btn-shrink my-4 py-2 px-5 rounded-pill shadow-sm text-dm d-flex align-items-center mx-auto"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  Contact us
                  <i
                    className="fa-solid fa-arrow-up-long ms-2"
                    style={{ transform: "rotate(45deg)" }}
                  ></i>
                </button>
              </div>
            </div>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}
