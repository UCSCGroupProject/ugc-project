import React from "react";
import { Link } from "react-router-dom";

import "./Notification.css";

function Notification(props) {
  return (
    <div className="notification">
      <div className="container">
        <div className="row py-2">
          <div className="col-2">
            <i className={`${props.icon} fs-2 text-${props.type}`}></i>
          </div>
          <div className="col-9">
            <Link
              to={props.to}
              className={`fw-semibold notification-link text-${props.type}`}
            >
              {props.title}
            </Link>
            <div className="fw-light w-100">{props.content}</div>
            <div className="text-muted mt-2 fw-light small">{props.time}</div>
          </div>
          <div className="col-1">
            <div className="close">
              <i className="bi bi-x-circle"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Notification;
