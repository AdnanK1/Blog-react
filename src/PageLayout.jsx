import React from "react";
import { Navbar } from "./components/Navbar";
import { Outlet } from "react-router-dom";

export const PageLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};
