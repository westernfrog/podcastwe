import Support from "./Support";
import { useState, useEffect } from "react";
import { Spacer } from "@nextui-org/react";
import Image from "next/image";
import image1 from "../public/image1.jpg";
import image2 from "../public/image2.jpg";
import image3 from "../public/image3.jpg";
import LatestListsCard from "./LatestListsCard";

export default function Overview(props) {
  const [className, setClassName] = useState(
    "d-flex align-items-center w-100 pic3 shadow"
  );

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 768) {
        setClassName("w-100 pic3 rounded-left");
      } else {
        setClassName("w-100 pic3 rounded-7");
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
        <div className="row display-0 text-poppins text-uppercase text-shadow-2 text-white">
          <div className="col-sm">
            <span className="align-middle">Listen</span>
            <div className="media align-items-center d-none">
              <Image
                src={image1}
                className="mr-3 col-4"
                alt="pic1"
                width={500}
                height={500}
                loading="lazy"
                onError={() => <div>Loading...</div>}
              />
            </div>
          </div>
          <div className="col-sm-4 d-lg-block d-none pic1 rounded-pill my-3 shadow"></div>
          <div className="col-sm">
            <span className="align-middle">New</span>
            <div className="media align-items-center d-none">
              <Image
                src={image2}
                className="mr-3 col-4"
                alt="pic2"
                width={500}
                height={500}
                loading="lazy"
                onError={() => <div>Loading...</div>}
              />
            </div>
          </div>
          <div className="col-sm-2 d-lg-block d-none pic3 rounded-pill my-3 shadow"></div>
          <div className="col-sm">
            <span className="align-middle">Podcast</span>
            <div className="media align-items-center d-none">
              <Image
                src={image3}
                className="mr-3 col-4"
                alt="pic3"
                width={500}
                height={500}
                loading="lazy"
                onError={() => <div>Loading...</div>}
              />
            </div>
          </div>
          <div className="col-sm-3 d-lg-block d-none pic2 rounded-pill my-3 shadow"></div>
          <div className="col-sm">
            <span className="align-middle">Order</span>
          </div>
        </div>

        <div className="row mt-2 mt-lg-5 text-dm">
          <div className="col-md-6">
            <p className="text-muted pe-3 fs-6">
              We are a team of writers and bloggers who are passionate about
              sharing our thoughts and ideas with the world. Our mission is to
              provide high-quality content that informs, educates, and inspires
              our readers.
            </p>
            <Support />
          </div>
          <div className="container-fluid col-md-6 my-5 my-lg-0 text-center">
            <h1
              className="fs-5 text-md-start mb-4 text-white"
              style={{
                position: "sticky",
                top: "0",
                zIndex: "1",
              }}
            >
              Latest Posts of the week
            </h1>
            <div
              className="text-md-start overflow-auto pe-2"
              style={{ maxHeight: "190px" }}
            >
              <div className="row-cols-1">
                <div className="col pe-0 pe-lg-5 bg-inherit">
                  <ul class="list-group list-group-flush mx-0">
                    {props.posts.map((post, index) => (
                      <LatestListsCard
                        key={index}
                        id={post.frontmatter.title}
                        title={post.frontmatter.title}
                        tag={"Latest Posts"}
                        url={post.slug}
                        order={index + 1}
                      />
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <Spacer y={3} x={0} />
          <div
            className={`${className} my-5 p-5`}
            style={{ height: 500 }}
            loading="lazy"
          ></div>
        </div>
      </div>
    </>
  );
}
