import React from "react";

import { Row, Col, Badge, ListGroup } from "react-bootstrap";
import LineGraph from "../components/LineGraph";

class Reports extends React.Component {
  render() {
    return (
      <div className="mt-2 ">
        {/* card */}
        <Row>
          <Col md={3}>
            <div className="card">
              <div className="cardHeader cardHeader">
                <h4>Total Cases</h4>
              </div>
              <div className="cardBody p-2">
                <Row>
                  <Col md={8}>
                    <p>
                      <Badge variant="warning"> </Badge>
                      <span className="ml-3">Active Cases</span> :{" "}
                    </p>
                  </Col>
                  <Col
                    md={4}
                    className="d-flex justify-content-end align-self-start"
                  >
                    {" "}
                    <Badge variant="warning">20</Badge>
                  </Col>
                </Row>
                <Row>
                  <Col md={9}>
                    <p>
                      <Badge variant="success"> </Badge>
                      <span className="ml-3">Recovered Cases</span> :{" "}
                    </p>
                  </Col>
                  <Col
                    md={3}
                    className="d-flex justify-content-end align-self-start"
                  >
                    {" "}
                    <Badge variant="success">40</Badge>
                  </Col>
                </Row>
                <Row>
                  <Col md={8}>
                    <p>
                      <Badge variant="danger"> </Badge>
                      <span className="ml-3">Deaths</span> :{" "}
                    </p>
                  </Col>
                  <Col
                    md={4}
                    className="d-flex justify-content-end align-self-start"
                  >
                    {" "}
                    <Badge variant="danger">2</Badge>
                  </Col>
                </Row>
              </div>
            </div>

            {/* Report recorded cirties */}
            <Row className="mt-3">
              <Col>
                <div className="border border-muted p-2 mt-2">
                  <p className="font-weight-bold">
                    Select a city to view details
                  </p>

                  <ListGroup>
                    <ListGroup.Item active>Chennai</ListGroup.Item>
                    <ListGroup.Item>Coimbatore</ListGroup.Item>
                    <ListGroup.Item>Mumbai</ListGroup.Item>
                    <ListGroup.Item>Bangalore</ListGroup.Item>
                  </ListGroup>
                </div>
              </Col>
            </Row>
          </Col>

          {/* right side content */}
          <Col md={9}>
            <LineGraph />
          </Col>
        </Row>
      </div>
    );
  }
}
export default Reports;
