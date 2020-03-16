import React from "react";
import "./App.css";
import DefaultHeader from "./container/Layout/DefaultHeader";
import DefaultFooter from "./container/Layout/DefaultFooter";
import Layout from "./container/Layout/Layout";
import "./scss/custom.scss";

function App() {
  return (
    <div className="App">
      <DefaultHeader />
      <Layout />
      <DefaultFooter />
    </div>
  );
}

export default App;
