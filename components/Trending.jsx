import Buttons from "./Buttons";
import PodCastCard from "./PodCastCard";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Trending() {
  const [trends, setTrends] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "https://podcastwe.vercel.app/api/trending"
        );
        console.log(response);
        setTrends(response.data.trends);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);
  return (
    <>
      <div className="container my-5 py-5">
        <div className="row d-flex align-items-center justify-content-between">
          <div className="col-md-6">
            <h1 className="display-2 text-uppercase">Trends of this week</h1>
          </div>
          <div className="col-md-6">
            <p className="mb-0 fs-6 text-muted">
              Stay up-to-date with the latest and most significant headlines of
              the week on our &apos;Trends of This Week&apos; page, offering
              comprehensive coverage and insightful analysis of the top stories
              from around the world.
            </p>
            <Buttons url="contact" html="See More" />
          </div>
        </div>
        <div className="row align-items-stretch g-4 py-5">
          {trends.map((trending, index) => (
            <PodCastCard
              key={index}
              id={trending.frontmatter.title}
              col={4}
              title={trending.frontmatter.title}
              desc={trending.frontmatter.excerpt}
            />
          ))}
        </div>
      </div>
    </>
  );
}
