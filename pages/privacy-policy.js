import Link from "next/link";

export default function PrivacyPolicy(params) {
  return (
    <>
      <div className="container my-5 py-5">
        <div className="text-center">
          <h1 className="display-3">Privacy Policy</h1>
          <p>Last updated Feb 27th, 2023</p>
        </div>

        <div class="row my-4 py-5">
          <div class="col-md-7 order-last">
            <p className="fs-2 mb-4">
              This Privacy Policy explains how we collect, use, and share
              personal information that we obtain from visitors to our podcast
              blogging website.
            </p>
            <ul className="lh-lg text-dm">
              <li className="fs-4 fw-bold" id="1">
                Information Collection and Use
              </li>
              <p className="fs-6">
                We may collect personal information from you, such as your name
                and email address, when you register to use our website or
                subscribe to our podcast. We may also collect information about
                your use of our website and podcast, such as your IP address,
                browser type, and the episodes you listen to. We use your
                personal information to communicate with you, respond to your
                inquiries, and provide you with our podcast or other promotional
                materials.
              </p>
              <li className="fs-4 fw-bold" id="2">
                Cookies and Analytics
              </li>
              <p className="fs-6">
                We use cookies to enhance your experience on our website and
                track usage patterns. We also use third-party analytics services
                to collect information about how our website and podcast are
                used. These services may use cookies and similar technologies to
                collect information about your use of our website and podcast.
              </p>
              <li className="fs-4 fw-bold" id="3">
                Information Sharing
              </li>
              <p className="fs-6">
                We do not share your personal information with third parties for
                their own marketing purposes. We may share your personal
                information with service providers who perform services on our
                behalf, such as podcast hosting or newsletter distribution. We
                may also disclose your personal information if required by law
                or to protect our rights or property.
              </p>
              <li className="fs-4 fw-bold" id="4">
                Your Rights
              </li>
              <p className="fs-6">
                You have the right to access, correct, or delete your personal
                information that we collect. You may also unsubscribe from our
                podcast or promotional materials at any time by following the
                instructions in the email.
              </p>
              <li className="fs-4 fw-bold" id="5">
                Changes to this Policy
              </li>
              <p className="fs-6">
                We may update this Privacy Policy from time to time to reflect
                changes in our practices or legal requirements. We will provide
                notice of any material changes to this policy by posting the new
                policy on our website. If you have any questions or concerns
                about this Privacy Policy, please contact us at
                [podcastwe@gmail.com].
              </p>
            </ul>
          </div>
          <div className="col-md-1"></div>
          <div class="col-md-4 order-first">
            <div class="position-sticky" style={{ top: "5rem" }}>
              <p className="fs-2 mb-4">Table of Contents</p>
              <ul className="text-dm fs-5 lh-lg link-light">
                <li>
                  <Link className="link-light" href="#1">
                    Information Collection and Use
                  </Link>
                </li>
                <li>
                  <Link className="link-light" href="#2">
                    Cookies and Analytics
                  </Link>
                </li>
                <li>
                  <Link className="link-light" href="#3">
                    Information Sharing
                  </Link>
                </li>
                <li>
                  <Link className="link-light" href="#4">
                    Your Rights
                  </Link>
                </li>
                <li>
                  <Link className="link-light" href="#5">
                    Changes to this Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
