export default function About(params) {
  return (
    <>
      <div className="container col-md-5 my-1 my-lg-4 py-1 py-lg-4">
        <div class="card border-0 py-2 rounded-4 text-dark mx-auto">
          <div class="card-header border-0">
            <h1 className="text-poppins text-shadow-3">What is PODCASTWE?</h1>
          </div>
          <div class="card-body text-dark">
            <p class="card-text text-shadow-1">
              We are a team of writers and bloggers who are passionate about
              sharing our thoughts and ideas with the world. Our mission is to
              provide high-quality content that informs, educates, and inspires
              our readers.
            </p>
            <p className="card-text text-shadow-1">
              Discover and listen to the latest podcasts on PODCASTWE. Our
              platform offers a vast collection of shows covering various
              topics, from news and entertainment to education and technology.
            </p>
          </div>
        </div>
        <div class="card border-0 my-3 py-2 rounded-4 text-dark mx-auto">
          <div class="card-body text-dark">
            <p className="card-text text-shadow-1">
              Contact us to share your feedback and suggestions on how we can
              improve our engaging and valuable content.
            </p>
            <p className="card-text fw-bold">Thank you for visiting!</p>
          </div>
        </div>

        <div class="card border-0 my-3 col-6 rounded py-3"></div>
        <div class="card border-0 my-3 col-3 rounded py-2"></div>
        <div class="card border-0 my-3 col-1 rounded py-1"></div>
      </div>
    </>
  );
}
