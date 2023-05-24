import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages";
import SeConnecter from "./pages/Connect";
import Activites from "./pages/Activity";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          Component={Home}
          exact
        />
        <Route
          path="/Activity"
          Component={Activites}
          exact
        />
        <Route
          path="/Connect"
          Component={SeConnecter}
          exact
        />
      </Routes>
    </Router>
  );
}

export default App;
