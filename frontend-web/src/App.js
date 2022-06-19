import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/Header/Navbar";

import Login from "./pages/user/Login";
import SignUp from "./pages/user/SignUp";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Navbar />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={SignUp} />
        <Route exact path="/student/register" component={SignUp} />
        <Route exact path="/admin" component={SignUp} />
      </Switch>
    </Router>
  );
}

export default App;
