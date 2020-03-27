import React from "react";

import { Row, Col, Badge, ListGroup, Button } from "react-bootstrap";
import LineGraph from "../components/LineGraph";
import PieChart from "../components/PieChart";
import MapModal from "../components/MapModal";

class ReportAnalysis extends React.Component {
  constructor() {
    super();
    this.state = {
      isPieChartOpen: false,
      isMapOpen: false,
      isLineGraphOpen: true
    };
  }

  showPieChart = () => {
    this.setState({
      isPieChartOpen: true,
      isMapOpen: false,
      isLineGraphOpen: false
    });
  };

  showLineGraph = () => {
    this.setState({
      isPieChartOpen: false,
      isMapOpen: false,
      isLineGraphOpen: true
    });
  };

  showMap = () => {
    this.setState({
      isMapOpen: true
    });
  };

  render() {
    return (
      <div className="mt-2 ">
        {/* card */}
        <Row>
          <Col md={3}>
            <div className="card">
              <div className="cardHeader cardHeader">
                <Row>
                  <Col md={9} className="d-flex  align-self-center">
                    <h4>Total Cases </h4>
                  </Col>
                  <Col
                    md={3}
                    className="d-flex justify-content-end align-self-center"
                  >
                    <Badge variant="primary">200</Badge>
                  </Col>
                </Row>
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
            <Row>
              <Col className="d-flex justify-content-end">
                {this.state.isLineGraphOpen ? (
                  <Button
                    variant="primary"
                    className="mr-2"
                    size={"sm"}
                    onClick={this.showPieChart}
                  >
                    Show Pie Chart
                  </Button>
                ) : null}
                {this.state.isPieChartOpen ? (
                  <Button
                    variant="primary"
                    className="mr-2"
                    size={"sm"}
                    onClick={this.showLineGraph}
                  >
                    Show Line Graph
                  </Button>
                ) : null}
                <Button variant="info" size={"sm"} onClick={this.showMap}>
                  Show in map
                </Button>
              </Col>
            </Row>
            {this.state.isLineGraphOpen ? <LineGraph /> : null}
            {this.state.isPieChartOpen ? <PieChart /> : null}
          </Col>
        </Row>

        {/* Map Modal */}
        <MapModal
          isOpen={this.state.isMapOpen}
          handleClose={e => this.setState({ isMapOpen: false })}
        />
      </div>
    );
  }
}
export default ReportAnalysis;
