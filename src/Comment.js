import React, { useState } from "react";
import { Modal } from "react-bootstrap";
function Comment(props) {
  return (
    <>
      <Modal.Dialog>
        <Modal.Header>
          <Modal.Title>Comments:</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>{props.body}</p>
        </Modal.Body>

        <Modal.Footer>
          <button variant="secondary">like</button>
          <button variant="primary">Dislike</button>
        </Modal.Footer>
      </Modal.Dialog>
    </>
  );
}
export default Comment;
