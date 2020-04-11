import React, { Component } from "react";
import {
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
  ComposedChart,
  Area,
  Bar
} from "recharts";
function createData(time, cases) {
    return { time, cases };
  }
  
  const data = [
    createData('1st March', 1),
    createData('8th March', 300),
    createData('15th March', 600),
    createData('22nd March', 1200),
    createData('29th March', 2400),
    createData('4th April', 4000),
    createData('11th April', 7000),
    createData('18th April', 12000),
  ];

class Chart extends Component {
  render() {
    return (
        <div style={{ height: "75vh" }} className="container valign-wrapper">
        <div className="row">
          <div className="col s12 center-align">
        <h2 style={{ textAlign: "center" }}>Line Chart</h2>
        <LineChart
          width={730}
          height={250}
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="10 10" />
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="cases" stroke="#8884d8" />
        </LineChart>
        </div>
        </div>
        </div>
    );
  }
}
export default Chart;