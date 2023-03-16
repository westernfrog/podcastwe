import Buttons from "./Buttons";
import PodCastCard from "./PodCastCard";

export default function News(props) {
  return (
    <>
      <div className="container my-5 py-5">
        <div className="row d-flex align-items-center justify-content-between">
          <div className="col-md-6">
            <h1 className="display-2 text-uppercase text-white">
              best news of this week
            </h1>
          </div>
          <div className="col-md-6">
            <p className="mb-0 fs-6 text-muted">
              Stay up-to-date with the latest and most significant headlines of
              the week on our &apos;Best News of This Week&apos; page, offering
              comprehensive coverage and insightful analysis of the top stories
              from around the world.
            </p>
            <Buttons url="latest" html="See More" />
          </div>
        </div>
        <div className="row align-items-stretch g-4 py-5">
          {props.posts.map((post, index) =>
            index === 1 ? (
              <PodCastCard
                key={index}
                id={post.frontmatter.title}
                col={8}
                url={post.slug}
                title={post.frontmatter.title}
                desc={post.frontmatter.excerpt}
              />
            ) : (
              <PodCastCard
                key={index}
                id={post.frontmatter.title}
                col={4}
                url={post.slug}
                title={post.frontmatter.title}
                desc={post.frontmatter.excerpt}
              />
            )
          )}
        </div>
      </div>
    </>
  );
}
export async function getStaticProps() {
  const files = fs.readdirSync(path.join("news/news"));

  const news = files.map((filename) => {
    const slug = filename.replace(".md", "");
    const markdownMeta = fs.readFileSync(
      path.join("news/news", filename),
      "utf-8"
    );

    const { data: frontmatter } = matter(markdownMeta);
    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      news,
    },
  };
}
