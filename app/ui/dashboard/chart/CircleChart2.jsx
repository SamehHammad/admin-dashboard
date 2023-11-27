"use client"
import styles from "./chart.module.css"
import React, { PureComponent } from 'react';
import { ResponsiveContainer, PieChart, Pie, Legend } from 'recharts';

const data = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];
export default class CircleChart2 extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/simple-radar-chart-rjoc6';

  render() {
    return (
      <div className={styles.containerC}>
      <ResponsiveContainer width="100%" height="90%">
      <PieChart>
            <Pie dataKey="value" data={data} fill="#8884d8" label />
          </PieChart>
      </ResponsiveContainer>
    </div>
    );
  }
}
