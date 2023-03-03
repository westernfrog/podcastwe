import { Card } from "@nextui-org/react";

export async function getServerSideProps() {
  const res = await fetch(
    "hhttps://api.unsplash.com/photos/random/?query=podcast&orientation=landscape&client_id=-EhqJf2oW_B3R3y6lBW70uTolREUZTDKKLooDkyZa5U"
  );
  const data = await res.json();
  const url = data.urls.small;

  return {
    props: {
      url,
    },
  };
}

export default function UnsplashApi({ url }) {
  return (
    <>
      <Card.Image
        src={url}
        objectFit="cover"
        width="100%"
        height="100%"
        alt="Podcast"
      />
    </>
  );
}
