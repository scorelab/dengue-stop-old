import React from "react";

import { Row, Col, Nav, Tab } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle, faInfoCircle } from "@fortawesome/free-solid-svg-icons";

import "./Home.css";

import Header from "../../components/Header";

// tabs
import OverView from "./Tabs/Overview";
import ReportAnalysis from "./Tabs/ReportAnalysis";
import AllReports from "./Tabs/AllReports";

class Home extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div>
          <Tab.Container id="left-tabs-example" defaultActiveKey="allReports">
            <Row className="wrapper">
              <Col md={2} className="sideBar">
                <p className="smallText">NAVIGATION</p>
                <Nav variant="pills" className="flex-column">
                  <Nav.Item>
                    <Nav.Link eventKey="overview">
                      <FontAwesomeIcon
                        icon={faInfoCircle}
                        className="tabIcon"
                      />
                      Overview
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="analysis">
                      <FontAwesomeIcon
                        icon={faPlusCircle}
                        className="tabIcon"
                      />
                      Report Analysis
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="allReports">
                      <FontAwesomeIcon
                        icon={faPlusCircle}
                        className="tabIcon"
                      />
                      All Reports
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col md={10} className="pr-4">
                <Tab.Content>
                  <Tab.Pane eventKey="overview">
                    <OverView />
                  </Tab.Pane>
                  <Tab.Pane eventKey="analysis">
                    <ReportAnalysis />
                  </Tab.Pane>
                  <Tab.Pane eventKey="allReports">
                    <AllReports />
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </div>
      </div>
    );
  }
}
export default Home;
