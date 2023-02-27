import Buttons from "./Buttons";
import NewsCard from "./NewsCard";

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
        <div class="row align-items-stretch g-4 py-5">
          <NewsCard
            class="col-md-4"
            title="Podcast equipment and technology"
            desc="For quality podcast recordings, beginners require appropriate equipment and technology, such as a digital audio recorder..."
          />
          <NewsCard
            class="col-md-8"
            title="Podcast hosting and distribution"
            desc="Podcast hosting and distribution means the service that stores and serves your audio files to the listeners..."
          />
          <NewsCard
            class="col-md-4"
            title="Podcast marketing and promotion "
            desc="Podcast marketing and promotion refer to the activities aimed at increasing the visibility and reach of your podcast to attract more listeners and grow your audience..."
          />
          <NewsCard
            class="col-md-4"
            title="Podcast storytelling and narrative structure"
            desc="Podcast storytelling refers to the art of using words, sound and music to crate an engaging and immersive audio experience for listeners... "
          />
          <NewsCard
            class="col-md-4"
            title="Podcast audience growth "
            desc="Podcast audience growth refers to the process of increasing the number of listeners for you podcast. Here are some strategies for growing your podcast audience..."
          />
        </div>
      </div>
    </>
  );
}
