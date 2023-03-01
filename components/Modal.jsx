import { Modal, Button, Text } from "@nextui-org/react";

export default function Modals(props) {
  return (
    <Modal
      scroll
      blur
      preventClose
      open={props.modal}
      width="600px"
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
      className="text-dm text-black"
    >
      <Modal.Header>
        <Text id="modal-title" size={22} className="text-poppins my-3">
          {props.title}
        </Text>
      </Modal.Header>
      <Modal.Body>
        <Text id="modal-description">
          <p className="fs-5 mb-4">{props.desc}</p>
          {props.body}
        </Text>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.func(false)} auto flat color="error">
          Close
        </Button>
        <Button onClick={props.func(false)} auto>
          Agree
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
