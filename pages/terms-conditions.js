import Link from "next/link";

export default function TermsConditions(params) {
  return (
    <>
      <div className="container my-5 py-5">
        <div className="text-center">
          <h1 className="display-3">Terms & Conditions</h1>
          <p>Last updated Feb 27th, 2023</p>
        </div>

        <div class="row flex-row-reverse my-4 py-5">
          <div class="col-md-7 order-last">
            <p className="fs-2 mb-4">
              This page explains our terms of service, which contain important
              information about your legal rights. When you use podcastwe.com,
              you're agreeing to these terms.
            </p>
            <ul className="lh-lg text-dm">
              <li className="fs-4 fw-bold" id="1">
                Intellectual Property
              </li>
              <p className="fs-6">
                All content on our website is the intellectual property of our
                company and may not be reproduced or used without our
                permission.
              </p>
              <li className="fs-4 fw-bold" id="2">
                User Generated Content
              </li>
              <p className="fs-6">
                If you post comments, feedback, or other user-generated content
                on our website, you grant us a non-exclusive, royalty-free,
                perpetual, and irrevocable right to use, modify, and distribute
                your content in any medium and for any purpose.
              </p>
              <li className="fs-4 fw-bold" id="3">
                Prohibited Use
              </li>
              <p className="fs-6">
                You may not use our website for any unlawful purpose or in any
                way that may harm our company or other users of our website. You
                may not post or transmit any content that is offensive,
                defamatory, or infringes on the rights of others.
              </p>
              <li className="fs-4 fw-bold" id="4">
                Limitations of Liability
              </li>
              <p className="fs-6">
                We are not liable for any damages or harm resulting from your
                use of our website or any content posted on our website. We do
                not warrant the accuracy or completeness of any information on
                our website and we are not responsible for any errors or
                omissions.
              </p>
              <li className="fs-4 fw-bold" id="5">
                Indemnification
              </li>
              <p className="fs-6">
                You agree to indemnify, defend, and hold us harmless from any
                claims, damages, or costs arising from your use of our website
                or your violation of these terms and conditions.
              </p>
              <li className="fs-4 fw-bold" id="5">
                Changes of these Terms
              </li>
              <p className="fs-6">
                We may update these terms and conditions from time to time. We
                will provide notice of any material changes to these terms by
                posting the new terms on our website.
              </p>
              <li className="fs-4 fw-bold" id="5">
                Governing Law
              </li>
              <p className="fs-6">
                These terms and conditions are governed by the laws of [insert
                governing law], and any disputes arising from these terms and
                conditions will be resolved in the courts of [insert
                jurisdiction].
              </p>
              <li className="fs-4 fw-bold" id="5">
                Contact Us
              </li>
              <p className="fs-6">
                If you have any questions or concerns about these terms and
                conditions, please contact us at [insert contact information].
                Regenerate response
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
                    Intellectual Property
                  </Link>
                </li>
                <li>
                  <Link className="link-light" href="#2">
                    User Generated Content
                  </Link>
                </li>
                <li>
                  <Link className="link-light" href="#3">
                    Prohibited Use
                  </Link>
                </li>
                <li>
                  <Link className="link-light" href="#4">
                    Limitations of Liability
                  </Link>
                </li>
                <li>
                  <Link className="link-light" href="#5">
                    Indemnification
                  </Link>
                </li>
                <li>
                  <Link className="link-light" href="#5">
                    Changes of these Terms
                  </Link>
                </li>
                <li>
                  <Link className="link-light" href="#5">
                    Governing Law
                  </Link>
                </li>
                <li>
                  <Link className="link-light" href="#5">
                    Contact Us
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
