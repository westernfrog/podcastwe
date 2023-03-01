import { Card, Col, Grid, Text } from "@nextui-org/react";
import { useState } from "react";

export default function PodCastCard(props) {
  const [showDiv, setShowDiv] = useState(false);

  const handleHover = () => {
    setShowDiv(true);
  };

  const handleLeave = () => {
    setShowDiv(false);
  };

  return (
    <>
      <Grid sm={12} md={props.col} className="g-4">
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
              <Text h3 color="white">
                {props.title}
              </Text>
            </Col>
          </Card.Header>
          <Card.Body css={{ p: 0 }}>
            <Card.Image
              src="https://nextui.org/images/card-example-3.jpeg"
              objectFit="cover"
              width="100%"
              height="100%"
              alt="Relaxing app background"
            />
          </Card.Body>
          <Card.Footer
            className={`my-div ${showDiv ? "d-block" : "d-lg-none"}`}
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
      </Grid>
    </>
  );
}
