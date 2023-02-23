import Buttons from "./Buttons";
import NewsCard from "./News-Card";

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
        <div className="container row my-4 gap-4 d-flex align-items-center justify-content-between">
          <NewsCard
            class="col-md-4 rounded-top-left pic3"
            title="How to make"
            desc="Last updated 3 mins ago"
          />
          <NewsCard
            class="col-md-8 rounded-top-right pic2"
            width={824}
            title="How to make"
            desc="Last updated 3 mins ago"
          />
          <NewsCard
            class="col-md-4 rounded-bottom-left pic3"
            title="How to make"
            desc="Last updated 3 mins ago"
          />
          <NewsCard
            class="col-md-4 pic1"
            title="How to make"
            desc="Last updated 3 mins ago"
          />
          <NewsCard
            class="col-md-4 rounded-bottom-right pic3"
            title="How to make"
            desc="Last updated 3 mins ago"
          />
        </div>
      </div>
    </>
  );
}
