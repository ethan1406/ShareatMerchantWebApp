import React from "react";
import DefaultFooter from "../container/Layout/DefaultFooter";
import DefaultHeader from "../container/Layout/DefaultHeader";
import Layout from "../container/Layout/Layout";

const Home = () => {
  return (
    <div>
      <DefaultHeader />
      <Layout />
      <DefaultFooter />
    </div>
  );
};

export default Home;
