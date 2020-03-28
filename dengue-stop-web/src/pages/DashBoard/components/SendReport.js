import React from "react";

import { Modal, Button, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
class SendReport extends React.Component {
  render() {
    return (
      <Modal show={this.props.isOpen} onHide={this.props.handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Report #1</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col>
              <p>
                Patient Name : <span className="font-weight-bold">Hello</span>
              </p>
            </Col>
            <Col>
              <p>
                Symptoms : <span className="font-weight-bold">Fever,Cold</span>
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>
                City : <span className="font-weight-bold">Cuddalore</span>
              </p>
            </Col>
            <Col>
              <p>
                State and Country :{" "}
                <span className="font-weight-bold">TamilNadu , India</span>
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>
                Address :{" "}
                <span className="font-weight-bold">
                  123, Main Street,Old Washermenpet,Cuddalore
                </span>
              </p>
            </Col>
            <Col>
              <p>
                Reported By : <span className="font-weight-bold">Raghu</span>
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>
                Patient Contact Number :{" "}
                <span className="font-weight-bold">123456789</span>
              </p>
            </Col>
            <Col>
              <p>
                Reporter Contact Number :{" "}
                <span className="font-weight-bold">097765432</span>
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>
                <span className="font-weight-bold">Message : </span>
                This is a test message
              </p>
            </Col>
          </Row>
          <hr />
          <h5>Send Report</h5>
          <hr />
          <p>
            <span className="font-weight-bold">Helpcenter email ID :</span>
            example@example.com
          </p>
          <p>
            <span className="font-weight-bold">
              Nearby district office helpline :
            </span>{" "}
            12330998
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="info">Close</Button>
          <Button variant="primary">
            <FontAwesomeIcon icon={faPaperPlane} /> Send Report
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
export default SendReport;
