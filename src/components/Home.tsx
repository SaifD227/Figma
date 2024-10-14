"use client";

import React, { useState } from "react";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Dashboard from "../components/Dashboards/Dashboard";

const Home: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      <Sidebar isOpen={isSidebarOpen} />
      <Navbar toggleSidebar={toggleSidebar} />

      <nav>
        <Dashboard />
      </nav>
    </div>
  );
};

export default Home;
