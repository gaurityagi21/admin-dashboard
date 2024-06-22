// src/pages/Dashboard.js
import React from 'react';
import CustomLineChart from '../charts/LineChart';
import CustomBarChart from '../charts/BarChart';

const Dashboard = () => (
  <div>
    <h2>Dashboard</h2>
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      <CustomLineChart />
      <CustomBarChart />
    </div>
  </div>
);

export default Dashboard;
