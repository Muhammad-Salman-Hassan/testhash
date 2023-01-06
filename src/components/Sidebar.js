import React from "react";
import "./sidebar.css";
import logo from "../Images/logo.png";
import dashboard from "../Images/Vector.png"

import buypass from "../Images/Vector (4).png"
import stake from "../Images/Vector (2).png"
import bond from "../Images/Vector (3).png"
import Analytics from "../Images/Vector (5).png"
import document from "../Images/Vector (6).png"
import twitter from "../Images/twitter.png"
import discord from "../Images/discord.png"
import telegram from "../Images/telegram.png"
const Sidebar = () => {
  return (
    <div className="sidebar ">
      <div className="sidebar_wrapper w-100  ">
        <div className="logo_wrapper">
          <img src={logo} alt="" />
        </div>
   
        <ul>
          <li><img src={dashboard} alt="" /> <span className="dashboard_link">DashBoard</span></li>
          <li><img src={Analytics} alt="" /> <span className="dashboard_link">Analytics</span></li>
          <li><img src={stake} alt="" /> <span className="dashboard_link">Stake</span></li>
          <li>
          <img src={bond} alt="" /> <span className="dashboard_link">Bond</span>
            
          </li>
          <ul className="bondToggle">
            <span className="Bond_Discount">Bond Discount</span>
              <li><span>XIV-BNB LP</span> <span>-16.28%</span></li>
              <li><span>PASS-BNB LP</span> <span>-16.28%</span></li>
              <li><span>XIV</span> <span>-16.28%</span></li>
              <li><span>BNB</span> <span>-16.28%</span></li>
              <li><span>BUSD</span> <span>-16.28%</span></li>
            </ul>
          <li><img src={buypass} alt="" /> <span className="dashboard_link">Buy Pass</span></li>
          <li><img src={Analytics} alt="" /> <span className="dashboard_link">Price Chart</span></li>
          <li><img src={document} alt="" /> <span className="dashboard_link">Documentation</span></li>
        </ul>

        <div className="social_wrapper">
          <span><img src={twitter} alt="" /></span>
          <span><img src={discord} alt="" /></span>
          <span><img src={telegram} alt="" /></span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
