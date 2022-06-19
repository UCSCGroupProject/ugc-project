import React, { Component } from "react";

import LoginForm from "../../components/Forms/LoginForm";

export default class Login extends Component {
  render() {
    return (
      <div className="container my-3">
        <div className="row justify-content-center">
          <div className="col-4">
            <div className="fs-1 text-center">Login</div>
            <div className="lead text-center">Plese enter your credentials</div>
            <hr />

            <LoginForm />
          </div>
        </div>
      </div>
    );
  }
}
