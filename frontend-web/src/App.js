import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

import Navbar from "./components/Header/Navbar";
import SideBar from "./components/SideBar/SideBar";

import Login from "./pages/user/Login";
import SignUp from "./pages/user/SignUp";
import Home from "./pages/Home";
import StudentsList from "./pages/staff/StudentsList";

import StudentDashboard from "./pages/student/StudentDashboard";

function App() {
  return (
    <Router>
      <Navbar />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={SignUp} />
        <Route exact path="/student/register" component={SignUp} />
        <Route exact path="/student/dashboard" component={StudentDashboard} />
        <Route exact path="/admin" component={SignUp} />
        <Route exact path="/admin/studentsList" component={StudentsList} />
      </Switch>
    </Router>
  );
}

export default App;
