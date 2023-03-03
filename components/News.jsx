import Buttons from "./Buttons";
import PodCastCard from "./PodCastCard";
import news from "../data/news.json";

export default function News(params) {
  return (
    <>
      <div className="container my-5 py-5">
        <div className="row d-flex align-items-center justify-content-between">
          <div className="col-md-6">
            <h1 className="display-2 text-uppercase">best news of this week</h1>
          </div>
          <div className="col-md-6">
            <p className="mb-0 fs-6 text-muted">
              Stay up-to-date with the latest and most significant headlines of
              the week on our &apos;Best News of This Week&apos; page, offering
              comprehensive coverage and insightful analysis of the top stories
              from around the world.
            </p>
            <Buttons url="contact" html="See More" />
          </div>
        </div>
        <div className="row align-items-stretch g-4 py-5">
          {news.map((newsItem) =>
            newsItem.id === 1 ? (
              <PodCastCard
                key={newsItem.id}
                col={8}
                title={newsItem.title}
                desc={newsItem.desc}
              />
            ) : (
              <PodCastCard
                key={newsItem.id}
                col={4}
                title={newsItem.title}
                desc={newsItem.desc}
              />
            )
          )}
        </div>
      </div>
    </>
  );
}
