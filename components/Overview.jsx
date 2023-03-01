import Buttons from "./Buttons";
import Support from "./Support";
import TopPodcastCard from "./TopPodcastCard";
import { useState, useEffect } from "react";

export default function Overview(params) {
  const [className, setClassName] = useState(
    "d-flex align-items-center justify-content-between mx-auto w-100 pic3 mt-3 shadow me-0"
  );

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 768) {
        setClassName(
          "d-flex align-items-center justify-content-between mx-auto w-100 pic3 rounded-left mt-3 shadow me-0"
        );
      } else {
        setClassName(
          "d-flex align-items-center justify-content-between mx-auto w-100 pic3 rounded mt-3 shadow me-0"
        );
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const topPodcasts = [
    { link: "2Ghp894n1laIf2w98VeAOJ" },
    { link: "7MXVkk9YMctZqd1Srtv4MB" },
    { link: "37BZB0z9T8Xu7U3e65qxFy" },
    { link: "0VjIjW4GlUZAMYd2vXMi3b" },
    { link: "2vgUijXOTRMnWXDtvgMp2b" },
  ];
  return (
    <>
      <div className="container my-4">
        <div className="row display-1 text-poppins text-uppercase">
          <div className="col-sm">listen</div>
          <div className="col-sm-4 d-lg-block d-none pic1 rounded-pill my-3 shadow"></div>
          <div className="col-sm">new</div>
          <div className="col-sm-2 d-lg-block d-none pic3 rounded-pill my-3 shadow"></div>
          <div className="col-sm">podcast</div>
          <div className="col-sm-3 d-lg-block d-none pic2 rounded-pill my-3 shadow"></div>
          <div className="col-sm">order</div>
        </div>

        <div className="row mt-2 mt-lg-5 text-dm">
          <div className="col-md-6">
            <p className="text-muted pe-3 fs-6">
              We are a team of writers and bloggers who are passionate about
              sharing our thoughts and ideas with the world. Our mission is to
              provide high-quality content that informs, educates, and inspires
              our readers.
            </p>
            {/* <Buttons url="contact" html="Contact us" /> */}
            <Support />
          </div>
          <div
            className="container-fluid col-md-6 my-5 my-lg-0 text-center overflow-auto"
            style={{ maxHeight: "235px" }}
          >
            <h1 className="fs-5 text-md-start mb-4">Top Podcast of the week</h1>
            <div className="text-md-start">
              <div className="row-cols-1">
                {topPodcasts.map((podcast, index) => (
                  <div key={index} className="col pe-0 pe-lg-5 bg-grad">
                    <TopPodcastCard link={podcast.link} />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div
            className={`${className} mb-5 pb-5`}
            style={{ height: 400 }}
          ></div>
        </div>
      </div>
    </>
  );
}
