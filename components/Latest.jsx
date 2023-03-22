import NewsListsCard from "./NewsListsCard";

export default function Latest(props) {
  return (
    <>
      <div className="container mb-5">
        <div className="row align-items-stretch g-4 py-3">
          {props.posts.map((post, index) => (
            <NewsListsCard
              key={index}
              id={post.frontmatter.title}
              col={6}
              alt={"Latest"}
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
