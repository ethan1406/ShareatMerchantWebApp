import React from "react";
import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./scss/custom.scss";
import Home from "./views/Home";
import CustomersLoyalty from "./views/CustomersLoyalty";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Route path="/" exact component={Home} />
          <Route path="/customersLoyalty" component={CustomersLoyalty} />
        </div>
      </Router>
    </div>
  );
}

export default App;
