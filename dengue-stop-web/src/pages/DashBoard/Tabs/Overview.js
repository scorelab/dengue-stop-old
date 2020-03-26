import React from "react";

import { Row, Col, Badge } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkedAlt, faUserAlt } from "@fortawesome/free-solid-svg-icons";
import ShowMarkers from "../components/ShowMarkers";

class OverView extends React.Component {
  constructor() {
    super();
    this.state = {
      reports: [
        {
          userName: "Santhosh",
          location: "Chennai",
          message: "Sample Message"
        },
        {
          userName: "Suresh",
          location: "Coimbatore",
          message: "Sample Message"
        }
      ],
      reportsByLocation: [
        {
          location: "Chennai",
          noOfReports: 20
        },
        {
          location: "Coimabatore",
          noOfReports: 40
        }
      ]
    };
  }
  render() {
    return (
      <div>
        <Row>
          <Col>
            <ShowMarkers />
          </Col>
          <Col>
            {/* Total Number of reports */}
            <div className="border border-muted p-3 mt-2">
              <h5>
                Recent Reports{" "}
                <Badge variant="primary">{this.state.reports.length}</Badge>
              </h5>
              <hr />
              {/* Report  */}
              {this.state.reports.slice(0, 4).map((val, index) => {
                return (
                  <div>
                    <Row>
                      <Col>
                        <p>
                          <FontAwesomeIcon
                            icon={faMapMarkedAlt}
                            className="tabIcon"
                          />
                          {val.location}
                        </p>
                      </Col>
                      <Col>
                        <p>
                          <FontAwesomeIcon
                            icon={faUserAlt}
                            className="tabIcon"
                          />
                          Reported By
                          <span className="font-weight-bold">
                            {" " + val.userName}
                          </span>
                        </p>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <p>{val.message}</p>
                      </Col>
                    </Row>
                    <hr />
                  </div>
                );
              })}
            </div>
            {/* Reports by location */}
            <div className="border border-muted p-3 mt-2">
              <h5>Number of reports by location</h5>
              <hr />
              {this.state.reportsByLocation.map((val, index) => {
                return (
                  <div>
                    <p>
                      <span className="font-weight-bold">{val.location}</span> :
                      <span className="font-weight-bold">
                        {" "}
                        {val.noOfReports}{" "}
                      </span>{" "}
                      Reports
                    </p>
                  </div>
                );
              })}
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}
export default OverView;
