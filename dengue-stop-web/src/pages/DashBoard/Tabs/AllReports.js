import React from "react";

import {
  Row,
  Col,
  Button,
  Table,
  InputGroup,
  FormControl
} from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFilter,
  faSearch,
  faArrowUp,
  faArrowDown
} from "@fortawesome/free-solid-svg-icons";

class AllReports extends React.Component {
  render() {
    return (
      <div className="mt-3">
        <Row>
          <Col className="d-flex align-self-end">
            <h5>All Reports</h5>
          </Col>
          <Col className="d-flex justify-content-end">
            <Button variant="link" className="text-secondary">
              {" "}
              <FontAwesomeIcon icon={faFilter} /> Filter By
            </Button>
            <Button variant="light">
              <FontAwesomeIcon icon={faArrowUp} /> Recent
            </Button>
            <Button variant="light">
              <FontAwesomeIcon icon={faArrowDown} /> Old
            </Button>
          </Col>
        </Row>
        <hr />

        {/* Search Bar */}
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Search Records"
            aria-label="Search Records"
            aria-describedby="basic-addon2"
          />
          <InputGroup.Append>
            <Button variant="success">
              <FontAwesomeIcon icon={faSearch} /> Search
            </Button>
          </InputGroup.Append>
        </InputGroup>
        {/* Table */}
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Patient Name</th>
              <th>Symptoms</th>
              <th>City</th>
              <th>State</th>
              <th>Country</th>
              <th>Date</th>
              <th>Reported By</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Sumalesh</td>
              <td>Fever, Cold</td>
              <td>Cuddalore</td>
              <td>Tamil Nadu</td>
              <td>India</td>
              <td>29-01-2020</td>
              <td>Raghu</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Naveen</td>
              <td> Cold</td>
              <td>Guduvancery</td>
              <td>Tamil Nadu</td>
              <td>India</td>
              <td>21-01-2020</td>
              <td>Amrit</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Vignesh</td>
              <td>Fever</td>
              <td>Cuddalore</td>
              <td>Tamil Nadu</td>
              <td>India</td>
              <td>31-01-2020</td>
              <td>Raghu</td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}
export default AllReports;
