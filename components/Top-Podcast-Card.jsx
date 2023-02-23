export default function TopPodcastCard(props) {
  return (
    <>
      <iframe
        src={
          "https://open.spotify.com/embed/track/" +
          props.link +
          "?utm_source=generator"
        }
        width="80%"
        height="100"
        allowfullscreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </>
  );
}
