import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";

import NotificationPanel from "./Notifications/NotificationPanel";

import ugcLogo from "./img/ugcLogo.png";

import "./Navbar.css";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
        <div className="container-fluid">
          <div className="sidebar-toggler">
            <Link to="#" className="menu-bars">
              <FaIcons.FaBars />
            </Link>
          </div>
          <Link to={"/"} className="navbar-brand">
            <img
              src={ugcLogo}
              height="40"
              className="d-inline-block align-top"
              alt=""
            />
          </Link>
          <button
            type="button"
            className="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav">
              <Link to={"/student/dashboard"} className="nav-item nav-link">
                Dashboard
              </Link>
              <div className="nav-item dropdown">
                <a
                  href="#"
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  Messages
                </a>
                <div className="dropdown-menu">
                  <a href="#" className="dropdown-item">
                    Inbox
                  </a>
                  <a href="#" className="dropdown-item">
                    Sent
                  </a>
                  <a href="#" className="dropdown-item">
                    Drafts
                  </a>
                </div>
              </div>
              <a href="#" className="nav-item nav-link disabled" tabIndex="-1">
                Reports
              </a>
            </div>
            <div className="navbar-nav ms-auto">
              {/* Notifications */}
              <NotificationPanel />
              <Link to={"/register"} className="nav-item nav-link">
                Sign up
              </Link>
              <Link to={"/login"} className="nav-item nav-link">
                Login
              </Link>
              <div className="nav-item dropdown">
                <a
                  href="#"
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  <i className="bi bi-gear" />
                  <span className="p-1">Dhanushka</span>
                </a>
                <div className="dropdown-menu dropdown-menu-end">
                  <Link to={"/login"} className="dropdown-item p-2">
                    <i className="bi bi-person-circle"></i>
                    <span className="p-2">Edit Profile</span>
                  </Link>
                  <Link to={"/login"} className="dropdown-item p-2">
                    <i className="bi bi-envelope"></i>
                    <span className="p-2">My Inbox</span>
                  </Link>
                  <Link to={"/login"} className="dropdown-item p-2">
                    <i className="bi bi-list-task"></i>
                    <span className="p-2">Task</span>
                  </Link>
                  <hr className="dropdown-divider" />
                  <Link to={"/login"} className="dropdown-item p-2">
                    <i className="bi bi-power"></i>
                    <span className="p-2">Logout</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}
