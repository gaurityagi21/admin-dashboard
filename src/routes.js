// src/routes.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Calendar from './pages/Calendar';
import Kanban from './pages/Kanban';
import Reports from './pages/Reports';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';

const AppRoutes = () => (
  <Router>
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ marginLeft: 240, width: '100%' }}>
        <Navbar />
        <div style={{ marginTop: 64, padding: 20 }}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/kanban" element={<Kanban />} />
            <Route path="/reports" element={<Reports />} />
          </Routes>
        </div>
      </div>
    </div>
  </Router>
);

export default AppRoutes;
