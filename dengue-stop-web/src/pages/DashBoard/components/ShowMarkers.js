import React from "react";

class ShowMarkers extends React.Component {
  render() {
    return (
      <div>
        <iframe
          src="/maps/showMarkers.html"
          style={{ height: 550, width: 500, border: "none" }}
        />
      </div>
    );
  }
}
export default ShowMarkers;
