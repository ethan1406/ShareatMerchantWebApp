import React, { Fragment } from "react";
import { Link, navLink, useHistory } from "react-router-dom";
import { Button, nav } from "react-bootstrap";

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
              <img src="/assets/img/logo.jpg" className="site-logo img-fluid" />
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
                  <a className="nav-link" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item mr-5">
                  <a className="nav-link" href="#">
                    Customers Loyalty
                  </a>
                </li>
                <li className="nav-item mr-5">
                  <a className="nav-link" href="#">
                    Have a Question
                  </a>
                </li>
                <li className="nav-item mr-5">
                  <a className="nav-link" href="#">
                    Boiling Point
                  </a>
                </li>
              </ul>
              <ul className="navbar-nav mt-2 mt-lg-0 float-lg-right">
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    {/* <!-- <i className="far fa-user-circle fa-2x"></i> --> */}
                    <img
                      src="/assets/img/profile-icon.png"
                      className="img-fluid profile-pic"
                    />
                  </a>
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
