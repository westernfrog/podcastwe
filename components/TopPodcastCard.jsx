export default function TopPodcastCard(props) {
  return (
    <>
      <iframe
        className="w-100 pe-0 pe-lg-5"
        src={
          "https://open.spotify.com/embed/track/" +
          props.link +
          "?utm_source=generator"
        }
        height={100}
        width="auto"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      ></iframe>
    </>
  );
}
