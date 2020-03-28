import React from "react";
import { Pie } from "react-chartjs-2";

const data = {
  labels: ["Deaths", "Active Cases", "Recovered"],
  datasets: [
    {
      data: [10, 90, 20],
      backgroundColor: ["#FF6384", "#FFCE56", "#27ae60"],
      hoverBackgroundColor: ["#FF6384", "#FFCE56", "#27ae60"]
    }
  ]
};

export default class PieChart extends React.Component {
  render() {
    return (
      <div>
        <h5>Total Cases</h5>
        <Pie data={data} />
      </div>
    );
  }
}
