import React, { Component } from "react";

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

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

export default class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.handleLogin = this.handleLogin.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);

    this.state = {
      username: "",
      password: "",
      loading: false,
      message: "",
    };
  }

  onChangeUsername(e) {
    this.setState({ username: e.target.value });
  }

  onChangePassword(e) {
    this.setState({ password: e.target.value });
  }

  handleLogin(e) {
    e.preventDefault();

    this.setState({
      message: "",
      loading: true,
    });

    this.form.validateAll();

    if (this.checkBtn.context._errors.length === 0) {
      authService.login(this.state.username, this.state.password).then(
        () => {
          // Navigate to profile page
          console.log(this.props.history);
          this.props.history.push("/");
          window.location.reload();
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          this.setState({
            loading: false,
            message: resMessage,
          });
        }
      );
    } else {
      this.setState({
        loading: false,
      });
    }
  }

  render() {
    return (
      <div>
        <Form
          onSubmit={this.handleLogin}
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
                  validations={[v_required]}
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
                  validations={[v_required]}
                />
              </div>

              <div className="form-group">
                <button
                  className="btn btn-primary btn-block w-100 p-3"
                  disabled={this.state.loading}
                >
                  Login
                  {this.state.loading && (
                    <span className="spinner-border spinner-border-sm"></span>
                  )}
                </button>
              </div>
            </div>
          )}

          {this.state.message && (
            <div className="form-group mt-3">
              <div className="alert alert-danger" role="alert">
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
