import Link from "next/link";
import { useState } from "react";
import { Modal, useModal, Button, Text } from "@nextui-org/react";

export default function Footer(params) {
  const [privacy, setPrivacy] = useState(false);
  const [terms, setTerms] = useState(false);

  return (
    <>
      <div className="container border-top">
        <footer className="row py-5">
          <div className="col-md-4">
            <Link
              href="/"
              className="d-flex align-items-center mb-3 link-light text-decoration-none"
            >
              <h6>PODCASTWE</h6>
            </Link>
            <p className="text-muted">
              We are a team of passionate writers dedicated to creating
              informative and engaging content. Our mission is to provide
              high-quality content that informs, educates, and inspires. We are
              committed to creating a welcoming and inclusive community. Welcome
              to our blog!
            </p>
          </div>

          <div className="col d-lg-block d-none"></div>
          <div className="col d-lg-block d-none"></div>

          <div className="col my-5 my-lg-0">
            <h6>Navigation</h6>
            <ul className="nav flex-column mx-0">
              <li className="nav-item mb-2">
                <Link href="/" className="nav-link p-0 text-muted mx-0">
                  Home
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link href="/genre" className="nav-link p-0 text-muted mx-0">
                  Genre
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link href="/news" className="nav-link p-0 text-muted mx-0">
                  News
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link href="/trending" className="nav-link p-0 text-muted mx-0">
                  Trending
                </Link>
              </li>
            </ul>
          </div>

          <div className="col my-5 my-lg-0">
            <h6>Company</h6>
            <ul className="nav flex-column mx-0">
              <li className="nav-item mb-2">
                <Link href="about" className="nav-link p-0 text-muted mx-0">
                  About us
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link href="/contact" className="nav-link p-0 text-muted mx-0">
                  Contact
                </Link>
              </li>
              <li className="nav-item mb-2">
                <p
                  className="nav-link p-0 text-muted mx-0"
                  onClick={() => setPrivacy(true)}
                >
                  Privacy Policy
                </p>
                <Modal
                  scroll
                  blur
                  open={privacy}
                  width="600px"
                  aria-labelledby="modal-title"
                  aria-describedby="modal-description"
                  className="text-dm text-black"
                >
                  <Modal.Header>
                    <Text
                      id="modal-title"
                      size={22}
                      className="text-poppins my-3"
                    >
                      Privacy Policy
                    </Text>
                  </Modal.Header>
                  <Modal.Body>
                    <Text id="modal-description">
                      <p className="fs-5 mb-4">
                        This Privacy Policy explains how we collect, use, and
                        share personal information that we obtain from visitors
                        to our podcast blogging website.
                      </p>
                      <ul className="lh-lg text-dm ms-0 ps-0">
                        <li className="fs-4 fw-bold" id="1">
                          Information Collection and Use
                        </li>
                        <p className="fs-6">
                          We may collect personal information from you, such as
                          your name and email address, when you register to use
                          our website or subscribe to our podcast. We may also
                          collect information about your use of our website and
                          podcast, such as your IP address, browser type, and
                          the episodes you listen to. We use your personal
                          information to communicate with you, respond to your
                          inquiries, and provide you with our podcast or other
                          promotional materials.
                        </p>
                        <li className="fs-4 fw-bold" id="2">
                          Cookies and Analytics
                        </li>
                        <p className="fs-6">
                          We use cookies to enhance your experience on our
                          website and track usage patterns. We also use
                          third-party analytics services to collect information
                          about how our website and podcast are used. These
                          services may use cookies and similar technologies to
                          collect information about your use of our website and
                          podcast.
                        </p>
                        <li className="fs-4 fw-bold" id="3">
                          Information Sharing
                        </li>
                        <p className="fs-6">
                          We do not share your personal information with third
                          parties for their own marketing purposes. We may share
                          your personal information with service providers who
                          perform services on our behalf, such as podcast
                          hosting or newsletter distribution. We may also
                          disclose your personal information if required by law
                          or to protect our rights or property.
                        </p>
                        <li className="fs-4 fw-bold" id="4">
                          Your Rights
                        </li>
                        <p className="fs-6">
                          You have the right to access, correct, or delete your
                          personal information that we collect. You may also
                          unsubscribe from our podcast or promotional materials
                          at any time by following the instructions in the
                          email.
                        </p>
                        <li className="fs-4 fw-bold" id="5">
                          Changes to this Policy
                        </li>
                        <p className="fs-6">
                          We may update this Privacy Policy from time to time to
                          reflect changes in our practices or legal
                          requirements. We will provide notice of any material
                          changes to this policy by posting the new policy on
                          our website. If you have any questions or concerns
                          about this Privacy Policy, please contact us at
                          [podcastwe@gmail.com].
                        </p>
                      </ul>
                    </Text>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button
                      auto
                      flat
                      color="error"
                      onClick={() => setPrivacy(false)}
                    >
                      Close
                    </Button>
                    <Button auto onClick={() => setPrivacy(false)}>
                      Agree
                    </Button>
                  </Modal.Footer>
                </Modal>
              </li>
              <li className="nav-item mb-2">
                <Link
                  href="/terms-conditions"
                  className="nav-link p-0 text-muted mx-0"
                  onClick={() => setTerms(true)}
                >
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </>
  );
}
