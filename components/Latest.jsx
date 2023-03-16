import PodCastCard from "./PodCastCard";

export default function Latest(props) {
  return (
    <>
      <div className="container">
        <div className="row align-items-stretch g-4 py-3">
          {props.posts.map((post, index) => (
            <PodCastCard
              key={index}
              id={post.frontmatter.title}
              col={6}
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
