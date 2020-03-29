import React, { Fragment } from "react";

import { Button, nav } from "react-bootstrap";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Layout from "./Layout";
import CustomerLayolty from "../../views/CustomersLoyalty";
import { NavLink } from "react-router-dom";
import { Auth } from 'aws-amplify'

const DefaultHeader = () => {
  return (
    <Fragment>
      <header>
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg">
            <a
              className="navbar-brand text-orange text-center col-lg-2 col-6"
              href="#"
            >
              <img src="/assets/img/logo.jpg" className="site-logo img-fluid" alt="Shareat"/>
            </a>
            <Button
              className="navbar-toggler"
              type="Button"
              data-toggle="collapse"
              data-target="#navbarTogglerDemo02"
              aria-controls="navbarTogglerDemo02"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon py-2">
                <i aria-hidden="true" className="fa fa-bars text-orange"></i>
              </span>
            </Button>
            <div
              className="collapse navbar-collapse col-lg-10"
              id="navbarTogglerDemo02"
            >
              <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className="nav-item  mr-5 active">
                  <NavLink to="/" exact>
                    Home
                  </NavLink>
                </li>
              </ul>
              <ul className="navbar-nav mt-2 mt-lg-0 float-lg-right">
                <li className="nav-item">
                  <button onClick={()=> Auth.signOut()} style={{backgroundColor: 'transparent', borderColor: 'transparent'}}>
                    Log Out
                  </button>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </Fragment>
  );
};

export default DefaultHeader;
