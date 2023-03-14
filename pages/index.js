import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Editor from "@/components/Editor";
import Overview from "@/components/Overview";
import PodCastCard from "@/components/PodCastCard";

export default function Home({ posts }) {
  console.log(posts);
  return (
    <>
      <Overview />
      <Editor url="" title="Podcast" excerpt={"ksk"} />
      {posts.map((editor, index) => (
        <PodCastCard
          key={index}
          id={index}
          col={4}
          url={editor.frontmatter.slug}
          title={editor.frontmatter.title}
          desc={editor.frontmatter.excerpt}
        />
      ))}
    </>
  );
}
export async function getStaticProps() {
  const files = fs.readdirSync(path.join("public/posts"));

  const posts = files.map((filename) => {
    const slug = filename.replace(".md", "");

    const markdownWithMeta = fs.readFileSync(
      path.join("public/posts", filename),
      "utf-8"
    );

    const { data: frontmatter } = matter(markdownWithMeta);

    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      posts,
    },
  };
}
