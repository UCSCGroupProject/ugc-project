import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";

import { v_email, v_required } from "../../utils/validator";

import authService from "../../services/authService";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [emailError, setEmailError] = useState("");

  const [password, setPassword] = useState("");
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [passwordError, setPasswordError] = useState("");

  const [loading, setLoading] = useState(false);
  const [resMessage, setResMessage] = useState("");

  let history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // init
    setIsEmailValid(true);
    setEmailError("");
    setIsPasswordValid(true);
    setPasswordError("");

    if (!v_required(email)) {
      setIsEmailValid(false);
      setEmailError("Email can not be empty.");
    }

    if (!v_email(email)) {
      setIsEmailValid(false);
      setEmailError("Enter a valid email.");
    }

    if (!v_required(password)) {
      setIsPasswordValid(false);
      setPasswordError("Password can not be empty.");
    }

    if (!isEmailValid || !isPasswordValid) {
      return;
    }

    // all valid then submit
    // loading
    setLoading(true);
    setResMessage("");

    authService.login(email, password).then(
      () => {
        history.push("/");
        window.location.reload();
      },
      (error) => {
        const res =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setResMessage(res);

        // loading
        setLoading(false);
      }
    );
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="row g-3">
          {/* email */}
          <div className="form-group">
            <label htmlFor="emailInput" className="form-label">
              Email
            </label>
            <input
              type="text"
              className={
                isEmailValid ? "form-control" : "form-control is-invalid"
              }
              id="emailInput"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div
              className={isEmailValid ? "valid-feedback" : "invalid-feedback"}
            >
              {emailError}
            </div>
          </div>

          {/* password */}
          <div className="form-group">
            <label htmlFor="passwordInput" className="form-label">
              Password
            </label>
            <input
              type="password"
              className={
                isPasswordValid ? "form-control" : "form-control is-invalid"
              }
              id="passwordInput"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div
              className={
                isPasswordValid ? "valid-feedback" : "invalid-feedback"
              }
            >
              {passwordError}
            </div>
          </div>

          <div className="form-group">
            <button
              className="btn btn-primary btn-block w-100 p-2"
              disabled={loading}
            >
              Login
              {loading && (
                <span className="spinner-border spinner-border-sm"></span>
              )}
            </button>
          </div>

          {resMessage && (
            <div className="form-group mt-3">
              <div className="alert alert-danger" role="alert">
                <div className="text-center">{resMessage}</div>
              </div>
            </div>
          )}
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
