import PodCastCard from "./PodCastCard";
import Buttons from "./Buttons";

export default function Editor(props) {
  return (
    <>
      <div className="container mt-5 pt-5">
        <div className="row d-flex align-items-top justify-content-between">
          <div className="col-md-6">
            <h1 className="display-2 text-uppercase text-white">
              Editor&apos;s Pick
            </h1>
          </div>
          <div className="col-md-6">
            <p className="mb-0 fs-6 text-muted">
              Stay up-to-date with the latest and most significant headlines of
              the week on our &apos;Editor&apos;s Pick&apos; page, offering
              comprehensive coverage and insightful analysis of the top stories
              from around the world.
            </p>
            <Buttons url="latest" html="See More" />
          </div>
        </div>
        <div className="row align-items-stretch g-4 py-5">
          {props.posts.map((post, index) => (
            <PodCastCard
              key={index}
              id={post.frontmatter.title}
              col={4}
              alt={"Editor's Pick"}
              url={post.slug}
              title={post.frontmatter.title}
              desc={post.frontmatter.excerpt}
            />
          ))}
        </div>
      </div>
    </>
  );
}
