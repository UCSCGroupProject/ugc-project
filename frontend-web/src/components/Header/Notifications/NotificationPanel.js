import React from "react";
import { Link } from "react-router-dom";

import "./NotificationPanel.css";

import Notification from "./Notification";

function NotificationPanel() {
  return (
    <div className="nav-item dropdown">
      <a
        href="#"
        className="nav-link dropdown-toggle mx-3"
        data-bs-toggle="dropdown"
      >
        <i className="bi bi-bell" />
        <span className="position-absolute top-25 start-75 translate-middle badge rounded-pill bg-danger">
          3+
          <span className="visually-hidden">unread messages</span>
        </span>
      </a>
      <div className="dropdown-menu dropdown-menu-end">
        <div className="notification-header">
          <h6 className="dropdown-header">
            NOTIFICATIONS
            <span className="badge bg-danger ms-2">3 New</span>
          </h6>
        </div>
        <div className="drop-content">
          {/* notifications */}
          <Notification
            icon="bi bi-exclamation-triangle-fill"
            type="warning"
            to="/login"
            title="Warning notification"
            content="Lorem ipsum, dolor sit amet consectetur adipisicing elit"
            time="Just now"
          />
          <Notification
            icon="bi bi-exclamation-circle-fill"
            type="danger"
            to="/login"
            title="Task failed"
            content="lorem adjasdbald jlasndljansdlakndlaksndaljd"
            time="30 minutes ago"
          />
          <Notification
            icon="bi bi-check-square-fill"
            type="success"
            to="/login"
            title="Email activated"
            content="sldknfslg fkbfkajwlbfjlakfafl ajfalwfkankfalg  glaeg"
            time="Today"
          />
        </div>
        <div className="notification-footer">
          <Link to={"/login"} className="dropdown-item">
            <span className="p-2">
              <i className="bi bi-eye"></i>
              <span className="mx-2">Read all notifications</span>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotificationPanel;
