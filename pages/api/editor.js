import fs from "fs";
import path from "path";
import matter from "gray-matter";

export default async function EditorHandler(req, res) {
  const files = fs.readdirSync(path.join("public/posts"));

  const editor = files
    .map((filename) => {
      const slug = filename.replace(".md", "");
      const markdownMeta = fs.readFileSync(
        path.join("public/posts", filename),
        "utf-8"
      );

      const { data: frontmatter } = matter(markdownMeta);
      return {
        slug,
        frontmatter,
      };
    })
    .filter(
      (editor) =>
        editor.frontmatter.tags &&
        editor.frontmatter.tags.includes("editor's pick")
    );

  res.status(200).json({ editor });
}
