import React, { Component } from "react";

import Stu_SignUpForm from "../../components/Forms/Student/Stu_SignUpForm";

export default class SignUp extends Component {
  render() {
    return (
      <div className="container my-3">
        <div className="row justify-content-center">
          <div className="col-10">
            <div className="fs-1 text-center">Register as a Student</div>
            <div className="lead text-center">
              Plese enter following details correctly
            </div>
            <hr />

            <Stu_SignUpForm />
          </div>
        </div>
      </div>
    );
  }
}
