import fs from "fs";
import path from "path";
import matter from "gray-matter";

export default async function NewsHandler(req, res) {
  const files = fs.readdirSync(path.join("posts"));

  const news = files.map((filename) => {
    const slug = filename.replace(".md", "");
    const markdownMeta = fs.readFileSync(path.join("posts", filename), "utf-8");

    const { data: frontmatter } = matter(markdownMeta);
    return {
      slug,
      frontmatter,
    };
  });

  res.status(200).json({ news });
}
