import { Card, Col, Text, Row, Button } from "@nextui-org/react";
import Link from "next/link";
import { useRandomPodcastPhoto } from "./GetRandomPhotos";

export default function EditorListsCard(props) {
  const { photoUrl } = useRandomPodcastPhoto({ id: props.id });
  return (
    <>
      <div className="container my-3 py-3">
        <Link href={`/blog/${props.url}`} className="w-100">
          <Card
            isPressable
            css={{ h: "300px" }}
            style={{ backgroundColor: "#ffffff20" }}
          >
            <Card.Header
              css={{ position: "absolute", zIndex: 1, top: 5 }}
              className="p-2 p-lg-5"
            >
              <Text h3 color="white" className="text-shadow-3 display-4">
                {props.title}
              </Text>
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
            <Card.Footer
              css={{
                position: "absolute",
                bottom: 0,
                zIndex: 1,
                border: 0,
              }}
              className="col-md-8 p-2 p-lg-5"
            >
              <Text color="#d1d1d1" size={14} className="d-lg-none">
                {props.desc}
              </Text>
              <Text color="#d1d1d1" size={20} className="d-lg-block d-none">
                {props.desc}
              </Text>
            </Card.Footer>
          </Card>
        </Link>
      </div>
    </>
  );
}
