export default function About() {
  return (
    <>
      <div className="container col-md-6 my-1 my-lg-4 py-1 py-lg-5">
        <div className="card border-0 rounded-4 text-dark mx-auto bg-back">
          <div className="card-header border-0 bg-transparent">
            <h1 className="text-poppins">What is PODCASTWE?</h1>
          </div>
          <div className="card-body text-dark">
            <p className="card-text">
              We are a team of writers and bloggers who are passionate about
              sharing our thoughts and ideas with the world. Our mission is to
              provide high-quality content that informs, educates, and inspires
              our readers.
            </p>
            <p className="card-text">
              Discover and listen to the latest podcasts on PODCASTWE. Our
              platform offers a vast collection of shows covering various
              topics, from news and entertainment to education and technology.
            </p>
          </div>
        </div>
        <div className="card border-0 my-3 py-2 rounded-4 text-dark mx-auto bg-back">
          <div className="card-body text-dark">
            <p className="card-text">
              Contact us to share your feedback and suggestions on how we can
              improve our engaging and valuable content.
            </p>
            <p className="card-text fw-bold">Thank you for visiting!</p>
          </div>
        </div>

        <div className="card border-0 my-3 col-6 rounded py-4 bg-back"></div>
        <div className="card border-0 my-3 col-4 rounded py-3 bg-back"></div>
        <div className="card border-0 my-3 col-2 rounded py-2 bg-back"></div>
        <div className="card border-0 my-3 col-1 rounded py-1 bg-back"></div>
      </div>
    </>
  );
}
