import Link from "next/link";
import { Card, Col, Grid, Text, Loading } from "@nextui-org/react";
import { useRandomPodcastPhoto } from "./GetRandomPhotos";

export default function LatestCard(props) {
  const { photoUrl } = useRandomPodcastPhoto({ id: props.id });

  return (
    <>
      <Grid sm={6} md={props.col} className="g-4">
        <Link href={`/blog/${props.url}`}>
          <Card
            isHoverable
            isPressable
            css={{ w: "100%", h: "300px" }}
            style={{ backgroundColor: "inherit" }}
          >
            <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
              <Col>
                <Text
                  size={12}
                  weight="bold"
                  transform="uppercase"
                  color="#9E9E9E"
                >
                  {props.alt}
                </Text>
                <Text h3 color="white" className="text-shadow-3">
                  {props.title}
                </Text>
              </Col>
            </Card.Header>
            <Card.Body css={{ p: 0 }}>
              <Card.Image
                src={photoUrl}
                objectFit="cover"
                width="100%"
                height="100%"
                alt="Podcast app background"
              />
            </Card.Body>
          </Card>
        </Link>
      </Grid>
    </>
  );
}
