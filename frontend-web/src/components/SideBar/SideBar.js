import React from "react";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { useState } from "react";

import "./SideBar.css";
import { SidebarData } from "./SidebarData";

function SideBar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => {
    setSidebar(!sidebar);
  };

  return (
    <div>
      <div className="topbar">
        <Link to="#" className="menu-bars">
          <FaIcons.FaBars onClick={showSidebar} />
        </Link>
      </div>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items">
          <li className="mb-1">
            <button
              className="nav-title"
              data-bs-toggle="collapse"
              data-bs-target="#home-collapse"
              aria-expanded="true"
            >
              <i className="bi bi-award" /> Course
            </button>
            <div className="collapse show" id="home-collapse">
              <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small ">
                <li className="nav-link">
                  <Link to="#">Students</Link>
                </li>
                <li className="nav-link">
                  <Link to="#">Reports</Link>
                </li>
                <li className="nav-link">
                  <Link to="#">Updates</Link>
                </li>
              </ul>
            </div>
          </li>
          <li className="mb-1">
            <button
              className="nav-title"
              data-bs-toggle="collapse"
              data-bs-target="#dashboard-collapse"
              aria-expanded="false"
            >
              <i className="bi bi-bank" /> University
            </button>
            <div className="collapse" id="dashboard-collapse">
              <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                <li className="nav-link">
                  <Link to="#">Overview</Link>
                </li>
                <li className="nav-link">
                  <Link to="#">Settings</Link>
                </li>
                <li className="nav-link">
                  <Link to="#">Content</Link>
                </li>
              </ul>
            </div>
          </li>
          {/* {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })} */}
          <li className="navbar-back" onClick={showSidebar}>
            <Link to="#" className="menu-bars">
              <AiIcons.AiOutlineClose />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default SideBar;
