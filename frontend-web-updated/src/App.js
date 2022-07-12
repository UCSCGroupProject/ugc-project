import React, { Component, Suspense } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import "./scss/style.scss";

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);

// Containers
const UGCLayout = React.lazy(() => import("./layout/UGCLayout"));

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Suspense fallback={loading}>
          <Routes>
            <Route path="*" name="Home" element={<UGCLayout />} />
          </Routes>
        </Suspense>
      </HashRouter>
    );
  }
}

export default App;
