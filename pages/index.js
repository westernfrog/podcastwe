import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Editor from "@/components/Editor";
import Overview from "@/components/Overview";

export default function Home({ editorPickPosts }) {
  console.log(editorPickPosts);
  return (
    <>
      <Overview />
      <Editor posts={editorPickPosts} />
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

  const trendingPosts = posts.filter(
    (trends) =>
      trends.frontmatter.tags && trends.frontmatter.tags.includes("trends")
  );

  const editorPickPosts = posts.filter(
    (editor) =>
      editor.frontmatter.tags &&
      editor.frontmatter.tags.includes("editor's pick")
  );

  const newsPosts = posts.filter(
    (news) => news.frontmatter.tags && news.frontmatter.tags.includes("news")
  );

  return {
    props: {
      trendingPosts,
      editorPickPosts,
      newsPosts,
    },
  };
}
