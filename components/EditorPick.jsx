import Buttons from "./Buttons";
import PodCastCard from "./PodCastCard";
import { useState, useEffect } from "react";
import axios from "axios";

export default function EditorPick() {
  const [editor, setEditor] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("/api/editor");
        console.log(response);
        setEditor(response.data.editor);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);
  return (
    <>
      <div className="container my-5 py-5">
        <div className="row d-flex align-items-top justify-content-between">
          <div className="col-md-6">
            <h1 className="display-2 text-uppercase">Editor&apos;s Pick</h1>
          </div>
          <div className="col-md-6">
            <p className="mb-0 fs-6 text-muted">
              Stay up-to-date with the latest and most significant headlines of
              the week on our &apos;Editor&apos;s Pick&apos; page, offering
              comprehensive coverage and insightful analysis of the top stories
              from around the world.
            </p>
            <Buttons url="contact" html="See More" />
          </div>
        </div>
        <div className="row align-items-stretch g-4 py-5">
          {editor.map((editor, index) => (
            <PodCastCard
              key={index}
              id={editor.frontmatter.title}
              col={4}
              url={editor.slug}
              title={editor.frontmatter.title}
              desc={editor.frontmatter.excerpt}
            />
          ))}
        </div>
      </div>
    </>
  );
}
