import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Latest from "@/components/Latest";

export default function LatestPage({ latestPosts }) {
  console.log(latestPosts);
  return (
    <>
      <Latest posts={latestPosts} />
    </>
  );
}
export async function getStaticProps() {
  const files = fs.readdirSync(path.join("posts"));

  const posts = files.map((filename) => {
    const slug = filename.replace(".md", "");

    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );

    const { data: frontmatter } = matter(markdownWithMeta);

    return {
      slug,
      frontmatter,
    };
  });

  const latestPosts = posts.filter(
    (latest) =>
      latest.frontmatter.tags && latest.frontmatter.tags.includes("latest")
  );

  return {
    props: {
      latestPosts,
    },
  };
}
