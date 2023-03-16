import { Card, Col, Grid, Text, Loading } from "@nextui-org/react";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function PodCastCard(props) {
  const [showDesc, setShowDesc] = useState(false);
  const [photoUrl, setPhotoUrl] = useState(null);

  const handleHover = () => {
    setShowDesc(true);
  };

  const handleLeave = () => {
    setShowDesc(false);
  };

  async function getRandomPodcastPhoto() {
    const defaultApi =
      "https://api.unsplash.com/photos/random/?query=podcast&orientation=landscape&client_id=-EhqJf2oW_B3R3y6lBW70uTolREUZTDKKLooDkyZa5U";
    const apiUrlData = await fetch(defaultApi);
    const apiData = await apiUrlData.json();
    const photoUrl = apiData.urls.regular;
    return photoUrl;
  }

  useEffect(() => {
    const storedPhotoUrl = localStorage.getItem(`${props.id}`);
    if (storedPhotoUrl) {
      setPhotoUrl(storedPhotoUrl);
    } else {
      async function fetchPhoto() {
        const url = await getRandomPodcastPhoto();
        setPhotoUrl(url);
        localStorage.setItem(`${props.id}`, url);
      }
      fetchPhoto();
    }
  }, [props.id]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      localStorage.removeItem(`${props.id}`);
    }, 3600000);
    return () => clearTimeout(timeout);
  }, [props.id]);

  if (!photoUrl) {
    return (
      <Grid sm={6} md={props.col} className="g-4">
        <Link href={`/blog/${props.url}`} className="w-100">
          <Card
            onMouseEnter={handleHover}
            onMouseLeave={handleLeave}
            isPressable
            css={{ h: "300px" }}
            style={{ backgroundColor: "#ffffff20" }}
          >
            <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
              <Col>
                <Text
                  size={12}
                  weight="bold"
                  transform="uppercase"
                  color="#9E9E9E"
                >
                  New
                </Text>
                <Text h3 color="white" className="text-shadow-3">
                  {props.title}
                </Text>
              </Col>
            </Card.Header>
            <Card.Body css={{ p: 0 }}>
              <Loading
                className="my-auto"
                type="points-opacity"
                color="white"
                size="xl"
              />
            </Card.Body>
            <Card.Footer
              className={`${showDesc ? "d-block" : "d-lg-none"}`}
              isBlurred
              css={{
                position: "absolute",
                bgBlur: "#0f111466",
                borderTop: "$borderWeights$light solid $gray800",
                bottom: 0,
                zIndex: 1,
                border: 0,
              }}
            >
              <Col>
                <Text color="#d1d1d1" size={14}>
                  {props.desc}
                </Text>
              </Col>
            </Card.Footer>
          </Card>
        </Link>
      </Grid>
    );
  }
  return (
    <>
      <Grid sm={6} md={props.col} className="g-4">
        <Link href={`/blog/${props.url}`}>
          <Card
            onMouseEnter={handleHover}
            onMouseLeave={handleLeave}
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
                  New
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
            <Card.Footer
              className={`${showDesc ? "d-block" : "d-lg-none"}`}
              isBlurred
              css={{
                position: "absolute",
                bgBlur: "#0f111466",
                borderTop: "$borderWeights$light solid $gray800",
                bottom: 0,
                zIndex: 1,
                border: 0,
              }}
            >
              <Col>
                <Text color="#d1d1d1" size={14} className="m-0">
                  {props.desc}
                </Text>
              </Col>
            </Card.Footer>
          </Card>
        </Link>
      </Grid>
    </>
  );
}
