import { useState, useEffect } from "react";

export default function TopPodcastCard(props) {
  const [width, setWidth] = useState("82%");

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 768) {
        setWidth("100%");
      } else {
        setWidth("82%");
      }
    }
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
      <iframe
        src={
          "https://open.spotify.com/embed/track/" +
          props.link +
          "?utm_source=generator"
        }
        width={width}
        height="100"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      ></iframe>
    </>
  );
}
