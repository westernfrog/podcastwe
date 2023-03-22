export default function About() {
  return (
    <>
      <div className="container col-md-8 my-1 my-lg-4 py-1 py-lg-5">
        <div className="card border rounded-6 text-light mx-auto bg-grey">
          <div className="card-header border bg-inherit mt-3">
            <h1 className="text-poppins">What is this PODCASTWE?</h1>
          </div>
          <div className="card-body text-light">
            <p className="card-text fs-6">
              We are a team of writers and bloggers who are passionate about
              sharing our thoughts and ideas with the world. Our mission is to
              provide high-quality content that informs, educates, and inspires
              our readers.
            </p>
            <p className="card-text fs-6">
              Discover and listen to the latest podcasts on PODCASTWE. Our
              platform offers a vast collection of shows covering various
              topics, from news and entertainment to education and technology.
            </p>
          </div>
        </div>
        <div className="card border my-3 py-2 rounded-6 text-light mx-auto bg-grey">
          <div className="card-body text-light">
            <p className="card-text fs-6">
              Contact us to share your feedback and suggestions on how we can
              improve our engaging and valuable content.
            </p>
            <p className="card-text fs-6 fw-bold">Thank you for visiting!</p>
          </div>
        </div>

        <div className="card border my-3 col-4 rounded-pill py-3 bg-grey"></div>
        <div className="card border my-3 col-2 rounded-pill py-2 bg-grey"></div>
        <div className="card border my-3 col-1 rounded-pill py-1 bg-grey"></div>
      </div>
    </>
  );
}
