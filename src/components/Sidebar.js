import React from "react";
import "./sidebar.css";
import logo from "../Images/logo.png";
const Sidebar = () => {
  return (
    <div className="sidebar ">
      <div className="sidebar_wrapper w-100 h-100 ">
        <div className="logo_wrapper">
          <img src={logo} alt="" />
        </div>
        {/* =========>>Links<<<<<<<<<<< */}
        <ul>
          <li>DashBoard</li>
          <li>Analytics</li>
          <li>Stake</li>
          <li>
            Bond
            <ul>
              <li>XIV-BNB</li>
            </ul>
          </li>
          <li></li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
