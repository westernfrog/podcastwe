import Link from "next/link";
import { useState } from "react";
import { Modal, Button, Text } from "@nextui-org/react";

export default function Footer() {
  const [privacy, setPrivacy] = useState(false);
  const [terms, setTerms] = useState(false);

  return (
    <>
      <div className="container pb-3">
        <div className="container-fluid px-0">
          <footer className="row my-4">
            <div className="col-md-4 mb-4 mb-lg-0">
              <Link
                href="/"
                className="d-flex align-items-center mb-3 link-light text-decoration-none"
              >
                <h6>PODCASTWE</h6>
              </Link>
              <p className="text-muted">
                We are a team of passionate writers dedicated to creating
                informative and engaging content. Our mission is to provide
                high-quality content that informs, educates, and inspires. We
                are committed to creating a welcoming and inclusive community.
                Welcome to our blog!
              </p>
            </div>

            <div className="col d-lg-block d-none"></div>
            <div className="col d-lg-block d-none"></div>

            <div className="col">
              <h6 className="text-uppercase fs-7 text-white">Navigation</h6>
              <ul className="nav flex-column mx-0">
                <li className="nav-item mb-2">
                  <Link
                    href="/"
                    className="nav-link p-0 text-muted fw-bold mx-0"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link
                    href="/latest"
                    className="nav-link p-0 text-muted fw-bold mx-0"
                  >
                    Latest
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link
                    href="/news"
                    className="nav-link p-0 text-muted fw-bold mx-0"
                  >
                    News
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link
                    href="/trending"
                    className="nav-link p-0 text-muted fw-bold mx-0"
                  >
                    Trending
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col">
              <h6 className="text-uppercase fs-7 text-white">Company</h6>
              <ul className="nav flex-column mx-0">
                <li className="nav-item mb-2">
                  <Link
                    href="/about"
                    className="nav-link p-0 text-muted fw-bold mx-0"
                  >
                    About us
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <p
                    className="nav-link p-0 text-muted fw-bold mx-0"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    style={{ cursor: "pointer" }}
                  >
                    Contact
                  </p>
                </li>
                <li className="nav-item mb-2">
                  <p
                    className="nav-link p-0 text-muted fw-bold mx-0"
                    onClick={() => setPrivacy(true)}
                    style={{ cursor: "pointer" }}
                  >
                    Privacy Policy
                  </p>
                  <Modal
                    scroll
                    blur
                    preventClose
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
                        <p className="fs-6 mb-4">
                          This Privacy Policy explains how we collect, use, and
                          share personal information that we obtain from
                          visitors to our podcast blogging website.
                        </p>
                        <ul className="lh-lg text-dm ms-0 ps-0">
                          <li className="fs-5 fw-bold" id="1">
                            Information Collection and Use
                          </li>
                          <p className="fs-6">
                            We may collect personal information from you, such
                            as your name and email address, when you register to
                            use our website or subscribe to our services. We may
                            also collect information about your use of our
                            website, such as your IP address, browser type, and
                            the episodes you listen to. We use your personal
                            information to communicate with you, respond to your
                            inquiries, and provide you with our podcast or other
                            promotional materials.
                          </p>
                          <li className="fs-5 fw-bold" id="2">
                            Cookies and Analytics
                          </li>
                          <p className="fs-6">
                            We use cookies to enhance your experience on our
                            website and track usage patterns. We also use
                            third-party analytics services to collect
                            information about how our website and podcast are
                            used. These services may use cookies and similar
                            technologies to collect information about your use
                            of our website and podcast.
                          </p>
                          <li className="fs-5 fw-bold" id="3">
                            Information Sharing
                          </li>
                          <p className="fs-6">
                            We do not share your personal information with third
                            parties for their own marketing purposes. We may
                            share your personal information with service
                            providers who perform services on our behalf, such
                            as podcast hosting or newsletter distribution. We
                            may also disclose your personal information if
                            required by law or to protect our rights or
                            property.
                          </p>
                          <li className="fs-5 fw-bold" id="4">
                            Your Rights
                          </li>
                          <p className="fs-6">
                            You have the right to access, correct, or delete
                            your personal information that we collect. You may
                            also unsubscribe from our podcast or promotional
                            materials at any time by following the instructions
                            in the email.
                          </p>
                          <li className="fs-5 fw-bold" id="5">
                            Changes to this Policy
                          </li>
                          <p className="fs-6">
                            We may update this Privacy Policy from time to time
                            to reflect changes in our practices or legal
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
                      <Button shadow auto onClick={() => setPrivacy(false)}>
                        Agree
                      </Button>
                    </Modal.Footer>
                  </Modal>
                </li>
                <li className="nav-item mb-2">
                  <p
                    className="nav-link p-0 text-muted fw-bold mx-0"
                    onClick={() => setTerms(true)}
                    style={{ cursor: "pointer" }}
                  >
                    Terms & Conditions
                  </p>
                  <Modal
                    scroll
                    blur
                    preventClose
                    open={terms}
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
                        Terms & Conditions
                      </Text>
                    </Modal.Header>
                    <Modal.Body>
                      <Text id="modal-description">
                        <p className="fs-6 mb-4">
                          This page explains our terms of service, which contain
                          important information about your legal rights. When
                          you use podcastwe.com, you&apos;re agreeing to these
                          terms.
                        </p>
                        <ul className="lh-lg text-dm ms-0 ps-0">
                          <li className="fs-5 fw-bold" id="1">
                            Intellectual Property
                          </li>
                          <p className="fs-6">
                            All content on our website is the intellectual
                            property of our company and may not be reproduced or
                            used without our permission.
                          </p>
                          <li className="fs-5 fw-bold" id="2">
                            User Generated Content
                          </li>
                          <p className="fs-6">
                            If you post comments, feedback, or other
                            user-generated content on our website, you grant us
                            a non-exclusive, royalty-free, perpetual, and
                            irrevocable right to use, modify, and distribute
                            your content in any medium and for any purpose.
                          </p>
                          <li className="fs-5 fw-bold" id="3">
                            Prohibited Use
                          </li>
                          <p className="fs-6">
                            You may not use our website for any unlawful purpose
                            or in any way that may harm our company or other
                            users of our website. You may not post or transmit
                            any content that is offensive, defamatory, or
                            infringes on the rights of others.
                          </p>
                          <li className="fs-5 fw-bold" id="4">
                            Limitations of Liability
                          </li>
                          <p className="fs-6">
                            We are not liable for any damages or harm resulting
                            from your use of our website or any content posted
                            on our website. We do not warrant the accuracy or
                            completeness of any information on our website and
                            we are not responsible for any errors or omissions.
                          </p>
                          <li className="fs-5 fw-bold" id="5">
                            Indemnification
                          </li>
                          <p className="fs-6">
                            You agree to indemnify, defend, and hold us harmless
                            from any claims, damages, or costs arising from your
                            use of our website or your violation of these terms
                            and conditions.
                          </p>
                          <li className="fs-5 fw-bold" id="5">
                            Changes of These Terms
                          </li>
                          <p className="fs-6">
                            We may update these terms and conditions from time
                            to time. We will provide notice of any material
                            changes to these terms by posting the new terms on
                            our website.
                          </p>
                          <li className="fs-5 fw-bold" id="5">
                            Governing Law
                          </li>
                          <p className="fs-6">
                            These terms and conditions are governed by the laws
                            of [insert governing law], and any disputes arising
                            from these terms and conditions will be resolved in
                            the courts of [insert jurisdiction].
                          </p>
                          <li className="fs-5 fw-bold" id="5">
                            Contact Us
                          </li>
                          <p className="fs-6">
                            If you have any questions or concerns about these
                            terms and conditions, please contact us at [insert
                            contact information].
                          </p>
                        </ul>
                      </Text>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button
                        auto
                        flat
                        color="error"
                        onClick={() => setTerms(false)}
                      >
                        Close
                      </Button>
                      <Button shadow auto onClick={() => setTerms(false)}>
                        Agree
                      </Button>
                    </Modal.Footer>
                  </Modal>
                </li>
              </ul>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}
