import React, { Component } from "react";

// import Student_Sidebar from "../../components/SideBar/Student_Sidebar";
import SideBar from "../../components/SideBar/SideBar";

export default class StudentDashboard extends Component {
  render() {
    return (
      <div>
        <div>
          <SideBar />
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quasi
          ipsa inventore fugit veniam non pariatur ipsum eaque quo obcaecati?
        </div>
      </div>
    );
  }
}
