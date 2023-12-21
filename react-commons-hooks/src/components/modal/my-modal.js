import { useState } from "react";
import { Button, Modal } from "react-bootstrap";

const MyModal = () => {
  const [show, setShow] = useState(false);

  const HandleClose = () => setShow(false);
  const HandleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={HandleShow}>
        Launch demo modal
      </Button>
      <Modal show={show} onHide={HandleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal Heading</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          Hello World, I'm convence that input create output.
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary">Close</Button>
          <Button variant="primary">Save changes</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default MyModal;
