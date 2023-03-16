import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import { useEffect, useState } from "react";
import { Card, Col, Text } from "@nextui-org/react";

export default function PostPage({ frontmatter: { title }, content }) {
  const [myItem, setMyItem] = useState(null);

  useEffect(() => {
    const item = localStorage.getItem(title);
    setMyItem(item);
  }, [title]);

  return (
    <>
      <div className="container">
        <Card
          css={{ w: "100%", h: "400px" }}
          style={{ backgroundColor: "inherit" }}
        >
          <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
            <Col>
              <Text
                size={12}
                transform="uppercase"
                color="#ffffffAA"
                className="col-5 text-shadow-3"
              >
                Blog
              </Text>
              <Text h1 color="white" className="text-shadow-3 display-3">
                {title}
              </Text>
            </Col>
          </Card.Header>
          <Card.Body css={{ p: 0 }}>
            {myItem && (
              <Card.Image
                src={myItem}
                width="100%"
                height="100%"
                objectFit="cover"
                alt="Card image background"
              />
            )}
          </Card.Body>
        </Card>
        <div
          className="my-5 pb-5 text-white"
          dangerouslySetInnerHTML={{ __html: marked(content) }}
        ></div>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("posts"));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join("posts", slug + ".md"),
    "utf-8"
  );
  const { data: frontmatter, content } = matter(markdownWithMeta);

  return {
    props: {
      frontmatter,
      slug,
      content,
    },
  };
}
