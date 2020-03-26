import React from "react";

class ShowCirculareMap extends React.Component {
  render() {
    return (
      <div>
        <iframe
          src="/maps/showCircles.html"
          style={{ height: 300, width: 480, border: "none" }}
        />
      </div>
    );
  }
}
export default ShowCirculareMap;
