import React, { Component } from "react";

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

import { isEmail } from "validator";

import authService from "../../services/authService";

const v_required = (value) => {
  if (!value) {
    return (
      <div className="text-danger small my-1" role="alert">
        This field is required
      </div>
    );
  }
};

const v_username = (value) => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className="text-danger small my-1" role="alert">
        Username must be between 3 to 20 characters
      </div>
    );
  }
};

const v_email = (value) => {
  if (!isEmail(value)) {
    return (
      <div className="text-danger small my-1" role="alert">
        This is not a valid email
      </div>
    );
  }
};

const v_password = (value) => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="text-danger small my-1" role="alert">
        Password must be between 6 to 40 characters
      </div>
    );
  }
};

export default class SignUpForm extends Component {
  constructor(props) {
    super(props);

    this.handleRegister = this.handleRegister.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);

    this.state = {
      username: "",
      email: "",
      password: "",
      successful: false,
      message: "",
    };
  }

  onChangeUsername(e) {
    this.setState({ username: e.target.value });
  }

  onChangeEmail(e) {
    this.setState({ email: e.target.value });
  }

  onChangePassword(e) {
    this.setState({ password: e.target.value });
  }

  // form submission
  handleRegister(e) {
    e.preventDefault();

    this.setState({ message: "", successful: false });

    this.form.validateAll();

    if (this.checkBtn.context._errors.length === 0) {
      authService
        .register(this.state.username, this.state.email, this.state.password)
        .then(
          (response) => {
            this.setState({
              message: response.data.message,
              successful: true,
            });
          },
          (error) => {
            const resMessage =
              (error.response &&
                error.response.data &&
                error.response.data.message) ||
              error.message ||
              error.toString();

            this.setState({
              successful: false,
              message: resMessage,
            });
          }
        );
    }
  }

  render() {
    return (
      <div>
        <Form
          onSubmit={this.handleRegister}
          ref={(c) => {
            this.form = c;
          }}
        >
          {!this.state.successful && (
            <div>
              <div className="form-group mb-2">
                <label htmlFor="username" className="form-label">
                  Username
                </label>
                <Input
                  type="text"
                  className="form-control"
                  name="username"
                  value={this.state.username}
                  onChange={this.onChangeUsername}
                  validations={[v_required, v_username]}
                />
              </div>

              <div className="form-group mb-2">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <Input
                  type="text"
                  className="form-control"
                  name="email"
                  value={this.state.email}
                  onChange={this.onChangeEmail}
                  validations={[v_required, v_email]}
                />
              </div>

              <div className="form-group mb-4">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <Input
                  type="text"
                  className="form-control"
                  name="password"
                  value={this.state.password}
                  onChange={this.onChangePassword}
                  validations={[v_required, v_password]}
                />
              </div>

              <div className="form-group">
                <button className="btn btn-primary btn-block w-100 p-3">
                  Sign Up
                </button>
              </div>
            </div>
          )}

          {this.state.message && (
            <div className="form-group mt-3">
              <div
                className={
                  this.state.successful
                    ? "alert alert-success"
                    : "alert alert-danger"
                }
                role="alert"
              >
                <div className="text-center">{this.state.message}</div>
              </div>
            </div>
          )}

          <CheckButton
            style={{ display: "none" }}
            ref={(c) => {
              this.checkBtn = c;
            }}
          />
        </Form>
      </div>
    );
  }
}
