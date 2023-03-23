import { Avatar, Card } from "@nextui-org/react";
import Link from "next/link";
import { useRandomPodcastPhoto } from "./GetRandomPhotos";

export default function LatestListsCard(props) {
  const { photoUrl } = useRandomPodcastPhoto({ id: props.id });
  return (
    <>
      <li
        className="list-group-item ps-0 text-white"
        style={{ backgroundColor: "inherit" }}
      >
        <Link href={`blog/${props.url}`} className="text-decoration-none">
          <Card
            isPressable
            isHoverable
            css={{ mw: "auto", bgColor: "inherit" }}
          >
            <Card.Body className="px-0 py-2">
              <div className="d-flex align-items-center">
                <h1 className="me-3 me-lg-4 text-white text-shadow-3">{`0${props.order}.`}</h1>
                <Avatar src={photoUrl} size="xl" squared />
                <div className="ms-4">
                  <h5 className="mb-0 text-white">{props.title}</h5>
                  <p
                    className="mb-0 text-muted fs-7"
                    style={{ fontWeight: "500" }}
                  >
                    {props.tag}
                  </p>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Link>
      </li>
      <hr />
    </>
  );
}
