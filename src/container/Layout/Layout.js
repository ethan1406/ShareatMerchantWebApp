import React, { Fragment } from "react";
import BolingCrab from "../../views/BoilingCrab";
import Offers from "../../views/Offers";
import VisitorsRewards from "../../views/VisitorsRewards";

const Layout = () => {
  return (
    <div className="maincontainer">
      <BolingCrab />
      <VisitorsRewards />
    </div>
  );
};

export default Layout;
