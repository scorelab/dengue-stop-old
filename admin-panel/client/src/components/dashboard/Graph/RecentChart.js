import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import Title from '../Title';

// Generate Sales Data
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

export default function Chart() {
  const theme = useTheme();

  return (
    <React.Fragment>
      <Title>Today</Title>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <XAxis dataKey="time" stroke={theme.palette.text.secondary} />
          <YAxis stroke={theme.palette.text.secondary}>
            <Label
              angle={270}
              position="left"
              style={{ textAnchor: 'middle', fill: theme.palette.text.primary }}
            >
              Reported Cases
            </Label>
          </YAxis>
          <Line type="monotone" dataKey="cases" stroke={theme.palette.primary.main} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}