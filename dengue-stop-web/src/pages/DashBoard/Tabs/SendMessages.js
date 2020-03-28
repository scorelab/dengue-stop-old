import React from "react";

import {
  Row,
  Col,
  Button,
  Badge,
  InputGroup,
  FormControl
} from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserAlt, faPaperPlane } from "@fortawesome/free-solid-svg-icons";

import "../css/SendMessages.css";

class SendMessages extends React.Component {
  constructor() {
    super();
    this.state = {
      people: [
        {
          name: "Sumalesh",
          messageCount: 3
        },
        {
          name: "Santhosh",
          messageCount: 9
        }
      ]
    };
  }
  render() {
    return (
      <div className="mt-3">
        <Row>
          <Col>
            <h5>Send Messages</h5>
          </Col>
          <Col className="d-flex justify-content-end">
            <Button variant="primary">New BroadCast Message</Button>
          </Col>
        </Row>
        <hr />

        {/* ChaT box */}
        <Row>
          <Col md={3}>
            <span className="font-weight-bold text-muted">PEOPLE</span>
            <hr />
            {this.state.people.map((val, index) => {
              return (
                <div key={index} className="mb-4 ">
                  <Row>
                    <Col md={10}>
                      <FontAwesomeIcon
                        icon={faUserAlt}
                        className="mr-2 text-secondary "
                      />
                      <span className="font-weight-bold text-secondary">
                        {val.name}
                      </span>
                    </Col>
                    <Col md={2}>
                      <Badge variant="primary">{val.messageCount}</Badge>
                    </Col>
                  </Row>
                  <hr />
                </div>
              );
            })}
          </Col>
          <Col md={8} className="border border-muted p-0 ml-4">
            {/* Chat header */}
            <div className="chatHeader">
              <h5>
                {" "}
                <FontAwesomeIcon
                  icon={faUserAlt}
                  className="mr-2 text-white "
                />{" "}
                Sumalesh
              </h5>
            </div>
            <div className="chatBody">
              <div className="messageFrom">Sample Message</div>
              <div className="messageTo">Sample Message</div>
            </div>
            <div className="chatFooter">
              <InputGroup className="">
                <FormControl
                  placeholder="Recipient's username"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
                <InputGroup.Append>
                  <Button variant="primary">
                    <FontAwesomeIcon icon={faPaperPlane} />
                  </Button>
                </InputGroup.Append>
              </InputGroup>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}
export default SendMessages;
