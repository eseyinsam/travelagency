import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import Reservations from "./pages/Reservations";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/reservations">
            <Reservations />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
