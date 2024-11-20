import React from "react";
import Header from "../components/Header";
import Dashboard from "../components/Dashboard/Dashboard";

const DashboardPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />
      <Dashboard />
    </div>
  );
};

export default DashboardPage;