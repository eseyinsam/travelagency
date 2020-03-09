import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import Reservations from "./pages/Reservations";
import SubmitDetails from "./pages/SubmitDetails";

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
          <Route path="/details">
            <SubmitDetails />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
