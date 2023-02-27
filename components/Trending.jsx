import Buttons from "./Buttons";
import PodCastCard from "./PodCastCard";
import trending from "../data/trending.json";

export default function Trending(params) {
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
        <div class="row align-items-stretch g-4 py-5">
          {trending.map((trending) => (
            <PodCastCard
              key={trending.id}
              col={4}
              title={trending.title}
              desc={trending.desc}
            />
          ))}
        </div>
      </div>
    </>
  );
}
