import React from "react";

import { Modal } from "react-bootstrap";
import ShowCirculareMap from "./ShowCircularMap";

class MapModal extends React.Component {
  render() {
    return (
      <Modal show={this.props.isOpen} onHide={this.props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Affected areas in Chennai</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ShowCirculareMap />
        </Modal.Body>
        <Modal.Footer>=</Modal.Footer>
      </Modal>
    );
  }
}
export default MapModal;
