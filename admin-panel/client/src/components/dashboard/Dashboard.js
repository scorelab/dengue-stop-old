import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import "./Dashboard.css";
import TimelineIcon from "@material-ui/icons/Timeline";
import FireplaceIcon from '@material-ui/icons/Fireplace';
import AssessmentIcon from '@material-ui/icons/Assessment';
import Button from "@material-ui/core/Button";
import RedditIcon from '@material-ui/icons/Reddit';
import EnhancedTable from "./Report"

class Dashboard extends Component {
  

  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  
  render() {
    const { user } = this.props.auth;
    return (
      <div style={{ height: "75vh" }} className="container valign-wrapper">
        <div className="row">
          <div className="col s12 center-align">
            <h5>
              <b>Hey there,</b> {user.name.split(" ")[0]}
            </h5>
            <div > 
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around"
                }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  startIcon={<TimelineIcon />}
                >
                  Graph
                </Button>
                <Button variant="contained" color="secondary" startIcon = {<FireplaceIcon/>}>
                  HeatMaps
                </Button>
                <Button variant="contained" color="primary" startIcon = {<AssessmentIcon/>}>
                  Analysis
                </Button>
                <Button variant="contained" color="secondary" startIcon = {<RedditIcon/>}>
                  Prediction
                </Button>
              </div>
              <h4 id="title">Recent reported cases</h4>
            
              <div style = {{width: "1000px"}}><EnhancedTable/></div>
              
            </div>
            <button
              style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem"
              }}
              onClick={this.onLogoutClick}
              className="btn btn-large waves-effect waves-light hoverable blue accent-3"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(mapStateToProps, { logoutUser })(Dashboard);


