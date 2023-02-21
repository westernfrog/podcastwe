import Image from "next/image";
import about1 from "../public/about1.jpg";
import about2 from "../public/about2.jpg";

export default function About(params) {
  return (
    <>
      <div className="container px-0">
        <div className="fs-4 p-5 text-center d-lg-none text-poppins text-uppercase">
          About us
        </div>
        <div className="row g-0">
          <div
            className="col-md-6 fs-7 p-5 text-center d-flex align-items-center justify-content-center"
            style={{ backgroundColor: "#5C5470" }}
          >
            Discover and listen to the latest podcasts on PodcastWe. Our
            platform offers a vast collection of shows covering various topics,
            from news and entertainment to education and technology.
          </div>
          <div className="col-md-6">
            <Image
              className="img-fluid"
              src={about1}
              alt=""
              width={640}
              height={360}
            />
          </div>
        </div>
        <div className="row g-0">
          <div
            className="col-md-4 fs-2 p-5 align-items-center justify-content-center d-lg-flex d-none text-poppins text-uppercase"
            style={{
              writingMode: "vertical-rl",
              transform: "rotate(180deg)",
              backgroundColor: "#433751",
            }}
          >
            PodcastWe
          </div>
          <div
            className="col-md-4 fs-7 p-5 d-flex align-items-center justify-content-center text-center text-dark"
            style={{ backgroundColor: "#DBD8E3" }}
          >
            At PodcastWe, our mission is to inform, educate, and inspire our
            readers with high-quality content on a wide range of relevant and
            interesting topics. Our experienced writers and bloggers bring
            diverse perspectives and areas of expertise to our team. Contact us
            to share your feedback and suggestions on how we can improve our
            engaging and valuable content. Thank you for visiting!
          </div>
          <div
            className="col-md-4 fs-2 p-5 align-items-center justify-content-center d-lg-flex d-none text-poppins text-uppercase"
            style={{
              writingMode: "vertical-rl",
            }}
          >
            About us
          </div>
        </div>
        <div className="row g-0">
          <div
            className="col-md-6 fs-7 p-5 text-center d-flex align-items-center justify-content-between"
            style={{ backgroundColor: "#352F44" }}
          >
            With PodcastWe, you can easily discover and stream your favorite
            podcasts, whether you&apos;re at home, on the go, or anywhere in
            between. Our platform offers a user-friendly interface and advanced
            search features, making it easy to find and subscribe to podcasts
            that match your interests.
          </div>
          <div className="col-md-6">
            <Image
              className="img-fluid"
              src={about2}
              alt=""
              width={640}
              height={360}
            />
          </div>
        </div>
      </div>
    </>
  );
}
